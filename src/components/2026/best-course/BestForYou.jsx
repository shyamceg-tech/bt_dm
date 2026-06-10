/**
 * BestForYou.jsx — NEW section (replaces the old "score every institute"
 * scorecard).
 *
 * A warm, goal-based fit helper: the visitor finds the persona that matches
 * where they are starting from, we point them to the right track, then offer a
 * no-pressure call. Intentionally about THEM (not about beating competitors),
 * so it reads helpful rather than combative, and it does not repeat the proof
 * points already made in "Why we rank #1".
 *
 * Reveal-on-scroll uses the global [data-reveal] system (zero added JS).
 * Copy: src/data/best-course.config.js (FORYOU). Styles: BestForYou.module.css.
 */

import styles from './BestForYou.module.css';
import { FORYOU } from '@/data/best-course.config';

/* One icon per persona card, in render order: switch / graduate / launch. */
const PERSONA_ICONS = [
  <path key="switch" d="M4 8h13l-3-3M20 16H7l3 3" />,
  <path key="grad" d="M3 9l9-4 9 4-9 4-9-4zM7 11.5V15c0 1.1 2.2 2.5 5 2.5s5-1.4 5-2.5v-3.5M21 9.5V14" />,
  <path key="launch" d="M12 3c3 1.2 5 4.2 5 8l-2.4 2.4H9.4L7 11c0-3.8 2-6.8 5-8zM12 8.6a1 1 0 1 0 0 .01M9.4 15.8c-1 .6-1.8 2-1.8 3.9 1.9 0 3.3-.8 3.9-1.8M14.6 15.8c1 .6 1.8 2 1.8 3.9-1.9 0-3.3-.8-3.9-1.8" />,
];

function Icon({ i }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PERSONA_ICONS[i] || PERSONA_ICONS[0]}
    </svg>
  );
}

export default function BestForYou() {
  const { eyebrow, heading, intro, cards, cta } = FORYOU;
  return (
    <section
      id="best-for-you"
      className={styles.section}
      aria-labelledby="for-you-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2
            id="for-you-heading"
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p className={styles.intro} dangerouslySetInnerHTML={{ __html: intro }} />
        </header>

        <ol className={styles.grid}>
          {cards.map((c, i) => (
            <li
              key={c.persona}
              className={styles.card}
              data-accent={c.accent}
              data-reveal
              data-reveal-delay={i}
            >
              <span className={styles.iconWrap} aria-hidden="true">
                <Icon i={i} />
              </span>
              <h3
                className={styles.persona}
                dangerouslySetInnerHTML={{ __html: c.persona }}
              />
              <p className={styles.who} dangerouslySetInnerHTML={{ __html: c.who }} />
              <span
                className={styles.track}
                dangerouslySetInnerHTML={{ __html: c.track }}
              />
              <p
                className={styles.outcome}
                dangerouslySetInnerHTML={{ __html: c.outcome }}
              />
            </li>
          ))}
        </ol>

        <div className={styles.footer} data-reveal>
          <a href="#hero-form" className={styles.cta}>
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
