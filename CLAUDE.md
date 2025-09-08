# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository is an "awesome list" focused on Neural Network Reprogrammability - a curated collection of resources, tools, papers, and projects related to the three core techniques outlined in "A Comprehensive Survey of Neural Network Reprogrammability" (https://arxiv.org/html/2506.04650v2):

1. **Model Reprogramming**: Learning input transformations to repurpose frozen pre-trained models
2. **Prompt Tuning**: Learning continuous or discrete prompts to guide model behavior  
3. **Prompt Instruction**: Using natural language instructions and few-shot examples to direct models

## Development Guidelines

### Repository Structure
- `README.md` - Main curated list with categorized resources
- `CONTRIBUTING.md` - Guidelines for contributors
- `.github/` - GitHub templates and workflows
- `assets/` - Images, logos, and other static assets if needed

### Awesome List Standards
- Follow the [awesome list guidelines](https://github.com/sindresorhus/awesome/blob/main/awesome.md)
- Resources should be high-quality, well-maintained, and relevant to neural network reprogrammability
- Categories should be logical and well-organized
- Each entry should have a brief description explaining its relevance
- Links should be verified and functional

### Content Categories (Suggested)
- **Model Reprogramming**: Input space transformation, adversarial reprogramming, input mapping techniques
- **Prompt Tuning**: Soft prompts, hard prompts, context learning approaches
- **Prompt Instruction**: Task instructions, few-shot examples, chain-of-thought reasoning
- **Research Papers**: Academic publications on the three core reprogrammability techniques
- **Code & Implementations**: Open source implementations and frameworks for reprogramming methods
- **Applications**: Domain adaptation, few-shot learning, cross-task transfer using reprogramming
- **Tools & Libraries**: Software tools specifically for neural network reprogramming techniques

### Quality Standards
- Verify all links before adding
- Ensure descriptions are concise but informative
- Maintain alphabetical order within categories
- Include both academic and practical resources
- Focus on active projects and maintained resources

### Git Workflow
```bash
# Standard git operations for an awesome list
git add README.md
git commit -m "Add [resource name] to [category]"
git push origin main
```

## Common Tasks

Since this is a documentation-focused awesome list repository on neural network reprogrammability, typical tasks include:
- Adding new research papers on model reprogramming, prompt tuning, or prompt instruction
- Updating broken or outdated links to papers and repositories
- Categorizing resources according to the three-technique taxonomy (model reprogramming/prompt tuning/prompt instruction)
- Adding new implementation examples and code repositories for reprogramming methods
- Maintaining link validity and ensuring resource relevance to the core reprogrammability techniques