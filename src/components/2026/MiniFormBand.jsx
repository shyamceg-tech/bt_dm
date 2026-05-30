/**
 * MiniFormBand.jsx — BlueTick 2026 Refresh
 *
 * RSC shell. Hosts the second MiniForm instance (`formPosition="mini-form-2"`)
 * on a deep-navy band with an aurora blob top-right. This is form #3 of 6
 * (Phase 1 source: bluetick-2026-refresh-v3.html lines 7595–7617).
 *
 * The form itself is the same client component (`MiniForm`) that CTA Banner
 * #1 uses — only one JS module ships even though the form appears twice on
 * the page.
 *
 * Tracks-section CTA buttons (in Tracks.jsx) anchor to `#mini-form-2`, which
 * matches the form's `id`. CSS `scroll-behavior: smooth` in globals.css makes
 * the scroll animated.
 */

import MiniForm from './MiniForm';
import styles from './MiniFormBand.module.css';

export default function MiniFormBand() {
  return (
    <section className={styles.section} aria-labelledby="mini-form-band-h">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Ready to lock your seat?</p>
        <h2 id="mini-form-band-h" className={styles.title}>
          Apply for the next batch &mdash; 7 seats left
        </h2>

        <MiniForm
          id="mini-form-2"
          formPosition="mini-form-2"
          theme="light"
          ariaLabel="Apply for the next batch"
        />

        <p className={styles.micro}>
          Advisor calls back within 12 minutes &middot; Mon&ndash;Sat, 10am&ndash;7pm
        </p>
      </div>
    </section>
  );
}
