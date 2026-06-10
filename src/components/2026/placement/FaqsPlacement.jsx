/**
 * FaqsPlacement.jsx — placement/job intent FAQ accordion.
 *
 * Emits a FAQPage JSON-LD entity (AEO/GEO: eligible for FAQ rich results and
 * quotable by answer/generative engines). Native <details>/<summary> — zero JS.
 * Reuses the shared Faqs.module.css visual language.
 *
 * All FAQ strings are static literals from the config — no user input ever
 * reaches the dangerouslySetInnerHTML props.
 */

import { FAQS } from '@/data/placement-bangalore.config';
import styles from '../Faqs.module.css';

/* Decode the few HTML entities used in answer copy + strip tags so the
   FAQPage schema carries clean, quotable plain text for answer engines. */
const ENTITIES = {
  '&mdash;': '—', '&ndash;': '–', '&amp;': '&', '&rsquo;': '’',
  '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”', '&hellip;': '…',
  '&#8377;': '₹',
};
const decodeEntities = (s) =>
  s.replace(/&(?:mdash|ndash|amp|rsquo|lsquo|ldquo|rdquo|hellip|#8377);/g, (m) => ENTITIES[m] || m);
const stripTags = (s) => s.replace(/<[^>]+>/g, '');
const toPlain = (s) => decodeEntities(stripTags(s));

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: toPlain(f.q),
    acceptedAnswer: {
      '@type': 'Answer',
      text: toPlain(f.a),
    },
  })),
};

export default function FaqsPlacement() {
  return (
    <section
      id="faqs-placement"
      className={styles.section}
      aria-labelledby="faqs-placement-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Before you decide</span>
          <h2 id="faqs-placement-heading" className={styles.heading}>
            The placement &amp; job questions every searcher actually asks us
          </h2>
        </header>

        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <details key={i} className={styles.faq} name="placement-faq">
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
