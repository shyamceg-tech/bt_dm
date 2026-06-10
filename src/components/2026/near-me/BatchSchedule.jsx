/**
 * BatchSchedule.jsx — the real recurring timetable (offline + live online).
 * Replaces the old fabricated dated-cohort list. Data from SCHEDULE in
 * src/data/near-me.config.js. Offline is the featured/default option for this
 * intent; online is the "can't make it in" fallback. Server component.
 *
 * Design: gradient cards with a per-format icon badge, animated slot rows and
 * a soft section backdrop (CSS-only motion, GPU transform/opacity, honours
 * prefers-reduced-motion) so the section reads rich on mobile without any
 * added client JS.
 */

import { SCHEDULE } from '@/data/near-me.config';
import styles from './BatchSchedule.module.css';

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  );
}

/* Offline = a real building; Online = a screen. Picked per group id. */
function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
      <path d="M3 9h18" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

const GROUP_ICON = { offline: StoreIcon, online: MonitorIcon };

export default function BatchSchedule() {
  return (
    <section id="batches" className={styles.section} aria-labelledby="batches-heading">
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Batch timings</span>
          <h2 id="batches-heading" className={styles.heading}>
            Pick a digital marketing class near you that fits your day
          </h2>
          <p className={styles.lede}>
            Classes run Monday to Friday. Offline at our Indiranagar classroom,
            1 minute from the metro, or live online for the days you can’t come
            in. Classroom batches are capped at {SCHEDULE.seatCap}.
          </p>
        </header>

        <div className={styles.groupGrid}>
          {SCHEDULE.groups.map((g, gi) => {
            const Icon = GROUP_ICON[g.id] || ClockIcon;
            return (
              <article
                key={g.id}
                className={`${styles.group} ${g.featured ? styles.group_featured : ''}`}
                style={{ '--i': gi }}
              >
                {g.featured && <span className={styles.flag}>Most popular</span>}

                <div className={styles.groupHead}>
                  <span className={styles.groupIcon} aria-hidden="true"><Icon /></span>
                  <div>
                    <span className={styles.tag}>{g.tag}</span>
                    <h3 className={styles.groupLabel}>{g.label}</h3>
                    <p className={styles.groupDays}>{g.days}</p>
                  </div>
                </div>

                <ul className={styles.slots} aria-label={`${g.label} time slots`}>
                  {g.slots.map((s) => (
                    <li key={s.time} className={styles.slot}>
                      <span className={styles.slotTime}>
                        <ClockIcon />
                        {s.time}
                      </span>
                      <span className={styles.slotBest}>{s.best}</span>
                    </li>
                  ))}
                </ul>

                <p className={styles.groupNote}>{g.note}</p>

                <a className={styles.cta} href="#near-me-hero-form">
                  {g.featured ? 'Book a seat in this batch' : 'Join the online batch'} →
                </a>
              </article>
            );
          })}
        </div>

        <p className={styles.foot}>
          {SCHEDULE.newBatchNote}{' '}
          <a href="#near-me-hero-form">Tell us what suits you</a> and we’ll fit
          you into the next one.
        </p>
      </div>
    </section>
  );
}
