/**
 * LocationProof.jsx — Address + map + hours + landmarks for near-me intent.
 * Server component. Map uses Google Maps embed (no API key required for
 * the basic query embed).
 */

import { CAMPUS } from '@/data/near-me.config';
import styles from './LocationProof.module.css';

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
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

export default function LocationProof() {
  return (
    <section id="location-proof" className={styles.section} aria-labelledby="location-heading">
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Visit the campus</span>
          <h2 id="location-heading" className={styles.heading}>
            A real classroom you can walk into —{' '}
            <span className={styles.heading_accent}>not a Zoom-only course</span>
          </h2>
          <p className={styles.lede}>
            Most &ldquo;near me&rdquo; searches end in a callback from a generic
            online institute. We&rsquo;d rather you see the place first.
          </p>
        </header>

        <div className={styles.grid}>
          <aside className={styles.card}>
            <div className={styles.row}>
              <span className={styles.row_icon}><PinIcon /></span>
              <div className={styles.row_text}>
                <p className={styles.row_label}>Address</p>
                <p className={styles.row_value}>
                  {CAMPUS.addressLine1}<br />
                  {CAMPUS.addressLine2}
                </p>
                <a
                  className={styles.row_link}
                  href={CAMPUS.mapsLink}
                  target="_blank" rel="noopener noreferrer"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className={styles.row}>
              <span className={styles.row_icon}><ClockIcon /></span>
              <div className={styles.row_text}>
                <p className={styles.row_label}>Campus hours</p>
                <p className={styles.row_value}>{CAMPUS.hours}</p>
                <p className={styles.row_note}>Walk in any time — no appointment needed.</p>
              </div>
            </div>

            <div className={styles.row}>
              <span className={styles.row_icon}><PhoneIcon /></span>
              <div className={styles.row_text}>
                <p className={styles.row_label}>Call or WhatsApp</p>
                <p className={styles.row_value}>
                  <a className={styles.row_phone} href={`tel:${CAMPUS.phone}`}>{CAMPUS.phone}</a>
                </p>
                <a
                  className={styles.row_link}
                  href={CAMPUS.whatsapp}
                  target="_blank" rel="noopener noreferrer"
                >
                  WhatsApp us →
                </a>
              </div>
            </div>

            <ul className={styles.landmarks}>
              {CAMPUS.landmarks.map((l) => (
                <li key={l}><CheckIcon /><span>{l}</span></li>
              ))}
            </ul>

            <a className={styles.cta} href="#near-me-hero-form">
              Book a 30-min campus visit →
            </a>
          </aside>

          <div className={styles.mapWrap}>
            <iframe
              className={styles.map}
              src={CAMPUS.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BlueTick Academy — Indiranagar campus map"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
