import type { Metadata, Viewport } from 'next';
import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import TranslationEngine from '@/lib/i18n/TranslationEngine';
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
  metadataBase: new URL('https://www.lomediahouse.com'),
  title: {
    default: 'LO Media House | Media, Marketing & Technology',
    template: '%s | LO Media House',
  },
  description:
    'LO Media House helps brands grow through publishing, digital marketing, creative production, and web and app development in Ottawa and beyond.',
  applicationName: 'LO Media House',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'LO Media House',
    url: '/',
    title: 'LO Media House | Media, Marketing & Technology',
    description:
      'Publishing, digital marketing, creative production, and web and app development for ambitious brands.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'LO Media House',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LO Media House | Media, Marketing & Technology',
    description:
      'Publishing, digital marketing, creative production, and web and app development for ambitious brands.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: { icon: '/favicon.ico' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://www.lomediahouse.com/#organization',
      name: 'LO Media House',
      url: 'https://www.lomediahouse.com',
      logo: 'https://www.lomediahouse.com/logo.png',
      image: 'https://www.lomediahouse.com/opengraph-image',
      description:
        'Publishing, digital marketing, creative production, and web and app development for brands, authors, and ministries.',
      email: 'layo@lomediahouse.com',
      telephone: '+19059224471',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1551 Lycee Place',
        addressLocality: 'Ottawa',
        addressRegion: 'ON',
        postalCode: 'K1G 4B5',
        addressCountry: 'CA',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      areaServed: ['Ottawa', 'Canada', 'Nigeria'],
      sameAs: [
        'https://www.instagram.com/lomediahouse',
        'https://www.facebook.com/share/1B88qEEmzp/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.lomediahouse.com/#website',
      url: 'https://www.lomediahouse.com',
      name: 'LO Media House',
      inLanguage: 'en-CA',
      publisher: { '@id': 'https://www.lomediahouse.com/#organization' },
    },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-white text-white overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LanguageProvider>
          <TranslationEngine />
          <Navbar />
          {children}
          {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
