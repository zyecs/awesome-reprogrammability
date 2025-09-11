import Link from 'next/link';
import { loadTutorial } from '@/lib/content';
import { ExternalLink, Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function Home() {
  const tutorial = loadTutorial();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {tutorial.title}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>{tutorial.conference}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>{tutorial.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>{tutorial.venue.location}</span>
          </div>
        </div>
        <a 
          href={tutorial.official_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          Official AAAI Tutorial Page
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* About Section */}
      <div className="prose max-w-none mb-12">
        <h2>About This Tutorial</h2>
        <p>
          Foundation models have revolutionized artificial intelligence, but their massive parameter 
          counts create significant barriers to adaptation and deployment. This tutorial introduces 
          <strong> Neural Network Reprogrammability</strong> — a unified framework that encompasses 
          three core techniques for parameter-efficient adaptation: Model Reprogramming, Prompt Tuning, 
          and Prompt Instruction.
        </p>
        <p>
          Rather than modifying model parameters, reprogrammability leverages the inherent input 
          sensitivity of neural networks to achieve effective task adaptation through strategic 
          input manipulation and output alignment. This paradigm shift offers a principled approach 
          to understanding and implementing parameter-efficient AI systems.
        </p>
      </div>

      {/* Why This Tutorial Matters */}
      <div className="bg-muted rounded-lg p-6 mb-12">
        <h3 className="text-xl font-semibold mb-4 text-primary">Why This Tutorial Matters</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span>Parameter efficiency crisis in foundation models</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span>Need for principled understanding of adaptation methods</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span>Growing importance of trustworthy AI systems</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span>Bridge between vulnerability research and practical adaptation</span>
          </li>
        </ul>
      </div>

      {/* Learning Outcomes */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-primary">Learning Outcomes</h3>
        <p className="text-muted-foreground mb-4">
          By the end of this tutorial, participants will be able to:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span>Understand the unified reprogrammability framework</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span>Master taxonomy of input manipulation and output alignment</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span>Apply methods to real-world scenarios</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span>Evaluate trustworthiness implications</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span>Implement parameter-efficient adaptations</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <span>Design robust and secure reprogramming systems</span>
          </li>
        </ul>
      </div>

      {/* Project Context */}
      <div className="bg-secondary rounded-lg p-6 mb-12">
        <h3 className="text-xl font-semibold mb-4 text-primary">Project Context</h3>
        <p className="text-muted-foreground mb-4">
          This tutorial is part of the <strong>awesome-reprogrammability</strong> project — a comprehensive 
          collection of resources, papers, datasets, and tools related to neural network reprogrammability.
        </p>
        <Link 
          href="../"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          Explore the full collection
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/program" className="block p-6 bg-white border rounded-lg hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-primary mb-2">Program</h4>
          <p className="text-sm text-muted-foreground">View the detailed session schedule and topics</p>
        </Link>
        <Link href="/speakers" className="block p-6 bg-white border rounded-lg hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-primary">Speakers</h4>
          </div>
          <p className="text-sm text-muted-foreground">Meet the tutorial presenters and experts</p>
        </Link>
        <Link href="/materials" className="block p-6 bg-white border rounded-lg hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-primary mb-2">Materials</h4>
          <p className="text-sm text-muted-foreground">Access slides, videos, and code examples</p>
        </Link>
      </div>

      {/* Contact */}
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Questions? Contact us at{' '}
          <a 
            href={`mailto:${tutorial.contact}`}
            className="text-primary hover:underline font-medium"
          >
            {tutorial.contact}
          </a>
        </p>
      </div>
    </div>
  );
}