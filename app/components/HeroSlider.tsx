'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';

const slides = [
  { image: '/img2.png', title: 'Cinematic Storytelling', desc: 'Visual firepower that commands attention' },
  { image: '/img4.jpg', title: 'Brand Authority', desc: 'Engineering perception through premium content' },
  { image: '/img3.jpg', title: 'Strategic Campaigns', desc: 'From passive viewers to committed stakeholders' },
  { image: '/img2.png', title: 'Digital Legacy', desc: 'Content systems that scale with your vision' },
];

const REDUCED = '(max-width: 767px), (prefers-reduced-motion: reduce)';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllSlides, setShowAllSlides] = useState(false);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    if (window.matchMedia(REDUCED).matches) return;
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const update = () => setShowAllSlides(desktopQuery.matches);
    update();
    desktopQuery.addEventListener('change', update);
    return () => desktopQuery.removeEventListener('change', update);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoSlide();
  };

  const rendered = showAllSlides ? slides : [slides[currentSlide]];

  return (
    <div
      className="md:col-span-7 relative rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-200 h-[140px] sm:h-[160px] md:h-[160px] bg-zinc-900 group"
      aria-roledescription="carousel"
      aria-label="Featured work"
    >
      <div
        className="relative w-full transition-all duration-700 ease-out"
        style={{
          height: `${showAllSlides ? slides.length * 100 : 100}%`,
          transform: showAllSlides ? `translateY(-${currentSlide * (100 / slides.length)}%)` : undefined,
        }}
      >
        {rendered.map((slide, renderedIndex) => {
          const index = showAllSlides ? renderedIndex : currentSlide;
          return (
            <div
              key={`${index}-${slide.title}`}
              className="relative w-full h-full overflow-hidden"
              style={{ height: `${100 / rendered.length}%` }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <p className="text-sm sm:text-base md:text-lg font-bold">{slide.title}</p>
                <p className="text-xs sm:text-sm mt-0.5 opacity-90">{slide.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        <button
          type="button"
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="w-8 h-8 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
        >
          <ChevronUp size={14} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          aria-label="Next slide"
          className="w-8 h-8 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
        >
          <ChevronDown size={14} aria-hidden="true" />
        </button>
      </div>

      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-14 flex gap-1 z-20">
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Show slide ${index + 1}: ${slide.title}`}
            aria-current={currentSlide === index}
            className="w-6 h-6 flex items-center justify-center"
          >
            <span
              className={`block w-1.5 h-1.5 rounded-full transition-all ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
