# Taxonomy

This page mirrors `meta/taxonomy.md`.

# Neural Network Reprogrammability Taxonomy

## Primary Mechanism Categories

### Model Reprogramming
- **Input Space Transformation**: Learning input transformations to repurpose frozen pre-trained models
- **Adversarial Reprogramming**: Using adversarial-style input modifications to redirect model behavior
- **Input Mapping**: Learning mappings from target task inputs to source task input space

### Prompt Tuning
- **Soft Prompts**: Learning continuous prompt embeddings prepended to input sequences
- **Hard Prompts**: Using discrete text prompts to guide model behavior
- **Context Learning**: Leveraging in-context learning capabilities of large models

### Prompt Instruction
- **Task Instructions**: Natural language descriptions of the target task
- **Few-shot Examples**: Providing example input-output pairs as instructions
- **Chain-of-Thought**: Step-by-step reasoning instructions for complex tasks

## Location Categories

### Input Layer
- Modifications applied at the input processing stage

### Intermediate Layers
- Changes within the hidden layers of the network

### Output Layer
- Modifications to the final prediction layers

### Cross-Layer
- Methods that modify multiple layers simultaneously

## Operator Categories

### Addition
- Adding new parameters or components

### Multiplication
- Scaling or gating existing representations

### Concatenation
- Combining features from different sources

### Replacement
- Substituting existing components with new ones

## Evaluation Dimensions

### Few-Shot Learning
- Performance with limited training examples (1-shot, 5-shot, etc.)

### Zero-Shot Transfer
- Performance without task-specific training data

### Domain Adaptation
- Transferring across different data domains

### Task Similarity
- Performance correlation with source-target task similarity