'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { Mail, ArrowRight, Award, Briefcase, Users, TrendingUp, Phone, Globe } from 'lucide-react';

// Custom social icons as simple SVG components (Lucide doesn't have these)
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9z" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M12 14c-1 0-2-.5-2.5-1" />
  </svg>
);

const leaders = [
  {
    name: "Layo Obidike",
    role: "Chief Executive Officer",
    image: "/layo.jpg",
    bio: "Visionary entrepreneur and revolutionary dedicated to empowering individuals to achieve their full potential. With a passion for innovation and commitment to excellence, Layo has established herself as a leader in the publishing industry.",
    expertise: ["Leadership", "Innovation Strategy", "Business Development", "Empowerment"],
    social: { 
      linkedin: "https://www.linkedin.com/in/layoobidike/", 
      facebook: "https://www.facebook.com/layoobidike", 
      instagram: "https://www.instagram.com/layoobidike",
      email: "layo@lomediahouse.com",
      phone: "tel:+5142192987",
      website: "https://layoobidike.com/"

    },
    color: "from-red-500 to-orange-500"
  },
  {
    name: "John Olumutimi",
    role: "Chief Operating Officer",
    image: "/john.jpg",
    bio: "Leads operational execution, service delivery, and client experience across the organisation. Ensures vision translates into efficient systems, consistent processes, and high-quality outcomes for authors and partners.",
    expertise: ["Operations", "Service Delivery", "Client Experience", "Process Optimization"],
    social: { 
      linkedin: "", 
      email: "",
      phone: ""
    },
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Toyin Oyinloye",
    role: "Chief Technology Officer",
    image: "/kenny.jpg",
    bio: "Leads development and execution of technology strategy to support innovative publishing platforms, digital workflows, and scalable system solutions.",
    expertise: ["Tech Strategy", "Digital Workflows", "Platform Development", "System Scalability"],
    social: { 
      linkedin: "https://www.linkedin.com/in/toyin-kennie-oyinloye/?originalSubdomain=ng", 
    },
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Julius Edicha",
    role: "Technical Expert",
    image: "/julius.jpg",
    bio: "Combines deep technical expertise with creative insights to enhance user experience and interface design. Develops user-facing features ensuring intuitive, visually appealing, and responsive platforms.",
    expertise: ["UI/UX Design", "Frontend Development", "Creative Tech", "Responsive Design"],
    social: { 
    
    },
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Omolara Adeola",
    role: "Senior Editor",
    image: "/omolara.jpg",
    bio: "Senior Editor shaping and refining editorial content. With a deep passion for storytelling and a keen eye for detail, Omolara ensures all published material adheres to the highest standards of quality and coherence.",
    expertise: ["Editorial Direction", "Storytelling", "Quality Control", "Content Strategy"],
    social: { 
     
    },
    color: "from-rose-500 to-red-500"
  },
  {
    name: "Abiodun Jayeola",
    role: "Team Lead, Marketing & Communications",
    image: "/abiodun.jpg",
    bio: "Leads marketing and communications efforts, driving strategic initiatives to enhance visibility and impact across all channels.",
    expertise: ["Marketing Strategy", "Communications", "Brand Visibility", "Campaign Management"],
    social: { 
      
    },
    color: "from-indigo-500 to-blue-500"
  }
];

// Helper function to render social icons
const SocialLinks = ({ social }: { social: any }) => {
  const socialItems = [
    { key: 'linkedin', icon: LinkedinIcon, label: 'LinkedIn' },
    { key: 'facebook', icon: FacebookIcon, label: 'Facebook' },
    { key: 'instagram', icon: InstagramIcon, label: 'Instagram' },
    { key: 'twitter', icon: TwitterIcon, label: 'Twitter' },
    { key: 'whatsapp', icon: WhatsappIcon, label: 'WhatsApp' },
    { key: 'website', icon: Globe, label: 'Website' },
    { key: 'phone', icon: Phone, label: 'Phone' },
    { key: 'email', icon: Mail, label: 'Email' }
  ];

  const getSocialUrl = (key: string, value: string) => {
    if (key === 'email') return `mailto:${value}`;
    if (key === 'phone') return `tel:${value}`;
    if (key === 'whatsapp') return `https://wa.me/${value.replace(/[^0-9]/g, '')}`;
    return value;
  };

  return (
    <div className="flex flex-wrap gap-2">
      {socialItems.map(({ key, icon: Icon, label }) => {
        const value = social[key];
        if (!value) return null;
        
        return (
          <a
            key={key}
            href={getSocialUrl(key, value)}
            target={key !== 'email' && key !== 'phone' ? '_blank' : undefined}
            rel={key !== 'email' && key !== 'phone' ? 'noopener noreferrer' : undefined}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            title={label}
          >
            <Icon className="w-3.5 h-3.5 text-gray-700 group-hover:text-red-500 transition-colors" />
          </a>
        );
      })}
    </div>
  );
};

export default function LeadershipPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement[]>([]);
  const valuesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

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

    leadersRef.current.forEach((leader, i) => {
      if (leader) {
        gsap.fromTo(leader,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.08,
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
      <section className="pt-20 relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-30" />
        
        <div ref={heroRef} className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-white tracking-wide">LEADERSHIP</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
            Professionals with
            <br />
            <span className="text-red-500">a collective mission.</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
            LO Media House is led by a team of professionals with expertise in media, technology, branding, and communications. 
            What sets us apart is not just our skill, but our collective commitment to serve — building lasting partnerships 
            with every client through thoughtful, high-quality service.
          </p>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-400 tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">OUR TEAM</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Meet the
              <br />
              <span className="text-red-500">leadership.</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4">
              Each member of our leadership team is dedicated not only to the growth of the organisation, 
              but also to the success and lasting impact of the clients and communities we work with.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {leaders.map((leader, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) leadersRef.current[index] = el; }}
                  className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex flex-col h-70 md:flex-row">
                    <div className="md:w-2/5 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${leader.color} opacity-10 z-10`} />
                      <img 
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover aspect-square md:aspect-auto group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="md:w-3/5 p-5 md:p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                        <p className="text-red-500 text-xs tracking-wide font-medium">{leader.role}</p>
                      </div>
                      
                      <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-4">
                        {leader.bio}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {leader.expertise.map((skill, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <SocialLinks social={leader.social} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-red-500 text-xs uppercase tracking-[3px] font-medium mb-3">WHAT SETS US APART</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our leadership
              <br />
              <span className="text-red-500">principles.</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4">
              Every project is executed with care, precision, and a focus on meaningful outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: Briefcase,
                title: "Expertise & Precision",
                desc: "Professionals with deep expertise in media, technology, branding, and communications delivering thoughtful execution."
              },
              {
                icon: Users,
                title: "Commitment to Serve",
                desc: "Building lasting partnerships with every client through genuine care and high-quality service."
              },
              {
                icon: TrendingUp,
                title: "Impact-Driven",
                desc: "Focused on the success and lasting impact of the clients and communities we work with."
              }
            ].map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  ref={(el) => { if (el) valuesRef.current[index] = el; }}
                  className="group relative bg-white border border-gray-200 rounded-xl p-5 md:p-6 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="inline-flex p-2 rounded-lg bg-red-50 mb-4">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 md:p-10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to work
                <br />
                <span className="text-white/90">with us?</span>
              </h2>
              <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto mb-6">
                We're always open to collaborations, partnerships, and new projects. Let's create something amazing together.
              </p>
              <a 
                href="/ContactUs" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gray-900 rounded-full font-medium text-sm hover:scale-105 transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}