# Awesome Neural Network Reprogrammability [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of resources on neural network reprogrammability - techniques for reprogramming neural networks to perform new tasks without full retraining.

Neural network reprogrammability refers to methods that enable pre-trained neural networks to be adapted or "reprogrammed" for new tasks with minimal parameter updates, often leveraging the existing learned representations. This includes techniques like input transformations, prompt-based approaches, adapter methods, and parameter-efficient fine-tuning strategies.

## Contents

- [Papers](#papers)
- [Datasets](#datasets)
- [Benchmarks](#benchmarks)
- [Tools & Libraries](#tools--libraries)
- [Leaderboards](#leaderboards)
- [Contributing](#contributing)

<!-- AUTO:START -->


## Papers


### adversarial-reprogramming

#### input-layer

##### addition
- [Adversarial Reprogramming of Neural Networks (2018) — ICLR](https://arxiv.org/abs/1806.11146) · [code](https://github.com/tensorflow/cleverhans)

### soft-prompts

#### input-layer

##### addition
- [Learning to Prompt for Vision-Language Models (2022) — IJCV](https://arxiv.org/abs/2109.01134) · [code](https://github.com/KaiyangZhou/CoOp)
- [The Power of Scale for Parameter-Efficient Prompt Tuning (2021) — EMNLP](https://arxiv.org/abs/2104.08691) · [code](https://github.com/google-research/prompt-tuning)


_Generated: 2025-09-08 05:30 UTC_

<!-- AUTO:END -->

## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## Seeding From BibTeX (optional)

Convert BibTeX to YAML and refresh the README:

```bash
python scripts/bibtex_to_yaml.py my_refs.bib --out lists/papers.yaml --append
python scripts/validate_lists.py
python scripts/render_readme.py
```

Flags: `--overwrite` to replace `lists/papers.yaml`; `--default-mechanism/--default-location/--default-operator` to set fallbacks. Review tags to match `meta/tags.md`.

## License

[![CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
