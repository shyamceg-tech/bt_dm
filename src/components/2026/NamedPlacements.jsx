/**
 * NamedPlacements.jsx — BlueTick 2026 Refresh
 *
 * RSC. Heading + subline pre-rendered. The filter pills + alumni grid
 * delegate to a tiny client island (`NamedPlacementsBoard`) because the
 * filter requires `useState`.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 7297–7390.
 *
 * Photos: master prompt § 0.5 maps the 9 alumni cards to the 9 student
 * photos in /public/img/photo/{1..9}.jpg. If a name doesn't match the
 * person in the photo, that's a content-curation fix (rename / swap files)
 * the team can do without code changes.
 */

import styles from './NamedPlacements.module.css';
import NamedPlacementsBoard from './NamedPlacementsBoard';

export default function NamedPlacements() {
  return (
    <section className={styles.section} aria-labelledby="placements-heading">
      <div className={styles.inner}>
        <h2 className={styles.heading} id="placements-heading">
          Where our 2025&ndash;26 batches landed &mdash; real names, real
          companies, real packages
        </h2>
        <p className={styles.subline}>
          Every name below is a verified BlueTick alumnus.
        </p>

        <NamedPlacementsBoard />
      </div>
    </section>
  );
}
