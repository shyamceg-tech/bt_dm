/**
 * ComparisonPlacement.jsx — "Placement-first course" vs a "certificate-only"
 * course, on the eight things that decide whether you actually get hired.
 *
 * Revamped design (own CSS module, not the shared best/ComparisonBest one):
 * a gradient-framed grid with a per-row icon, green "us" / muted "them" cells
 * and hover lift on desktop; rich stacked cards (icon + criterion, then a green
 * BlueTick block and a muted competitor block) on mobile. Content is unchanged
 * from the config; only the presentation is upgraded. CSS-only motion, no JS.
 */

import { COMPARISON_ROWS } from '@/data/placement-bangalore.config';
import styles from './ComparisonPlacement.module.css';

/* One icon per criterion (matched to COMPARISON_ROWS order). Inline SVGs keep
   it zero-fetch and tiny. */
const ICONS = [
  /* What you finish with — trophy */
  <svg key="i0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" /><path d="M17 4h3v3a3 3 0 0 1-3 3M7 4H4v3a3 3 0 0 0 3 3" /></svg>,
  /* Placement commitment — shield */
  <svg key="i1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V6z" /><polyline points="9 12 11 14 15 10" /></svg>,
  /* Support window — clock */
  <svg key="i2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 16 14" /></svg>,
  /* Hiring network — nodes */
  <svg key="i3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" /><path d="M12 7.5v3M10.2 12.6l-3.4 4M13.8 12.6l3.4 4" /></svg>,
  /* Placement officer — user check */
  <svg key="i4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="8" r="3.5" /><path d="M4 20a6 6 0 0 1 12 0" /><polyline points="16 12 18 14 22 10" /></svg>,
  /* Interview prep — mic */
  <svg key="i5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>,
  /* Proof of placements — badge check */
  <svg key="i6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 1.8 3 .3 1 2.8 2.3 1.9-1 2.8 .3 3-2.6 1.5-1.4 2.6L12 22l-3.3-.0-1.4-2.6L4.7 17.9l.3-3-1-2.8L6.3 7.2l1-2.8 3-.3z" /><polyline points="9 12 11 14 15 10" /></svg>,
  /* AI fluency — spark */
  <svg key="i7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></svg>,
];

function CheckMark() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function CrossMark() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>;
}

export default function ComparisonPlacement() {
  return (
    <section
      id="comparison-placement"
      className={styles.section}
      aria-labelledby="comparison-placement-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>The honest comparison</span>
          <h2 id="comparison-placement-heading" className={styles.heading}>
            A course <em>with placement</em> vs a course with a certificate.
          </h2>
          <p className={styles.subline}>
            Side-by-side on the eight things that actually decide whether you walk out with a job.
          </p>
        </header>

        {/* Desktop / tablet grid */}
        <div className={styles.colHead} aria-hidden="true" data-reveal>
          <span className={styles.colHead_label} />
          <span className={styles.colHead_us}>BlueTick (placement-first)</span>
          <span className={styles.colHead_them}>Certificate-only course</span>
        </div>

        <div className={styles.rows}>
          {COMPARISON_ROWS.map((r, i) => (
            <div key={r.label} className={styles.row} data-reveal data-reveal-delay={i}>
              <span className={`${styles.cell} ${styles.cell_label}`}>
                <span className={styles.cell_icon}>{ICONS[i] || ICONS[0]}</span>
                {r.label}
              </span>
              <span className={`${styles.cell} ${styles.cell_us}`}>
                <span className={`${styles.mark} ${styles.mark_us}`}><CheckMark /></span>
                <span dangerouslySetInnerHTML={{ __html: r.bluetick }} />
              </span>
              <span className={`${styles.cell} ${styles.cell_them}`}>
                <span className={`${styles.mark} ${styles.mark_them}`}><CrossMark /></span>
                <span dangerouslySetInnerHTML={{ __html: r.competitor }} />
              </span>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className={styles.mobileList}>
          {COMPARISON_ROWS.map((r, i) => (
            <div key={r.label} className={styles.mCard} data-reveal data-reveal-delay={i % 3}>
              <div className={styles.mCard_head}>
                <span className={styles.cell_icon}>{ICONS[i] || ICONS[0]}</span>
                {r.label}
              </div>
              <div className={`${styles.mBlock} ${styles.mBlock_us}`}>
                <span className={`${styles.mark} ${styles.mark_us}`}><CheckMark /></span>
                <span>
                  <span className={styles.mBlock_brand}>BlueTick</span>
                  <span dangerouslySetInnerHTML={{ __html: r.bluetick }} />
                </span>
              </div>
              <div className={`${styles.mBlock} ${styles.mBlock_them}`}>
                <span className={`${styles.mark} ${styles.mark_them}`}><CrossMark /></span>
                <span>
                  <span className={styles.mBlock_brand}>Certificate-only</span>
                  <span dangerouslySetInnerHTML={{ __html: r.competitor }} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
