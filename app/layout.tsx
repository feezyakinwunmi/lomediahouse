import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import TranslationEngine from '@/lib/i18n/TranslationEngine';
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: 'Lomediahouse | Media That Moves',
  description: 'Premium Media House • Social Pages • Publications • Photoshoots',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-white text-white overflow-x-hidden">
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
