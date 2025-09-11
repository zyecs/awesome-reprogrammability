'use client';

import { loadReading } from '@/lib/content';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-muted hover:bg-muted/80 rounded transition-colors"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? 'Copied!' : 'Copy BibTeX'}
    </button>
  );
}

function ReadingItem({ item }: { item: any }) {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground mb-2">
        <strong>Authors:</strong> {item.authors}
      </p>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {item.description}
      </p>
      
      <div className="flex flex-wrap gap-3 items-center">
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ExternalLink className="h-3 w-3" />
            Read Paper
          </a>
        )}
        
        {item.bibtex && (
          <CopyButton text={item.bibtex} />
        )}
      </div>

      {item.bibtex && (
        <details className="mt-4">
          <summary className="text-sm text-muted-foreground cursor-pointer hover:text-primary">
            Show BibTeX
          </summary>
          <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-x-auto">
            <code>{item.bibtex}</code>
          </pre>
        </details>
      )}
    </div>
  );
}

export default function Reading() {
  const reading = loadReading();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Reading List</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Essential papers and resources to deepen your understanding of neural network reprogrammability
        </p>
      </div>

      {/* Essential Reading */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            1
          </div>
          Essential Reading
        </h2>
        <p className="text-muted-foreground mb-6">
          Core papers that establish the theoretical foundation and unified framework for neural network reprogrammability.
        </p>
        <div className="space-y-6">
          {reading.essential.map((item, index) => (
            <ReadingItem key={index} item={item} />
          ))}
        </div>
      </section>

      {/* Advanced Reading */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
          <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            2
          </div>
          Advanced Topics
        </h2>
        <p className="text-muted-foreground mb-6">
          Specialized techniques and cutting-edge research in parameter-efficient adaptation methods.
        </p>
        <div className="space-y-6">
          {reading.advanced.map((item, index) => (
            <ReadingItem key={index} item={item} />
          ))}
        </div>
      </section>

      {/* Reference Material */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
          <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">
            3
          </div>
          Background References
        </h2>
        <p className="text-muted-foreground mb-6">
          Foundational knowledge and context for understanding modern AI adaptation challenges.
        </p>
        <div className="space-y-6">
          {reading.reference.map((item, index) => (
            <ReadingItem key={index} item={item} />
          ))}
        </div>
      </section>

      {/* Study Guide */}
      <div className="bg-secondary rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Study Recommendations</h3>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-medium text-primary mb-2">Before the Tutorial</h4>
            <p className="text-muted-foreground">
              Read the essential paper to understand the unified framework. This will provide 
              the conceptual foundation for all tutorial content.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">During the Tutorial</h4>
            <p className="text-muted-foreground">
              Keep the essential paper nearby for reference. The tutorial will build upon and 
              expand the concepts introduced in the survey.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">After the Tutorial</h4>
            <p className="text-muted-foreground">
              Explore the advanced topics based on your research interests. The reference 
              materials provide deeper context for specific applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}