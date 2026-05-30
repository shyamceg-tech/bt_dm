/**
 * InterviewReadiness.jsx — BlueTick 2026 Refresh
 *
 * RSC. Two-card side-by-side comparison: "How others attend interviews"
 * (red, struck-through tone) vs "How BlueTick students attend interviews"
 * (aurora top bar, success green checks). Mobile = swipe rail; desktop =
 * 2-col grid.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 8722–8766.
 */

import styles from './InterviewReadiness.module.css';

const FRESHER_ITEMS = [
  { quote: true,  text: "I've watched a few YouTube tutorials on Google Ads." },
  { quote: false, text: 'Resume lists certifications but no projects.' },
  { quote: false, text: "Can name the tools, can't operate them." },
  { quote: false, text: 'Asked "show me a campaign you\'ve run" \u2192 silence.' },
  { quote: false, text: 'Asked "what\'s your CTR benchmark?" \u2192 guesses.' },
  { quote: false, text: 'Talks about "wanting to learn" — sounds like a beginner.' },
];

const BLUETICK_ITEMS = [
  { quote: true,  text: "I've run 3 live campaigns for BookMyScans, Decfort, and [BRAND] during my course." },
  { quote: false, text: 'Resume opens with project metrics: "Reduced CPA from \u20B91,200 to \u20B9380."' },
  { quote: false, text: 'Pulls out the phone and walks through a live Looker Studio dashboard.' },
  { quote: false, text: 'Asked "what\'s your CTR benchmark?" \u2192 "Search 4–6%, display 0.5–1%, depending on industry."' },
  { quote: false, text: "Discusses what they've already shipped — sounds like a junior practitioner, not a student." },
  { quote: false, text: 'Walks out with the offer the same week.' },
];

function ItemList({ items, variant }) {
  return (
    <ul className={styles.list}>
      {items.map((it, i) => (
        <li key={i} className={styles.item}>
          <span className={styles.mark} aria-hidden="true">
            {variant === 'fresher' ? '\u2717' : '\u2713'}
          </span>
          <span>{it.quote ? <q>{it.text}</q> : it.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function InterviewReadiness() {
  return (
    <section
      id="section-11"
      className={styles.section}
      aria-labelledby="interview-readiness-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Interview Readiness</span>
          <h2 id="interview-readiness-heading" className={styles.heading}>
            How most freshers walk into a digital marketing interview &mdash;
            and how BlueTick students walk in
          </h2>
        </header>

        <div className={styles.grid}>
          <article
            className={`${styles.card} ${styles.card_fresher}`}
            aria-labelledby="ir-fresher-h"
          >
            <h3 id="ir-fresher-h" className={styles.card_title}>
              How others attend interviews
            </h3>
            <ItemList items={FRESHER_ITEMS} variant="fresher" />
          </article>

          <article
            className={`${styles.card} ${styles.card_bluetick}`}
            aria-labelledby="ir-bt-h"
          >
            <h3 id="ir-bt-h" className={styles.card_title}>
              How BlueTick students attend interviews
            </h3>
            <ItemList items={BLUETICK_ITEMS} variant="bluetick" />
          </article>
        </div>

        <div className={styles.swipe_hint} aria-hidden="true">
          <span>Swipe to see how BlueTick students do it</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>

        <p className={styles.closing}>
          The difference isn&rsquo;t the certificate. It&rsquo;s what you can do
          with your phone open on the table.
        </p>
      </div>
    </section>
  );
}
