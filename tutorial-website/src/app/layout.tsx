import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Neural Network Reprogrammability Tutorial | AAAI 2026',
  description: 'A unified framework for parameter-efficient foundation model adaptation',
  keywords: ['neural networks', 'reprogrammability', 'prompt tuning', 'model reprogramming', 'AAAI'],
  authors: [
    { name: 'Feng Liu' },
    { name: 'Zesheng Ye' },
    { name: 'Pin-Yu Chen' }
  ],
  openGraph: {
    title: 'Neural Network Reprogrammability Tutorial | AAAI 2026',
    description: 'A unified framework for parameter-efficient foundation model adaptation',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}