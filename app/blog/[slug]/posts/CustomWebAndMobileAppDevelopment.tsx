'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Clock, TrendingUp, Star, Lightbulb, Smartphone, Monitor, Building2, ListChecks, Handshake, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function CustomWebAndMobileAppDevelopment() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="p-6 md:p-10">
        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Custom web and mobile app development is simply the process of building solutions that work for your business. Imagine running a business where customers have to call you before they can place an order, your staff spend hours recording transactions manually, and you struggle to keep track of everything as your customer base grows.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Now, imagine having a website or mobile application that takes care of these tasks, gives your customers a better experience, and makes daily operations easier to manage. That is one of the benefits of custom web and mobile app development.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 leading-relaxed">
            Every business has its own needs. What works for a fashion brand may not work for a logistics company, a school, or a real estate business. This is why choosing a digital solution should go beyond having an attractive website or a mobile app. It should be about finding a solution that addresses your business challenges.
          </p>
          <p className="text-gray-600 text-sm mt-3">
            Whether you are starting a new business, expanding an existing one, or developing an entirely new digital product, custom web and mobile app development can help you turn your ideas into functional solutions.
          </p>
        </div>

        {/* What Is It */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Target className="text-red-900" size={28} />
            What Is Custom Web and Mobile App Development?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Custom web and mobile app development involves designing and building websites and applications to meet specific business requirements. Unlike generic solutions that offer the same features to different users, custom development allows you to create a platform based on how your business operates and what you want to achieve.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For instance, you may need a website where customers can explore your services, request quotations, and make enquiries. You may also need a mobile application that allows users to create accounts, place orders, make payments, or receive notifications.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mt-4">
            <h3 className="font-semibold text-black mb-3">Depending on your requirements, a custom solution could include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Payment gateways",
                "Booking systems",
                "Customer dashboards",
                "Inventory management",
                "Automated notifications",
                "Other features that make running your business easier",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-red-900 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            The aim is to build something useful, practical, and suited to your business needs.
          </p>
        </div>

        {/* How It Helps */}
        <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <TrendingUp className="text-amber-300" size={28} />
            How Custom Development Can Help Your Business
          </h2>
          <p className="text-white/80 mb-6">
            A website or mobile application should do more than make your business look good online. It should help you solve problems, serve customers better, and achieve your business goals.
          </p>
          <div className="space-y-4">
            {[
              { icon: Lightbulb, title: "1. It Helps You Solve Specific Business Problems", desc: "Consider a business that receives hundreds of orders every week. If the owner manages every order manually, orders may be overlooked, payments may be difficult to reconcile, and customers may wait longer for updates. A custom web application can help organise orders, track transactions, and keep customers informed. Identify the problem first, then develop a solution that addresses it." },
              { icon: Users, title: "2. It Improves the Customer Experience", desc: "Customers value convenience. A well-designed website helps them understand what you offer and take the next step. A mobile application can make frequently used services, such as account management, notifications, or order tracking, more accessible. When your platform is easy to use, customers have a better reason to keep coming back." },
              { icon: Clock, title: "3. It Saves Time and Reduces Repetitive Tasks", desc: "With the right digital solution, you can automate selected processes, manage information in one place, and reduce manual work. This does not mean every business needs an elaborate application. Sometimes a simple web-based system with the right features is enough to make a significant difference." },
              { icon: Rocket, title: "4. It Supports Business Growth", desc: "The system you use with 20 customers may become difficult to manage with 500. Custom development lets you plan for growth, introduce additional features, support more users, or integrate other services. Plan properly from the beginning so your platform can evolve without unnecessary complications." },
              { icon: Star, title: "5. It Gives Your Brand a Stronger Digital Presence", desc: "Your website or app is often one of the first places potential customers encounter your business. A professional, well-designed platform communicates what your brand represents and helps you stand out, especially when the design reflects your actual services rather than a generic template." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white/10 rounded-xl">
                <item.icon className="text-amber-300 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Life Scenarios */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Building2 className="text-red-900" size={28} />
            Two Real-Life Scenarios That Show Why Businesses Need Custom Development
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sometimes, it is easier to understand the value of a digital solution when you see how it could work in a real business situation.
          </p>

          <div className="border-l-4 border-red-900 bg-gray-50 p-6 rounded-r-xl mb-6">
            <h3 className="font-semibold text-black text-lg mb-3">Scenario 1: Ada&apos;s Growing Fashion Business</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Ada sells ready-to-wear outfits and also accepts custom orders through social media. When she started, managing orders through WhatsApp was convenient. Customers sent screenshots of their preferred outfits, asked about available sizes, made payments, and waited for delivery updates.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              As the business grew, things became more complicated. Some customers paid without providing complete delivery details. Others sent messages that got buried beneath newer conversations. Ada also struggled to keep track of available stock and orders that were ready for dispatch.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              A custom e-commerce website could help her display available outfits, organise product details, accept orders, and integrate online payments. An order management system could also help her track purchases and update customers. If her customers regularly used a mobile application and the business case justified the investment, she could consider developing one as well.
            </p>
            <p className="text-gray-600 text-sm">
              This would help Ada spend less time managing scattered information and more time improving her products, serving customers, and growing her business.
            </p>
          </div>

          <div className="border-l-4 border-red-900 bg-gray-50 p-6 rounded-r-xl">
            <h3 className="font-semibold text-black text-lg mb-3">Scenario 2: A Private School</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              A private school communicates with parents through phone calls, paper notices, and multiple WhatsApp groups. Whenever the school calendar changes, administrative staff have to send messages across different groups. Parents sometimes miss important announcements, while staff spend valuable time answering repeated questions about school fees, schedules, and events.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              A custom school management platform could provide a central place for announcements, academic calendars, fee information, and other essential updates. Depending on the school&apos;s needs, it could include separate dashboards for administrators, teachers, parents, and students, with a mobile application making notifications easier to access.
            </p>
            <p className="text-gray-600 text-sm">
              Rather than relying on scattered messages and paperwork, the school would have a more organised way to manage communication.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Ultimately, the best digital solution is not necessarily the one with the most features. It is the one that addresses the problem effectively.
          </p>
        </div>

        {/* Website vs App */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Smartphone className="text-red-900" size={28} />
            Custom Website Development vs Mobile App Development: Which Do You Need?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            One question business owners often ask is whether they should invest in a website or a mobile application. The answer depends on what you want to achieve and how your customers interact with your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
                <Monitor size={20} className="text-red-900" /> Choose a website if you want to…
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Establish an online presence, showcase your services, attract customers through search engines, publish content, or sell products online. A website is accessed through a browser without requiring visitors to install anything, and it can serve as the main online destination for your brand.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
                <Smartphone size={20} className="text-red-900" /> Choose a mobile app if you rely on…
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Frequent customer interactions, mobile-specific features, push notifications, or a dedicated user experience. A delivery company may benefit from an app for placing orders and tracking deliveries, while a service provider may only need a responsive website with an efficient booking system.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            You can also combine both when your requirements justify the additional investment. Before deciding, consider your target audience, the problem you want to solve, your budget, and the features your customers actually need.
          </p>
        </div>

        {/* Industries */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Building2 className="text-red-900" size={28} />
            What Types of Businesses Need Custom Web and Mobile App Development?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Custom digital solutions can benefit businesses across different industries. You do not have to be a large corporation before considering one.
          </p>
          <div className="space-y-3">
            {[
              { title: "E-commerce and retail", desc: "Online stores, order management systems, inventory tracking, and customer accounts." },
              { title: "Education", desc: "School management systems, student portals, online learning platforms, and parent communication tools." },
              { title: "Healthcare", desc: "Appointment booking platforms, patient portals, and administrative management systems." },
              { title: "Real estate", desc: "Property listing websites, inspection booking systems, and property management applications." },
              { title: "Logistics and transportation", desc: "Delivery management platforms, shipment tracking, and customer portals." },
              { title: "Hospitality", desc: "Reservation systems, booking platforms, and customer management tools." },
              { title: "Professional services", desc: "Client portals, appointment scheduling, quotation requests, and workflow management systems." },
              { title: "Start-ups", desc: "Minimum viable products (MVPs) that help entrepreneurs test an idea before investing in a more extensive product." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle size={18} className="text-red-900 flex-shrink-0 mt-1" />
                <p className="text-gray-700"><strong className="text-black">{item.title}:</strong> {item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">
            The right solution depends on your industry, your business model, and the challenges you need to address.
          </p>
        </div>

        {/* Considerations */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <ListChecks className="text-red-900" size={28} />
            What Should You Consider Before Developing a Website or Mobile App?
          </h2>
          <div className="space-y-4">
            {[
              { title: "Define your business goals", desc: "What exactly do you want your platform to accomplish? Attract more customers, increase online sales, improve communication, automate administrative tasks, or introduce a new service? A clear objective helps you decide which features are necessary and how to measure success." },
              { title: "Understand your users", desc: "What do the people using your platform need? What difficulties do they currently face? What would make their experience easier? Understanding them leads to better decisions about design, navigation, and functionality." },
              { title: "Choose the right features", desc: "Including every feature you can think of increases cost and complexity. Start with the essentials and introduce more functionality as your business grows and you learn more about your users." },
              { title: "Set a realistic budget", desc: "Cost varies with complexity, design, integrations, security requirements, and development approach. A simple business website generally costs less than a platform with multiple user roles, payment processing, and automated workflows. Discuss your requirements with your development team to set a realistic budget and timeline." },
              { title: "Plan for maintenance and security", desc: "Launch is only one part of the process. Your platform may need security updates, bug fixes, backups, performance monitoring, and new features over time. Planning for these protects your investment." },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-red-900 bg-gray-50 p-4 rounded-r-xl">
                <h3 className="font-semibold text-black">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Rocket className="text-red-900" size={28} />
            What Does the Custom Development Process Involve?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Although every project is different, custom web and mobile app development typically follows several stages.
          </p>
          <ol className="space-y-3">
            {[
              { title: "Planning and discovery", desc: "The team learns about your business, target audience, objectives, and technical requirements." },
              { title: "Design", desc: "The team plans the interface, layout, navigation, and user experience." },
              { title: "Development", desc: "Developers build the website or application and implement the required features and integrations." },
              { title: "Testing", desc: "The platform is tested for functionality, usability, security, and performance, as appropriate to the project." },
              { title: "Launch", desc: "The completed solution is deployed to its intended environment or platform." },
              { title: "Maintenance", desc: "After launch, the platform is monitored and updated to address issues and accommodate changing requirements." },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                <p className="text-gray-700"><strong className="text-black">{step.title}:</strong> {step.desc}</p>
              </li>
            ))}
          </ol>
          <p className="text-gray-600 text-sm mt-4">
            A clear development process helps ensure that the final product serves its intended purpose rather than simply looking attractive.
          </p>
        </div>

        {/* Choosing a Partner */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
            <Handshake className="text-red-900" size={28} />
            How to Choose the Right Web and Mobile App Development Partner
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The team you work with should understand your goals and be able to translate your requirements into a practical digital solution. Before committing to a project, consider the following:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            {[
              { title: "Experience", desc: "Review relevant projects and check whether the team has worked on similar requirements." },
              { title: "Communication", desc: "Choose a team that explains technical decisions clearly and keeps you informed." },
              { title: "Planning", desc: "Ensure the team understands your business needs before recommending features or technologies." },
              { title: "Testing", desc: "Ask how the website or application will be tested before launch." },
              { title: "Maintenance", desc: "Find out what support is available after the project is completed." },
              { title: "Ownership", desc: "Clarify ownership of the source code, access credentials, domain, hosting, and other relevant assets." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle size={18} className="text-red-900 flex-shrink-0 mt-1" />
                <p className="text-gray-700"><strong className="text-black">{item.title}:</strong> {item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Do not choose a development partner based on price alone. Consider the quality of the work, the proposed solution, communication, and the long-term support you will receive.
          </p>
        </div>

        {/* Final Thoughts */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Build a Digital Solution That Meets Your Business Needs</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your business does not need a complicated application simply because other companies have one. What you need is a digital solution that addresses your challenges and supports your goals.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For some businesses, that may be a professional website that attracts customers and generates enquiries. For others, it may be a custom web application that automates daily operations or a mobile app that makes services easier to access. The first step is to understand what your business needs. From there, you can determine the right features, development approach, and budget.
          </p>
          <div className="bg-amber-50 rounded-xl p-6 text-center">
            <p className="text-gray-800 italic">
              &quot;The best digital solution is not necessarily the one with the most features. It is the one that addresses the problem effectively.&quot;
            </p>
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
        <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
          <h2 className="text-2xl font-bold mb-4">Ready to Build a Digital Solution for Your Business?</h2>
          <p className="mb-6">
            At LO Media House, we offer web application development services to help businesses build digital solutions suited to their requirements. Whether you have a clear project plan or an idea you need help developing, our team can help you explore the options available.
          </p>
          <Link href="/ContactUs" className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Discuss Your Project →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
