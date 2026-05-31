/**
 * Recruiters.jsx — BlueTick 2026 Refresh
 *
 * RSC. Three numbered reason cards from data array. Pink/violet polish
 * background, giant ghost number top-right of each card, brand-blue italic
 * quote, body copy below.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 7623–7654.
 */

import styles from './Recruiters.module.css';

const REASONS = [
  {
    num: '01',
    quote: '"Your students can run a campaign on Day 1."',
    body:
      "Every BlueTick graduate has run real campaigns with real budgets during the course — not dummy websites. They don't need 2 months of onboarding.",
  },
  {
    num: '02',
    quote: '"We don\'t have to teach them the AI stack."',
    body:
      'Most agencies are still training their teams on GPT-4, n8n workflows, and AI-driven analytics. Your students already know them.',
  },
  {
    num: '03',
    quote: '"We filter candidates here better than placement portals."',
    body:
      "The 1:15 trainer ratio means we know each student's strengths. We don't send 50 resumes to fill 5 roles — we send the right 7.",
  },
];

export default function Recruiters() {
  return (
    <section className={styles.section} aria-labelledby="recruiters-heading">
      <div className={styles.inner}>
        <h2 className={styles.heading} id="recruiters-heading" data-reveal>
          Why 500+ Companies in Bangalore hire from BlueTick first
        </h2>
        <p className={styles.subline}>
          Three reasons hiring managers told us they keep coming back:
        </p>

        <ol className={styles.cards}>
          {REASONS.map((r, index) => (
            <li key={r.num} className={styles.card} data-reveal data-reveal-delay={index}>
              <span className={styles.num} aria-hidden="true">
                {r.num}
              </span>
              <div className={styles.content}>
                <h3 className={styles.quote}>{r.quote}</h3>
                <p className={styles.body}>{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
