/**
 * AiEdge.jsx — "2026 curriculum vs 2023 syllabus" contrast section.
 * Unique to this page — not a copy of AiToolStack or Modules.
 */

import styles from './AiEdge.module.css';

const OLD_CURRICULUM = [
  'Generic SEO keyword research (no AI tools)',
  'Canva for graphics - no AI generation',
  'Manual competitor audits via browser',
  'Copy-paste ad copy from templates',
  'Static annual content calendar',
  'GA4 dashboards - no predictive analysis',
  'Email campaigns without segmentation AI',
];

const NEW_CURRICULUM = [
  'ChatGPT + Gemini for research, strategy & copy',
  'Midjourney · Adobe Firefly for AI creatives',
  'Semrush AI + Perplexity for live SERP analysis',
  'Jasper / Copy.ai for 50-variant ad copy at scale',
  'AI-driven content planning with predictive SEO',
  'GA4 + Looker Studio + AI anomaly detection',
  'Klaviyo + AI segmentation for lifecycle email',
];

export default function AiEdge() {
  return (
    <section
      id="ai-edge"
      className={styles.section}
      aria-labelledby="ai-edge-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>AI-native 2026 curriculum</span>
          <h2 id="ai-edge-heading" className={styles.heading}>
            Other institutes teach 2023 SEO.
            <br />We teach what gets you hired <em>today</em>.
          </h2>
          <p className={styles.subline}>
            Recruiters now filter on AI fluency. We rebuilt every module around
            the tools hiring managers ask about on day one.
          </p>
        </header>

        <div className={styles.split}>
          <div className={styles.col + ' ' + styles.col_old}>
            <p className={styles.col_label}>What &ldquo;Top-10&rdquo; institutes still teach</p>
            <ul className={styles.list}>
              {OLD_CURRICULUM.map((item) => (
                <li key={item} className={`${styles.item} ${styles.item_old}`}>
                  <span className={styles.mark_no} aria-hidden="true">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col + ' ' + styles.col_new}>
            <p className={styles.col_label}>What we teach at BlueTick</p>
            <ul className={styles.list}>
              {NEW_CURRICULUM.map((item) => (
                <li key={item} className={`${styles.item} ${styles.item_new}`}>
                  <span className={styles.mark_yes} aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.badge}>
          <strong>50+</strong>
          <span>AI tools across 25 modules - integrated, not optional add-ons.</span>
        </div>
      </div>
    </section>
  );
}
