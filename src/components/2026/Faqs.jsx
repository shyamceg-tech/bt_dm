/**
 * Faqs.jsx — BlueTick 2026 Refresh
 *
 * RSC. Native HTML <details>/<summary> accordion — zero JS. Each <details>
 * carries `name="bluetick-faq"`, which is a modern HTML attribute that makes
 * the whole group behave like a radio set (opening one closes the others).
 * In older browsers without `name` support, multiple can be open at once —
 * graceful degradation, no functional break.
 *
 * The plus→× toggle is pure CSS: two rotated pseudo-elements form a plus
 * sign, and `.toggle` rotates 45° when the parent has the `[open]` attr.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 9347–9438.
 */

import styles from './Faqs.module.css';

/* dangerouslySetInnerHTML is used here ONLY because the answer copy in
   Phase 1 includes a parenthetical ("1st attempt!") and stylistic emphasis
   we want to preserve. All strings are static literals in this file — no
   user input ever reaches the prop. */
const FAQS = [
  {
    q: 'Q1. Is the 100% placement rate real?',
    a: 'Yes - verified across our last 4 batches (312 students). We publish names; ask us for the full report.',
  },
  {
    q: "Q2. What's the lowest package any alumnus has accepted?",
    a: '\u20B93.2 LPA. We publish the floor because we publish the ceiling (\u20B922 LPA at Flipkart). Both are real.',
  },
  {
    q: 'Q3. Why pay for a course when Google offers free certifications?',
    a: "Free certifications teach concepts. They don't get you hired. Our students walk into interviews with 3 shipped live projects, a portfolio, recruiter intros, and 12 certifications - not just a Google Digital Garage badge.",
  },
  {
    q: 'Q4. Are your trainers actually working practitioners?',
    a: 'Yes. Every trainer on this page is currently running ad campaigns or building marketing for a real brand. Their LinkedIn profiles are linked above - verify before you join.',
  },
  {
    q: "Q5. What happens if I don't get placed in 90 days?",
    a: 'Our 6-month placement support kicks in - continued recruiter intros, interview prep, profile circulation. No artificial cut-off. The 100% placement number includes students who took 4&ndash;5 months, not just 90 days.',
  },
  {
    q: "Q6. I'm 26 with 3 years of work experience - won't I feel out of place?",
    a: '41% of our students are career switchers from non-marketing backgrounds. Most batches have a mix of freshers, working pros, and switchers in their late 20s. Weekend batches are designed specifically for working professionals.',
  },
  {
    q: 'Q7. Is the AI curriculum real or just marketing?',
    a: "Real. Module workflows include Custom GPT training, Midjourney creative pipelines, AI-driven attribution modeling, programmatic SEO with AI, and prompt-engineering for performance reporting. The full module list is in the syllabus we'll WhatsApp you.",
  },
  {
    q: 'Q8. Can I talk to a current BlueTick alumnus before joining?',
    a: "Yes. Fill the form and we'll connect you with 2 recent alumni in your stream of interest. You ask them anything you want.",
  },
];

/* Plain-text helper for the FAQPage schema: strips the display-only "Qn."
   prefix from questions and decodes the few HTML entities used in the answer
   copy so the structured data carries clean, quotable text for answer engines.
   Operates on the static FAQS literals only — no user input. */
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
const stripQNum = (q) => q.replace(/^Q\d+\.\s*/, '');

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: decodeEntities(stripQNum(f.q)),
    acceptedAnswer: {
      '@type': 'Answer',
      text: decodeEntities(f.a),
    },
  })),
};

export default function Faqs() {
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
            Honest answers to what you&rsquo;re actually wondering
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
