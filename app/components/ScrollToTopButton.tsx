'use client';

import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-purple-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50 group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
    </button>
  );
}
