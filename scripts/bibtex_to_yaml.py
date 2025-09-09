#!/usr/bin/env python3
"""
Convert BibTeX files to YAML entries compatible with lists/papers.yaml schema.

Features
- Parses common BibTeX entry types (@article, @inproceedings, @misc)
- Maps fields to required schema: title, authors[], year, venue, url
- Heuristics to infer mechanism/location/operator and domain tags
- Deduplicates against existing lists/papers.yaml by (title, year)
- Supports --append/--overwrite and --dry-run

Usage
  python scripts/bibtex_to_yaml.py input1.bib [input2.bib ...] \\
    --out lists/papers.yaml --append [--category "model reprogramming"|"prompt tuning"|"prompt instruction"]

After generating, run:
  python scripts/validate_lists.py
  python scripts/render_readme.py
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    print("❌ Missing dependency: PyYAML. Install with: pip install PyYAML")
    sys.exit(1)


BIB_ENTRY_RE = re.compile(
    r"@(?P<type>[a-zA-Z]+)\s*\{\s*(?P<key>[^,]+)\s*,(?P<body>.*?)\}\s*", re.DOTALL
)
BIB_FIELD_RE = re.compile(
    r"(?m)^\s*(?P<name>[a-zA-Z_]+)\s*=\s*(?P<value>\{.*?\}|\".*?\"|[^,\n]+)\s*,?\s*$"
)


def parse_bibtex(text: str) -> List[Dict[str, str]]:
    entries: List[Dict[str, str]] = []

    # Find @type{key, and then manually find the matching closing brace
    entry_starts = []
    for m in re.finditer(r"@([a-zA-Z]+)\s*\{\s*([^,]+)\s*,", text):
        entry_starts.append((m.start(), m.group(1).strip().lower(), m.end()))

    for _, etype, body_start in entry_starts:
        # Find the matching closing brace
        brace_count = 1
        pos = body_start
        while pos < len(text) and brace_count > 0:
            if text[pos] == "{":
                brace_count += 1
            elif text[pos] == "}":
                brace_count -= 1
            pos += 1

        if brace_count == 0:
            body = text[body_start : pos - 1]
            fields: Dict[str, str] = {"_type": etype}
            for fm in BIB_FIELD_RE.finditer(body):
                name = fm.group("name").strip().lower()
                raw = fm.group("value").strip()
                # strip outer braces/quotes
                if (raw.startswith("{") and raw.endswith("}")) or (
                    raw.startswith('"') and raw.endswith('"')
                ):
                    raw = raw[1:-1]
                # collapse whitespace
                val = re.sub(r"\s+", " ", raw).strip()
                fields[name] = val
            entries.append(fields)
    return entries


def authors_to_list(author_field: str) -> List[str]:
    if not author_field:
        return []
    parts = [a.strip() for a in author_field.split(" and ") if a.strip()]
    return parts


def first_nonempty(*vals: Optional[str]) -> Optional[str]:
    for v in vals:
        if v and str(v).strip():
            return str(v).strip()
    return None


def to_int(val: Optional[str]) -> Optional[int]:
    try:
        return int(str(val)) if val is not None else None
    except Exception:
        return None


def guess_url(fields: Dict[str, str]) -> Optional[str]:
    url = fields.get("url")
    if url:
        return url
    doi = fields.get("doi")
    if doi:
        doi = (
            doi.replace("http://dx.doi.org/", "")
            .replace("https://doi.org/", "")
            .strip()
        )
        return f"https://doi.org/{doi}"
    eprint = fields.get("eprint") or fields.get("arxivid")
    archive = (fields.get("archiveprefix") or "").lower()
    if eprint and (
        "arxiv" in archive or re.fullmatch(r"\d{4}\.\d{4,5}(v\d+)?", eprint)
    ):
        return f"https://arxiv.org/abs/{eprint}"
    # Try to extract arXiv ID embedded in free-text fields
    for key in ("journal", "note", "howpublished", "booktitle"):
        val = (fields.get(key) or "").strip()
        if not val:
            continue
        m = re.search(r"arXiv[:\s]+(\d{4}\.\d{4,5}(?:v\d+)?)", val, flags=re.IGNORECASE)
        if m:
            return f"https://arxiv.org/abs/{m.group(1)}"
    return None


def guess_venue(fields: Dict[str, str]) -> str:
    return (
        first_nonempty(
            fields.get("booktitle"), fields.get("journal"), fields.get("publisher"), ""
        )
        or ""
    )


def guess_mechanism(title: str) -> str:
    t = title.lower()
    if "adversarial reprogram" in t or ("adversarial" in t and "reprogram" in t):
        return "adversarial-reprogramming"
    if "hard prompt" in t or ("prompt" in t and ("discrete" in t or "template" in t)):
        return "hard-prompts"
    if "prompt" in t:
        return "soft-prompts"
    if any(
        k in t
        for k in [
            "adapter",
            "lora",
            "prefix-tuning",
            "prefix tuning",
            "efficient tuning",
        ]
    ):
        return "model-reprogramming"
    return "model-reprogramming"


def guess_location(mechanism: str, title: str) -> str:
    t = title.lower()
    if mechanism in ("soft-prompts", "hard-prompts", "prompt-tuning"):
        return "input-layer"
    if "head" in t or "classifier" in t or "logit" in t:
        return "output-layer"
    return "intermediate-layers"


def guess_operator(mechanism: str, title: str) -> str:
    t = title.lower()
    if "concat" in t or "concatenate" in t:
        return "concatenation"
    if "gate" in t or "scale" in t or "multiply" in t:
        return "multiplication"
    if mechanism in ("soft-prompts", "hard-prompts"):
        return "addition"
    if "replace" in t or "replacement" in t:
        return "replacement"
    return "addition"


def guess_domain_tags(title: str, venue: str) -> List[str]:
    t = (title + " " + venue).lower()
    tags: List[str] = []
    if any(
        k in t for k in ["cvpr", "iccv", "eccv", "imagenet", "cifar", "vision", "image"]
    ):
        tags.append("computer-vision")
    if any(
        k in t
        for k in [
            "acl",
            "emnlp",
            "naacl",
            "nlp",
            "language",
            "glue",
            "superglue",
            "bert",
            "gpt",
            "t5",
        ]
    ):
        tags.append("natural-language-processing")
    if any(k in t for k in ["clip", "vision-language", "multimodal", "image-text"]):
        tags.append("multimodal")
    if not tags:
        tags.append("natural-language-processing")
    # ensure uniqueness and order
    seen = set()
    uniq: List[str] = []
    for x in tags:
        if x not in seen:
            seen.add(x)
            uniq.append(x)
    return uniq


def map_entry_to_schema(
    fields: Dict[str, str], defaults: Dict[str, str]
) -> Optional[Dict[str, object]]:
    title = fields.get("title") or ""
    title = re.sub(r"\s+", " ", title).strip().strip("{}")
    if not title:
        return None
    authors = authors_to_list(fields.get("author", ""))
    year = to_int(fields.get("year"))
    venue = guess_venue(fields)
    url = guess_url(fields)

    mech = defaults.get("mechanism") or guess_mechanism(title)
    loc = defaults.get("location") or guess_location(mech, title)
    op = defaults.get("operator") or guess_operator(mech, title)
    tags = guess_domain_tags(title, venue)

    if not year:
        # Skip entries missing critical fields
        return None

    # Use placeholder URL if missing - can be manually updated later
    if not url:
        url = f"#{title.lower().replace(' ', '-').replace(',', '').replace(':', '')}"

    item: Dict[str, object] = {
        "title": title,
        "authors": authors if authors else ["Unknown"],
        "year": year,
        "venue": venue or "",
        "url": url,
        "mechanism": mech,
        "location": loc,
        "operator": op,
        "tags": tags,
    }
    # code url if present in misc fields
    code_url = fields.get("codeurl") or fields.get("code_url")
    if code_url:
        item["code_url"] = code_url
    return item


def load_existing(path: Path) -> List[Dict[str, object]]:
    if not path.exists():
        return []
    try:
        data = yaml.safe_load(path.read_text(encoding="utf-8"))
        return data if isinstance(data, list) else []
    except Exception:
        return []


def de_key(title: str, year: int) -> Tuple[str, int]:
    return (re.sub(r"\s+", " ", title).strip().lower(), int(year))


def merge_entries(
    existing: List[Dict[str, object]],
    incoming: List[Dict[str, object]],
    dedupe_only: bool = True,
) -> List[Dict[str, object]]:
    seen = {
        de_key(e.get("title", ""), e.get("year", 0)): i
        for i, e in enumerate(existing)
        if e.get("title") and e.get("year")
    }
    out = list(existing)
    for item in incoming:
        key = de_key(item["title"], item["year"])  # type: ignore[index]
        if key in seen:
            if dedupe_only:
                # skip duplicates
                continue
            else:
                # merge missing fields
                idx = seen[key]
                for k, v in item.items():
                    if not out[idx].get(k) and v:
                        out[idx][k] = v
        else:
            out.append(item)
    return out


def main(argv: Optional[List[str]] = None) -> int:
    ap = argparse.ArgumentParser(
        description="Convert BibTeX to YAML schema entries for papers"
    )
    ap.add_argument("inputs", nargs="+", help="Input .bib files")
    ap.add_argument("--out", default="lists/papers.yaml", help="Output YAML file path")
    mode = ap.add_mutually_exclusive_group()
    mode.add_argument(
        "--append", action="store_true", help="Append to existing YAML (default)"
    )
    mode.add_argument(
        "--overwrite",
        action="store_true",
        help="Overwrite existing YAML with only converted entries",
    )
    ap.add_argument(
        "--dry-run",
        action="store_true",
        help="Print YAML to stdout without writing file",
    )
    ap.add_argument(
        "--default-mechanism",
        dest="mechanism",
        default=None,
        help="Default mechanism when inference is uncertain",
    )
    ap.add_argument(
        "--default-location", dest="location", default=None, help="Default location"
    )
    ap.add_argument(
        "--default-operator", dest="operator", default=None, help="Default operator"
    )
    ap.add_argument(
        "--category",
        dest="category",
        default=None,
        help=(
            "Force mechanism for all entries. Accepts: 'model reprogramming', 'prompt tuning', 'prompt instruction'"
        ),
    )
    args = ap.parse_args(argv)

    inputs: List[Path] = []
    for p in args.inputs:
        path = Path(p)
        if not path.exists():
            alt = Path("bibs") / p
            if alt.exists():
                path = alt
        if not path.exists():
            print(f"❌ Input not found: {path}")
            return 1
        inputs.append(path)

    converted: List[Dict[str, object]] = []

    def normalize_category(val: Optional[str]) -> Optional[str]:
        if not val:
            return None
        s = str(val).strip().lower().replace("_", "-")
        mapping = {
            "MR": "model-reprogramming",
            "mr": "model-reprogramming",
            "model reprogramming": "model-reprogramming",
            "model-reprogramming": "model-reprogramming",
            "PT": "prompt-tuning",
            "pt": "prompt-tuning",
            "prompt tuning": "prompt-tuning",
            "prompt-tuning": "prompt-tuning",
            "PI": "prompt-instruction",
            "pi": "prompt-instruction",
            "prompt instruction": "prompt-instruction",
            "prompt-instruction": "prompt-instruction",
        }
        if s in mapping:
            return mapping[s]
        print(
            "❌ Unknown category for --category. Use one of: 'model reprogramming', 'prompt tuning', 'prompt instruction'",
            file=sys.stderr,
        )
        sys.exit(2)

    forced_mechanism = normalize_category(args.category)

    defaults = {
        k: v
        for k, v in {
            "mechanism": forced_mechanism or args.mechanism,
            "location": args.location,
            "operator": args.operator,
        }.items()
        if v
    }

    total = added = skipped_title = skipped_missing = 0

    for path in inputs:
        text = path.read_text(encoding="utf-8", errors="ignore")
        print(f"Parsing {path}")
        entries = parse_bibtex(text)
        for e in entries:
            total += 1
            mapped = map_entry_to_schema(e, defaults)
            if mapped:
                converted.append(mapped)
                added += 1
            else:
                title = (e.get("title") or "").strip()
                year = to_int(e.get("year"))
                url = guess_url(e)
                if not title or not year:
                    skipped_title += 1
                elif not url:
                    skipped_missing += 1

    if not converted:
        print("⚠️  No convertible entries found.")
        print(
            f"   Parsed: {total}, missing title/year: {skipped_title}, missing URL/DOI/arXiv: {skipped_missing}"
        )
        return 0

    out_path = Path(args.out)
    if args.overwrite:
        final = converted
    else:
        existing = load_existing(out_path)
        final = merge_entries(existing, converted, dedupe_only=True)

    # Sort final by year desc then title
    final.sort(key=lambda x: (-int(x.get("year", 0)), str(x.get("title", ""))))

    if args.dry_run:
        yaml.safe_dump(final, sys.stdout, sort_keys=False, allow_unicode=True)
        return 0

    # Ensure directory exists
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(
        yaml.safe_dump(final, sort_keys=False, allow_unicode=True), encoding="utf-8"
    )
    print(f"✅ Wrote {out_path} ({len(final)} items)")
    if skipped_title or skipped_missing:
        print(
            f"ℹ️  Skipped entries — missing title/year: {skipped_title}, missing URL/DOI/arXiv: {skipped_missing}"
        )
    return 0


if __name__ == "__main__":
    sys.exit(main())
