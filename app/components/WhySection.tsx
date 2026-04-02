'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';

const reasons = [
  {
    number: "01",
    title: "Engineer Digital Authority",
    desc: "We don't just 'make content.' We engineer your visual identity to command respect the moment it's seen.",
    image: "https://picsum.photos/id/20/800/600",
    width: "w-full sm:w-[48%] lg:w-[40%]",
  },
  {
    number: "02",
    title: "Uncompromising Excellence",
    desc: "We maintain a standard of excellence that reflects the value of your brand. From lighting to typography — we sweat every detail.",
    image: "https://picsum.photos/id/30/800/600",
    width: "w-full sm:w-[48%] lg:w-[28%]",
  },
  {
    number: "03",
    title: "Built for Movement",
    desc: "We move your audience from passive viewers to committed stakeholders. Every frame is designed to trigger a specific result.",
    image: "https://picsum.photos/id/40/800/600",
    width: "w-full sm:w-[48%] lg:w-[32%]",
  },
  {
    number: "04",
    title: "Strategic Partnership",
    desc: "We don't guess. We execute based on proven methods of what works. Your brand becomes our mission.",
    image: "https://picsum.photos/id/50/800/600",
    width: "w-full sm:w-[48%] lg:w-[45%]",
  }
];

export default function WhySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(titleRef.current,
      { 
        scale: 2.5, 
        opacity: 0, 
        y: 200,
        rotationX: 90,
        rotationY: 45,
        filter: "blur(30px)",
        skewX: 20
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        filter: "blur(0px)",
        skewX: 0,
        duration: 1.5,
        ease: "elastic.out(1.2, 0.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 45%",
          scrub: 1,
        }
      }
    );

    cardsRef.current.forEach((card, i) => {
      if (card) {
        const animations = [
          { x: -300, rotation: -25, scale: 0.3, skew: 15 },
          { x: 400, rotation: 35, scale: 0.2, skew: -20 },
          { y: -250, rotation: 180, scale: 0.4, skew: 10 },
          { y: 300, rotation: -45, scale: 0.25, skew: -15 }
        ];
        
        gsap.fromTo(card,
          {
            opacity: 0,
            x: animations[i].x,
            y: animations[i].y || 0,
            rotation: animations[i].rotation,
            scale: animations[i].scale,
            skewX: animations[i].skew,
            filter: "blur(20px)"
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            skewX: 0,
            filter: "blur(0px)",
            duration: 1,
            delay: i * 0.12,
            ease: "back.out(1.8)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 70%",
              scrub: 0.8,
            }
          }
        );
      }
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 2.5,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress > 0.6) {
          const intensity = (progress - 0.6) / 0.4;
          
          cardsRef.current.forEach((card, i) => {
            if (card) {
              const directions = [
                { x: -500, y: -200, rot: -120 },
                { x: 600, y: -150, rot: 90 },
                { x: -400, y: 300, rot: 150 },
                { x: 550, y: 250, rot: -90 }
              ];
              
              gsap.set(card, {
                x: directions[i].x * intensity,
                y: directions[i].y * intensity,
                rotation: directions[i].rot * intensity,
                scale: 1 - intensity * 1.2,
                opacity: 1 - intensity * 2,
                filter: `blur(${intensity * 50}px)`,
                skewX: intensity * 30
              });
            }
          });
          
          gsap.set(titleRef.current, {
            scale: 1 - intensity * 1.8,
            rotation: intensity * 45,
            rotationX: intensity * 60,
            opacity: 1 - intensity * 2,
            filter: `blur(${intensity * 60}px)`,
            skewX: intensity * 40
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-white py-10 sm:py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white"
    >
      <div className="max-w-[95%] sm:max-w-[92%] md:max-w-[90%] lg:max-w-[96%] mx-auto px-3 sm:px-4">
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
        
          {/* LEFT COLUMN - Title */}
          <div className="lg:w-[35%] w-full lg:sticky lg:top-32 lg:self-start">
            <h2
              ref={titleRef}
              className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-black tracking-[-1px] sm:tracking-[-2px] text-left"
            >
              WHY <span className="text-red-500 inline-block">Choose Us</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 text-left">
              We don't just make content.<br />We engineer digital authority.
            </p>
            <div className="mt-4 sm:mt-5 w-12 sm:w-16 h-0.5 bg-red-500 rounded-full animate-pulse" />
            
            {/* Final CTA */}
            <div className="text-start mt-5 sm:mt-6">
              <a
                href="#contact"
                className="inline-block px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-black text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-zinc-800 transition-all hover:scale-105 hover:shadow-xl transform duration-300"
              >
                Build Your Legacy →
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Masonry with DIFFERENT WIDTHS, SAME HEIGHT */}
          <div className="lg:w-[65%] w-full">
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-end">
              
              {/* Card 1 */}
              <div
                ref={(el) => { if (el) cardsRef.current[0] = el; }}
                className={`${reasons[0].width} group cursor-pointer`}
              >
                <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all duration-500">
                  <img 
                    src={reasons[0].image} 
                    alt={reasons[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-3px] sm:group-hover:translate-y-[-5px]">
                    <div className="text-red-500 text-xl sm:text-2xl md:text-3xl font-black mb-0.5 sm:mb-1 opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110 origin-left">
                      {reasons[0].number}
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold tracking-tight mb-0.5 text-white group-hover:text-red-500 transition-colors line-clamp-1">
                      {reasons[0].title}
                    </h3>
                    <p className="text-zinc-300 text-[10px] sm:text-xs leading-relaxed line-clamp-2 hidden sm:block">
                      {reasons[0].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                ref={(el) => { if (el) cardsRef.current[1] = el; }}
                className={`${reasons[1].width} group cursor-pointer`}
              >
                <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all duration-500">
                  <img 
                    src={reasons[1].image} 
                    alt={reasons[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-3px] sm:group-hover:translate-y-[-5px]">
                    <div className="text-red-500 text-xl sm:text-2xl md:text-3xl font-black mb-0.5 sm:mb-1 opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110 origin-left">
                      {reasons[1].number}
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold tracking-tight mb-0.5 text-white group-hover:text-red-500 transition-colors line-clamp-1">
                      {reasons[1].title}
                    </h3>
                    <p className="text-zinc-300 text-[10px] sm:text-xs leading-relaxed line-clamp-2 hidden sm:block">
                      {reasons[1].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div
                ref={(el) => { if (el) cardsRef.current[2] = el; }}
                className={`${reasons[2].width} group cursor-pointer`}
              >
                <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all duration-500">
                  <img 
                    src={reasons[2].image} 
                    alt={reasons[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-3px] sm:group-hover:translate-y-[-5px]">
                    <div className="text-red-500 text-xl sm:text-2xl md:text-3xl font-black mb-0.5 sm:mb-1 opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110 origin-left">
                      {reasons[2].number}
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold tracking-tight mb-0.5 text-white group-hover:text-red-500 transition-colors line-clamp-1">
                      {reasons[2].title}
                    </h3>
                    <p className="text-zinc-300 text-[10px] sm:text-xs leading-relaxed line-clamp-2 hidden sm:block">
                      {reasons[2].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div
                ref={(el) => { if (el) cardsRef.current[3] = el; }}
                className={`${reasons[3].width} group cursor-pointer`}
              >
                <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all duration-500">
                  <img 
                    src={reasons[3].image} 
                    alt={reasons[3].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-3px] sm:group-hover:translate-y-[-5px]">
                    <div className="text-red-500 text-xl sm:text-2xl md:text-3xl font-black mb-0.5 sm:mb-1 opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110 origin-left">
                      {reasons[3].number}
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold tracking-tight mb-0.5 text-white group-hover:text-red-500 transition-colors line-clamp-1">
                      {reasons[3].title}
                    </h3>
                    <p className="text-zinc-300 text-[10px] sm:text-xs leading-relaxed line-clamp-2 hidden sm:block">
                      {reasons[3].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}