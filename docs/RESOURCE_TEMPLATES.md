# Resource Templates

This document provides templates for adding new resources to the Awesome Neural Network Reprogrammability list. Please follow these templates to ensure consistency and quality.

## 📄 Research Paper Template

```markdown
- **[Paper Title](paper-url)** (Authors et al., Year, Venue) - Brief description highlighting key contribution or novelty
  - 📊 **Taxonomy**: Configuration | Location | Operator | Alignment
  - 🔗 **Code**: [repository-name](code-url) (if available)
  - 📖 **Dataset**: [dataset-name](dataset-url) (if provided)
```

**Example:**
```markdown
- **[Adversarial Reprogramming of Neural Networks](https://arxiv.org/abs/1806.11146)** (Elsayed et al., 2019, ICLR) - Seminal work introducing adversarial reprogramming for cross-task transfer
  - 📊 **Taxonomy**: Learnable | Input | Additive | Statistical
  - 🔗 **Code**: [adversarial-reprogramming](https://github.com/google-research/google-research/tree/master/adversarial_reprogramming)
```

## 🛠️ Tool/Library Template

```markdown
- **[Tool Name](tool-url)** - Comprehensive description of what the tool does, its main features, and supported use cases
  - 🏷️ **Category**: Framework/Library/Development Tool/Evaluation
  - 💻 **Language**: Primary programming language
  - 📚 **Documentation**: [docs-url](documentation-link)
  - ⭐ **Stars**: Current GitHub star count (if applicable)
  - 🏃 **Status**: Active/Maintained/Archived
```

**Example:**
```markdown
- **[OpenPrompt](https://github.com/thunlp/OpenPrompt)** - Comprehensive framework for prompt learning with support for multiple models and prompt types
  - 🏷️ **Category**: Framework
  - 💻 **Language**: Python
  - 📚 **Documentation**: [openprompt.readthedocs.io](https://openprompt.readthedocs.io/)
  - ⭐ **Stars**: 4.2k+
  - 🏃 **Status**: Active
```

## 📊 Dataset/Benchmark Template

```markdown
- **[Dataset Name](dataset-url)** - Description of the dataset, its purpose, and key characteristics
  - 📏 **Size**: Number of samples/images/examples
  - 🏷️ **Domain**: Computer Vision/NLP/Audio/Multimodal
  - 🎯 **Task**: Specific task type (classification, detection, etc.)
  - 📄 **Paper**: [paper-title](paper-url)
  - 💾 **Download**: [download-link](download-url)
```

**Example:**
```markdown
- **[MetaDataset](https://github.com/google-research/meta-dataset)** - Large-scale meta-learning benchmark for few-shot classification
  - 📏 **Size**: 10 datasets, 1000+ classes
  - 🏷️ **Domain**: Computer Vision
  - 🎯 **Task**: Few-shot classification
  - 📄 **Paper**: [Meta-Dataset: A Dataset of Datasets for Learning to Learn from Few Examples](https://arxiv.org/abs/1903.03096)
  - 💾 **Download**: [tfds.load('meta_dataset')](https://www.tensorflow.org/datasets/catalog/meta_dataset)
```

## 📖 Educational Resource Template

```markdown
- **[Resource Title](resource-url)** - Description of the educational content and target audience
  - 🏷️ **Type**: Tutorial/Course/Book/Video/Workshop
  - 🎓 **Level**: Beginner/Intermediate/Advanced
  - ⏱️ **Duration**: Estimated time to complete (for courses/tutorials)
  - 👥 **Author**: Creator or institution
  - 💰 **Cost**: Free/Paid
```

**Example:**
```markdown
- **[Prompt Engineering Course](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)** - Hands-on course covering prompt design patterns and best practices
  - 🏷️ **Type**: Course
  - 🎓 **Level**: Beginner to Intermediate
  - ⏱️ **Duration**: ~2 hours
  - 👥 **Author**: DeepLearning.AI
  - 💰 **Cost**: Free
```

## 🚀 Application/Implementation Template

```markdown
- **[Project Name](project-url)** - Description of the application, problem solved, and approach used
  - 🏷️ **Category**: Real-world Application/Demo/Implementation
  - 🔧 **Method**: Model Reprogramming/Prompt Tuning/Prompt Instruction
  - 🎯 **Domain**: Application domain
  - 📊 **Results**: Key performance metrics or achievements
  - 🔗 **Code**: [repository](code-url) (if available)
```

**Example:**
```markdown
- **[Time-LLM](https://github.com/KimMeen/Time-LLM)** - Time series forecasting by reprogramming large language models
  - 🏷️ **Category**: Implementation
  - 🔧 **Method**: Model Reprogramming
  - 🎯 **Domain**: Time Series Analysis
  - 📊 **Results**: SOTA on 7/8 forecasting benchmarks
  - 🔗 **Code**: [Time-LLM](https://github.com/KimMeen/Time-LLM)
```

## 🔬 Evaluation Guidelines

When adding resources, ensure they meet these quality criteria:

### For Papers:
- [ ] Published in reputable venue (conference/journal) or high-quality preprint
- [ ] Clear contribution to neural network reprogrammability
- [ ] Reproducible results with available code/data (preferred)
- [ ] Proper taxonomy classification

### For Tools:
- [ ] Well-documented with clear installation instructions
- [ ] Active maintenance or stable release
- [ ] Relevant to the reprogrammability community
- [ ] Working links and accessible repositories

### For Datasets:
- [ ] Publicly available and accessible
- [ ] Clear documentation and usage instructions
- [ ] Relevant to reprogrammability evaluation
- [ ] Proper licensing information

### For Educational Resources:
- [ ] High-quality, accurate content
- [ ] Clear learning objectives
- [ ] Appropriate for stated skill level
- [ ] Accessible to the target audience

## 📝 Submission Checklist

Before submitting a new resource:

1. **Choose the appropriate template** based on resource type
2. **Fill in all required fields** with accurate information
3. **Verify all links** are working and accessible
4. **Check for duplicates** in the existing list
5. **Ensure quality standards** are met
6. **Place in correct section** based on resource type and taxonomy
7. **Use consistent formatting** following the template
8. **Add brief but informative description** highlighting key aspects

## 🏷️ Taxonomy Classification Guide

For research papers, classify using the four-dimensional taxonomy:

- **Configuration (λ)**: Learnable, Fixed, or Hybrid
- **Location (ℓ)**: Input, Embedding, Hidden, or Output
- **Operator (τ)**: Additive, Concatenative, Parametric, or Replacement
- **Alignment (ω)**: Identity, Linear, Statistical, or Rule-based

Refer to [meta/taxonomy.md](../meta/taxonomy.md) for detailed explanations of each dimension.

## 📞 Questions?

If you're unsure about:
- Resource classification or taxonomy
- Quality standards or requirements
- Template usage or formatting

Please open an issue for clarification before submitting your contribution.