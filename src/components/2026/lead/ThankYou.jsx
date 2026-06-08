'use client';

/**
 * ThankYou.jsx — BlueTick 2026 lead funnel (step 2: confirmation)
 *
 * Shown after the pop-up details are submitted.
 *
 * ⚠️ The confirmation sentence is EXACT and must not change — GA4 tracks the
 * conversion off this precise string (brief §4):
 *   "Your registration is successful. Our learning advisor will reach out to
 *    you shortly."
 * We also push a `registration_success` event to the dataLayer so GTM/GA4 can
 * fire a conversion reliably without depending on text scraping.
 *
 * Below the message (brief §5): a "Hate to wait? Call now to connect" block
 * with Call + WhatsApp buttons (urgency-animated), then a Google Meet scheduler.
 */

import { useEffect } from 'react';
import { CONTACT } from '@/data/centers';
import MeetScheduler from './MeetScheduler';
import styles from './LeadFunnel.module.css';

/* The tracked conversion sentence — do not edit. */
export const THANK_YOU_MESSAGE =
  'Your registration is successful. Our learning advisor will reach out to you shortly.';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.8 4.2C17.8 2.2 15 1 12 1 5.9 1 1 5.9 1 11.9c0 1.9.5 3.8 1.4 5.4L1 23l5.8-1.5c1.6.9 3.4 1.3 5.2 1.3 6.1 0 11-4.9 11-10.9 0-2.9-1.1-5.7-3.2-7.7zM12 20.9c-1.7 0-3.3-.4-4.7-1.3l-.3-.2L4 20.3l.9-3-.2-.3c-1-1.5-1.5-3.3-1.5-5.1 0-5 4-9 9-9 2.4 0 4.7.9 6.4 2.6 1.7 1.7 2.6 4 2.6 6.4 0 4.9-4 8.9-9 8.9zm5-6.5c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.5 5.3 4.8.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z" />
    </svg>
  );
}

export default function ThankYou({ lead, onClose }) {
  /* Fire the GA4/GTM conversion event once, when this screen mounts. */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'registration_success',
      lead_source: lead?.formPosition || 'website',
    });
  }, [lead]);

  return (
    <div className={styles.thankyou}>
      {/* Celebration burst */}
      <div className={styles.confetti} aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className={styles[`c${i % 7}`] + ' ' + styles.confettiPiece} />
        ))}
      </div>

      <div className={styles.checkWrap} aria-hidden="true">
        <svg className={styles.checkSvg} viewBox="0 0 52 52">
          <circle className={styles.checkCircle} cx="26" cy="26" r="24" fill="none" />
          <path className={styles.checkMark} fill="none" d="M14 27l8 8 16-16" />
        </svg>
      </div>

      {/* EXACT tracked message — do not change. The visible copy is split
          across two styled elements for design; the hidden line below carries
          the verbatim single-string sentence so a GA4/GTM text- or
          element-visibility trigger matches it exactly. */}
      <h2 className={styles.tyTitle}>Your registration is successful.</h2>
      <p className={styles.tySub}>
        Our learning advisor will reach out to you shortly.
      </p>
      <p className={styles.srOnly} data-ga4="registration_success">
        {THANK_YOU_MESSAGE}
      </p>

      {/* §5 — Hate to wait? Call now to connect */}
      <div className={styles.urgentBlock}>
        <p className={styles.urgentHeading}>
          <span className={styles.livePulse} aria-hidden="true" />
          Hate to wait? Call now to connect
        </p>
        <div className={styles.contactBtns}>
          <a href={CONTACT.phoneHref} className={`${styles.contactBtn} ${styles.callBtn}`}>
            <PhoneIcon />
            <span>Call now</span>
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.waBtn}`}
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div className={styles.altDivider}>
        <span>Alternatively</span>
      </div>

      <MeetScheduler lead={lead} />

      <button type="button" className={styles.tyClose} onClick={onClose}>
        Done
      </button>
    </div>
  );
}
