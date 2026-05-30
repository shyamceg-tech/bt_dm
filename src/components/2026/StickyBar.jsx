/**
 * StickyBar.jsx — BlueTick 2026 Refresh
 *
 * RSC. Mobile-only fixed-bottom CTA bar. Visible <1024px, hidden ≥1024px
 * via CSS (no JS conditional rendering). Anchor links to the hero form
 * (#hero-form), which is the canonical conversion point.
 *
 * Honors `env(safe-area-inset-bottom)` so it doesn't clash with the iOS
 * home indicator. Footer.module.css adds matching bottom padding on
 * mobile so the sticky bar doesn't cover footer content.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 9525–9534.
 */

import styles from './StickyBar.module.css';

function WhatsAppIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.5 5.3 4.8.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z" />
      <path d="M19.8 4.2C17.8 2.2 15 1 12 1 5.9 1 1 5.9 1 11.9c0 1.9.5 3.8 1.4 5.4L1 23l5.8-1.5c1.6.9 3.4 1.3 5.2 1.3 6.1 0 11-4.9 11-10.9 0-2.9-1.1-5.7-3.2-7.7zM12 20.9c-1.7 0-3.3-.4-4.7-1.3l-.3-.2L4 20.3l.9-3-.2-.3c-1-1.5-1.5-3.3-1.5-5.1 0-5 4-9 9-9 2.4 0 4.7.9 6.4 2.6 1.7 1.7 2.6 4 2.6 6.4 0 4.9-4 8.9-9 8.9z" />
    </svg>
  );
}

export default function StickyBar() {
  return (
    <aside
      className={styles.bar}
      role="complementary"
      aria-label="Quick contact"
    >
      <a href="#hero-form" className={styles.cta}>
        <WhatsAppIcon />
        <span>Apply for Next Batch</span>
        <span className={styles.chev} aria-hidden="true">›</span>
      </a>
    </aside>
  );
}
