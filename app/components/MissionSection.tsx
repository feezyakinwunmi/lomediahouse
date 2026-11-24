import { Sparkles, Target, Zap, Shield, Heart, TrendingUp, Users } from 'lucide-react';

const coreValues = [
  {
    title: "Direction Over Execution",
    description: "Strategy comes first. We never hit record without a plan.",
    icon: Sparkles,
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Platform-Specific Mastery",
    description: "We don't recycle content. We optimize for the psychology of each platform.",
    icon: Target,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Uncompromising Quality",
    description: "A standard of excellence that reflects the value of your brand.",
    icon: Zap,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Precision Over Volume",
    description: "Growth is not a byproduct of volume. It is a result of precision.",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-500"
  }
];

const stats = [
  { value: "250+", label: "Campaigns", icon: TrendingUp },
  { value: "98%", label: "Retention", icon: Heart },
  { value: "50+", label: "Brands", icon: Users },
  { value: "4.9", label: "Rating", icon: Sparkles }
];

export default function MissionSection() {
  return (
    <section
      className="relative py-16 md:py-12 overflow-hidden bg-gray-100"
    >
     
      
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header - Clean & Minimal */}
        <div className="text-center mb-12 md:mb-10">
          <p className="text-red-600 text-xs uppercase tracking-[3px] font-medium mb-3">THE LO EDGE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-zinc-700 to-black bg-clip-text text-transparent">
            Method &{' '}
            <span className="font-bold bg-gradient-to-r from-zinc-700 to-black bg-clip-text text-transparent">Mastery</span>
          </h2>
          <div className="w-10 h-px bg-red-500 mx-auto mt-5" />
        </div>

        {/* Mission & Vision - Split Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-20 md:mb-12">
          
          {/* Mission */}
          <div
            className="group relative border-l-2 border-red-500 pl-6 md:pl-8 hover:border-red-400 transition-all duration-500"
          >
            <div className="absolute -left-[1px] top-0 w-0 h-0 group-hover:w-full group-hover:h-full bg-gradient-to-r from-red-500/5 to-transparent transition-all duration-700" />
            <div className="text-red-500 text-xl mb-4">01</div>
            <h3 className="text-2xl md:text-3xl font-light text-black mb-3">From Content to Conversion</h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              We move your audience from passive viewers to committed stakeholders. Every frame, caption, and edit is designed to trigger a specific result.
            </p>
          </div>

          {/* Vision */}
          <div
            className="group relative border-l-2 border-zinc-300 pl-6 md:pl-8 hover:border-purple-500 transition-all duration-500"
          >
            <div className="absolute -left-[1px] top-0 w-0 h-0 group-hover:w-full group-hover:h-full bg-gradient-to-r from-purple-500/5 to-transparent transition-all duration-700" />
            <div className="text-purple-500 text-xl mb-4">02</div>
            <h3 className="text-2xl md:text-3xl font-light text-black mb-3">Digital Authority Engineering</h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              We engineer digital authority through precision storytelling, creating the perception that commands respect and builds legacy.
            </p>
          </div>
        </div>

        {/* Core Values - Minimal Grid */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-light text-black">The LO Media Edge</h3>
          <p className="text-zinc-500 mt-2 text-xs tracking-wide">Proven methods that deliver results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl overflow-hidden mb-16">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-white hover:bg-gray-50 transition-all duration-500 p-5 md:p-6 text-center rounded-xl shadow-sm"
              >
                <div className={`inline-flex p-2 rounded-full bg-gradient-to-br ${value.gradient} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h4 className="text-base md:text-lg font-medium text-gray-900 mb-2 group-hover:text-red-500 transition-colors">
                  {value.title}
                </h4>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}