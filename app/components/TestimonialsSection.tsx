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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="bg-black text-white py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_50%)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto px-4">
        
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

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative px-4 md:px-8">
            
            {/* Testimonial Card */}
            <div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 transition-all duration-400"
            >
              {/* Quote Icon */}
              <div className="text-4xl md:text-5xl text-red-500/40 mb-4 md:mb-6">"</div>
              
              {/* Testimony Text */}
              <p className="text-base md:text-lg lg:text-xl text-zinc-200 leading-relaxed mb-6 md:mb-8">
                {currentTestimonial.testimony}
              </p>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-red-500 text-red-500" />
                ))}
              </div>
              
              {/* Name and Role */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white">{currentTestimonial.name}</h4>
                <p className="text-sm md:text-base text-zinc-400">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-6 md:w-8 h-1.5 bg-red-500 rounded-full' 
                    : 'w-1.5 h-1.5 bg-white/40 rounded-full hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-xs md:text-sm text-zinc-500">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}