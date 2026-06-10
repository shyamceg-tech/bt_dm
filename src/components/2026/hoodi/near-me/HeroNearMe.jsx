/**
 * HeroNearMe.jsx (Hoodi branch) — Near-Me intent landing page hero.
 *
 * Hoodi-branch twin of src/components/2026/near-me/HeroNearMe.jsx. Reuses the
 * shared Hero.module.css + HeroNearMe.module.css and the shared HeroNearMeForm
 * (its id #near-me-hero-form / formPosition stay so the page CTAs and StickyBar
 * keep working). The ONLY difference is the location chip copy — Hoodi /
 * Hoodi Junction instead of Indiranagar / the Metro.
 */

import Image from 'next/image';
import styles from '../../Hero.module.css';
import local from '../../near-me/HeroNearMe.module.css';
import HeroNearMeForm from '../../near-me/HeroNearMeForm';

/* ─── Inline icons (copied from Hero.jsx so the chips/badges match) ────────── */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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

/* Four short highlight chips — near-me / offline flavoured, kept terse so each
   fits one line inside its pill (matches the homepage chip grid). */
const CHIPS = [
  '100% Placement Record',
  'AI-Native 2026 Curriculum',
  'Rated 4.9 / 345+ honest reviews',
  'Practitioner Trainers, Small Batches',
];

export default function HeroNearMe() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="near-me-hero-heading"
      style={{ '--hero-form-lift': '-64px' }}
    >
      <div className={styles.inner}>
        {/* ── Left column: copy ─────────────────────────────────────────── */}
        <div className={styles.copy}>
          <h1 className={styles.eyebrow} id="near-me-hero-heading">
            #1 Digital Marketing Course Near You — placement-first, ai-native.
          </h1>

          <div className={styles.headline} aria-label="Course title">
            <span className={styles.headline_master}>MASTER</span>
            <span className={styles.headline_dm}>DIGITAL MARKETING</span>
            <span className={styles.headline_ai}>WITH AI</span>
          </div>

          {/* Location chip — Hoodi / Hoodi Junction. */}
          <p className={local.locationChip}>
            <PinIcon />
            <span>Hoodi, Bangalore · 1 min from Hoodi Junction</span>
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

        {/* ── Recognition badges (verbatim from the homepage hero) ───────── */}
        <div className={styles.badges} aria-label="Recognitions">
          <div
            className={`${styles.badge} ${styles.badge_gold}`}
            role="img"
            aria-label="Top 10 Digital Marketing Academies in India"
          >
            <Image src="/img/top.svg" alt="" width={161} height={111} className={styles.badge_top_svg} priority />
          </div>
          <div className={`${styles.badge} ${styles.badge_cyan}`}>
            <p>Rated Based On Best Trained Faculty and Latest Curriculum</p>
            <CyanBadgeStars />
          </div>
        </div>

        {/* ── Right column: form ───────────────────────────────────────── */}
        <HeroNearMeForm />
      </div>
    </section>
  );
}
