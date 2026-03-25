'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-zinc-200">
      <div className="max-w-[95%] mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
            <img
            src="/logo.png"
            className='object-cover '

            />
          </div>
          <div className="text-2xl font-bold tracking-tighter heading-font text-black">lo<span className="text-red-500">MediaHouse</span></div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-700">
          <a href="/" className="hover:text-black transition-colors">Home</a>

          <a href="/Aboutus" className="hover:text-black transition-colors">About us</a>
          <a href="/Divisions" className="hover:text-black transition-colors">Divisions</a>
          <a href="/Leadership" className="hover:text-black transition-colors">Leadership</a>
          {/* <a href="#production" className="hover:text-black transition-colors">Production</a> */}

          <a href="/ContactUs" className="hover:text-black transition-colors">Contact Us</a>
        </div>

      <div className="hidden md:block">
  <a 
    href="tel:+12125550123" 
    className="px-7 py-3 bg-black text-white rounded-full font-medium hover:bg-zinc-800 transition inline-block"
  >
    Call Us: +1 (212) 555-0123
  </a>
</div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-black">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-zinc-100 py-6">
          <div className="flex flex-col items-center gap-6 text-lg text-zinc-700">
            <a href="/" onClick={() => setOpen(false)}>Home</a>

            <a href="/Aboutus" onClick={() => setOpen(false)}>About Us</a>
            <a href="/Divisions" onClick={() => setOpen(false)}>Divisions</a>
            <a href="/Leadership" onClick={() => setOpen(false)}>Leadership</a>
            {/* <a href="#production" onClick={() => setOpen(false)}>Production</a> */}
            <a href="/ContactUs" onClick={() => setOpen(false)}>Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}