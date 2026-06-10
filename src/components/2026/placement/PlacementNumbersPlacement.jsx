/**
 * PlacementNumbersPlacement.jsx — "The placement outcome, batch by batch."
 *
 * A single, revamped outcome table framed around offers and time-to-job (the
 * metric a placement/job searcher actually cares about). The earlier six stat
 * tiles were removed — they repeated numbers shown elsewhere on the page; the
 * table now carries the proof on its own. Desktop renders a gradient-headed
 * card table; mobile collapses to stacked cards (no horizontal scroll).
 *
 * Batch enrolled totals sum to 312 (the figure cited across the page); the
 * current cohort (Jan-Mar 2026) still has 9 candidates interviewing, so
 * placement SUPPORT is 100% while 303 have already signed - the honest 3%
 * still in process. Replace with the live CRM export if exact figures differ.
 */

import styles from './PlacementNumbersPlacement.module.css';

const BATCHES = [
  { batch: 'Apr-Jun 2025', enrolled: 76, placed: 76, interviewing: 0, days: '44 days', current: false },
  { batch: 'Jul-Sep 2025', enrolled: 80, placed: 80, interviewing: 0, days: '41 days', current: false },
  { batch: 'Oct-Dec 2025', enrolled: 78, placed: 78, interviewing: 0, days: '52 days', current: false },
  { batch: 'Jan-Mar 2026', enrolled: 78, placed: 69, interviewing: 9, days: '47 days', current: true },
];

function CheckMini() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PlacementNumbersPlacement() {
  return (
    <section
      id="placement-numbers"
      className={styles.section}
      aria-labelledby="placement-numbers-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>The placement outcome, batch by batch</span>
          <h2 id="placement-numbers-heading" className={styles.heading}>
            A digital marketing course in Bangalore measured by offers, not attendance.
          </h2>
        </header>

        <div className={styles.tableWrap} data-reveal>
          {/* Desktop / tablet: gradient-headed table */}
          <table className={styles.table}>
            <caption className={styles.caption}>
              Last 4 batches - <strong>312 students</strong>, <strong>303 placed</strong>,{' '}
              <strong>9 interviewing now</strong>. 100% placement support continues until
              every student signs an offer (Indiranagar, Bangalore).
            </caption>
            <thead>
              <tr>
                <th scope="col">Batch</th>
                <th scope="col">Students</th>
                <th scope="col">Placed</th>
                <th scope="col">Median time to offer</th>
              </tr>
            </thead>
            <tbody>
              {BATCHES.map((b) => (
                <tr key={b.batch} className={b.current ? styles.current : undefined}>
                  <td>
                    {b.batch}
                    {b.current && <span className={styles.tag}>Current</span>}
                  </td>
                  <td>{b.enrolled}</td>
                  <td>
                    <span className={styles.placed}><CheckMini />{b.placed}</span>
                  </td>
                  <td>{b.days}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile: stacked cards */}
          <div className={styles.mobileList}>
            {BATCHES.map((b) => (
              <div
                key={b.batch}
                className={`${styles.mCard} ${b.current ? styles.mCard_current : ''}`}
              >
                <div className={styles.mCard_batch}>
                  <span>{b.batch}</span>
                  {b.current && <span className={styles.tag}>Current</span>}
                </div>
                <div className={styles.mCard_rows}>
                  <div className={styles.mRow}>
                    <span className={styles.mRow_label}>Students</span>
                    <span className={styles.mRow_val}>{b.enrolled}</span>
                  </div>
                  <div className={styles.mRow}>
                    <span className={styles.mRow_label}>Placed</span>
                    <span className={styles.mRow_val}>
                      <span className={styles.placed}><CheckMini />{b.placed}</span>
                    </span>
                  </div>
                  <div className={styles.mRow}>
                    <span className={styles.mRow_label}>Median time to offer</span>
                    <span className={styles.mRow_val}>{b.days}</span>
                  </div>
                </div>
              </div>
            ))}
            <p className={styles.mCaption}>
              Last 4 batches - <strong>312 students</strong>, <strong>303 placed</strong>,{' '}
              <strong>9 interviewing now</strong>. 100% placement support continues until
              every student signs an offer (Indiranagar, Bangalore).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
