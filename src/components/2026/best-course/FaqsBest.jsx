/**
 * FaqsBest.jsx — best/top intent variant of <Faqs/>.
 *
 * RSC. Identical markup + identical CSS module to the homepage FAQ
 * (../Faqs.module.css) — only the questions change. Copy is sourced from
 * src/data/best-course.config.js so it's editable in one place.
 *
 * The 8 Q&As map 1:1 to the cluster sub-intents (is-it-really-best · top-10
 * with fees · 100% placement · fees/EMI · which-course-is-best · what-#1-means
 * · trainers · talk-to-alumnus) and carry the top-5 head terms with weighted
 * density.
 *
 * NOTE (item 4 / AEO): the FAQPage JSON-LD is intentionally NOT emitted here.
 * It is added in the SEO/AEO/GEO pass (item 4) — generated from this same FAQS
 * array — so all structured data is finalized together at the end.
 */

import styles from '../Faqs.module.css';
import { FAQS } from '@/data/best-course.config';

/* Plain-text helpers for the FAQPage schema: strip the display-only "Qn."
   prefix and decode the HTML entities used in the copy so answer engines get
   clean, quotable text. Operates on the static FAQS literals only. */
const ENTITIES = {
  '&mdash;': '\u2014',
  '&ndash;': '\u2013',
  '&amp;': '&',
  '&rsquo;': '\u2019',
  '&lsquo;': '\u2018',
  '&ldquo;': '\u201C',
  '&rdquo;': '\u201D',
  '&hellip;': '\u2026',
  '&middot;': '\u00B7',
  '&trade;': '\u2122',
};
const decodeEntities = (s) =>
  s.replace(
    /&(?:mdash|ndash|amp|rsquo|lsquo|ldquo|rdquo|hellip|middot|trade);/g,
    (m) => ENTITIES[m] || m
  );
const stripQNum = (q) => q.replace(/^Q\d+\.\s*/, '');

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: decodeEntities(stripQNum(f.q)),
    acceptedAnswer: { '@type': 'Answer', text: decodeEntities(f.a) },
  })),
};

export default function FaqsBest() {
  return (
    <section
      id="section-19"
      className={styles.section}
      aria-labelledby="faqs-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>FAQs</span>
          <h2 id="faqs-heading" className={styles.heading}>
            Choosing the best digital marketing course in Bangalore &mdash; honest
            answers
          </h2>
        </header>

        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <details key={i} className={styles.faq} name="bluetick-faq">
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
