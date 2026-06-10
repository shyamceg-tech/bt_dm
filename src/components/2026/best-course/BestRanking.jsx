/**
 * BestRanking.jsx — NEW section (not on the homepage).
 *
 * "Why students rate us the best digital marketing course in Bangalore." Sits
 * early to validate the best/#1 claim with defensible, numbered proof. Revamped
 * design: each reason gets a gradient icon tile + a rank index, cards lift on
 * hover and reveal on scroll (staggered) using the global [data-reveal] system,
 * so there is zero added client JS and no impact on load speed.
 *
 * Copy: src/data/best-course.config.js (RANKING). Styles: BestRanking.module.css.
 */

import styles from './BestRanking.module.css';
import { RANKING } from '@/data/best-course.config';

/* Inline icon set, keyed by the `icon` field in RANKING.reasons. Stroke-based,
   inherit currentColor so the gradient tile shows through. ~1 line each. */
const ICONS = {
  trophy: <path d="M8 21h8M12 17v4M6 4h12v3a6 6 0 0 1-12 0V4zM18 5h2.5a1.5 1.5 0 0 1 0 5M6 5H3.5a1.5 1.5 0 0 0 0 5" />,
  spark: <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></>,
  shield: <><path d="M12 3l8 3.5V12c0 4.5-3.2 7.6-8 8.8C7.2 19.6 4 16.5 4 12V6.5L12 3z" /><path d="M9 12l2 2 4-4" /></>,
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name] || ICONS.trophy}
    </svg>
  );
}

export default function BestRanking() {
  const { eyebrow, heading, intro, reasons } = RANKING;
  return (
    <section
      id="why-no1"
      className={styles.section}
      aria-labelledby="ranking-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2
            id="ranking-heading"
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p className={styles.intro} dangerouslySetInnerHTML={{ __html: intro }} />
        </header>

        <ol className={styles.grid}>
          {reasons.map((r, i) => (
            <li
              key={r.title}
              className={styles.card}
              data-reveal
              data-reveal-delay={i}
            >
              <div className={styles.cardTop}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon name={r.icon} />
                </span>
                <span className={styles.rank} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3
                className={styles.cardTitle}
                dangerouslySetInnerHTML={{ __html: r.title }}
              />
              <p
                className={styles.cardBody}
                dangerouslySetInnerHTML={{ __html: r.body }}
              />
              {r.proof && (
                <span
                  className={styles.proof}
                  dangerouslySetInnerHTML={{ __html: r.proof }}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
