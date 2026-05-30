/**
 * Certifications.jsx — BlueTick 2026 Refresh
 *
 * RSC. Twelve industry certification tiles. Mobile: horizontal scroll-snap
 * with mask edge + swipe hint. Tablet ≥768px: 3-col grid. Desktop ≥1024px:
 * 4-col grid. Plus a callout box and confidence note below.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 8488–8571.
 */

import styles from './Certifications.module.css';

const CERTS = [
  { brand: 'google',    title: 'Ads Search Certification' },
  { brand: 'google',    title: 'Ads Display Certification' },
  { brand: 'google',    title: 'Ads Video Certification' },
  { brand: 'google',    title: 'Analytics (GA4)' },
  { brand: 'microsoft', title: 'Bing Ads Search' },
  { brand: 'meta',      title: 'Blueprint Digital Marketing' },
  { brand: 'hubspot',   title: 'Inbound Marketing' },
  { brand: 'hubspot',   title: 'Content Marketing' },
  { brand: 'hubspot',   title: 'Email Marketing' },
  { brand: 'semrush',   title: 'SEO Toolkit' },
  { brand: 'google',    title: 'Digital Garage' },
  { brand: 'linkedin',  title: 'Marketing Fundamentals' },
];

const BRAND_LABEL = {
  google: 'Google',
  microsoft: 'Microsoft',
  meta: 'Meta',
  hubspot: 'HubSpot',
  semrush: 'SEMrush',
  linkedin: 'LinkedIn',
};

/* Inline checkmark SVG used in both tile-check and confidence-icon */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section className={styles.section} aria-labelledby="certifications-heading">
      <div className={styles.inner}>
        <h2 className={styles.heading} id="certifications-heading">
          Get Certified by Google &amp; Microsoft
        </h2>
        <p className={styles.subline}>
          Industry certifications for Google Ads &amp; Bing Ads + 12 more
          globally recognized certifications included.
        </p>

        <ol
          className={styles.carousel}
          aria-label="12 industry certifications, swipe horizontally to view all"
        >
          {CERTS.map(({ brand, title }, i) => (
            <li key={`${brand}-${title}-${i}`} className={styles.tile}>
              <span className={styles.tile_check} aria-hidden="true">
                <CheckIcon />
              </span>
              <span className={`${styles.brand} ${styles[`brand_${brand}`]}`}>
                {BRAND_LABEL[brand]}
              </span>
              <h3 className={styles.tile_title}>{title}</h3>
            </li>
          ))}
        </ol>

        <div className={styles.hint} aria-hidden="true">
          <span>Swipe for all 12</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>

        <div className={styles.callout}>
          <strong>12 certifications.</strong> All recognized by recruiters and
          listable on LinkedIn. We don&rsquo;t charge extra &mdash; they&rsquo;re
          part of the program.
        </div>

        <div className={styles.confidence}>
          <span className={styles.confidence_icon} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </span>
          <p className={styles.confidence_text}>
            We&rsquo;re so confident &mdash; with our training and your focus,
            you&rsquo;ll clear the certification in your <em>1st attempt!</em>
          </p>
        </div>
      </div>
    </section>
  );
}
