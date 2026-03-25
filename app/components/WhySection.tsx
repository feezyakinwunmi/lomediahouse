'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';

const reasons = [
  {
    number: "01",
    title: "We Obsess Over Story",
    desc: "Every post, every shoot, every publication is crafted to tell a story that people feel — not just see.",
    image: "https://picsum.photos/id/20/800/600",
    width: "w-full sm:w-[48%] lg:w-[40%]", // Responsive widths
  },
  {
    number: "02",
    title: "Quality Without Compromise",
    desc: "We don't do average. From lighting to typography to timing — we sweat every detail so your brand feels expensive.",
    image: "https://picsum.photos/id/30/800/600",
    width: "w-full sm:w-[48%] lg:w-[28%]", // Responsive widths
  },
  {
    number: "03",
    title: "Built for Movement",
    desc: "We create content that doesn't just get likes — it gets shared, saved, and talked about for months.",
    image: "https://picsum.photos/id/40/800/600",
    width: "w-full sm:w-[48%] lg:w-[32%]", // Responsive widths
  },
  {
    number: "04",
    title: "We Think Like Partners",
    desc: "You're not just a client. We treat your brand like our own and push it further than you expected.",
    image: "https://picsum.photos/id/50/800/600",
    width: "w-full sm:w-[48%] lg:w-[45%]", // Responsive widths
  }
];

export default function WhySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // CRAZY TITLE ANIMATION - Explosive entrance
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

    // WILD CARD ANIMATIONS - Each card has unique entrance
    cardsRef.current.forEach((card, i) => {
      if (card) {
        // Different animations for each card
        const animations = [
          { x: -300, rotation: -25, scale: 0.3, skew: 15 },  // Card 1 - from left, spin
          { x: 400, rotation: 35, scale: 0.2, skew: -20 },   // Card 2 - from right, crazy spin
          { y: -250, rotation: 180, scale: 0.4, skew: 10 },   // Card 3 - from top, flip
          { y: 300, rotation: -45, scale: 0.25, skew: -15 }    // Card 4 - from bottom, twist
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

    // EXPLOSIVE SCATTER when scrolling out
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 2.5,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress > 0.6) {
          const intensity = (progress - 0.6) / 0.4;
          
          // Cards explode in different directions
          cardsRef.current.forEach((card, i) => {
            if (card) {
              const directions = [
                { x: -500, y: -200, rot: -120 },  // Fly top-left
                { x: 600, y: -150, rot: 90 },      // Fly top-right
                { x: -400, y: 300, rot: 150 },     // Fly bottom-left
                { x: 550, y: 250, rot: -90 }       // Fly bottom-right
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
          
          // Title explodes too
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
      className="text-white py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white"
    >
      <div className="max-w-[95%] sm:max-w-[92%] md:max-w-[90%] lg:max-w-[96%] mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
        
          {/* LEFT COLUMN - Title */}
          <div className="lg:w-[35%] w-full lg:sticky lg:top-32 lg:self-start">
            <h2
              ref={titleRef}
              className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] font-black tracking-[-2px] sm:tracking-[-3px] text-left"
            >
              WHY <span className="text-red-500 inline-block">Choose Us</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-zinc-600 text-left">
              We don't just make content.<br />We build brands that move culture.
            </p>
            <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-1 bg-red-500 rounded-full animate-pulse" />
            
            {/* Final CTA */}
            <div className="text-start mt-6 sm:mt-8">
              <a
                href="#contact"
                className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-black text-white rounded-xl text-base sm:text-lg font-semibold hover:bg-zinc-800 transition-all hover:scale-105 hover:shadow-2xl transform duration-300"
              >
                Let's Build Something Legendary →
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Masonry with DIFFERENT WIDTHS, SAME HEIGHT */}
          <div className="lg:w-[65%] w-full">
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-end">
              
              {/* Card 1 */}
              <div
                ref={(el) => { if (el) cardsRef.current[0] = el; }}
                className={`${reasons[0].width} group cursor-pointer`}
              >
                <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-red-500/20 transition-all duration-500">
                  <img 
                    src={reasons[0].image} 
                    alt={reasons[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-5px] sm:group-hover:translate-y-[-10px]">
                    <div className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2 opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110 origin-left">
                      {reasons[0].number}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight mb-1 text-white group-hover:text-red-500 transition-colors line-clamp-1">
                      {reasons[0].title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-2 hidden sm:block">
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
                <div className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-red-500/20 transition-all duration-500">
                  <img 
                    src={reasons[1].image} 
                    alt={reasons[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-5px] sm:group-hover:translate-y-[-10px]">
                    <div className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2 opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110 origin-left">
                      {reasons[1].number}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight mb-1 text-white group-hover:text-red-500 transition-colors line-clamp-1">
                      {reasons[1].title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-2 hidden sm:block">
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
                <div className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-red-500/20 transition-all duration-500">
                  <img 
                    src={reasons[2].image} 
                    alt={reasons[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-5px] sm:group-hover:translate-y-[-10px]">
                    <div className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2 opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110 origin-left">
                      {reasons[2].number}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight mb-1 text-white group-hover:text-red-500 transition-colors line-clamp-1">
                      {reasons[2].title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-2 hidden sm:block">
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
                <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-red-500/20 transition-all duration-500">
                  <img 
                    src={reasons[3].image} 
                    alt={reasons[3].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-5px] sm:group-hover:translate-y-[-10px]">
                    <div className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2 opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110 origin-left">
                      {reasons[3].number}
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight mb-1 text-white group-hover:text-red-500 transition-colors line-clamp-1">
                      {reasons[3].title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-2 hidden sm:block">
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