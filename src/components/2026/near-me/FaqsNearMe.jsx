/**
 * FaqsNearMe.jsx — FAQ accordion tuned to the near-me buyer.
 * Reuses the same native <details>/<summary> pattern as Faqs.jsx;
 * shares Faqs.module.css for visual consistency.
 */

import { FAQS } from '@/data/near-me.config';
import styles from '../Faqs.module.css';

export default function FaqsNearMe() {
  return (
    <section
      id="faqs-near-me"
      className={styles.section}
      aria-labelledby="faqs-near-me-heading"
    >
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
