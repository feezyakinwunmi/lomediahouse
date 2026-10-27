'use client';
import { motion } from 'framer-motion';
import { BarChart3, Church, CheckCircle, Compass, Heart, HelpCircle, Palette, Search, Smartphone, Sparkles, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  { q: "Why does a church need a website?", a: "A church website gives people one central place to find service times, location details, sermons, events, ministry information, and contact options. It also helps new visitors discover the church through search engines." },
  { q: "What should a church website include?", a: "Essential pages typically include Home, About Us, Service Times and Location, Sermons or Resources, Ministries, Events, Giving, and Contact. Churches can add other sections to suit their needs." },
  { q: "What is the difference between a church website and a church app?", a: "A website is usually the main public-facing platform for discovering the church and finding information through a browser. A mobile app offers a more focused experience for ongoing member engagement, notifications, and resources. Some churches need both, while others can meet their needs with a well-designed, mobile-friendly website." },
  { q: "How can SEO help a church grow its online presence?", a: "SEO helps search engines understand a church's website and match its content with relevant searches. Local SEO, useful original content, accurate business listings, mobile usability, and a clear site structure improve discoverability over time." },
  { q: "How much does a church website or app cost?", a: "Costs vary with the platform, design requirements, functionality, hosting, maintenance, and integrations. A simple website may be enough for a smaller congregation, while a large ministry may need custom development and more advanced systems. Assess both initial and ongoing costs before deciding." },
  { q: "Can a small church benefit from digital tools?", a: "Absolutely. A small church can begin with a simple website, accurate online listings, and accessible sermon or event information. Introduce further digital tools gradually, according to the church's resources and its members' needs." },
  { q: "Are church apps suitable for every ministry?", a: "Not necessarily. An app is most useful when a ministry has ongoing communication or engagement needs that justify maintaining one. For some churches, a responsive website combined with email, messaging, or livestreaming tools may be more practical." },
];

export default function WebsitesAndAppsForChurchesAndMinistries() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="p-6 md:p-10">
        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A church is more than a building. It is where people find hope in difficult seasons, discover purpose, build meaningful relationships, and encounter God in ways that change their lives. But what happens when someone searching for a spiritual home cannot find your church online? When a member misses an important announcement, a first-time visitor wants to learn about your ministry, or someone in need of encouragement has no way to reach you outside service hours?
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 leading-relaxed">
            Ministry does not begin and end within the four walls of a church. Today, websites and apps for churches and ministries extend the reach of the Gospel, strengthen relationships, and make church life more accessible, whether people are in the pew, commuting to work, studying abroad, or searching for answers in the middle of the night.
          </p>
          <p className="text-gray-600 text-sm mt-3">
            Technology cannot replace the warmth of fellowship, the power of prayer, or the beauty of gathering in God&apos;s presence. Used thoughtfully, however, it can help more people experience them.
          </p>
        </div>

        {/* Why a Website */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Church className="text-red-900" size={28} />
            Why Every Church and Ministry Needs a Website
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before visiting a church, many people want to know what it believes, where it meets, what its services are like, and whether they might belong. A church website is a welcoming first point of contact, letting visitors get to know your ministry before they walk through the door.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A good church website does more than list service times and a few photographs. It communicates your vision, reflects your values, and shows the heart behind your work. Picture a young person looking for a community that will nurture their faith, a family searching for a church in a new neighbourhood, or someone who has been away for years but feels ready to return. For each of them, your website may be the first step towards feeling seen, welcomed, and accepted.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mt-4 space-y-3">
            <h3 className="font-semibold text-black mb-1">An effective church website can include:</h3>
            {[
              { title: "Service information", desc: "Clear service times, locations, directions, and contact details." },
              { title: "Sermons and teachings", desc: "Audio, video, and written resources that let people keep learning throughout the week." },
              { title: "Events and programmes", desc: "Details of retreats, conferences, youth gatherings, prayer meetings, outreach programmes, and special services." },
              { title: "Online giving", desc: "Secure, convenient ways for members and supporters to contribute to the church's mission." },
              { title: "Ministry pages", desc: "Dedicated sections for youth, children's ministry, women's fellowship, men's groups, and other church communities." },
              { title: "New visitor resources", desc: "A simple introduction to your church, what to expect during a service, and how to get involved." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle size={18} className="text-red-900 flex-shrink-0 mt-1" />
                <p className="text-gray-700"><strong className="text-black">{item.title}:</strong> {item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Every page should answer a question, meet a need, or help someone take their next step towards your community.
          </p>
        </div>

        {/* Mobile Apps */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Smartphone className="text-red-900" size={28} />
            Church Mobile Apps: Keeping Your Congregation Connected Beyond Sunday
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A church website helps people discover your ministry. A church mobile app helps them stay connected to it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Church life continues long after the closing prayer. Members need reminders about upcoming programmes, access to spiritual resources, updates from ministry leaders, and ways to participate even when they cannot attend in person. A dedicated church app brings these together in one place.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With a well-planned app, members can read daily devotionals, listen to sermons, follow Bible reading plans, submit prayer requests, register for programmes, and receive event notifications. For larger ministries, an app can also support volunteer coordination, small-group communication, and member engagement.
          </p>
          <div className="border-l-4 border-red-900 bg-gray-50 p-6 rounded-r-xl">
            <p className="text-gray-700 leading-relaxed mb-3">
              Consider a member who has relocated for work and can no longer attend every service. Access to sermons, ministry updates, and online fellowship can help them stay part of their spiritual community. Or consider someone caring for a sick relative who cannot attend church for several weeks. A prayer meeting notification, a message from a ministry leader, or a recent sermon can remind them that they still belong.
            </p>
            <p className="text-gray-600 text-sm">
              These are not mere technological conveniences. They make care, communication, and participation more accessible.
            </p>
          </div>
        </div>

        {/* Evangelism */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Heart className="text-red-900" size={28} />
            How Church Websites and Apps Support Evangelism
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Evangelism has always meant meeting people where they are. Today, that includes the digital spaces where people search for information, ask questions, watch videos, and build relationships.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A church website can appear when someone searches for a church near them, a particular Christian teaching, a Bible study group, or a faith-based community. For example, a church in Lagos could create useful pages around searches such as &quot;Catholic church in Lagos,&quot; &quot;Christian youth fellowship in Lagos,&quot; or &quot;Bible study groups near me,&quot; provided those phrases accurately describe its location and activities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond discoverability, your digital platforms can offer meaningful resources to people who are not yet ready to attend a service. A thoughtful article on grief, forgiveness, purpose, family relationships, or spiritual growth can introduce your ministry&apos;s teachings in a way that feels helpful rather than forceful. Your website can become a place where questions are welcome, teachings are accessible, and people can explore faith at their own pace.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A visitor may arrive looking for a service time and leave having found a sermon that speaks directly to their situation. Another may discover an outreach programme that lets them serve their community. Someone else may finally feel comfortable enough to make that first visit. The digital encounter may be small, but its significance can reach far beyond the screen.
          </p>
        </div>

        {/* SEO */}
        <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <Search className="text-amber-300" size={28} />
            SEO for Churches and Ministries: Helping the Right People Find You
          </h2>
          <p className="text-white/80 mb-4">
            Having a website is a good beginning, but people must be able to find it. Search engine optimisation (SEO) means improving your website so search engines understand your content and show the right pages to people searching for related information.
          </p>
          <p className="text-white/80 mb-6">
            For churches, effective SEO is not about chasing clicks at the expense of the message. It is about helping the right people find the right information at the right time. A practical church SEO strategy should include:
          </p>
          <div className="space-y-4">
            {[
              { title: "1. Local SEO", desc: "Keep your church name, address, telephone number, and service times accurate across your website and online listings. A well-maintained Google Business Profile helps local visitors find your location, directions, contact details, and service information." },
              { title: "2. Relevant keywords", desc: "Use the language your congregation and potential visitors actually search for, such as \"church in Lagos,\" \"online sermons,\" \"youth ministry programmes,\" or \"church website design.\" Include keywords naturally in page titles, headings, and meta descriptions, and avoid forcing them into every paragraph." },
              { title: "3. Helpful, original content", desc: "Publish sermons, devotionals, event announcements, ministry updates, frequently asked questions, and articles that address genuine spiritual and practical needs. Original content gives visitors a reason to explore your website and helps search engines understand what your ministry offers." },
              { title: "4. Mobile-friendly design", desc: "Many people browse on their phones. Your pages should load quickly, display clearly on small screens, and make essential information easy to find. Buttons for directions, contact details, livestreams, and event registration should be simple to use." },
              { title: "5. Accessibility and trust", desc: "Use readable typography, clear navigation, descriptive image alt text, sufficient colour contrast, and a secure (HTTPS) connection. Make it easy for visitors to understand your ministry, contact your team, and find accurate information." },
            ].map((item) => (
              <div key={item.title} className="p-4 bg-white/10 rounded-xl">
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/80 text-sm mt-6">
            SEO is a long-term effort. Consistent improvements, relevant content, and a positive visitor experience will serve your ministry better than shortcuts that promise instant rankings.
          </p>
        </div>

        {/* Features to Consider */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <SlidersHorizontal className="text-red-900" size={28} />
            How to Choose a Church Website or App: Features to Consider
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every church needs a complicated digital platform. A small parish, an independent ministry, a growing congregation, and a large international church have different requirements. The goal is to choose technology that serves your mission rather than adding unnecessary complexity. Before investing in a church website or app, consider the following:
          </p>
          <div className="space-y-4">
            {[
              { title: "Ease of use", desc: "Can older members, first-time visitors, and people with limited technical experience navigate it comfortably?" },
              { title: "Content management", desc: "Can authorised staff update service schedules, sermons, announcements, and events without relying on a developer for every change?" },
              { title: "Communication tools", desc: "Does it support email updates, push notifications, or other appropriate ways of reaching members?" },
              { title: "Giving and payment options", desc: "Are donation processes secure, transparent, and suitable for your congregation?" },
              { title: "Privacy and security", desc: "Are member information, prayer requests, contact details, and donation records protected by appropriate access controls?" },
              { title: "Scalability", desc: "Can the platform grow as your membership and programmes expand?" },
              { title: "Cost and maintenance", desc: "Can you realistically afford development, hosting, subscriptions, updates, and technical support?" },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-red-900 bg-gray-50 p-4 rounded-r-xl">
                <h3 className="font-semibold text-black">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 rounded-xl p-6 mt-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              Prayer requests and pastoral information deserve particular care. Collect only what you need, obtain appropriate consent, and restrict access to sensitive details. A simple, well-maintained website that meets your congregation&apos;s needs is often more valuable than an expensive app that few people use.
            </p>
          </div>
        </div>

        {/* Design */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Palette className="text-red-900" size={28} />
            Church Website Design: Reflecting the Heart of Your Ministry
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your digital presence says something about your ministry before a visitor reads a sermon or attends a service. A cluttered layout, outdated information, confusing navigation, or hard-to-find contact details can make it harder for people to connect. A clear, welcoming design shows visitors that their time and needs have been considered.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Good church website design balances visual appeal with purpose. Use authentic photographs where possible, choose typography that is comfortable to read, organise information into clear sections, and make key actions visible, whether that means planning a visit, watching a sermon, registering for an event, or contacting a ministry leader.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Your website should also reflect your church&apos;s identity. A traditional parish may prefer a calm, reverent design, while a youth-focused ministry may suit a more contemporary look. Neither needs to sacrifice clarity, accessibility, or consistency. Most importantly, design should make the message easier to receive. The technology should support the ministry, not compete with it.
          </p>
        </div>

        {/* Measuring Impact */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <BarChart3 className="text-red-900" size={28} />
            Measuring the Impact of Your Church&apos;s Digital Presence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Digital ministry should be guided by purpose, not just activity. Website traffic, app downloads, social media engagement, and email open rates offer useful insights, but they do not tell the whole story. A successful strategy also asks whether people can find the information they need, take part in church life, access spiritual resources, and build meaningful connections.
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-black mb-3">Useful indicators include:</h3>
            <div className="space-y-2">
              {[
                "Visits to service information and new visitor pages.",
                "Clicks on directions, contact details, and visit-planning links.",
                "Sermon views and devotional engagement.",
                "Event registrations and volunteer sign-ups.",
                "App usage and engagement with notifications.",
                "Enquiries from people who found the ministry online.",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle size={16} className="text-red-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Review these indicators regularly and use them to improve the experience. If visitors often view your service page but rarely get in touch, for example, make your contact details clearer and explain what a first visit involves. Data can help you identify barriers and improve access, but it should complement pastoral judgement, not replace it.
          </p>
        </div>

        {/* Future */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Sparkles className="text-red-900" size={28} />
            The Future of Digital Ministry: Technology With a Human Heart
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As technology evolves, churches and ministries have more ways to make their resources accessible, support their members, and share their message across geographical boundaries. Livestreaming helps people participate when they cannot attend. Digital Bible study resources support learning throughout the week. Church management tools reduce administrative burdens. Mobile apps make announcements, sermons, and ministry resources easier to reach.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yet the future of digital ministry should not be measured by how many tools a church adopts. It should be measured by how thoughtfully those tools are used.
          </p>
          <div className="bg-amber-50 rounded-xl p-6 text-center mb-4">
            <p className="text-gray-800 italic">
              &quot;A website cannot replace the comfort of someone sitting beside a grieving family. An app cannot fully recreate the fellowship of a congregation praying together. An online giving page cannot capture the full meaning of generosity. But digital tools can help organise the work, extend the invitation, share the teaching, and make support easier to find.&quot;
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            When church leaders approach technology with discernment, they can preserve the heart of traditional ministry while embracing new ways to serve. The question is not whether a church should become more digital simply because the world is changing. It is whether its current approach to communication and outreach is helping it reach the people it has been called to serve.
          </p>
        </div>

        {/* Building a Digital Presence */}
        <div className="border-t border-gray-200 pt-8 mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Compass className="text-red-900" size={28} />
            Building a Digital Presence That Serves Your Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Websites and apps for churches and ministries are most valuable when they are built around people, purpose, and practical needs. A well-designed website can welcome a stranger, answer a question, or introduce someone to your community. A thoughtfully developed app can help members stay informed, access spiritual resources, and take part more fully in church life.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your calling remains the same, even as the ways people discover and engage with your ministry change. The goal is not simply to be online. It is to make your ministry easier to find, your message easier to access, and your community easier to connect with.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sometimes the first step towards belonging begins with a search, a click, or a simple message on a screen. Behind that small digital moment may be a person looking for hope, a family searching for community, or someone ready to begin again.
          </p>
          <p className="text-xl font-semibold text-black">Is your church ready to meet them there?</p>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <HelpCircle className="text-red-900" size={28} />
            Frequently Asked Questions About Websites and Apps for Churches and Ministries
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-black mb-2">{i + 1}. {faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
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
        <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Build a Digital Presence for Your Ministry</h2>
          <p className="mb-6">
            Whether you are establishing a new ministry or strengthening an existing one, start by identifying what your congregation needs most. Then build a digital presence that reflects your values, communicates your mission clearly, and makes every meaningful next step easier to take.
          </p>
          <Link href="/ContactUs" className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Talk to LO Media House →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
