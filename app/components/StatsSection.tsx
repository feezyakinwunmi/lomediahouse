'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';

const stats = [
  {
    number: 30,
    suffix: "+",
    title: "Published Books",
    description: "Authored & designed for thought leaders",
    icon: "📚",
    color: "from-red-500 to-orange-500"
  },
  {
    number: 10,
    suffix: "+",
    title: "Social Pages Managed",
    description: "From startups to enterprise brands",
    icon: "📱",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: 15,
    suffix: "+",
    title: "Video Event Coverage",
    description: "Live productions & cinematic storytelling",
    icon: "🎥",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: 25,
    suffix: "+",
    title: "Design Projects",
    description: "Branding, publications & digital assets",
    icon: "🎨",
    color: "from-emerald-500 to-teal-500"
  }
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const numbersRef = useRef<HTMLSpanElement[]>([]);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!sectionRef.current) return;

    // Entrance animation for the whole section
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 0.5,
        }
      }
    );

    // Animate each stat card with stagger
    statsRef.current.forEach((stat, i) => {
      if (stat) {
        gsap.fromTo(stat,
          { 
            opacity: 0, 
            y: 60,
            scale: 0.8,
            rotation: i % 2 === 0 ? -5 : 5
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              end: "top 70%",
              scrub: 0.5,
            }
          }
        );
      }
    });

    // Count animation trigger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const duration = 2000;
            const step = Math.ceil(end / (duration / 16));
            
            const counter = setInterval(() => {
              start += step;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });
            }, 16);
          });
          observer.disconnect();
        }
      });
    });

    const statElements = statsRef.current.filter(el => el);
    statElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b mt-[-100px] rounded-t-full from-zinc-900 to-black py-28 md:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_50%)]" />
      
      <div className="max-w-[90%] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm uppercase tracking-[3px] font-medium mb-4">
            FEATURED WORK
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Numbers That <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">Speak</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Real results from real partnerships. Here's what we've built together.
          </p>
        </div>

        {/* Stats Grid with Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => { if (el) statsRef.current[index] = el; }}
              className="relative group"
            >
              <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-500 hover:transform hover:-translate-y-2">
                {/* Icon */}
                <div className={`text-5xl mb-6 inline-block bg-gradient-to-br ${stat.color} p-4 rounded-2xl shadow-xl`}>
                  {stat.icon}
                </div>
                
                {/* Number with Count Animation */}
                <div className="text-5xl md:text-6xl font-black text-white mb-3">
                  <span ref={(el) => { if (el) numbersRef.current[index] = el; }}>
                    {counts[index]}
                  </span>
                  {stat.suffix}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {stat.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 text-sm">
                  {stat.description}
                </p>
                
                {/* Decorative Line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mt-6 group-hover:w-24 transition-all duration-500" />
              </div>
              
              {/* Divider between cards (only visible on desktop) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-zinc-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-sm text-zinc-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-zinc-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-sm text-zinc-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}