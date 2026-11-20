const stats = [
  {
    number: 30,
    suffix: "+",
    title: "Published Books",
    description: "Authored & designed for thought leaders",
    icon: "📚",
    color: "from-red-500 to-orange-500"
  },
  {
    number: 10,
    suffix: "+",
    title: "Social Pages Managed",
    description: "From startups to enterprise brands",
    icon: "📱",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: 15,
    suffix: "+",
    title: "Video Event Coverage",
    description: "Live productions & cinematic storytelling",
    icon: "🎥",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: 25,
    suffix: "+",
    title: "Design Projects",
    description: "Branding, publications & digital assets",
    icon: "🎨",
    color: "from-emerald-500 to-teal-500"
  }
];

export default function StatsSection() {
  return (
    <section 
      className="bg-gradient-to-b mt-[-60px] rounded-t-3xl from-zinc-900 to-black py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_50%)]" />
      
      <div className="max-w-[90%] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-red-500 text-xs uppercase tracking-[2px] font-medium mb-3">
            FEATURED WORK
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Numbers That <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">Speak</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-2xl mx-auto">
            Real results from real partnerships. Here's what we've built together.
          </p>
        </div>

        {/* Stats Grid with Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="text-center p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-500 hover:transform hover:-translate-y-1">
                {/* Icon */}
                <div className={`text-3xl md:text-4xl mb-4 inline-block bg-gradient-to-br ${stat.color} p-2.5 md:p-3 rounded-xl shadow-lg`}>
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                
                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-white mb-1">
                  {stat.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 text-xs">
                  {stat.description}
                </p>
                
                {/* Decorative Line */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mt-4 group-hover:w-16 transition-all duration-500" />
              </div>
              
              {/* Divider between cards (only visible on desktop) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <div className="mt-10 md:mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-zinc-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white">4.9/5</div>
              <div className="text-xs text-zinc-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white">50+</div>
              <div className="text-xs text-zinc-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white">5+</div>
              <div className="text-xs text-zinc-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}