/**
 * TrustStrip.jsx — BlueTick 2026 Refresh
 *
 * RSC. Pure CSS marquee infinite-scroll, zero JS.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 7125–7203.
 *
 * All company logos served from /public/img/company/ as .webp files.
 * Three rows with alternating scroll directions for visual depth.
 */

import Image from 'next/image';
import styles from './TrustStrip.module.css';

/* ─── Logo data ────────────────────────────────────────────────────────────
   Tuple shape: [label, /img/company/ filename]
   All companies now have logo files from the uploaded Company logos pack. */

const ROW_1 = [
  ['Amazon',      'amazon.webp'],
  ['Google',      'google.webp'],
  ['Microsoft',   'microsoft.webp'],
  ['Adobe',       'adobe.webp'],
  ['Accenture',   'accenture.webp'],
  ['TCS',         'tcs.webp'],
  ['Cognizant',   'cognizant.webp'],
  ['Salesforce',  'salesforce.webp'],
  ['Flipkart',    'flipkart.webp'],
];

const ROW_2 = [
  ['Swiggy',      'swiggy.webp'],
  ['Meesho',      'meesho.webp'],
  ['PhonePe',     'phonepe.webp'],
  ['Paytm',       'paytm.webp'],
  ['Nykaa',       'nykaa.webp'],
  ['Ola',         'ola.webp'],
  ['Lenskart',    'lenskart.webp'],
  ['PharmEasy',   'pharmeasy.webp'],
  ['Ninjacart',   'ninjacart.webp'],
];

const ROW_3 = [
  ['Porter',      'porter.webp'],
  ['Homelane',    'homelane.webp'],
  ['Fortis',      'fortis.webp'],
  ['BookMyScans', 'bookmyscans.webp'],
  ['Decfort',     'decfort.webp'],
  ['Edumerge',    'edumerge.webp'],
  ['All Care Dental', 'allcare-dental.webp'],
];

/* ─── Logo cell ────────────────────────────────────────────────────────── */
function LogoCell({ label, file, ariaHidden }) {
  return (
    <span
      className={styles.logo}
      aria-hidden={ariaHidden ? 'true' : undefined}
    >
      <Image
        src={`/img/company/${file}`}
        alt={ariaHidden ? '' : label}
        fill
        sizes="120px"
        className={styles.logo_img}
      />
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
            logos={ROW_1}
          />
          <MarqueeRow
            label="Funded Startups"
            logos={ROW_2}
            variantClass={styles.marquee_row2}
          />
          <MarqueeRow
            label="Hiring Partners"
            logos={ROW_3}
            variantClass={styles.marquee_row3}
          />
        </div>
      </div>
    </section>
  );
}
