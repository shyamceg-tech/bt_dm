/**
 * BestComparison.jsx — best/top intent variant of <Comparison/>.
 *
 * RSC. Imports the SAME CSS module as the homepage table
 * (../Comparison.module.css) — identical 4-column swipe table, identical marks
 * (✓ / — / ✗). Only the framing changes: the prominent second column becomes
 * the "Generic Top-10 institute" the searcher is weighing us against, so the
 * table directly answers the comparison/shortlisting intent.
 *
 * Copy is sourced from src/data/best-course.config.js (COMPARISON).
 */

import styles from '../Comparison.module.css';
import { COMPARISON } from '@/data/best-course.config';

const MARK_CHAR = { yes: '\u2713', na: '\u2014', no: '\u2717' };

function Cell({ data }) {
  const markClass = [styles.mark, styles[`mark_${data.mark}`]].join(' ');
  return (
    <>
      <span className={markClass} aria-hidden="true">
        {MARK_CHAR[data.mark]}
      </span>
      <span dangerouslySetInnerHTML={{ __html: data.text }} />
    </>
  );
}

export default function BestComparison() {
  const { eyebrow, heading, columns, rows } = COMPARISON;
  return (
    <section
      id="section-17"
      className={styles.section}
      aria-labelledby="comparison-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2
            id="comparison-heading"
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </header>

        <div
          className={styles.table_wrap}
          role="region"
          aria-label="Comparison table - swipe horizontally to see all columns"
          tabIndex={0}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col" className={styles.col_criterion}>
                  <span className={styles.sr_only}>Criterion</span>
                </th>
                <th scope="col" className={styles.col_bt}>
                  <span dangerouslySetInnerHTML={{ __html: columns.bluetick }} />{' '}
                  <span className={styles.star} aria-label="Recommended">
                    &#9733;
                  </span>
                </th>
                <th scope="col" dangerouslySetInnerHTML={{ __html: columns.others }} />
                <th scope="col" dangerouslySetInnerHTML={{ __html: columns.online }} />
                <th scope="col" dangerouslySetInnerHTML={{ __html: columns.self }} />
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.criterion}>
                  <td className={styles.col_criterion}>{row.criterion}</td>
                  <td className={styles.col_bt}>
                    <Cell data={row.bluetick} />
                  </td>
                  <td><Cell data={row.others} /></td>
                  <td><Cell data={row.online} /></td>
                  <td><Cell data={row.self} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.swipe_hint} aria-hidden="true">
          <span>Swipe to compare all columns</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </section>
  );
}
