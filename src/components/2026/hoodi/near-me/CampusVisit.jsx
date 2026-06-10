/**
 * CampusVisit.jsx (Hoodi branch) — "Walk in this week — here's exactly what your
 * free visit looks like."
 *
 * Hoodi-branch twin of src/components/2026/near-me/CampusVisit.jsx. Reuses the
 * shared CampusVisit.module.css; pulls VISIT from the Hoodi config and shows a
 * real Hoodi photo. Server component.
 */

import { VISIT } from '@/data/hoodi/near-me.config';
import styles from '../../near-me/CampusVisit.module.css';

export default function CampusVisit() {
  return (
    <section id="campus-visit" className={styles.section} aria-labelledby="campus-visit-heading">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 id="campus-visit-heading" className={styles.heading}>
              Digital marketing training near you?{' '}
              <span className={styles.heading_accent}>Walk in and see a class this week.</span>
            </h2>

            <ol className={styles.steps}>
              {VISIT.steps.map((s) => (
                <li key={s.n} className={styles.step}>
                  <span className={styles.stepNum} aria-hidden="true">{s.n}</span>
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepText}>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className={styles.side}>
            <figure className={styles.photoWrap}>
              <img
                className={styles.photo}
                src="/img/near-me/Hoodi%2003.webp"
                alt="Reception at BlueTick Academy's Hoodi centre on ITPL Road, a minute from Hoodi Junction"
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
              />
              <figcaption className={styles.photoCap}>
                This is where you’ll walk in - ITPL Road, Hoodi.
              </figcaption>
            </figure>

            <div className={styles.card}>
              <p className={styles.cardLine}>1 minute from Hoodi Junction</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
