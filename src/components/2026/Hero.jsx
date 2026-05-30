/**
 * Hero.jsx — BlueTick 2026 Refresh
 *
 * SERVER COMPONENT. The LCP element (the H1 headline) ships pre-rendered
 * in the initial HTML payload; zero JS required for first paint.
 *
 * Phase 1 sources:
 *   - Markup:           bluetick-2026-refresh-v3.html lines 6794–7120
 *   - Mobile CSS:       lines 391–737
 *   - Desktop overrides: lines 1003–1024
 *   - Polish layer:     lines 5781–5913 (deeper aurora, gradient text)
 *
 * Asset usage:
 *   - Top-10 gold badge:   /img/top.svg (real SVG file — 31 KB) via next/image
 *   - Star pattern (cyan): inline SVG (tiny, one-shot — no file fetch)
 *   - Checkmark in chips:  inline SVG (5 instances, identical, tiny)
 *
 * Note on hero_atmospheric.webp: Phase 1's hero is CSS-only background
 * (radial gradients + animated drift). The image is NOT referenced in the
 * source markup, so it's intentionally unused here. See STATUS.md.
 */

import Image from 'next/image';
import styles from './Hero.module.css';
import HeroForm from './HeroForm';

/* ─── Inline icons (one source of truth) ──────────────────────────────────── */

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CyanBadgeStars() {
  // Three-star ornament for the "Rated" badge. Compact SVG kept inline since
  // it's small and only used once.
  return (
    <svg
      className={styles.badge_star_svg}
      width="78"
      height="27"
      viewBox="0 0 78 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M38.1231 18.3181L29.582 22.8435L32.042 14.5915L24.3037 9.13514L34.3658 8.5594L38.1231 0.662659L41.8803 8.5594L51.9424 9.13514L44.2042 14.5915L46.6641 22.8435L38.1231 18.3181Z"
        fill="white"
      />
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

/* ─── Chips data (4 highlights) ───────────────────────────────────────────── */
const CHIPS = [
  '100% Placement Record',
  'AI-Native 2026 Curriculum',
  'Trainers with 5-10 yrs Exp',
  'Next Batch Starts in 12 Days',
];

/* ─── Hero ────────────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        {/* ── Left column: copy ─────────────────────────────────────────── */}
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            #1 Digital Marketing Course in Bangalore — placement-first,
            ai-native.
          </p>

          <h1 className={styles.headline} id="hero-heading">
            <span className={styles.headline_master}>MASTER</span>
            <span className={styles.headline_dm}>DIGITAL MARKETING</span>
            <span className={styles.headline_ai}>WITH AI</span>
          </h1>

          <p className={styles.subline}>
            the way 2026 companies actually hire!
          </p>

          <ul className={styles.chips} aria-label="Program highlights">
            {CHIPS.map((label) => (
              <li key={label} className={styles.chip}>
                <CheckIcon />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className={styles.badges} aria-label="Recognitions">
            <div
              className={`${styles.badge} ${styles.badge_gold}`}
              role="img"
              aria-label="Top 10 Digital Marketing Academies in India"
            >
              <Image
                src="/img/top.svg"
                alt=""
                width={161}
                height={111}
                className={styles.badge_top_svg}
                priority
              />
            </div>
            <div className={`${styles.badge} ${styles.badge_cyan}`}>
              <p>Rated Based On Best Trained Faculty and Latest Curriculum</p>
              <CyanBadgeStars />
            </div>
          </div>
        </div>

        {/* ── Right column: form ───────────────────────────────────────── */}
        <HeroForm />
      </div>
    </section>
  );
}
