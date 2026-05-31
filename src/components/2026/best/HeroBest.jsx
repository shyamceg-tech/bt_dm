/**
 * HeroBest.jsx — "Best/Top digital marketing institute" intent hero.
 * Rank-led, 3 proof stats inline, MiniForm on the right (id=best-hero-form).
 */

import { HERO } from '@/data/best-bangalore.config';
import HeroBestForm from './HeroBestForm';
import styles from './HeroBest.module.css';

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M17 4h3v3a3 3 0 0 1-3 3M7 4H4v3a3 3 0 0 0 3 3" />
    </svg>
  );
}

export default function HeroBest() {
  return (
    <section className={styles.hero} aria-labelledby="best-hero-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.rankChip}>
            <TrophyIcon />
            <span>{HERO.eyebrow}</span>
          </p>

          <h1 className={styles.headline} id="best-hero-heading">
            <span className={styles.headline_lead}>{HERO.headlineLead}</span>
            <span className={styles.headline_city}>{HERO.headlineCity}</span>
            <span className={styles.headline_kicker}>{HERO.headlineKicker}</span>
          </h1>

          <p
            className={styles.subline}
            dangerouslySetInnerHTML={{ __html: HERO.subline }}
          />

          <ul className={styles.proofs} aria-label="Why we rank #1">
            {HERO.proofs.map((p) => (
              <li key={p.num} className={styles.proof}>
                <span className={styles.proof_num}>{p.num}</span>
                <span className={styles.proof_label}>{p.label}</span>
              </li>
            ))}
          </ul>

          <div className={styles.ctaRow}>
            <a className={styles.btnPrimary} href="#best-hero-form">
              <TrophyIcon />
              <span>{HERO.primaryCta}</span>
            </a>
            <a className={styles.btnGhost} href="#comparison-best">
              {HERO.secondaryCta}
            </a>
          </div>
        </div>

        <HeroBestForm />
      </div>
    </section>
  );
}
