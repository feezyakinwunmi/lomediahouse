'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), {
  ssr: false,
});

export default function DeferredHeroCanvas() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const timer = window.setTimeout(() => setShouldLoad(true), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  return shouldLoad ? <HeroCanvas /> : null;
}
