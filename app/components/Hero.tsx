'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import Lenis from 'lenis';
import { Canvas } from '@react-three/fiber';
import { Particles } from './Particles';
import { ChevronUp, ChevronDown } from 'lucide-react';

const cardsData = [
  {
    title: "LO Media Studio",
    tag: "CORE",
    color: "from-red-500 to-orange-500",
    price: "$12,000",
    desc: "Full-scale media partnership with strategy, cinematic production & authority engineering",
    button: "Start Partnership"
  },
  {
    title: "Cinematic Production",
    tag: "VISUAL",
    color: "from-blue-500 to-cyan-500",
    price: "$8,500",
    desc: "High-octane video production, brand documentaries & scroll-stopping campaigns",
    button: "Book Studio"
  },
  {
    title: "Brand Storytelling",
    tag: "STRATEGY",
    color: "from-purple-500 to-pink-500",
    price: "$6,000",
    desc: "Narrative architecture, visual identity & content systems that build authority",
    button: "View Publications"
  },
  {
    title: "Digital Authority",
    tag: "GROWTH",
    color: "from-green-500 to-emerald-500",
    price: "$4,500",
    desc: "Platform-specific optimization & engagement engines that drive conversion",
    button: "Explore Platform"
  }
];

const slides = [
  {
    image: "/img2.png",
    title: "Cinematic Storytelling",
    desc: "Visual firepower that commands attention"
  },
  {
    image: "/img4.jpg",
    title: "Brand Authority",
    desc: "Engineering perception through premium content"
  },
  {
    image: "/img3.jpg",
    title: "Strategic Campaigns",
    desc: "From passive viewers to committed stakeholders"
  },
  {
    image: "/img2.png",
    title: "Digital Legacy",
    desc: "Content systems that scale with your vision"
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
      className="relative min-h-screen bg-white text-black overflow-hidden pt-12 sm:pt-16"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Particles count={350} />
          <ambientLight intensity={1.3} />
          <pointLight position={[10, 10, 10]} color="#c4b5fd" />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-[95%] mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
          
          {/* LEFT COLUMN - Interactive Card Fan */}
          <div ref={leftRef} className="lg:col-span-5">
            <div className="uppercase text-xs tracking-[2px] text-zinc-500 font-medium mt-3">CORE CAPABILITIES</div>

            <div className="relative h-[280px] sm:h-[300px] md:h-[320px] flex justify-center items-center mt-2">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="absolute w-[220px] sm:w-[240px] md:w-[260px] bg-white/90 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-4 sm:p-5 transition-all duration-500 hover:z-50 cursor-pointer group"
                  style={{
                    transform: `rotate(${index * 6 - 9}deg) translateX(${index * 8 - 12}px) translateY(${index * 4 - 6}px)`,
                    zIndex: index + 1,
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.1,
                      rotate: 0,
                      y: -20,
                      zIndex: 50,
                      duration: 0.4,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      rotate: index * 6 - 9,
                      y: index * 4 - 6,
                      zIndex: index + 1,
                      duration: 0.5,
                      ease: "power2.out"
                    });
                  }}
                >
                  <div className={`absolute -top-2 left-4 bg-gradient-to-r ${card.color} text-white px-2.5 py-0.5 text-[9px] sm:text-xs font-medium rounded-full`}>
                    {card.tag}
                  </div>

                  <div className="text-[10px] sm:text-xs text-zinc-500 mt-5">{card.title}</div>
                  <div className="text-base sm:text-lg font-bold mt-1 leading-tight">{card.title}</div>

                  <p className="text-[10px] sm:text-xs text-zinc-600 mt-2 leading-snug min-h-[40px]">
                    {card.desc}
                  </p>

                  <button className="mt-3 sm:mt-4 w-full py-2 bg-black text-white rounded-xl font-medium text-[10px] sm:text-xs hover:bg-zinc-800 transition opacity-0 group-hover:opacity-100">
                    {card.button} →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 pt-2 sm:pt-4 ">
            <div className="mb-3 sm:mb-4">
              <h1 
                ref={titleRef}
                className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-[-1px] sm:tracking-[-2px] heading-font text-black animate-float"
              >
                LOMEDIASTUDIO
              </h1>
            </div>

            <div ref={headlineRef}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-[-0.5px] text-zinc-900">
                BUILD A BRAND THAT COMMANDS ATTENTION.
              </h2>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-2 sm:mt-3">
                <h3 className="text-lg sm:text-xl md:text-2xl leading-tight font-bold text-zinc-800">
                  High-Octane Media Production
                </h3>
                <p className="w-[300px] text-left sm:max-w-sm text-xs sm:text-sm text-zinc-600">
                  We engineer digital authority for visionaries, founders, leaders, and personal brands. Your message, unmissable.
                </p>
              </div>
            </div>

            <div
              ref={buttonRef}
              className="flex flex-wrap gap-3 "
            >
              <a href="/Aboutus" className="px-5 sm:px-6 py-2 sm:py-2.5 border border-black rounded-full hover:bg-black hover:text-white transition text-sm">
                Own Your Narrative
              </a>
              <a href="/ContactUs" className="px-5 sm:px-6 py-2 sm:py-2.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition text-sm">
                Schedule Strategy Session
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM VERTICAL SLIDER */}
        <div ref={bottomRef} className=" mt-10 lg:mt-[-20px] grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 relative z-10">
          
          {/* Left Image */}
          <div className="md:col-span-5 relative aspect-[16/9] sm:aspect-[9/3] bg-zinc-100 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-200">
            <img
              src="/img1.jpg"
              alt="Visual Firepower"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Slider */}
          <div className="md:col-span-7 relative rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-200 h-[140px] sm:h-[160px] md:h-[160px] bg-zinc-900 group">
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
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <div className="text-sm sm:text-base md:text-lg font-bold">{slide.title}</div>
                    <div className="text-xs sm:text-sm mt-0.5 opacity-90">{slide.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
              <button 
                onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)} 
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
              >
                <ChevronUp size={14} />
              </button>
              <button 
                onClick={() => goToSlide((currentSlide + 1) % slides.length)} 
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
              >
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex flex-col gap-1 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all ${
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