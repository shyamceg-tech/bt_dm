/**
 * HeroNearMe.jsx — Near-Me intent landing page hero
 *
 * Mirrors Hero.jsx's split-column layout (copy left, form right on desktop;
 * stacked on mobile) but rewires copy + CTAs for location-first intent.
 *
 * Server component for the copy column; HeroNearMeForm is a client island
 * that posts to /api/bigin via the shared submitToBigin helper.
 */

import { CAMPUS } from '@/data/near-me.config';
import HeroNearMeForm from './HeroNearMeForm';
import styles from './HeroNearMe.module.css';

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const PROOFS = [
  'Walk into our Indiranagar campus, Mon–Sat',
  '312 alumni placed in the last 4 batches',
  'Trainers running live campaigns — not full-time teachers',
  'Next batch starts 12 Aug — limited seats',
];

export default function HeroNearMe() {
  return (
    <section className={styles.hero} aria-labelledby="near-me-hero-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.locationChip}>
            <PinIcon />
            <span>Indiranagar, Bangalore · 10-min walk from Metro</span>
          </p>

          <h1 className={styles.headline} id="near-me-hero-heading">
            <span className={styles.headline_lead}>Digital Marketing Course</span>
            <span className={styles.headline_near}>Near You</span>
            <span className={styles.headline_loc}>In Bangalore</span>
          </h1>

          <p className={styles.subline}>
            Walk into our <em>Indiranagar campus</em> this week — see the
            classroom, meet the trainers, and decide for yourself.
          </p>

          <ul className={styles.proofs} aria-label="Why students choose us">
            {PROOFS.map((label) => (
              <li key={label} className={styles.proof}>
                <CheckIcon />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className={styles.ctaRow}>
            <a className={styles.btnSecondary} href="#location-proof">
              <PinIcon />
              <span>Book a Campus Visit</span>
            </a>
            <a className={styles.btnGhost} href={CAMPUS.whatsapp} target="_blank" rel="noopener noreferrer">
              Talk to a Counsellor
            </a>
          </div>
        </div>

        <HeroNearMeForm />
      </div>
    </section>
  );
}
