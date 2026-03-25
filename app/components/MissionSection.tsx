'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { Sparkles, Target, Eye, Zap, Shield, Heart, TrendingUp, Users } from 'lucide-react';

const coreValues = [
  {
    title: "Radical Authenticity",
    description: "No scripts. No filters. Just real stories that connect.",
    icon: Sparkles,
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Obsessive Craft",
    description: "Every pixel, every frame, every word — perfected.",
    icon: Target,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Fearless Innovation",
    description: "We don't follow trends. We set them.",
    icon: Zap,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Unbreakable Trust",
    description: "Your brand is our brand. We protect it like our own.",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-500"
  }
];

const stats = [
  { value: "250+", label: "Campaigns", icon: TrendingUp },
  { value: "98%", label: "Retention", icon: Heart },
  { value: "50+", label: "Brands", icon: Users },
  { value: "4.9", label: "Rating", icon: Sparkles }
];

export default function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Elegant mission entrance
    gsap.fromTo(missionRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 0.5,
        }
      }
    );

    // Elegant vision entrance
    gsap.fromTo(visionRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 0.5,
        }
      }
    );

    // Values cards - staggered fade up
    valuesRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 75%",
              scrub: 0.5,
            }
          }
        );
      }
    });

    // Stats - fade up with stagger
    statsRef.current.forEach((stat, i) => {
      if (stat) {
        gsap.fromTo(stat,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              end: "top 75%",
              scrub: 0.5,
            }
          }
        );
      }
    });

    // Subtle scatter when scrolling out
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress > 0.7) {
          const intensity = (progress - 0.7) / 0.3;
          
          gsap.set(missionRef.current, {
            y: -50 * intensity,
            opacity: 1 - intensity,
            filter: `blur(${intensity * 15}px)`
          });
          
          gsap.set(visionRef.current, {
            y: -50 * intensity,
            opacity: 1 - intensity,
            filter: `blur(${intensity * 15}px)`
          });
          
          valuesRef.current.forEach((card) => {
            if (card) {
              gsap.set(card, {
                y: 40 * intensity,
                opacity: 1 - intensity * 1.2,
                filter: `blur(${intensity * 10}px)`
              });
            }
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
      className="relative py-28 md:py-10 overflow-hidden bg-gray-100"
    >
     
      
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header - Clean & Minimal */}
        <div className="text-center mb-20 md:mb-18">
          <p className="text-transparent text-sm uppercase tracking-[4px] font-light mb-4">WHY WE EXIST</p>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-zinc-400 to-black bg-clip-text text-transparent">
            Purpose &
            <span className="font-bold bg-gradient-to-r from-zinc-400 to-black bg-clip-text text-transparent">Principles</span>
          </h2>
          <div className="w-12 h-px bg-red-500 mx-auto mt-8" />
        </div>

        {/* Mission & Vision - Split Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-28 md:mb-16">
          
          {/* Mission */}
          <div
            ref={missionRef}
            className="group relative border-l-2 border-red-500 pl-8 md:pl-10 hover:border-red-400 transition-all duration-500"
          >
            <div className="absolute -left-[1px] top-0 w-0 h-0 group-hover:w-full group-hover:h-full bg-gradient-to-r from-red-500/5 to-transparent transition-all duration-700" />
            <div className="text-red-500 text-2xl mb-6">01</div>
            <h3 className="text-3xl md:text-4xl font-light text-black mb-4">Mission</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              To build brands that matter through uncompromising creativity, authentic storytelling, and strategic excellence.
            </p>
          </div>

          {/* Vision */}
          <div
            ref={visionRef}
            className="group relative border-l-2 border-zinc-800 pl-8 md:pl-10 hover:border-purple-500 transition-all duration-500"
          >
            <div className="absolute -left-[1px] top-0 w-0 h-0 group-hover:w-full group-hover:h-full bg-gradient-to-r from-purple-500/5 to-transparent transition-all duration-700" />
            <div className="text-purple-500 text-2xl mb-6">02</div>
            <h3 className="text-3xl md:text-4xl font-light text-black mb-4">Vision</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              To become the definitive creative partner for visionaries who refuse to blend in.
            </p>
          </div>
        </div>

        {/* Core Values - Minimal Grid */}
        <div className="text-center ">
          <h3 className="text-3xl md:text-4xl font-light text-black">Core Values</h3>
          <p className="text-zinc-500 mt-3 text-sm tracking-wide">The principles that define us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-28">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                ref={(el) => { if (el) valuesRef.current[index] = el; }}
                className="group bg-black hover:bg-white/5 transition-all duration-500 p-8 text-center"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${value.gradient} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-medium text-white mb-3 group-hover:text-red-500 transition-colors">
                  {value.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}