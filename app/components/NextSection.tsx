'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import Image from 'next/image';

// Social Icons and Apps
const socialIcons = [
  { name: "Instagram", icon: "📸", color: "from-purple-500 to-pink-500", delay: 0 },
  { name: "TikTok", icon: "🎵", color: "from-black to-gray-700", delay: 0.5 },
  { name: "YouTube", icon: "▶️", color: "from-red-600 to-red-800", delay: 1 },
  { name: "Twitter/X", icon: "🐦", color: "from-blue-400 to-blue-600", delay: 1.5 },
  { name: "LinkedIn", icon: "💼", color: "from-blue-700 to-blue-900", delay: 2 },
  { name: "Facebook", icon: "📘", color: "from-blue-600 to-blue-800", delay: 2.5 },
  { name: "Pinterest", icon: "📌", color: "from-red-500 to-red-700", delay: 3 },
  { name: "Snapchat", icon: "👻", color: "from-yellow-400 to-yellow-600", delay: 3.5 },
];

export default function NextSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);
  const orbitsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Title animation - fades in and scales
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 80, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
      0
    );

    // Description animation
    tl.fromTo(descRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 },
      0.3
    );

    // Center image pulses and scales
    tl.fromTo(centerImageRef.current,
      { scale: 0.7, opacity: 0, rotate: -10 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: "elastic.out(1, 0.6)" },
      0.2
    );

    // Animate icons to orbit and pulse
    iconsRef.current.forEach((icon, i) => {
      if (icon) {
        // Entrance animation
        gsap.fromTo(icon,
          { opacity: 0, scale: 0, rotation: -180 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: icon,
              start: "top 85%",
              end: "top 70%",
              scrub: 0.5,
            }
          }
        );

        // Continuous floating animation
        gsap.to(icon, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.2
        });
      }
    });

    // Animate orbital rings
    orbitsRef.current.forEach((orbit, i) => {
      if (orbit) {
        gsap.to(orbit, {
          rotation: 360,
          duration: 20 + i * 5,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center"
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-transparent mt-[-100px]  relative overflow-hidden"
    >
      
      <div className="max-w-[95%] mx-auto px-6 relative z-10 ">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content - Professional Copy */}
          <div className="lg:col-span-5">
            <h2 
              ref={titleRef}
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] font-black tracking-[-2px] text-black"
            >
              DIGITAL<br />
              <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                ECOSYSTEM
              </span>
            </h2>

            <div ref={descRef} className="mt-8 max-w-md">
              <p className="text-xl text-zinc-600 leading-relaxed">
                Integrated social media management, content strategy, and cross-platform 
                distribution that amplifies your brand voice across every digital touchpoint.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#work" className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25">
                  Launch Campaign →
                </a>
                <a href="#contact" className="px-8 py-4 border border-zinc-600 text-black rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                  Strategy Call
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
                <div>
                  <div className="text-3xl font-bold text-black">250+</div>
                  <div className="text-sm text-zinc-400">Campaigns Launched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black">98%</div>
                  <div className="text-sm text-zinc-400">Client Retention</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image with Circling Icons */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[500px]">
            
            {/* Orbital Ring 1 - Outer */}
            <div 
              ref={(el) => { if (el) orbitsRef.current[0] = el; }}
              className="absolute w-[450px] h-[450px] rounded-full border border-red-500/20"
              style={{ 
                borderWidth: '1px',
                borderStyle: 'dashed',
              }}
            />
            
            {/* Orbital Ring 2 - Inner */}
            <div 
              ref={(el) => { if (el) orbitsRef.current[1] = el; }}
              className="absolute w-[320px] h-[320px] rounded-full border border-purple-500/20"
              style={{ 
                borderWidth: '1px',
                borderStyle: 'dashed',
              }}
            />

            {/* Orbital Ring 3 - Middle */}
            <div 
              ref={(el) => { if (el) orbitsRef.current[2] = el; }}
              className="absolute w-[380px] h-[380px] rounded-full border border-blue-500/20"
              style={{ 
                borderWidth: '1px',
                borderStyle: 'dashed',
              }}
            />

            {/* Center Image */}
            <div 
              ref={centerImageRef}
              className="relative z-20"
            >
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-2xl shadow-red-500/20 ring-4 ring-white/10">
                <Image
                  src="/imagegirl.png"
                  alt="Digital Ecosystem"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full scale-110 hover:scale-125 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-purple-500/20 mix-blend-overlay" />
              </div>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-purple-500 blur-xl opacity-30 animate-pulse" />
            </div>

            {/* Circling Icons */}
            {socialIcons.map((social, index) => {
              const angle = (index / socialIcons.length) * 360;
              const radius = 240;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) iconsRef.current[index] = el; }}
                  className="absolute z-30 cursor-pointer group"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${social.color} shadow-xl flex items-center justify-center text-2xl md:text-3xl hover:scale-125 transition-all duration-300 hover:shadow-2xl`}>
                    {social.icon}
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {social.name}
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}

            {/* Decorative sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}