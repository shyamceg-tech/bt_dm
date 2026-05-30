/**
 * AiToolStack.jsx — BlueTick 2026 Refresh
 *
 * RSC. The "50+ AI Tool Stack you'll master" section. 33 named chips +
 * "+ 20 more" trailing chip = 50+ total.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 7659–7706.
 *
 * Logo strategy:
 *   - Chips with a `logo` field render an <Image> from /img/ai-tools/.
 *   - Chips without a logo fall back to the letter dot (Phase 1 default).
 *
 * Only Claude and n8n have identifiable logo files in the uploaded set
 * (`claude.webp` + `n8n.webp`). The other 20 IMG_* files in /public/img/
 * ai-tools/ are unidentified — see STATUS.md for the manual-ID list. Once
 * those files are renamed, just add the `logo` field to the matching chip
 * entry below and that chip will pick it up automatically.
 */

import Image from 'next/image';
import styles from './AiToolStack.module.css';

/* ─── Tool data (Phase 1 line 7670–7702) ──────────────────────────────────
   Each entry: { name, dot, logo? }
     - dot:  fallback letter shown when no logo (Phase 1 default)
     - logo: optional filename in /public/img/ai-tools/ */
const TOOLS = [
  { name: 'WordPress',                dot: 'W' },
  { name: 'Semrush',                  dot: 'S' },
  { name: 'Ahrefs',                   dot: 'A' },
  { name: 'GA4 Dashboards',           dot: 'G' },
  { name: 'Google Ads',               dot: 'G' },
  { name: 'Meta Ads Manager',         dot: 'M' },
  { name: 'Microsoft Ads',            dot: 'M' },
  { name: 'LinkedIn Campaign Manager', dot: 'L' },
  { name: 'Google Tag Manager',       dot: 'G' },
  { name: 'Looker Studio',            dot: 'L' },
  { name: 'HubSpot CRM',              dot: 'H' },
  { name: 'Zapier',                   dot: 'Z' },
  { name: 'n8n',                      dot: 'N', logo: 'n8n.webp' },
  { name: 'Make',                     dot: 'M' },
  { name: 'ManyChat',                 dot: 'M' },
  { name: 'Gupshup',                  dot: 'G' },
  { name: 'Canva',                    dot: 'C' },
  { name: 'Adobe Firefly',            dot: 'A' },
  { name: 'VEED',                     dot: 'V' },
  { name: 'HeyGen',                   dot: 'H' },
  { name: 'Looka',                    dot: 'L' },
  { name: 'Buffer',                   dot: 'B' },
  { name: 'YouTube Studio',           dot: 'Y' },
  { name: 'Mailchimp',                dot: 'M' },
  { name: 'Brevo',                    dot: 'B' },
  { name: 'Claude',                   dot: 'C', logo: 'claude.webp' },
  { name: 'Perplexity',               dot: 'P' },
  { name: 'Julius AI',                dot: 'J' },
  { name: 'Lovable',                  dot: 'L' },
  { name: 'v0.dev',                   dot: 'v' },
  { name: 'Notion AI',                dot: 'N' },
  { name: 'Miro',                     dot: 'M' },
  { name: 'Shopify',                  dot: 'S' },
];

export default function AiToolStack() {
  return (
    <section className={styles.section} aria-labelledby="ai-toolstack-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>The Stack</p>
        <h2 className={styles.heading} id="ai-toolstack-heading">
          The <span className={styles.count}>50+</span> AI Tool Stack you&rsquo;ll master
        </h2>
        <p className={styles.subline}>
          Hands-on practice on the exact tools agencies are hiring for this
          quarter &mdash; not the ones your college taught two years ago.
          Curriculum refreshes every quarter.
        </p>

        <div
          className={styles.grid}
          role="list"
          aria-label="50+ AI and marketing tools covered in the curriculum"
        >
          {TOOLS.map((t) => (
            <span key={t.name} className={styles.chip} role="listitem">
              {t.logo ? (
                <Image
                  src={`/img/ai-tools/${t.logo}`}
                  alt=""
                  width={18}
                  height={18}
                  className={styles.chip_logo}
                />
              ) : (
                <span className={styles.chip_dot} aria-hidden="true">
                  {t.dot}
                </span>
              )}
              {t.name}
            </span>
          ))}
          <span className={styles.more}>+ 20 more</span>
        </div>
      </div>
    </section>
  );
}
