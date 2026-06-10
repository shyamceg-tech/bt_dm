/**
 * TracksFees.jsx — fees-page variant of the homepage Course Tracks section.
 *
 * Reuses Tracks.module.css verbatim (identical card design) so NOTHING on the
 * shared homepage <Tracks/> is touched. The only difference: each track card
 * now carries its OWN total fee (GST-inclusive total + base/GST split) inside
 * the card's fee block — so the fee structure lives with the track, instead of
 * a separate strip that repeats the 3-/5-/7-month labels.
 *
 * The section also carries the "price you see is the price you pay" promise
 * above the cards and the scholarship / refund / salary assurances below them
 * (FeeBreakdown.module.css), so the whole fee story is one cohesive band right
 * under the hero.
 *
 * RSC, zero client JS. Fee numbers come from fees.config (FEES); the card
 * presentation mirrors the homepage Tracks data.
 */

import tStyles from '../Tracks.module.css';
import fStyles from './FeeBreakdown.module.css';
import styles from './TracksFees.module.css';
import { FEES, SCHOLARSHIP, REFUND, OUTCOMES } from '@/data/fees.config';

const inr = (n) => `₹${n.toLocaleString('en-IN')}`;
const feeFor = (key) => FEES.find((f) => f.key === key);

/* Presentational track data — mirrors the homepage Tracks. Fee figures are
   pulled from fees.config by `key`, so the displayed total and the schema price
   never drift. */
const TRACKS = [
  {
    key: 'pcp',
    variantClass: null,
    eyebrow: '3-Month Track',
    title: 'Professional Certification Program in Digital Marketing & Analytics',
    specs: [
      ['Duration', '3 Months'],
      ['Format', 'Classroom + Online available'],
      ['Schedule', 'Mon - Fri | 2 hours/day'],
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
    nextBatch: '16 Days',
    seatChip: null,
    showSash: false,
    titleId: 'fee-pcp-title',
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
    nextBatch: '12 Days',
    seatChip: '9 of 24 seats remaining',
    showSash: true,
    titleId: 'fee-pgcp-title',
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
    nextBatch: '12 Days',
    seatChip: null,
    flagship: true,
    titleId: 'fee-elevate-title',
  },
];

/* ─── Assurance icons + data (same as the old FeeBreakdown) ───────────────── */
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}
function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  );
}
function TrendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

const ASSURANCES = [
  {
    key: 'scholarship',
    icon: <GiftIcon />,
    badge: `Save up to ${inr(SCHOLARSHIP.amount)}`,
    text: `Scholarship for ${SCHOLARSHIP.eligibility}. ${SCHOLARSHIP.note}`,
  },
  {
    key: 'refund',
    icon: <RefreshIcon />,
    badge: `${REFUND.windowDays}-day refund`,
    text: REFUND.note,
  },
  {
    key: 'salary',
    icon: <TrendIcon />,
    badge: `Avg. ${OUTCOMES.avgPackageLpa} LPA`,
    text: `Average starting package across ${OUTCOMES.placedLast4Batches} placed students in our last 4 batches. Floor ${OUTCOMES.floorLpa} LPA, ceiling ${OUTCOMES.ceilingLpa} LPA at ${OUTCOMES.ceilingEmployer}.`,
  },
];

export default function TracksFees({
  keyword = 'digital marketing course duration and fees',
}) {
  return (
    <section id="section-14" className={tStyles.section} aria-labelledby="fee-tracks-heading">
      <div className={tStyles.container}>
        <header className={tStyles.head} data-reveal>
          <span className={tStyles.eyebrow}>Course Tracks & Fees</span>
          <h2 id="fee-tracks-heading" className={tStyles.heading}>
            Choose your track - <span className={tStyles.kw}>{keyword}</span> for every goal
          </h2>
        </header>

        {/* Anti-bait promise, leading the fee story. */}
        <div className={`${fStyles.promise} ${styles.promise}`} role="note">
          <span className={fStyles.promise_icon} aria-hidden="true"><ShieldIcon /></span>
          <p className={fStyles.promise_text}>
            <strong>The price you see is the price you pay.</strong> No inflated
            sticker followed by a &ldquo;today-only&rdquo; discount.
          </p>
        </div>

        <div className={tStyles.grid}>
          {TRACKS.map((t, index) => {
            const fee = feeFor(t.key);
            return (
              <article
                key={t.key}
                className={`${tStyles.card} ${t.variantClass ? tStyles[t.variantClass] : ''}`}
                aria-labelledby={t.titleId}
                data-reveal
                data-reveal-delay={index}
              >
                {t.showSash && (
                  <span className={tStyles.popular}>
                    <span className={tStyles.popular_star} aria-hidden="true">★</span>
                    Most Popular
                  </span>
                )}
                {t.flagship && (
                  <span className={tStyles.flagship}>
                    <span className={tStyles.flagship_star} aria-hidden="true">★</span>
                    Flagship Program
                  </span>
                )}

                <span className={tStyles.track_eyebrow}>{t.eyebrow}</span>
                <h3 id={t.titleId} className={tStyles.title}>{t.title}</h3>

                <div className={tStyles.divider} />

                <div className={tStyles.specs}>
                  {t.specs.map(([k, val]) => (
                    <div key={k} className={tStyles.specs_row}>
                      <div className={tStyles.specs_key}>{k}</div>
                      <div className={tStyles.specs_val}>{val}</div>
                    </div>
                  ))}
                </div>

                <div className={tStyles.divider} />

                <div className={tStyles.section_label}>Hireable for</div>
                <ul className={tStyles.hireable}>
                  {t.hireable.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>

                <ul className={tStyles.tickrow}>
                  {t.tickrow.map((line) => (
                    <li key={line}>
                      <span className={tStyles.tickrow_mark} aria-hidden="true">✓</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {/* Fee block: total fee (with GST split) + no-cost EMI. */}
                <div className={tStyles.fee_block}>
                  <div className={tStyles.fee_cell}>
                    <span className={tStyles.fee_label}>Total Fee</span>
                    <span className={tStyles.fee_value}>{inr(fee.total)}</span>
                    <span className={styles.gst}>incl. 18% GST</span>
                    <span className={styles.split}>
                      {inr(fee.baseFee)} fee + {inr(fee.gst)} GST
                    </span>
                  </div>
                  <div className={`${tStyles.fee_cell} ${styles.emiCell}`}>
                    <span className={tStyles.fee_label}>No-Cost EMI</span>
                    <span className={tStyles.fee_value}>
                      {inr(fee.emiPerMonth)}<span className={tStyles.fee_suffix}>/month</span>
                    </span>
                  </div>
                </div>

                <div className={tStyles.batch_block}>
                  <span className={tStyles.batch_label}>Next Batch in</span>
                  <span className={tStyles.batch_date}>{t.nextBatch}</span>
                  {t.seatChip && <span className={tStyles.seat_chip}>{t.seatChip}</span>}
                </div>

                <div className={tStyles.cta_wrap}>
                  <a href="#hero-form" className={tStyles.cta} data-track-cta={t.key}>
                    START YOUR DM CAREER
                    <span className={tStyles.cta_arrow} aria-hidden="true">→</span>
                  </a>
                  <a href="#curriculum" className={tStyles.cta_secondary} data-track-curriculum={t.key}>
                    View curriculum
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Affordability + risk reversal, with icons + coloured cards. */}
        <div className={`${fStyles.assurances} ${styles.assurances}`}>
          {ASSURANCES.map((a) => (
            <div key={a.key} className={`${fStyles.assurance} ${fStyles[`assurance_${a.key}`]}`}>
              <span className={fStyles.assurance_icon} aria-hidden="true">{a.icon}</span>
              <span className={fStyles.assurance_badge}>{a.badge}</span>
              <p className={fStyles.assurance_text}>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
