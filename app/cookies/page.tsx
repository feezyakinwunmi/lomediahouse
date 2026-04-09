'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@/lib/gsap';
import { Cookie, Settings, Globe, Shield, Mail, ArrowRight, X, Check } from 'lucide-react';

export default function CookiePolicyPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

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

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert('Cookie preferences saved!');
  };

  return (
    <div ref={sectionRef} className="bg-white min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070')] bg-cover bg-center opacity-20" />
        
        <div ref={heroRef} className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Cookie className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] text-white tracking-wide">COOKIE POLICY</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Cookie Policy
          </h1>
          
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
            How we use cookies to enhance your experience on our website.
          </p>
          
          <div className="mt-4 text-xs text-gray-400">
            Last Updated: April 2026
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div ref={contentRef} className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* What are Cookies */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Cookie className="w-5 h-5 text-red-500" />
              What Are Cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files stored on your device when you visit websites. They help us remember your 
              preferences, understand how you use our site, and improve your browsing experience.
            </p>
          </div>

          {/* Types of Cookies */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-red-500" />
              Types of Cookies We Use
            </h2>
            
            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                    <p className="text-xs text-gray-500 mt-1">Always active</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Essential for website functionality. These cannot be disabled as they enable core features like 
                  page navigation and secure access.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                    <p className="text-xs text-gray-500">Remember your preferences</p>
                  </div>
                  <button 
                    onClick={() => handlePreferenceChange('functional')}
                    className={`relative w-10 h-5 rounded-full transition-colors ${preferences.functional ? 'bg-red-500' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${preferences.functional ? 'translate-x-5' : 'translate-x-0.5'}`} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Remember your settings and preferences, like language and region, for a personalized experience.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                    <p className="text-xs text-gray-500">Help us improve</p>
                  </div>
                  <button 
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`relative w-10 h-5 rounded-full transition-colors ${preferences.analytics ? 'bg-red-500' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${preferences.analytics ? 'translate-x-5' : 'translate-x-0.5'}`} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Collect anonymous data about how visitors use our site, helping us improve performance and user experience.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                    <p className="text-xs text-gray-500">Personalized content</p>
                  </div>
                  <button 
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`relative w-10 h-5 rounded-full transition-colors ${preferences.marketing ? 'bg-red-500' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${preferences.marketing ? 'translate-x-5' : 'translate-x-0.5'}`} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Track browsing habits to deliver relevant ads and content based on your interests.
                </p>
              </div>
            </div>

            <button 
              onClick={savePreferences}
              className="mt-6 px-5 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Save Preferences
            </button>
          </div>

          {/* How to Manage Cookies */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              How to Manage Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Most browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>View and delete cookies stored on your device</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from specific websites</li>
              <li>Clear all cookies when you close your browser</li>
            </ul>
            <p className="text-gray-600 mt-3">
              <span className="font-semibold">Note:</span> Disabling certain cookies may affect website functionality.
            </p>
          </div>

          {/* Third-Party Cookies */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-red-500" />
              Third-Party Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may use third-party services that set their own cookies, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li><span className="font-medium">Analytics:</span> Google Analytics for traffic insights</li>
              <li><span className="font-medium">Social Media:</span> Facebook, Instagram, LinkedIn for sharing features</li>
              <li><span className="font-medium">Embedded Content:</span> YouTube, Vimeo for video content</li>
            </ul>
          </div>

          {/* Updates */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Policy Updates</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}