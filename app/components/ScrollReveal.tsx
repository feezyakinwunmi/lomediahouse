'use client';

import { useEffect } from 'react';
import { runDesktopAnimations } from '@/lib/desktopAnimations';

/**
 * Scroll-linked entrance animations for server-rendered pages.
 *
 * Mark any element with `data-reveal` ("up" | "left" | "right" | "fade") and
 * optionally `data-reveal-delay` (seconds). Runs on desktop only and respects
 * `prefers-reduced-motion`, so phones never download or execute GSAP and the
 * page itself can stay a server component (no hydration cost).
 */
export default function ScrollReveal() {
  useEffect(() => {
    return runDesktopAnimations(({ gsap }) => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
      const tweens = elements.map((element) => {
        const variant = element.dataset.reveal || 'up';
        const delay = Number(element.dataset.revealDelay || 0);
        const from: gsap.TweenVars = { opacity: 0 };

        if (variant === 'up') from.y = 40;
        if (variant === 'left') Object.assign(from, { x: -150, rotation: -3, scale: 0.95 });
        if (variant === 'right') Object.assign(from, { x: 150, rotation: 3, scale: 0.95 });

        return gsap.fromTo(element, from, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 70%',
            scrub: 0.5,
          },
        });
      });

      return () => {
        tweens.forEach((tween) => {
          tween.scrollTrigger?.kill();
          tween.kill();
        });
      };
    });
  }, []);

  return null;
}
