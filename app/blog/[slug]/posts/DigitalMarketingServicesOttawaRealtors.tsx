'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Building2, Calendar, CalendarIcon, CheckCircle, Eye, Globe, Globe2, MapPin, MessageCircle, Share2, Sparkles, Target, TrendingUp, Users, Laptop, Search, Mail, PenTool, Star, DollarSign, Video, Home, Phone } from 'lucide-react';
import Link from 'next/link';

export default function DigitalMarketingServicesOttawaRealtors() {
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
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=500&fit=crop"
              alt="Digital marketing services for Ottawa realtors"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Home size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Digital Marketing • Ottawa, Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Digital Marketing Services for Ottawa Realtors: Build a Stronger Online Presence
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b flex-wrap">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2026</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 12 min read</span>
              <span className="flex items-center gap-2"><Globe size={16} /> Ottawa, Canada</span>
              <span className="flex items-center gap-2"><Share2 size={16} /> Digital Marketing</span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ottawa is a diverse real estate market, with buyers and sellers searching across very different communities. Someone looking for a home in Kanata may have completely different priorities from someone looking for a condo in Downtown Ottawa, a family home in Barrhaven, or a property in Orleans.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
              <p className="text-gray-700 leading-relaxed">
                For realtors, this means digital marketing cannot simply be about posting a listing and hoping the right person sees it. Potential clients are searching online before they reach out. They may search for an Ottawa realtor, look for an agent in their neighbourhood, compare property listings, check Google reviews, visit an agent's website, or browse Instagram to see how active and knowledgeable they are.
              </p>
              <p className="text-gray-600 text-sm mt-3">
                A strong digital marketing strategy helps ensure that your real estate business is visible during those moments.
              </p>
            </div>

            {/* Why Ottawa Realtors Need Local Digital Marketing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MapPin className="text-red-900" size={28} />
                Why Ottawa Realtors Need Local Digital Marketing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ottawa's real estate market is made up of many different neighbourhoods and communities, each with its own audience. A realtor serving Kanata, Stittsville, Barrhaven, Nepean, Orleans, Gloucester, Westboro, The Glebe, Centretown, or Downtown Ottawa should be able to communicate what makes those areas relevant to their ideal clients.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Instead of creating generic real estate content, your marketing can focus on the searches, questions, and interests of people actually looking at properties in Ottawa. For example, content could focus on:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Buying a home in Barrhaven",
                    "Selling a property in Kanata",
                    "Living in Westboro",
                    "Condos in Downtown Ottawa",
                    "First-time home buying in Ottawa",
                    "Family-friendly neighbourhoods in Orleans",
                    "Moving to Ottawa from another city",
                    "Ottawa real estate market updates",
                    "Home selling tips for Ottawa homeowners",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-red-900" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Improve Your Visibility */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Search className="text-red-900" size={28} />
                Improve Your Visibility for Ottawa Real Estate Searches
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When someone searches for an "Ottawa realtor," "real estate agent in Ottawa," or "realtor in Kanata," you want your business to have a chance of appearing in front of them. Local SEO can help improve your visibility for these types of searches.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A strong local SEO strategy may include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                {[
                  "Optimising your Ottawa real estate service pages",
                  "Creating neighbourhood-specific pages",
                  "Publishing useful local real estate articles",
                  "Improving your Google Business Profile",
                  "Targeting relevant Ottawa search terms",
                  "Building consistent local business information",
                  "Creating content around common Ottawa buyer and seller questions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-red-900" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Around Ottawa Neighbourhoods */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-amber-300" size={28} />
                Create Content Around Ottawa Neighbourhoods
              </h2>
              <p className="text-white/90 mb-4">
                Neighbourhood content can be one of the most useful ways for a realtor to build local authority. People moving to Ottawa often want to know more than the price of a property. They want to understand the area before making a decision.
              </p>
              <p className="text-white/90 mb-4">
                A neighbourhood guide could discuss the local lifestyle, property types, nearby amenities, commuting considerations, schools, parks, shopping areas, and who the neighbourhood may be suitable for.
              </p>
              <div className="bg-white/10 rounded-xl p-6 mt-4">
                <p className="text-white/70 text-sm mb-2">Instead of simply posting "New Listing in Ottawa," you could create content around:</p>
                <p className="text-amber-300 font-semibold mb-2">"What Buyers Should Know Before Moving to Kanata"</p>
                <p className="text-white/70 text-sm mb-2">or</p>
                <p className="text-amber-300 font-semibold">"Is Barrhaven a Good Place for Families? What Ottawa Buyers Should Consider"</p>
              </div>
            </div>

            {/* Turn Listings into Content */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Video className="text-red-900" size={28} />
                Turn Ottawa Property Listings into Better Content
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your listings already give you plenty of material for digital marketing. Instead of using one set of listing photos and posting the property once, you can turn each property into multiple pieces of content.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <h3 className="font-semibold text-black mb-3">A home in Stittsville, for example, could become:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "A property walkthrough video",
                    "An Instagram carousel",
                    "A short-form video highlighting key features",
                    "A neighbourhood-focused post",
                    "A blog about the property and surrounding area",
                    "An email to your database",
                    "A Facebook advertisement",
                    "A 'new-to-market' social post",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-red-900" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Share2 className="text-red-900" size={28} />
                Use Social Media to Become More Recognizable
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                People want to work with realtors they feel they know and trust. Social media gives Ottawa realtors an opportunity to show more than properties. It allows potential clients to see your personality, knowledge, local experience, and approach to real estate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your content can include Ottawa market updates, neighbourhood videos, buyer tips, seller advice, new listings, client experiences, behind-the-scenes moments, and answers to questions you hear regularly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Someone may not be ready to buy a home today, but if they consistently see useful content from you, they may remember your name when they are ready.
              </p>
            </div>

            {/* Paid Advertising */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <DollarSign className="text-red-900" size={28} />
                Reach Ottawa Buyers and Sellers with Paid Advertising
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Paid digital advertising can also help realtors reach specific audiences across Ottawa. Instead of promoting every message to everyone, campaigns can be built around specific goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                {[
                  "Promote a new listing",
                  "Generate seller leads",
                  "Reach first-time buyers",
                  "Promote a home valuation service",
                  "Target people interested in specific Ottawa communities",
                  "Retarget website visitors",
                  "Promote an open house",
                  "Build awareness for your real estate brand",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-red-900" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                A beautifully designed advertisement will not accomplish much if it is being shown to the wrong people or sends them to a weak landing page.
              </p>
            </div>

            {/* Build Trust with Content */}
            <div className="bg-gray-900 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Star className="text-amber-300" size={28} />
                Build Trust with Useful Ottawa Real Estate Content
              </h2>
              <p className="text-white/90 mb-4">
                Buying or selling a home is a major decision. People want to know that the realtor they choose understands the market and can guide them properly. Content marketing gives you an opportunity to demonstrate that knowledge before the first consultation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {[
                  "What should Ottawa first-time buyers know before purchasing?",
                  "When is the right time to sell a home in Ottawa?",
                  "What affects home prices in different Ottawa neighbourhoods?",
                  "What should sellers do before listing their home?",
                  "What are buyers looking for in Ottawa right now?",
                  "How should newcomers prepare to buy a home in Ottawa?",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={12} className="text-amber-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Marketing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Mail className="text-red-900" size={28} />
                Stay Connected Through Email Marketing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Not every person who visits your website or views your listing is ready to make a decision immediately. Someone may be planning to buy in six months. A homeowner may be considering selling next year. Another person may simply be monitoring the Ottawa market.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Email marketing allows you to stay connected with these potential clients. You can share new listings, Ottawa market updates, neighbourhood insights, home-buying advice, selling tips, and other useful information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Instead of allowing a potential lead to disappear after one website visit or social media interaction, you have an opportunity to continue the relationship.
              </p>
            </div>

            {/* Services Built Around Your Business */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Building2 className="text-red-900" size={28} />
                Digital Marketing Services Built Around Your Ottawa Real Estate Business
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every realtor has a different target market. One agent may focus on luxury homes in Westboro and Rockcliffe Park. Another may specialise in first-time buyers in Barrhaven and Orleans. Someone else may work mainly with investors, downsizers, or families relocating to Ottawa.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your digital marketing strategy should reflect that. A good strategy connects your website, SEO, social media, content, advertising, and email marketing around the type of clients you actually want to attract.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                It should also make your local knowledge part of your marketing rather than treating Ottawa as just another keyword.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Grow Your Real Estate Brand Across Ottawa</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your next client could already be searching for an Ottawa realtor, looking at homes in their preferred neighbourhood, or trying to figure out whether now is the right time to buy or sell.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The opportunity is to make sure your business is visible when those searches happen. With focused digital marketing services for Ottawa realtors, you can build stronger visibility across Google and social media, create content that speaks to local buyers and sellers, promote your listings more effectively, and stay connected with potential clients throughout their decision-making process.
              </p>
              <div className="bg-amber-50 rounded-xl p-6 text-center">
                <p className="text-gray-800 italic">
                  "For Ottawa realtors, digital marketing is not simply about getting more views. It is about becoming more visible in the communities you serve and giving potential clients a reason to choose you when they are ready to make their next move."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Real Estate Business Online?</h2>
              <p className="mb-6">If you are an Ottawa realtor looking to attract more buyers and sellers, strengthen your online presence, and turn your digital channels into a consistent source of potential clients, LO Media House can help.</p>
              <p className="mb-6 text-sm text-white/80">We can help you develop a digital marketing strategy tailored to your real estate business, including SEO, social media marketing, content creation, paid advertising, website optimisation, and lead-generation strategies.</p>
              <Link href="/contact" className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Contact LO Media House Today →
              </Link>
            </div>

            {/* Related Articles */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-black text-center mb-6">You Might Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/top-marketing-services-ottawa-authors" className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                      alt="Top marketing services for Ottawa authors" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      Top Marketing Services for Ottawa Authors: A Complete Guide
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">Discover the top marketing services for Ottawa authors.</p>
                  </div>
                </Link>
                <Link href="/blog/web-design-services-ottawa-authors" className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop" 
                      alt="Web design services for Ottawa authors" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      Web Design Services for Ottawa Authors
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">Build a polished online presence for your author brand.</p>
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