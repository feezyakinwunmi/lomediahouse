'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';

const services = [
  {
    number: "01",
    title: "LOMedia House",
    desc: "Full-service media partnership. Strategy, content, shoots & social domination.",
    color: "red",
  },
  {
    number: "02",
    title: "LO Studio",
    desc: "Premium photoshoots, cinematic videos, and high-production creative work.",
    color: "blue",
  },
  {
    number: "03",
    title: "LO Publications",
    desc: "Editorial design, lookbooks, magazines & premium brand storytelling.",
    color: "purple",
  },
  {
    number: "04",
    title: "LO Platform",
    desc: "Smart social tools, scheduling, analytics & content performance platform.",
    color: "emerald",
  }
];

const colorMap: Record<string, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  emerald: "bg-emerald-500",
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Title animation - faster
    gsap.fromTo(titleRef.current,
      { scale: 1.2, opacity: 0, y: 40 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 0.3,
        }
      }
    );

    // Cards animation - MUCH FASTER (0.2 seconds total)
    gsap.fromTo(cardsRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.2,
        stagger: 0.03,
        ease: "power1.out",
      }
    );

    // Keep hover focus effect
    const focusCard = (activeIndex: number) => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        if (i === activeIndex) {
          gsap.to(card, { scale: 1.08, y: -15, duration: 0.3 });
        } else {
          gsap.to(card, { scale: 0.95, y: 0, opacity: 0.7, duration: 0.3 });
        }
      });
    };

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      ScrollTrigger.create({
        trigger: card,
        start: "top 65%",
        end: "top 35%",
        scrub: 0.2,
        onEnter: () => focusCard(i),
        onEnterBack: () => focusCard(i),
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-20 relative overflow-hidden bg-transparent"
    >
      <div className="max-w-[96%] mx-auto px-5 md:px-8 lg:px-10">

        <div className="mb-12 md:mb-16 lg:mb-20">
          <p className="uppercase tracking-[3px] text-xs md:text-sm text-zinc-500 font-medium">
            OUR SERVICES
          </p>

          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-black tracking-[-2px] text-black mt-4 origin-left"
          >
            OUR CRAFT
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
                const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;

                gsap.to(card, {
                  rotateX: y,
                  rotateY: x,
                  transformPerspective: 1000,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  rotateX: 0,
                  rotateY: 0,
                  duration: 0.3,
                  ease: "power3.out"
                });
              }}
              className="group bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl will-change-transform"
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <span className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-300 group-hover:text-zinc-400 transition-colors">
                  {service.number}
                </span>
                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${colorMap[service.color]} mt-1`} />
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-3 md:mb-4 text-black group-hover:text-red-500 transition-colors">
                {service.title}
              </h3>

              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                {service.desc}
              </p>

              <div className="mt-8 md:mt-10 text-sm font-medium flex items-center gap-2 md:gap-3 text-black group-hover:gap-3 md:group-hover:gap-4 transition-all">
                Explore 
                <span className="text-lg md:text-xl transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}