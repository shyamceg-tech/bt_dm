'use client';

/**
 * ScrollTopButton.jsx — BlueTick 2026 Refresh
 *
 * Tiny client island: a "back to top" button that fades in once the user has
 * scrolled past the halfway point of the page, and smooth-scrolls to the top
 * on click. Mobile-only concern visually but rendered everywhere; it sits
 * above the mobile StickyBar (see CSS) so the two never overlap.
 *
 * Cost: a single passive scroll listener, throttled through rAF, that only
 * flips one piece of state when crossing the 50% threshold — no per-frame
 * React work. Nothing renders until the threshold is crossed.
 */

import { useEffect, useState } from 'react';
import styles from './ScrollTopButton.module.css';
import { smoothScrollTo } from '@/lib/smoothScroll';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      // Show once we're past 50% of the scrollable height (guard tiny pages).
      const past = scrollable > 0 && window.scrollY > scrollable * 0.5;
      setVisible((v) => (v === past ? v : past));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const toTop = () => smoothScrollTo(0);

  return (
    <button
      type="button"
      className={styles.btn}
      data-visible={visible || undefined}
      onClick={toTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
