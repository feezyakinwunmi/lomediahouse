'use client';

import { useEffect } from 'react';

const REDUCED = '(max-width: 767px), (prefers-reduced-motion: reduce)';

/**
 * Desktop-only smooth scrolling and the hero "fly away" scroll timeline.
 * Targets elements by `data-hero` attributes so the hero itself can be
 * server-rendered. Phones never download GSAP or Lenis.
 */
export default function HeroScrollEffects() {
  useEffect(() => {
    if (window.matchMedia(REDUCED).matches) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void Promise.all([import('@/lib/gsap'), import('lenis')]).then(([{ gsap }, { default: Lenis }]) => {
      const hero = document.querySelector<HTMLElement>('[data-hero="root"]');
      if (cancelled || !hero) return;
      const part = (name: string) => hero.querySelector<HTMLElement>(`[data-hero="${name}"]`);

      const lenis = new Lenis({ duration: 1.5 });
      let frame = 0;
      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      const timeline = gsap.timeline({
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.6, pin: true, pinSpacing: false },
      });

      timeline
        .to(part('title'), { y: -140, scale: 0.8, opacity: 0, rotation: -5, filter: 'blur(12px)', duration: 1.3 }, 0)
        .to(part('headline'), { y: -100, opacity: 0, duration: 1.2 }, 0.1)
        .to(part('left'), { y: 120, opacity: 0, duration: 1.1 }, 0.2)
        .to(part('bottom'), { y: 200, opacity: 0, duration: 1.4 }, 0.5)
        .to(part('buttons'), { y: 200, opacity: 0, duration: 1.4 }, 0.5)
        .to(hero, { backgroundColor: '#f5f5f5', duration: 2 }, 0);

      cleanup = () => {
        cancelAnimationFrame(frame);
        timeline.scrollTrigger?.kill();
        timeline.kill();
        lenis.destroy();
      };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
