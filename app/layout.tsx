import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}