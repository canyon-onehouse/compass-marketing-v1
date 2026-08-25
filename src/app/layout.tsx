import type { Metadata } from 'next';
import { Tenor_Sans, Spectral } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';
import '@/styles/home.css';
import '@/styles/pages.css';

const tenorSans = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  fallback: ['Optima', 'Times New Roman', 'serif'],
});

const spectral = Spectral({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-body',
  fallback: ['Georgia', 'serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://compass-design.studio'),
  title: {
    default: 'Compass Design Studio — Residential Design & Interiors',
    template: '%s — Compass Design Studio',
  },
  description:
    'Compass Design Studio is a residential design and interiors practice rooted in Midwest integrity, Southern hospitality, and a quiet, faith-shaped commitment to service. Based in Northern Alabama, serving all 50 states.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${tenorSans.variable} ${spectral.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
