/**
 * HeroOnline.jsx — Online intent landing page hero (/digital-marketing-course-online)
 *
 * Mirrors the homepage <Hero /> layout 1:1 (Hero.jsx): a small H1 eyebrow that
 * carries the exact head term, a large three-line "course title" with the
 * animated gradient sweep, a 2x2 grid of benefit chips, the recognition badges,
 * and the lead form on the right. Only the copy is rewired for online / live-
 * class intent:
 *   - H1 (small, like the homepage eyebrow): "Digital Marketing Course Online"
 *   - Course title (big): "Digital Marketing / with AI / Online"
 *   - A live-status chip (pulsing dot) sits directly BELOW the course title.
 *
 * Server component for the copy column; HeroOnlineForm is a client island that
 * posts to /api/bigin via the shared submitToBigin helper. Layout + form-card
 * styles live in HeroOnline.module.css (a superset of the homepage hero CSS).
 */

import Image from 'next/image';
import HeroOnlineForm from './HeroOnlineForm';
import styles from './HeroOnline.module.css';

/* Inline icons (one source of truth) */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* Three-star ornament for the cyan "Rated" badge — identical to the homepage. */
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

/* Benefit chips (4 highlights) — online-tuned, short enough to fit the boxes. */
const CHIPS = [
  '100% Placement Support',
  'AI-Native 2026 Curriculum',
  'Live, Instructor-Led Classes',
  'Every Session Recorded',
];

export default function HeroOnline() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="online-hero-heading"
      /* --hero-form-lift: tuned to bottom-align the badges with this page's copy
         column (different height from the homepage). Desktop-only var. */
      style={{ '--hero-form-lift': '-11px' }}
    >
      <div className={styles.inner}>
        {/* ── Left column: copy ─────────────────────────────────────────── */}
        <div className={styles.copy}>
          <h1 className={styles.eyebrow} id="online-hero-heading">
            #1 Digital Marketing Course Online - placement-first, ai-native.
          </h1>

          <div className={styles.headline} aria-label="Course title">
            <span className={styles.headline_master}>DIGITAL MARKETING</span>
            <span className={styles.headline_dm}>WITH AI</span>
            {/* Gradient color-sweep animation lives on .headline_ai. */}
            <span className={styles.headline_ai}>ONLINE</span>
          </div>

          {/* Live-status chip — moved directly below the course title. */}
          <p className={styles.liveChip}>
            <span className={styles.liveDot} aria-hidden="true" />
            <span>Live online sessions · Recordings included · Learn from anywhere</span>
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
        <HeroOnlineForm />
      </div>
    </section>
  );
}
