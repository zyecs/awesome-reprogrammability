import { ExternalLink } from 'lucide-react';

export default function Taxonomy() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Reprogrammability Taxonomy</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Understanding the unified framework through mathematical decomposition and systematic categorization
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">What is Reprogrammability?</h2>
        <div className="prose max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Neural Network Reprogrammability represents a paradigm shift from parameter-centric to 
            input-centric adaptation methods. Instead of modifying the internal weights of pre-trained 
            models, reprogrammability leverages the inherent input sensitivity of neural networks to 
            achieve effective task adaptation through strategic input transformations and output alignments.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This approach encompasses three major families of techniques: Model Reprogramming (MR), 
            Prompt Tuning (PT), and Prompt Instruction (PI), all unified under a common mathematical framework.
          </p>
        </div>
      </section>

      {/* Mathematical Framework */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Mathematical Framework</h2>
        <div className="bg-white border rounded-lg p-8 text-center">
          <div className="text-3xl font-mono font-bold text-primary mb-4">
            f′ = O ∘ f<sub>pre</sub> ∘ I
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                I
              </div>
              <h3 className="font-semibold text-primary mb-2">Input Manipulation (IM)</h3>
              <p className="text-sm text-muted-foreground">
                Transforms raw inputs to align with pre-trained model expectations
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                f
              </div>
              <h3 className="font-semibold text-primary mb-2">Pre-trained Model</h3>
              <p className="text-sm text-muted-foreground">
                Frozen foundation model with preserved representations
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                O
              </div>
              <h3 className="font-semibold text-primary mb-2">Output Alignment (OA)</h3>
              <p className="text-sm text-muted-foreground">
                Maps model outputs to target task requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Dimensions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Taxonomy Dimensions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Configuration */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">λ</span>
              Configuration
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-primary text-sm">Fixed (λ=0)</h4>
                <p className="text-xs text-muted-foreground">Predetermined transformations without learning</p>
              </div>
              <div>
                <h4 className="font-medium text-primary text-sm">Learnable (λ=1)</h4>
                <p className="text-xs text-muted-foreground">Adaptive transformations optimized during training</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">ℓ</span>
              Location
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-primary text-sm">Input Space (X<sup>S</sup>)</h4>
                <p className="text-xs text-muted-foreground">Raw input level modifications</p>
              </div>
              <div>
                <h4 className="font-medium text-primary text-sm">Embedding (E)</h4>
                <p className="text-xs text-muted-foreground">Feature representation level</p>
              </div>
              <div>
                <h4 className="font-medium text-primary text-sm">Hidden States (H)</h4>
                <p className="text-xs text-muted-foreground">Internal layer activations</p>
              </div>
            </div>
          </div>

          {/* Operator */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">τ</span>
              Operator
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-primary text-sm">Addition (add)</h4>
                <p className="text-xs text-muted-foreground">Element-wise summation</p>
              </div>
              <div>
                <h4 className="font-medium text-primary text-sm">Concatenation (concat)</h4>
                <p className="text-xs text-muted-foreground">Feature dimension expansion</p>
              </div>
              <div>
                <h4 className="font-medium text-primary text-sm">Parameterized (param)</h4>
                <p className="text-xs text-muted-foreground">Learned transformation functions</p>
              </div>
            </div>
          </div>

          {/* Mapping */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">ω</span>
              Mapping Strategy
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-primary text-sm">Identity (ID)</h4>
                <p className="text-xs text-muted-foreground">Direct output usage</p>
              </div>
              <div>
                <h4 className="font-medium text-primary text-sm">Random Assignment (RA)</h4>
                <p className="text-xs text-muted-foreground">Arbitrary label mapping</p>
              </div>
              <div>
                <h4 className="font-medium text-primary text-sm">Similarity-based (SA)</h4>
                <p className="text-xs text-muted-foreground">Feature similarity alignment</p>
              </div>
              <div>
                <h4 className="font-medium text-primary text-sm">Learning-based (LA)</h4>
                <p className="text-xs text-muted-foreground">Optimized mapping functions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Families */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Method Families</h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-3">Model Reprogramming (MR)</h3>
            <p className="text-blue-600 text-sm mb-3">
              Learns input transformations to repurpose frozen pre-trained models for new tasks.
            </p>
            <div className="text-xs text-blue-600">
              <strong>Characteristics:</strong> λ=1 (learnable), typically X<sup>S</sup> location, various operators
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-700 mb-3">Prompt Tuning (PT)</h3>
            <p className="text-green-600 text-sm mb-3">
              Optimizes continuous or discrete prompts to guide model behavior without parameter updates.
            </p>
            <div className="text-xs text-green-600">
              <strong>Characteristics:</strong> λ=1 (learnable), E or H locations, concat/add operators
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Prompt Instruction (PI)</h3>
            <p className="text-purple-600 text-sm mb-3">
              Uses natural language instructions and few-shot examples to direct model behavior.
            </p>
            <div className="text-xs text-purple-600">
              <strong>Characteristics:</strong> λ=0 (fixed), X<sup>S</sup> location, concat operator
            </div>
          </div>
        </div>
      </section>

      {/* Examples Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Classification Examples</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-border rounded-lg">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-primary">Method</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-primary">λ</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-primary">ℓ</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-primary">τ</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-primary">ω</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-primary">Family</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-sm">Adversarial Reprogramming</td>
                <td className="px-4 py-3 text-center text-sm">1</td>
                <td className="px-4 py-3 text-center text-sm">X<sup>S</sup></td>
                <td className="px-4 py-3 text-center text-sm">add</td>
                <td className="px-4 py-3 text-center text-sm">RA</td>
                <td className="px-4 py-3 text-sm text-blue-600">MR</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Visual Prompt Tuning</td>
                <td className="px-4 py-3 text-center text-sm">1</td>
                <td className="px-4 py-3 text-center text-sm">X<sup>S</sup></td>
                <td className="px-4 py-3 text-center text-sm">concat</td>
                <td className="px-4 py-3 text-center text-sm">LA</td>
                <td className="px-4 py-3 text-sm text-green-600">PT</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Prefix Tuning</td>
                <td className="px-4 py-3 text-center text-sm">1</td>
                <td className="px-4 py-3 text-center text-sm">H</td>
                <td className="px-4 py-3 text-center text-sm">concat</td>
                <td className="px-4 py-3 text-center text-sm">ID</td>
                <td className="px-4 py-3 text-sm text-green-600">PT</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">In-Context Learning</td>
                <td className="px-4 py-3 text-center text-sm">0</td>
                <td className="px-4 py-3 text-center text-sm">X<sup>S</sup></td>
                <td className="px-4 py-3 text-center text-sm">concat</td>
                <td className="px-4 py-3 text-center text-sm">ID</td>
                <td className="px-4 py-3 text-sm text-purple-600">PI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Further Reading */}
      <div className="bg-muted rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Learn More</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              This taxonomy provides a systematic way to understand and compare different adaptation methods. 
              For detailed explanations and mathematical derivations, refer to the tutorial materials and essential reading.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/reading"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Essential Papers
            </a>
            <a
              href="/program"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Tutorial Sessions
            </a>
            <a
              href="/materials"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Code Examples
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}