'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { ArrowRight, Sparkles, Camera, Zap, BookOpen, Globe, Play, Layers, TrendingUp } from 'lucide-react';

const divisions = [
  {
    id: "mediahouse",
    name: "LO Media House",
    tagline: "Full-Service Media Agency",
    description: "We don't just manage social media — we build digital empires. From strategy to execution, we turn brands into cultural phenomena that dominate conversations.",
    fullDescription: "LO Media House is the heartbeat of our operation. We partner with brands to handle every aspect of their digital presence — content strategy, community management, influencer partnerships, and campaign execution. Our approach combines data-driven insights with creative intuition to create content that doesn't just perform, but resonates deeply with audiences.",
    services: [
      "Social Media Strategy & Management",
      "Influencer & Creator Partnerships",
      "Community Engagement & Growth",
      "Campaign Analytics & Reporting",
      "Crisis Communication Management"
    ],
    stats: { campaigns: "250+", growth: "300%", engagement: "4.8x" },
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
    shape: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
    color: "from-red-500 to-orange-500",
    icon: Globe
  },
  {
    id: "studio",
    name: "LO Studio",
    tagline: "Premium Creative Production",
    description: "Where cinematic storytelling meets commercial excellence. We produce visuals that don't just catch eyes — they capture hearts and minds.",
    fullDescription: "LO Studio is our creative powerhouse. We produce everything from high-end photoshoots to cinematic video campaigns. Our team of award-winning directors, photographers, and editors work tirelessly to create visuals that stand out in a crowded digital landscape. Whether it's a luxury fashion campaign or a documentary-style brand story, we bring unparalleled craftsmanship to every frame.",
    services: [
      "Cinematic Video Production",
      "High-End Photography",
      "Motion Graphics & Animation",
      "Post-Production & VFX",
      "Creative Direction & Styling"
    ],
    stats: { projects: "150+", awards: "12", satisfaction: "99%" },
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071",
    shape: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)",
    color: "from-blue-500 to-cyan-500",
    icon: Camera
  },
  {
    id: "publications",
    name: "LO Publications",
    tagline: "Editorial & Print Excellence",
    description: "We create beautiful, tactile publications that tell stories worth keeping. From lookbooks to magazines, we craft experiences that last.",
    fullDescription: "LO Publications celebrates the art of print. In a digital-first world, we believe there's still magic in holding something beautiful. We design and produce premium publications — from fashion lookbooks to corporate magazines — that capture the essence of your brand. Every page is a canvas, every detail matters, and every publication becomes a collector's item.",
    services: [
      "Magazine & Editorial Design",
      "Lookbooks & Catalogs",
      "Brand Guidelines & Identity",
      "Packaging Design",
      "Annual Reports & Corporate Publications"
    ],
    stats: { publications: "45+", pages: "2,500+", clients: "30+" },
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974",
    shape: "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)",
    color: "from-purple-500 to-pink-500",
    icon: BookOpen
  },
  {
    id: "platform",
    name: "LO Platform",
    tagline: "Smart Content Technology",
    description: "The tools you need to scale your content operation. Analytics, scheduling, and insights — all in one powerful platform.",
    fullDescription: "LO Platform is our technology arm — a powerful suite of tools designed to help brands manage, optimize, and scale their content operations. From intelligent scheduling to deep analytics, our platform gives you the insights you need to make data-driven creative decisions. Built by creators, for creators, LO Platform makes content management effortless.",
    services: [
      "Content Scheduling & Publishing",
      "Advanced Analytics & Insights",
      "Competitor Tracking",
      "Audience Intelligence",
      "Workflow Automation"
    ],
    stats: { users: "500+", uptime: "99.9%", satisfaction: "4.9" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    shape: "polygon(10% 0%, 100% 0%, 100% 80%, 90% 100%, 0% 100%)",
    color: "from-emerald-500 to-teal-500",
    icon: Zap
  }
];

export default function DivisionsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const divisionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 0.5,
          }
        }
      );
    }

    // Animate each division with unique entrance
    divisionRefs.current.forEach((div, i) => {
      if (div) {
        const direction = i % 2 === 0 ? -150 : 150;
        gsap.fromTo(div,
          { 
            opacity: 0, 
            x: direction,
            rotation: i % 2 === 0 ? -3 : 3,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: div,
              start: "top 85%",
              end: "top 65%",
              scrub: 0.8,
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Create refs array after render
  useEffect(() => {
    divisionRefs.current = divisionRefs.current.slice(0, divisions.length);
  }, []);

  return (
    <div ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white min-h-screen overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-16">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0">
          <svg className="absolute top-20 left-10 w-48 h-48 text-red-500/5 animate-spin-slow" viewBox="0 0 200 200">
            <path fill="currentColor" d="M100,20 L120,80 L180,80 L130,120 L150,180 L100,140 L50,180 L70,120 L20,80 L80,80 Z" />
          </svg>
          <svg className="absolute bottom-20 right-10 w-64 h-64 text-purple-500/5 animate-pulse-slow" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-red-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div ref={heroRef} className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6 animate-float">
            <Sparkles className="w-3 h-3 text-red-500" />
            <span className="text-[10px] text-gray-600 tracking-wide">THE LO UNIVERSE</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4">
            One vision.
            <br />
            <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Four pillars.
            </span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore our ecosystem of creative services — each division built to elevate your brand 
            in a unique way, united by a shared commitment to excellence.
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-400 tracking-wider">DISCOVER</span>
          <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </section>

      {/* Divisions Grid */}
      {divisions.map((division, idx) => {
        const Icon = division.icon;
        return (
          <section
            key={division.id}
            ref={(el: HTMLDivElement | null) => {
              divisionRefs.current[idx] = el;
            }}
            className="py-12 md:py-16 border-t border-gray-200 first:border-t-0"
          >
            <div className="max-w-[90%] mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${division.color} bg-opacity-10 mb-4`}>
                    <Icon className="w-3 h-3 text-red-500" />
                    <span className="text-[10px] font-medium text-gray-700 tracking-wide">{division.name}</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {division.tagline}
                  </h2>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {division.description}
                  </p>
                  
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    {division.fullDescription}
                  </p>
                  
                  {/* Services List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {division.services.map((service, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${division.color}`} />
                        {service}
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex gap-4 mb-6">
                    {Object.entries(division.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wide">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={`#${division.id}`} 
                    className={`inline-flex items-center gap-2 px-5 py-2 text-sm bg-gradient-to-r ${division.color} text-white rounded-full font-medium hover:scale-105 transition-all duration-300 group`}
                  >
                    Explore {division.name}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                {/* Right Image - Creative Shape */}
                <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${division.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                    <div 
                      className="relative overflow-hidden"
                      style={{ clipPath: division.shape }}
                    >
                      <img 
                        src={division.image}
                        alt={division.name}
                        className="w-full h-[280px] md:h-[320px] object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${division.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-float-slow">
                      <TrendingUp className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
                      <Play className="w-4 h-4 text-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Synergy Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute top-0 left-0 w-full h-full opacity-10">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Layers className="w-3 h-3 text-red-500" />
            <span className="text-[10px] text-white tracking-wide">THE SYNERGY</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Four divisions.
            <br />
            <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              One ecosystem.
            </span>
          </h2>
          
          <p className="text-sm text-gray-300 max-w-3xl mx-auto mb-8">
            Each division stands alone in its excellence, but together they form a powerful ecosystem 
            that can handle every aspect of your brand's creative journey.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4">
            {divisions.map((div, i) => (
              <div key={i} className="group">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${div.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <div className="text-white text-xs font-medium">{div.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.05); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}