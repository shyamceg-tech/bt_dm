/**
 * DayInLife.jsx — BlueTick 2026 Refresh
 *
 * RSC. Image-led "Inside a BlueTick Tuesday" section. Phase 1's markup
 * uses an SVG placeholder card; this React port substitutes the real
 * /img/2026/day_in_life_classroom.webp asset (already placed in 2A).
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 8940–8972.
 */

import Image from 'next/image';
import styles from './DayInLife.module.css';

export default function DayInLife() {
  return (
    <section
      id="section-13"
      className={styles.section}
      aria-labelledby="day-in-life-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>Inside a BlueTick Tuesday</span>
          <h2 id="day-in-life-heading" className={styles.heading}>
            What a Tuesday at BlueTick actually looks like
          </h2>
        </header>

        <div className={styles.photo_wrap}>
          <div className={styles.photo}>
            <Image
              src="/img/2026/day_in_life_classroom.webp"
              alt="A small BlueTick batch reviewing live Google Ads campaigns; trainer at the whiteboard with a real-time performance dashboard"
              width={1280}
              height={800}
              className={styles.photo_img}
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <aside className={styles.caption}>
            <p className={styles.stats}>
              <span>Batch size: capped at 24.</span>
              <span>Trainer-to-student ratio: 1:15.</span>
            </p>
            <span className={styles.time}>Tuesday &middot; 10:30 AM</span>
            <p className={styles.body}>
              Students reviewing each other&rsquo;s live Google Ads campaigns.
              Trainer pulls up a real-time performance dashboard from one of his
              agency accounts. Class breaks into groups of 4 to optimize a real
              client funnel due tomorrow.
            </p>
          </aside>
        </div>

        <p className={styles.closing}>
          No theory lectures. Every session is a live build. Every Friday is
          portfolio review.
        </p>
      </div>
    </section>
  );
}
