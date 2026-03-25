'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { ArrowRight, Award, Globe, Zap, Heart, Coffee, Camera, PenTool, TrendingUp, Users, Shield } from 'lucide-react';

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement[]>([]);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Hero fade in
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 0.5,
        }
      }
    );

    // Story section
    gsap.fromTo(storyRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 0.5,
        }
      }
    );

    // Approach section
    gsap.fromTo(approachRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: approachRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 0.5,
        }
      }
    );

    // Team section
    gsap.fromTo(teamRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 0.5,
        }
      }
    );

    // Numbers - staggered
    numbersRef.current.forEach((num, i) => {
      if (num) {
        gsap.fromTo(num,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: num,
              start: "top 90%",
              end: "top 75%",
              scrub: 0.5,
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white mt-23 min-h-screen">
      
      {/* Hero Section */}
      <section className=" min-h-[70vh] mb-10 flex items-end  justify-center md:justify-start overflow-hidden ">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center " />
        
        <div ref={heroRef} className="relative z-10 items-center text-center md:text-left   px-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-600 tracking-wide">EST. 2020</span>
          </div>
          


         <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight  text-gray-900 mb-6 text-center md:text-left">
            We create
            <br />
            <span className="text-red-500">cultural movements.</span>
          </h1>
          

          <p className=" text-center md:text-left text-lg md:text-xl text-white leading-relaxed max-w-2xl">
            LOMEDIAHOUSE is a creative agency built at the intersection of premium storytelling, 
            strategic thinking, and cultural relevance.
          </p>
          
          <div className="mt-10 text-center md:text-left">
            <a 
              href="#story" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 group"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 tracking-wider">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-28 md:py-36">
        <div className="max-w-[90%] mx-auto px-6">
          <div ref={storyRef} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Text */}
            <div>
              <p className="text-red-500 text-sm uppercase tracking-[4px] font-medium mb-4">OUR STORY</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Born from a
                <br />
                <span className="text-red-500">simple belief.</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  In 2020, we noticed a gap in the market. Brands were creating content, but they weren't creating 
                  movements. They were following trends, not setting them.
                </p>
                <p>
                  So we built LOMEDIAHOUSE — a space where creativity meets strategy, where every frame tells a story, 
                  and where brands become unforgettable.
                </p>
                <p>
                  Today, we're proud to partner with visionaries across fashion, tech, and culture, helping them 
                  build legacies that last.
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-px bg-red-500" />
                <span className="text-sm text-gray-500">From 1 to 50+ brands in 4 years</span>
              </div>
            </div>
            
            {/* Right - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-3xl blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-6 max-w-[250px]">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Brands partnered</div>
                <div className="mt-2 text-xs text-gray-400">and counting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section ref={approachRef} className="py-28 md:py-36 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm uppercase tracking-[4px] font-medium mb-4">OUR APPROACH</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              How we create
              <br />
              <span className="text-red-500">unforgettable work.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Authentic Storytelling",
                desc: "We find the real narrative beneath the surface and bring it to life through powerful visuals.",
                image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070"
              },
              {
                icon: PenTool,
                title: "Strategic Precision",
                desc: "Every creative decision is backed by research, insights, and a clear path to results.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
              },
              {
                icon: Zap,
                title: "Fearless Execution",
                desc: "Ideas are nothing without action. We move fast, iterate, and deliver excellence.",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <div className="inline-flex p-3 rounded-xl bg-red-50 mb-6">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-28 md:py-36">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm uppercase tracking-[4px] font-medium mb-4">BY THE NUMBERS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The impact we've
              <br />
              <span className="text-red-500">created together.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Brands", icon: Award, desc: "Global partners" },
              { value: "250+", label: "Campaigns", icon: Globe, desc: "Successfully delivered" },
              { value: "98%", label: "Retention", icon: Heart, desc: "Client satisfaction" },
              { value: "4.9", label: "Rating", icon: Coffee, desc: "Average score" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) numbersRef.current[index] = el; }}
                  className="text-center group"
                >
                  <div className="inline-flex p-4 rounded-full bg-gray-100 mb-4 group-hover:bg-red-50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gray-700 group-hover:text-red-500 transition-colors" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">{item.value}</div>
                  <div className="text-sm font-medium text-gray-700 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section ref={teamRef} className="py-28 md:py-36 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-red-500 text-sm uppercase tracking-[4px] font-medium mb-4">THE TEAM</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Creative minds.
                <br />
                <span className="text-red-500">One mission.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We're a collective of strategists, storytellers, and designers united by a shared passion for 
                building brands that matter.
              </p>
              <a 
                href="/leadership" 
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                Meet the Leadership
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070"
              ].map((img, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src={img}
                    alt="Team member"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-36">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="relative bg-gray-900 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to create something
                <br />
                <span className="text-red-500">unforgettable?</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                Let's build a brand that moves culture together.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-gray-900 rounded-full font-medium hover:scale-105 transition-all duration-300 group"
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}