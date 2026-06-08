/**
 * MediaAwards.jsx — BlueTick 2026 Refresh
 *
 * RSC. Section 19.5 "Media & Awards". Four press / coverage logos.
 *
 * Mobile: continuous CSS marquee (uses the global `bt-marquee-scroll`
 * keyframe from globals.css). Track is duplicated once for seamless loop
 * (second copy aria-hidden). Pauses on hover/focus.
 *
 * Desktop ≥768px: 2-col grid → ≥1024px: 4-col grid.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 9445–9474.
 *
 * Logo files (already present in /public/img/ from prior batches):
 *   logo_1.png — YourStory
 *   logo_2.png — Hindustan Times
 *   logo_3.png — The Economic Times
 *   logo_4.png — BusinessLine
 */

import Image from 'next/image';
import styles from './MediaAwards.module.css';

const LOGOS = [
  { file: 'logo_1.png', alt: 'YourStory' },
  { file: 'logo_2.png', alt: 'Hindustan Times' },
  { file: 'logo_3.png', alt: 'The Economic Times' },
  { file: 'logo_4.png', alt: 'BusinessLine' },
];

function Logo({ alt, file, dup }) {
  return (
    <Image
      src={`/img/${file}`}
      alt={dup ? '' : alt}
      width={150}
      height={60}
      className={styles.logo}
      aria-hidden={dup ? 'true' : undefined}
    />
  );
}

export default function MediaAwards() {
  // The 4 logos repeated 3× form one "half" wide enough to cover even wide
  // desktops; the half is rendered twice so the -50% loop is seamless. The
  // first occurrence of each logo keeps its real alt for accessibility; every
  // repeat is decorative (alt="" + aria-hidden).
  const half = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section
      className={styles.section}
      aria-labelledby="media-awards-heading"
    >
      <div className={styles.container}>
        <h2 id="media-awards-heading" className={styles.heading} data-reveal>
          Media &amp; Awards
        </h2>

        {/* Continuous slow marquee — runs on every viewport */}
        <div className={styles.marquee}>
          <div className={styles.track}>
            {half.map((l, i) => (
              <Logo key={`a-${i}`} {...l} dup={i >= LOGOS.length} />
            ))}
            {half.map((l, i) => (
              <Logo key={`b-${i}`} {...l} dup />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
