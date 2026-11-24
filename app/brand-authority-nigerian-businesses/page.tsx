// app/brand-authority-nigerian-businesses/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Award, BookOpen, Camera, CheckCircle, Eye, Fingerprint, Globe, HelpCircle,
  LayoutTemplate, Lightbulb, Megaphone, Rocket, ShieldCheck, Target,
} from 'lucide-react';
import { allBlogPosts } from '@/data/blog';

const PAGE_TITLE = "Beyond Visibility: How Nigerian Businesses Can Build Brand Authority";
const PAGE_DESCRIPTION = "Posting online helps people find you, but it doesn't make them trust you. Learn how Nigerian businesses can build brand authority through clear expertise, a consistent identity, proof of their work and a reliable website.";
const HERO_IMAGE = "https://images.unsplash.com/photo-1573164713988-8665fc963095";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "brand authority", "brand authority Nigeria", "Nigerian businesses", "brand building Nigeria",
    "brand identity", "brand awareness vs brand authority", "small business branding Nigeria",
    "online trust Nigeria", "business website Nigeria", "content marketing Nigeria",
    "personal branding", "LO Media House",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: `${HERO_IMAGE}?w=1200&h=630&fit=crop`, alt: "Business owner working on a laptop" }],
    locale: "en_CA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  alternates: {
    canonical: "/brand-authority-nigerian-businesses",
  },
};

// Blog articles and pillar pages in this topic cluster
const relatedSlugs = [
  "beyond-the-ceo-people-who-shape-company-reputation",
  "launching-your-first-website",
  "best-content-scheduling-publishing-tools-2026",
];

const contents = [
  { id: "visibility", label: "The problem with treating visibility as posting" },
  { id: "trust", label: "Why trust matters to Nigerian businesses" },
  { id: "expertise", label: "Give people something useful to associate with you" },
  { id: "identity", label: "Your brand needs a clear identity" },
  { id: "work", label: "Make your work part of your marketing" },
  { id: "website", label: "Your website is part of the customer's decision" },
  { id: "beyond-campaigns", label: "Brand authority takes more than a campaign" },
  { id: "faq", label: "Frequently asked questions" },
];

const trustSignals = [
  "Clear business details",
  "Genuine customer feedback",
  "Examples of previous work",
  "Transparent pricing",
  "Reliable communication",
];

const expertiseExamples = [
  { who: "A technology company", what: "Known for helping businesses improve their digital operations." },
  { who: "A creative agency", what: "Established expertise in brand development and content production." },
  { who: "A publishing company", what: "Focused on helping emerging writers turn their ideas into finished books." },
];

const workExamples = [
  "A construction company could document stages of a project and explain the decisions involved.",
  "A fashion brand could show how a garment is designed and produced.",
  "A consultant could discuss a common problem they have helped a client address, while respecting the client's privacy.",
  "A restaurant could introduce the people and processes behind its menu.",
];

const websiteQuestions = [
  "What does the business offer?",
  "Who are its products or services designed for?",
  "What experience or expertise does it have?",
  "How can customers view previous work or results?",
  "How can someone make an enquiry or take the next step?",
];

const authorityActions = [
  { title: "Share useful information.", desc: "Explain industry developments, answer common questions and offer practical guidance related to your area of expertise." },
  { title: "Show evidence of your work.", desc: "Use project examples, customer feedback, testimonials and relevant results to give people a clearer picture of what your business can do." },
  { title: "Keep your communication consistent.", desc: "Your website, social media pages, marketing materials and customer interactions should present a recognisable picture of the business." },
  { title: "Make it easy to learn about you.", desc: "Provide accurate business information, clear service descriptions and accessible contact channels." },
  { title: "Follow through on your promises.", desc: "Marketing may attract attention, but the quality and reliability of your work influence whether customers recommend you or return." },
];

const supportAreas = [
  { icon: Fingerprint, title: "Brand strategy and visual identity", desc: "Help establish how a company presents itself." },
  { icon: Camera, title: "Content production", desc: "Gives it ways to communicate its knowledge, work and values." },
  { icon: BookOpen, title: "Articles, books and published materials", desc: "Can provide a lasting record of expertise." },
  { icon: Globe, title: "Websites and digital platforms", desc: "Make information easier to discover and give customers a place to explore the business in more detail.", href: "/websites-apps-tech-platforms" },
];

const faqs = [
  { q: "What is brand authority?", a: "Brand authority is the level of trust, recognition and credibility a business develops within its industry or among its target audience. It grows when a company consistently demonstrates its knowledge, delivers quality work and communicates in ways that give people confidence in its expertise." },
  { q: "What is the difference between brand awareness and brand authority?", a: "Brand awareness is about whether people know or recognise a business. Brand authority goes further. It reflects whether people see that business as credible, knowledgeable and worth considering when they need a particular product or service." },
  { q: "Can a small business build brand authority?", a: "Yes. A small business can build authority by focusing on a specific area of expertise, sharing useful information, demonstrating the quality of its work and providing reliable customer experiences. It does not need the budget of a large company to communicate clearly and build trust." },
  { q: "How does personal branding help a business owner?", a: "A founder's professional reputation can influence how people perceive the business, particularly when the company is still growing. Sharing relevant knowledge, speaking about industry issues and communicating the values behind the business can help customers and professional networks understand the person leading the organisation." },
  { q: "How long does it take to build brand authority?", a: "There is no fixed timeline. It depends on the industry, the business's experience, the quality of its work and how consistently it demonstrates its expertise. Brand authority develops through repeated communication and customer experiences, so it should be treated as a long-term business effort rather than a short campaign." },
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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: [`${HERO_IMAGE}?w=1200&h=630&fit=crop`],
  author: { "@type": "Organization", name: "LO Media House" },
  publisher: {
    "@type": "Organization",
    name: "LO Media House",
    logo: { "@type": "ImageObject", url: "https://www.lomediahouse.com/logo.png" },
  },
  mainEntityOfPage: "https://www.lomediahouse.com/brand-authority-nigerian-businesses",
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

function P({ children, lead = false }: { children: React.ReactNode; lead?: boolean }) {
  return <p className={`text-gray-700 leading-relaxed mb-4 ${lead ? "text-lg" : ""}`}>{children}</p>;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-red-900 bg-white p-5 rounded-r-xl shadow-sm mb-6">
      <p className="text-gray-800">{children}</p>
    </div>
  );
}

export default function BrandAuthorityNigerianBusinessesPage() {
  const relatedPosts = relatedSlugs
    .map((slug) => allBlogPosts.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  return (
    <main className="bg-gray-50 text-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, faqSchema]) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src={`${HERO_IMAGE}?w=1920&h=900&fit=crop`}
          alt="Business owner working on a laptop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-red-950/70" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-2xl text-sm font-medium mb-6">
            <Award size={16} /> Brand Authority • Trust • Reputation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            Beyond Visibility
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mt-6 font-medium">
            How Nigerian Businesses Can Build Brand Authority
          </p>
          <p className="text-lg text-white/80 mt-4 max-w-3xl">
            Visibility helps people find you. Brand authority develops when your work gives them grounds to take you seriously.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#visibility" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-3.5 rounded-full font-semibold transition">
              Start Reading <ArrowRight size={18} />
            </a>
            <Link href="/ContactUs" className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold transition">
              Talk to LO Media House
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20">

        {/* Intro */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <P lead>
            Many Nigerian businesses are active online. They post product pictures, share promotions on WhatsApp Status, publish videos on Instagram and try to keep their names in front of potential customers. Yet despite all this activity, some still struggle to attract enquiries, earn customer confidence or turn attention into sales.
          </P>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 my-6">
            <p className="text-gray-700 leading-relaxed">
              This raises an important question: <strong>when people come across your business online, what do they actually learn about you?</strong>
            </p>
          </div>
          <P>
            Posting regularly can help people discover your business, but discovery is only the beginning. Customers also want to know whether you understand their needs, whether you can deliver what you promise and whether they can trust you with their money.
          </P>
          <p className="text-gray-700 leading-relaxed">
            This is where brand authority becomes important. It is the reputation a business builds through its knowledge, the quality of its work, the way it communicates and the experience it gives customers. For Nigerian businesses operating in competitive markets, developing that reputation can make a real difference.
          </p>
        </section>

        {/* Table of contents */}
        <nav aria-label="In this guide" className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="font-semibold text-black text-lg mb-4">In this guide</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {contents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-gray-700 hover:text-red-900 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Visibility */}
        <section id="visibility" className="scroll-mt-28">
          <SectionHeading icon={Eye}>The Problem with Treating Visibility as Posting</SectionHeading>
          <P lead>
            Social media has made it easier for businesses to reach potential customers. A small business can showcase its products, explain its services and communicate directly with an audience without the cost of traditional advertising.
          </P>
          <P>However, being active online does not automatically make a business recognisable or credible.</P>
          <P>
            A fashion brand, for example, may post new collections every day. People might see the clothes, like the pictures and even follow the page. But when they need to make a purchase, they may still have questions about the quality of the clothes, sizing, delivery, payment and the reliability of the seller.
          </P>
          <P>
            The same situation applies to other industries. A real estate company can advertise available properties without giving prospective buyers enough information to assess its experience. A consultant can share motivational business quotes without showing the depth of their professional knowledge. A food business can post attractive pictures without helping customers understand its menu, service standards or ordering process.
          </P>
          <P>
            In these situations, the business has gained some attention, but it has not given people enough to remember it by or enough confidence to choose it.
          </P>
          <div className="bg-amber-50 rounded-xl p-6">
            <p className="text-gray-800 font-medium">
              Visibility helps people find you. Brand authority develops when your work gives them grounds to take you seriously.
            </p>
          </div>
        </section>

        {/* Trust */}
        <section id="trust" className="scroll-mt-28">
          <SectionHeading icon={ShieldCheck}>Why Trust Matters to Nigerian Businesses</SectionHeading>
          <P lead>
            Think about the last time you considered buying something from a business you had never dealt with before. You probably wanted to see more than the product. You may have checked the seller&apos;s previous work, looked for customer reviews, asked questions about delivery or searched for additional information before making payment.
          </P>
          <P>
            Many Nigerian customers approach online purchases with similar concerns. The Nigeria Tech Outlook Report 2026, produced by the National Information Technology Development Agency (NITDA) and the National Bureau of Statistics, found that 25.1% of surveyed adults identified lack of trust or fear of fraud as their main barrier to buying online.
          </P>
          <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-6 md:p-8 text-white my-6">
            <p className="text-5xl font-bold text-amber-300 mb-2">25.1%</p>
            <p className="text-white/90 mb-3">of surveyed Nigerian adults identified lack of trust or fear of fraud as their main barrier to buying online.</p>
            <p className="text-white/70 text-sm">Source: Nigeria Tech Outlook Report 2026, NITDA and the National Bureau of Statistics</p>
          </div>
          <P>
            For businesses, this is worth paying attention to. A potential customer may like what you offer but still hesitate because they know very little about the company behind it.
          </P>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h3 className="font-semibold text-black text-lg mb-4">Your online presence should help close that information gap. These all help people assess whether they can trust you:</h3>
            <CheckList items={trustSignals} columns />
          </div>
          <P>
            These details may not look like traditional marketing, but they influence how customers experience your brand and whether they feel comfortable doing business with you.
          </P>
        </section>

        {/* Expertise */}
        <section id="expertise" className="scroll-mt-28">
          <SectionHeading icon={Target}>Give People Something Useful to Associate with Your Business</SectionHeading>
          <P lead>
            One of the foundations of brand authority is having a clear area of expertise. People should be able to understand what your business does, who it serves and what it wants to be known for.
          </P>
          <P>
            This requires more thought than choosing a description for your social media bio. It should guide the way you present your services, the topics you discuss and the kind of work you showcase.
          </P>
          <P>
            A business that tries to speak to everyone may find it difficult to build a distinct reputation. When your communication covers too many unrelated subjects, potential customers may struggle to understand what you are particularly good at.
          </P>
          <Callout>
            Consider a firm that provides accounting services to small companies. It could build a recognisable position by regularly explaining tax obligations, bookkeeping, financial planning and common mistakes that business owners make. Over time, people who need help in these areas have a clearer reason to remember the firm.
          </Callout>
          <P>The same principle applies across industries:</P>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {expertiseExamples.map((item) => (
              <div key={item.who} className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-red-900">
                <h3 className="text-lg font-bold text-black mb-2">{item.who}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.what}</p>
              </div>
            ))}
          </div>
          <P>
            Your area of expertise gives your audience a reason to pay attention. The work you share and the knowledge you communicate help strengthen that association.
          </P>
        </section>

        {/* Identity */}
        <section id="identity" className="scroll-mt-28">
          <SectionHeading icon={Fingerprint}>Your Brand Needs a Clear Identity</SectionHeading>
          <P lead>
            People should be able to recognise your business and understand what it represents, whether they encounter it on social media, your website, a printed document or through a recommendation.
          </P>
          <P>
            A clear brand identity includes your visual presentation, tone of communication, positioning and the overall impression your business creates. These elements should work together.
          </P>
          <P>
            For instance, a company that presents itself as a premium service provider needs to consider whether its website, proposals, social media content and customer communication support that impression. If the quality of its presentation changes significantly from one platform to another, customers may find it harder to understand what to expect.
          </P>
          <P>
            This does not mean every business needs an expensive rebrand or elaborate marketing campaign. It means making deliberate decisions about how the business should look, sound and communicate.
          </P>
          <Callout>
            Your logo and colours are part of that process, but they cannot carry the entire brand. The way you explain your services, respond to enquiries, deliver work and handle customer concerns also contributes to how people perceive the business.
          </Callout>
        </section>

        {/* Work as marketing */}
        <section id="work" className="scroll-mt-28 bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-6 md:p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-start gap-3 leading-tight">
            <Camera className="text-amber-300 flex-shrink-0 mt-1" size={34} />
            Make Your Work Part of Your Marketing
          </h2>
          <p className="text-white/90 text-lg mb-4">
            Many businesses spend time telling people what they can do. Fewer make enough effort to show the work behind those claims.
          </p>
          <p className="text-white/80 mb-6">
            If your business has completed a project, solved a customer&apos;s problem or developed a useful product, there may be an opportunity to turn that experience into content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {workExamples.map((item) => (
              <div key={item} className="flex gap-3 p-3 bg-white/10 rounded-xl">
                <CheckCircle size={18} className="text-amber-300 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-white/80 mb-4">
            This kind of content gives audiences a better understanding of the business. It also creates a record of experience that people can refer to when deciding whether to work with you.
          </p>
          <p className="text-white/80 mb-4">
            You do not need to turn every activity into a promotional post. Choose examples that demonstrate the quality of your work, explain something useful or answer questions customers commonly ask.
          </p>
          <div className="p-5 bg-white/10 rounded-xl">
            <p className="text-white">
              Over time, this creates a body of content that reflects what you know and what you can deliver. That is more valuable than a social media page filled entirely with sales announcements.
            </p>
          </div>
        </section>

        {/* Website */}
        <section id="website" className="scroll-mt-28">
          <SectionHeading icon={LayoutTemplate}>Your Website Is Part of the Customer&apos;s Decision</SectionHeading>
          <P lead>
            Social media is useful for discovery and regular communication, but your business should have a reliable place where people can find more complete information.
          </P>
          <P>
            A website can help customers understand your services, explore your previous work, learn about your company and contact you. It also gives you more control over how your information is organised and presented.
          </P>
          <P>
            For a potential customer, a website may be one of the places they visit before making a decision. If the information is outdated, the services are poorly explained or the contact details are difficult to find, the experience can create uncertainty.
          </P>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h3 className="font-semibold text-black text-lg mb-4">A useful business website should answer basic questions:</h3>
            <CheckList items={websiteQuestions} />
            <p className="text-gray-600 text-sm mt-4">
              The website should also work properly on mobile devices, load reliably and make important information easy to access.
            </p>
          </div>
          <P>
            Having a website does not guarantee trust or sales. The quality of your offer, pricing, customer service and wider business operations still matter. However, a well-maintained website gives people another way to assess your business and makes it easier for them to find the information they need.
          </P>
          <Link href="/websites-apps-tech-platforms" className="inline-flex items-center gap-2 text-red-900 font-medium hover:underline">
            See: Websites, Apps, and Tech Platforms by LO Media House <ArrowRight size={16} />
          </Link>
        </section>

        {/* Beyond campaigns */}
        <section id="beyond-campaigns" className="scroll-mt-28">
          <SectionHeading icon={Megaphone}>Brand Authority Takes More Than a Marketing Campaign</SectionHeading>
          <P lead>
            A campaign can introduce your business to a new audience, generate interest in a product or bring attention to a particular service. But a company&apos;s reputation develops through repeated experiences and communication over time.
          </P>
          <P>This means your marketing should be connected to the actual work of the business.</P>
          <P>
            If you promise excellent service, the customer experience should support that claim. If you position your company as knowledgeable, your content and public communication should demonstrate that knowledge. If you describe your products as high quality, the products themselves must meet the expectation.
          </P>
          <P>There are several ways to strengthen this connection:</P>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {authorityActions.map((item, i) => (
              <li key={item.title} className={`flex gap-4 bg-white rounded-2xl shadow-md p-5 ${i === authorityActions.length - 1 ? "md:col-span-2" : ""}`}>
                <span className="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-black">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="bg-amber-50 rounded-xl p-6">
            <p className="text-gray-800">
              These actions will not solve every business challenge. A company may have strong branding and still struggle because its pricing, product, distribution or sales process needs attention. Brand authority works alongside these parts of the business; it does not replace them.
            </p>
          </div>
          <Link href="/building-a-business-in-africa" className="inline-flex items-center gap-2 text-red-900 font-medium hover:underline mt-4">
            Read: Building a Business in Africa: The Realities of Growth and Competitiveness <ArrowRight size={16} />
          </Link>
        </section>

        {/* Building a reputation */}
        <section>
          <SectionHeading icon={Lightbulb}>Building a Reputation People Can Recognise</SectionHeading>
          <P lead>
            For Nigerian businesses, building brand authority is an ongoing process. It involves deciding what the business wants to be known for, communicating that clearly and giving people consistent evidence that its work can be trusted.
          </P>
          <P>This is also where different forms of media and communication can support business growth.</P>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            {supportAreas.map((area) => {
              const card = (
                <>
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <area.icon className="text-red-900" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.desc}</p>
                </>
              );
              return area.href ? (
                <Link key={area.title} href={area.href} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
                  {card}
                </Link>
              ) : (
                <div key={area.title} className="bg-white rounded-2xl shadow-md p-6">{card}</div>
              );
            })}
          </div>
          <P>
            These activities are most useful when they support a shared direction. A business does not need to be everywhere or produce content every day. It needs to make deliberate choices about what it communicates and ensure that its public presence reflects the quality and purpose of the organisation.
          </P>
          <P>
            The goal is to build a business that people can recognise, understand and feel confident engaging with.
          </P>
          <Callout>
            Visibility may bring someone to your page. What they discover about your business, and what they experience when they deal with you, will influence whether they take the next step.
          </Callout>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-28">
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
          <p className="text-gray-600 mt-6">
            Want to go deeper on founder and team visibility? Read{' '}
            <Link href="/blog/beyond-the-ceo-people-who-shape-company-reputation" className="text-red-900 font-medium hover:underline">
              Beyond the CEO: The People Who Shape a Company&apos;s Reputation
            </Link>.
          </p>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section>
            <SectionHeading icon={BookOpen}>Further Reading</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-300"
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
        )}

        {/* Final thoughts / CTA */}
        <section className="bg-gray-900 text-white rounded-3xl p-8 md:p-14 text-center">
          <Rocket className="text-red-500 mx-auto mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Final Thoughts</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-4">
            Nigerian businesses have more opportunities than ever to put their products, services and ideas in front of people. The challenge is making that attention count.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-4">
            A strong brand gives people a clear understanding of what a business offers and what it stands for. Useful content demonstrates its knowledge. A reliable digital presence makes it easier to assess and engage with the company. And the quality of its work gives customers good reason to trust it.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            The businesses that build lasting authority are deliberate about all these details. They understand that reputation is shaped by what they say, what they show and, most importantly, what they consistently deliver.
          </p>
          <Link href="/ContactUs" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full font-semibold transition">
            Build Your Brand with LO Media House <ArrowRight size={18} />
          </Link>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 text-sm text-gray-400">
            <span className="flex items-center gap-2"><Megaphone size={16} className="text-red-500" /> What you say.</span>
            <span className="flex items-center gap-2"><Camera size={16} className="text-red-500" /> What you show.</span>
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-red-500" /> What you deliver.</span>
          </div>
        </section>
      </div>
    </main>
  );
}
