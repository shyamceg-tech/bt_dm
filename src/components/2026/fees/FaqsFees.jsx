/**
 * FaqsFees.jsx — FAQ accordion tuned to the fee searcher.
 *
 * Reuses the native <details>/<summary> pattern and Faqs.module.css for visual
 * consistency with the homepage. Unlike FaqsNearMe, this one DOES emit a
 * FAQPage entity — the fee Q&A (with the actual numbers) is exactly the kind of
 * content answer/generative engines surface for "how much does a digital
 * marketing course cost" queries, so it is worth the structured data.
 *
 * Copy lives in fees.config.js (FAQS). Answer strings use HTML entities and
 * light markup for display; the schema below strips both to clean text.
 */

import { FAQS } from '@/data/fees.config';
import styles from '../Faqs.module.css';

/* Decode the few named/numeric entities used in the answer copy and strip any
   inline tags, so the FAQPage schema carries clean, quotable text. Operates on
   the static config literals only — no user input. */
const ENTITIES = {
  '&#8377;': '₹',
  '&mdash;': '—',
  '&ndash;': '–',
  '&amp;': '&',
  '&rsquo;': '’',
  '&lsquo;': '‘',
  '&ldquo;': '“',
  '&rdquo;': '”',
  '&hellip;': '…',
};

const toPlainText = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&#8377;|&(?:mdash|ndash|amp|rsquo|lsquo|ldquo|rdquo|hellip);/g, (m) => ENTITIES[m] || m);

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: toPlainText(f.q),
    acceptedAnswer: {
      '@type': 'Answer',
      text: toPlainText(f.a),
    },
  })),
};

export default function FaqsFees() {
  return (
    <section
      id="section-19"
      className={styles.section}
      aria-labelledby="faqs-fees-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Fees, EMI &amp; ROI</span>
          <h2 id="faqs-fees-heading" className={styles.heading}>
            Straight answers about the fees — before you give us your number
          </h2>
        </header>

        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <details key={i} className={styles.faq} name="fees-faq">
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
