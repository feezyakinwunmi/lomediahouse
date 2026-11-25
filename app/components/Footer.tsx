import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import ScrollToTopButton from './ScrollToTopButton';

const services = [
  { name: 'Social Media Management', path: '/Divisions#mediahouse' },
  { name: 'Premium Publications', path: '/Divisions#publications' },
  { name: 'Cinematic Photoshoots', path: '/Divisions#studio' },
  { name: 'Creative Strategy', path: '/Divisions#studio' },
  { name: 'Video Production', path: '/Divisions#studio' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-black text-white relative overflow-hidden"
    >
      {/* Gradient Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.05),transparent_70%)]" />

      <div className="max-w-[90%] mx-auto px-4 py-16 md:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-black tracking-tight">
              LO<span className="text-red-500">MEDIAHOUSE</span>
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              We build brands that move culture. Premium content,
              strategic social, and cinematic storytelling.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/lomediahouse?igsh=Z2g4NmtvYzIyMG82"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-500/20 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-pink-500/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5A3.5 3.5 0 1112 15.5 3.5 3.5 0 0112 8.5z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1B88qEEmzp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-blue-500/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.5-4 4.2V11H8v3h2.3v8h3.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              Quick Links
            </h2>

            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/Aboutus' },
                { name: 'Leadership', path: '/Leadership' },
                { name: 'Divisions', path: '/Divisions' },
                { name: 'Websites & Apps', path: '/websites-apps-tech-platforms' },
                { name: 'Business in Africa', path: '/building-a-business-in-africa' },
                { name: 'Brand Authority', path: '/brand-authority-nigerian-businesses' },
                { name: 'Website UX Design', path: '/website-user-experience-design' },
                { name: 'Contact', path: '/ContactUs' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-zinc-400 hover:text-red-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              Services
            </h2>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-zinc-400 hover:text-red-500 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">
              Get In Touch
            </h2>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />

                <a
                  href="mailto:layo@lomediahouse.com"
                  className="hover:text-red-500 transition-colors"
                >
                  layo@lomediahouse.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />

                <a
                  href="tel:+19059224471"
                  className="hover:text-red-500 transition-colors"
                >
                  +1 (905) 922-4471
                </a>
              </li>

              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />

                <span>
                  1551 Lycee Place, Ottawa, K1G4B5
                  <br />
                  Canada
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-lg font-semibold text-white">
                Stay Updated
              </h2>

              <p className="text-zinc-400 text-sm mt-1">
                Get the latest insights and creative inspiration
              </p>
            </div>

            <div className="flex w-full md:w-auto">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                name="email"
                autoComplete="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-l-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-red-500/50 transition-colors"
              />

              <button type="button" className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-500 text-white font-medium rounded-r-lg hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs text-center md:text-left">
            © {currentYear} LOMEDIAHOUSE. All rights reserved.
            <br />
            Powered by LO Platforms
          </p>

          <div className="flex gap-6 text-xs">
            <Link
              href="/privacy"
              className="text-zinc-500 hover:text-red-500 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-zinc-500 hover:text-red-500 transition-colors"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="text-zinc-500 hover:text-red-500 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}