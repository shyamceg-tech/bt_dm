/**
 * Footer.jsx — BlueTick 2026 Refresh
 *
 * RSC. Replaces Phase 1's preview footer placeholder with the real footer:
 *   - Brand name + 2-sentence blurb
 *   - Courses column linking to in-page tracks anchor
 *   - Contact column with phone, email, address
 *   - Bottom strip: copyright + legal links to existing pages
 *
 * Legal links point to the preserved `(default)` route pages from the
 * original site: /privacypolicy and /termsandcondition (these are
 * unchanged from Phase 1).
 */

import styles from './Footer.module.css';

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <h3 className={styles.brand_name}>BlueTick Academy</h3>
            <p className={styles.brand_blurb}>
              Bangalore&rsquo;s AI-native digital marketing institute. Real
              trainers running real campaigns. Real placement outcomes you can
              verify on LinkedIn.
            </p>
          </div>

          {/* Courses */}
          <nav aria-labelledby="footer-courses-heading">
            <h4 id="footer-courses-heading" className={styles.col_heading}>
              Courses
            </h4>
            <ul className={styles.list}>
              <li>
                <a href="#section-14">PCP &mdash; 3-Month Track</a>
              </li>
              <li>
                <a href="#section-14">PGCP &mdash; 5-Month Track</a>
              </li>
              <li>
                <a href="#section-14">ELEVATE&trade; &mdash; 7-Month Track</a>
              </li>
              <li>
                <a href="#curriculum">Full Curriculum</a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className={styles.col_heading}>Contact</h4>
            <ul className={styles.list}>
              <li className={styles.contact_item}>
                <PhoneIcon />
                <a href="tel:+919606995525">+91 9606 9955 25</a>
              </li>
              <li className={styles.contact_item}>
                <MailIcon />
                <a href="mailto:info@bluetickacademy.com">
                  info@bluetickacademy.com
                </a>
              </li>
              <li className={styles.contact_item}>
                <PinIcon />
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} BlueTick Academy. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="/privacypolicy">Privacy Policy</a>
            <a href="/termsandcondition">Terms &amp; Conditions</a>
            <a href="/contact_us">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
