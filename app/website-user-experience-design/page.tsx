// app/website-user-experience-design/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, BookOpen, Bot, CheckCircle, ClipboardList, Code2, Compass, HelpCircle, Landmark,
  Layers, MousePointerClick, Network, Rocket, Smartphone, Users, Wrench,
} from 'lucide-react';
import { allBlogPosts } from '@/data/blog';

const PAGE_TITLE = "What Makes a Website or Digital Platform Work for the People Using It?";
const PAGE_DESCRIPTION = "A website can look good and still fail the people using it. Learn how user experience design, mobile usability, accessibility, forms, testing, integration and maintenance decide whether a digital product actually works.";
const HERO_IMAGE = "https://images.unsplash.com/photo-1551650975-87deedd944c3";
const PAGE_PATH = "/website-user-experience-design";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "website development Nigeria", "user experience design", "UX design", "web application development",
    "mobile responsive website", "website accessibility", "WCAG 2.2", "usability testing",
    "online form design", "digital public services Nigeria", "software integration", "interoperability",
    "custom software vs existing platforms", "website maintenance", "AI in web development", "LO Media House",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: `${HERO_IMAGE}?w=1200&h=630&fit=crop`, alt: "Mobile app and website interface designs" }],
    locale: "en_CA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  alternates: {
    canonical: PAGE_PATH,
  },
};

// Blog articles in this topic cluster
const relatedSlugs = [
  "launching-your-first-website",
  "custom-web-and-mobile-app-development",
  "websites-and-apps-for-churches-and-ministries",
];

const contents = [
  { id: "easy-to-use", label: "Why some websites feel easy to use" },
  { id: "ux-design", label: "What user experience design is" },
  { id: "mobile", label: "Does your website really work on a mobile phone?" },
  { id: "forms", label: "Why people abandon online forms" },
  { id: "public-services", label: "Lessons from Nigeria's digital public services" },
  { id: "testing", label: "Testing websites with real people" },
  { id: "integration", label: "Why digital services need to work together" },
  { id: "custom-software", label: "Custom software or existing platforms?" },
  { id: "after-launch", label: "What happens after a website launches" },
  { id: "ai", label: "How AI is changing development" },
  { id: "heading", label: "Where digital product design is heading" },
];

const visitorGoals = [
  { who: "A hospital website visitor", what: "May want to know which services are available, how to book an appointment or where to find a specialist." },
  { who: "A prospective student", what: "May be looking for admission requirements and application deadlines." },
  { who: "A retail customer", what: "May simply want to confirm that a product is available before making a purchase." },
];

const uxQuestions = [
  "Can a first-time visitor understand the navigation?",
  "Are the instructions clear?",
  "Does the application explain why it needs certain information?",
  "What happens when someone makes a mistake?",
  "Can a user recover without starting all over again?",
];

const accessibilityQuestions = [
  "Can someone who uses a screen reader understand the page?",
  "Can a visitor navigate without a mouse?",
  "Are videos captioned?",
  "Is the text readable, and are instructions clear?",
];

const formPrinciples = [
  "Request only what is necessary at that stage.",
  "Explain unfamiliar requirements.",
  "Identify errors clearly.",
  "Allow users to correct mistakes without losing their progress.",
];

const bookingSystems = ["Business website", "Online calendar", "Payment gateway", "Automated confirmation"];

const maintenanceTasks = [
  "Checking that the website remains secure",
  "Reviewing its content",
  "Monitoring performance",
  "Making adjustments as the needs of the organisation change",
];

const productPurposes = [
  { who: "A small business", what: "May need a straightforward website that explains its services and allows customers to make enquiries." },
  { who: "A financial institution", what: "May need a secure application that makes complex transactions understandable." },
  { who: "A public agency", what: "May need a platform that helps people access information without requiring repeated visits to an office." },
];

const divisions = [
  { icon: Code2, title: "LO Platform", desc: "Website development, web applications and digital solutions.", href: "/websites-apps-tech-platforms" },
  { icon: Layers, title: "LO Media Studio", desc: "Brand identity and communication, since a website is often one of the main places where people encounter a brand.", href: "/brand-authority-nigerian-businesses" },
  { icon: BookOpen, title: "LO Publication", desc: "The development and presentation of information, knowledge and written material." },
];

const faqs = [
  { q: "What is user experience (UX) design?", a: "User experience design is concerned with how people interact with a product or service. In website and application development, it covers the journey from the moment someone arrives to the point where they finish what they came to do, including navigation, instructions, error handling and how easily a user can recover from mistakes." },
  { q: "Is responsive design enough to make a website mobile-friendly?", a: "Responsive web design helps a website adapt to different screen sizes, but mobile usability goes further. Developers also need to consider how people hold and navigate their devices, how much information fits comfortably on a screen, how quickly pages load on limited data, and whether the most important actions are easy to reach on a touchscreen." },
  { q: "What is WCAG 2.2?", a: "The Web Content Accessibility Guidelines (WCAG) 2.2, published by the World Wide Web Consortium, offer practical standards for making websites more accessible, including for people who use screen readers, navigate without a mouse or need captions and readable text." },
  { q: "What is the difference between integration and interoperability?", a: "Integration connects different software applications so they can exchange information and perform related tasks. Interoperability goes further by considering whether different systems can work together effectively, even when they have been developed by separate organisations." },
  { q: "Should my business build custom software or use an existing platform?", a: "It depends on the problem being solved. A well-configured existing platform is often enough. Custom software makes sense when available products cannot support a specialised process or the systems you need to connect, but it brings responsibilities for development costs, maintenance, security, updates and technical support." },
  { q: "Does a website need maintenance after launch?", a: "Yes. Pages become outdated, links stop working, software needs updating and security vulnerabilities are discovered. Maintenance includes keeping the website secure, reviewing content, monitoring performance and adjusting it as the organisation's needs change. A digital product is an ongoing responsibility, not a one-time purchase." },
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
  mainEntityOfPage: `https://www.lomediahouse.com${PAGE_PATH}`,
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

function CardGrid({ items }: { items: { who: string; what: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {items.map((item) => (
        <div key={item.who} className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-red-900">
          <h3 className="text-lg font-bold text-black mb-2">{item.who}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.what}</p>
        </div>
      ))}
    </div>
  );
}

export default function WebsiteUserExperienceDesignPage() {
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
          alt="Mobile app and website interface designs"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-red-950/70" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-2xl text-sm font-medium mb-6">
            <MousePointerClick size={16} /> Websites • User Experience • Digital Platforms
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            What Makes a Website or Digital Platform Work for the People Using It?
          </h1>
          <p className="text-lg text-white/80 mt-6 max-w-3xl">
            Why do so many digital products make simple things unnecessarily difficult?
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#easy-to-use" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-3.5 rounded-full font-semibold transition">
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
            Think about the last time you tried to complete something online and gave up halfway through. Perhaps you were filling out a form that kept rejecting your details, trying to find information buried somewhere on a website, or attempting to make a payment without being sure whether the transaction had gone through.
          </P>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 my-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Why do so many digital products make simple things unnecessarily difficult?</strong>
            </p>
          </div>
          <P>
            A website can have an attractive design, a business can invest in a sophisticated application, and an organisation can move its services online. But if people cannot understand how to use these products, find what they need or complete the tasks they came to perform, something has gone wrong.
          </P>
          <P>
            The problem is often deeper than appearance. It may be the way information is organised, how a form is designed, whether a service works properly on a mobile phone, or how one digital system communicates with another.
          </P>
          <p className="text-gray-700 leading-relaxed">
            Website development has therefore become a much broader discipline than building pages and writing code. It involves understanding people, designing useful experiences and making technology work in the circumstances in which it will actually be used.
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

        {/* Easy to use */}
        <section id="easy-to-use" className="scroll-mt-28">
          <SectionHeading icon={Compass}>Why Do Some Websites Feel Easy to Use While Others Don&apos;t?</SectionHeading>
          <P lead>
            Most people do not visit a website to admire its design. They have something they want to find out or accomplish.
          </P>
          <CardGrid items={visitorGoals} />
          <P>The website should make these tasks reasonably straightforward.</P>
          <P>
            Yet businesses sometimes organise their websites around what they want visitors to see rather than what visitors need to know. Important information gets buried, navigation becomes complicated, and pages are filled with descriptions that say very little about the service being offered.
          </P>
          <div className="bg-amber-50 rounded-xl p-6 mb-6">
            <p className="text-gray-800 font-medium">
              Good website design begins with a different question: what is someone likely to come here looking for?
            </p>
          </div>
          <P>
            That question influences everything from the homepage layout to the wording of navigation menus. It also explains why a visually simple website can sometimes provide a better experience than a more elaborate one.
          </P>
          <P>
            The challenge is finding the right balance between what an organisation needs to communicate and what its visitors need to understand.
          </P>
        </section>

        {/* UX design */}
        <section id="ux-design" className="scroll-mt-28">
          <SectionHeading icon={Users}>What Is User Experience Design, and Why Does It Matter?</SectionHeading>
          <P lead>
            User experience design, usually shortened to UX design, is concerned with how people interact with a product or service. In website and application development, it covers the journey from the moment someone arrives to the point where they finish what they came to do.
          </P>
          <P>
            It is easy to mistake UX design for making an interface look attractive. Visual design is certainly involved, but UX considers questions that go much further.
          </P>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h3 className="font-semibold text-black text-lg mb-4">Questions UX design asks:</h3>
            <CheckList items={uxQuestions} />
          </div>
          <Callout>
            For an online application form, if someone enters several pages of information only to discover at the final stage that a required document was never mentioned, the problem is not necessarily a coding error. The application was designed without adequately considering the user&apos;s journey.
          </Callout>
          <P>
            These details matter because people rarely distinguish between the different teams responsible for a digital product. They experience the website or application as one service. If one part of it causes difficulty, that difficulty affects their impression of the whole organisation.
          </P>
        </section>

        {/* Mobile */}
        <section id="mobile" className="scroll-mt-28 bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-6 md:p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-start gap-3 leading-tight">
            <Smartphone className="text-amber-300 flex-shrink-0 mt-1" size={34} />
            Does Your Website Really Work on a Mobile Phone?
          </h2>
          <p className="text-white/90 text-lg mb-4">
            In markets such as Nigeria, this is a particularly important question. For many people, a mobile phone is their primary way of accessing the internet. They may rarely use a desktop computer to visit a business website or complete an online transaction.
          </p>
          <p className="text-white/80 mb-4">
            A website that looks excellent on a laptop can be frustrating on a phone. Navigation may be difficult to access, text may require constant zooming, and forms may be awkward to complete. Large images and unnecessary features can also make pages slow to load, particularly when users have limited data or an unreliable connection.
          </p>
          <p className="text-white/80 mb-4">
            Responsive web design helps a website adapt to different screen sizes, but there is more to mobile usability than resizing a layout.
          </p>
          <p className="text-white/80 mb-6">
            Developers need to consider how people hold and navigate their devices, how much information can comfortably fit on a screen, and whether the most important actions are easy to reach. A booking process that works well with a mouse and keyboard may need to be reconsidered for someone using a touchscreen.
          </p>
          <h3 className="text-xl font-bold mb-4">There is also the question of accessibility.</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {accessibilityQuestions.map((item) => (
              <div key={item} className="flex gap-3 p-3 bg-white/10 rounded-xl">
                <CheckCircle size={18} className="text-amber-300 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-white/80 mb-4">
            The World Wide Web Consortium&apos;s{' '}
            <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer" className="text-amber-200 underline hover:text-white">
              Web Content Accessibility Guidelines (WCAG) 2.2
            </a>{' '}
            offer practical standards for making websites more accessible. They are worth understanding even for organisations that have never considered accessibility as part of their website development process.
          </p>
          <div className="p-5 bg-white/10 rounded-xl">
            <p className="text-white">
              A website should work for the people who need it, including those whose circumstances or abilities may be different from those of the people who built it.
            </p>
          </div>
        </section>

        {/* Forms */}
        <section id="forms" className="scroll-mt-28">
          <SectionHeading icon={ClipboardList}>Why Do People Abandon Online Forms and Digital Services?</SectionHeading>
          <P lead>
            Forms are among the most common ways people interact with websites, yet they are also a frequent source of frustration.
          </P>
          <P>
            Think about applying for a course, requesting a quotation, opening an account or registering for an event. The process may require personal details, supporting documents and several confirmations. Each additional step creates another opportunity for someone to become confused or give up.
          </P>
          <P>
            Sometimes the problem is the number of fields. Sometimes it is the language used in the instructions. In other cases, the website does not explain what happens after submission, leaving users uncertain about whether their information has been received.
          </P>
          <Callout>
            There is a useful distinction between collecting information an organisation needs and asking users to provide information simply because the system was designed that way.
          </Callout>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h3 className="font-semibold text-black text-lg mb-4">A well-designed form should:</h3>
            <CheckList items={formPrinciples} columns />
          </div>
          <P>
            Organisations can learn a great deal by watching people use their websites. If several people struggle with the same step, that is a strong indication that the process needs attention.
          </P>
        </section>

        {/* Public services */}
        <section id="public-services" className="scroll-mt-28">
          <SectionHeading icon={Landmark}>What Can Nigeria&apos;s Digital Public Services Teach Us About Website Design?</SectionHeading>
          <P lead>
            Government websites provide an interesting way to examine the challenges of digital service design because they often serve large and diverse populations.
          </P>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-6 md:p-8 text-white">
              <p className="text-5xl font-bold text-amber-300 mb-2">235</p>
              <p className="text-white/90 mb-3">government websites assessed for navigation, mobile responsiveness, security, availability and the quality of information.</p>
              <p className="text-white/70 text-sm">Source: Nigeria&apos;s 2025 Federal Government Website Scorecard</p>
            </div>
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-6 md:p-8 text-white">
              <p className="text-5xl font-bold text-amber-300 mb-2">60.1%</p>
              <p className="text-white/90 mb-3">of e-government users with a completion outcome said they needed someone&apos;s help.</p>
              <p className="text-white/70 text-sm">Source: Nigeria Tech Outlook 2026</p>
            </div>
          </div>
          <P>
            The significance of an assessment like this goes beyond whether government websites look modern. People visit these platforms because they need information or want to access a public service. A website that is difficult to navigate can make that process unnecessarily complicated.
          </P>
          <P>
            The 60.1% figure should be interpreted within the report&apos;s methodology, rather than treated as proof that all digital government services are difficult to use. Nevertheless, it prompts a worthwhile question: how independent should people be able to become when using a digital service?
          </P>
          <P>
            The question applies to private businesses too. If customers regularly have to call an organisation to understand how to use its website, complete a booking or confirm a payment, the digital experience may not be doing enough.
          </P>
          <div className="bg-amber-50 rounded-xl p-6">
            <p className="text-gray-800 font-medium">Moving a service online is only useful when people can actually use it.</p>
          </div>
        </section>

        {/* Testing */}
        <section id="testing" className="scroll-mt-28">
          <SectionHeading icon={MousePointerClick}>Why Should Developers Test Websites With Real People?</SectionHeading>
          <P lead>
            One of the assumptions that can affect website development is that the people building a product understand how everyone else will use it.
          </P>
          <P>
            They know where the menus are, what the buttons do and how the different pages connect. They have probably spent weeks or months working with the product. A first-time visitor has none of that familiarity.
          </P>
          <P>This is why usability testing matters.</P>
          <Callout>
            A developer working on a booking platform may believe the process is straightforward: select a service, choose a date, enter your details and confirm. But when someone unfamiliar with the platform tries it, they may not understand the service options or know whether their booking has been completed.
          </Callout>
          <P>Watching someone attempt the task often reveals problems that would otherwise remain unnoticed.</P>
          <P>
            Testing can happen before a website is launched. A design prototype can be shown to potential users, or a working version can be tested with a small group. After launch, feedback, website analytics and customer enquiries can help identify areas that need improvement.
          </P>
          <div className="bg-amber-50 rounded-xl p-6">
            <p className="text-gray-800">
              The objective is not to prove that the original design was correct. It is to discover where the experience falls short and make it better.
            </p>
          </div>
        </section>

        {/* Integration */}
        <section id="integration" className="scroll-mt-28">
          <SectionHeading icon={Network}>Why Do Digital Services Need to Work Together?</SectionHeading>
          <P lead>
            People rarely think about the different systems involved when they complete an online transaction. They expect to move from one step to another without having to understand how the technology behind it works.
          </P>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h3 className="font-semibold text-black text-lg mb-4">Booking a service may involve:</h3>
            <div className="flex flex-wrap items-center gap-3">
              {bookingSystems.map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-red-50 text-red-900 rounded-full text-sm font-medium">{item}</span>
                  {i < bookingSystems.length - 1 && <ArrowRight size={16} className="text-gray-400" />}
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-4">
              If these tools do not communicate properly, the customer may complete a payment without receiving a booking confirmation, or discover that an appointment has not been recorded.
            </p>
          </div>
          <P>This is where integration and interoperability become important.</P>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-red-900">
              <h3 className="text-lg font-bold text-black mb-2">Integration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Connects different software applications so they can exchange information and perform related tasks.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-red-900">
              <h3 className="text-lg font-bold text-black mb-2">Interoperability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Goes further by considering whether different systems can work together effectively, even when they have been developed by separate organisations.</p>
            </div>
          </div>
          <P>
            These issues are particularly relevant to financial services, public administration and digital commerce. The{' '}
            <a href="https://www.oecd.org/en/publications/oecd-digital-government-outlook_7e1b1fb0-en.html" target="_blank" rel="noopener noreferrer" className="text-red-900 font-medium hover:underline">
              OECD Digital Government Outlook
            </a>{' '}
            examines how connected government services and secure data exchange can reduce the need for people to repeat the same processes across institutions.
          </P>
          <P>
            The same principle applies to businesses. A customer should not have to explain the same issue repeatedly because the organisation&apos;s systems cannot share information. A staff member should not have to manually transfer data between several applications if those processes can be connected reliably.
          </P>
          <P>
            Developing a digital product therefore requires some thought about the environment in which it will operate. A website or application may work perfectly on its own and still create problems if it cannot communicate with the other tools the organisation depends on.
          </P>
        </section>

        {/* Custom software */}
        <section id="custom-software" className="scroll-mt-28">
          <SectionHeading icon={Code2}>Should a Business Build Custom Software or Use Existing Platforms?</SectionHeading>
          <P lead>
            This is a question many organisations encounter as their digital needs become more complex.
          </P>
          <P>
            There are already established platforms for managing customer relationships, processing payments, tracking inventory, scheduling appointments and handling many other business activities. In some situations, adopting an existing product is more sensible than commissioning a custom application.
          </P>
          <P>
            However, existing software does not always fit the way an organisation works. A company may have a specialised process that available products cannot support. It may need to connect several systems in a particular way, or provide customers with a service that requires a purpose-built platform.
          </P>
          <P>
            Custom software development can address these needs, but it comes with responsibilities. The organisation has to consider development costs, ongoing maintenance, security, updates and the availability of technical support.
          </P>
          <Callout>
            The decision should be based on the problem being solved. Building an application because it seems impressive or because another company has one is rarely a sound reason to invest in custom development.
          </Callout>
          <P>
            Sometimes a well-configured existing platform is all that is required. In other cases, a custom web application can make a process considerably easier. Understanding the difference is part of making good technology decisions.
          </P>
          <Link href="/blog/custom-web-and-mobile-app-development" className="inline-flex items-center gap-2 text-red-900 font-medium hover:underline">
            Read more on custom web and mobile app development <ArrowRight size={16} />
          </Link>
        </section>

        {/* After launch */}
        <section id="after-launch" className="scroll-mt-28">
          <SectionHeading icon={Wrench}>What Happens to a Website After It Is Launched?</SectionHeading>
          <P lead>
            A website launch often receives considerable attention. There may be a new design, announcements, social media posts and a campaign to introduce the updated platform.
          </P>
          <P>What receives less attention is what happens in the months that follow.</P>
          <P>
            Pages become outdated. Links stop working. Software needs updating. Security vulnerabilities are discovered. The organisation introduces new services, but its website continues to describe the old ones.
          </P>
          <P>Without regular attention, even a well-developed website can gradually become unreliable.</P>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h3 className="font-semibold text-black text-lg mb-4">Maintenance includes more than fixing problems when something breaks. It involves:</h3>
            <CheckList items={maintenanceTasks} columns />
          </div>
          <P>
            The same applies to web applications and digital platforms. They need to be monitored and improved as users interact with them and as the technology around them develops.
          </P>
          <div className="bg-amber-50 rounded-xl p-6">
            <p className="text-gray-800 font-medium">A digital product is an ongoing responsibility, not a one-time purchase.</p>
          </div>
        </section>

        {/* AI */}
        <section id="ai" className="scroll-mt-28">
          <SectionHeading icon={Bot}>How Is Artificial Intelligence Changing Website and Application Development?</SectionHeading>
          <P lead>
            Artificial intelligence is already changing parts of the development process. Developers can use AI tools to generate code, identify errors, explain unfamiliar programming concepts and speed up certain routine tasks. Designers can also use AI-assisted tools during research, prototyping and content development.
          </P>
          <P>This has made some aspects of digital production more accessible, but it has not removed the need for technical judgement.</P>
          <P>
            Generated code still needs to be reviewed. Security issues can remain hidden. A tool may produce a technically valid solution that does not fit the actual requirements of a project. Someone still needs to understand the architecture, test the product and take responsibility for how it performs.
          </P>
          <P>
            AI is also beginning to influence the way people interact with websites. Conversational interfaces allow users to ask questions rather than navigate through several menus. AI-powered assistants can help visitors locate information or complete certain tasks.
          </P>
          <P>
            Whether these developments improve the experience depends on how they are implemented. An assistant that provides inaccurate answers or makes it difficult to reach a human representative can create another source of frustration.
          </P>
          <Callout>
            The interesting question is not simply how much AI can be added to a website. It is whether the technology makes the experience genuinely more useful.
          </Callout>
        </section>

        {/* Where heading */}
        <section id="heading" className="scroll-mt-28">
          <SectionHeading icon={Rocket}>Where Digital Product Design Is Heading</SectionHeading>
          <P lead>
            As websites and applications become more sophisticated, there is a temptation to assume that more features automatically mean better products.
          </P>
          <P>But people do not necessarily want more features. They want to complete tasks without unnecessary difficulty.</P>
          <CardGrid items={productPurposes} />
          <P>Each product has a different purpose, and the quality of its design should be judged against that purpose.</P>
          <P>
            Emerging technologies will continue to change what developers can build. AI, voice interfaces, automation and new forms of interaction will create opportunities for different kinds of digital experiences. Yet the questions behind good design will remain familiar: who is using this product, what are they trying to do, and what makes that task easier or harder?
          </P>
          <div className="bg-amber-50 rounded-xl p-6">
            <p className="text-gray-800">
              Those questions are worth asking before development begins, while a product is being built and long after it has been launched.
            </p>
          </div>
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

        {/* Final / CTA */}
        <section className="bg-gray-900 text-white rounded-3xl p-8 md:p-14 text-center">
          <MousePointerClick className="text-red-500 mx-auto mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Digital Experiences That Make Sense</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Website development, web applications and digital platforms are now part of how organisations communicate, provide services and interact with people. Their value depends on the quality of the experience they create.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">At LO Media House, these subjects connect with the work of three divisions:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-10">
            {divisions.map((d) => {
              const inner = (
                <>
                  <d.icon className="text-red-500 mb-3" size={26} />
                  <h3 className="font-bold text-white mb-1">{d.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
                </>
              );
              return d.href ? (
                <Link key={d.title} href={d.href} className="bg-white/5 hover:bg-white/10 rounded-2xl p-5 transition">{inner}</Link>
              ) : (
                <div key={d.title} className="bg-white/5 rounded-2xl p-5">{inner}</div>
              );
            })}
          </div>
          <Link href="/ContactUs" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full font-semibold transition">
            Start Your Project with LO Platform <ArrowRight size={18} />
          </Link>
        </section>
      </div>
    </main>
  );
}
