// app/building-a-business-in-africa/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, BarChart3, BookOpen, Briefcase, CheckCircle, Cpu, Globe2, Lightbulb, Map,
  Rocket, Sprout, TrendingUp, Truck, UserCog, Users, Wallet,
} from 'lucide-react';
import { allBlogPosts } from '@/data/blog';

const PAGE_TITLE = "Building a Business in Africa: The Realities of Growth and Competitiveness";
const PAGE_DESCRIPTION = "What does it take to grow a business in Africa? A practical look at customers, costs, cash flow, finance, formalisation, branding, market access, distribution and technology for African entrepreneurs.";
const HERO_IMAGE = "https://images.unsplash.com/photo-1531482615713-2afd69097998";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "building a business in Africa", "African entrepreneurship", "business growth in Africa",
    "small business Nigeria", "doing business in Nigeria", "African brands",
    "market access Africa", "AfCFTA", "access to finance Africa", "SME growth Africa",
    "business competitiveness", "LO Media House",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: `${HERO_IMAGE}?w=1200&h=630&fit=crop`, alt: "African business team working together" }],
    locale: "en_CA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  alternates: {
    canonical: "/building-a-business-in-africa",
  },
};

// Blog articles in this topic cluster
const relatedSlugs = [
  "beyond-the-ceo-people-who-shape-company-reputation",
  "launching-your-first-website",
  "custom-web-and-mobile-app-development",
];

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
  mainEntityOfPage: "https://www.lomediahouse.com/building-a-business-in-africa",
};

const contents = [
  { id: "environment", label: "Understanding the African Business Environment" },
  { id: "customers", label: "1. Finding Customers and Building Reliable Revenue" },
  { id: "costs", label: "2. The Cost of Running a Business" },
  { id: "founder", label: "3. Moving Beyond Owner-Managed Operations" },
  { id: "brands", label: "4. African Brands: Why a Good Product Still Has to Compete" },
  { id: "market-access", label: "5. Market Access and Distribution" },
  { id: "technology", label: "6. Technology and Innovation" },
  { id: "learning", label: "Learning From Different Markets" },
  { id: "growth", label: "What Does Business Growth Really Look Like?" },
];

const customerQuestions = [
  "Are the people being reached likely to buy?",
  "Can they afford the product?",
  "Are they buying once or returning regularly?",
  "Does the business earn enough from each sale to cover the cost of serving them?",
];

const financialBasics = [
  "Operating expenses",
  "Profit margins",
  "Outstanding payments",
  "Working capital requirements",
];

const growthQuestions = [
  "Can it meet demand without compromising its standards?",
  "Are its finances in a position to support expansion?",
  "Can employees carry out their responsibilities effectively?",
  "Does the company understand its customers well enough to respond when their needs change?",
];

const techExamples = [
  { problem: "Struggling to track stock", fix: "A straightforward inventory system." },
  { problem: "Repeated customer enquiries", fix: "A better-organised website and clear online information." },
  { problem: "Too much time on repetitive admin", fix: "Opportunities to use automation." },
];

const divisions = [
  {
    icon: Lightbulb,
    name: "LO Media Studio",
    desc: "Brand development, creative strategy, photography, video production and business communication.",
  },
  {
    icon: BookOpen,
    name: "LO Publication",
    desc: "Supports the development and preservation of business knowledge, experiences and ideas through writing and publishing.",
  },
  {
    icon: Cpu,
    name: "LO Platform",
    desc: "Explores websites, applications and digital solutions that help organisations manage their activities and connect with their audiences.",
    href: "/websites-apps-tech-platforms",
  },
];

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

function StatCard({ value, label, source }: { value: string; label: string; source: string }) {
  return (
    <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-6 md:p-8 text-white my-6">
      <p className="text-5xl font-bold text-amber-300 mb-2">{value}</p>
      <p className="text-white/90 mb-3">{label}</p>
      <p className="text-white/70 text-sm">Source: {source}</p>
    </div>
  );
}

export default function BuildingABusinessInAfricaPage() {
  const relatedPosts = relatedSlugs
    .map((slug) => allBlogPosts.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  return (
    <main className="bg-gray-50 text-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src={`${HERO_IMAGE}?w=1920&h=900&fit=crop`}
          alt="African business team working together"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-red-950/70" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-2xl text-sm font-medium mb-6">
            <Sprout size={16} /> African Business • Growth • Competitiveness
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            Building a Business in Africa
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mt-6 font-medium">
            The Realities of Growth and Competitiveness
          </p>
          <p className="text-lg text-white/80 mt-4 max-w-3xl">
            Starting a business attracts a lot of attention. What happens after the launch is often a much longer and more demanding part of the journey.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#environment" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-3.5 rounded-full font-semibold transition">
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
            Starting a business attracts a lot of attention. There is the excitement of developing an idea, introducing a product, registering a company and finding the first customers. But what happens after the launch is often a much longer and more demanding part of the journey.
          </P>
          <P>
            The business has to keep finding customers. Its expenses must be covered, employees need to be paid, products have to reach buyers and the quality of its offering must remain consistent. As the business grows, these responsibilities become more demanding. What worked when the company had a handful of customers may no longer work when orders increase or operations extend to new locations.
          </P>
          <P>
            This is a central part of the conversation about African entrepreneurship. Across the continent, people are building businesses in almost every sector, from agriculture and manufacturing to technology, retail, entertainment and professional services. Yet the number of businesses being established tells only part of the story. Their ability to survive, employ people, improve their products and compete in larger markets deserves just as much attention.
          </P>
          <P>
            In Nigeria, the pressure of running a business is particularly visible in the cost of everyday operations. Electricity, transportation, imported materials and changing prices can affect decisions that business owners have to make repeatedly. Other African markets have their own economic and regulatory conditions, which shape how companies develop.
          </P>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mt-6">
            <p className="text-gray-700 leading-relaxed">
              So, <strong>what does it take to grow a business in Africa? Why do some enterprises manage to establish themselves in competitive markets while others struggle to move beyond their early stages? And what should entrepreneurs understand before attempting to expand?</strong>
            </p>
            <p className="text-gray-600 text-sm mt-3">
              These questions take us beyond the usual conversations about business ideas and start-up funding. They bring us closer to the actual work of building an enterprise.
            </p>
          </div>
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

        {/* Environment */}
        <section id="environment" className="scroll-mt-28">
          <SectionHeading icon={Map}>Understanding the African Business Environment</SectionHeading>
          <P lead>
            It is difficult to discuss African business as though the continent operates under one set of economic conditions. The opportunities available to a business in Ghana may differ from those in Nigeria. A company operating in South Africa will encounter its own regulatory, infrastructure and consumer-market realities. Even within a country, the experience of running a business can vary considerably between cities and industries.
          </P>
          <P>
            These differences matter because they influence the decisions businesses make. The cost of moving goods, the availability of electricity, access to finance and the purchasing power of customers all affect whether a company can operate profitably and plan for expansion.
          </P>
          <P>
            Nigeria&apos;s entrepreneurship landscape offers a useful starting point. The FATE Institute&apos;s State of Entrepreneurship in Nigeria Report 2024 examined 10,595 businesses across the country&apos;s 36 states and the Federal Capital Territory. The report recorded a decline in its entrepreneurship index from 0.52 in 2023 to 0.46 in 2024. It also highlighted persistent difficulties relating to finance, electricity, insecurity, foreign exchange and infrastructure.
          </P>
          <StatCard
            value="0.52 → 0.46"
            label="Nigeria's entrepreneurship index fell between 2023 and 2024, across a survey of 10,595 businesses in all 36 states and the FCT."
            source="FATE Institute, State of Entrepreneurship in Nigeria Report 2024"
          />
          <P>
            The findings are a reminder that enthusiasm for entrepreneurship does not remove the practical difficulties of running a business. Establishing a company is one achievement; creating the conditions for it to remain productive and competitive is another.
          </P>
          <P>
            Understanding these conditions is important for entrepreneurs, but it is equally important to investors, business advisers, policymakers and organisations working with small and growing enterprises. Business performance cannot be fully understood without considering the environment in which companies operate.
          </P>
        </section>

        {/* 1. Customers */}
        <section id="customers" className="scroll-mt-28">
          <SectionHeading icon={Users}>1. Finding Customers and Building a Reliable Source of Revenue</SectionHeading>
          <P lead>
            Every business needs customers, but getting people interested in a product is only the beginning. The real challenge is turning that interest into sales that can sustain the business.
          </P>
          <P>
            Customer acquisition is often discussed in terms of marketing and visibility. Businesses are encouraged to advertise, build an online presence and reach wider audiences. These activities can help, but they do not answer some of the more important commercial questions:
          </P>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <CheckList items={customerQuestions} />
          </div>
          <P>
            These questions are particularly relevant for businesses operating in markets where customers are sensitive to price changes. A product may have a strong following, but if its price rises beyond what its customers can afford, demand can fall. A business may also attract more orders without improving its margins, especially when delivery and customer acquisition costs increase.
          </P>
          <P>
            There is another side to this issue. Some businesses depend heavily on referrals, personal relationships or social media enquiries to generate sales. These channels can be useful, particularly in the early stages, but relying on them without understanding where customers come from can make revenue difficult to predict.
          </P>
          <div className="border-l-4 border-red-900 bg-white p-5 rounded-r-xl shadow-sm mb-6">
            <p className="text-gray-800">
              A business needs to know which activities actually bring paying customers and which ones simply generate attention. It also needs to understand why customers choose it, what makes them return and what causes them to look elsewhere.
            </p>
          </div>
          <P>
            Customer retention deserves more attention in discussions about business growth. Keeping an existing customer is not always cheaper or easier, but a business that consistently delivers a good experience has a better opportunity to build repeat relationships. This depends on the product or service itself, the way customers are treated and whether the company delivers what it promises.
          </P>
          <P>
            For African businesses, developing a dependable customer base means understanding the people they serve and the commercial realities of reaching them. Marketing can create awareness, but the business still has to earn the sale and give customers a reason to come back.
          </P>
        </section>

        {/* 2. Costs */}
        <section id="costs" className="scroll-mt-28">
          <SectionHeading icon={Wallet}>2. The Cost of Running a Business: Revenue Is Not the Same as Profit</SectionHeading>
          <P lead>
            One of the most difficult parts of running a business is knowing whether the money coming in is enough to keep the business healthy.
          </P>
          <P>
            In Nigeria, changes in the cost of electricity, fuel, transportation and imported materials have made cost management a persistent concern for many enterprises. Businesses that depend on imported inputs can also be exposed to exchange-rate movements. When the cost of replacing stock changes, the selling price may need to change as well.
          </P>
          <P>
            This creates difficult decisions. Increasing prices can affect customer demand, while keeping prices unchanged may leave the business earning less from each sale. In some cases, the business has to absorb additional costs simply to maintain its position in the market.
          </P>
          <P>
            There is also a difference between making a sale and having money available to run the business. A company may supply products to a customer and record the transaction as revenue, but if payment is delayed, it may have difficulty paying suppliers or purchasing materials for its next order. This is a cash-flow problem, even when the business appears to be making sales.
          </P>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h3 className="font-semibold text-black text-lg mb-2">Understanding the financial side of a business requires more than checking how much money has entered the account.</h3>
            <p className="text-gray-600 mb-4">Business owners need to know their:</p>
            <CheckList items={financialBasics} columns />
            <p className="text-gray-600 text-sm mt-4">
              Without this information, it becomes difficult to decide whether the business can afford to hire more staff, purchase equipment or take on a larger contract.
            </p>
          </div>
          <P>
            Access to finance is another part of the picture. The OECD&apos;s Africa Capital Markets Report 2025 draws on recent World Bank Enterprise Survey data from 23 African countries and reports that 31% of responding businesses identified access to finance as their biggest obstacle.
          </P>
          <StatCard
            value="31%"
            label="of responding businesses across 23 African countries identified access to finance as their biggest obstacle."
            source="OECD, Africa Capital Markets Report 2025 (drawing on World Bank Enterprise Survey data)"
          />
          <P>
            For smaller enterprises, obtaining suitable financing can be especially difficult. Some lack the financial records required by lenders; others may not have sufficient collateral or may be concerned about repayment terms. Even when a loan is available, borrowing does not automatically solve a business problem. The money has to be used in a way that supports the company&apos;s ability to generate income.
          </P>
          <div className="bg-amber-50 rounded-xl p-6">
            <p className="text-gray-800">
              Financial discipline is not simply an accounting responsibility. It influences the decisions that determine whether a business can continue operating, invest in improvements and take advantage of opportunities when they arise.
            </p>
          </div>
        </section>

        {/* 3. Founder */}
        <section id="founder" className="scroll-mt-28">
          <SectionHeading icon={UserCog}>3. When the Founder Becomes the Business: Moving Beyond Owner-Managed Operations</SectionHeading>
          <P lead>
            A business often begins with its founder doing almost everything. They know the customers, understand the product, negotiate with suppliers and make the decisions. In the early stages, this close involvement can be useful because the company is still finding its feet.
          </P>
          <P>
            The difficulty comes when the business grows but its way of working remains the same.
          </P>
          <P>
            If every important decision still has to go through the owner, employees may struggle to work independently. Routine tasks can be delayed because nobody is sure who has the authority to approve them. The founder spends so much time dealing with daily operations that there is little room to think about the future of the company.
          </P>
          <div className="border-l-4 border-red-900 bg-white p-5 rounded-r-xl shadow-sm mb-6">
            <p className="text-gray-800">
              This is one of the less discussed challenges of business growth: the habits that help someone start a business are not always the habits needed to manage a larger organisation.
            </p>
          </div>
          <P>
            At some point, the company needs clearer responsibilities and more reliable processes. Employees need to understand what is expected of them. Financial records must be properly maintained, customer information should be organised and important procedures should not exist only in the founder&apos;s memory.
          </P>
          <P>
            These changes may sound straightforward, but they require a different approach to managing a business. Delegating responsibilities means trusting other people to make decisions. Documenting processes means accepting that the company must preserve knowledge rather than depend on whoever happens to be available.
          </P>
          <P>
            Business formalisation is connected to this development. Registration, licences, tax documentation and other compliance requirements can affect a company&apos;s ability to participate in procurement, secure partnerships or enter certain markets. The requirements differ by industry and location, but a business that intends to grow needs to understand its obligations.
          </P>
          <P>
            Building beyond the founder does not mean removing the owner&apos;s involvement. It means developing a company where work can continue, customers can be served and decisions can be made without the founder having to personally manage every detail.
          </P>
          <P>
            For businesses planning to expand, this is a significant transition. Growth becomes difficult to sustain when the organisation has not developed the capacity to support it.
          </P>
          <Link href="/blog/beyond-the-ceo-people-who-shape-company-reputation" className="inline-flex items-center gap-2 text-red-900 font-medium hover:underline">
            Read: Beyond the CEO: The People Who Shape a Company&apos;s Reputation <ArrowRight size={16} />
          </Link>
        </section>

        {/* 4. Brands */}
        <section id="brands" className="scroll-mt-28 bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-6 md:p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-start gap-3 leading-tight">
            <Sprout className="text-amber-300 flex-shrink-0 mt-1" size={34} />
            4. African Brands: Why a Good Product Still Has to Compete
          </h2>
          <p className="text-white/90 text-lg mb-4">
            There is growing interest in African-made products and brands, but local origin alone does not guarantee that customers will choose a product.
          </p>
          <p className="text-white/80 mb-4">
            Consumers still consider what they are getting for their money. They look at quality, price, availability and how well a product meets their expectations. A local brand may have an interesting story and attractive packaging, but customers will return only if the product or service gives them a satisfactory experience.
          </p>
          <p className="text-white/90 font-medium mb-4">This is where brand development and business competitiveness meet.</p>
          <p className="text-white/80 mb-4">
            A brand helps people recognise a business and form an impression of what it offers. Its identity may be expressed through its name, visual design, packaging, advertising and communication. But its reputation is also shaped by everyday experiences: whether products are consistent, whether complaints are handled properly and whether the business can be relied upon.
          </p>
          <p className="text-white/80 mb-4">
            For businesses developing African products, this relationship between presentation and performance is especially important when entering more competitive markets. Retailers and distributors are not simply looking for products that look good. They need suppliers who can meet demand, maintain standards and deliver consistently.
          </p>
          <p className="text-white/80 mb-4">
            The same applies to businesses seeking international customers. Export opportunities can expose products to new audiences, but they also introduce requirements relating to certification, labelling, quality standards and documentation.
          </p>
          <p className="text-white/80 mb-6">
            This does not diminish the importance of branding. Clear positioning and a recognisable identity can help a business communicate its value and stand apart from competitors. The point is that brand development should reflect something real about the product and the organisation behind it.
          </p>
          <div className="p-5 bg-white/10 rounded-xl">
            <p className="text-white">
              African businesses have many opportunities to develop distinctive brands, but lasting recognition comes from the relationship between what a company promises and what customers actually experience.
            </p>
          </div>
          <Link href="/brand-authority-nigerian-businesses" className="inline-flex items-center gap-2 text-amber-200 font-medium hover:underline mt-6">
            Read: Beyond Visibility: How Nigerian Businesses Can Build Brand Authority <ArrowRight size={16} />
          </Link>
        </section>

        {/* 5. Market access */}
        <section id="market-access" className="scroll-mt-28">
          <SectionHeading icon={Truck}>5. Market Access and Distribution: Getting Products Beyond the Local Market</SectionHeading>
          <P lead>
            For many businesses, the ambition to grow involves reaching customers beyond the place where they started. Yet moving into another city, supplying a national retailer or exporting to another country requires more than finding people interested in buying.
          </P>
          <P>The business has to be able to get its products there.</P>
          <P>
            Distribution involves the relationships and arrangements that connect a company with its customers. This includes transport, storage, wholesalers, retailers, delivery partners and the information needed to understand where demand exists. When these arrangements are weak or expensive, they can limit how far a business can expand.
          </P>
          <P>
            The FATE Institute&apos;s report, Pathways to Growth: Improving Access to Markets for Nigerian Entrepreneurs, examines this issue among Nigerian nano, micro, small and medium-sized businesses. It identifies market access as a significant factor associated with business growth and discusses barriers such as transportation costs, limited market information, inadequate infrastructure and financial constraints.
          </P>
          <StatCard
            value="12%"
            label="Only 12% of the Nigerian businesses surveyed reported exporting their products, showing the distance between operating within a local market and reaching customers internationally."
            source="FATE Institute, Pathways to Growth: Improving Access to Markets for Nigerian Entrepreneurs"
          />
          <P>
            Exporting requires preparation. Businesses need to understand the regulations governing their products, identify potential buyers and establish arrangements for transportation and payment. They may also need to meet standards that differ from those in their domestic market. For smaller businesses, the cost and complexity of these requirements can be significant.
          </P>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h3 className="font-semibold text-black text-lg mb-3 flex items-center gap-2">
              <Globe2 className="text-red-900" size={22} /> The African Continental Free Trade Area (AfCFTA)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              AfCFTA has created an important framework for expanding trade across the continent. However, businesses still need to navigate practical issues such as customs procedures, product standards, logistics and local market conditions. A trade agreement can create opportunities, but individual enterprises need the capacity to take advantage of them.
            </p>
          </div>
          <P>
            For entrepreneurs considering expansion, it is worth asking whether the business is genuinely prepared to serve a larger market. More customers can create new opportunities, but they also place greater demands on production, delivery, finance and customer service.
          </P>
        </section>

        {/* 6. Technology */}
        <section id="technology" className="scroll-mt-28">
          <SectionHeading icon={Cpu}>6. Technology and Innovation: Are Businesses Getting Real Value From Digital Tools?</SectionHeading>
          <P lead>
            Technology has become part of everyday business activity. Companies use digital payments, online stores, accounting software and communication platforms to manage different aspects of their work. Artificial intelligence is adding further possibilities, particularly in areas such as research, customer support, administration and content production.
          </P>
          <P>But the presence of technology in a business does not necessarily mean the business has become more efficient.</P>
          <P>
            A company can invest in software and continue to struggle with poor record-keeping if employees are not trained to use it. An online store may attract orders, but if stock information is inaccurate or deliveries are unreliable, the customer experience will suffer. New tools can make existing processes faster, but they cannot automatically correct processes that were poorly organised in the first place.
          </P>
          <P>This is why technology adoption should begin with an understanding of what needs to improve.</P>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {techExamples.map((item) => (
              <div key={item.problem} className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-red-900">
                <h3 className="text-lg font-bold text-black mb-2">{item.problem}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.fix}</p>
              </div>
            ))}
          </div>
          <P>
            Artificial intelligence deserves particular consideration. Its ability to assist with routine tasks can be useful, but businesses still need to think about accuracy, data privacy, intellectual property and the consequences of relying on automated outputs. The most useful applications will depend on the nature of the work and the level of oversight required.
          </P>
          <P>
            Innovation also happens outside the technology sector. It can be found in new approaches to production, better ways of using local materials, improved service delivery or changes to how products reach customers.
          </P>
          <div className="border-l-4 border-red-900 bg-white p-5 rounded-r-xl shadow-sm mb-4">
            <p className="text-gray-800">
              For African businesses, the key question is not simply which new technology is available. It is whether adopting it will make a meaningful difference to how the business operates. Technology is most valuable when it helps solve a problem, improve a service or create an opportunity that was previously difficult to pursue.
            </p>
          </div>
          <Link href="/websites-apps-tech-platforms" className="inline-flex items-center gap-2 text-red-900 font-medium hover:underline">
            See: Websites, Apps, and Tech Platforms by LO Media House <ArrowRight size={16} />
          </Link>
        </section>

        {/* Learning from markets */}
        <section id="learning" className="scroll-mt-28">
          <SectionHeading icon={Globe2}>Learning From Business Experiences Across Different Markets</SectionHeading>
          <P lead>
            Business owners can learn a great deal by looking beyond their immediate industries and locations. The experiences of companies in other African countries can reveal how different markets approach similar challenges. International examples can also provide useful perspectives on productivity, digital operations, customer experience and business development.
          </P>
          <P>However, a successful approach in one country cannot always be transferred directly to another.</P>
          <P>
            A business operating in Canada, for instance, works within different infrastructure, regulatory and consumer conditions from those of a business in Nigeria. Comparing the two can still be useful, provided the differences are understood. The purpose is to identify what makes a particular approach effective and consider whether its underlying ideas can be adapted.
          </P>
          <P>
            The same applies to comparisons within Africa. A distribution model that works in one market may need to be adjusted where transportation networks, consumer habits or retail structures are different.
          </P>
          <P>
            Understanding these distinctions helps entrepreneurs make better decisions. It also creates a more informed conversation about African business development, one that recognises the diversity of the continent rather than treating every market as interchangeable.
          </P>
        </section>

        {/* Growth */}
        <section id="growth" className="scroll-mt-28">
          <SectionHeading icon={TrendingUp}>What Does Business Growth Really Look Like?</SectionHeading>
          <P lead>
            Growth is often measured by revenue, the number of customers or the size of a company. These indicators are useful, but they do not always tell the full story.
          </P>
          <P>
            A business may increase its sales and still experience cash-flow problems. It may open new branches without having the management structure to run them effectively. It may attract attention in a new market but struggle to maintain the quality that earned its original customers.
          </P>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h3 className="font-semibold text-black text-lg mb-4">Real progress also involves what happens inside the business:</h3>
            <CheckList items={growthQuestions} />
          </div>
          <P>
            These are practical questions, and their answers will differ from one enterprise to another. A growing manufacturer may need to improve production capacity before expanding distribution. A professional services company may need to develop its people and strengthen its reputation. A retailer may need better financial controls before opening another location.
          </P>
          <P>
            The key point is to understand what the business needs at its current stage, rather than pursuing expansion simply because growth is expected.
          </P>
          <div className="bg-amber-50 rounded-xl p-6">
            <p className="text-gray-800">
              A competitive enterprise is not necessarily the biggest company in its industry. It is one that understands its market, delivers value consistently and has the ability to respond to changes without losing sight of what makes the business viable.
            </p>
          </div>
        </section>

        {/* Looking beyond starting */}
        <section>
          <SectionHeading icon={BarChart3}>Looking Beyond Starting a Business</SectionHeading>
          <P lead>
            Africa&apos;s entrepreneurial landscape is full of activity, but the conversation should not stop at the number of people starting businesses. We need to pay attention to the companies that are building lasting operations, the difficulties they encounter and the decisions that help them move forward.
          </P>
          <P>
            For entrepreneurs, understanding these realities can make business planning more grounded. For professionals and organisations, it provides a clearer view of the conditions affecting the enterprises they work with. It also creates room for more useful conversations about what businesses need to become productive and competitive.
          </P>
          <P>
            At LO Media House, our interest in African business connects with the different ways organisations communicate, preserve knowledge and use digital solutions.
          </P>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {divisions.map((d) => {
              const card = (
                <>
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <d.icon className="text-red-900" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{d.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{d.desc}</p>
                </>
              );
              return d.href ? (
                <Link key={d.name} href={d.href} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
                  {card}
                </Link>
              ) : (
                <div key={d.name} className="bg-white rounded-2xl shadow-md p-6">{card}</div>
              );
            })}
          </div>
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

        {/* Final CTA */}
        <section className="bg-gray-900 text-white rounded-3xl p-8 md:p-14 text-center">
          <Rocket className="text-red-500 mx-auto mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Something That Lasts?</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Whether you need to communicate your brand, document your business knowledge or put the right digital tools in place, LO Media House can help you take the next step.
          </p>
          <Link href="/ContactUs" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full font-semibold transition">
            Contact LO Media House <ArrowRight size={18} />
          </Link>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 text-sm text-gray-400">
            <span className="flex items-center gap-2"><Briefcase size={16} className="text-red-500" /> Brand and communication.</span>
            <span className="flex items-center gap-2"><BookOpen size={16} className="text-red-500" /> Business knowledge.</span>
            <span className="flex items-center gap-2"><Cpu size={16} className="text-red-500" /> Digital solutions.</span>
          </div>
        </section>
      </div>
    </main>
  );
}
