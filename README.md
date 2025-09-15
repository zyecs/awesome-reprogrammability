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


## Curated Papers (auto-generated)


### Model Reprogramming

*23 papers*

- [Attribute-based Visual Reprogramming for Vision-Language Models (2025) — ICLR](#attribute-based-visual-reprogramming-for-vision-language-models)
- [Model Reprogramming Demystified: A Neural Tangent Kernel Perspective (2025) — arXiv preprint arXiv:2506.0620](https://arxiv.org/abs/2506.0620)
- [Refine: Inversion-free backdoor defense via model reprogramming (2025) — ICLR](#refine-inversion-free-backdoor-defense-via-model-reprogramming)
- [Reprogramming pretrained language models for protein sequence representation learning (2025) — Digital Discovery](#reprogramming-pretrained-language-models-for-protein-sequence-representation-learning)
- [Understanding Model Reprogramming for CLIP via Decoupling Visual Prompts (2025) — ICML](#understanding-model-reprogramming-for-clip-via-decoupling-visual-prompts)
- [Bayesian-guided Label Mapping for Visual Reprogramming (2024) — unknown](unknown)
- [Model Reprogramming Outperforms Fine-tuning on Out-of-distribution Data in Text-Image Encoders (2024) — SaTML](#model-reprogramming-outperforms-fine-tuning-on-out-of-distribution-data-in-text-image-encoders)
- [Model reprogramming: Resource-efficient cross-domain machine learning (2024) — AAAI](#model-reprogramming-resource-efficient-cross-domain-machine-learning)
- [Sample-specific Masks for Visual Reprogramming-based Prompting (2024) — unknown](unknown)
- [Time-llm: Time series forecasting by reprogramming large language models (2024) — ICLR](#time-llm-time-series-forecasting-by-reprogramming-large-language-models)
- [Deep graph reprogramming (2023) — CVPR](#deep-graph-reprogramming)
- [From english to more languages: Parameter-efficient model reprogramming for cross-lingual speech recognition (2023) — ICASSP](#from-english-to-more-languages-parameter-efficient-model-reprogramming-for-cross-lingual-speech-recognition)
- [Low-resource music genre classification with cross-modal neural model reprogramming (2023) — ICASSP](#low-resource-music-genre-classification-with-cross-modal-neural-model-reprogramming)
- [Reprogramming pretrained language models for antibody sequence infilling (2023) — ICML](#reprogramming-pretrained-language-models-for-antibody-sequence-infilling)
- [Adversarial Reprogramming Revisited (2022) — NeurIPS](#adversarial-reprogramming-revisited)
- [Cross-modal adversarial reprogramming (2022) — CVPR](#cross-modal-adversarial-reprogramming)
- [Neural model reprogramming with similarity based mapping for low-resource spoken command recognition (2021) — unknown](unknown)
- [Transfer Learning without Knowing: Reprogramming Black-box Machine Learning Models with Scarce Data and Limited Resources (2021) — ICML](https://arxiv.org/abs/2007.08714)
- [Voice2series: Reprogramming acoustic models for time series classification (2021) — ICML](#voice2series-reprogramming-acoustic-models-for-time-series-classification)
- [WARP: Word-level adversarial reprogramming (2021) — ACL-IJCNLP](#warp-word-level-adversarial-reprogramming)
- [Reprogramming Language Models for Molecular Representation Learning (2020) — NeurIPS Workshop](https://arxiv.org/abs/2012.03460)
- [Adversarial Reprogramming of Neural Networks (2019) — ICLR](https://arxiv.org/abs/1806.11146)
- [Adversarial Reprogramming of Text Classification Neural Networks (2019) — EMNLP/IJCNLP](https://arxiv.org/abs/1809.01829)

### Prompt Tuning

*15 papers*

- [ArGue: Attribute-Guided Prompt Tuning for Vision-Language Models (2024) — unknown](unknown)
- [On the Role of Attention in Prompt-tuning},   author  = (2023) — unknown](unknown)
- [Universal prompt tuning for graph neural networks (2023) — NeurIPS](#universal-prompt-tuning-for-graph-neural-networks)
- [When Do Prompting and Prefix-Tuning Work? A Theory of Capabilities and Limitations (2023) — unknown](unknown)
- [Differentiable prompt makes pre-trained language models better few-shot learners (2022) — ICLR](#differentiable-prompt-makes-pre-trained-language-models-better-few-shot-learners)
- [Learning to Prompt for Vision-Language Models (2022) — IJCV](https://arxiv.org/abs/2109.01134) · [code](https://github.com/KaiyangZhou/CoOp)
- [P-Tuning: Prompt Tuning Can Be Comparable to Fine-Tuning Across Scales and Tasks (2022) — ACL, Volume 2: Short Papers](#p-tuning-prompt-tuning-can-be-comparable-to-fine-tuning-across-scales-and-tasks)
- [PPT: Pre-trained Prompt Tuning for Few-shot Learning (2022) — Proceedings of ACL](#ppt-pre-trained-prompt-tuning-for-few-shot-learning)
- [PTR: Prompt Tuning with Rules for Text Classification (2022) — AI Open](#ptr-prompt-tuning-with-rules-for-text-classification)
- [Spot: Better frozen model adaptation through soft prompt transfer (2022) — ACL](https://arxiv.org/abs/2110.07904)
- [Visual prompt tuning (2022) — unknown](unknown)
- [Learning how to ask: Querying LMs with mixtures of soft prompts (2021) — NAACL](https://arxiv.org/abs/2104.06599)
- [P-tuning v2: Prompt tuning can be comparable to fine-tuning universally across scales and tasks (2021) — ACL](https://arxiv.org/abs/2110.07602)
- [Prefix-Tuning: Optimizing Continuous Prompts for Generation (2021) — ACL/IJCNLP](https://arxiv.org/abs/2101.00190)
- [The Power of Scale for Parameter-Efficient Prompt Tuning (2021) — EMNLP](https://arxiv.org/abs/2104.08691) · [code](https://github.com/google-research/prompt-tuning)

### Prompt Instruction

*4 papers*

- [Visual instruction tuning (2023) — NeurIPS](#visual-instruction-tuning)
- [Finetuned Language Models are Zero-Shot Learners (2022) — ICLR](#finetuned-language-models-are-zero-shot-learners)
- [Multitask Prompted Training Enables Zero-Shot Task Generalization (2022) — ICLR](#multitask-prompted-training-enables-zero-shot-task-generalization)
- [Training language models to follow instructions with human feedback (2022) — NeurIPS](#training-language-models-to-follow-instructions-with-human-feedback)

### In Context Learning

*7 papers*

- [In-context Learning with Retrieved Demonstrations for Language Models: A Survey},   author  = (2024) — unknown](unknown)
- [What Makes Good Examples for Visual In-Context Learning? (2023) — NeurIPS},   publisher =](unknown)
- [In-context learning and induction heads},   author  = (2022) — unknown](unknown)
- [Rethinking the Role of Demonstrations: What makes In-context Learning Work? (2022) — unknown](unknown)
- [Structured Prompting: Scaling In-Context Learning to 1,000 Examples},   author  = (2022) — unknown](unknown)
- [An Explanation of In-context Learning as Implicit Bayesian Inference (2021) — unknown](unknown)
- [Learning To Retrieve Prompts for In-Context Learning},   author  = (2021) — unknown](unknown)

### Instruction Tuning

*1 papers*

- [InstructBLIP: towards general-purpose vision-language models with instruction tuning (2023) — unknown](unknown)

### Prompting

*30 papers*

- [Draw-and-understand: Leveraging visual prompts to enable mllms to comprehend what you want},   author  = (2024) — unknown](unknown)
- [Exploring the Transferability of Visual Prompting for Multimodal Large Language Models (2024) — CVPR},   pages     =](unknown)
- [Joint visual and text prompting for improved object-centric perception with multimodal large language models},   author  = (2024) — unknown](unknown)
- [Pivot: Iterative visual prompting elicits actionable knowledge for vlms},   author  = (2024) — unknown](unknown)
- [Promptkd: Unsupervised prompt distillation for vision-language models (2024) — unknown](unknown)
- [The Prompt Report: A Systematic Survey of Prompting Techniques},   author  = (2024) — unknown](unknown)
- [Unleashing the Power of Visual Prompting At the Pixel Level},   author  = (2024) — unknown](unknown)
- [Visual Prompting in Multimodal Large Language Models: A Survey},   author  = (2024) — unknown](unknown)
- [Visual prompting reimagined: The power of activation prompts},   author = (2024) — unknown](unknown)
- [A Survey on Segment Anything Model (SAM): Vision Foundation Model Meets Prompt Engineering},   author  = (2023) — unknown](unknown)
- [A Systematic Survey of Prompt Engineering on Vision-Language Foundation Models},   author  = (2023) — unknown](unknown)
- [A simple zero-shot prompt weighting technique to improve prompt ensembling in text-image models (2023) — unknown](unknown)
- [Autovp: An automated visual prompting framework and benchmark (2023) — unknown](unknown)
- [Blackvip: Black-box visual prompting for robust transfer learning (2023) — unknown](unknown)
- [Explicit visual prompting for low-level structure segmentations (2023) — unknown](unknown)
- [Maple: Multi-modal prompt learning (2023) — unknown](unknown)
- [Set-of-mark prompting unleashes extraordinary visual grounding in gpt-4v},   author  = (2023) — unknown](unknown)
- [Transhp: Image classification with hierarchical prompting (2023) — unknown](unknown)
- [Tuning Multi-mode Token-level Prompt Alignment across Modalities (2023) — unknown](unknown)
- [Understanding and improving visual prompting: A label-mapping perspective (2023) — unknown](unknown)
- [What does a platypus look like? generating customized prompts for zero-shot image classification (2023) — unknown](unknown)
- [What does clip know about a red circle? visual prompt engineering for vlms (2023) — unknown](unknown)
- [Chain-of-thought prompting elicits reasoning in large language models (2022) — unknown](unknown)
- [Conditional prompt learning for vision-language models (2022) — unknown](unknown)
- [Decomposed prompting: A modular approach for solving complex tasks},   author  = (2022) — unknown](unknown)
- [Exploring visual prompts for adapting large-scale models},   author  = (2022) — unknown](unknown)
- [Learning to prompt for vision-language models},   author  = (2022) — unknown](unknown)
- [Least-to-most prompting enables complex reasoning in large language models (2022) — unknown](unknown)
- [Plot: Prompt learning with optimal transport for vision-language models (2022) — unknown](unknown)
- [Visual Prompting via Image Inpainting (2022) — unknown](unknown)

### Unknown

*1 papers*

- [Interleaving Retrieval with Chain-of-Thought Reasoning for Knowledge-Intensive Multi-Step Questions},   author  = (2022) — unknown](unknown)


_Generated: 2025-09-15 19:22 UTC_

<!-- AUTO:END -->

## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## Seeding From BibTeX (optional)

Convert BibTeX to YAML and refresh the README:

```bash
python scripts/bibtex_to_yaml.py my_refs.bib --out lists/papers.yaml --append \
  --category "prompt tuning"
python scripts/validate_lists.py
python scripts/render_readme.py
```

Flags: `--overwrite` to replace `lists/papers.yaml`; `--category` to force the mechanism for all entries (`model reprogramming`, `prompt tuning`, `prompt instruction`); `--default-mechanism/--default-location/--default-operator` to set fallbacks. Review tags to match `meta/tags.md`.

## License

[![CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
