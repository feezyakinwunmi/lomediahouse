import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from '@/app/components/ScrollReveal';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <ScrollReveal />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-5">
            <Mail className="w-3 h-3 text-red-500" />
            <span className="text-[10px] text-gray-600 tracking-wide">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Let's create
            <br />
            <span className="text-red-500">something amazing</span>
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
            <div data-reveal="up">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Send us a message</h2>
              <p className="text-gray-600 text-sm mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <ContactForm />
            </div>
            
            {/* Contact Info Container */}
            <div data-reveal="up" data-reveal-delay={0.1}>
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
                    <a href="mailto:layo@lomediahouse.com" className="text-gray-600 hover:text-red-500 transition-colors text-xs block">
                      layo@lomediahouse.com

                    </a>
                  
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Call Us</h3>
                    <a href="tel:+19059224471" className="text-gray-600 hover:text-red-500 transition-colors text-xs block">
                      +1 (905) 922-4471
                    </a>
                    <span className="text-[10px] text-gray-400">Mon–Fri, 9 a.m.–6 p.m. ET</span>
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