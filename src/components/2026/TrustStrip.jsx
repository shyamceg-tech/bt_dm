/**
 * TrustStrip.jsx — BlueTick 2026 Refresh
 *
 * RSC. Pure CSS marquee infinite-scroll, zero JS.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 7125–7203.
 *
 * Logo strategy (master prompt § 3.1):
 *   - Real WebPs in /img/company/ used wherever available.
 *   - Text wordmarks fall back for brands without uploaded logos
 *     (the master prompt explicitly accepts this).
 *
 * Mobile shows a single mixed marquee (no row labels). Desktop ≥1024px
 * stacks three labeled rows with alternating directions.
 *
 * Each row duplicates its logo list once; the `bt-marquee-scroll` keyframe
 * translates -50% for a seamless loop. The second copy is `aria-hidden="true"`.
 */

import Image from 'next/image';
import styles from './TrustStrip.module.css';

/* ─── Logo data ────────────────────────────────────────────────────────────
   Tuple shape: [label, optional /img/company/ filename (kebab-case .webp)]
   Brands without a logo file degrade to text wordmark with no extra work. */

const MNCS = [
  ['Amazon',      'amazon.webp'],
  ['Google',      'google.webp'],
  ['Microsoft',   'microsoft.webp'],
  ['Adobe',       'adobe.webp'],
  ['Accenture',   'accenture.webp'],
  ['TCS',         'tcs.webp'],
  ['Cognizant',   'cognizant.webp'],
  ['Salesforce',  'salesforce.webp'],
];

const STARTUPS = [
  ['Razorpay',    null],              // no upload — text wordmark fallback
  ['Swiggy',      'swiggy.webp'],
  ['Flipkart',    'flipkart.webp'],
  ['Meesho',      'meesho.webp'],
  ['PhonePe',     'phonepe.webp'],
  ['Paytm',       'paytm.webp'],
  ['Nykaa',       'nykaa.webp'],
  ['Freshworks',  null],              // no upload — text wordmark fallback
];

/* Agency row — Phase 1 lists Dentsu/WPP/Ogilvy/Madison/FCB/Schbang/Wondrlab/
   Tonic; none in the uploaded logo pack. All degrade to text wordmarks.
   Per user direction: don't waste time chasing missing logos; flag and move on. */
const AGENCIES = [
  ['Dentsu',    null],
  ['WPP',       null],
  ['Ogilvy',    null],
  ['Madison',   null],
  ['FCB',       null],
  ['Schbang',   null],
  ['Wondrlab',  null],
  ['Tonic',     null],
];

/* ─── Logo cell (image where available, text wordmark otherwise) ──────────── */
function LogoCell({ label, file, ariaHidden }) {
  if (file) {
    return (
      <span
        className={styles.logo}
        aria-hidden={ariaHidden ? 'true' : undefined}
      >
        <Image
          src={`/img/company/${file}`}
          alt={ariaHidden ? '' : label}
          width={120}
          height={36}
          className={styles.logo_img}
          /* Marquee logos are far below the fold and continuously scrolling
             — non-priority. Native lazy via next/image default. */
          unoptimized={false}
        />
      </span>
    );
  }
  return (
    <span
      className={styles.logo}
      aria-hidden={ariaHidden ? 'true' : undefined}
    >
      {label}
    </span>
  );
}

/* ─── A single marquee row (duplicates its logo list for seamless loop) ────── */
function MarqueeRow({ label, logos, variantClass }) {
  const rowClass = [styles.marquee, variantClass].filter(Boolean).join(' ');
  return (
    <div className={rowClass}>
      {label && <p className={styles.row_label}>{label}</p>}
      <div className={styles.row}>
        {logos.map(([name, file]) => (
          <LogoCell key={name} label={name} file={file} />
        ))}
        {/* Second copy for seamless loop */}
        {logos.map(([name, file]) => (
          <LogoCell
            key={`dup-${name}`}
            label={name}
            file={file}
            ariaHidden
          />
        ))}
      </div>
    </div>
  );
}

/* ─── TrustStrip ──────────────────────────────────────────────────────────── */
export default function TrustStrip() {
  /* Mobile concatenates all 3 sets into a single mixed marquee.
     Desktop reveals the three labeled rows (CSS controls the variant). */
  return (
    <section className={styles.section} aria-labelledby="trust-heading">
      <div className={styles.inner}>
        <h2 className={styles.heading} id="trust-heading">
          Trusted by 10,000+ digital marketers across India
        </h2>
        <p className={styles.eyebrow}>Our alumni work at</p>

        <div className={styles.group}>
          <MarqueeRow
            label="MNCs & MAANG"
            logos={MNCS}
          />
          <MarqueeRow
            label="Funded Startups"
            logos={STARTUPS}
            variantClass={styles.marquee_row2}
          />
          <MarqueeRow
            label="Top Agencies"
            logos={AGENCIES}
            variantClass={styles.marquee_row3}
          />
        </div>
      </div>
    </section>
  );
}
