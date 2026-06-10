/**
 * FaqsOnline.jsx — FAQ accordion tuned to the online buyer.
 * Reuses the exact native <details>/<summary> pattern and Faqs.module.css from
 * the homepage Faqs, so the visual design is identical. Copy comes from
 * online.config (FAQS). Emits its own FAQPage JSON-LD using the same
 * entity-stripping helpers as the homepage component so answer/generative
 * engines get clean, quotable text.
 */

import { FAQS } from '@/data/online.config';
import styles from '../Faqs.module.css';

/* Strip the display-only "Qn." prefix, the inline <strong> tags, and decode the
   few HTML entities used in the answer copy so the structured data carries
   clean plain text. Operates on the static config literals only. */
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
const decodeEntities = (s) =>
  s.replace(/&(?:mdash|ndash|amp|rsquo|lsquo|ldquo|rdquo|hellip);/g, (m) => ENTITIES[m] || m);
const stripTags = (s) => s.replace(/<[^>]+>/g, '');
const stripQNum = (q) => q.replace(/^Q\d+\.\s*/, '');

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: decodeEntities(stripTags(stripQNum(f.q))),
    acceptedAnswer: {
      '@type': 'Answer',
      text: decodeEntities(stripTags(f.a)),
    },
  })),
};

export default function FaqsOnline() {
  return (
    <section
      id="faqs-online"
      className={styles.section}
      aria-labelledby="faqs-online-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>Before you enrol</span>
          <h2 id="faqs-online-heading" className={styles.heading}>
            The questions every online searcher actually asks us
          </h2>
        </header>

        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <details key={i} className={styles.faq} name="online-faq">
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
