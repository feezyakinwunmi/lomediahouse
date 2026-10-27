'use client';
import { motion } from 'framer-motion';
import { Target, Globe, FileText, ShieldCheck, Store, Rocket, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function LaunchingYourFirstWebsite() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="p-6 md:p-10">
        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Having a good concept is great, but how will you present it to the world? How will customers find you? In this era of technology, missing that step could mean missing opportunities to grow, build trust, and reach a wider audience.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The good news? You don&apos;t need to hire a professional developer or spend heavily on setting up your online presence. With the right approach, launching your first website can be easier than you think.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 leading-relaxed">
            For a new business owner, it can be unclear where to begin. You may be asking yourself: <strong>Which platform should I use? How much will it cost? Do I need to learn to code? What pages should my website have?</strong>
          </p>
          <p className="text-gray-600 text-sm mt-3">
            Soon you will be hearing a flood of advice from online tutors. One will recommend a particular developer, another will insist you need advanced technical skills, and someone else will say you must invest in expensive tools from the start.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          The problem is rarely a lack of ideas or resources. Often, it is trying to do everything at once. Buying a domain, choosing a design, writing content, and understanding search engine optimization can each feel like a separate mountain to climb.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          However, launching your first website is not about being perfect. It is about knowing what you want to achieve, making informed decisions, and building a useful online space that elevates your business.
        </p>

        {/* 1. Purpose */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Target className="text-red-900" size={28} />
            1. Define Your Website&apos;s Purpose Before Choosing a Platform
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before you pick a developer or buy a domain, decide what the site is for. A photographer needs galleries and a contact form, a small shop needs product pages and payments, and a blogger needs readable posts and an email signup.
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-black mb-3">Write down:</h3>
            <div className="space-y-2">
              {[
                "Your main goal",
                "Your target audience",
                "The one thing a stranger should do when they land on your website: contact you, make a purchase, book a service, or read your latest post",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle size={16} className="text-red-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            That way, you avoid spending on unnecessary features that won&apos;t serve you.
          </p>
        </div>

        {/* 2. Domain and Platform */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Globe className="text-red-900" size={28} />
            2. Choose the Right Domain Name and Website Platform
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Choose a domain that is easy to remember and spell, and avoid long names, unusual spellings, numbers, and hyphens. Check that it&apos;s available and that it will still suit your business as it grows.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Then choose a platform that fits your budget and skill level. Wix and Squarespace let beginners build visually without code, while WordPress offers more flexibility for content-heavy sites but takes more setup and upkeep, depending on your hosting.
          </p>
          <div className="border-l-4 border-red-900 bg-gray-50 p-4 rounded-r-xl">
            <p className="text-gray-700">
              The cheapest option isn&apos;t always the right one. Compare hosting costs, features, mobile design, security, support, and room to expand, and start with what you need today.
            </p>
          </div>
        </div>

        {/* 3. Pages and Content */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <FileText className="text-red-900" size={28} />
            3. Build Important Pages and Create Useful Content
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A good-looking site won&apos;t help if visitors can&apos;t tell what you offer or find what they need. Most small businesses and personal brands can start with a few pages:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { title: "Homepage", desc: "Presents you and points to the next step." },
              { title: "About", desc: "Tells your story." },
              { title: "Products or Services", desc: "Explains what you offer and how to get started." },
              { title: "Contact", desc: "Gives a reliable way to reach you." },
              { title: "Blog", desc: "If it suits your audience." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle size={18} className="text-red-900 flex-shrink-0 mt-1" />
                <p className="text-gray-700"><strong className="text-black">{item.title}:</strong> {item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Write for your visitors rather than praising yourself, explaining how you solve their problems and answering their questions. Use clear headings, short paragraphs, readable fonts, and good images, and test the site on a phone, since many people will visit that way.
          </p>
        </div>

        {/* 4. Test, Launch, Improve */}
        <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <ShieldCheck className="text-amber-300" size={28} />
            4. Test, Launch, and Improve Your Website
          </h2>
          <p className="text-white/80 mb-6">
            Don&apos;t rush your first version live; review every page first.
          </p>
          <div className="space-y-4">
            {[
              { title: "Test everything", desc: "Check your links, buttons, contact forms, and any payment process. Proofread spelling, check images, and view the site on different screen sizes." },
              { title: "Cover the security basics", desc: "Use HTTPS, keep your software updated, choose strong passwords, and provide clear privacy information if you collect personal data." },
              { title: "Share it", desc: "After launch, promote the site through social media, newsletters, business directories, and relevant online communities." },
              { title: "Measure and improve", desc: "Expect traffic to build slowly. Use analytics to see which pages people visit, how they found you, and what needs improving." },
            ].map((item) => (
              <div key={item.title} className="p-4 bg-white/10 rounded-xl">
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. In Practice */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Store className="text-red-900" size={28} />
            5. What Does This Look Like in Practice?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Imagine a small bakery launching its first website. Instead of paying for a huge online shop right away, the owner begins with a simple homepage, a menu, an About page, customer testimonials, and a contact section with location and ordering information.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The owner shares the website on social media, adds helpful details about available products, and updates the menu regularly. Later, as demand grows, the bakery can introduce online ordering and additional features.
          </p>
          <div className="bg-amber-50 rounded-xl p-6 text-center">
            <p className="text-gray-800 italic">
              &quot;Start with a visible purpose, provide reliable value, and improve your website as your needs develop.&quot;
            </p>
          </div>
        </div>

        {/* 6. Final Thoughts */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Rocket className="text-red-900" size={28} />
            6. Your First Website Starts with One Decision
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You do not need to know everything about website development before getting started. What matters is taking the first step, learning as you go, and staying focused on the people you want to serve.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Your first website does not have to be perfect. It needs to be useful, accessible, and aligned with your goals.
          </p>
        </div>

        {/* Pillar page link */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-10 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">Our Services</p>
            <p className="font-bold text-black">Websites, Apps, and Tech Platforms for Brands and Ministries</p>
            <p className="text-gray-600 text-sm">See how LO Media House builds websites, mobile apps, and custom platforms.</p>
          </div>
          <Link href="/websites-apps-tech-platforms" className="inline-block bg-red-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition whitespace-nowrap">
            Explore Our Services →
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
          <h2 className="text-2xl font-bold mb-4">Ready to Launch Your First Website?</h2>
          <p className="mb-6">
            Whether you&apos;re ready to launch or still preparing to build, your journey toward a stronger online presence can begin today. LO Media House is here to walk with you every step of the way.
          </p>
          <Link href="/ContactUs" className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Contact LO Media House →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
