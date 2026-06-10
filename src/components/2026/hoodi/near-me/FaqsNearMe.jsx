/**
 * FaqsNearMe.jsx (Hoodi branch) — FAQ accordion tuned to the near-me / offline
 * buyer in the Hoodi catchment. Hoodi-branch twin of
 * src/components/2026/near-me/FaqsNearMe.jsx: identical logic, reuses
 * Faqs.module.css, pulls FAQS from the Hoodi config and co-locates a FAQPage
 * JSON-LD block built from them.
 */

import { FAQS } from '@/data/hoodi/near-me.config';
import styles from '../../Faqs.module.css';

/* Plain-text helpers for the FAQPage schema: strip the <strong>/<em> tags and
   decode the HTML entities used in the answer copy so the structured data
   carries clean, quotable text. Operates on static config literals only. */
const ENTITIES = {
  '&mdash;': '—',
  '&ndash;': '–',
  '&amp;': '&',
  '&rsquo;': '’',
  '&lsquo;': '‘',
  '&ldquo;': '“',
  '&rdquo;': '”',
  '&hellip;': '…',
};
const decode = (s) =>
  s
    .replace(/<\/?[^>]+>/g, '')
    .replace(/&(?:mdash|ndash|amp|rsquo|lsquo|ldquo|rdquo|hellip);/g, (m) => ENTITIES[m] || m);

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: decode(f.q),
    acceptedAnswer: { '@type': 'Answer', text: decode(f.a) },
  })),
};

export default function FaqsNearMe() {
  return (
    <section
      id="section-19"
      className={styles.section}
      aria-labelledby="faqs-near-me-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Before you decide</span>
          <h2 id="faqs-near-me-heading" className={styles.heading}>
            The questions every near-me searcher actually asks us
          </h2>
        </header>

        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <details key={i} className={styles.faq} name="near-me-faq">
              <summary>
                <span dangerouslySetInnerHTML={{ __html: f.q }} />
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <div
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: f.a }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
