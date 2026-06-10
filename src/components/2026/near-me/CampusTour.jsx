/**
 * CampusTour.jsx — "Step inside our Indiranagar centre" photo tour.
 *
 * Built for near-me / offline intent: the single biggest lever in a local
 * decision is SEEING the real place. Real signage + real classroom + real
 * students kills the "is this legit?" fear that this segment carries, and
 * makes the offline classroom tangible. No "why offline" argument — the buyer
 * has already decided; this just proves the place is real and worth the trip.
 *
 * Server component. Plain <img> (images are pre-optimised webp, 14–37KB) with
 * intrinsic width/height + lazy/async to avoid layout shift and protect speed.
 */

import { GALLERY, CAMPUS } from '@/data/near-me.config';
import styles from './CampusTour.module.css';

export default function CampusTour() {
  return (
    <section id="campus-tour" className={styles.section} aria-labelledby="campus-tour-heading">
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Step inside</span>
          <h2 id="campus-tour-heading" className={styles.heading}>
            The digital marketing institute near you -{' '}
            <span className={styles.heading_accent}>step inside our Indiranagar centre</span>
          </h2>
          <p className={styles.lede}>
            This is our centre on CMH Road, a 1-minute walk from Indiranagar
            Metro.
          </p>
        </header>

        <div className={styles.mosaic}>
          {GALLERY.map((g) => (
            <figure
              key={g.src}
              className={`${styles.tile} ${styles[g.tile] || ''}`}
            >
              <img
                className={styles.img}
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                loading="lazy"
                decoding="async"
              />
              <figcaption className={styles.caption}>{g.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.footRow}>
          <div className={styles.footCtas}>
            <a className={styles.ctaPrimary} href="#near-me-hero-form">
              Apply for the next batch
            </a>
            <a
              className={styles.ctaGhost}
              href={CAMPUS.gbpLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              See our reviews on Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
