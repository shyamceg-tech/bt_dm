/**
 * Trainers.jsx — BlueTick 2026 Refresh
 *
 * RSC. Deep-navy section with two aurora blobs (top-left + bottom-right).
 * Eyebrow → headline → stat centerpiece → italic tagline → 4 trainer points
 * → vs-comparison closing box.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 8574–8644.
 */

import styles from './Trainers.module.css';

/* ─── Inline SVG icons (4 trainer points + tagline check) ─────────────────── */
function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function IconActivity() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const POINTS = [
  {
    icon: <IconLayers />,
    title: 'Working agency practitioners',
    body: 'Not full-time academicians. People currently running campaigns for paying clients in Bangalore.',
  },
  {
    icon: <IconActivity />,
    title: '5–10+ years experience',
    body: 'Each trainer has shipped campaigns across e-commerce, B2B SaaS, performance, and SEO at scale.',
  },
  {
    icon: <IconUsers />,
    title: '1:15 trainer-to-student ratio',
    body: "Small enough that we know each student's strengths — and recruiters trust our shortlists.",
  },
  {
    icon: <IconChat />,
    title: 'Real-feedback culture',
    body: 'When you bomb a media plan in class, you hear what an agency founder would say — not a polite grade.',
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className={styles.section} aria-labelledby="trainers-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrow_dot} aria-hidden="true" />
          Trainers, not academicians
        </p>

        <h2 className={styles.headline} id="trainers-heading" data-reveal>
          Learn from trainers who run &#8377;35 Cr+ in live ad spend every year
        </h2>

        <ol className={styles.points}>
          {POINTS.map((p, index) => (
            <li key={p.title} className={styles.point} data-reveal data-reveal-delay={index}>
              <span className={styles.point_icon}>{p.icon}</span>
              <div>
                <h3 className={styles.point_title}>{p.title}</h3>
                <p className={styles.point_body}>{p.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.vs} role="note">
          <div className={`${styles.vs_row} ${styles.vs_row_them}`}>
            <span className={styles.vs_label}>Most institutes</span>
            <span className={styles.vs_text}>
              Hire full-time academicians as trainers.
            </span>
          </div>
          <div className={`${styles.vs_row} ${styles.vs_row_us}`}>
            <span className={styles.vs_label}>We hire</span>
            <span className={styles.vs_text}>
              People currently running campaigns.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
