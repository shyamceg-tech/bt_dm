'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) return;

    const bar = barRef.current;
    if (!bar) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollY / docHeight : 0;
        bar.style.transform = `scaleX(${progress})`;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      role="presentation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 100,
        background: 'var(--aurora-grad)',
        transformOrigin: 'left',
        transform: 'scaleX(0)',
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    />
  );
}
