'use client';

/**
 * HeroNearMeForm.jsx — Lead form on the near-me landing page hero.
 * Posts to /api/bigin via the shared submitToBigin helper.
 * formPosition is "hero-near-me" so funnel reports can isolate this page.
 */

import { useId, useState } from 'react';
import { submitToBigin } from '@/lib/submitToBigin';
import styles from './HeroNearMe.module.css';

const PHONE_PATTERN = '[0-9]{10}';
const FALLBACK_ERROR = 'Something went wrong. Please try again or call us directly.';

export default function HeroNearMeForm() {
  const nameId = useId();
  const phoneId = useId();
  const intentId = useId();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [intent, setIntent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const onPhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digits);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !/^\d{10}$/.test(phone) || !intent) return;

    setSubmitting(true);
    setStatus(null);
    setErrorMsg('');

    const result = await submitToBigin({
      formType: 'default',
      formPosition: 'hero-near-me',
      name: name.trim(),
      mobile: phone,
      role: intent,
    });

    setSubmitting(false);
    if (result.ok) setStatus('success');
    else {
      setStatus('error');
      setErrorMsg(result.message || FALLBACK_ERROR);
    }
  };

  const onRetry = () => { setStatus(null); setErrorMsg(''); };

  return (
    <form
      className={styles.form}
      id="near-me-hero-form"
      action="/api/bigin"
      method="POST"
      noValidate
      onSubmit={onSubmit}
      aria-labelledby="near-me-form-heading"
    >
      <input type="hidden" name="formType" value="default" />
      <input type="hidden" name="formPosition" value="hero-near-me" />

      <h2 className={styles.form_heading} id="near-me-form-heading">
        Book Your Campus Visit
        <span className={styles.form_heading_sub}>Free · Mon–Sat · 30 mins</span>
      </h2>

      <div className={styles.form_field}>
        <label className={styles.form_label} htmlFor={nameId}>Name</label>
        <input
          className={styles.form_input}
          type="text" id={nameId} name="name"
          autoComplete="name"
          placeholder="Your full name"
          value={name} onChange={(e) => setName(e.target.value)}
          aria-required="true" required
          disabled={submitting || status === 'success'}
        />
      </div>

      <div className={styles.form_field}>
        <label className={styles.form_label} htmlFor={phoneId}>Phone Number</label>
        <div className={styles.form_phone_wrap}>
          <span className={styles.form_phone_prefix} aria-hidden="true">+91</span>
          <input
            className={styles.form_phone_input}
            type="tel" id={phoneId} name="mobile"
            inputMode="numeric" autoComplete="tel-national"
            placeholder="10-digit mobile"
            value={phone} onChange={onPhoneChange}
            aria-label="Phone number, country code +91"
            aria-required="true"
            pattern={PHONE_PATTERN} maxLength={10} required
            disabled={submitting || status === 'success'}
          />
        </div>
      </div>

      <div className={styles.form_field}>
        <label className={styles.form_label} htmlFor={intentId}>I want to...</label>
        <div className={styles.form_select_wrap}>
          <select
            className={styles.form_select}
            id={intentId} name="role"
            value={intent} onChange={(e) => setIntent(e.target.value)}
            aria-required="true" required
            disabled={submitting || status === 'success'}
          >
            <option value="" disabled>Choose one</option>
            <option value="visit-campus">Visit the campus this week</option>
            <option value="talk-counsellor">Talk to a counsellor first</option>
            <option value="see-fees">See fees and batch details</option>
          </select>
        </div>
      </div>

      <button
        className={styles.btn_primary}
        type="submit"
        disabled={submitting || status === 'success'}
        aria-busy={submitting || undefined}
      >
        {submitting ? 'SUBMITTING…' : 'BOOK MY CAMPUS VISIT'}
      </button>

      <p className={styles.form_micro_trust}>No spam calls – ever.</p>

      {status === 'success' && (
        <p className={`${styles.form_status} ${styles.form_status_success}`} role="status">
          Got it! Our advisor will call you within 15 mins to confirm your visit slot.
        </p>
      )}
      {status === 'error' && (
        <div className={`${styles.form_status} ${styles.form_status_error}`} role="alert">
          {errorMsg || FALLBACK_ERROR}{' '}
          <button type="button" className={styles.form_status_retry} onClick={onRetry}>
            Try again
          </button>
        </div>
      )}
    </form>
  );
}
