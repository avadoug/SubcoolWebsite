import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://the-dank-archive.tardis808.chatgpt.site'),
  title: 'The Dank Archive — Subcool Genetics',
  description: 'A rights-aware digital field guide to Subcool and TGA Genetics cultivars.',
  openGraph: {
    title: 'The Dank Archive — Subcool Genetics',
    description: 'A living, rights-aware cultivar index for Subcool and TGA Genetics.',
    url: 'https://the-dank-archive.tardis808.chatgpt.site',
    siteName: 'The Dank Archive',
    type: 'website',
    images: [{
      url: 'https://the-dank-archive.tardis808.chatgpt.site/og.png',
      width: 1675,
      height: 943,
      alt: 'The Dank Archive — Subcool Genetics, a living cultivar index',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Dank Archive — Subcool Genetics',
    description: 'A living, rights-aware cultivar index for Subcool and TGA Genetics.',
    images: ['https://the-dank-archive.tardis808.chatgpt.site/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
