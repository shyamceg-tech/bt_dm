'use client';

/**
 * HeroOnlineForm.jsx — Lead form on the online landing page hero.
 * Identical wiring to HeroNearMeForm: posts to /api/bigin via the shared
 * submitToBigin helper, opens the lead funnel on success, preloads reCAPTCHA
 * on focus. formPosition is "hero-online" so funnel reports isolate this page.
 * The role options are rewritten for online intent (demo class / counsellor /
 * fees-and-schedule).
 */

import { useId, useState } from 'react';
import { submitToBigin } from '@/lib/submitToBigin';
import { openLeadFunnel } from '@/lib/leadFunnel';
import { preloadRecaptcha } from '@/lib/recaptcha';
import styles from './HeroOnline.module.css';

const PHONE_PATTERN = '[0-9]{10}';
const FALLBACK_ERROR = 'Something went wrong. Please try again or call us directly.';

export default function HeroOnlineForm() {
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
      formPosition: 'hero-online',
      name: name.trim(),
      mobile: phone,
      role: intent,
    });

    setSubmitting(false);
    if (result.ok) {
      setStatus('success');
      openLeadFunnel({
        leadId: result.id,
        name: name.trim(),
        mobile: phone,
        formPosition: 'hero-online',
      });
    } else {
      setStatus('error');
      setErrorMsg(result.message || FALLBACK_ERROR);
    }
  };

  const onRetry = () => { setStatus(null); setErrorMsg(''); };

  return (
    <form
      className={styles.form}
      id="online-hero-form"
      action="/api/bigin"
      method="POST"
      noValidate
      onSubmit={onSubmit}
      onFocus={preloadRecaptcha}
      aria-labelledby="online-form-heading"
    >
      <input type="hidden" name="formType" value="default" />
      <input type="hidden" name="formPosition" value="hero-online" />

      <h2 className={styles.form_heading} id="online-form-heading">
        Join the Next Live Online Batch
        <span className={styles.form_heading_sub}>Free demo class · Online · 30 mins</span>
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
            <option value="join-live-demo">Sit in on a free live demo class</option>
            <option value="talk-counsellor">Talk to a counsellor first</option>
            <option value="see-fees">See fees and the live batch schedule</option>
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

      <p className={styles.form_micro_trust}>No spam calls – ever.</p>

      {status === 'success' && (
        <p className={`${styles.form_status} ${styles.form_status_success}`} role="status">
          Got it! Our advisor will call you within 15 mins to share the live batch details.
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
