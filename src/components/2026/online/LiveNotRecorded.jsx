/**
 * LiveNotRecorded.jsx — NEW section, exclusive to the online landing page.
 *
 * The one purpose-built "new design" section. It answers the #1 objection an
 * online-course searcher carries: "online = a pre-recorded video dump I'll
 * abandon in week 3." Layout: a two-card "versus" contrast (the abandoned self-
 * paced experience vs the BlueTick live cohort) with a centre VS badge, then a
 * 3-up "safety net" strip (live · recordings · mentor access).
 *
 * RSC — zero client JS. All motion is CSS-only (transform/opacity, GPU-friendly)
 * and disabled under prefers-reduced-motion, so the revamped look adds no
 * runtime cost or load-speed impact. Anchor id="live-online" matches the hero.
 */

import { FORMAT } from '@/data/online.config';
import styles from './LiveNotRecorded.module.css';

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
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

function LiveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4M3.5 3.5a12 12 0 0 0 0 17M20.5 3.5a12 12 0 0 1 0 17" />
    </svg>
  );
}

function ReplayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <polyline points="3 3 3 8 8 8" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

const TRAP = [
  'Pre-recorded videos you watch alone',
  'No one notices when you stop',
  'Doubts pile up with nobody to ask',
  'A certificate nobody verifies',
  '“Self-paced” quietly becomes never',
];

const REALITY = [
  'Live, instructor-led classes in real time',
  'A fixed batch and trainers who expect you',
  'Doubts cleared live + WhatsApp office hours',
  'A verifiable certificate + 12 industry certs',
  'Every session recorded, so you never fall behind',
];

const SAFETY = [
  {
    icon: <LiveIcon />,
    title: 'Live classes',
    body: 'You join real-time sessions with a practitioner trainer. Ask questions, get feedback, build alongside the cohort.',
  },
  {
    icon: <ReplayIcon />,
    title: 'Recordings included',
    body: 'Every live session is recorded and yours to revisit. Miss a class for work or travel? Catch up and rejoin the next one.',
  },
  {
    icon: <ChatIcon />,
    title: 'Mentor access',
    body: 'WhatsApp office hours between classes. Online means remote, not alone. You get the same mentor access a classroom student does.',
  },
];

export default function LiveNotRecorded() {
  return (
    <section id="live-online" className={styles.section} aria-labelledby="live-online-heading">
      {/* Decorative, GPU-only ambient glows (pointer-events: none). */}
      <span className={styles.glowA} aria-hidden="true" />
      <span className={styles.glowB} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Live, not recorded
          </span>
          <h2 id="live-online-heading" className={styles.heading}>
            Most online courses are videos you&rsquo;ll quit.{' '}
            <span className={styles.kw}>This is a live cohort you&rsquo;ll finish.</span>
          </h2>
          <p className={styles.lede}>{FORMAT.oneLiner}</p>
        </header>

        <div className={styles.versus} data-reveal>
          {/* The trap — muted */}
          <div className={`${styles.card} ${styles.cardTrap}`}>
            <span className={styles.cardTag}>The usual “online course”</span>
            <h3 className={styles.cardTitle}>The playlist you&rsquo;ll abandon</h3>
            <ul className={styles.list}>
              {TRAP.map((t) => (
                <li key={t} className={styles.itemTrap}>
                  <span className={styles.markTrap} aria-hidden="true"><XIcon /></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.vsBadge} aria-hidden="true"><span>vs</span></div>

          {/* The reality — aurora glow, bright */}
          <div className={`${styles.card} ${styles.cardReal}`}>
            <span className={styles.cardTagReal}>
              <span className={styles.liveDot} aria-hidden="true" />
              BlueTick live online
            </span>
            <h3 className={styles.cardTitle}>The cohort you&rsquo;ll actually complete</h3>
            <ul className={styles.list}>
              {REALITY.map((t) => (
                <li key={t} className={styles.itemReal}>
                  <span className={styles.markReal} aria-hidden="true"><CheckIcon /></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.safety} data-reveal>
          {SAFETY.map((s) => (
            <div key={s.title} className={styles.safetyCard}>
              <span className={styles.safetyIcon}>{s.icon}</span>
              <h3 className={styles.safetyTitle}>{s.title}</h3>
              <p className={styles.safetyBody}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
