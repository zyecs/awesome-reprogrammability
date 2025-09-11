import { loadSpeakers } from '@/lib/content';
import { Mail, ExternalLink } from 'lucide-react';

export default function Speakers() {
  const { speakers } = loadSpeakers();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Tutorial Speakers</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the experts who will guide you through the unified framework of neural network reprogrammability
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-sm">
            {/* Photo Placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/20 h-48 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-semibold text-primary">
                  {speaker.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-primary mb-2">
                {speaker.name}
              </h2>
              
              <p className="text-sm text-muted-foreground mb-4">
                {speaker.affiliation}
              </p>

              <div className="mb-4">
                <a 
                  href={`mailto:${speaker.email}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {speaker.email}
                </a>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {speaker.bio}
              </p>

              <div>
                <h4 className="font-medium text-primary mb-2">Presenting:</h4>
                <ul className="space-y-1">
                  {speaker.sessions.map((session, sessionIndex) => (
                    <li key={sessionIndex} className="text-sm text-muted-foreground">
                      • {session}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t">
                <a
                  href="/program"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View session details
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Collective Bio Section */}
      <div className="mt-16 bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
          About the Tutorial Team
        </h2>
        <div className="prose max-w-none">
          <p className="text-muted-foreground leading-relaxed text-center">
            Our tutorial team brings together complementary expertise in neural network adaptation, 
            trustworthy AI, and parameter-efficient methods. Together, they have authored the 
            comprehensive survey that established the unified reprogrammability framework, bridging 
            theoretical foundations with practical applications across multiple domains.
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="font-medium text-primary mb-2">Research Focus</h4>
            <p className="text-sm text-muted-foreground">
              Neural network adaptation, parameter efficiency, and foundation model reprogramming
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-primary mb-2">Publications</h4>
            <p className="text-sm text-muted-foreground">
              Extensive work in top-tier AI conferences including ICML, NeurIPS, ICLR, and AAAI
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-primary mb-2">Impact</h4>
            <p className="text-sm text-muted-foreground">
              Contributing to the theoretical understanding and practical advancement of AI adaptation methods
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}