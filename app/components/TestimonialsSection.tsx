'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '../../lib/gsap';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, Creative Studio",
    testimony: "LOMEDIAHOUSE transformed our brand identity completely. Their strategic approach to content and social media took us from 5k to 50k followers in just 3 months. The team thinks like true partners, not just vendors.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO, Tech Innovators",
    testimony: "The publication they designed for our company launch was nothing short of spectacular. Every detail was considered, from typography to paper stock. Our investors were blown away.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director, Fashion House",
    testimony: "Working with LO Studio for our campaign shoot was a game-changer. The cinematic quality and storytelling approach elevated our brand to luxury status. Can't recommend them enough.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Marketing Head, Growth Co.",
    testimony: "Their social media management service is unparalleled. We saw a 300% increase in engagement and our content now feels cohesive and premium. Best investment we made.",
    rating: 5,
  },
  {
    name: "Amanda Lee",
    role: "Brand Director, Luxe Beauty",
    testimony: "The team's creativity and attention to detail is unmatched. They understood our vision perfectly and delivered beyond expectations. A true creative partner.",
    rating: 5,
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 0.5,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(3); // Desktop large
      } else if (window.innerWidth >= 1024) {
        setVisibleCount(2); // Desktop
      } else {
        setVisibleCount(1); // Mobile/Tablet
      }
    };
    
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextTestimonials = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStartIndex((prev) => {
      const newIndex = prev + visibleCount;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prevTestimonials = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStartIndex((prev) => {
      const newIndex = prev - visibleCount;
      return newIndex < 0 ? Math.max(0, testimonials.length - visibleCount) : newIndex;
    });
    setTimeout(() => setIsAnimating(false), 400);
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + visibleCount);

  return (
    <section 
      ref={sectionRef}
      className="bg-black text-white py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_50%)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[90%] mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-red-500 text-xs md:text-sm uppercase tracking-[3px] font-medium mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            What Our <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-zinc-400 mt-3 md:mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Real feedback from brands we've helped grow
          </p>
        </div>

        {/* Testimonial Grid - Multiple Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <div 
                key={startIndex + idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-red-500/30"
              >
                {/* Quote Icon */}
                <div className="text-3xl md:text-4xl text-red-500/40 mb-4">"</div>
                
                {/* Testimony Text */}
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-5 line-clamp-4">
                  {testimonial.testimony}
                </p>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                
                {/* Name and Role */}
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-zinc-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Only show if more than visible count */}
          {testimonials.length > visibleCount && (
            <>
              <button
                onClick={prevTestimonials}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
              
              <button
                onClick={nextTestimonials}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 md:mt-10">
          {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index * visibleCount)}
              className={`transition-all duration-300 ${
                Math.floor(startIndex / visibleCount) === index 
                  ? 'w-6 md:w-8 h-1.5 bg-red-500 rounded-full' 
                  : 'w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/60'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}