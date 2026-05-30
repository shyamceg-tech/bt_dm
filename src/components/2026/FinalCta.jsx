/**
 * FinalCta.jsx — BlueTick 2026 Refresh
 *
 * RSC. Final conversion beat before the footer. Section 20 in Phase 1.
 *
 *   - Scarcity-styled headline ("in 12 days" / "9 seats left" amber pills)
 *   - Centered MiniForm (form #5 of 5; the 6th was Phase 3 territory)
 *   - WhatsApp CTA anchor below (link to #hero-form)
 *   - Office footer line
 *
 * Deep-navy backdrop with two soft radial glows. Reuses the shared MiniForm
 * (theme="light") and inline scarcity-highlight markup (same visual pattern
 * as CTA Banner #4).
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 9476–9517.
 */

import MiniForm from './MiniForm';
import styles from './FinalCta.module.css';

function WhatsAppIcon() {
  return (
    <svg
      className={styles.cta_icon}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.5 5.3 4.8.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z" />
      <path d="M19.8 4.2C17.8 2.2 15 1 12 1 5.9 1 1 5.9 1 11.9c0 1.9.5 3.8 1.4 5.4L1 23l5.8-1.5c1.6.9 3.4 1.3 5.2 1.3 6.1 0 11-4.9 11-10.9 0-2.9-1.1-5.7-3.2-7.7zM12 20.9c-1.7 0-3.3-.4-4.7-1.3l-.3-.2L4 20.3l.9-3-.2-.3c-1-1.5-1.5-3.3-1.5-5.1 0-5 4-9 9-9 2.4 0 4.7.9 6.4 2.6 1.7 1.7 2.6 4 2.6 6.4 0 4.9-4 8.9-9 8.9z" />
    </svg>
  );
}

export default function FinalCta() {
  return (
    <section
      id="section-20"
      className={styles.section}
      aria-labelledby="final-cta-heading"
    >
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 id="final-cta-heading" className={styles.heading}>
            Bangalore&rsquo;s next batch starts{' '}
            <span className={styles.scarcity_hl}>in 12 days</span>.{' '}
            <span className={styles.scarcity_hl}>9 seats left</span>.
          </h2>

          {/* MiniForm — form #5 of 5 stubs */}
          <div className={styles.form_wrap}>
            <MiniForm
              id="final-cta-form"
              formPosition="final-cta"
              theme="light"
              ariaLabel="Apply for the next batch — final closing form"
            />
          </div>

          {/* WhatsApp CTA */}
          <div className={styles.stack}>
            <div className={styles.cta_block}>
              <a
                href="#hero-form"
                className={styles.cta}
                aria-describedby="final-cta-primary-sub"
              >
                <WhatsAppIcon />
                <span>START YOUR DM CAREER</span>
                <span className={styles.cta_arrow} aria-hidden="true">→</span>
              </a>
              <p id="final-cta-primary-sub" className={styles.cta_sub}>
                Low commitment. One WhatsApp message. No spam.
              </p>
            </div>
          </div>

          <p className={styles.footer_line}>
            Or visit us:{' '}
            <strong>[BlueTick Academy address, Bangalore]</strong>. Office hours:
            Mon&ndash;Sat, 10 AM&ndash;7 PM.
          </p>
        </div>
      </div>
    </section>
  );
}
