#!/usr/bin/env python3
"""
Render README sections from lists/papers.yaml and generate docs stubs.

Features:
- Groups papers by mechanism -> location -> operator -> year desc
- Renders between AUTO markers in README.md
- Writes docs/sections/taxonomy.md (from meta/taxonomy.md) and
  docs/sections/evaluations.md (stub if missing)
"""

import re
import sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path

try:
    import yaml
except ImportError:
    print("Missing dependency: PyYAML. Run: pip install PyYAML")
    sys.exit(1)


REPO_ROOT = Path(__file__).resolve().parents[1]
README = REPO_ROOT / "README.md"
PAPERS = REPO_ROOT / "lists" / "papers.yaml"
META_TAXONOMY = REPO_ROOT / "meta" / "taxonomy.md"
DOCS_SECTIONS = REPO_ROOT / "docs" / "sections"
DOCS_TAXONOMY = DOCS_SECTIONS / "taxonomy.md"
DOCS_EVALS = DOCS_SECTIONS / "evaluations.md"


AUTO_START = "<!-- AUTO:START -->"
AUTO_END = "<!-- AUTO:END -->"


def load_papers(path: Path):
    if not path.exists():
        return []
    with open(path, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f) or []
    # Ensure list of dicts
    if not isinstance(data, list):
        data = []
    return data


def group_papers(papers):
    # mechanism -> location -> operator -> [papers]
    tree = defaultdict(lambda: defaultdict(lambda: defaultdict(list)))
    for p in papers:
        mech = p.get("mechanism", "unknown")
        loc = p.get("location", "unknown")
        op = p.get("operator", "unknown")
        tree[mech][loc][op].append(p)
    # sort each list by year desc, title asc
    for mech in tree:
        for loc in tree[mech]:
            for op in tree[mech][loc]:
                tree[mech][loc][op].sort(
                    key=lambda x: (-int(x.get("year", 0)), x.get("title", ""))
                )
    return tree


def render_grouped_md(tree):
    lines = []
    lines.append("\n")
    lines.append("## Curated Papers (auto-generated)\n")
    for mech in sorted(tree.keys()):
        lines.append(f"\n### {mech}")
        for loc in sorted(tree[mech].keys()):
            lines.append(f"\n#### {loc}")
            for op in sorted(tree[mech][loc].keys()):
                lines.append(f"\n##### {op}")
                for p in tree[mech][loc][op]:
                    title = p.get("title", "Untitled")
                    year = p.get("year", "?")
                    venue = p.get("venue", "")
                    url = p.get("url")
                    code_url = p.get("code_url")
                    parts = [f"{title} ({year})"]
                    if venue:
                        parts.append(venue)
                    desc = " — ".join(parts)
                    link = f"[{desc}]({url})" if url else desc
                    suffix = f" · [code]({code_url})" if code_url else ""
                    lines.append(f"- {link}{suffix}")
    lines.append("\n")
    generated_at = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    lines.append(f"_Generated: {generated_at}_\n")
    return "\n".join(lines)


def replace_auto_section(readme_text: str, new_content: str) -> str:
    pattern = re.compile(
        rf"{re.escape(AUTO_START)}[\s\S]*?{re.escape(AUTO_END)}", re.MULTILINE
    )
    replacement = f"{AUTO_START}\n{new_content}\n{AUTO_END}"
    if not pattern.search(readme_text):
        # If markers missing, append at end
        return readme_text.rstrip() + "\n\n" + replacement + "\n"
    return pattern.sub(replacement, readme_text)


def write_readme(tree):
    if not README.exists():
        print(f"❌ README not found at {README}")
        return 1
    with open(README, "r", encoding="utf-8") as f:
        current = f.read()
    content = render_grouped_md(tree)
    updated = replace_auto_section(current, content)
    if updated != current:
        with open(README, "w", encoding="utf-8") as f:
            f.write(updated)
        print("✅ README auto section updated")
    else:
        print("ℹ️ README auto section unchanged")
    return 0


def ensure_docs():
    DOCS_SECTIONS.mkdir(parents=True, exist_ok=True)
    # taxonomy: mirror from meta/taxonomy.md if available
    if META_TAXONOMY.exists():
        with open(META_TAXONOMY, "r", encoding="utf-8") as src:
            taxo = src.read()
        header = "# Taxonomy\n\nThis page mirrors `meta/taxonomy.md`.\n\n"
        with open(DOCS_TAXONOMY, "w", encoding="utf-8") as out:
            out.write(header + taxo)
    else:
        with open(DOCS_TAXONOMY, "w", encoding="utf-8") as out:
            out.write("# Taxonomy\n\nTo be defined.\n")
    # evaluations stub
    if not DOCS_EVALS.exists():
        with open(DOCS_EVALS, "w", encoding="utf-8") as f:
            f.write(
                "# Evaluations\n\nEvaluation protocols and results will be documented here.\n"
            )
    print("✅ Docs sections updated: taxonomy.md, evaluations.md")


def main():
    papers = load_papers(PAPERS)
    tree = group_papers(papers)
    ensure_docs()
    rc = write_readme(tree)
    sys.exit(rc)


if __name__ == "__main__":
    main()
