/**
 * PlacementProcess.jsx — "How placement actually works" (the process, step by
 * step). Defuses the core objection: is the guarantee real? Reuses
 * best/WhyNo1.module.css grid/card styling; the step number sits in the icon
 * slot.
 */

import { PLACEMENT_PROCESS } from '@/data/placement-bangalore.config';
import styles from '../best/WhyNo1.module.css';

export default function PlacementProcess() {
  return (
    <section
      id="how-placement-works"
      className={styles.section}
      aria-labelledby="how-placement-works-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>How placement actually works</span>
          <h2 id="how-placement-works-heading" className={styles.heading}>
            &ldquo;Placement&rdquo; is a <em>process</em> here, not a slogan.
          </h2>
          <p className={styles.subline}>
            Four steps from the day you enrol to the day you sign an offer — and what we put in writing.
          </p>
        </header>

        <ul className={styles.grid}>
          {PLACEMENT_PROCESS.map((s) => (
            <li key={s.step} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <strong style={{ fontSize: '1.05rem', lineHeight: 1 }}>{s.step}</strong>
              </span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.body}>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
