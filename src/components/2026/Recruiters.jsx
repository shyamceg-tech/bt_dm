/**
 * Recruiters.jsx — BlueTick 2026 Refresh
 *
 * RSC. Three numbered reason cards from data array. Pink/violet polish
 * background, giant ghost number top-right of each card, brand-blue italic
 * quote, body copy below.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 7623–7654.
 */

import Image from 'next/image';
import styles from './Recruiters.module.css';

const REASONS = [
  {
    num: '01',
    quote: '"Your students can run a campaign on Day 1."',
    body:
      "Every BlueTick graduate has run real campaigns with real budgets during the course - not dummy websites. They don't need 2 months of onboarding.",
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
      "The 1:15 trainer ratio means we know each student's strengths. We don't send 50 resumes to fill 5 roles - we send the right 7.",
  },
];

/* `scope` lets a landing page reframe the hiring-network claim without touching
   the homepage (which renders the default "Bangalore companies"). The online
   page is pan-India, so it passes scope="online". */
export default function Recruiters({ scope = 'bangalore' }) {
  const companiesLabel = scope === 'online' ? 'companies across India' : 'Bangalore companies';
  return (
    <section className={styles.section} aria-labelledby="recruiters-heading">
      <div className={styles.inner}>
        <h2 className={styles.heading} id="recruiters-heading" data-reveal>
          Why <span className={styles.hl}>500+</span> {companiesLabel} hire our{' '}
          <span className={styles.kw}>digital marketing</span> graduates first
        </h2>
        <p className={styles.subline}>
          Three reasons hiring managers told us they keep coming back:
        </p>

        <div className={styles.media} data-reveal>
          <Image
            src="/img/2026/recruiters_hiring.webp"
            alt="A BlueTick graduate welcomed into a Bangalore agency, with the team working on laptops behind"
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className={styles.media_img}
          />
        </div>

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
