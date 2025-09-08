 # Repository Guidelines

 ## Project Structure & Module Organization
 - `lists/`: Source YAML lists (e.g., `papers.yaml`, `datasets.yaml`).
 - `meta/`: Schemas (`schema.*.yaml`) and controlled vocabulary/docs (`tags.md`, `taxonomy.md`).
 - `scripts/`: Maintenance scripts (e.g., `validate_lists.py`).
 - `docs/`: MkDocs site (`index.md`, `sections/`) and `mkdocs.yml` at repo root.
 - `leaderboards/`: Placeholder for leaderboard assets.
 - Root files: `README.md`, `CONTRIBUTING.md`, `LICENSE`, `requirements.txt`.

 ## Build, Test, and Development Commands
 - Create env: `python -m venv .venv && source .venv/bin/activate`
 - Install deps: `pip install -r requirements.txt`
 - Validate data: `python scripts/validate_lists.py` (schema, tags, duplicates)
 - Run docs locally: `mkdocs serve` (serves at http://127.0.0.1:8000)
 - Build docs: `mkdocs build` (outputs `site/`)

 ## Coding Style & Naming Conventions
 - YAML: 2‑space indent; use double quotes for strings; one list item per line.
 - Keys must match schemas exactly (e.g., `title`, `authors`, `year`, `code_url`).
 - Keep numbers numeric (don’t quote years/counts); absolute HTTPS URLs preferred.
 - Order fields logically: title → authors → year → venue → urls → mechanism/location/operator → tags → summary → datasets/architectures.
 - Example (papers):
   ```yaml
   - title: "Example Title"
     authors: ["Last, First"]
     year: 2022
     venue: "Conf"
     url: "https://example.org/paper.pdf"
     mechanism: "soft-prompts"
     location: "input-layer"
     operator: "addition"
     tags: ["prompt-tuning"]
   ```

 ## Testing Guidelines
 - Treat `python scripts/validate_lists.py` as the test suite; it must pass before PRs.
 - Additions must use controlled tags from `meta/tags.md`; update requests to schemas require discussion first.

 ## Commit & Pull Request Guidelines
 - Commits: small, scoped, imperative (e.g., "add: 3 papers on soft prompts").
 - PRs must include: clear summary, rationale, linked issues (if any), and validation output.
 - Run validators and, if docs change, verify via `mkdocs serve` with screenshots if UI changes.
 - Avoid drive‑by edits; keep PRs focused. Do not commit generated `site/`.

 ## Agent‑Specific Tips
 - Prefer editing only files under `lists/`, `meta/`, and `docs/` relevant to the change.
 - Never fabricate metadata; include sources/URLs and follow schemas strictly.
 - If adding a new list file, register it in validation (extend `scripts/validate_lists.py`) and docs nav (`mkdocs.yml`).
