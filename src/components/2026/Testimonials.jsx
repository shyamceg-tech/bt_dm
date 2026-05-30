/**
 * Testimonials.jsx — BlueTick 2026 Refresh
 *
 * RSC. Six alumni testimonial cards (avatar + quote + name + role + batch
 * + LinkedIn). Mobile: horizontal scroll-snap carousel with dots. Desktop
 * ≥1024px: 3-col grid (2 rows of 3).
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 9218–9342.
 *
 * The dots indicator is purely visual on mobile — Phase 1 also marked just
 * the first dot as active and left it static. Phase 4 polish could add IO
 * tracking to update the active dot as the user scrolls; not in 2J scope.
 */

import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    initials: 'FN',
    avatarVariant: null,
    name: '[Full Name]',
    role: 'Performance Marketing Associate, [COMPANY]',
    batch: 'May 2025 batch',
    quote: "The day I ran my first \u20B95,000 Google Ads campaign in week 4 and got 12 leads back \u2014 that's when I knew I could actually do this. Three months later I was running \u20B92L monthly budgets at [COMPANY].",
  },
  {
    initials: 'FN',
    avatarVariant: 'avatar_2',
    name: '[Full Name]',
    role: 'Paid Media Specialist, [COMPANY]',
    batch: 'February 2025 batch',
    quote: "Week 6, our trainer pulled up his agency's live Meta Ads dashboard and let us shadow-decide his next bid adjustment. That's when I stopped feeling like a student.",
  },
  {
    initials: 'FN',
    avatarVariant: 'avatar_3',
    name: '[Full Name]',
    role: 'Marketing Analyst, [COMPANY]',
    batch: 'August 2025 batch',
    quote: "I'd never written a SQL query in my life. By the end of Module 4 I was pulling GA4 data into Looker Studio for our client project. Now I run weekly performance reports without thinking.",
  },
  {
    initials: 'FN',
    avatarVariant: 'avatar_4',
    name: '[Full Name]',
    role: 'Growth Associate, Razorpay',
    batch: 'June 2025 batch',
    quote: "The mock interview round broke me \u2014 and that was the point. Three days later in the actual Razorpay interview, every question felt like a replay.",
  },
  {
    initials: 'FN',
    avatarVariant: 'avatar_5',
    name: '[Full Name]',
    role: 'Senior Performance Marketer, [COMPANY]',
    batch: 'November 2024 batch',
    quote: "I came in for the Google Ads stuff. I left obsessed with attribution. Now I'm the only person on my team who can explain why our last-click model is lying.",
  },
  {
    initials: 'FN',
    avatarVariant: 'avatar_6',
    name: '[Full Name]',
    role: 'SEO Specialist, [COMPANY]',
    batch: 'April 2025 batch',
    quote: "My Friday portfolio review notes from week 8 are still pinned above my desk. Half of what makes me hireable came from those 45-minute critique sessions.",
  },
];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zM6.5 6.7c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="section-18"
      className={styles.section}
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Alumni Voices</span>
          <h2 id="testimonials-heading" className={styles.heading}>
            Hear from BlueTickers &mdash; in their own words
          </h2>
        </header>

        <ol
          className={styles.scroller}
          role="region"
          aria-label="Alumni testimonials, scroll horizontally on mobile"
        >
          {TESTIMONIALS.map((t, i) => {
            const avatarClass = [
              styles.avatar,
              t.avatarVariant ? styles[t.avatarVariant] : '',
            ].filter(Boolean).join(' ');
            return (
              <li key={i} className={styles.card}>
                <blockquote className={styles.quote}>{t.quote}</blockquote>
                <div className={styles.divider} />
                <div className={styles.id_row}>
                  <div className={avatarClass} aria-hidden="true">
                    {t.initials}
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.name}>{t.name}</span>
                    <span className={styles.role}>{t.role}</span>
                    <span className={styles.batch}>{t.batch}</span>
                  </div>
                  <a
                    href="#"
                    className={styles.linkedin}
                    aria-label={`LinkedIn profile of ${t.name}`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </li>
            );
          })}
        </ol>

        <div className={styles.dots} aria-hidden="true">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === 0 ? styles.dot_active : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
