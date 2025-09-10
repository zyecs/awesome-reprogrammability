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
DOCS_PAPERS = DOCS_SECTIONS / "papers.md"


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
    # Group papers by main category only (simplified)
    tree = defaultdict(list)
    for p in papers:
        mech = p.get("mechanism", "unknown")
        # Map to user-friendly category names
        category_map = {
            "model-reprogramming": "Model Reprogramming",
            "adversarial-reprogramming": "Model Reprogramming",
            "prompt-tuning": "Prompt Tuning",
            "soft-prompts": "Prompt Tuning",
            "hard-prompts": "Prompt Tuning",
            "prompt-instruction": "Prompt Instruction",
        }
        category = category_map.get(mech, mech.replace("-", " ").title())
        tree[category].append(p)

    # Sort each category by year desc, then title asc
    for category in tree:
        tree[category].sort(key=lambda x: (-int(x.get("year", 0)), x.get("title", "")))
    return tree


def render_grouped_md(tree):
    lines = []
    lines.append("\n")
    lines.append("## Curated Papers (auto-generated)\n")

    # Order categories logically
    category_order = ["Model Reprogramming", "Prompt Tuning", "Prompt Instruction"]
    ordered_categories = [cat for cat in category_order if cat in tree]
    ordered_categories.extend(
        [cat for cat in sorted(tree.keys()) if cat not in category_order]
    )

    for category in ordered_categories:
        papers = tree[category]
        lines.append(f"\n### {category}")
        lines.append(f"\n*{len(papers)} papers*\n")

        for p in papers:
            title = p.get("title", "Untitled")
            year = p.get("year", "?")
            venue = p.get("venue", "")
            url = p.get("url")
            code_url = p.get("code_url")

            # Create paper entry
            parts = [f"{title} ({year})"]
            if venue:
                parts.append(venue)
            desc = " — ".join(parts)
            link = f"[{desc}]({url})" if url else desc
            suffix = f" · [code]({code_url})" if code_url else ""
            lines.append(f"- {link}{suffix}")

    lines.append("\n")
    generated_at = datetime.now().strftime("%Y-%m-%d %H:%M UTC")
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


def map_mechanism_to_configuration(mechanism):
    """Map mechanism to Configuration (λ) according to the taxonomy"""
    format_mapping = {
        "model-reprogramming": "Learnable",
        "adversarial-reprogramming": "Learnable",
        "prompt-tuning": "Learnable",
        "soft-prompts": "Learnable",
        "hard-prompts": "Learnable",
        "prompt-instruction": "Fixed",
    }
    return format_mapping.get(mechanism, "Learnable")


def map_location_to_greek(location):
    """Map location to Location (ℓ) with LaTeX notation"""
    location_mapping = {
        "input-layer": "Input ($\\mathcal{X}_S$)",
        "input": "Input ($\\mathcal{X}_S$)",
        "intermediate-layers": "Hidden ($\\mathcal{H}$)",
        "hidden": "Hidden ($\\mathcal{H}$)",
        "hidden-layers": "Hidden ($\\mathcal{H}$)",
        "intermediate": "Hidden ($\\mathcal{H}$)",
        "embedding": "Embedding ($\\mathcal{E}$)",
        "embedding-layer": "Embedding ($\\mathcal{E}$)",
    }

    if "/" in location:
        locations = location.split("/")
        locations = [a.strip() for a in locations]
        return " / ".join([location_mapping.get(a, a) for a in locations])

    return location_mapping.get(location, location)


def map_operator_to_greek(operator):
    """Map operator to Operator (τ) with abbreviations"""
    operator_mapping = {
        "addition": "Additive (AD)",
        "additive": "Additive (AD)",
        "add": "Additive (AD)",
        # "multiplication": "Multiplicative (MU)",
        "concatenation": "Concatenative (CO)",
        "concat": "Concatenative (CO)",
        "concatenate": "Concatenative (CO)",
        "concatenative": "Concatenative (CO)",
        # "replacement": "Replacement (RE)",
        "parametric": "Parametric (PR)",
    }
    return operator_mapping.get(operator, operator)


def map_alignment_to_display(alignment):
    """Map alignment field to display format with abbreviation"""
    alignment_mapping = {
        "linear": "Linear (LA)",
        "statistical": "Statistical (SA)",
        "rule-based": "Rule-based (RA)",
        "identity": "Identity (ID)",
    }

    if "/" in alignment:
        alignments = alignment.split("/")
        alignments = [a.strip() for a in alignments]
        return " / ".join([alignment_mapping.get(a, a) for a in alignments])

    return alignment_mapping.get(alignment, "Identity (ID)")


def map_mechanism_to_alignment(mechanism):
    """Fallback: Map mechanism to Alignment (ω) when alignment field is missing"""
    alignment_mapping = {
        "adversarial-reprogramming": "Linear (LA)",
        "model-reprogramming": "Linear (LA)",
        "prompt-tuning": "Linear (LA)",
        "soft-prompts": "Linear (LA)",
        "hard-prompts": "Linear (LA)",
        "prompt-instruction": "Rule-based (RA)",
    }
    return alignment_mapping.get(mechanism, "Linear (LA)")


def format_paper_link(paper):
    """Format paper in '[Title](url) Authors (Year)' format"""
    authors = paper.get("authors", [])
    year = paper.get("year", "")
    title = paper.get("title", "")
    url = paper.get("url", "")

    # Get first author's last name
    if authors:
        first_author = authors[0].split(",")[0].split()[-1]  # Get last part of name
    else:
        first_author = "Unknown"

    # Format authors
    if len(authors) > 1:
        author_text = f"{first_author} et al."
    else:
        author_text = first_author

    # Format: "[Title](url) Authors (Year)"
    if url:
        link_text = f"[{title}]({url})"
    else:
        link_text = title

    return f"{link_text} {author_text} ({year})"


def render_papers_table_md(papers):
    # Sort by year asc, then title asc
    rows = sorted(papers, key=lambda p: (int(p.get("year", 0)), p.get("title", "")))

    cols = [
        "Paper",
        "Configuration ($\\lambda$)",
        "Location ($\\ell$)",
        "Operator ($\\tau$)",
        "Alignment ($\\omega$)",
        "Venue",
    ]

    lines = []
    lines.append("# Papers\n")
    lines.append(
        "A tabular view of curated papers organized by the reprogrammability taxonomy dimensions."
    )
    lines.append("")
    lines.append(" | ".join(cols))
    lines.append(" | ".join(["---"] * len(cols)))

    for p in rows:
        venue = p.get("venue", "")
        year = p.get("year", "")
        mechanism = p.get("mechanism", "")
        location = p.get("location", "")
        operator = p.get("operator", "")
        alignment = p.get("alignment", "")

        # Map to taxonomy format using only YAML data
        configuration_lambda = map_mechanism_to_configuration(mechanism)
        location_l = map_location_to_greek(location)
        operator_tau = map_operator_to_greek(operator)

        # Use alignment field if present, otherwise fallback to mechanism-based mapping
        if alignment:
            alignment_omega = map_alignment_to_display(alignment)
        else:
            alignment_omega = map_mechanism_to_alignment(mechanism)

        paper_link = format_paper_link(p)

        vals = [
            paper_link,
            configuration_lambda,
            location_l,
            operator_tau,
            alignment_omega,
            venue,
        ]
        lines.append(" | ".join(vals))

    lines.append("")
    return "\n".join(lines)


def write_papers_table(papers):
    DOCS_SECTIONS.mkdir(parents=True, exist_ok=True)
    md = render_papers_table_md(papers)
    with open(DOCS_PAPERS, "w", encoding="utf-8") as f:
        f.write(md)
    print(f"✅ Wrote {DOCS_PAPERS}")


def main():
    papers = load_papers(PAPERS)
    tree = group_papers(papers)
    ensure_docs()
    write_papers_table(papers)
    rc = write_readme(tree)
    sys.exit(rc)


if __name__ == "__main__":
    main()
