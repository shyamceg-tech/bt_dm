'use client';

/**
 * StickyBar.jsx — BlueTick 2026 Refresh
 *
 * Mobile-only fixed-bottom CTA bar. Visible <1024px, hidden ≥1024px via CSS.
 * Links to the hero form (#hero-form), the canonical conversion point.
 *
 * Honors `env(safe-area-inset-bottom)` so it doesn't clash with the iOS
 * home indicator. Footer.module.css adds matching bottom padding on
 * mobile so the sticky bar doesn't cover footer content.
 *
 * Why a client island: the raw `href="#hero-form"` hash jump is unreliable
 * from far down the page — a native smooth-scroll over the full page height
 * gets aborted/hijacked by the section IntersectionObservers firing as
 * sections fly past, so it would randomly land mid-page (form stuck behind
 * the header) or not move at all, leaving a blue gap below the form. We run
 * a single deterministic `scrollTo` instead, offset by the fixed header +
 * sticky section-nav so the form lands fully visible. The `href` stays as a
 * no-JS fallback. Phase 1 source: bluetick-2026-refresh-v3.html 9525–9534.
 */

import styles from './StickyBar.module.css';
import { smoothScrollTo } from '@/lib/smoothScroll';

export default function StickyBar({
  label = 'Apply for Next Batch',
  targetHref = '#hero-form',
} = {}) {
  const handleClick = (e) => {
    const form = document.querySelector(targetHref);
    if (!form) return; // fall back to the native hash jump

    e.preventDefault();

    const header = document.getElementById('site-header');
    const subnav = document.querySelector('nav[aria-label="Section navigation"]');
    // Clear the fixed header + the sticky section-nav strip (offsetHeight is
    // still reported even while the strip is visibility:hidden on scroll).
    const offset = (header?.offsetHeight || 60) + (subnav?.offsetHeight || 0) + 12;
    const top = form.getBoundingClientRect().top + window.scrollY - offset;

    smoothScrollTo(top);
  };

  return (
    <aside
      className={styles.bar}
      role="complementary"
      aria-label="Quick contact"
    >
      <a href={targetHref} className={styles.cta} onClick={handleClick}>
        <span>{label}</span>
        <span className={styles.chev} aria-hidden="true">›</span>
      </a>
    </aside>
  );
}
