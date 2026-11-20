'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), {
  ssr: false,
});

export default function DeferredHeroCanvas() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShouldLoad(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  return shouldLoad ? <HeroCanvas /> : null;
}
