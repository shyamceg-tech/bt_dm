/**
 * CampusTour.jsx (Hoodi branch) — "Step inside our Hoodi centre" photo tour.
 *
 * Hoodi-branch twin of src/components/2026/near-me/CampusTour.jsx. Reuses the
 * shared CampusTour.module.css; pulls the Hoodi GALLERY + CAMPUS from the Hoodi
 * config. Real signage + real classroom + real students kills the "is this
 * legit?" fear and makes the offline classroom tangible.
 *
 * Server component. Plain <img> with intrinsic width/height + lazy/async to
 * avoid layout shift and protect speed.
 */

import { GALLERY, CAMPUS } from '@/data/hoodi/near-me.config';
import styles from '../../near-me/CampusTour.module.css';

export default function CampusTour() {
  return (
    <section id="campus-tour" className={styles.section} aria-labelledby="campus-tour-heading">
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Step inside</span>
          <h2 id="campus-tour-heading" className={styles.heading}>
            The digital marketing institute near you -{' '}
            <span className={styles.heading_accent}>step inside our Hoodi centre</span>
          </h2>
          <p className={styles.lede}>
            This is our centre on ITPL Road, a 1-minute walk from Hoodi Junction.
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
