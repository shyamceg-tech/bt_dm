/**
 * FaqsTraining.jsx — Training/Institute intent FAQ accordion.
 *
 * Reuses the shared Faqs.module.css (same visual language as the homepage and
 * best-page FAQs). Unlike FaqsBest, this block ALSO emits the canonical
 * FAQPage JSON-LD built from the same FAQS array — important for AEO/GEO, since
 * this is the primary FAQ surface for the training landing page.
 */

import { FAQS } from '@/data/training-bangalore.config';
import styles from '../Faqs.module.css';

/* Decode the handful of HTML entities used in the copy so the structured data
   carries clean, quotable plain text for answer/generative engines. Operates
   on static config literals only — no user input reaches this. */
const ENTITIES = {
  '&mdash;': '\u2014',
  '&ndash;': '\u2013',
  '&amp;': '&',
  '&rsquo;': '\u2019',
  '&lsquo;': '\u2018',
  '&ldquo;': '\u201C',
  '&rdquo;': '\u201D',
  '&hellip;': '\u2026',
  '&#8377;': '\u20B9',
};
const decode = (s) =>
  s.replace(/&(?:mdash|ndash|amp|rsquo|lsquo|ldquo|rdquo|hellip|#8377);/g, (m) => ENTITIES[m] || m);

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: decode(f.q),
    acceptedAnswer: {
      '@type': 'Answer',
      text: decode(f.a),
    },
  })),
};

export default function FaqsTraining() {
  return (
    <section
      id="section-19"
      className={styles.section}
      aria-labelledby="faqs-training-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>FAQs</span>
          <h2 id="faqs-training-heading" className={styles.heading}>
            Digital marketing training in Bangalore &mdash; your questions answered
          </h2>
        </header>

        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <details key={i} className={styles.faq} name="training-faq">
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
