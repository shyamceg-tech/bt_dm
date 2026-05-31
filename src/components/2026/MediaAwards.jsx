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
  return (
    <section
      className={styles.section}
      aria-labelledby="media-awards-heading"
    >
      <div className={styles.container}>
        <h2 id="media-awards-heading" className={styles.heading} data-reveal>
          Media &amp; Awards
        </h2>

        {/* Mobile marquee */}
        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.track}>
            {LOGOS.map((l) => (
              <Logo key={l.file} {...l} />
            ))}
            {LOGOS.map((l) => (
              <Logo key={`dup-${l.file}`} {...l} dup />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div
          className={styles.grid}
          role="list"
          aria-label="Press and media coverage"
        >
          {LOGOS.map((l) => (
            <div key={l.file} className={styles.cell} role="listitem">
              <Logo {...l} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
