import { Metadata } from 'next';
import { preload } from 'react-dom';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const rootMetadata: Metadata = {
  title: 'Restyled Sonner Toast',
  description: "Minor CSS overrides to refine Sonner's default toast styles.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    'react',
    'sonner',
    'toast',
    'notification',
    'restyled',
    'customized',
    'web',
    'library',
    'ui',
    'components',
    'open-source'
  ],
  appleWebApp: {
    title: 'RSonner',
    capable: true
  },
  openGraph: {
    title: 'Restyled Sonner Toast',
    description: "Minor CSS overrides to refine Sonner's default toast styles.",
    siteName: 'Restyled Sonner Toast',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Site Preview Image',
        type: 'image/png'
      }
    ]
  },
  icons: [
    {
      rel: 'icon',
      url: '/logos/favicon.ico',
      sizes: '48x48',
      type: 'image/x-icon'
    },
    {
      rel: 'icon',
      url: '/logos/logo.svg',
      sizes: 'any',
      type: 'image/svg+xml'
    },
    {
      rel: 'icon',
      url: '/logos/icon-16x16.png',
      sizes: '16x16',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: '/logos/icon-32x32.png',
      sizes: '32x32',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: '/logos/icon-48x48.png',
      sizes: '48x48',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: '/logos/icon-64x64.png',
      sizes: '64x64',
      type: 'image/png'
    },
    {
      rel: 'icon',
      url: '/logos/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png'
    },
    {
      rel: 'apple-touch-icon',
      url: '/logos/apple-icon.png',
      sizes: '180x180',
      type: 'image/png'
    }
  ]
};

export function preLoadResources() {
  preload('/logos/logo.webp', {
    as: 'image',
    type: 'image/webp',
    fetchPriority: 'high'
  });
}
