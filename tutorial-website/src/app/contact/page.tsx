import Link from 'next/link';
import { loadTutorial } from '@/lib/content';
import { Mail, MapPin, Calendar, Clock, Users, ExternalLink, HelpCircle } from 'lucide-react';

export default function Contact() {
  const tutorial = loadTutorial();

  const faqs = [
    {
      question: "Who should attend this tutorial?",
      answer: "Researchers and practitioners interested in parameter-efficient AI, foundation model adaptation, and trustworthy AI systems. Basic machine learning knowledge is recommended."
    },
    {
      question: "What background is needed?",
      answer: "Basic machine learning knowledge and familiarity with deep learning concepts. Prior experience with neural networks and optimization will be helpful but not required."
    },
    {
      question: "Will materials be available after the tutorial?",
      answer: "Yes, all slides, videos, code examples, and additional resources will be posted on this website and remain accessible indefinitely."
    },
    {
      question: "How does this relate to the awesome-reprogrammability project?",
      answer: "This tutorial is part of a larger collection of reprogrammability resources, including papers, datasets, and tools, all available in the main project repository."
    },
    {
      question: "Is there a virtual attendance option?",
      answer: "Please check the official AAAI conference website for information about virtual attendance options and hybrid formats."
    },
    {
      question: "Can I use the tutorial materials for teaching?",
      answer: "Yes, all materials are available under open licenses. Please see the citation page for proper attribution requirements."
    }
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact & Logistics</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get in touch with the organizers and find practical information about the tutorial
        </p>
      </div>

      {/* Contact Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Primary Contact
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-primary">Feng Liu</p>
                <p className="text-sm text-muted-foreground mb-2">Tutorial Organizer</p>
                <a 
                  href={`mailto:${tutorial.contact}`}
                  className="text-primary hover:underline text-sm flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {tutorial.contact}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              General Inquiries
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Tutorial content and materials</p>
              <p>• Technical questions</p>
              <p>• Collaboration opportunities</p>
              <p>• Media and press inquiries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Tutorial Logistics</h2>
        <div className="bg-muted rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-primary">Date & Time</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground ml-8">
                <p><strong>Conference:</strong> {tutorial.conference}</p>
                <p><strong>Date:</strong> {tutorial.date}</p>
                <p><strong>Duration:</strong> {tutorial.duration}</p>
                <p><strong>Timezone:</strong> {tutorial.timezone}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-primary">Venue</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground ml-8">
                <p><strong>Location:</strong> {tutorial.venue.location}</p>
                <p><strong>Room:</strong> {tutorial.venue.room}</p>
                <a 
                  href={tutorial.official_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Official AAAI Page
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Prerequisites & Preparation</h2>
        <div className="bg-white border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-primary mb-3">Recommended Background</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Basic machine learning concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Familiarity with neural networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Understanding of optimization basics</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Experience with Python/PyTorch (for code examples)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary mb-3">Preparation Materials</h3>
              <div className="space-y-3">
                <Link href="/reading" className="block text-sm text-primary hover:underline">
                  → Essential reading list
                </Link>
                <Link href="/materials" className="block text-sm text-primary hover:underline">
                  → Code examples and notebooks
                </Link>
                <Link href="/program" className="block text-sm text-primary hover:underline">
                  → Detailed session agenda
                </Link>
                <Link href="../" className="block text-sm text-primary hover:underline">
                  → Awesome-reprogrammability collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
          <HelpCircle className="h-6 w-6" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white border rounded-lg">
              <summary className="p-4 cursor-pointer hover:bg-muted/50 transition-colors font-medium text-primary">
                {faq.question}
              </summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Project Integration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">Project Integration</h2>
        <div className="bg-secondary rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">Part of awesome-reprogrammability</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            This tutorial is part of a comprehensive, community-driven collection of resources 
            on neural network reprogrammability. The main project includes curated papers, 
            datasets, tools, and implementations covering all aspects of the reprogrammability framework.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="../" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ExternalLink className="h-4 w-4" />
              Main Project Repository
            </Link>
            <a 
              href="https://github.com/zeshengye/awesome-reprogrammability"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              GitHub Repository
            </a>
            <Link href="/cite" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ExternalLink className="h-4 w-4" />
              Citation Information
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <div className="text-center bg-primary/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-3">Have Questions?</h3>
        <p className="text-muted-foreground mb-4">
          Don't hesitate to reach out with any questions about the tutorial content, 
          logistics, or the broader reprogrammability project.
        </p>
        <a 
          href={`mailto:${tutorial.contact}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <Mail className="h-4 w-4" />
          Contact the Organizers
        </a>
      </div>
    </div>
  );
}