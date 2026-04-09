'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { Shield, Eye, Lock, Database, Globe, Mail, ArrowRight } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070')] bg-cover bg-center opacity-20" />
        
        <div ref={heroRef} className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Shield className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] text-white tracking-wide">PRIVACY & LEGAL</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
            How LO Media House collects, uses, and protects your information.
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
            
            {/* Introduction */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-red-500" />
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                LO Media House ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-red-500" />
                1. Information We Collect
              </h2>
              <div className="space-y-3 text-gray-600">
                <p><span className="font-semibold text-gray-800">Personal Information:</span> Name, email address, phone number, company name, and any other information you voluntarily provide.</p>
                <p><span className="font-semibold text-gray-800">Usage Data:</span> IP address, browser type, pages visited, time spent on pages, and other diagnostic data.</p>
                <p><span className="font-semibold text-gray-800">Cookies & Tracking:</span> We use cookies to enhance your browsing experience. See our Cookie Policy for details.</p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-red-500" />
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>To provide, operate, and maintain our services</li>
                <li>To communicate with you about projects, updates, and marketing</li>
                <li>To process transactions and send related information</li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-red-500" />
                3. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, 
                we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Sharing */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">4. Data Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties with your explicit consent</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict data processing</li>
                <li>Data portability</li>
              </ul>
              <p className="text-gray-600 mt-3">
                To exercise these rights, contact us at <a href="mailto:privacy@lomediahouse.com" className="text-red-500 hover:underline">privacy@lomediahouse.com</a>
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">6. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for individuals under 13. We do not knowingly collect personal information from children.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">7. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy periodically. We will notify you of changes by posting the new policy on this page 
                and updating the "Last Updated" date.
              </p>
            </div>

           
          </div>
        </div>
      </section>
    </div>
  );
}