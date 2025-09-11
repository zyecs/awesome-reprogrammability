'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Program', href: '/program' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Materials', href: '/materials' },
  { name: 'Reading', href: '/reading' },
  { name: 'Taxonomy', href: '/taxonomy' },
  { name: 'Contact', href: '/contact' },
  { name: 'Cite', href: '/cite' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Breadcrumb and title */}
          <div className="flex items-center space-x-4">
            <Link 
              href="../" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">awesome-reprogrammability</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/" className="text-lg font-semibold text-primary">
              Tutorial Website
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-muted-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}