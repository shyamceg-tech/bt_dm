/**
 * ResumeTransformation.jsx — BlueTick 2026 Refresh
 *
 * RSC. Day 1 (muted, monospaced, dashed) vs Day 121 (bright, brand-blue,
 * structured). Mobile: stacked with downward arrow. Desktop ≥1024px:
 * side-by-side with rightward arrow.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 8772–8914.
 */

import styles from './ResumeTransformation.module.css';

/* ─── Day 1 resume rows (no internships / projects / certifications) ─────── */
const DAY1_ROWS = [
  {
    key: 'Objective',
    val: 'Seeking a challenging position in a reputed organization where I can utilize my skills and contribute to the growth of the company.',
  },
  { key: 'Education',      val: 'BBA, [College], 2024' },
  {
    key: 'Skills',
    val: 'MS Office, Communication, Teamwork, Hard Working, Quick Learner, Time Management',
  },
  { key: 'Internships',    val: '—', empty: true },
  { key: 'Projects',       val: '—', empty: true },
  { key: 'Certifications', val: '—', empty: true },
  { key: 'Languages',      val: 'English, Hindi, Kannada' },
  { key: 'Hobbies',        val: 'Reading, Listening to Music, Travelling, Cricket' },
];

/* ─── Day 121 numbered live projects ────────────────────────────────────── */
const DAY121_PROJECTS = [
  { num: '01', preMetric: 'Reduced CPA from ',           metric: '₹1,200 → ₹380',              postMetric: ' for BookMyScans, 6-week Google Ads campaign' },
  { num: '02', preMetric: 'Built lead-gen funnel generating ', metric: '312 leads at ₹640 CPL', postMetric: ' for Decfort' },
  { num: '03', preMetric: 'Programmatic SEO build: ',    metric: '400+ pages, 18K organic visits/month', postMetric: '' },
  { num: '04', preMetric: 'Email lifecycle automation in Klaviyo: ', metric: '42% open rate, 8% CTR', postMetric: '' },
  { num: '05', preMetric: 'AI ad creative pipeline (GPT-4 + Midjourney): ', metric: '200+ variants shipped/week', postMetric: '' },
  { num: '06', preMetric: 'Marketing automation with n8n: ', metric: '12 workflows live',       postMetric: ' for EY' },
  { num: '07', preMetric: 'Live Looker Studio dashboard for Razorpay across ', metric: '5 channels', postMetric: '' },
  { num: '08', preMetric: 'WhatsApp campaign on Gupshup: ', metric: '28% reply rate, ₹47 CPL', postMetric: '' },
];

const DAY121_TOOLS = [
  'Google Ads', 'Meta Ads', 'GA4', 'Looker Studio', 'GPT-4',
  'Midjourney', 'Ahrefs', 'n8n', 'Klaviyo', '+11 more',
];

const DAY121_CERTS = [
  'Google Ads (5)', 'Microsoft Ads', 'Meta Blueprint',
  'HubSpot Inbound', 'HubSpot Content', 'SEMrush SEO',
];

const DAY121_AI = [
  'Custom GPTs',
  'Prompt engineering for performance',
  'AI-driven attribution modeling',
];

export default function ResumeTransformation() {
  return (
    <section
      id="section-12"
      className={styles.section}
      aria-labelledby="resume-transformation-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>Resume Transformation</span>
          <h2 id="resume-transformation-heading" className={styles.heading}>
            Your resume on Day 1 vs. your resume on Day 121
          </h2>
        </header>

        <div className={styles.stage}>
          {/* ─── Day 1 resume ─── */}
          <article
            className={`${styles.resume} ${styles.day1}`}
            aria-label="Resume on Day 1, before BlueTick"
          >
            <span className={styles.label}>Day 1</span>
            <div className={styles.header}>
              <div className={styles.name}>[Your Name]</div>
              <div className={styles.tagline}>Fresh Graduate</div>
            </div>

            {DAY1_ROWS.map((r) => (
              <div key={r.key} className={styles.row}>
                <div className={styles.key}>{r.key}</div>
                <div className={`${styles.val} ${r.empty ? styles.empty : ''}`}>
                  {r.val}
                </div>
              </div>
            ))}

            <p className={styles.bottom_line}>References available on request.</p>
          </article>

          {/* ─── Arrow ─── */}
          <div className={styles.arrow} aria-hidden="true">
            <svg className={styles.arrow_vert} width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 4 V26 M8 19 L16 27 L24 19"
                stroke="#1A5FFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* ─── Day 121 resume ─── */}
          <article
            className={`${styles.resume} ${styles.day121}`}
            aria-label="Resume on Day 121, after BlueTick"
          >
            <span className={styles.label}>Day 121</span>
            <div className={styles.header}>
              <div className={styles.name}>[Your Name]</div>
              <div className={styles.tagline}>AI-native performance marketer</div>
            </div>

            <div className={styles.row}>
              <div className={styles.key}>Education</div>
              <div className={styles.val}>
                BBA + <strong>Post Graduate Program in Digital Marketing &amp; Analytics</strong>, BlueTick Academy
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.key}>Live Projects</div>
              <ol className={styles.list_numbered}>
                {DAY121_PROJECTS.map((p) => (
                  <li key={p.num}>
                    <span className={styles.list_num}>{p.num}</span>
                    <span className={styles.list_text}>
                      {p.preMetric}
                      <span className={styles.metric}>{p.metric}</span>
                      {p.postMetric}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className={styles.row}>
              <div className={styles.key}>Tools</div>
              <div className={styles.val}>
                <div className={styles.chip_row} aria-label="Tool stack">
                  {DAY121_TOOLS.map((t) => (
                    <span key={t} className={styles.chip}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.key}>Certifications</div>
              <div className={styles.val}>
                <div className={styles.chip_row} aria-label="Certifications">
                  {DAY121_CERTS.map((c) => (
                    <span key={c} className={`${styles.chip} ${styles.chip_cert}`}>{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.key}>AI Stack</div>
              <div className={styles.val}>
                <div className={styles.chip_row} aria-label="AI stack">
                  {DAY121_AI.map((a) => (
                    <span key={a} className={`${styles.chip} ${styles.chip_ai}`}>{a}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className={styles.bottom_line}>Two dense pages of shippable work.</p>
          </article>
        </div>

        <p className={styles.closing}>
          This is the difference 120 days makes. Same person &mdash; a portfolio&rsquo;s worth of credibility heavier.
        </p>
      </div>
    </section>
  );
}
