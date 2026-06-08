/**
 * Salary.jsx — BlueTick 2026 Refresh
 *
 * RSC. Pure CSS bar chart with per-band gradient fills. Width is set inline
 * via the `style` attribute (single number per row), so the chart is fully
 * static; no JS animation, no JS hydration.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 7208–7286.
 */

import styles from './Salary.module.css';
import AnimatedCounter from './AnimatedCounter';

/* ─── Band data ──────────────────────────────────────────────────────────── */
const BANDS = [
  {
    band: '₹3–5 LPA',
    pct: 26,
    role: 'Freshers joining agencies as executives',
    fillClass: 'bar_fill_1',
  },
  {
    band: '₹5–8 LPA',
    pct: 54,
    role: 'Mid-tier agencies & funded startups',
    fillClass: 'bar_fill_2',
  },
  {
    band: '₹8–12 LPA',
    pct: 16,
    role: 'Jr Working pros switching careers, top performers',
    fillClass: 'bar_fill_3',
  },
  {
    band: '₹12+ LPA',
    pct: 4,
    role: 'MAANG, unicorn placements',
    fillClass: 'bar_fill_4',
  },
];

/* ─── Salary ─────────────────────────────────────────────────────────────── */
export default function Salary() {
  return (
    <section id="placements" className={styles.section} aria-labelledby="salary-heading">
      <div className={styles.inner}>
        <h2 className={styles.heading} id="salary-heading" data-reveal>
          <span className={styles.kw}>Digital Marketing Course in Bangalore</span>
          with <span className={styles.hl}>100% placement</span> - here&rsquo;s
          the package band
        </h2>
        <p className={styles.subline} data-reveal>
          Of our last 4 batches - 312 students total:
        </p>

        <div className={styles.grid}>
          {/* Bars */}
          <ol
            className={styles.bars}
            aria-label="Placement distribution by package band"
            data-reveal
          >
            {BANDS.map(({ band, pct, role, fillClass }) => (
              <li key={band} className={styles.bar_row}>
                <div className={styles.bar_top}>
                  <span className={styles.bar_band}>{band}</span>
                  <span className={styles.bar_pct}>
                    <AnimatedCounter target={pct} suffix="%" />
                  </span>
                </div>
                <div className={styles.bar_track} aria-hidden="true">
                  <div
                    className={`${styles.bar_fill} ${styles[fillClass]}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className={styles.bar_role}>{role}</p>
              </li>
            ))}
          </ol>

          {/* Summary + closing */}
          <div>
            <div
              className={styles.summary}
              role="group"
              aria-label="Placement summary"
            >
              <div className={styles.summary_row}>
                <span className={styles.summary_label}>Average package</span>
                <span className={styles.summary_value}>₹5.6 LPA</span>
              </div>
              <div className={styles.summary_row}>
                <span className={styles.summary_label}>Lowest accepted</span>
                <span className={styles.summary_value}>₹3.2 LPA</span>
              </div>
              <div className={styles.summary_row}>
                <span className={styles.summary_label}>Highest</span>
                <span className={styles.summary_value}>
                  ₹22 LPA
                  <span className={styles.summary_value_note}>
                    Flipkart, 2026
                  </span>
                </span>
              </div>
            </div>
            <p className={styles.closing}>
              We publish the floor as well as the ceiling. Most don&rsquo;t.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
