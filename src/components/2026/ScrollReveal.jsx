'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const els = document.querySelectorAll('[data-reveal]');

    if (prefersReduced) {
      els.forEach((el) => el.setAttribute('data-revealed', ''));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = el.getAttribute('data-reveal-delay');
          if (delay) el.style.setProperty('--reveal-delay', delay);
          el.setAttribute('data-revealed', '');
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
