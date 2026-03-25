'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import Lenis from 'lenis';
import { Canvas } from '@react-three/fiber';
import { Particles } from './Particles';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const cardsData = [
  {
    title: "LOMedia House",
    tag: "MAIN",
    color: "from-red-500 to-orange-500",
    price: "$12,000",
    desc: "Full media house partnership including strategy, shoots & social management",
    button: "Start Partnership"
  },
  {
    title: "LO Studio",
    tag: "PRODUCTION",
    color: "from-blue-500 to-cyan-500",
    price: "$8,500",
    desc: "Premium photoshoots, video production & cinematic content creation",
    button: "Book Studio"
  },
  {
    title: "LO Publications",
    tag: "EDITORIAL",
    color: "from-purple-500 to-pink-500",
    price: "$6,000",
    desc: "High-end magazine, lookbooks & brand publication design",
    button: "View Publications"
  },
  {
    title: "LO Platform",
    tag: "DIGITAL",
    color: "from-green-500 to-emerald-500",
    price: "$4,500",
    desc: "Social media management platform & content scheduling tools",
    button: "Explore Platform"
  }
];

const slides = [
  {
    image: "/img2.png",
    title: "Cinematic Photoshoots",
    desc: "Premium studio & location shoots"
  },
  {
    image: "/img4.jpg",
    title: "Editorial Publications",
    desc: "High-end magazine & brand books"
  },
  {
    image: "/img3.jpg",
    title: "Social Media Campaigns",
    desc: "Scroll-stopping content strategies"
  },
  {
    image: "/img2.png",
    title: "Behind The Scenes",
    desc: "Raw & authentic storytelling"
  }
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoSlide();
  };

  // GSAP Dissolve Animation
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.6,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.to(titleRef.current, { y: -140, scale: 0.8, opacity: 0, rotation: -5, filter: "blur(12px)", duration: 1.3 }, 0)
      .to(headlineRef.current, { y: -100, opacity: 0, duration: 1.2 }, 0.1)
      .to(leftRef.current, { y: 120, opacity: 0, duration: 1.1 }, 0.2)
      .to(bottomRef.current, { y: 200, opacity: 0, duration: 1.4 }, 0.5)
      .to(buttonRef.current,{ y: 200, opacity: 0, duration: 1.4 }, 0.5)
      .to(heroRef.current, { backgroundColor: "#f5f5f5", duration: 2 }, 0);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-white text-black overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Particles count={350} />
          <ambientLight intensity={1.3} />
          <pointLight position={[10, 10, 10]} color="#c4b5fd" />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-[95%] sm:max-w-[92%] md:max-w-[90%] lg:max-w-[95%] mx-auto px-3 sm:px-4 md:px-8 pt-8 sm:pt-10 md:pt-12">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-start">
          
          {/* LEFT COLUMN - Interactive Card Fan */}
          <div ref={leftRef} className="lg:col-span-5">
            <div className="uppercase text-xs sm:text-sm tracking-[2px] text-zinc-500 font-medium mb-4 sm:mb-0">OUR SERVICES</div>

            <div className="relative h-[320px] sm:h-[340px] md:h-[360px] lg:h-[380px] flex justify-center items-center mt-4 sm:mt-0">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="absolute w-[260px] sm:w-[270px] md:w-[280px] lg:w-[290px] bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 transition-all duration-500 hover:z-50 cursor-pointer group"
                  style={{
                    transform: `rotate(${index * 8 - 12}deg) translateX(${index * 10 - 15}px) translateY(${index * 5 - 8}px)`,
                    zIndex: index + 1,
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.12,
                      rotate: 0,
                      y: -25,
                      zIndex: 50,
                      duration: 0.4,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      rotate: index * 8 - 12,
                      y: index * 5 - 8,
                      zIndex: index + 1,
                      duration: 0.5,
                      ease: "power2.out"
                    });
                  }}
                >
                  <div className={`absolute -top-3 left-4 sm:left-5 md:left-6 bg-gradient-to-r ${card.color} text-white px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-medium rounded-full`}>
                    {card.tag}
                  </div>

                  <div className="text-xs sm:text-sm text-zinc-500 mt-6 sm:mt-7 md:mt-8">{card.title}</div>
                  <div className="text-xl sm:text-2xl font-bold mt-1 leading-tight">{card.title}</div>

                  <p className="text-xs sm:text-sm text-zinc-600 mt-3 sm:mt-4 leading-snug min-h-[50px] sm:min-h-[60px]">
                    {card.desc}
                  </p>

                  <button className="mt-6 sm:mt-7 md:mt-8 w-full py-2.5 sm:py-3 md:py-3.5 bg-black text-white rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm hover:bg-zinc-800 transition opacity-0 group-hover:opacity-100">
                    {card.button} →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 pt-4 sm:pt-6">
            <div className="mb-4 sm:mb-6">
              <h1 
                ref={titleRef}
                className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4px] heading-font text-black animate-float"
              >
                LOMEDIAHOUSE
              </h1>
            </div>

            <div ref={headlineRef}>
              <h2 className="text-2xl sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.4rem] xl:text-[3.8rem] leading-[1.2] sm:leading-[1.1] font-bold tracking-[-1px] sm:tracking-[-2px] text-zinc-900">
                WE ARE A NEW MEDIA HOUSE
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-3 sm:mt-4">
                <h3 className="text-xl sm:text-2xl md:text-[2.4rem] lg:text-[2.2rem] leading-tight sm:leading-none font-bold tracking-[-1px] sm:tracking-[-2px] text-zinc-800">
                  THAT BUILDS MOVEMENTS
                </h3>
                <p className="max-w-full sm:max-w-sm text-sm sm:text-base text-zinc-600">
                  We handle social pages, create premium publications, 
                  and produce cinematic shoots that turn brands into movements.
                </p>
              </div>
            </div>

            <div
              ref={buttonRef}
              className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-5 md:mt-6"
            >
              <a href="/Aoutus" className="px-6 sm:px-8 py-3 sm:py-4 border border-black rounded-full hover:bg-black hover:text-white transition text-sm sm:text-base md:text-lg">
                Learn More
              </a>
              <a href="/ContactUs" className="px-6 sm:px-8 py-3 sm:py-4 bg-red-500 text-white rounded-full hover:bg-zinc-800 transition text-sm sm:text-base md:text-lg">
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM VERTICAL SLIDER */}
        <div ref={bottomRef} className="mt-6 sm:mt-8 md:mt-[10px] grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 relative z-10">
          
          {/* Left Image */}
          <div className="md:col-span-5 relative aspect-[16/9] sm:aspect-[8.5/3] bg-zinc-100 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200">
            <img
            src="/img1.jpg"
            className='h-full w-full object-cover'

            />



          </div>

          {/* Right Slider */}
         <div className="md:col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] bg-zinc-900 group">
  {/* Slide Container - This needs to have height = total height of all slides */}
  <div 
    className="relative w-full transition-all duration-700 ease-out"
    style={{ 
      height: `${slides.length * 100}%`,
      transform: `translateY(-${currentSlide * (100 / slides.length)}%)` 
    }}
  >
    {slides.map((slide, index) => (
      <div 
        key={index} 
        className="relative w-full h-full overflow-hidden"
        style={{ height: `${100 / slides.length}%` }}
      >
        <img 
          src={slide.image} 
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 text-white">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">{slide.title}</div>
          <div className="text-sm sm:text-base md:text-lg mt-0.5 sm:mt-1 opacity-90">{slide.desc}</div>
        </div>
      </div>
    ))}
  </div>

  {/* Navigation Arrows */}
  <div className="absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 md:gap-4 z-20">
    <button 
      onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)} 
      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
    >
      <ChevronUp size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
    </button>
    <button 
      onClick={() => goToSlide((currentSlide + 1) % slides.length)} 
      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
    >
      <ChevronDown size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
    </button>
  </div>

  {/* Slide Indicators */}
  <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 flex flex-col gap-1 sm:gap-2 z-20">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
          currentSlide === index ? 'bg-white scale-125' : 'bg-white/40'
        }`}
      />
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
}