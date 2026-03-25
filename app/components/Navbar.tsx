'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-[95%] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            <img
              src="/logo.png"
              className="object-cover w-full h-full"
              alt="Logo"
            />
          </div>
          <div className="text-xl font-bold tracking-tighter heading-font text-black">
            lo<span className="text-red-500">MediaHouse</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
          <a href="/" className="hover:text-red-500 transition-colors">Home</a>
          <a href="/Aboutus" className="hover:text-red-500 transition-colors">About us</a>
          <a href="/Divisions" className="hover:text-red-500 transition-colors">Divisions</a>
          <a href="/Leadership" className="hover:text-red-500 transition-colors">Leadership</a>
          <a href="/ContactUs" className="hover:text-red-500 transition-colors">Contact Us</a>
        </div>

        <div className="hidden md:block">
          <a 
            href="tel:+12125550123" 
            className="px-5 py-2.5 bg-black/90 backdrop-blur-sm text-white rounded-full font-medium text-sm hover:bg-black transition-all duration-300 hover:scale-105 inline-block shadow-lg"
          >
            Call Us: +1 (212) 555-0123
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-black">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-white/20 py-5">
          <div className="flex flex-col items-center gap-5 text-base text-zinc-700">
            <a href="/" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">Home</a>
            <a href="/Aboutus" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">About Us</a>
            <a href="/Divisions" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">Divisions</a>
            <a href="/Leadership" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">Leadership</a>
            <a href="/ContactUs" onClick={() => setOpen(false)} className="hover:text-red-500 transition-colors">Contact Us</a>
            
            {/* Mobile Call Button */}
            <a 
              href="tel:+12125550123" 
              onClick={() => setOpen(false)}
              className="mt-2 px-6 py-2.5 bg-black text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all inline-block"
            >
              Call Us: +1 (212) 555-0123
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}