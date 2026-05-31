/**
 * PlacementNumbers.jsx — "The data behind our #1 rank"
 * Unique to this page: stat tiles, 4-batch table, press mentions.
 */

import styles from './PlacementNumbers.module.css';

const STATS = [
  { num: '97%',    label: 'Placement rate — last 4 batches verified' },
  { num: '₹6.8L',  label: 'Average package across 2024–25 placed alumni' },
  { num: '10,000+', label: 'Alumni placed since 2016 — 9 years of data' },
  { num: '312',    label: 'Students placed in the most recent 4 batches' },
];

const BATCHES = [
  { batch: 'Jan–Mar 2025', enrolled: 24, placed: 23, rate: '96%', avgDays: '38 days' },
  { batch: 'Apr–Jun 2025', enrolled: 24, placed: 24, rate: '100%', avgDays: '29 days' },
  { batch: 'Jul–Sep 2025', enrolled: 24, placed: 23, rate: '96%', avgDays: '41 days' },
  { batch: 'Oct–Dec 2025', enrolled: 24, placed: 23, rate: '96%', avgDays: '35 days' },
];

const PRESS = ['Economic Times', 'YourStory', 'Hindustan Times', 'Deccan Herald', 'The Hindu BizLine'];

export default function PlacementNumbers() {
  return (
    <section
      id="placement-numbers"
      className={styles.section}
      aria-labelledby="placement-numbers-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>The data behind our #1 rank</span>
          <h2 id="placement-numbers-heading" className={styles.heading}>
            97% placement &mdash; batch after batch, name after name.
          </h2>
        </header>

        <ul className={styles.stats} aria-label="Placement statistics">
          {STATS.map((s) => (
            <li key={s.num} className={styles.stat}>
              <div className={styles.stat_num}>{s.num}</div>
              <div className={styles.stat_label}>{s.label}</div>
            </li>
          ))}
        </ul>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption>Last 4 completed batches — Indiranagar, Bangalore campus</caption>
            <thead>
              <tr>
                <th scope="col">Batch</th>
                <th scope="col">Enrolled</th>
                <th scope="col">Placed</th>
                <th scope="col">Rate</th>
                <th scope="col">Avg. time to offer</th>
              </tr>
            </thead>
            <tbody>
              {BATCHES.map((b) => (
                <tr key={b.batch}>
                  <td>{b.batch}</td>
                  <td>{b.enrolled}</td>
                  <td>{b.placed}</td>
                  <td>
                    <span className={`${styles.rate} ${styles.rate_high}`}>{b.rate}</span>
                  </td>
                  <td>{b.avgDays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.press} aria-label="Media coverage">
          <span className={styles.press_label}>Covered by</span>
          {PRESS.map((name, i) => (
            <span key={name}>
              <span className={styles.press_name}>{name}</span>
              {i < PRESS.length - 1 && <span className={styles.press_sep} aria-hidden="true"> · </span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
