/**
 * CampusVisit.jsx — "Walk in this week — here's exactly what your free visit
 * looks like."
 *
 * Serves the decided-offline near-me buyer's real remaining need: a safe,
 * concrete first step. Not a "why offline" argument — a friction-remover that
 * turns "I should go check it out" into "I'll book the visit." Deep-navy
 * treatment (same family as the hero) to set it apart from the light sections
 * around it while staying fully on-brand.
 *
 * Server component.
 */

import { VISIT } from '@/data/near-me.config';
import styles from './CampusVisit.module.css';

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
                src="/img/near-me/bluetick-academy-indiranagar-reception.webp"
                alt="Reception at BlueTick Academy's Indiranagar centre, a minute from the metro"
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
              />
              <figcaption className={styles.photoCap}>
                This is where you’ll walk in - CMH Road, Indiranagar.
              </figcaption>
            </figure>

            <div className={styles.card}>
              <p className={styles.cardLine}>1 minute from Indiranagar Metro</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
