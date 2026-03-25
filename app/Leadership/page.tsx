'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { Mail, ArrowRight, Award, Calendar, MapPin,  } from 'lucide-react';

const leaders = [
  {
    name: "Layo Obidike",
    role: "Founder & Creative Director",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974",

    bio: "Former creative lead at top Nigerian advertising agencies. Oluwaseun built LOMEDIAHOUSE to bridge the gap between authentic African storytelling and global digital culture.",
    expertise: ["Creative Strategy", "Brand Direction", "Storytelling", "Cultural Insights"],
    social: { linkedin: "#", twitter: "#", email: "seun@lomediahouse.com" },
    color: "from-red-500 to-orange-500"
  },
  {
    name: "Kenny",
    role: "Head of Strategy",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974",

    bio: "Ex-strategy director at Lagos-based global agencies. Adaeze translates cultural insights into campaigns that resonate across Africa and beyond.",
    expertise: ["Brand Strategy", "Consumer Insights", "Growth Marketing", "Market Entry"],
    social: { linkedin: "#", twitter: "#", email: "adaeze@lomediahouse.com" },
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "John",
    role: "Executive Producer",
    bio: "Award-winning producer with 12+ years in film and commercial production across Nollywood and international markets. Chidi brings cinematic excellence to every project.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    expertise: ["Film Production", "Creative Direction", "Post-Production", "Nollywood Experience"],
    social: { linkedin: "#", twitter: "#", email: "chidi@lomediahouse.com" },
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Ifeanyi Nwosu",
    role: "Head of Design",
    bio: "Design leader who believes in the power of visual storytelling. Ifeanyi's work has been featured in major African and international publications.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    expertise: ["Visual Identity", "Typography", "Editorial Design", "UI/UX"],
    social: { linkedin: "#", twitter: "#", email: "ifeanyi@lomediahouse.com" },
    color: "from-emerald-500 to-teal-500"
  }
];

const advisors = [
  {
    name: "Dr. Amara Eze",
    role: "Cultural Strategist & Anthropologist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961"
  },
  {
    name: "Tunde Bakare",
    role: "Tech Innovation & Digital Transformation Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974"
  },
  {
    name: "Ngozi Okonkwo",
    role: "Sustainability & Impact Advisor",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974"
  }
];

export default function LeadershipPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement[]>([]);
  const advisorsRef = useRef<HTMLDivElement[]>([]);
  const valuesRef = useRef<HTMLDivElement[]>([]);

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

    // Leaders - staggered fade in
    leadersRef.current.forEach((leader, i) => {
      if (leader) {
        gsap.fromTo(leader,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leader,
              start: "top 85%",
              end: "top 70%",
              scrub: 0.5,
            }
          }
        );
      }
    });

    // Advisors - staggered fade in
    advisorsRef.current.forEach((advisor, i) => {
      if (advisor) {
        gsap.fromTo(advisor,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: advisor,
              start: "top 90%",
              end: "top 75%",
              scrub: 0.5,
            }
          }
        );
      }
    });

    // Values cards
    valuesRef.current.forEach((value, i) => {
      if (value) {
        gsap.fromTo(value,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: value,
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
    <div ref={sectionRef} className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative text-center md:text-left  py-25 min-h-[100vh] flex items-center px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center " />
        
        <div ref={heroRef} className="relative z-10 text-center md:text-left  max-w-4xl ">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-600 tracking-wide">THE TEAM</span>
          </div>
          
          <h1 className="text-center md:text-left text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
            The minds behind
            <br />
            <span className="text-red-500">the movement.</span>
          </h1>
          
          <p className="text-center md:text-left text-lg md:text-xl text-white leading-relaxed max-w-2xl ">
            A collective of creators, strategists, and dreamers united by one mission: 
            building African brands that matter on the global stage.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 tracking-wider">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-28 md:py-36">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm uppercase tracking-[4px] font-medium mb-4">LEADERSHIP</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet the
              <br />
              <span className="text-red-500">visionaries.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {leaders.map((leader, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) leadersRef.current[index] = el; }}
                  className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-2/5 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${leader.color} opacity-10 z-10`} />
                      <img 
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover aspect-square md:aspect-auto group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-3/5 p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                        <p className="text-red-500 text-sm tracking-wide font-medium">{leader.role}</p>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {leader.bio}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {leader.expertise.map((skill, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        {/* <a href={leader.social.linkedin} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110">
                          <Linkedin className="w-4 h-4 text-gray-700" />
                        </a>
                        <a href={leader.social.twitter} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110">
                          <Twitter className="w-4 h-4 text-gray-700" />
                        </a> */}
                        <a href={`mailto:${leader.social.email}`} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110">
                          <Mail className="w-4 h-4 text-gray-700" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-28 md:py-36 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm uppercase tracking-[4px] font-medium mb-4">ADVISORY BOARD</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Guided by
              <br />
              <span className="text-red-500">the best.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                ref={(el) => { if (el) advisorsRef.current[index] = el; }}
                className="group text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <img 
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover rounded-full border-4 border-gray-200 group-hover:border-red-500/50 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{advisor.name}</h3>
                <p className="text-gray-500 text-sm">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28 md:py-36">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm uppercase tracking-[4px] font-medium mb-4">WHAT WE BELIEVE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our leadership
              <br />
              <span className="text-red-500">principles.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Lead with Vision",
                desc: "We see what others don't and guide African brands toward global relevance."
              },
              {
                icon: Calendar,
                title: "Build for Legacy",
                desc: "Short-term wins matter. Long-term impact on African creative industries matters more."
              },
              {
                icon: MapPin,
                title: "Stay Curious",
                desc: "The best leaders never stop learning, exploring, and evolving with culture."
              }
            ].map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) valuesRef.current[index] = el; }}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="inline-flex p-3 rounded-xl bg-red-50 mb-6">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-28 md:py-36 bg-gray-900">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="relative bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Want to join
                <br />
                <span className="text-white/90">the movement?</span>
              </h2>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-10">
                We're always looking for exceptional talent. Let's create something amazing together.
              </p>
              <a 
                href="#careers" 
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-gray-900 rounded-full font-medium hover:scale-105 transition-all duration-300 group"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}