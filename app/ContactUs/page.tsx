'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
} from 'lucide-react';

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const infoContainerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    if (formContainerRef.current) {
      gsap.fromTo(formContainerRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formContainerRef.current,
            start: "top 85%",
            end: "top 70%",
            scrub: 0.5,
          }
        }
      );
    }

    if (infoContainerRef.current) {
      gsap.fromTo(infoContainerRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoContainerRef.current,
            start: "top 85%",
            end: "top 70%",
            scrub: 0.5,
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div ref={sectionRef} className="bg-white min-h-screen ">
      
      {/* Hero Section */}
      <section className="relative  py-16 md:py-40 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-5">
            <Mail className="w-3 h-3 text-red-500" />
            <span className="text-[10px] text-gray-600 tracking-wide">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Let's create
            <br />
            <span className="text-red-500">something amazing.</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello — 
            we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Form Container */}
            <div ref={formContainerRef}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Send us a message</h2>
              <p className="text-gray-600 text-sm mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text"
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email"
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Enter your Number"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Subject</label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
                    <option>General Inquiry</option>
                    <option>Project Collaboration</option>
                    <option>Media Partnership</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your project or idea..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-2.5 bg-gray-900 text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Info Container */}
            <div ref={infoContainerRef}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 text-sm mb-6">
                Prefer to reach us directly? Here are all the ways you can connect with the team.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Email Us</h3>
                    <a href="mailto:layoobidikepublications@gmail.com" className="text-gray-600 hover:text-red-500 transition-colors text-xs block">
                      layoobidikepublications@gmail.com

                    </a>
                  
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Call Us</h3>
                    <a href="tel:+5142192987" className="text-gray-600 hover:text-red-500 transition-colors text-xs block">
                      +1 514 219 2987
                    </a>
                    <span className="text-[10px] text-gray-400">Mon-Fri, 9am - 6pm EST</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Visit Us</h3>
                    <p className="text-gray-600 text-xs">
                     1551 Lycee Place, Ottawa, K1G4B5<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Map Section */}
      {/* <section className="py-16">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
          >
            <div className="h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.678912345678!2d-75.660123456789!3d45.400123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b3c8b5e5e5%3A0x123456789abcdef!2s1551%20Lycee%20Pl%2C%20Ottawa%2C%20ON%20K1G4B5!5e0!3m2!1sen!2sca!4v1641234567890!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-5 text-center border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                1551 Lycee Place, Ottawa, ON K1G4B5, Canada
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}