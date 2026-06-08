'use client';

/**
 * HeroForm.jsx — BlueTick 2026 Refresh
 *
 * Small client island. Holds the hero form's input state, runs HTML5
 * validation, and shows pending / success / error UI states.
 *
 * Phase 3: wired to the real /api/bigin endpoint via the shared
 * submitToBigin() helper (src/lib/submitToBigin.js). The Bigin route file
 * itself is locked (master prompt §7.1) and never edited from here.
 *
 * Why a separate file (not inlined in Hero.jsx): keeping the form in its
 * own 'use client' boundary means the entire hero copy column (eyebrow,
 * headline, subline, chips, badges) stays RSC. That's most of the LCP
 * surface; no hydration cost for any of it.
 */

import { useId, useState } from 'react';
import { submitToBigin } from '@/lib/submitToBigin';
import { openLeadFunnel } from '@/lib/leadFunnel';
import { preloadRecaptcha } from '@/lib/recaptcha';
import styles from './Hero.module.css';

const PHONE_PATTERN = '[0-9]{10}';

/* Generic fallback message — overridden by `result.message` from the
   submission helper for specific error kinds. */
const FALLBACK_ERROR = 'Something went wrong. Please try again or call us directly.';

export default function HeroForm() {
  /* useId gives stable IDs for label/input association across server +
     client renders, avoiding hydration warnings. */
  const nameId = useId();
  const phoneId = useId();
  const roleId = useId();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);    // null | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');  // user-facing error copy

  /* Allow digits only in the phone field — guard alongside the native
     pattern/maxlength so paste / autofill never enters letters. */
  const onPhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digits);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    /* Browser already enforces `required` + `pattern`, but belt-and-braces. */
    if (!name.trim() || !/^\d{10}$/.test(phone) || !role) return;

    setSubmitting(true);
    setStatus(null);
    setErrorMsg('');

    /* `role` isn't a recognized field in the locked /api/bigin route — it
       maps to nothing in Zoho Bigin's payload. We send it anyway so the
       server-side console.log captures it for funnel analytics; if the
       route is extended later to persist role, no client change needed. */
    const result = await submitToBigin({
      formType: 'default',
      formPosition: 'hero',
      name: name.trim(),
      mobile: phone,
      role,
    });

    setSubmitting(false);

    if (result.ok) {
      setStatus('success');
      /* Name + phone are now saved to Zoho. Open the details pop-up
         (Online/Offline, centre, preferred call time) → Thank-You funnel. */
      openLeadFunnel({
        leadId: result.id,
        name: name.trim(),
        mobile: phone,
        formPosition: 'hero',
      });
    } else {
      setStatus('error');
      setErrorMsg(result.message || FALLBACK_ERROR);
    }
  };

  /* On error → "Try again" button below the message lets the user resubmit
     without re-typing. Just clears the status flag; the inputs are untouched. */
  const onRetry = () => {
    setStatus(null);
    setErrorMsg('');
  };

  return (
    <form
      className={styles.form}
      id="hero-form"
      action="/api/bigin"
      method="POST"
      noValidate
      onSubmit={onSubmit}
      onFocus={preloadRecaptcha}
      aria-labelledby="hero-form-heading"
    >
      <input type="hidden" name="formType" value="default" />
      <input type="hidden" name="formPosition" value="hero" />

      <h2 className={styles.form_heading} id="hero-form-heading">
        Apply for the Next Batch
        <span className={styles.form_heading_seats}>Few Seats Left</span>
      </h2>

      <div className={styles.form_field}>
        <label className={styles.form_label} htmlFor={nameId}>
          Name
        </label>
        <input
          className={styles.form_input}
          type="text"
          id={nameId}
          name="name"
          autoComplete="name"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-required="true"
          required
          disabled={submitting || status === 'success'}
        />
      </div>

      <div className={styles.form_field}>
        <label className={styles.form_label} htmlFor={phoneId}>
          Phone Number
        </label>
        <div className={styles.form_phone_wrap}>
          <span className={styles.form_phone_prefix} aria-hidden="true">
            +91
          </span>
          <input
            className={styles.form_phone_input}
            type="tel"
            id={phoneId}
            name="mobile"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="10-digit mobile"
            value={phone}
            onChange={onPhoneChange}
            aria-label="Phone number, country code +91"
            aria-required="true"
            pattern={PHONE_PATTERN}
            maxLength={10}
            required
            disabled={submitting || status === 'success'}
          />
        </div>
      </div>

      <div className={styles.form_field}>
        <label className={styles.form_label} htmlFor={roleId}>
          I am a...
        </label>
        <div className={styles.form_select_wrap}>
          <select
            className={styles.form_select}
            id={roleId}
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            aria-required="true"
            required
            disabled={submitting || status === 'success'}
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="fresher">Fresher</option>
            <option value="working-professional">Working Professional</option>
            {/* Phase 1 source had "Entreprenuer" (typo) — fixed to
                "Entrepreneur". See STATUS.md "Phase 1 deviations". */}
            <option value="entrepreneur">Entrepreneur</option>
          </select>
        </div>
      </div>

      <button
        className={styles.btn_primary}
        type="submit"
        disabled={submitting || status === 'success'}
        aria-busy={submitting || undefined}
      >
        {submitting ? 'SUBMITTING…' : 'START YOUR DM CAREER'}
      </button>

      <p className={styles.form_micro_trust}>No spam calls - ever.</p>

      {status === 'success' && (
        <p
          className={`${styles.form_status} ${styles.form_status_success}`}
          role="status"
        >
          Thanks! Our advisor will call you shortly.
        </p>
      )}
      {status === 'error' && (
        <div
          className={`${styles.form_status} ${styles.form_status_error}`}
          role="alert"
        >
          {errorMsg || FALLBACK_ERROR}
          {' '}
          <button
            type="button"
            className={styles.form_status_retry}
            onClick={onRetry}
          >
            Try again
          </button>
        </div>
      )}
    </form>
  );
}
