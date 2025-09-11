import { loadProgram } from '@/lib/content';
import { Clock, User, Download, ExternalLink } from 'lucide-react';

export default function Program() {
  const program = loadProgram();

  const generateICS = (session: any) => {
    // Generate calendar file content
    const startTime = '20260101T100000Z'; // Placeholder - update with actual time
    const endTime = '20260101T113000Z';   // Placeholder - update with actual time
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Tutorial//Neural Network Reprogrammability//EN
BEGIN:VEVENT
UID:session-${session.order}@tutorial.example.com
DTSTAMP:${startTime}
DTSTART:${startTime}
DTEND:${endTime}
SUMMARY:${session.title}
DESCRIPTION:Presenter: ${session.presenter}\\n\\nTopics:\\n${session.topics.join('\\n')}
LOCATION:AAAI 2026 Conference Venue
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `session-${session.order}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Program Schedule</h1>
        <p className="text-lg text-muted-foreground">
          Three comprehensive sessions covering the unified reprogrammability framework
        </p>
      </div>

      <div className="space-y-8">
        {program.sessions.map((session, index) => (
          <div key={session.order} className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-primary text-primary-foreground px-6 py-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold mb-2 sm:mb-0">
                  Session {session.order}: {session.title}
                </h2>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{session.presenter}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{session.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-primary mb-4">Topics Covered:</h3>
              <ul className="space-y-3 mb-6">
                {session.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => generateICS(session)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Add to Calendar
                </button>
                <a
                  href="/materials"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Materials
                </a>
              </div>
            </div>

            {session.break_after && (
              <div className="bg-muted px-6 py-3 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Break: {session.break_after}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-12 bg-secondary rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-primary">Additional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-primary mb-2">Q&A Sessions</h4>
            <p className="text-sm text-muted-foreground">
              Each session includes time for questions and discussion with the presenters.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">Interactive Elements</h4>
            <p className="text-sm text-muted-foreground">
              Hands-on examples and live demonstrations throughout the tutorial.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">Prerequisites</h4>
            <p className="text-sm text-muted-foreground">
              Basic knowledge of machine learning and familiarity with deep learning concepts.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">Materials</h4>
            <p className="text-sm text-muted-foreground">
              All slides, code examples, and additional resources will be available online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}