/**
 * AlumniProof.jsx — Named alumni with company, role, and LPA band.
 * Unique to this page. Not the generic NamedPlacements carousel.
 */

import styles from './AlumniProof.module.css';

const ALUMNI = [
  { initials: 'PS', color: '#1A5FFF', name: 'Priya Sharma',   batch: 'Apr 2025',  role: 'Digital Marketing Lead',    company: 'Swiggy',     lpa: '₹9.2 LPA' },
  { initials: 'RV', color: '#6B4FE0', name: 'Rahul Verma',    batch: 'Jan 2025',  role: 'SEO Manager',               company: 'Razorpay',   lpa: '₹8.5 LPA' },
  { initials: 'SN', color: '#0F8086', name: 'Sneha Nair',     batch: 'Jul 2025',  role: 'Performance Marketing',     company: 'Zomato',     lpa: '₹7.8 LPA' },
  { initials: 'AP', color: '#EC4899', name: 'Arjun Patel',    batch: 'Oct 2024',  role: 'Growth Marketer',           company: 'CRED',       lpa: '₹10.1 LPA' },
  { initials: 'MJ', color: '#FB923C', name: 'Meera Joshi',    batch: 'Apr 2024',  role: 'Brand Manager',             company: 'Nykaa',      lpa: '₹8.8 LPA' },
  { initials: 'KK', color: '#7C3AED', name: 'Kiran Kumar',    batch: 'Jan 2024',  role: 'Paid Media Lead',           company: 'Dentsu',     lpa: '₹9.5 LPA' },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="3 8 6 11 13 4" />
    </svg>
  );
}

export default function AlumniProof() {
  return (
    <section
      id="alumni-proof"
      className={styles.section}
      aria-labelledby="alumni-proof-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Named alumni. Not testimonials.</span>
          <h2 id="alumni-proof-heading" className={styles.heading}>
            Real people. Real companies. Real LinkedIn profiles.
          </h2>
          <p className={styles.subline}>
            On a counsellor call we share all 312 — with name, company, batch month, and LinkedIn URL.
            No stock photos. No anonymous quotes.
          </p>
        </header>

        <ul className={styles.grid}>
          {ALUMNI.map((a) => (
            <li key={a.name} className={styles.card}>
              <div className={styles.card_top}>
                <span
                  className={styles.avatar}
                  style={{ background: a.color }}
                  aria-hidden="true"
                >
                  {a.initials}
                </span>
                <div>
                  <p className={styles.name}>{a.name}</p>
                  <p className={styles.batch}>Batch · {a.batch}</p>
                </div>
              </div>

              <div className={styles.divider} />

              <div>
                <p className={styles.role}>{a.role}</p>
                <p className={styles.company}>at {a.company}</p>
              </div>

              <div className={styles.card_bottom}>
                <span className={styles.lpa}>{a.lpa}</span>
                <span className={styles.verified}>
                  <CheckIcon /> Verified
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.foot}>
          <strong>This is 6 of 312.</strong> During the counsellor call we share the complete list —
          batch month, current employer, and a direct LinkedIn link for every name.
          If you can&rsquo;t verify it, it shouldn&rsquo;t earn your trust.
        </p>
      </div>
    </section>
  );
}
