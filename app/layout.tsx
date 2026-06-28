import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title: 'iPhone 17 Pro',
  description:
    'Anatomy of a Pro. The new iPhone 17 Pro — aluminum unibody, A19 Pro silicon, the most advanced camera system ever in an iPhone.',
  openGraph: {
    title: 'iPhone 17 Pro',
    description: 'Anatomy of a Pro.',
    images: ['/media/hero-poster.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPhone 17 Pro',
    description: 'Anatomy of a Pro.',
    images: ['/media/hero-poster.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>{children}</body>
    </html>
  );
}
