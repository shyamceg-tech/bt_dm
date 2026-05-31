/**
 * FaqsBest.jsx — Best/top intent FAQ accordion.
 * Reuses the shared Faqs.module.css (same visual language).
 */

import { FAQS } from '@/data/best-bangalore.config';
import styles from '../Faqs.module.css';

export default function FaqsBest() {
  return (
    <section
      id="faqs-best"
      className={styles.section}
      aria-labelledby="faqs-best-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Before you decide</span>
          <h2 id="faqs-best-heading" className={styles.heading}>
            The questions every &ldquo;best/top&rdquo; searcher actually asks us
          </h2>
        </header>

        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <details key={i} className={styles.faq} name="best-faq">
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
