'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Building2, Calendar, CalendarIcon, CheckCircle, Eye, Globe, Globe2, MapPin, MessageCircle, Share2, Sparkles, Target, TrendingUp, Users, Megaphone, Mail, Search, Mic, Star, Laptop, PenTool, Video, Radio, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function TopMarketingServicesOttawaAuthors() {
  return (
    <article className="max-w-3xl mx-auto space-y-10">
     <main className="min-h-screen bg-gray-50 mt-20 md:mt-0 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-900 mb-8 transition group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
          Back to all articles
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Hero Image */}
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop"
              alt="Top marketing services for Ottawa authors"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Megaphone size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Book Marketing • Ottawa, Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Top Marketing Services for Ottawa Authors: A Complete Guide
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b flex-wrap">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2026</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 14 min read</span>
              <span className="flex items-center gap-2"><Globe size={16} /> Ottawa, Canada</span>
              <span className="flex items-center gap-2"><Share2 size={16} /> Book Marketing</span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Writing a book is only the beginning. For authors in Ottawa, getting a book published is one challenge. Getting it discovered by the right readers is another.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
              <p className="text-gray-700 leading-relaxed">
                Whether you are publishing a novel, memoir, children's book, business book, devotional, poetry collection, academic title, or nonfiction guide, effective marketing can help you build visibility, establish your author brand, and connect your book with the audiences most likely to appreciate it.
              </p>
              <p className="text-gray-600 text-sm mt-3">
                The top marketing services for Ottawa authors combine traditional book promotion with digital marketing, SEO, social media, publicity, email marketing, author branding, and local community engagement.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              A strong marketing strategy does not simply ask, "How can I sell more books?" It asks: <strong>Who is this book for, where do those readers spend their time, and what will make them care about the book?</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              That distinction is important because book marketing is not a one-size-fits-all exercise. A children's author may need school outreach and parent-focused marketing, while a business author may benefit more from LinkedIn content, speaking opportunities, podcasts, and professional networking.
            </p>

            {/* What Is Book Marketing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                What Is Book Marketing?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Book marketing is the process of creating awareness around a book and its author, reaching potential readers, and encouraging them to take an action such as purchasing the book, joining an author's mailing list, attending an event, requesting a review, or following the author.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <h3 className="font-semibold text-black mb-3">Book marketing can include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Book launch campaigns",
                    "Social media marketing",
                    "Search engine optimization (SEO)",
                    "Author website development",
                    "Content marketing",
                    "Email marketing",
                    "Book publicity and media relations",
                    "Podcast and interview outreach",
                    "Influencer and reviewer outreach",
                    "Paid advertising",
                    "Local Ottawa promotion",
                    "Bookstore and library outreach",
                    "Speaking engagements",
                    "Author branding",
                    "Reader community building",
                    "Metadata and book listing optimization",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-red-900" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Ottawa Authors Need a Strategic Marketing Plan */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MapPin className="text-red-900" size={28} />
                Why Ottawa Authors Need a Strategic Marketing Plan
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ottawa provides authors with an interesting marketing environment because it is both a major Canadian city and a community with strong connections to government, education, business, culture, technology, and bilingual Canadian life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                That means an Ottawa author may have opportunities to market locally while simultaneously reaching readers across Canada and internationally. Local relevance can be particularly useful when a book has a connection to:
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Ottawa",
                  "Ontario",
                  "Canadian history",
                  "Government and public policy",
                  "Education",
                  "Business and entrepreneurship",
                  "Local communities",
                  "Canadian culture",
                  "Immigration",
                  "Family and parenting",
                  "Faith communities",
                  "Indigenous and multicultural experiences",
                ].map((item) => (
                  <span key={item} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-gray-100">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                However, Ottawa marketing should not mean limiting a book to Ottawa. The goal is usually to use local relevance as one layer of the marketing strategy while building a broader audience through digital channels.
              </p>
            </div>

            {/* The Top Marketing Services */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="text-amber-300" size={28} />
                The Top Marketing Services for Ottawa Authors
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Target, title: "Book Marketing Strategy", desc: "Establish your target audience, positioning, channels, timeline, and measurement criteria before spending money." },
                  { icon: CalendarIcon, title: "Book Launch Marketing", desc: "Pre-launch announcements, cover reveals, advance reader copies, review requests, and launch events." },
                  { icon: Star, title: "Author Branding", desc: "Professional biography, visual identity, website, social presence, and consistent messaging." },
                  { icon: Laptop, title: "Author Website Design and SEO", desc: "A central hub you control, optimized to help readers discover your work." },
                  { icon: MapPin, title: "Local SEO for Ottawa Authors", desc: "Location-focused pages and community listings that make your local connection genuine." },
                  { icon: Share2, title: "Social Media Marketing", desc: "Choose the platforms where your actual readers spend their time." },
                  { icon: PenTool, title: "Content Marketing", desc: "Promote your expertise and ideas without constantly saying 'Buy my book.'" },
                  { icon: Mail, title: "Email Marketing", desc: "Build a direct relationship with readers that doesn't depend on algorithms." },
                  { icon: Radio, title: "Book Publicity and Media Relations", desc: "Newspapers, radio, television, podcasts, blogs, and expert commentary." },
                  { icon: Mic, title: "Podcast Marketing", desc: "Pitch topics and expertise rather than asking hosts to promote your book." },
                  { icon: Users, title: "Influencer and Reviewer Outreach", desc: "Relevance matters more than volume when building review relationships." },
                  { icon: Building2, title: "Bookstore and Library Marketing", desc: "Author talks, readings, signings, workshops, and community events." },
                  { icon: DollarSign, title: "Book Advertising", desc: "Google, Meta, Amazon, and retargeting — but only after your foundation is strong." },
                  { icon: Search, title: "Book Metadata Optimization", desc: "Title, description, categories, and keywords that reflect how readers search." },
                  { icon: Eye, title: "Book Reviews and Social Proof", desc: "Genuine reviews from relevant readers build trust with new audiences." },
                  { icon: Video, title: "Speaking Engagement Marketing", desc: "Use the book as an extension of your professional expertise." },
                  { icon: Globe2, title: "Book Event Marketing in Ottawa", desc: "Transform a book from a product into an experience." },
                ].map((strategy, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white/10 rounded-xl">
                    <strategy.icon className="text-amber-300 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-white">{strategy.title}</h3>
                      <p className="text-white/80 text-sm">{strategy.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Choose */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <CheckCircle className="text-red-900" size={28} />
                How to Choose the Right Marketing Services for Your Book
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Not every author needs every marketing service. Your ideal marketing mix depends on five major factors:
              </p>
              <div className="space-y-4">
                {[
                  { title: "Your genre", desc: "A romance novel and a business book should not necessarily use the same campaign." },
                  { title: "Your audience", desc: "Ask where your readers actually spend their time." },
                  { title: "Your goals", desc: "Sell books, build a platform, generate speaking opportunities, or establish expertise?" },
                  { title: "Your budget", desc: "A marketing strategy should fit the author's available resources." },
                  { title: "Your timeline", desc: "A book launching next week requires a different approach from one scheduled six months out." },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-red-900 bg-gray-50 p-4 rounded-r-xl">
                    <h3 className="font-semibold text-black">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Ready to Market Your Book?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are an Ottawa author preparing to publish or promote a book, the first step is to identify the marketing activities that actually match your audience and goals.
              </p>
              <div className="bg-amber-50 rounded-xl p-6 text-center">
                <p className="text-gray-800 italic">
                  "A strong marketing strategy does not simply ask, 'How can I sell more books?' It asks: Who is this book for, where do those readers spend their time, and what will make them care about the book?"
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4">Let LO Media House Handle the Rest</h2>
              <p className="mb-6">Get expert guidance on book marketing strategy, author branding, and promotional services tailored for Ottawa authors.</p>
              <Link href="/contact" className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Start Marketing Your Book Today →
              </Link>
            </div>

            {/* Related Articles */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-black text-center mb-6">You Might Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/author-branding-book-marketing-ottawa" className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=400&fit=crop" 
                      alt="Author branding and book marketing in Ottawa" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      Author Branding & Book Marketing in Ottawa
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">How local authors build visibility and grow their readership.</p>
                  </div>
                </Link>
                <Link href="/blog/book-marketing-web-design-ottawa" className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=600&h=400&fit=crop" 
                      alt="Book marketing and web design for Ottawa authors" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      The Ultimate Guide to Book Marketing & Web Design for Ottawa Authors
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">A comprehensive guide to marketing and web design for Ottawa authors.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
    </article>
  );
}