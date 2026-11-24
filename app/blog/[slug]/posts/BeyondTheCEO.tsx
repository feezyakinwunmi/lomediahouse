import {
  Building2, GraduationCap, MessageSquareQuote, Users, ClipboardCheck, Layers, AlertTriangle,
  ShieldCheck, Sparkles, CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

const selectionQuestions = [
  {
    title: "Who has direct knowledge of the subject?",
    desc: "The person should understand the issue through professional experience, research or direct involvement. A job title alone does not establish expertise.",
  },
  {
    title: "Who can explain it clearly?",
    desc: "Knowledge and communication ability are different skills. Someone may be highly experienced but uncomfortable with interviews or public speaking. That does not make their expertise less valuable. It may mean they need preparation, a different format or a more suitable opportunity to contribute.",
  },
  {
    title: "Who is the intended audience?",
    desc: "A technical audience may want to hear directly from a specialist. Customers may respond better to someone who understands their everyday concerns. Investors and business partners may need a broader view from senior leadership.",
  },
  {
    title: "Is the person authorised to discuss the subject?",
    desc: "Companies need to distinguish between professional commentary, personal opinion and official statements. Employees should know when they are speaking from their own experience and when they are representing an agreed company position.",
  },
  {
    title: "Does the contribution offer something useful?",
    desc: "Visibility alone is not a reason to publish. A person's contribution should help the audience understand a subject, make a decision, consider a different perspective or learn something about the business and its industry.",
  },
];

const voices = [
  { title: "Leadership", desc: "Provides direction and context." },
  { title: "Employees", desc: "Explain the work in detail." },
  { title: "Customers", desc: "Share their experience." },
  { title: "Independent specialists", desc: "Offer an external perspective." },
];

const afterPublication = [
  "Do customers refer to the information when making enquiries?",
  "Are prospective partners asking more informed questions?",
  "Does the content help people understand the company's expertise?",
  "Are employees contributing perspectives that the organisation previously overlooked?",
];

export default function BeyondTheCEO() {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-10">
        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A company&apos;s public identity is often closely associated with its chief executive or founder. Their interviews, opinions, professional achievements and public appearances can influence how customers, partners and the wider industry perceive the business.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          That visibility has value. A founder who communicates clearly can help people understand what a company stands for, why it exists and where it is going. But a company&apos;s reputation is rarely built by one person alone.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Customers interact with the people who deliver its services. Employees understand the work behind its products. Technical specialists often know more about its solutions than its senior leadership. Partners and independent experts may also have perspectives that carry weight with an audience.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 leading-relaxed">
            So <strong>who should be speaking for the company, and whose knowledge should be part of its public identity?</strong>
          </p>
          <p className="text-gray-600 text-sm mt-3">
            The answer has implications for brand authority, corporate communication and personal branding. It also challenges the assumption that the most senior person in a business should automatically be its most visible representative.
          </p>
        </div>

        {/* Reputation beyond leadership */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Building2 className="text-red-900 flex-shrink-0" size={28} />
            A Company&apos;s Reputation Extends Beyond Its Leadership
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The chief executive may set the direction of a business, but people experience the company through many other interactions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A customer dealing with a support team forms an impression of the organisation. A prospective client speaking with a technical consultant is likely to judge the company&apos;s competence through that conversation. An employee discussing their work at an industry event may influence how colleagues and potential recruits view the business.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These experiences contribute to reputation, whether the company actively communicates them or not.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Businesses sometimes concentrate their public communication around one familiar figure. The founder appears in interviews, speaks at events and features in the company&apos;s content. Meanwhile, the people with direct knowledge of the work remain largely invisible.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            There is nothing inherently wrong with a founder-led public profile. It can give a business a recognisable voice, particularly in its early years. The limitation comes when the founder becomes the only person through whom the company communicates its knowledge, achievements and expertise.
          </p>
          <div className="border-l-4 border-red-900 bg-gray-50 p-4 rounded-r-xl">
            <p className="text-gray-700">
              A company may have years of experience across its teams, yet its public identity can give the impression that all its knowledge belongs to one person. That is a missed opportunity.
            </p>
          </div>
        </div>

        {/* Seniority vs expertise */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <GraduationCap className="text-red-900 flex-shrink-0" size={28} />
            Seniority and Subject Expertise Are Not the Same Thing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A senior executive may be the right person to discuss business direction, organisational values or the company&apos;s position in the market. They may not be the best person to explain every technical, creative or operational subject.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When a technology company introduces a new digital service, its chief executive can explain the business decision behind the launch, but the product lead may be better placed to discuss how the service works and the problems it is designed to solve. The engineers understand the technical decisions, while the customer experience team can explain where users encounter difficulties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 font-medium">
            Each perspective answers a different question.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The same applies in other industries. An architect may be better equipped to discuss a building&apos;s design decisions than the managing director of the firm. An editor can speak about the development of a manuscript, while a publisher may explain its commercial and distribution considerations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When businesses rely on one spokesperson for every subject, their communication can become less informative. It may also miss the opportunity to demonstrate the depth of knowledge within the organisation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The aim is not to make every employee a public figure. It is to recognise where expertise sits and decide when that expertise would be useful to an audience.
          </p>
        </div>

        {/* Customers and independent experts */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <MessageSquareQuote className="text-red-900 flex-shrink-0" size={28} />
            Why Customers and Independent Experts Can Add Credibility
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A company describing its own strengths is expected. A customer explaining what working with that company was actually like can provide a different kind of evidence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Customer perspectives can help prospective buyers understand what a service involves, what challenges arose and what changed after the work was completed. Their contribution is particularly useful when it is specific and based on genuine experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Independent experts can offer another perspective. They may help explain an industry development, examine a technical issue or place a company&apos;s work within a wider conversation. Their independence is important: an expert&apos;s contribution should not be presented as an endorsement if it is simply an informed opinion.
          </p>

          <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-6 md:p-8 text-white mb-6">
            <p className="text-5xl font-bold text-amber-300 mb-2">78%</p>
            <p className="text-white/90 mb-4">
              of B2B decision-makers said thought leadership becomes much more credible when a customer or client contributes to its development.
            </p>
            <p className="text-white/70 text-sm">
              Source: 2026 Edelman–LinkedIn B2B Thought Leadership Impact Report, a survey of more than 1,100 management-level professionals across seven countries. The report also found that contributions from independent experts and relevant content creators can strengthen credibility.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            These findings concern B2B thought leadership, not corporate reputation as a whole. They nevertheless point to an important consideration: audiences may place greater value on a company&apos;s ideas when those ideas are informed by people with relevant experience, including people outside the organisation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For businesses, communication should not always begin and end with what the company wants to say about itself. It should also make room for informed perspectives and verifiable experiences.
          </p>
        </div>

        {/* Employees */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Users className="text-red-900 flex-shrink-0" size={28} />
            Employees Are Part of the Company&apos;s Public Identity
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Employees influence reputation through their work, professional relationships and interactions with customers. Their knowledge can also help a business communicate more clearly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A company with experienced people in its technical, creative or operational teams has knowledge that may be valuable to its audience. Sharing that knowledge through interviews, articles, demonstrations, presentations and professional discussions can help people understand the company&apos;s capabilities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            There are practical benefits. Employees who contribute to industry discussions can help correct misconceptions about their field. Specialists who explain how a process works can make complex services easier to understand. Experienced team members can offer useful insight into developments that affect customers.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-black mb-3">However, employee visibility needs to be handled thoughtfully.</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              People should not be pressured to maintain personal social media profiles for the company or expected to promote messages they do not believe in. Their contributions should reflect genuine knowledge and experience. Businesses also need clear boundaries around confidential information, client details and subjects that require formal approval.
            </p>
            <p className="text-gray-700 leading-relaxed">
              An employee&apos;s professional voice should remain credible in its own right. If every contribution sounds like a corporate advertisement, the opportunity to share useful expertise is lost.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Employee advocacy is most meaningful when people have a genuine reason to speak positively about their workplace. That starts with the experience of working there: the quality of leadership, the working environment, the way people are treated and whether the organisation&apos;s public claims reflect its internal reality. A communication campaign cannot compensate for a workplace experience that contradicts the message.
          </p>
        </div>

        {/* Choosing representatives */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <ClipboardCheck className="text-red-900 flex-shrink-0" size={28} />
            How Can a Business Choose the Right People to Represent It?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The decision should begin with the subject the company wants to communicate, not the person it wants to feature.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A business can ask a few practical questions:
          </p>
          <ol className="space-y-4 mb-6">
            {selectionQuestions.map((item, i) => (
              <li key={item.title} className="flex gap-4 bg-gray-50 rounded-xl p-5">
                <span className="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-black">{item.title}</h3>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-gray-700 leading-relaxed">
            These questions help companies avoid choosing representatives simply because they are available, senior or comfortable on camera. They also make it easier to identify expertise that may otherwise remain hidden.
          </p>
        </div>

        {/* Consistent brand, different voices */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Layers className="text-red-900 flex-shrink-0" size={28} />
            Building a Consistent Brand with Different Voices
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Having several people contribute to a company&apos;s public communication does not mean abandoning consistency. A recognisable brand still needs a clear position, a defined purpose and standards for how it communicates.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The challenge is to maintain those standards while allowing different people to speak from their areas of knowledge.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A useful starting point is to identify the subjects on which the company wants to be recognised. These might include its products and services, the problems it solves, its professional expertise or developments within its industry.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The business can then identify who has the experience to contribute to each subject:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {voices.map((item) => (
              <div key={item.title} className="border-l-4 border-red-900 bg-gray-50 p-4 rounded-r-xl">
                <h3 className="font-semibold text-black">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Editorial planning helps bring these contributions together. Interviews, articles, case studies, videos and professional commentary can be developed around the knowledge available within the business. The content should be reviewed for accuracy and relevance without making every contributor sound as though they are reading from the same script.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            There should also be a clear distinction between personal opinion and an official company position. An employee discussing an industry issue is not automatically speaking on behalf of the organisation. Where a person is authorised to make official statements, that responsibility should be understood by everyone involved.
          </p>
          <div className="bg-amber-50 rounded-xl p-6">
            <p className="text-gray-800">
              Consistency should come from shared values, accurate information and a recognisable approach to communication. It does not require every person to use the same language or express the same personality.
            </p>
          </div>
        </div>

        {/* Founder bigger than the business */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <AlertTriangle className="text-red-900 flex-shrink-0" size={28} />
            The Risk of Making the Founder Bigger Than the Business
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founder visibility can be a powerful asset, particularly for young companies and businesses operating in competitive markets. A founder&apos;s story may help people understand the motivation behind a business and establish an early connection with its audience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            But there is a difference between a founder being an important part of a company&apos;s identity and becoming the only recognisable part of it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If customers associate every major idea, achievement and public interaction with one individual, the organisation may struggle to demonstrate its wider capabilities. The business can become difficult to distinguish from the founder&apos;s personal brand.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This can create challenges when the company grows, introduces new leadership or expands into areas where other specialists have greater knowledge. It can also make the organisation&apos;s public identity overly dependent on one person&apos;s availability and reputation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A stronger approach is to allow the founder&apos;s profile and the company&apos;s identity to develop alongside each other. The founder can remain visible while the organisation builds recognition around its work, people, expertise and relationships.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That gives the business a more complete identity and makes its reputation less dependent on a single individual. The same transition applies to how a business operates, as we explore in{' '}
            <Link href="/building-a-business-in-africa" className="text-red-900 font-medium hover:underline">
              Building a Business in Africa: The Realities of Growth and Competitiveness
            </Link>.
          </p>
        </div>

        {/* Actions, not only words */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <ShieldCheck className="text-red-900 flex-shrink-0" size={28} />
            Reputation Is Built Through What a Company Does, Not Only What It Says
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Choosing the right people to speak for a business is only one part of building brand authority. Their contributions must reflect the organisation&apos;s actual conduct, standards and capabilities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A specialist who explains a company&apos;s technical strengths should be able to point to the work behind those claims. A customer story should describe a genuine experience. A founder&apos;s public position should be consistent with the decisions the business makes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is where communication and reputation meet. Publishing more voices will not automatically make a company more credible. What matters is whether those voices provide useful information and whether the business&apos;s actions support what they communicate.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <h3 className="font-semibold text-black mb-3">Companies should also pay attention to what happens after publication:</h3>
            <div className="space-y-2">
              {afterPublication.map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle size={16} className="text-red-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            These are more meaningful indicators than simply counting how many employees have shared a post.
          </p>
        </div>

        {/* Conclusion */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Sparkles className="text-red-900 flex-shrink-0" size={28} />
            Building a Company Reputation That Goes Beyond One Person
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A founder can introduce a business to the world, but the company&apos;s long-term reputation is shaped by the quality of its work, the people behind it and the experiences of those who deal with it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Businesses that recognise this have an opportunity to communicate with greater depth. They can give specialists room to explain their work, allow customers to describe their experiences and bring informed external perspectives into important industry conversations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The result should not be a collection of unrelated personal brands. It should be a company identity supported by people whose knowledge and experience make its public communication more credible.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At LO Media House, this is an important part of how we understand brand authority and communication. Through LO Media Studio, we work across brand strategy, creative direction, content development, photography and video production. These disciplines can help businesses identify the stories, people and expertise that deserve to be communicated, then present them in ways that are clear and consistent with the brand.
          </p>
        </div>

        {/* Related pillar page */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-10 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">Related Guide</p>
            <p className="font-bold text-black">Beyond Visibility: How Nigerian Businesses Can Build Brand Authority</p>
            <p className="text-gray-600 text-sm">How expertise, identity, proof of work and a reliable website build trust.</p>
          </div>
          <Link href="/brand-authority-nigerian-businesses" className="inline-block bg-red-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition whitespace-nowrap">
            Read the Guide →
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
          <h2 className="text-2xl font-bold mb-4">A Reputation Large Enough for Your Whole Team</h2>
          <p className="mb-6">
            A company&apos;s reputation should be large enough to reflect the people and work that make it what it is. Talk to LO Media Studio about telling those stories.
          </p>
          <Link href="/ContactUs" className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Contact LO Media House →
          </Link>
        </div>
      </div>
    </article>
  );
}
