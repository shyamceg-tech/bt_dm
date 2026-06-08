/**
 * ComparisonBest.jsx — BlueTick vs "Generic Top-10 Institute".
 * Mobile: stacked card per row. Desktop ≥768px: 3-column table.
 */

import { COMPARISON_ROWS } from '@/data/best-bangalore.config';
import styles from './ComparisonBest.module.css';

export default function ComparisonBest() {
  return (
    <section
      id="comparison-best"
      className={styles.section}
      aria-labelledby="comparison-best-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>The honest comparison</span>
          <h2 id="comparison-best-heading" className={styles.heading}>
            BlueTick vs the <em>generic Top-10</em> institute.
          </h2>
          <p className={styles.subline}>
            Side-by-side on the eight things that actually decide whether you get hired.
          </p>
        </header>

        <div className={styles.colHead} aria-hidden="true">
          <span className={styles.colHead_label}>Dimension</span>
          <span className={styles.colHead_us}>BlueTick Academy</span>
          <span className={styles.colHead_them}>Generic Top-10</span>
        </div>

        <div className={styles.tableRows}>
          {COMPARISON_ROWS.map((r) => (
            <div key={r.label} className={styles.row}>
              <span className={styles.row_label}>{r.label}</span>
              <span className={styles.row_us}>
                <span className={styles.mark_us} aria-hidden="true">✓</span>
                <span dangerouslySetInnerHTML={{ __html: r.bluetick }} />
              </span>
              <span className={styles.row_them}>
                <span className={styles.mark_them} aria-hidden="true">✕</span>
                <span dangerouslySetInnerHTML={{ __html: r.competitor }} />
              </span>
            </div>
          ))}
        </div>

        <div className={styles.mobileList}>
          {COMPARISON_ROWS.map((r) => (
            <div key={r.label} className={styles.mobileCard}>
              <span className={styles.mobileLabel}>{r.label}</span>
              <div className={styles.mobileRow}>
                <span className={styles.mark_us} aria-hidden="true">✓</span>
                <span
                  className={styles.mobileRow_us}
                  dangerouslySetInnerHTML={{ __html: r.bluetick }}
                />
              </div>
              <div className={styles.mobileRow}>
                <span className={styles.mark_them} aria-hidden="true">✕</span>
                <span
                  className={styles.mobileRow_them}
                  dangerouslySetInnerHTML={{ __html: r.competitor }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className={styles.foot}>
          We&rsquo;ll send the full comparison sheet on WhatsApp with{' '}
          <strong>named alumni, fee breakdowns, and trainer profiles</strong> - so you can audit it yourself.
        </p>
      </div>
    </section>
  );
}
