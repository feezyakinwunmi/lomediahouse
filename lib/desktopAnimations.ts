type GsapModules = typeof import('./gsap');

export function runDesktopAnimations(
  setup: (modules: GsapModules) => void | (() => void),
) {
  if (
    window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  let cancelled = false;
  let cleanup: (() => void) | undefined;

  void import('./gsap').then((modules) => {
    if (!cancelled) {
      const setupCleanup = setup(modules);
      if (typeof setupCleanup === 'function') {
        cleanup = setupCleanup;
      }
    }
  });

  return () => {
    cancelled = true;
    cleanup?.();
  };
}
