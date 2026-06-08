/**
 * WhyNo1.jsx — Six defensible reasons we're ranked #1.
 * Each card has icon + title + body + proof line.
 */

import { WHY_REASONS } from '@/data/best-bangalore.config';
import styles from './WhyNo1.module.css';

const ICONS = {
  trophy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M17 4h3v3a3 3 0 0 1-3 3M7 4H4v3a3 3 0 0 0 3 3" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  ),
  cap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 10l10-5 10 5-10 5L2 10z" />
      <path d="M6 12v4c2 2 10 2 12 0v-4" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="6" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M12 8.5v3M10.2 13.2l-3.5 3M13.8 13.2l3.5 3" />
    </svg>
  ),
  medal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="15" r="6" />
      <path d="M8 5l4 6 4-6M8 5h8" />
    </svg>
  ),
};

export default function WhyNo1() {
  return (
    <section
      id="why-no-1"
      className={styles.section}
      aria-labelledby="why-no-1-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Why we're ranked #1</span>
          <h2 id="why-no-1-heading" className={styles.heading}>
            Six defensible reasons - <em>not adjectives</em>.
          </h2>
          <p className={styles.subline}>
            Every &ldquo;Top 10&rdquo; institute claims to be the best. We&rsquo;re happy to show our working.
          </p>
        </header>

        <ul className={styles.grid}>
          {WHY_REASONS.map((r) => (
            <li key={r.title} className={styles.card}>
              <span className={styles.icon}>{ICONS[r.icon] || ICONS.trophy}</span>
              <h3 className={styles.title}>{r.title}</h3>
              <p
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: r.body }}
              />
              <p className={styles.proof}>{r.proof}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
