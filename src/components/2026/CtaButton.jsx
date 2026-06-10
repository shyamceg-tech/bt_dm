'use client';

/**
 * CtaButton.jsx — BlueTick 2026 Refresh
 *
 * The orange pulse-ring CTA anchor used by CTA Banner #3 (cosmic, button-only).
 * Split into its own client island so in-page anchors (e.g. "#hero-form") get
 * the same deterministic, interruption-proof scroll as the sticky bar: a raw
 * hash jump animates over the full page height and gets hijacked by the home
 * page's section IntersectionObservers, so it would randomly stall mid-page
 * with the form stuck behind the header. For real (non-hash) links it behaves
 * like a normal anchor. Styling lives in CtaBanner.module.css.
 */

import styles from './CtaBanner.module.css';
import { smoothScrollToHash } from '@/lib/smoothScroll';

export default function CtaButton({ href, children, ariaLabel }) {
  const onClick = (e) => {
    // Only intercept in-page hash targets; let everything else navigate.
    if (href?.startsWith('#') && smoothScrollToHash(href)) {
      e.preventDefault();
    }
  };

  return (
    <a className={styles.cta_btn} href={href} aria-label={ariaLabel} onClick={onClick}>
      {children}
      <span className={styles.cta_btn_arrow} aria-hidden="true">→</span>
    </a>
  );
}
