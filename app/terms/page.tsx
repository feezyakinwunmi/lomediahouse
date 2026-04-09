'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { FileText, Scale, Clock, CreditCard, AlertCircle, Mail, ArrowRight } from 'lucide-react';

export default function TermsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 0.5,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070')] bg-cover bg-center opacity-20" />
        
        <div ref={heroRef} className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <FileText className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] text-white tracking-wide">LEGAL</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Terms of Service
          </h1>
          
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          
          <div className="mt-4 text-xs text-gray-400">
            Last Updated: April 2026
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div ref={contentRef} className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-sm md:prose-base max-w-none">
            
            {/* Agreement */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-red-500" />
                Agreement to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using LO Media House's website and services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">1. Our Services</h2>
              <p className="text-gray-600 leading-relaxed">
                LO Media House provides media production, publishing, platform development, and creative services including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>LO Publication – Book writing, editing, production, and distribution</li>
                <li>LO Platform – Website and application development</li>
                <li>LO Media Studio – Creative content, branding, and visual identity</li>
              </ul>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">2. Client Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Provide accurate and complete information for your projects</li>
                <li>Maintain confidentiality of any login credentials provided</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Own or have proper license for any content you submit</li>
              </ul>
            </div>

            {/* Payments */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-red-500" />
                3. Payments & Fees
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Fees are quoted in NGN (Nigerian Naira) unless otherwise specified</li>
                <li>A deposit may be required before work commences</li>
                <li>Final payment is due upon project completion or as specified in your agreement</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are non-refundable unless otherwise stated</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">Client Content:</span> You retain ownership of content you provide. You grant us a license to use it solely for delivering our services.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <span className="font-semibold">Our Work:</span> Upon full payment, you receive ownership of the final deliverables. We retain the right to showcase completed work in our portfolio.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <span className="font-semibold">Our Tools:</span> Any proprietary software, templates, or methodologies remain our intellectual property.
              </p>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-500" />
                5. Project Timeline
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Timelines are estimated and depend on client feedback and revisions. Delays caused by client unavailability 
                or delayed feedback may extend the project timeline. We will communicate any changes promptly.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To the fullest extent permitted by law, LO Media House shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising from your use of our services. Our total liability 
                shall not exceed the amount you paid for the specific service in question.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">7. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                Either party may terminate a project agreement with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>You pay for all work completed up to termination</li>
                <li>We deliver completed work products</li>
                <li>Unused deposits may be refunded at our discretion</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">8. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved 
                in the courts of Lagos, Nigeria.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}