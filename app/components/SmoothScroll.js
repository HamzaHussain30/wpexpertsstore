'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

// Inertial wheel scrolling; touch stays native. Skipped when the user prefers reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    let raf;
    const tick = (t) => { lenis.raf(t); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
  return null;
}
