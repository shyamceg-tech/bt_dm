/**
 * Comparison.jsx — BlueTick 2026 Refresh
 *
 * RSC. Four-column comparison table: BlueTick (highlighted) vs Self-Learning
 * vs Online Platforms vs Other Institutes. Six criteria rows. Mobile shows
 * horizontal swipe (table forced to min-width 760px); desktop ≥1024px fits
 * within the container with rounded border + subtle shadow.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 9099–9169.
 */

import styles from './Comparison.module.css';

/* Cell-mark types: 'yes' (green ✓) | 'na' (gray —) | 'no' (red ✗) */
const ROWS = [
  {
    criterion: 'Trainers',
    bluetick: { mark: 'yes', text: 'Working agency practitioners' },
    self:     { mark: 'no',  text: 'None' },
    online:   { mark: 'na',  text: 'Career trainers, rarely practitioners' },
    others:   { mark: 'na',  text: 'Mixed, varies by batch' },
  },
  {
    criterion: 'Live agency projects',
    bluetick: { mark: 'yes', text: '3 in 90 days, real client briefs' },
    self:     { mark: 'no',  text: 'None' },
    online:   { mark: 'na',  text: 'Simulated only' },
    others:   { mark: 'na',  text: 'Sometimes, no commitment' },
  },
  {
    criterion: 'Placement support',
    bluetick: { mark: 'yes', text: '6 months, named alumni evidence' },
    self:     { mark: 'no',  text: 'None' },
    online:   { mark: 'na',  text: 'Generic webinars + portal' },
    others:   { mark: 'na',  text: 'Variable, no fixed window' },
  },
  {
    criterion: 'AI-native curriculum',
    bluetick: { mark: 'yes', text: 'Quarterly updates' },
    self:     { mark: 'na',  text: 'Self-curated' },
    online:   { mark: 'na',  text: 'Slow to update' },
    others:   { mark: 'na',  text: 'Often outdated' },
  },
  {
    criterion: 'Local BLR network',
    bluetick: { mark: 'yes', text: '300+ Bangalore HRs' },
    self:     { mark: 'no',  text: 'None' },
    online:   { mark: 'na',  text: 'Pan-India, not Bangalore-specific' },
    others:   { mark: 'na',  text: 'Limited to direct contacts' },
  },
  {
    criterion: 'Verifiable outcomes',
    bluetick: { mark: 'yes', text: 'LinkedIn-linked alumni' },
    self:     { mark: 'na',  text: 'Self-reported' },
    online:   { mark: 'na',  text: 'Self-reported only' },
    others:   { mark: 'na',  text: 'Self-reported' },
  },
];

const MARK_CHAR = { yes: '\u2713', na: '\u2014', no: '\u2717' };

function Cell({ data }) {
  const markClass = [
    styles.mark,
    styles[`mark_${data.mark}`],
  ].join(' ');
  return (
    <>
      <span className={markClass} aria-hidden="true">
        {MARK_CHAR[data.mark]}
      </span>
      {data.text}
    </>
  );
}

export default function Comparison() {
  return (
    <section
      id="section-17"
      className={styles.section}
      aria-labelledby="comparison-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>Comparison</span>
          <h2 id="comparison-heading" className={styles.heading}>
            How BlueTick compares to your other options
          </h2>
        </header>

        <div
          className={styles.table_wrap}
          role="region"
          aria-label="Comparison table — swipe horizontally to see all columns"
          tabIndex={0}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col" className={styles.col_criterion}>
                  <span className={styles.sr_only}>Criterion</span>
                </th>
                <th scope="col" className={styles.col_bt}>
                  BlueTick{' '}
                  <span className={styles.star} aria-label="Recommended">
                    &#9733;
                  </span>
                </th>
                <th scope="col">Self-Learning</th>
                <th scope="col">Online Platforms</th>
                <th scope="col">Other Institutes</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.criterion}>
                  <td className={styles.col_criterion}>{row.criterion}</td>
                  <td className={styles.col_bt}>
                    <Cell data={row.bluetick} />
                  </td>
                  <td><Cell data={row.self} /></td>
                  <td><Cell data={row.online} /></td>
                  <td><Cell data={row.others} /></td>
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
