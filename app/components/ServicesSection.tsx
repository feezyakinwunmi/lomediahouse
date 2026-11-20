const services = [
  {
    number: "01",
    title: "LO Media Studio",
    desc: "Full-scale media partnership. Strategy, cinematic production, social domination & authority engineering.",
    color: "red",
  },
  {
    number: "02",
    title: "Cinematic Production",
    desc: "High-octane video production, brand documentaries & scroll-stopping campaigns that leave a mark.",
    color: "blue",
  },
  {
    number: "03",
    title: "Brand Storytelling",
    desc: "Narrative architecture, visual identity & content systems that build trust and drive action.",
    color: "purple",
  },
  {
    number: "04",
    title: "Digital Authority",
    desc: "Platform-specific optimization, engagement engines & content systems that scale with your vision.",
    color: "emerald",
  }
];

const colorMap: Record<string, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  emerald: "bg-emerald-500",
};

export default function ServicesSection() {
  return (
    <section
      className="py-16 md:py-20 lg:py-16 relative overflow-hidden bg-transparent"
    >
      <div className="max-w-[96%] mx-auto px-4 md:px-6 lg:px-8">

        <div className="mb-10 md:mb-12 lg:mb-14">
          <p className="uppercase tracking-[2px] text-xs text-zinc-500 font-medium">
            OUR SERVICES
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-black tracking-[-1px] text-black mt-3 origin-left"
          >
            OUR CRAFT
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-xl md:rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg will-change-transform"
            >
              <div className="flex justify-between items-start mb-4 md:mb-5">
                <span className="text-3xl md:text-4xl font-black text-zinc-300 group-hover:text-zinc-400 transition-colors">
                  {service.number}
                </span>
                <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${colorMap[service.color]} mt-1`} />
              </div>

              <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2 md:mb-3 text-black group-hover:text-red-500 transition-colors">
                {service.title}
              </h3>

              <p className="text-zinc-600 leading-relaxed text-xs md:text-sm">
                {service.desc}
              </p>

              <div className="mt-5 md:mt-6 text-xs font-medium flex items-center gap-2 text-black group-hover:gap-3 transition-all">
                Explore 
                <span className="text-base md:text-lg transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}