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

*24 papers*

- [Attribute-based Visual Reprogramming for Vision-Language Models (2025) — ICLR](https://arxiv.org/abs/2501.13982)
- [Model Reprogramming Demystified: A Neural Tangent Kernel Perspective (2025) — arXiv](https://arxiv.org/abs/2506.0620)
- [Refine: Inversion-free backdoor defense via model reprogramming (2025) — ICLR](https://arxiv.org/abs/2502.18508)
- [Reprogramming pretrained language models for protein sequence representation learning (2025) — Digital Discovery](https://arxiv.org/abs/2301.02120)
- [Understanding Model Reprogramming for CLIP via Decoupling Visual Prompts (2025) — ICML 2025](https://arxiv.org/abs/2506.01000)
- [AutoVP: An Automated Visual Prompting Framework and Benchmark (2024) — ICLR](https://arxiv.org/abs/2310.08381)
- [Bayesian-guided Label Mapping for Visual Reprogramming (2024) — NeurIPS](https://arxiv.org/abs/2410.24018)
- [Model Reprogramming Outperforms Fine-tuning on Out-of-distribution Data in Text-Image Encoders (2024) — SatML](https://arxiv.org/abs/2403.10800)
- [Sample-specific Masks for Visual Reprogramming-based Prompting (2024) — ICML](https://arxiv.org/abs/2406.03150)
- [Time-LLM: Time Series Forecasting by Reprogramming Large Language Models (2024) — ICLR](https://arxiv.org/abs/2310.01728)
- [BlackVIP: Black-Box Visual Prompting for Robust Transfer Learning (2023) — CVPR](https://arxiv.org/abs/2303.14773)
- [Deep Graph Reprogramming (2023) — CVPR](https://arxiv.org/abs/2304.14593)
- [From English to More Languages: Parameter-Efficient Model Reprogramming for Cross-Lingual Speech Recognition (2023) — ICASSP](https://arxiv.org/abs/2301.07851)
- [Reprogramming Pretrained Language Models for Antibody Sequence Infilling (2023) — ICML](https://arxiv.org/abs/2210.07144)
- [Understanding and Improving Visual Prompting: A Label-Mapping Perspective (2023) — CVPR](https://arxiv.org/abs/2211.11635)
- [Adversarial Reprogramming Revisited (2022) — NeurIPS](https://arxiv.org/abs/2206.03466)
- [Cross-modal Adversarial Reprogramming (2022) — WACV](https://arxiv.org/abs/2102.07325)
- [Unleashing the Power of Visual Prompting At the Pixel Level (2022) — arXiv](https://arxiv.org/abs/2212.10556)
- [Transfer Learning without Knowing: Reprogramming Black-box Machine Learning Models with Scarce Data and Limited Resources (2021) — ICML](https://arxiv.org/abs/2007.08714)
- [Voice2series: Reprogramming acoustic models for time series classification (2021) — ICML](https://arxiv.org/abs/2106.09296)
- [WARP: Word-level Adversarial ReProgramming (2021) — ACL / ACL-IJCNLP](https://arxiv.org/abs/2101.00121)
- [Reprogramming Language Models for Molecular Representation Learning (2020) — NeurIPS Workshop](https://arxiv.org/abs/2012.03460)
- [Adversarial Reprogramming of Neural Networks (2019) — ICLR](https://arxiv.org/abs/1806.11146)
- [Adversarial Reprogramming of Text Classification Neural Networks (2019) — EMNLP/IJCNLP](https://arxiv.org/abs/1809.01829)

### Prompt Tuning

*20 papers*

- [Draw-and-Understand: Leveraging Visual Prompts to Enable MLLMs to Comprehend What You Want (2025) — ICLR](https://arxiv.org/abs/2403.20271)
- [ArGue: Attribute-Guided Prompt Tuning for Vision-Language Models (2024) — CVPR](https://arxiv.org/abs/2311.16494)
- [PromptKD: Unsupervised Prompt Distillation for Vision-Language Models (2024) — CVPR](https://arxiv.org/abs/2403.02781)
- [MaPLe: Multi-modal Prompt Learning (2023) — CVPR](https://arxiv.org/abs/2210.03117)
- [On the Role of Attention in Prompt-tuning (2023) — ICML 2023](https://arxiv.org/abs/2306.03435)
- [PLOT: Prompt Learning with Optimal Transport for Vision-Language Models (2023) — ICLR](https://arxiv.org/abs/2210.01253)
- [TransHP: Image Classification with Hierarchical Prompting (2023) — NeurIPS](https://arxiv.org/abs/2304.06385)
- [Tuning Multi-mode Token-level Prompt Alignment across Modalities (2023) — NeurIPS 2023](https://arxiv.org/abs/2309.13847)
- [Universal Prompt Tuning for Graph Neural Networks (2023) — NeurIPS](https://arxiv.org/abs/2209.15240)
- [Visual Instruction Tuning (2023) — NeurIPS](https://arxiv.org/abs/2304.08485)
- [Conditional Prompt Learning for Vision-Language Models (2022) — CVPR](https://arxiv.org/abs/2203.05557)
- [Learning to Prompt for Vision-Language Models (2022) — IJCV](https://arxiv.org/abs/2109.01134) · [code](https://github.com/KaiyangZhou/CoOp)
- [Learning to Prompt for Vision-Language Models (2022) — IJCV](https://arxiv.org/abs/2109.01134)
- [P-tuning v2: Prompt tuning can be comparable to fine-tuning universally across scales and tasks (2022) — ACL](https://arxiv.org/abs/2110.07602)
- [PPT: Pre-trained Prompt Tuning for Few-shot Learning (2022) — ACL](https://arxiv.org/abs/2109.04332)
- [Spot: Better frozen model adaptation through soft prompt transfer (2022) — ACL](https://arxiv.org/abs/2110.07904)
- [Learning how to ask: Querying LMs with mixtures of soft prompts (2021) — NAACL](https://arxiv.org/abs/2104.06599)
- [PTR: Prompt Tuning with Rules for Text Classification (2021) — arXiv preprint (cs.CL)](https://arxiv.org/abs/2105.11259)
- [Prefix-Tuning: Optimizing Continuous Prompts for Generation (2021) — ACL/IJCNLP](https://arxiv.org/abs/2101.00190)
- [The Power of Scale for Parameter-Efficient Prompt Tuning (2021) — EMNLP](https://arxiv.org/abs/2104.08691) · [code](https://github.com/google-research/prompt-tuning)

### Prompt Instruction

*16 papers*

- [Joint Visual and Text Prompting for Improved Object-Centric Perception with Multimodal Large Language Models (2024) — arXiv](https://arxiv.org/abs/2404.04514)
- [PIVOT: Iterative Visual Prompting Elicits Actionable Knowledge for VLMs (2024) — ICML](https://arxiv.org/abs/2402.07872)
- [A Simple Zero-shot Prompt Weighting Technique to Improve Prompt Ensembling in Text-Image Models (2023) — ICML](https://arxiv.org/abs/2302.06235)
- [Decomposed Prompting: A Modular Approach for Solving Complex Tasks (2023) — ICLR](https://arxiv.org/abs/2210.02406)
- [Interleaving Retrieval with Chain-of-Thought Reasoning for Knowledge-Intensive Multi-Step Questions (2023) — ACL](https://arxiv.org/abs/2212.10509)
- [Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V (2023) — arXiv](https://arxiv.org/abs/2310.11441)
- [What Does a Platypus Look Like? Generating Customized Prompts for Zero-Shot Image Classification (2023) — ICCV](https://arxiv.org/abs/2209.03320)
- [What Makes Good Examples for Visual In-Context Learning? (2023) — arXiv](https://arxiv.org/abs/2301.13670)
- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (2022) — NeurIPS](https://arxiv.org/abs/2201.11903)
- [Differentiable Prompt Makes Pre-trained Language Models Better Few-shot Learners (2022) — ICLR](https://arxiv.org/abs/2108.13161)
- [In-context Learning and Induction Heads (2022) — arXiv](https://arxiv.org/abs/2209.11895)
- [Least-to-Most Prompting Enables Complex Reasoning in Large Language Models (2022) — ICLR](https://arxiv.org/abs/2205.10625)
- [Rethinking the Role of Demonstrations: What Makes In-Context Learning Work? (2022) — EMNLP](https://arxiv.org/abs/2202.12837)
- [Structured Prompting: Scaling In-Context Learning to 1,000 Examples (2022) — arXiv](https://arxiv.org/abs/2212.06713)
- [Visual Prompt Tuning (2022) — ECCV](https://arxiv.org/abs/2203.12119)
- [Visual Prompting via Image Inpainting (2022) — NeurIPS](https://arxiv.org/abs/2209.00647)

### In Context Learning

*1 papers*

- [An Explanation of In-context Learning as Implicit Bayesian Inference (2022) — ICLR](https://arxiv.org/abs/2111.02080)

### Learnable

*1 papers*

- [Neural Model Reprogramming with Similarity Based Mapping for Low-Resource Spoken Command Recognition (2023) — Interspeech](https://arxiv.org/abs/2110.03894)

### Mr

*1 papers*

- [Low-Resource Music Genre Classification with Cross-Modal Neural Model Reprogramming (2023) — ICASSP](https://arxiv.org/abs/2211.01317)

### Pi

*1 papers*

- [Multitask Prompted Training Enables Zero-Shot Task Generalization (2022) — ICLR 2022 (Spotlight) :contentReference[oaicite:0]{index=0}](https://arxiv.org/abs/2110.08207)

### Prompt Retrieval

*1 papers*

- [Learning To Retrieve Prompts for In-Context Learning (2022) — NAACL](https://arxiv.org/abs/2112.08633)

### Prompt Tuning / Prompt Instruction

*1 papers*

- [When Do Prompting and Prefix-Tuning Work? A Theory of Capabilities and Limitations (2024) — ICLR](https://arxiv.org/pdf/2310.19698)

### Soft Prompt

*1 papers*

- [InstructBLIP: Towards General-purpose Vision-Language Models with Instruction Tuning (2023) — NeurIPS](https://arxiv.org/abs/2305.06500)

### Visual Prompting

*3 papers*

- [Exploring the Transferability of Visual Prompting for Multimodal Large Language Models (2024) — CVPR](https://arxiv.org/abs/2404.11207)
- [Explicit Visual Prompting for Low-Level Structure Segmentations (2023) — CVPR](https://arxiv.org/abs/2303.10883)
- [Exploring Visual Prompts for Adapting Large-Scale Models (2022) — arXiv](https://arxiv.org/abs/2203.17274)


_Generated: 2025-09-16 23:53 UTC_

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
