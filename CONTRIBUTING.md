# Contributing Guidelines

Thank you for your interest in contributing to Awesome Neural Network Reprogrammability! 

## How to Contribute

### Adding a Paper
1. Fork the repository
2. Add your paper to the appropriate YAML file in `lists/`
3. Ensure the paper follows our schema (see `meta/schema.paper.yaml`)
4. Run validation: `python scripts/validate_lists.py`
5. Submit a pull request

### Adding Datasets or Benchmarks
- Follow the same process using the appropriate schema files
- Ensure datasets are publicly available and well-documented

### Guidelines

- **Quality over quantity**: Only include high-quality, relevant resources
- **Proper citations**: Include complete citation information
- **Working links**: Verify all URLs are functional
- **Clear descriptions**: Provide concise but informative descriptions
- **Appropriate categorization**: Use the taxonomy defined in `meta/taxonomy.md`

## Validation

Before submitting, please run:
```bash
python scripts/validate_lists.py
python scripts/linkcheck.py
python scripts/render_readme.py
```

## Seeding From BibTeX (optional)

You can bootstrap `lists/papers.yaml` from BibTeX:

```bash
python scripts/bibtex_to_yaml.py my_refs.bib --out lists/papers.yaml --append \
  --category "model reprogramming"
python scripts/validate_lists.py && python scripts/render_readme.py
```

Notes:
- The seeder maps common fields (title, author, year, booktitle/journal → venue, url/doi). Use `--category` to force the mechanism for all imported entries (accepted: `model reprogramming`, `prompt tuning`, `prompt instruction`). Otherwise, it applies light heuristics for `mechanism`, `location`, and `operator`.
- Use flags to override defaults: `--default-mechanism soft-prompts` (and `--default-location`, `--default-operator`).
- Duplicates are skipped by (title, year). Review and adjust tags to match `meta/tags.md`.

## Questions?

Open an issue if you have questions about contributing or the scope of the project.

## Code of Conduct

Please note that this project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).
