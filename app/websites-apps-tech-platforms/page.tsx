// app/websites-apps-tech-platforms/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, BookOpen, Briefcase, Building2, CheckCircle, Church, ClipboardList, Code2, Compass,
  GraduationCap, HandHeart, HelpCircle, Layers, LayoutTemplate, Palette, Rocket, Search, ShieldCheck,
  ShoppingCart, Smartphone, Sparkles, Store, Target, User, Users, Workflow,
} from 'lucide-react';
import { allBlogPosts } from '@/data/blog';

const PAGE_TITLE = "Websites, Apps, and Tech Platforms for Brands and Ministries";
const PAGE_DESCRIPTION = "LO Media House builds professional websites, mobile apps, and custom tech platforms for businesses, personal brands, churches, ministries, non-profits, and organisations.";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | LO Media House`,
  description: PAGE_DESCRIPTION,
  keywords: [
    "website development", "mobile app development", "custom tech platforms",
    "church website design", "ministry website", "business website development",
    "e-commerce website development", "e-learning platform", "website development Nigeria",
    "SEO-friendly website", "author website", "NGO website", "LO Media House",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=630&fit=crop" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  alternates: {
    canonical: "/websites-apps-tech-platforms",
  },
};

// Blog articles in this topic cluster — each links back to this pillar page
const relatedSlugs = [
  "custom-web-and-mobile-app-development",
  "websites-and-apps-for-churches-and-ministries",
  "launching-your-first-website",
  "best-content-scheduling-publishing-tools-2026",
];

const websiteBenefits = [
  "Establish credibility and build trust with your audience.",
  "Showcase your products, services, programmes, and activities.",
  "Improve your visibility on search engines such as Google.",
  "Generate enquiries, leads, registrations, and sales.",
  "Share your message with a wider audience.",
  "Provide access to information at any time.",
  "Create a central hub for your digital marketing activities.",
];

const websiteServices = [
  {
    icon: Briefcase,
    title: "1. Business Website Development",
    body: [
      "Your website should communicate what your business does, who you serve, and why customers should choose you.",
      "We create professional business websites that showcase your services, communicate your value proposition, and make it easier for prospective customers to contact you. Our business website solutions can include service pages, contact forms, enquiry systems, testimonials, portfolio galleries, and blog sections.",
    ],
  },
  {
    icon: Building2,
    title: "2. Corporate and Organisational Websites",
    body: [
      "Our team develops websites for companies, NGOs, foundations, associations, and institutions that need a professional platform to communicate their mission, programmes, achievements, and services.",
      "These websites can feature organisational profiles, project updates, team information, reports, partnership opportunities, and contact details.",
    ],
  },
  {
    icon: BookOpen,
    title: "4. Author and Publishing Websites",
    body: [
      "Authors, coaches, speakers, and publishers need digital platforms that showcase their work and build authority. Author websites can include book catalogues, author biographies, speaking profiles, blog sections, testimonials, enquiry forms, and links to purchase published works.",
      "From a first book launch to a growing publishing business, a professional website can help you connect with readers and establish your brand.",
    ],
  },
  {
    icon: ShoppingCart,
    title: "5. E-commerce Website Development",
    body: [
      "Take your products online with an e-commerce website designed to support product discovery, enquiries, orders, and sales. Depending on your business model, your online store can feature product listings, shopping carts, payment integrations, order management, delivery information, and customer support options.",
      "We help businesses create convenient online shopping experiences that make it easier for customers to explore and purchase their products.",
    ],
  },
  {
    icon: User,
    title: "6. Portfolio and Personal Brand Websites",
    body: [
      "Professionals, creatives, consultants, and public figures can use a personal website to showcase their expertise and attract opportunities. Portfolio websites highlight your experience, projects, achievements, services, and professional identity.",
      "Your website can serve as your online portfolio, helping potential clients, employers, partners, and collaborators understand the value you offer.",
    ],
  },
];

const ministryFeatures = [
  "Sermon and video libraries.",
  "Online event registration.",
  "Prayer request forms.",
  "Ministry and departmental pages.",
  "Donation and giving integrations.",
  "Devotional content and Bible study resources.",
  "Livestream links and service schedules.",
  "Member information and communication tools.",
];

const appFeatures = [
  "User registration and profiles.",
  "Service booking and appointment management.",
  "Learning resources and online courses.",
  "Business directories and marketplaces.",
  "Notifications and user engagement.",
  "Community interaction and content sharing.",
  "Order management and customer support.",
  "Administrative dashboards and reporting.",
];

const platforms = [
  {
    icon: GraduationCap,
    title: "Digital Learning Platforms",
    desc: "Create a central place where learners can access online courses, training materials, assessments, and learning resources. An e-learning platform can support trainers, educational organisations, churches, professional communities, and businesses offering digital training. Possible features include course registration, learner dashboards, video lessons, assessments, progress tracking, and certificates.",
  },
  {
    icon: Users,
    title: "Membership and Community Platforms",
    desc: "Build a digital space where members can access exclusive resources, receive updates, register for activities, and participate in community programmes. These platforms can serve professional associations, membership organisations, ministries, and interest-based communities.",
  },
  {
    icon: Store,
    title: "Online Directories and Marketplaces",
    desc: "Connect people with services, products, professionals, or opportunities through a searchable online directory or marketplace. Depending on the purpose, the platform can include user profiles, categories, search and filtering, listings, enquiries, and account management.",
  },
  {
    icon: HandHeart,
    title: "NGO and Social Impact Platforms",
    desc: "Non-profit and development organisations can use digital platforms to share project information, document impact, coordinate programmes, engage supporters, and collect enquiries or registrations. We help organisations explore technology solutions that make their work more visible, accessible, and efficient.",
  },
  {
    icon: Workflow,
    title: "Business Automation Platforms",
    desc: "Digital tools can reduce repetitive tasks and improve the way businesses manage information and customer interactions. Depending on your requirements, we can help identify and implement website integrations, enquiry workflows, booking systems, customer management tools, and other appropriate digital solutions.",
  },
];

const processSteps = [
  { title: "Discovery and Consultation", desc: "We discuss your organisation, audience, goals, challenges, budget, and expectations." },
  { title: "Strategy and Planning", desc: "We define the project scope, core features, site structure, user journey, and development requirements." },
  { title: "Design and User Experience", desc: "We develop the visual direction and user experience to align with your brand identity and audience needs." },
  { title: "Development and Integration", desc: "The agreed solution is built, with relevant features, integrations, and content management tools configured." },
  { title: "Testing and Quality Assurance", desc: "Functionality, usability, mobile responsiveness, navigation, and other agreed requirements are reviewed before launch." },
  { title: "Launch and Ongoing Support", desc: "We help prepare your digital product for launch and can discuss maintenance, updates, and future improvements based on your needs." },
];

const seoItems = [
  "Search-friendly website structure and navigation.",
  "Relevant page titles and meta descriptions.",
  "Keyword-informed website copy.",
  "Mobile-responsive layouts.",
  "Logical internal linking.",
  "Image optimisation and descriptive alt text.",
  "Search engine indexing essentials.",
  "Blog structures for educational and informative content.",
  "Technical SEO considerations, including page performance.",
];

const reasons = [
  { title: "Strategy-led solutions", desc: "We align your digital project with your objectives and audience." },
  { title: "Brand-focused design", desc: "Your digital identity stays consistent and reflects your organisation." },
  { title: "User-centred experiences", desc: "We consider how visitors will navigate and interact with your platform." },
  { title: "Solutions for different sectors", desc: "Businesses, ministries, authors, non-profit organisations, and personal brands are all part of our client base." },
  { title: "SEO-conscious development", desc: "Discoverability, website structure, and search-friendly content are built in from the start." },
  { title: "Room for growth", desc: "Our plans address your current priorities while allowing for future improvements and expansion." },
];

const audiences = [
  "Small and medium-sized businesses.",
  "Entrepreneurs and startups.",
  "Churches and Christian ministries.",
  "NGOs and non-profit organisations.",
  "Authors and publishing businesses.",
  "Coaches, consultants, and personal brands.",
  "Educational and training organisations.",
  "Community initiatives and membership organisations.",
  "Companies seeking to improve their digital operations.",
];

const faqs = [
  { q: "How much does website development cost in Nigeria?", a: "The cost of website development in Nigeria varies based on the type of website, number of pages, design complexity, required integrations, and functionality. A basic business website will have different pricing from an e-commerce site or a customised digital platform. Contact LO Media House today for a tailored quotation that aligns with your project requirements and budget." },
  { q: "How long does it take to develop a website?", a: "The timeline depends on the project's size, complexity, content readiness, feedback, and integrations. A basic website may take less time than a large corporate website, online store, or custom technology platform. We establish an estimated timeline after reviewing the requirements." },
  { q: "Can you build a website for my church or ministry?", a: "Yes. We support website projects for churches, Christian ministries, pastors, and faith-based organisations. Depending on your needs, your website can include sermons, devotionals, event announcements, prayer request forms, giving integrations, and ministry information." },
  { q: "Can you develop a mobile app for my business?", a: "We can help define the requirements and development approach for a mobile application that meets your business needs. The recommended technology, features, timeline, and budget will depend on the intended users and functionality." },
  { q: "Can you build an online learning platform with certificates?", a: "Yes. An online learning platform can be planned to support courses, learner accounts, assessments, progress tracking, and certificates. The final features depend on the training model and project requirements." },
  { q: "Will my website work on mobile phones?", a: "We plan websites with responsive design in mind so that content and navigation can adapt to different screen sizes. Final performance depends on the implementation, content, hosting, and devices used." },
  { q: "Can you improve or redesign my existing website?", a: "Yes. An existing website can be reviewed for design, usability, content structure, responsiveness, performance, and SEO opportunities. The recommended improvements depend on the platform and its current condition." },
  { q: "Do you provide website maintenance?", a: "Maintenance requirements vary by project. We can discuss updates, backups, security-related maintenance, technical support, and other ongoing services appropriate to your website or platform." },
  { q: "How do I get started with LO Media House?", a: "Start by contacting LO Media House with a brief description of your business or ministry, the digital solution you need, your main objectives, and your preferred timeline. We can then discuss the project scope and next steps." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

function CheckList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <div className={columns ? "grid grid-cols-1 md:grid-cols-2 gap-3" : "space-y-3"}>
      {items.map((item) => (
        <div key={item} className="flex gap-3">
          <CheckCircle size={18} className="text-red-900 flex-shrink-0 mt-1" />
          <span className="text-gray-700">{item}</span>
        </div>
      ))}
    </div>
  );
}

function SectionHeading({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string; size?: number }>; children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 flex items-start gap-3 leading-tight">
      <Icon className="text-red-900 flex-shrink-0 mt-1" size={34} />
      {children}
    </h2>
  );
}

export default function WebsitesAppsTechPlatformsPage() {
  const relatedPosts = relatedSlugs
    .map((slug) => allBlogPosts.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  return (
    <main className="bg-gray-50 text-black min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=900&fit=crop"
          alt="Website and app development workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-red-950/70" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-2xl text-sm font-medium mb-6">
            <Code2 size={16} /> Websites • Apps • Tech Platforms
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            {PAGE_TITLE}
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mt-6 font-medium">
            Build Your Digital Presence with LO Media House
          </p>
          <p className="text-lg text-white/80 mt-4 max-w-3xl">
            Your brand deserves more than a social media page. It deserves a digital home that works for you.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/ContactUs" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-3.5 rounded-full font-semibold transition">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <a href="#services" className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold transition">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20">

        {/* Intro */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At LO Media House, we help businesses, personal brands, churches, ministries, non-profits, and organisations establish a strong digital presence through professional website development, mobile app development, and customised technology platforms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you need a business website, an online ministry platform, a mobile application, an e-learning portal, or a digital solution to streamline your operations, we combine creativity, technology, and strategy to build solutions that support your goals.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              Our approach goes beyond creating attractive digital products. We focus on <strong>functionality, user experience, accessibility, brand consistency, and long-term growth</strong>.
            </p>
            <p className="text-gray-600 text-sm mt-3">
              Ready to take your brand or ministry online? LO Media House is your trusted media and technology partner.
            </p>
          </div>
        </section>

        {/* Why a Website */}
        <section>
          <SectionHeading icon={Target}>Why Your Brand or Ministry Needs a Professional Website</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            In today&apos;s digital world, your audience expects to find reliable information about your brand, products, services, or ministry online. A professional website gives you a central platform to communicate your message, build credibility, and connect with your audience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike social media pages, which operate within third-party platforms, your website gives you greater control over your digital presence, content, and customer experience.
          </p>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="font-semibold text-black text-lg mb-4">A professionally developed website can help you:</h3>
            <CheckList items={websiteBenefits} />
          </div>
          <p className="text-gray-600 mt-4">
            At LO Media House, we design websites that align with your brand identity and business objectives.
          </p>
        </section>

        {/* Website Services */}
        <section id="services" className="scroll-mt-28">
          <SectionHeading icon={LayoutTemplate}>Our Website Development Services</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            We provide website development services for businesses, entrepreneurs, ministries, churches, authors, non-profit organisations, and other organisations.
          </p>

          <div className="space-y-6">
            {websiteServices.slice(0, 2).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}

            {/* Church and Ministry Websites — featured */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <Church className="text-amber-300" size={28} />
                3. Church and Ministry Websites
              </h3>
              <p className="text-white/90 mb-3">
                Your ministry&apos;s message can reach beyond the walls of your church building.
              </p>
              <p className="text-white/80 mb-6">
                LO Media House helps churches, pastors, Christian organisations, and ministries establish an online presence where members and new audiences can access teachings, sermons, events, announcements, devotionals, and ministry resources.
              </p>
              <h4 className="font-semibold mb-3">Depending on your needs, your ministry website can include:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {ministryFeatures.map((item) => (
                  <div key={item} className="flex gap-3 p-3 bg-white/10 rounded-xl">
                    <CheckCircle size={18} className="text-amber-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/80 mb-4">
                We help you create a digital platform that supports your ministry&apos;s mission and makes your message more accessible.
              </p>
              <Link href="/blog/websites-and-apps-for-churches-and-ministries" className="inline-flex items-center gap-2 text-amber-200 font-medium hover:underline">
                Read: Websites and Apps for Churches and Ministries <ArrowRight size={16} />
              </Link>
            </div>

            {websiteServices.slice(2).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        {/* Mobile Apps */}
        <section>
          <SectionHeading icon={Smartphone}>Mobile App Development for Businesses and Organisations</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            As audiences increasingly rely on mobile devices, mobile applications can provide a more convenient way to access services, content, and digital products.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            LO Media House supports the development of mobile application solutions based on your audience, objectives, and available resources.
          </p>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h3 className="font-semibold text-black text-lg mb-4">Depending on the project, your app may support:</h3>
            <CheckList items={appFeatures} columns />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The process begins with understanding the problem your application needs to solve. From there, we define the features, user journey, and technology requirements needed to support it.
          </p>
          <div className="border-l-4 border-red-900 bg-white p-5 rounded-r-xl shadow-sm mb-4">
            <p className="text-gray-800">
              Our goal is to help you build a useful, user-friendly digital product rather than an application that merely looks impressive.
            </p>
          </div>
          <Link href="/blog/custom-web-and-mobile-app-development" className="inline-flex items-center gap-2 text-red-900 font-medium hover:underline">
            Read: Custom Web and Mobile App Development <ArrowRight size={16} />
          </Link>
        </section>

        {/* Custom Platforms */}
        <section>
          <SectionHeading icon={Layers}>Custom Tech Platforms for Brands and Ministries</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Some organisations need more than a conventional website. They need a platform that brings their services, users, content, and operations together.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            LO Media House plans and develops customised digital platforms based on specific organisational needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, i) => (
              <div
                key={platform.title}
                className={`bg-white rounded-2xl shadow-md p-6 ${i === platforms.length - 1 ? "md:col-span-2" : ""}`}
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <platform.icon className="text-red-900" size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{platform.title}</h3>
                <p className="text-gray-600 leading-relaxed">{platform.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section>
          <SectionHeading icon={Compass}>Websites vs Mobile Apps vs Custom Platforms: Which Do You Need?</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Choosing the right digital solution depends on your goals, audience, budget, and operational requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: LayoutTemplate, title: "A website", desc: "Ideal for establishing an online presence, showcasing services, publishing content, generating leads, or selling products online." },
              { icon: Smartphone, title: "A mobile app", desc: "May be appropriate when users need frequent access to specialised features, personalised experiences, notifications, or services on their mobile devices." },
              { icon: Layers, title: "A custom platform", desc: "Useful when you need to manage multiple users, complex workflows, learning activities, memberships, transactions, or other connected functions." },
            ].map((option) => (
              <div key={option.title} className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-red-900">
                <option.icon className="text-red-900 mb-3" size={28} />
                <h3 className="text-lg font-bold text-black mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            In certain situations, combining these technologies can provide the most effective solution for your brand. For example, a ministry may need a website for public information and a learning platform for members. A business may need a website connected to a booking system or customer management tool.
          </p>
          <div className="bg-amber-50 rounded-xl p-6">
            <p className="text-gray-800">
              At LO Media House, we recommend practical, goal-driven digital solutions tailored to your needs, without unnecessary features or added complexity.
            </p>
          </div>
        </section>

        {/* Process */}
        <section>
          <SectionHeading icon={ClipboardList}>Our Digital Development Process</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            We follow a structured process to help ensure that each project is aligned with your needs.
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {processSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4 bg-white rounded-2xl shadow-md p-5">
                <span className="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-black">Step {i + 1}: {step.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* SEO */}
        <section className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-6 md:p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-start gap-3 leading-tight">
            <Search className="text-amber-300 flex-shrink-0 mt-1" size={34} />
            SEO-Friendly Website Development
          </h2>
          <p className="text-white/90 text-lg mb-3">
            A beautiful website is only part of your digital strategy. Your intended audience also needs a way to discover it.
          </p>
          <p className="text-white/80 mb-6">
            Our website development approach considers search engine optimisation (SEO) from the planning stage. Depending on your project, this may include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {seoItems.map((item) => (
              <div key={item} className="flex gap-3 p-3 bg-white/10 rounded-xl">
                <CheckCircle size={18} className="text-amber-300 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-white/70 text-sm">
            The focus is on creating a strong foundation for organic visibility. Search rankings and traffic depend on competition, content quality, technical factors, and other variables.
          </p>
        </section>

        {/* Why Choose Us */}
        <section>
          <SectionHeading icon={Sparkles}>Why Choose LO Media House?</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Choosing a technology partner is an important decision. You need a team that understands your vision and can translate it into a practical digital solution.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            At LO Media House, we bring together media, branding, communication, design, and technology to help brands and organisations communicate effectively online. Here is what you can expect from working with us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-l-4 border-red-900 bg-white p-5 rounded-r-xl shadow-sm">
                <h3 className="font-semibold text-black">{reason.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{reason.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            We believe technology should help you communicate better, serve your audience more effectively, and create new growth opportunities.
          </p>
        </section>

        {/* Who We Work With */}
        <section>
          <SectionHeading icon={Users}>Who We Work With</SectionHeading>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Our website, app, and technology platform services are suitable for:
          </p>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-4">
            <CheckList items={audiences} columns />
          </div>
          <p className="text-gray-600">
            If you are starting from scratch or upgrading an existing digital product, we can help you explore the right next step.
          </p>
        </section>

        {/* Related Articles (topic cluster) */}
        <section>
          <SectionHeading icon={BookOpen}>Learn More: Guides on Websites and Apps</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-red-600 mb-1">{post.category} • {post.readTime}</p>
                  <h3 className="font-bold text-black group-hover:text-red-900 transition line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionHeading icon={HelpCircle}>Frequently Asked Questions</SectionHeading>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-2xl shadow-sm p-5 open:shadow-md">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-black">
                  {faq.q}
                  <span className="text-red-900 text-2xl leading-none transition group-open:rotate-45">+</span>
                </summary>
                <p className="text-gray-600 leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-900 text-white rounded-3xl p-8 md:p-14 text-center">
          <Rocket className="text-red-500 mx-auto mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build Your Digital Future</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-4">
            Your brand, business, or ministry has a message to share and people to serve. The right digital platform can help you reach them more effectively.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-4">
            Whether you need a professional business website, a church website, a mobile application, an e-learning platform, or a customised technology solution, LO Media House is ready to help you take the next step. Let us turn your ideas into practical digital experiences that support your vision.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            Contact LO Media House today to discuss your website development, mobile app, or technology platform project.
          </p>
          <Link href="/ContactUs" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full font-semibold transition">
            Contact LO Media House <ArrowRight size={18} />
          </Link>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 text-sm text-gray-400">
            <span className="flex items-center gap-2"><Palette size={16} className="text-red-500" /> Build your online presence.</span>
            <span className="flex items-center gap-2"><Users size={16} className="text-red-500" /> Connect with your audience.</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-red-500" /> Grow with technology.</span>
          </div>
        </section>
      </div>
    </main>
  );
}

function ServiceCard({ icon: Icon, title, body }: (typeof websiteServices)[number]) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold text-black mb-3 flex items-center gap-3">
        <Icon className="text-red-900" size={28} />
        {title}
      </h3>
      {body.map((para) => (
        <p key={para} className="text-gray-700 leading-relaxed mb-3 last:mb-0">{para}</p>
      ))}
    </div>
  );
}
