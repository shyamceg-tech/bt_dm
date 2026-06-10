/**
 * HeroFees.jsx — Fees landing page hero.
 *
 * Replicates the HOMEPAGE hero (Hero.jsx) one-to-one — same design, background,
 * layout, badges and form — by reusing Hero.module.css and the shared HeroForm.
 * Only the fee-specific copy differs:
 *   - H1 (smaller eyebrow font) carries the exact head term "Digital Marketing
 *     Course Fees in Bangalore".
 *   - The course title stays "MASTER DIGITAL MARKETING WITH AI" like the homepage.
 *   - The "Transparent fees · No-cost EMI · GST included" line sits below the
 *     title; the four fee proofs render as the homepage chip row.
 *
 * Server component for the copy column; the form is the shared HeroForm client
 * island (identical to the homepage form), so lead capture is wired the same way.
 */

import Image from 'next/image';
import styles from '../Hero.module.css';
import online from '../online/HeroOnline.module.css';
import HeroForm from '../HeroForm';
import { HERO } from '@/data/fees.config';

/* ─── Inline icons (match the homepage hero) ──────────────────────────────── */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CyanBadgeStars() {
  return (
    <svg className={styles.badge_star_svg} width="78" height="27" viewBox="0 0 78 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M38.1231 18.3181L29.582 22.8435L32.042 14.5915L24.3037 9.13514L34.3658 8.5594L38.1231 0.662659L41.8803 8.5594L51.9424 9.13514L44.2042 14.5915L46.6641 22.8435L38.1231 18.3181Z" fill="white" />
      <mask id="bt-fee-star-l" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="11" width="19" height="16">
        <path d="M11.2691 22.8989L6.70591 26.8724L6.74503 21.3394L0.856445 18.9057L7.10496 17.2273L8.02826 11.7511L11.8497 16.2448L18.3094 15.294L14.4239 19.7495L17.491 24.6394L11.2691 22.8989Z" fill="white" />
      </mask>
      <g mask="url(#bt-fee-star-l)">
        <path d="M11.2691 22.8989L6.70591 26.8724L6.74503 21.3394L0.856445 18.9057L7.10496 17.2273L8.02826 11.7511L11.8497 16.2448L18.3094 15.294L14.4239 19.7495L17.491 24.6394L11.2691 22.8989Z" fill="white" />
      </g>
      <mask id="bt-fee-star-r" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="59" y="11" width="19" height="16">
        <path d="M66.7919 22.8989L71.3535 26.8724L71.3144 21.3394L77.203 18.9057L70.9545 17.2273L70.0312 11.7511L66.2082 16.2448L59.75 15.294L63.6356 19.7495L60.5685 24.6394L66.7919 22.8989Z" fill="white" />
      </mask>
      <g mask="url(#bt-fee-star-r)">
        <path d="M66.7919 22.8989L71.3535 26.8724L71.3144 21.3394L77.203 18.9057L70.9545 17.2273L70.0312 11.7511L66.2082 16.2448L59.75 15.294L63.6356 19.7495L60.5685 24.6394L66.7919 22.8989Z" fill="white" />
      </g>
    </svg>
  );
}

export default function HeroFees() {
  return (
    /* --hero-form-lift: this page's copy column is taller (extra fees-promise
       chip line), so it needs less lift than the homepage default to keep the
       badges bottom-aligned with the last chip row. Desktop-only var. */
    <section
      className={styles.hero}
      aria-labelledby="fees-hero-heading"
      style={{ '--hero-form-lift': '36px' }}
    >
      <div className={styles.inner}>
        {/* ── Left column: copy ─────────────────────────────────────────── */}
        <div className={styles.copy}>
          <h1 className={styles.eyebrow} id="fees-hero-heading">
            {HERO.h1}
          </h1>

          <div className={styles.headline} aria-label="Course title">
            <span className={styles.headline_master}>MASTER</span>
            <span className={styles.headline_dm}>DIGITAL MARKETING</span>
            <span className={styles.headline_ai}>WITH AI</span>
          </div>

          {/* Transparent-fees line, below the title — same status-chip design as
              the online page hero (green pill + pulsing dot). */}
          <p className={online.liveChip}>
            <span className={online.liveDot} aria-hidden="true" />
            <span>{HERO.chip}</span>
          </p>

          {/* Four fee proofs as the homepage chip row */}
          <ul className={styles.chips} aria-label="What the fee includes">
            {HERO.proofs.map((label) => (
              <li key={label} className={styles.chip}>
                <CheckIcon />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Recognition badges (identical to the homepage hero) ────────── */}
        <div className={styles.badges} aria-label="Recognitions">
          <div className={`${styles.badge} ${styles.badge_gold}`} role="img" aria-label="Top 10 Digital Marketing Academies in India">
            <Image src="/img/top.svg" alt="" width={161} height={111} className={styles.badge_top_svg} priority />
          </div>
          <div className={`${styles.badge} ${styles.badge_cyan}`}>
            <p>Rated Based On Best Trained Faculty and Latest Curriculum</p>
            <CyanBadgeStars />
          </div>
        </div>

        {/* ── Right column: the homepage form ──────────────────────────── */}
        <HeroForm />
      </div>
    </section>
  );
}
