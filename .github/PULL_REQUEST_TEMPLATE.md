## Summary

Briefly describe the change and motivation. Link related issues.

## Scope

- [ ] Papers (`lists/papers.yaml`)
- [ ] Datasets/Benchmarks (`lists/*.yaml`)
- [ ] Docs (`docs/**`, `mkdocs.yml`)
- [ ] Scripts (`scripts/**`)
- [ ] Leaderboards (`leaderboards/*.csv`)
- [ ] Other

## Changes

Bullet the key edits (files/paths), and any schema/taxonomy updates.

## Checklist

- [ ] Validate lists: `python scripts/validate_lists.py`
- [ ] Linkcheck: `python scripts/linkcheck.py`
- [ ] Render README: `python scripts/render_readme.py` (include updated `README.md`)
- [ ] MkDocs builds: `mkdocs build` (or `mkdocs serve` locally)
- [ ] YAML conforms to schemas and uses tags from `meta/tags.md`
- [ ] If adding new list files, updated `scripts/validate_lists.py` and `mkdocs.yml`
- [ ] If adding results, updated `leaderboards/*.csv` and ran `python scripts/build_leaderboards.py`
- [ ] No generated `site/` or large binaries committed
- [ ] (Optional) Lint: `npx awesome-lint README.md` and `npx markdownlint-cli "**/*.md"`

## Screenshots / Docs (if UI changed)

Attach screenshots of docs changes (nav/sections) when applicable.

## Additional Notes

Anything else the reviewers should know.

