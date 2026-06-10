'use client';

/**
 * LeadFunnel.jsx — BlueTick 2026
 *
 * The single global island for the post-submit lead funnel. Mounted once in
 * layout.js. Listens for the `bluetick:lead-captured` event (fired by every
 * enrollment form after it saves name + phone to Zoho) and drives the two-step
 * pop-up:
 *   step 'details'  → <LeadDetailsForm/>  (Online/Offline, Center, date & time)
 *   step 'thankyou' → <ThankYou/>         (exact GA4 message + Call/WA + Meet)
 *
 * Uses a native <dialog> for the focus trap, ESC-to-close, top-layer rendering
 * and inert background — same primitive choice as the rest of the 2026 refresh.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { LEAD_FUNNEL_EVENT } from '@/lib/leadFunnel';
import LeadDetailsForm from './LeadDetailsForm';
import ThankYou from './ThankYou';
import styles from './LeadFunnel.module.css';

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function LeadFunnel() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState('details'); // 'details' | 'thankyou'
  const [lead, setLead] = useState(null);

  /* Listen for captured leads from any form on the page. */
  useEffect(() => {
    const onCaptured = (e) => {
      setLead(e.detail || null);
      setStep('details');
      setOpen(true);
    };
    window.addEventListener(LEAD_FUNNEL_EVENT, onCaptured);
    return () => window.removeEventListener(LEAD_FUNNEL_EVENT, onCaptured);
  }, []);

  /* Drive the native dialog from React state. */
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = '';
  }, []);

  /* Restore scroll + sync state whenever the dialog closes (ESC, backdrop). */
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handleClose = () => {
      document.body.style.overflow = '';
      setOpen(false);
    };
    dialog.addEventListener('close', handleClose);
    return () => {
      dialog.removeEventListener('close', handleClose);
      document.body.style.overflow = '';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === ref.current) close();
  };

  /* Merge the details the pop-up collected (mode, center, preferred date/time)
     into `lead` so the Thank-You step's Meet update carries them forward. The
     /api/bigin update path rewrites Learning_Mode, Center and Description on
     every call, so a later update that omits these would blank them back out in
     Zoho — which is exactly what was happening. */
  const onDetailsComplete = useCallback((details) => {
    if (details) setLead((prev) => ({ ...prev, ...details }));
    setStep('thankyou');
  }, []);

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      onClick={handleBackdropClick}
      aria-labelledby="lead-funnel-title"
    >
      <button
        type="button"
        className={styles.dialogClose}
        aria-label="Close"
        onClick={close}
      >
        <CloseIcon />
      </button>

      {open && step === 'details' && (
        <div className={styles.card}>
          <div className={styles.cardAccent} aria-hidden="true" />
          <h2 id="lead-funnel-title" className={styles.cardTitle}>
            You&rsquo;re almost in 🎉
          </h2>
          <LeadDetailsForm lead={lead} onComplete={onDetailsComplete} />
        </div>
      )}

      {open && step === 'thankyou' && (
        <div className={`${styles.card} ${styles.cardThanks}`}>
          <ThankYou lead={lead} onClose={close} />
        </div>
      )}
    </dialog>
  );
}
