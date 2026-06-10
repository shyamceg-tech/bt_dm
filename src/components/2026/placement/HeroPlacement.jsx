/**
 * HeroPlacement.jsx — "Digital marketing course with placement" intent hero.
 *
 * Mirrors the homepage <Hero /> 1:1 (same deep-navy aurora background, layout,
 * small H1 eyebrow, big animated "MASTER / DIGITAL MARKETING / WITH AI" course
 * title, 2-col benefit chips, recognition badges, lead form on the right) by
 * reusing the homepage hero design via HeroOnline.module.css (a 1:1 superset of
 * Hero.module.css). The one placement-only element is the green status badge
 * placed directly below the course title (the same .liveChip box as the online
 * page), reworded to "Placement-First · 100% Job Guaranteed · 500+ Hiring
 * Partners".
 *
 * H1 (the small eyebrow) carries the exact intent term once for Google Ads
 * exact-match relevance.
 */

import Image from 'next/image';
import HeroPlacementForm from './HeroPlacementForm';
import styles from '../online/HeroOnline.module.css';

/* Inline icons (one source of truth, identical to the homepage hero). */
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
      <mask id="bt-star-l" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="11" width="19" height="16">
        <path d="M11.2691 22.8989L6.70591 26.8724L6.74503 21.3394L0.856445 18.9057L7.10496 17.2273L8.02826 11.7511L11.8497 16.2448L18.3094 15.294L14.4239 19.7495L17.491 24.6394L11.2691 22.8989Z" fill="white" />
      </mask>
      <g mask="url(#bt-star-l)">
        <path d="M11.2691 22.8989L6.70591 26.8724L6.74503 21.3394L0.856445 18.9057L7.10496 17.2273L8.02826 11.7511L11.8497 16.2448L18.3094 15.294L14.4239 19.7495L17.491 24.6394L11.2691 22.8989Z" fill="white" />
      </g>
      <mask id="bt-star-r" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="59" y="11" width="19" height="16">
        <path d="M66.7919 22.8989L71.3535 26.8724L71.3144 21.3394L77.203 18.9057L70.9545 17.2273L70.0312 11.7511L66.2082 16.2448L59.75 15.294L63.6356 19.7495L60.5685 24.6394L66.7919 22.8989Z" fill="white" />
      </mask>
      <g mask="url(#bt-star-r)">
        <path d="M66.7919 22.8989L71.3535 26.8724L71.3144 21.3394L77.203 18.9057L70.9545 17.2273L70.0312 11.7511L66.2082 16.2448L59.75 15.294L63.6356 19.7495L60.5685 24.6394L66.7919 22.8989Z" fill="white" />
      </g>
    </svg>
  );
}

/* Benefit chips — placement-tuned, homepage 2-col (2x2) layout. "500+ Hiring
   Partners" is intentionally omitted: it already sits in the green badge box
   directly above, so this avoids repeating it. */
const CHIPS = [
  '3.2LPA to 22LPA range',
  'Avg ₹5.6 LPA Package',
  'AI-Native 2026 Curriculum',
  'Indiranagar, Next to Metro Station',
];

export default function HeroPlacement() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="placement-hero-heading"
      /* --hero-form-lift: this page's copy column is taller (extra status badge),
         so it needs only a small lift to bottom-align the badges with the last
         chip row. Desktop-only var. */
      style={{ '--hero-form-lift': '35px' }}
    >
      <div className={styles.inner}>
        {/* ── Left column: copy ─────────────────────────────────────────── */}
        <div className={styles.copy}>
          <h1 className={styles.eyebrow} id="placement-hero-heading">
            #1 Digital Marketing Course with placement in Bangalore
          </h1>

          <div className={styles.headline} aria-label="Course title">
            <span className={styles.headline_master}>MASTER</span>
            <span className={styles.headline_dm}>DIGITAL MARKETING</span>
            <span className={styles.headline_ai}>WITH AI</span>
          </div>

          {/* Placement status badge — same green box/design as the online page. */}
          <p className={styles.liveChip}>
            <span className={styles.liveDot} aria-hidden="true" />
            <span>Placement-First · 100% Job Guaranteed · 500+ Hiring Partners</span>
          </p>

          <ul className={styles.chips} aria-label="Program highlights">
            {CHIPS.map((label) => (
              <li key={label} className={styles.chip}>
                <CheckIcon />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Recognition badges (same as homepage) ─────────────────────── */}
        <div className={styles.badges} aria-label="Recognitions">
          <div className={`${styles.badge} ${styles.badge_gold}`} role="img" aria-label="Top 10 Digital Marketing Academies in India">
            <Image src="/img/top.svg" alt="" width={161} height={111} className={styles.badge_top_svg} priority />
          </div>
          <div className={`${styles.badge} ${styles.badge_cyan}`}>
            <p>Rated Based On Best Trained Faculty and Latest Curriculum</p>
            <CyanBadgeStars />
          </div>
        </div>

        {/* ── Right column: form ───────────────────────────────────────── */}
        <HeroPlacementForm />
      </div>
    </section>
  );
}
