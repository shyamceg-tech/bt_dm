'use client';

/**
 * HeroPlacementForm.jsx — Lead form for the placement/job intent hero.
 *
 * Matches the homepage <HeroForm /> 1:1 (same fields, heading, CTA and lead-
 * funnel behaviour) by reusing the homepage hero form styles via
 * HeroOnline.module.css. Posts to /api/bigin via submitToBigin with
 * formPosition="hero-placement" so placement leads stay attributable, then
 * opens the shared lead funnel. The form id stays #placement-hero-form so the
 * hero/CTA/StickyBar anchors keep working.
 */

import { useId, useState } from 'react';
import { submitToBigin } from '@/lib/submitToBigin';
import { openLeadFunnel } from '@/lib/leadFunnel';
import { preloadRecaptcha } from '@/lib/recaptcha';
import styles from '../online/HeroOnline.module.css';

const PHONE_PATTERN = '[0-9]{10}';
const FALLBACK_ERROR = 'Something went wrong. Please try again or call us directly.';

export default function HeroPlacementForm() {
  const nameId = useId();
  const phoneId = useId();
  const roleId = useId();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const onPhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digits);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !/^\d{10}$/.test(phone) || !role) return;

    setSubmitting(true);
    setStatus(null);
    setErrorMsg('');

    const result = await submitToBigin({
      formType: 'default',
      formPosition: 'hero-placement',
      name: name.trim(),
      mobile: phone,
      role,
    });

    setSubmitting(false);
    if (result.ok) {
      setStatus('success');
      openLeadFunnel({
        leadId: result.id,
        name: name.trim(),
        mobile: phone,
        formPosition: 'hero-placement',
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
      id="placement-hero-form"
      action="/api/bigin"
      method="POST"
      noValidate
      onSubmit={onSubmit}
      onFocus={preloadRecaptcha}
      aria-labelledby="placement-form-heading"
    >
      <input type="hidden" name="formType" value="default" />
      <input type="hidden" name="formPosition" value="hero-placement" />

      <h2 className={styles.form_heading} id="placement-form-heading">
        Apply for the Next Batch
        <span className={styles.form_heading_sub}>Few Seats Left</span>
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
        <label className={styles.form_label} htmlFor={roleId}>I am a...</label>
        <div className={styles.form_select_wrap}>
          <select
            className={styles.form_select}
            id={roleId} name="role"
            value={role} onChange={(e) => setRole(e.target.value)}
            aria-required="true" required
            disabled={submitting || status === 'success'}
          >
            <option value="" disabled>Choose one</option>
            <option value="fresher">Fresher</option>
            <option value="working-professional">Working Professional</option>
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
        <p className={`${styles.form_status} ${styles.form_status_success}`} role="status">
          Thanks! Our advisor will call you shortly.
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
