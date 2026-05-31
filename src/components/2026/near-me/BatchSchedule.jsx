/**
 * BatchSchedule.jsx — Next 3 upcoming batch dates with seats-left + CTA.
 * Server component. Data from src/data/near-me.config.js.
 */

import { BATCHES } from '@/data/near-me.config';
import styles from './BatchSchedule.module.css';

export default function BatchSchedule() {
  return (
    <section id="batches" className={styles.section} aria-labelledby="batches-heading">
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Upcoming batches</span>
          <h2 id="batches-heading" className={styles.heading}>
            Real dates. Real seat counts. Pick one and walk in.
          </h2>
          <p className={styles.lede}>
            We cap every batch at 30 seats so trainers can actually know
            your name. Seat counts below are updated daily.
          </p>
        </header>

        <ul className={styles.list} aria-label="Upcoming batch start dates">
          {BATCHES.map((b) => {
            const low = b.seatsLeft <= 6;
            return (
              <li key={b.id} className={styles.row}>
                <div className={styles.date}>
                  <p className={styles.dateLabel}>Starts</p>
                  <p className={styles.dateValue}>{b.startDate}</p>
                </div>

                <div className={styles.details}>
                  <p className={styles.track}>{b.track}</p>
                  <p className={styles.schedule}>{b.schedule}</p>
                  <p className={styles.mode}>{b.mode} · {b.durationWeeks} weeks</p>
                </div>

                <div className={styles.meta}>
                  <span className={`${styles.seats} ${low ? styles.seats_low : ''}`}>
                    {b.seatsLeft} seat{b.seatsLeft === 1 ? '' : 's'} left
                  </span>
                  <a className={styles.cta} href="#near-me-hero-form">
                    Book your seat →
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <p className={styles.foot}>
          Can&rsquo;t find a date that works? <a href="#near-me-hero-form">Tell us what suits you</a> — we run new batches monthly.
        </p>
      </div>
    </section>
  );
}
