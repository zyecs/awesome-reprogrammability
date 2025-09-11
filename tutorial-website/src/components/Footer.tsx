import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Primary Contact:{' '}
              <a 
                href="mailto:feng.liu1@unimelb.edu.au"
                className="text-primary hover:underline"
              >
                feng.liu1@unimelb.edu.au
              </a>
            </p>
          </div>

          {/* Project Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Project</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="../" className="text-muted-foreground hover:text-primary">
                  Main Project
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/zeshengye/awesome-reprogrammability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Source Code
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/zeshengye/awesome-reprogrammability/tree/main/tutorial-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Tutorial Source
                </a>
              </li>
            </ul>
          </div>

          {/* License */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">License</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Content: CC BY-SA 4.0
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Code: MIT License
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Neural Network Reprogrammability Tutorial. Part of the awesome-reprogrammability project.
            </p>
            <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}