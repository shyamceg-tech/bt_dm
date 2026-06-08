/**
 * TrainerCredentials.jsx — Practitioner trainer profiles.
 * Not a copy of the Trainers component — these are mini-cards with
 * current company, pedigree, and specialization.
 */

import styles from './TrainerCredentials.module.css';

const TRAINERS = [
  {
    initials: 'AK',
    color: '#2563EB',
    name: 'Aditya Kumar',
    experience: '11 yrs industry experience',
    specialization: 'Paid Media & Performance Marketing',
    currentRole: 'Currently: Paid Media Head, Dentsu Bangalore',
    pedigree: 'Previously: WPP GroupM, Swiggy in-house, 2 funded startups',
  },
  {
    initials: 'NR',
    color: '#6B4FE0',
    name: 'Nandita Rao',
    experience: '9 yrs industry experience',
    specialization: 'SEO, Content Strategy & AI-native Marketing',
    currentRole: 'Currently: SEO Lead, Razorpay (in-house)',
    pedigree: 'Previously: iProspect, PhonePe growth team, content agency founder',
  },
  {
    initials: 'VT',
    color: '#0F8086',
    name: 'Vikram Tiwari',
    experience: '12 yrs industry experience',
    specialization: 'Social Media, Brand & Analytics',
    currentRole: 'Currently: Brand Strategy Consultant (own practice)',
    pedigree: 'Previously: Ogilvy Social, Zomato brand team, Nykaa marketing',
  },
];

export default function TrainerCredentials() {
  return (
    <section
      id="trainer-credentials"
      className={styles.section}
      aria-labelledby="trainer-credentials-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Practitioners, not professors</span>
          <h2 id="trainer-credentials-heading" className={styles.heading}>
            Every trainer had a client meeting this week.
          </h2>
          <p className={styles.subline}>
            The case study you study on Monday was their campaign debrief on Friday.
            Not a classroom exercise - a real brief, a real budget, a real result.
          </p>
        </header>

        <ul className={styles.grid}>
          {TRAINERS.map((t) => (
            <li key={t.name} className={styles.card}>
              <div className={styles.card_top}>
                <span
                  className={styles.avatar}
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.exp}>{t.experience}</p>
                </div>
              </div>

              <div className={styles.divider} />

              <div>
                <p className={styles.specialization}>{t.specialization}</p>
                <span className={styles.current}>
                  <span className={styles.dot} aria-hidden="true" />
                  {t.currentRole}
                </span>
              </div>

              <p className={styles.pedigree}>{t.pedigree}</p>
            </li>
          ))}
        </ul>

        <p className={styles.foot}>
          Full trainer profiles with LinkedIn links shared on the counsellor call.
          No anonymous &ldquo;star faculty.&rdquo;
        </p>
      </div>
    </section>
  );
}
