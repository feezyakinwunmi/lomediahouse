import Image from 'next/image';
import DeferredHeroCanvas from './DeferredHeroCanvas';
import HeroSlider from './HeroSlider';
import HeroScrollEffects from './HeroScrollEffects';
import TrackedLink from './TrackedLink';

const cardsData = [
  {
    title: 'LO Media Studio',
    tag: 'CORE',
    color: 'from-red-500 to-orange-500',
    desc: 'Full-scale media partnership with strategy, cinematic production and authority engineering',
    button: 'Start Partnership',
    href: '/ContactUs',
  },
  {
    title: 'Cinematic Production',
    tag: 'VISUAL',
    color: 'from-blue-500 to-cyan-500',
    desc: 'High-octane video production, brand documentaries and scroll-stopping campaigns',
    button: 'Book Studio',
    href: '/Divisions#studio',
  },
  {
    title: 'Brand Storytelling',
    tag: 'STRATEGY',
    color: 'from-purple-500 to-pink-500',
    desc: 'Narrative architecture, visual identity and content systems that build authority',
    button: 'View Publications',
    href: '/Divisions#publications',
  },
  {
    title: 'Digital Authority',
    tag: 'GROWTH',
    color: 'from-green-500 to-emerald-500',
    desc: 'Platform-specific optimisation and engagement engines that drive conversion',
    button: 'Explore Platform',
    href: '/Divisions#platform',
  },
];

export default function Hero() {
  return (
    <section
      data-hero="root"
      className="relative min-h-screen bg-white text-black overflow-hidden pt-24 md:pt-28"
    >
      <HeroScrollEffects />
      <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
        <DeferredHeroCanvas />
      </div>

      <div className="relative z-10 max-w-[95%] mx-auto px-4 sm:px-6 md:px-8 pt-4">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* LEFT COLUMN - card fan (hover handled in CSS, no JavaScript) */}
          <div data-hero="left" className="lg:col-span-5">
            <p className="uppercase text-xs tracking-[2px] text-zinc-500 font-medium mt-3">CORE CAPABILITIES</p>

            <div className="relative h-[280px] sm:h-[300px] md:h-[320px] flex justify-center items-center mt-2">
              {cardsData.map((card, index) => (
                <div
                  key={card.title}
                  className="hero-card absolute w-[220px] sm:w-[240px] md:w-[260px] bg-white/90 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-4 sm:p-5 transition-all duration-500 cursor-pointer group"
                  style={
                    {
                      '--r': `${index * 6 - 9}deg`,
                      '--x': `${index * 8 - 12}px`,
                      '--y': `${index * 4 - 6}px`,
                      zIndex: index + 1,
                    } as React.CSSProperties
                  }
                >
                  <div className={`absolute -top-2 left-4 bg-gradient-to-r ${card.color} text-white px-2.5 py-0.5 text-[9px] sm:text-xs font-medium rounded-full`}>
                    {card.tag}
                  </div>

                  <p className="text-base sm:text-lg font-bold mt-5 leading-tight">{card.title}</p>

                  <p className="text-[11px] sm:text-xs text-zinc-600 mt-2 leading-snug min-h-[40px]">{card.desc}</p>

                  <TrackedLink
                    href={card.href}
                    eventValue={card.button}
                    className="mt-3 sm:mt-4 block w-full py-2 text-center bg-black text-white rounded-xl font-medium text-[11px] sm:text-xs hover:bg-zinc-800 transition opacity-0 group-hover:opacity-100 focus:opacity-100"
                  >
                    {card.button} →
                  </TrackedLink>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 pt-2 sm:pt-4">
            <div className="mb-3 sm:mb-4">
              <p
                data-hero="title"
                className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-[-1px] sm:tracking-[-2px] heading-font text-black animate-float"
              >
                LOMEDIASTUDIO
              </p>
            </div>

            <div data-hero="headline">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-[-0.5px] text-zinc-900">
                BUILD A BRAND THAT COMMANDS ATTENTION
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-2 sm:mt-3">
                <h2 className="text-lg sm:text-xl md:text-2xl leading-tight font-bold text-zinc-800">
                  High-Octane Media Production
                </h2>
                <p className="max-w-[300px] text-left sm:max-w-sm text-xs sm:text-sm text-zinc-600">
                  We engineer digital authority for visionaries, founders, leaders, and personal brands. Your message, unmissable.
                </p>
              </div>
            </div>

            <div data-hero="buttons" className="flex flex-wrap gap-3 mt-4">
              <TrackedLink
                href="/Aboutus"
                eventValue="Own Your Narrative"
                className="px-5 sm:px-6 py-2.5 border border-black rounded-full hover:bg-black hover:text-white transition text-sm"
              >
                Own Your Narrative
              </TrackedLink>
              <TrackedLink
                href="/ContactUs"
                eventValue="Schedule Strategy Session"
                className="px-5 sm:px-6 py-2.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition text-sm"
              >
                Schedule Strategy Session
              </TrackedLink>
            </div>
          </div>
        </div>

        {/* BOTTOM - image + vertical slider */}
        <div data-hero="bottom" className="mt-10 lg:mt-[-20px] grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 relative z-10">
          <div className="md:col-span-5 relative aspect-[16/9] sm:aspect-[9/3] bg-zinc-100 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-200">
            <Image
              src="/img1.jpg"
              alt="LO Media House creative production"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>

          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
