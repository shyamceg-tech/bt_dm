/**
 * Tracks.jsx — BlueTick 2026 Refresh
 *
 * RSC. Three program-tier cards (PCP / PGCP / Elevate) rendered from a
 * single data array, so copy edits land in one place.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 7432–7588.
 *
 * CTA buttons currently scroll to `#mini-form-2` (the next form below this
 * section in flow). Phase 3 will swap to opening the modal form / wiring
 * to /api/bigin with `formPosition` set to e.g. `track-pcp-cta`.
 */

import styles from './Tracks.module.css';

/* ─── Track data ─────────────────────────────────────────────────────────── */
const TRACKS = [
  {
    key: 'pcp',
    variantClass: null, // default styles
    eyebrow: '3-Month Track',
    title:
      'Professional Certification Program in Digital Marketing & Analytics',
    specs: [
      ['Duration', '3 Months'],
      ['Format', 'Classroom + Online available'],
      ['Schedule', 'Mon – Fri | 2 hours/day'],
    ],
    hireable: [
      'SEO Executive / SEO Analyst',
      'Social Media Executive',
      'Google Ads / PPC Executive',
      'Content Marketing Executive',
      'Email Marketing Executive',
      'Digital Marketing Coordinator',
      'Performance Marketer',
    ],
    tickrow: [
      '15+ live projects · 20+ tools with AI',
      '7 industry certifications included',
    ],
    fee: { label: 'No-Cost EMI', amount: '₹5,000', suffix: '/month' },
    nextBatch: '16 Days',
    seatChip: null,
    showSash: false,
    titleId: 'pcp-title',
  },
  {
    key: 'pgcp',
    variantClass: 'card_pgcp',
    eyebrow: '5-Month Track',
    title: 'Post Graduate Program in Digital Marketing & Analytics',
    specs: [
      ['Duration', '5 Months'],
      ['Format', 'Classroom + Online available'],
      ['Schedule', 'Weekdays & Weekends'],
    ],
    hireable: [
      'Digital Marketing Executive',
      'Performance Marketing Executive',
      'GEO/AEO Specialist',
      'Social Media Marketing Executive',
      'Content Strategist',
      'CRM & Marketing AI Automation Specialist',
      'E-Commerce Marketing Manager',
      'Growth Marketer',
    ],
    tickrow: [
      '25+ live projects · 60+ tools with AI',
      '12 industry certifications included · 2 specialisations',
    ],
    fee: { label: 'No-Cost EMI', amount: '₹7,500', suffix: '/month' },
    nextBatch: '12 Days',
    seatChip: '9 of 24 seats remaining',
    showSash: true,
    titleId: 'pgcp-title',
  },
  {
    key: 'elevate',
    variantClass: 'card_elevate',
    eyebrow: '7-Month Track',
    title: 'ELEVATE™ - Digital Marketing + AI for Business Teams',
    specs: [
      ['Duration', '7 Months'],
      ['Format', 'Classroom + Online available'],
      ['Schedule', 'Weekdays & Weekends'],
    ],
    hireable: [
      'Performance Marketing Expert',
      'AI Operations Executive',
      'AI & Marketing Strategist',
      'Business Growth Executive',
      'MarTech Executive',
      'Growth & Revenue Specialist',
      'AI Business Transformation Consultant',
      'AI Agency Founder',
    ],
    tickrow: [
      'All PGCP modules + 16 AI-for-Business modules · 268 hours total',
      '12 certifications + AI Business specialisation',
    ],
    fee: { label: 'No-Cost EMI', amount: '₹10,000', suffix: '/month' },
    nextBatch: '12 Days',
    seatChip: null,
    showSash: false,
    flagship: true,
    titleId: 'elevate-title',
  },
];

/* ─── Tracks ─────────────────────────────────────────────────────────────── */
/* `keyword` lets a landing page swap the highlighted heading keyword without
   touching the homepage (which renders the default). Everything else is shared. */
export default function Tracks({ keyword = 'digital marketing courses in Bangalore' }) {
  return (
    <section
      id="section-14"
      className={styles.section}
      aria-labelledby="tracks-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>Course Tracks</span>
          <h2 id="tracks-heading" className={styles.heading}>
            Choose your track -{' '}
            <span className={styles.kw}>{keyword}</span>{' '}
            for every goal
          </h2>
        </header>

        <div className={styles.grid}>
          {TRACKS.map((t, index) => (
            <article
              key={t.key}
              className={`${styles.card} ${
                t.variantClass ? styles[t.variantClass] : ''
              }`}
              aria-labelledby={t.titleId}
              data-reveal
              data-reveal-delay={index}
            >
              {t.showSash && (
                <span className={styles.popular}>
                  <span className={styles.popular_star} aria-hidden="true">★</span>
                  Most Popular
                </span>
              )}

              {t.flagship && (
                <span className={styles.flagship}>
                  <span className={styles.flagship_star} aria-hidden="true">★</span>
                  Flagship Program
                </span>
              )}

              <span className={styles.track_eyebrow}>{t.eyebrow}</span>
              <h3 id={t.titleId} className={styles.title}>
                {t.title}
              </h3>

              <div className={styles.divider} />

              <div className={styles.specs}>
                {t.specs.map(([key, val]) => (
                  <div key={key} className={styles.specs_row}>
                    <div className={styles.specs_key}>{key}</div>
                    <div className={styles.specs_val}>{val}</div>
                  </div>
                ))}
              </div>

              <div className={styles.divider} />

              <div className={styles.section_label}>Hireable for</div>
              <ul className={styles.hireable}>
                {t.hireable.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>

              <ul className={styles.tickrow}>
                {t.tickrow.map((line) => (
                  <li key={line}>
                    <span className={styles.tickrow_mark} aria-hidden="true">
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.fee_block}>
                <div className={styles.fee_cell}>
                  <span className={styles.fee_label}>{t.fee.label}</span>
                  <span className={styles.fee_value}>
                    {t.fee.amount}
                    <span className={styles.fee_suffix}>{t.fee.suffix}</span>
                  </span>
                </div>
              </div>

              <div className={styles.batch_block}>
                <span className={styles.batch_label}>Next Batch in</span>
                <span className={styles.batch_date}>{t.nextBatch}</span>
                {t.seatChip && (
                  <span className={styles.seat_chip}>{t.seatChip}</span>
                )}
              </div>

              <div className={styles.cta_wrap}>
                <a
                  href="#mini-form-2"
                  className={styles.cta}
                  data-track-cta={t.key}
                >
                  START YOUR DM CAREER
                  <span className={styles.cta_arrow} aria-hidden="true">
                    →
                  </span>
                </a>
                <a
                  href="#curriculum"
                  className={styles.cta_secondary}
                  data-track-curriculum={t.key}
                >
                  View curriculum
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
