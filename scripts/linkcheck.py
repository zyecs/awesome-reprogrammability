#!/usr/bin/env python3
"""
Link checker for repository content.

Features
- Extracts URLs from YAML files under lists/ and common markdown files
- Uses HEAD with retries; falls back to GET when HEAD is unsupported
- Classifies results (ok, warning, failed) and emits a summary
- Exits nonzero on hard failures

Usage
  python scripts/linkcheck.py [--paths file_or_dir ...] [--concurrency N]
"""

from __future__ import annotations

import argparse
import concurrent.futures as cf
import re
import sys
import time
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Set, Tuple

try:
    import requests
except ImportError:
    print("❌ Missing dependency: requests. Install with: pip install requests")
    sys.exit(1)


DEFAULT_PATHS = [
    "lists",
    "README.md",
    "docs",
]

URL_RE = re.compile(r"https?://[\w\-._~:/?#\[\]@!$&'()*+,;=%]+?(?=[\)\]\s]|$)", re.IGNORECASE)


def discover_files(paths: Iterable[Path]) -> List[Path]:
    files: List[Path] = []
    for p in paths:
        if p.is_file():
            files.append(p)
        elif p.is_dir():
            for ext in (".yaml", ".yml", ".md"):
                files.extend(p.rglob(f"*{ext}"))
    return sorted(set(files))


def extract_urls_from_text(text: str) -> Set[str]:
    return set(URL_RE.findall(text or ""))


def extract_urls_from_files(files: Iterable[Path]) -> Set[str]:
    urls: Set[str] = set()
    for f in files:
        try:
            text = f.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue
        urls |= extract_urls_from_text(text)
    return urls


class LinkResult:
    __slots__ = ("url", "status", "ok", "warning", "error")

    def __init__(
        self,
        url: str,
        status: Optional[int],
        ok: bool,
        warning: bool,
        error: Optional[str],
    ):
        self.url = url
        self.status = status
        self.ok = ok
        self.warning = warning
        self.error = error


def check_url(
    url: str,
    timeout: float = 8.0,
    retries: int = 2,
    session: Optional[requests.Session] = None,
) -> LinkResult:
    sess = session or requests.Session()
    attempt = 0
    last_exc: Optional[str] = None
    while attempt <= retries:
        try:
            resp = sess.head(
                url,
                allow_redirects=True,
                timeout=timeout,
                headers={"User-Agent": "repo-linkcheck/1.0"},
            )
            # Some servers don't implement HEAD correctly
            if resp.status_code in (405, 400) or (
                resp.status_code >= 500 and resp.status_code != 502
            ):
                # Try GET (stream) as fallback
                resp = sess.get(
                    url,
                    allow_redirects=True,
                    timeout=timeout,
                    stream=True,
                    headers={"User-Agent": "repo-linkcheck/1.0", "Range": "bytes=0-64"},
                )

            code = resp.status_code
            if 200 <= code < 400:
                return LinkResult(url, code, ok=True, warning=False, error=None)
            if code in (401, 402, 403, 429):
                # Often access-controlled or rate-limited; treat as warning
                return LinkResult(
                    url, code, ok=False, warning=True, error=f"status {code}"
                )
            # 4xx (excluding above) or 5xx are hard failures
            return LinkResult(
                url, code, ok=False, warning=False, error=f"status {code}"
            )
        except requests.RequestException as e:
            last_exc = str(e)
            # transient backoff
            if attempt < retries:
                time.sleep(1.5 * (attempt + 1))
            attempt += 1
            continue
    return LinkResult(
        url, None, ok=False, warning=False, error=last_exc or "request failed"
    )


def run_checks(urls: Iterable[str], concurrency: int = 10) -> List[LinkResult]:
    results: List[LinkResult] = []
    sess = requests.Session()
    with cf.ThreadPoolExecutor(max_workers=max(1, concurrency)) as ex:
        futs = {ex.submit(check_url, url, session=sess): url for url in urls}
        for fut in cf.as_completed(futs):
            try:
                results.append(fut.result())
            except Exception as e:
                url = futs[fut]
                results.append(
                    LinkResult(url, None, ok=False, warning=False, error=str(e))
                )
    return results


def summarize(results: Iterable[LinkResult]) -> Tuple[int, int, int, int]:
    total = ok = warn = fail = 0
    for r in results:
        total += 1
        if r.ok:
            ok += 1
        elif r.warning:
            warn += 1
        else:
            fail += 1
    return total, ok, warn, fail


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Check links in repository files")
    parser.add_argument(
        "--paths",
        nargs="*",
        default=DEFAULT_PATHS,
        help="Files or directories to scan for URLs",
    )
    parser.add_argument("--concurrency", type=int, default=10, help="Parallel requests")
    args = parser.parse_args(argv)

    paths = [Path(p) for p in args.paths]
    files = discover_files(paths)
    urls = extract_urls_from_files(files)
    if not urls:
        print("⚠️  No URLs found to check.")
        return 0

    print(f"🔎 Checking {len(urls)} unique URLs from {len(files)} files...")
    results = run_checks(sorted(urls), concurrency=args.concurrency)

    # Print details for non-OK
    for r in results:
        if r.ok:
            continue
        cls = "WARN" if r.warning else "FAIL"
        st = r.status if r.status is not None else "—"
        err = f" ({r.error})" if r.error else ""
        print(f"{cls}: {r.url} -> {st}{err}")

    total, ok, warn, fail = summarize(results)
    print("\n📊 Linkcheck Summary:")
    print(f"   Total:   {total}")
    print(f"   OK:      {ok}")
    print(f"   Warning: {warn}")
    print(f"   Failed:  {fail}")

    # Nonzero exit on hard failures
    return 0 if fail == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
