import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import { CapacitorInit } from '@/components/CapacitorInit';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lazy PU | Patna University Student Portal',
  description:
    'Ultra-fast, mobile-first Patna University portal. Direct links for UG 4-Year CBCS Admissions, Exam Forms, Semester Results, Syllabus, and Previous Year Question Papers (PYQs).',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Lazy PU',
  },
  keywords: [
    'Patna University',
    'PU Patna',
    'LazyUpdate.tech',
    'Patna Science College',
    'Patna College',
    'B.N. College',
    'Magadh Mahila College',
    'Vanijya Mahavidyalaya',
    'PU UG CBCS Result',
    'PU Exam Form 2026',
    'PU Syllabus PDF',
    'PU Previous Year Question Papers',
  ],
  authors: [{ name: 'Lazy Update Team' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0066ff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-[#f8fafc] text-slate-900 transition-colors selection:bg-blue-600 selection:text-white flex flex-col antialiased">
        <ThemeProvider>
          <CapacitorInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
