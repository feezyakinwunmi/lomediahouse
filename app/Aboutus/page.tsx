'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { ArrowRight, Award, Globe, Zap, Heart, Coffee, Camera, PenTool, BookOpen, Layout, Mic, Users, Target, Shield } from 'lucide-react';

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
    <div ref={sectionRef} className="bg-white mt-16 min-h-screen">
      
      {/* Hero Section - Updated for LO Media House */}
      <section className="relative min-h-[100vh] flex items-center justify-center md:justify-start overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center opacity-30" />
        
        <div ref={heroRef} className="relative z-10 w-full max-w-[90%] mx-auto px-4 md:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs text-white tracking-wide">NIGERIA • GLOBAL REACH</span>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
              LO Media House
              <br />
              <span className="text-red-500">Ideas to Impact.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl">
              We're a Nigerian-based media and technology brand connecting clients to audiences globally, 
              transforming ideas into books, websites, apps, and content that truly reach.
            </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </section>

      {/* Story Section - Integrated Vision & Mission */}
      <section id="story" className="py-16 md:py-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div ref={storyRef} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left - Text */}
            <div>
              <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">WHO WE ARE</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Integrated media.
                <br />
                <span className="text-red-500">Global connection.</span>
              </h2>
              <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  LO Media House brings together publishing, digital platforms, and creative production under one roof. 
                  We turn ideas into structured content, manage the systems that carry them, and ensure they reach the 
                  audiences they're meant for.
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Our Vision:</span> To be a reliable partner supporting content, 
                  platforms, and communities from development to distribution.
                </p>
                <p>
                  <span className="font-semibold text-gray-800">Our Mission:</span> Transform ideas into structured content, 
                  manage delivery systems, and connect with target audiences, with attention, consistency, and understanding.
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-px bg-red-500" />
                <span className="text-xs text-gray-500">From Nigeria to the world</span>
              </div>
            </div>
            
            {/* Right - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-2xl blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-xl w-full h-[350px] md:h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-xl p-4 max-w-[200px]">
                <div className="text-2xl font-bold text-gray-900">6 Values</div>
                <div className="text-xs text-gray-600">Guiding everything we do</div>
                <div className="mt-1 text-[10px] text-gray-400">Love • Excellence • Integrity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Summarized from 8 to 6 key values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">OUR FOUNDATION</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Built on
              <br />
              <span className="text-red-500">core values.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Heart, title: "Love", desc: "Genuine care for your vision" },
              { icon: Users, title: "Collaboration", desc: "Hand-in-hand partnership" },
              { icon: Target, title: "Excellence", desc: "Justice to every vision" },
              { icon: Zap, title: "Creativity", desc: "Memorable solutions" },
              { icon: Shield, title: "Integrity", desc: "Honest & transparent" },
              { icon: Award, title: "Empowerment", desc: "Tools for independence" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-3 rounded-full bg-white shadow-sm mb-3 group-hover:bg-red-50 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gray-700 group-hover:text-red-500 transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divisions Section - The 3 core offerings */}
      <section ref={approachRef} className="py-16 md:py-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">HOW WE OPERATE</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Three divisions.
              <br />
              <span className="text-red-500">One unified system.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: BookOpen,
                title: "LO Publication",
                desc: "From writing and editing to production and distribution, we bring books and written content to life for authors and organizations.",
                image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073"
              },
              {
                icon: Layout,
                title: "LO Platform",
                desc: "Websites, web apps, and digital systems designed with purpose, reliability, and scalability, so your technology delivers real value.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
              },
              {
                icon: Mic,
                title: "LO Media Studio",
                desc: "Creative content, social strategy, SEO, photography, video, and visual identity, crafting brands that communicate and connect.",
                image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="h-36 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <div className="inline-flex p-2 rounded-lg bg-red-50 mb-4">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Numbers Section - Updated with relevant stats */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">OUR REACH</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              The impact we've
              <br />
              <span className="text-red-500">built together.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {[
              { value: "50+", label: "Authors", icon: Award, desc: "Published & supported" },
              { value: "100+", label: "Platforms", icon: Globe, desc: "Websites & apps" },
              { value: "24/7", label: "Global Reach", icon: Heart, desc: "Audience connection" },
              { value: "100%", label: "Commitment", icon: Coffee, desc: "To your vision" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) numbersRef.current[index] = el; }}
                  className="text-center group"
                >
                  <div className="inline-flex p-3 rounded-full bg-white shadow-sm mb-3 group-hover:bg-red-50 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gray-700 group-hover:text-red-500 transition-colors" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{item.value}</div>
                  <div className="text-xs font-medium text-gray-700 mb-0.5">{item.label}</div>
                  <div className="text-[10px] text-gray-400">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership + Team Preview */}
      <section ref={teamRef} className="py-16 md:py-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">THE LEADERSHIP</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Professionals with
                <br />
                <span className="text-red-500">a collective mission.</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                LO Media House is led by experts in media, technology, branding, and communications. 
                What sets us apart is our commitment to serve, building lasting partnerships through 
                thoughtful, high-quality service. Every leader here is dedicated to your success and 
                lasting impact.
              </p>
              <a 
                href="/Leadership" 
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 group text-sm"
              >
                Meet Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {[
"/layo.jpg",
"/john.jpg",
"/kenny.jpg",
"/julius.jpg",
              ].map((img, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden aspect-square">
                  <img 
                    src={img}
                    alt="Team member"
                    className="w-[80%]  h-full object-contain rounded-2xl hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated Contact */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="relative bg-gray-900 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to turn your
                <br />
                <span className="text-red-500">ideas into impact?</span>
              </h2>
              <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-6">
                Whether you're looking to publish a book, build a platform, or develop your brand, we're ready to work with you.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gray-900 rounded-full font-medium hover:scale-105 transition-all duration-300 group text-sm"
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