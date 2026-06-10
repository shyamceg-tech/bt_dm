/**
 * FeeValueCompare.jsx — NEW section (fees page).
 *
 * Reframes the fee decision from "cheapest" to "best return per rupee" with a
 * three-way comparison: free/cheap courses vs BlueTick vs premium bootcamps.
 * BlueTick is the highlighted middle column.
 *
 * Design: each column carries an icon and a soft coloured gradient, lifts on
 * hover, and reveals on scroll (shared ScrollReveal observer — no extra JS per
 * card, no layout thrash, so page speed is unaffected).
 *
 * RSC — zero client JS of its own. Copy comes from fees.config.js (COMPARE).
 */

import { COMPARE } from '@/data/fees.config';
import styles from './FeeValueCompare.module.css';

const KEYS = ['cheap', 'bluetick', 'premium'];

/* Per-column icon (by key). Inline SVGs, tiny, one-shot. */
const ICONS = {
  cheap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  bluetick: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  premium: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 7l5 5 5-7 5 7 5-5-2 13H4L2 7z" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </svg>
  ),
};

export default function FeeValueCompare() {
  return (
    <section
      id="fee-value"
      className={styles.section}
      aria-labelledby="fee-value-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>Fees vs Value</span>
          <h2 id="fee-value-heading" className={styles.heading}>
            The real question isn&rsquo;t the fee - it&rsquo;s{' '}
            <span className={styles.kw}>what each rupee returns</span>
          </h2>
          <p className={styles.sub}>
            The most expensive course is rarely the best value and the cheapest
            isn&rsquo;t either. Here&rsquo;s an honest comparison so you can judge
            the fee against the outcome.
          </p>
        </header>

        <div className={styles.cols}>
          {COMPARE.columns.map((col, ci) => (
            <article
              key={col.key}
              className={`${styles.col} ${styles[`col_${col.key}`]} ${col.highlight ? styles.col_hl : ''}`}
              aria-label={col.label}
              data-reveal
              data-reveal-delay={ci}
            >
              {col.highlight && <span className={styles.badge}>Best value</span>}

              <span className={`${styles.icon} ${styles[`icon_${col.key}`]}`} aria-hidden="true">
                {ICONS[col.key]}
              </span>

              <header className={styles.col_head}>
                <h3 className={styles.col_title}>{col.label}</h3>
                <p className={styles.col_price}>{col.priceLine}</p>
              </header>

              <dl className={styles.rows}>
                {COMPARE.rows.map((row) => (
                  <div key={row.label} className={styles.row}>
                    <dt className={styles.row_label}>{row.label}</dt>
                    <dd className={styles.row_value}>{row[KEYS[ci]]}</dd>
                  </div>
                ))}
              </dl>

              {col.highlight && (
                <a href="#hero-form" className={styles.col_cta}>
                  Get the BlueTick fee sheet
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>

        <p className={styles.foot}>
          Same logic the smartest buyers use: weigh the{' '}
          <strong>digital marketing course fees in Bangalore</strong> against the
          job, the salary and the support you actually get, not against the
          lowest price on the page.
        </p>
      </div>
    </section>
  );
}
