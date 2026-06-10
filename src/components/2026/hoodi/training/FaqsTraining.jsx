/**
 * FaqsTraining.jsx (Hoodi branch) — training FAQ accordion for the Hoodi page.
 * 1:1 copy of src/components/2026/training/FaqsTraining.jsx; the ONLY difference
 * is it imports FAQS from the Hoodi training config (Indiranagar campus answer
 * remapped to the Hoodi campus / Hoodi Junction). Reuses Faqs.module.css and
 * emits the FAQPage JSON-LD from the Hoodi FAQS.
 */

import { FAQS } from '@/data/hoodi/training-bangalore.config';
import styles from '@/components/2026/Faqs.module.css';

/* Decode the handful of HTML entities used in the copy so the structured data
   carries clean, quotable plain text for answer/generative engines. Operates
   on static config literals only — no user input reaches this. */
const ENTITIES = {
  '&mdash;': '—',
  '&ndash;': '–',
  '&amp;': '&',
  '&rsquo;': '’',
  '&lsquo;': '‘',
  '&ldquo;': '“',
  '&rdquo;': '”',
  '&hellip;': '…',
  '&#8377;': '₹',
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
