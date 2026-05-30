/**
 * CareerSwitcher.jsx — BlueTick 2026 Refresh
 *
 * RSC. Three "career switcher" stories. Each card: avatar (initials, 3
 * color variants tied to PCP/PGCP/Elevate tints) + name + meta + from→to
 * salary jump block (from in muted gray, to in success green) + italic
 * blockquote.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 8986–9093.
 */

import styles from './CareerSwitcher.module.css';

const STORIES = [
  {
    initials: 'VK',
    name: 'Vinay K.',
    meta: 'March 2025 batch · Switched at age 27',
    avatarVariant: null, // default brand-blue
    from: { line: 'BPO at Infosys',                               salary: '\u20B93.2 LPA' },
    to:   { line: 'Performance Marketing Analyst at Razorpay', salary: '\u20B97.8 LPA' },
    quote: 'I was 5 years into a BPO job that was going nowhere. 90 days here, 2.4x salary jump.',
  },
  {
    initials: 'MR',
    name: 'Megha R.',
    meta: 'January 2025 batch · Switched at age 25',
    avatarVariant: 'avatar_2', // PGCP violet
    from: { line: 'B.Tech graduate at TCS support', salary: '\u20B94.1 LPA' },
    to:   { line: 'SEO Specialist at WATConsult',     salary: '\u20B96.5 LPA' },
    quote: 'I never used my engineering degree. Digital marketing was the first work I actually enjoyed.',
  },
  {
    initials: 'SP',
    name: 'Suresh P.',
    meta: 'November 2024 batch · Switched at age 28',
    avatarVariant: 'avatar_3', // Elevate teal
    from: { line: 'School teacher',                                salary: '\u20B92.8 LPA' },
    to:   { line: 'Content & Email Marketing at Mamaearth',      salary: '\u20B95.2 LPA' },
    quote: 'I was the oldest in my batch by 4 years. Nobody made it weird. We were all there for the same reason.',
  },
];

function DownArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 3 V15 M5 11 L10 16 L15 11"
        stroke="#4A5468"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CareerSwitcher() {
  return (
    <section
      id="section-16"
      className={styles.section}
      aria-labelledby="career-switcher-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Career Switchers</span>
          <h2 id="career-switcher-heading" className={styles.heading}>
            Switching from a non-marketing job? You&rsquo;re not alone &mdash;{' '}
            <span className={styles.stat_inline}>41%</span> of our students are.
          </h2>
          <p className={styles.sub}>
            In our last 4 batches, 41% of students came from non-marketing
            backgrounds &mdash; IT, BPO, sales, finance, even teaching.
          </p>
        </header>

        <ol className={styles.grid}>
          {STORIES.map((s, i) => {
            const titleId = `sw-${i}-name`;

            return (
              <li key={s.name} className={styles.card} aria-labelledby={titleId}>
                <div className={styles.head_row}>
                  <div>
                    <h3 id={titleId} className={styles.id_name}>{s.name}</h3>
                    <p className={styles.id_meta}>{s.meta}</p>
                  </div>
                </div>

                <div className={styles.fromto}>
                  <div className={`${styles.ft_row} ${styles.ft_row_from}`}>
                    <span className={styles.ft_key}>From</span>
                    <span className={styles.ft_line}>{s.from.line}</span>
                    <span className={styles.ft_salary}>{s.from.salary}</span>
                  </div>
                  <div className={styles.ft_arrow}>
                    <DownArrowIcon />
                  </div>
                  <div className={`${styles.ft_row} ${styles.ft_row_to}`}>
                    <span className={styles.ft_key}>To</span>
                    <span className={styles.ft_line}>{s.to.line}</span>
                    <span className={styles.ft_salary}>{s.to.salary}</span>
                  </div>
                </div>

                <blockquote className={styles.quote}>{s.quote}</blockquote>
              </li>
            );
          })}
        </ol>

        <p className={styles.closing}>
          Working pros switching careers: weekend batches + Sunday mock
          interviews are built specifically for you.
        </p>
      </div>
    </section>
  );
}
