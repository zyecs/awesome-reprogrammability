# Awesome Neural Network Reprogrammability [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<div align="center">

> A comprehensive, curated collection of resources on neural network reprogrammability - the art of adapting pre-trained models for new tasks without updating their parameters.

<!-- [![GitHub stars](https://img.shields.io/github/stars/your-username/awesome-reprogrammability?style=social)](https://github.com/your-username/awesome-reprogrammability/stargazers) -->
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--09--17-blue.svg)](README.md)

</div>

---

## 📖 What is Neural Network Reprogrammability?

**Neural network reprogrammability** is a unified framework for adapting pre-trained models to new tasks without modifying their parameters, through a fundamental principle of **interface manipulation** - 
modifying downstream tasks to align with models rather than changing the models themselves.

<div align="center">
<img src="assets/purpose.jpg" alt="Neural Network Reprogrammability Overview" width="80%">
</div>

This encompasses three core paradigms:

- 🔧 **Model Reprogramming**: Learning input transformation (e.g., learnable noises) to repurpose frozen models
- 🎯 **Prompt Tuning**: Optimizing continuous token prompts (e.g., soft ) to guide model behavior
- 💬 **Prompt Instruction**: Using natural language/visual examples (i.e., fixed to elicit in-context learning


## 🗂️ Contents

- [🏗️ Theoretical Framework](#-theoretical-framework)
- [📚 Resources by Type](#-resources-by-type)
  - [📄 Research Papers](#-research-papers)
  - [🛠️ Tools & Libraries](#-tools--libraries)
  - [📊 Datasets & Benchmarks](#-datasets--benchmarks)
  - [📖 Educational Resources](#-educational-resources)
- [🔬 Explore by Taxonomy](#-explore-by-taxonomy)
- [🚀 Applications & Use Cases](#-applications--use-cases)
- [🎓 Learning Path](#-learning-path)
- [🤝 Contributing](#-contributing)

---

## 🏗️ Theoretical Framework

Neural network reprogrammability operates across **four key dimensions**, providing a unified way to understand all adaptation approaches:

### 🧮 Mathematical Foundation

The core principle of neural network reprogrammability can be expressed through the **universal reprogramming equation**:

$$\hat{y}_T = O_{\omega} \circ f \circ I_{\lambda, \tau, \ell} (\mathbf{x}^{\rm T}, c) $$

Where:
- **$f$**: Pre-trained source model (frozen parameters)
- **$\mathbf{x}^{\rm T}$**: Target task input (e.g., image, text)
- **$\lambda$**: Manipulation configuration (i.e., learnable or fixed)
- **$\ell$**: Location where reprogramming is applied
- **$\tau$**: Transformation operator (additive, concatenative, parametric)
- **$\omega$**: Output alignment function
- **$\hat{y}_T$**: Predicted output for target task

**Key Insight**: All three paradigms (Model Reprogramming, Prompt Tuning, Prompt Instruction) are special cases of this unified framework, differing only in their choice of $(\lambda, \ell, \tau, \omega)$.

### 📐 Four-Dimensional Taxonomy

<table>
<tr>
<td><strong>🔧 Configuration (λ)</strong><br><em>Parameter Format</em></td>
<td><strong>📍 Location (ℓ)</strong><br><em>Where Applied</em></td>
<td><strong>⚙️ Operator (τ)</strong><br><em>How Applied</em></td>
<td><strong>🎯 Alignment (ω)</strong><br><em>Task Mapping</em></td>
</tr>
<tr>
<td>
• <strong>Learnable</strong>: Optimized parameters<br>
• <strong>Fixed</strong>: Manual/rule-based<br>
</td>
<td>
• <strong>Input</strong>: Raw input space<br>
• <strong>Embedding</strong>: Token/feature embeddings<br>
• <strong>Hidden</strong>: Intermediate representations<br>
</td>
<td>
• <strong>Additive</strong>: Adding components<br>
• <strong>Concatenative</strong>: Joining elements<br>
• <strong>Parametric</strong>: Learned transformations<br>
</td>
<td>
• <strong>Identity</strong>: Direct mapping<br>
• <strong>Rule-based</strong>: Structured rules
• <strong>Linear</strong>: Linear transformations<br>
• <strong>Statistical</strong>: Counting-based relation<br>
</td>
</tr>
</table>

### 🧩 Method Characteristics

| Method | Configuration | Typical Location | Common Operators | Alignment |
|--------|---------------|------------------|------------------|-----------|
| **Model Reprogramming** | Learnable | Input, Embedding | Additive, Parametric | Statistical, Linear |
| **Prompt Tuning** | Learnable | Embedding, Hidden | Concatenative | Linear, Identity |
| **Prompt Instruction** | Fixed | Input | Concatenative | Rule-based, Identity |

> 📖 **Learn More**: [Complete Taxonomy Guide](meta/taxonomy.md) • [Survey Paper](https://arxiv.org/html/2506.04650v2)

---

## 📚 Resources by Type

### 📄 Research Papers

#### 🏆 Foundational Papers

- **[Adversarial Reprogramming of Neural Networks](https://arxiv.org/abs/1806.11146)** (Elsayed et al., 2019, ICLR) - The seminal work introducing adversarial reprogramming
- **[The Power of Scale for Parameter-Efficient Prompt Tuning](https://arxiv.org/abs/2104.08691)** (Lester et al., 2021, EMNLP) - Foundational prompt tuning research
- **[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)** (Wei et al., 2022, NeurIPS) - Breakthrough in instruction-based reasoning

<!-- AUTO:START -->


#### 📈 Recent Advances (2023-2025) (auto-generated)

<details>
<summary><strong>Model Reprogramming</strong> <em>(17 papers)</em></summary>

- [Attribute-based Visual Reprogramming for Vision-Language Models](https://arxiv.org/abs/2501.13982) (2025, ICLR)
- [Model Reprogramming Demystified: A Neural Tangent Kernel Perspective](https://arxiv.org/abs/2506.0620) (2025, arXiv)
- [Refine: Inversion-free backdoor defense via model reprogramming](https://arxiv.org/abs/2502.18508) (2025, ICLR)
- [Reprogramming pretrained language models for protein sequence representation learning](https://arxiv.org/abs/2301.02120) (2025, Digital Discovery)
- [Understanding Model Reprogramming for CLIP via Decoupling Visual Prompts](https://arxiv.org/abs/2506.01000) (2025, ICML 2025)
- [AutoVP: An Automated Visual Prompting Framework and Benchmark](https://arxiv.org/abs/2310.08381) (2024, ICLR)
- [Bayesian-guided Label Mapping for Visual Reprogramming](https://arxiv.org/abs/2410.24018) (2024, NeurIPS)
- [Model Reprogramming Outperforms Fine-tuning on Out-of-distribution Data in Text-Image Encoders](https://arxiv.org/abs/2403.10800) (2024, SatML)
- [Sample-specific Masks for Visual Reprogramming-based Prompting](https://arxiv.org/abs/2406.03150) (2024, ICML)
- [Time-LLM: Time Series Forecasting by Reprogramming Large Language Models](https://arxiv.org/abs/2310.01728) (2024, ICLR)
- [BlackVIP: Black-Box Visual Prompting for Robust Transfer Learning](https://arxiv.org/abs/2303.14773) (2023, CVPR)
- [Deep Graph Reprogramming](https://arxiv.org/abs/2304.14593) (2023, CVPR)
- [From English to More Languages: Parameter-Efficient Model Reprogramming for Cross-Lingual Speech Recognition](https://arxiv.org/abs/2301.07851) (2023, ICASSP)
- [Low-Resource Music Genre Classification with Cross-Modal Neural Model Reprogramming](https://arxiv.org/abs/2211.01317) (2023, ICASSP)
- [Neural Model Reprogramming with Similarity Based Mapping for Low-Resource Spoken Command Recognition](https://arxiv.org/abs/2110.03894) (2023, Interspeech)
- [Reprogramming Pretrained Language Models for Antibody Sequence Infilling](https://arxiv.org/abs/2210.07144) (2023, ICML)
- [Understanding and Improving Visual Prompting: A Label-Mapping Perspective](https://arxiv.org/abs/2211.11635) (2023, CVPR)

</details>

<details>
<summary><strong>Prompt Tuning</strong> <em>(13 papers)</em></summary>

- [Draw-and-Understand: Leveraging Visual Prompts to Enable MLLMs to Comprehend What You Want](https://arxiv.org/abs/2403.20271) (2025, ICLR)
- [ArGue: Attribute-Guided Prompt Tuning for Vision-Language Models](https://arxiv.org/abs/2311.16494) (2024, CVPR)
- [Exploring the Transferability of Visual Prompting for Multimodal Large Language Models](https://arxiv.org/abs/2404.11207) (2024, CVPR)
- [PromptKD: Unsupervised Prompt Distillation for Vision-Language Models](https://arxiv.org/abs/2403.02781) (2024, CVPR)
- [Explicit Visual Prompting for Low-Level Structure Segmentations](https://arxiv.org/abs/2303.10883) (2023, CVPR)
- [InstructBLIP: Towards General-purpose Vision-Language Models with Instruction Tuning](https://arxiv.org/abs/2305.06500) (2023, NeurIPS)
- [MaPLe: Multi-modal Prompt Learning](https://arxiv.org/abs/2210.03117) (2023, CVPR)
- [On the Role of Attention in Prompt-tuning](https://arxiv.org/abs/2306.03435) (2023, ICML 2023)
- [PLOT: Prompt Learning with Optimal Transport for Vision-Language Models](https://arxiv.org/abs/2210.01253) (2023, ICLR)
- [TransHP: Image Classification with Hierarchical Prompting](https://arxiv.org/abs/2304.06385) (2023, NeurIPS)
- [Tuning Multi-mode Token-level Prompt Alignment across Modalities](https://arxiv.org/abs/2309.13847) (2023, NeurIPS 2023)
- [Universal Prompt Tuning for Graph Neural Networks](https://arxiv.org/abs/2209.15240) (2023, NeurIPS)
- [Visual Instruction Tuning](https://arxiv.org/abs/2304.08485) (2023, NeurIPS)

</details>

<details>
<summary><strong>Prompt Instruction</strong> <em>(8 papers)</em></summary>

- [Joint Visual and Text Prompting for Improved Object-Centric Perception with Multimodal Large Language Models](https://arxiv.org/abs/2404.04514) (2024, arXiv)
- [PIVOT: Iterative Visual Prompting Elicits Actionable Knowledge for VLMs](https://arxiv.org/abs/2402.07872) (2024, ICML)
- [A Simple Zero-shot Prompt Weighting Technique to Improve Prompt Ensembling in Text-Image Models](https://arxiv.org/abs/2302.06235) (2023, ICML)
- [Decomposed Prompting: A Modular Approach for Solving Complex Tasks](https://arxiv.org/abs/2210.02406) (2023, ICLR)
- [Interleaving Retrieval with Chain-of-Thought Reasoning for Knowledge-Intensive Multi-Step Questions](https://arxiv.org/abs/2212.10509) (2023, ACL)
- [Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V](https://arxiv.org/abs/2310.11441) (2023, arXiv)
- [What Does a Platypus Look Like? Generating Customized Prompts for Zero-Shot Image Classification](https://arxiv.org/abs/2209.03320) (2023, ICCV)
- [What Makes Good Examples for Visual In-Context Learning?](https://arxiv.org/abs/2301.13670) (2023, arXiv)

</details>

<details>
<summary><strong>Prompt Tuning / Prompt Instruction</strong> <em>(1 papers)</em></summary>

- [When Do Prompting and Prefix-Tuning Work? A Theory of Capabilities and Limitations](https://arxiv.org/pdf/2310.19698) (2024, ICLR)

</details>

> 📋 **Complete List**: [All Papers with Taxonomy Classification](docs/sections/papers.md)

_Last updated: 2025-09-17 15:49 UTC_

<!-- AUTO:END -->

### 🛠️ Tools & Libraries

#### 🔧 Frameworks & Libraries

- **[OpenPrompt](https://github.com/thunlp/OpenPrompt)** - Comprehensive framework for prompt learning
- **[Promptsource](https://github.com/bigscience-workshop/promptsource)** - Toolkit for creating and sharing prompts
- **[Visual Prompting](https://github.com/hjbahng/visual_prompting)** - Tools for visual prompt learning
- **[Time-LLM](https://github.com/KimMeen/Time-LLM)** - Time series forecasting via LLM reprogramming

#### 🧰 Development Tools

- **[Prompt Engineering Guide](https://www.promptingguide.ai/)** - Comprehensive guide and best practices
- **[LangChain](https://github.com/langchain-ai/langchain)** - Framework with prompt templates and chains
- **[Guidance](https://github.com/guidance-ai/guidance)** - Structured prompt programming

#### 📊 Evaluation & Benchmarks

- **[BIG-bench](https://github.com/google/BIG-bench)** - Beyond the Imitation Game benchmark
- **[HELM](https://github.com/stanford-crfm/helm)** - Holistic evaluation of language models
- **[SuperGLUE](https://super.gluebenchmark.com/)** - General language understanding evaluation

### 📊 Datasets & Benchmarks

#### 🎯 Few-Shot Learning

- **[MetaDataset](https://github.com/google-research/meta-dataset)** - Meta-learning benchmark
- **[VTAB](https://github.com/google-research/task_adaptation)** - Visual Task Adaptation Benchmark
- **[FewRel](https://github.com/thunlp/FewRel)** - Few-shot relation classification

#### 🔄 Cross-Domain Transfer

- **[DomainNet](http://ai.bu.edu/M3SDA/)** - Multi-source domain adaptation
- **[Office-31](https://faculty.cc.gatech.edu/~judy/domainadapt/)** - Office domain adaptation
- **[VisDA](http://ai.bu.edu/visda-2017/)** - Visual domain adaptation challenge

#### 📝 Text-to-Text

- **[GLUE](https://gluebenchmark.com/)** - General Language Understanding Evaluation
- **[SuperGLUE](https://super.gluebenchmark.com/)** - More challenging language understanding
- **[T5 Evaluation](https://github.com/google-research/text-to-text-transfer-transformer)** - Text-to-text transfer transformer tasks

### 📖 Educational Resources

#### 🎓 Tutorials & Courses

- **[Prompt Engineering Course](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)** (DeepLearning.AI)
- **[Visual Prompting Tutorial](tutorial-AAAI26/)** - AAAI 2026 tutorial materials
- **[Model Reprogramming Workshop](https://example.com)** - Workshop materials and videos

#### 📚 Books & Surveys

- **[A Comprehensive Survey of Neural Network Reprogrammability](https://arxiv.org/html/2506.04650v2)** - Definitive survey paper
- **[Pre-train, Prompt, and Predict](https://arxiv.org/abs/2107.13586)** - Natural language processing paradigm
- **[Parameter-Efficient Transfer Learning](https://arxiv.org/abs/1902.00751)** - Survey of efficient adaptation methods

#### 🎬 Videos & Talks

- **[Reprogramming Neural Networks](https://www.youtube.com/watch?v=example)** - Conference keynote
- **[Prompt Learning Deep Dive](https://www.youtube.com/watch?v=example)** - Technical tutorial
- **[Future of Model Adaptation](https://www.youtube.com/watch?v=example)** - Panel discussion

---

## 🔬 Explore by Taxonomy

Navigate resources by the four-dimensional taxonomy:

### 🔧 By Configuration

- **[Learnable Approaches](docs/sections/taxonomy.md#learnable)** - Optimization-based methods
- **[Fixed Approaches](docs/sections/taxonomy.md#fixed)** - Rule-based and manual methods
- **[Hybrid Approaches](docs/sections/taxonomy.md#hybrid)** - Combined strategies

### 📍 By Location

- **[Input Space](docs/sections/taxonomy.md#input)** - Raw input modifications
- **[Embedding Space](docs/sections/taxonomy.md#embedding)** - Token/feature embeddings
- **[Hidden Space](docs/sections/taxonomy.md#hidden)** - Intermediate representations
- **[Output Space](docs/sections/taxonomy.md#output)** - Final layer adaptations

### ⚙️ By Operator

- **[Additive](docs/sections/taxonomy.md#additive)** - Adding new components
- **[Concatenative](docs/sections/taxonomy.md#concatenative)** - Joining elements
- **[Parametric](docs/sections/taxonomy.md#parametric)** - Learned transformations
- **[Replacement](docs/sections/taxonomy.md#replacement)** - Component substitution

### 🎯 By Alignment

- **[Identity Mapping](docs/sections/taxonomy.md#identity)** - Direct output use
- **[Linear Alignment](docs/sections/taxonomy.md#linear)** - Linear transformations
- **[Statistical Alignment](docs/sections/taxonomy.md#statistical)** - Distribution matching
- **[Rule-based Alignment](docs/sections/taxonomy.md#rule-based)** - Structured mapping

---

## 🚀 Applications & Use Cases

### 🎯 Core Applications

#### 📸 Computer Vision
- **Zero-shot Image Classification** - Adapting vision models to new categories
- **Cross-domain Transfer** - Medical imaging, satellite imagery, artistic styles
- **Few-shot Object Detection** - Limited annotation scenarios

#### 🗣️ Natural Language Processing
- **Task Adaptation** - Sentiment analysis, summarization, QA
- **Domain Transfer** - Legal, medical, scientific text processing
- **Multilingual Transfer** - Cross-lingual understanding and generation

#### 🎵 Audio & Speech
- **Cross-modal Reprogramming** - Audio classification using vision models
- **Speech Recognition** - Low-resource language adaptation
- **Music Analysis** - Genre classification and content understanding

#### 🧬 Scientific Domains
- **Protein Analysis** - Sequence understanding and property prediction
- **Time Series** - Forecasting using language model reprogramming
- **Graph Analysis** - Network understanding and node classification

### 💼 Industry Use Cases

- **🏥 Healthcare**: Medical image analysis, patient record processing
- **🏭 Manufacturing**: Quality control, predictive maintenance
- **💰 Finance**: Fraud detection, risk assessment
- **🛒 E-commerce**: Recommendation systems, customer support
- **🎮 Entertainment**: Content generation, game AI

---

## 🎓 Learning Path

### 🌱 Beginner Track

1. **Foundations**
   - Read the [survey paper](https://arxiv.org/html/2506.04650v2)
   - Understand the [four-dimensional taxonomy](meta/taxonomy.md)

2. **First Steps**
   - Try [simple prompt engineering](https://www.promptingguide.ai/introduction/basics)
   - Experiment with [visual prompting](https://github.com/hjbahng/visual_prompting)

3. **Hands-on Practice**
   - Use [OpenPrompt](https://github.com/thunlp/OpenPrompt) for text tasks
   - Try [CoOp](https://github.com/KaiyangZhou/CoOp) for vision-language models

### 🚀 Intermediate Track

1. **Deep Dive**
   - Study foundational papers by approach
   - Implement basic reprogramming methods

2. **Specialization**
   - Choose a domain (vision, NLP, audio)
   - Explore domain-specific techniques

3. **Research Skills**
   - Reproduce key results
   - Experiment with novel combinations

### 🔬 Advanced Track

1. **Theoretical Understanding**
   - Study the mathematical foundations
   - Explore connections between methods

2. **Novel Research**
   - Identify research gaps
   - Develop new approaches

3. **Community Contribution**
   - Publish papers
   - Contribute to open source projects

---

## 🏆 Featured Projects & Implementations

### 🌟 Flagship Projects

- **[CoOp & CoCoOp](https://github.com/KaiyangZhou/CoOp)** - Learning to prompt for vision-language models
- **[Time-LLM](https://github.com/KimMeen/Time-LLM)** - Time series forecasting by reprogramming LLMs
- **[Visual Prompting](https://github.com/hjbahng/visual_prompting)** - Comprehensive visual prompt learning
- **[WARP](https://github.com/YerevaNN/WARP)** - Word-level adversarial reprogramming

### 🔥 Recent Breakthroughs

- **AutoVP** - Automated visual prompting framework
- **MaPLe** - Multi-modal prompt learning
- **Set-of-Mark** - Visual grounding with structured prompts

---

## 📊 Quick Stats

<div align="center">

| Category | Count | Latest Addition |
|----------|-------|----------------|
| 📄 **Research Papers** | 69+ | 2025-01 |
| 🛠️ **Tools & Libraries** | 15+ | 2024-12 |
| 📊 **Datasets** | 12+ | 2024-11 |
| 🎓 **Educational Resources** | 8+ | 2024-10 |

</div>

---

## 🤝 Contributing

We welcome contributions from the community! This awesome list thrives on community input.

### 🎯 What We're Looking For

- **High-quality papers** with novel insights or strong empirical results
- **Well-maintained tools** that are actively developed and documented
- **Comprehensive datasets** that enable fair evaluation
- **Educational content** that helps others learn

### 📝 How to Contribute

1. **Fork** this repository
2. **Add** your resource following our [guidelines](CONTRIBUTING.md)
3. **Validate** using our automated tools
4. **Submit** a pull request

### 🔍 Validation Process

Before submitting, please run:
```bash
python scripts/validate_lists.py
python scripts/linkcheck.py
python scripts/render_readme.py
```

> 📖 **Full Guidelines**: [Contributing Guide](CONTRIBUTING.md)

---

## 🙏 Acknowledgments

This awesome list is built upon the comprehensive survey ["A Comprehensive Survey of Neural Network Reprogrammability"](https://arxiv.org/html/2506.04650v2) and the collective work of researchers worldwide advancing the field of neural network reprogrammability.

Special thanks to all [contributors](https://github.com/your-username/awesome-reprogrammability/graphs/contributors) who help maintain and improve this resource.

---

## 📄 License

[![CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

---

<div align="center">

**⭐ Star this repository if you find it helpful! ⭐**

[🔝 Back to Top](#awesome-neural-network-reprogrammability-)

</div>