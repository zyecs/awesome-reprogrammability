#!/usr/bin/env python3
"""
Build leaderboards docs from CSV files in leaderboards/.

Outputs: docs/sections/leaderboards.md

Validates required columns:
  paper, model, mechanism, dataset, split, shots, metric, value, seed, frozen_base, notes

Enhancements:
- Links paper names to URLs when found in lists/papers.yaml
- Groups tables by dataset; sorts by metric then descending value, then shots asc
"""

from __future__ import annotations

import csv
import sys
from collections import defaultdict
from pathlib import Path
from typing import Dict, List

try:
    import yaml
except ImportError:
    print("❌ Missing dependency: PyYAML. Install with: pip install PyYAML")
    sys.exit(1)


REPO_ROOT = Path(__file__).resolve().parents[1]
LEADERBOARDS_DIR = REPO_ROOT / "leaderboards"
DOCS_SECTIONS = REPO_ROOT / "docs" / "sections"
DOCS_OUT = DOCS_SECTIONS / "leaderboards.md"
PAPERS_YAML = REPO_ROOT / "lists" / "papers.yaml"

REQUIRED_COLS = [
    "paper",
    "model",
    "mechanism",
    "dataset",
    "split",
    "shots",
    "metric",
    "value",
    "seed",
    "frozen_base",
    "notes",
]


def load_paper_links() -> Dict[str, str]:
    links: Dict[str, str] = {}
    if not PAPERS_YAML.exists():
        return links
    try:
        papers = yaml.safe_load(PAPERS_YAML.read_text(encoding="utf-8")) or []
        for p in papers:
            title = (p or {}).get("title")
            url = (p or {}).get("url")
            if title and url:
                links[str(title)] = str(url)
    except Exception:
        pass
    return links


def read_csvs() -> List[dict]:
    rows: List[dict] = []
    if not LEADERBOARDS_DIR.exists():
        return rows
    for csv_path in sorted(LEADERBOARDS_DIR.glob("*.csv")):
        with csv_path.open("r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            missing = [c for c in REQUIRED_COLS if c not in (reader.fieldnames or [])]
            if missing:
                print(f"❌ {csv_path}: missing required columns: {', '.join(missing)}")
                sys.exit(1)
            for r in reader:
                # Normalize whitespace
                rows.append({k: (v.strip() if isinstance(v, str) else v) for k, v in r.items()})
    return rows


def to_int(value, default=0):
    try:
        return int(value)
    except Exception:
        return default


def to_float(value, default=0.0):
    try:
        return float(value)
    except Exception:
        return default


def build_markdown(rows: List[dict], paper_links: Dict[str, str]) -> str:
    by_dataset = defaultdict(list)
    for r in rows:
        by_dataset[r.get("dataset", "unknown")].append(r)

    # Sort within datasets
    for ds, items in by_dataset.items():
        items.sort(
            key=lambda x: (
                x.get("metric", ""),
                -to_float(x.get("value", 0.0)),
                to_int(x.get("shots", 0)),
                x.get("model", ""),
            )
        )

    lines: List[str] = []
    lines.append("# Leaderboards\n")
    lines.append("This page aggregates results from CSVs in `leaderboards/`.\n")

    columns = [
        "model",
        "paper",
        "mechanism",
        "split",
        "shots",
        "metric",
        "value",
        "seed",
        "frozen_base",
        "notes",
    ]

    for dataset in sorted(by_dataset.keys()):
        lines.append(f"\n## {dataset}\n")
        # table header
        header = " | ".join(c.capitalize().replace("_", " ") for c in columns)
        sep = " | ".join(["---"] * len(columns))
        lines.append(header)
        lines.append(sep)
        for r in by_dataset[dataset]:
            row_vals: List[str] = []
            for c in columns:
                val = str(r.get(c, "")).strip()
                if c == "paper" and val:
                    link = paper_links.get(val)
                    if link:
                        val = f"[{val}]({link})"
                row_vals.append(val)
            lines.append(" | ".join(row_vals))

    return "\n".join(lines) + "\n"


def main() -> int:
    rows = read_csvs()
    if not rows:
        print("⚠️  No leaderboard rows found in leaderboards/*.csv")
        # Still write an empty page to satisfy docs nav
        DOCS_SECTIONS.mkdir(parents=True, exist_ok=True)
        DOCS_OUT.write_text("# Leaderboards\n\nNo results yet.\n", encoding="utf-8")
        return 0
    links = load_paper_links()
    md = build_markdown(rows, links)
    DOCS_SECTIONS.mkdir(parents=True, exist_ok=True)
    DOCS_OUT.write_text(md, encoding="utf-8")
    print(f"✅ Wrote {DOCS_OUT}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

