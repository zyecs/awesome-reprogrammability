# Neural Network Reprogrammability Taxonomy

This taxonomy organizes neural network reprogrammability methods across four key dimensions, based on the comprehensive survey "A Comprehensive Survey of Neural Network Reprogrammability".

## Four-Dimensional Taxonomy

### 1. Configuration ($\lambda$) - Format of Reprogramming Parameters

**Learnable**: Parameters that are learned during adaptation
- Model reprogramming approaches that learn input transformations
- Adversarial reprogramming with learnable perturbations  
- Prompt tuning with trainable continuous prompts
- Soft prompts with optimizable embeddings

**Fixed**: Parameters that are manually designed or rule-based
- Hard prompts using fixed text templates
- Instruction-based approaches with predefined formats
- Manual prompt engineering

**Both (Fixed & Learnable)**: Hybrid approaches combining both types
- Methods that use both fixed templates and learnable components

### 2. Location ($\ell$) - Where Modifications are Applied

**Input ($\mathcal{X}_S$)**: Modifications at the input layer
- Input space transformations
- Adversarial reprogramming perturbations
- Input-level prompt prepending

**Hidden ($\mathcal{H}$)**: Modifications within intermediate layers
- Hidden layer adaptations
- Intermediate feature transformations
- Cross-attention mechanisms

**Embedding ($\mathcal{E}$)**: Modifications at the embedding layer
- Token embedding adjustments
- Positional embedding modifications
- Embedding space transformations

**Output ($\mathcal{Y}$)**: Modifications at the output layer
- Output head replacements
- Final layer adaptations

### 3. Operator ($\tau$) - Type of Transformation Applied

**Additive (AD)**: Adding new parameters or features
- Prompt token addition
- Residual-style modifications

**Concatenative (CO)**: Combining features from different sources
- Input concatenation with learned transformations
- Feature fusion approaches

**Parametric (PR)**: Complex learned transformations
- Non-linear mappings
- Learned parameter updates

**Replacement (RE)**: Substituting components
- Component swapping
- Module replacement

### 4. Alignment ($\omega$) - How Target Tasks Align with Source Tasks

**Linear (LA)**: Linear relationship between source and target
- Direct feature mappings
- Linear transformations

**Statistical (SA)**: Statistical alignment approaches
- Distribution matching
- Statistical feature alignment

**Rule-based (RA)**: Rule-driven alignment
- Template-based approaches
- Structured rule-based mapping

**Identity (ID)**: Theoretical or identity-based alignment
- Theoretical frameworks
- Identity-preserving transformations

## Method Categories

Note that this is a **rough** categorization for the *existing* studies.

### Model Reprogramming
- **Configuration**: Typically Learnable
- **Location**: Usually Input ($\mathcal{X}_S$) or Embedding ($\mathcal{E}$)
- **Operator**: Commonly Concatenative (CO) or Additive (AD) or Parametric (PR)
- **Alignment**: Primarily Linear (LA) or Statistical (SA)

### Prompt Tuning  
- **Configuration**: Learnable
- **Location**: Embedding ($\mathcal{E}$) or Hidden ($\mathcal{H}$)
- **Operator**: Commonly Concatenative (CO) or Parametric (PR)
- **Alignment**: Linear (LA) or Rule-based (RA) or Identity Mapping (ID)

### Prompt Instruction
- **Configuration**: Fixed
- **Location**: Input ($\mathcal{X}_S$)
- **Operator**: Commonly Concatenative (CO) or Additive (AD) or Parametric (PR)
- **Alignment**: Rule-based (RA) or Identity Mapping (ID)

## Common Evaluation Scenarios

Under construction ...

<!-- ### Few-Shot Learning
- Performance with limited training examples (1-shot, 5-shot, etc.)
- Evaluating adaptation efficiency with minimal data

### Zero-Shot Transfer
- Performance without task-specific training data
- Direct application to unseen tasks

### Domain Adaptation
- Cross-domain transfer (e.g., natural images → medical images)
- Distribution shift robustness

### Cross-Task Transfer
- Transferring between different task types
- Task similarity impact on performance -->

## Usage in Papers Table

The papers table in `docs/sections/papers.md` uses this taxonomy to classify each paper across all four dimensions, providing a comprehensive view of the reprogrammability landscape.