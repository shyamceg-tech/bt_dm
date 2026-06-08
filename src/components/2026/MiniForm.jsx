'use client';

/**
 * MiniForm.jsx — BlueTick 2026 Refresh
 *
 * Reusable client-island mini form: Name + Phone(+91, 10-digit), submit.
 * Used 5× on the home page (mini-form-2 band, cta-banner-1, cta-banner-2,
 * cta-banner-4, final-cta). One JS module ships, mounted multiple times
 * each with independent state.
 *
 * Phase 3: wired to /api/bigin via the shared submitToBigin() helper.
 */

import { useCallback, useId, useState } from 'react';
import { submitToBigin } from '@/lib/submitToBigin';
import { openLeadFunnel } from '@/lib/leadFunnel';
import { preloadRecaptcha } from '@/lib/recaptcha';
import styles from './MiniForm.module.css';

const PHONE_PATTERN = '[0-9]{10}';
const FALLBACK_ERROR = 'Something went wrong. Please try again.';

export default function MiniForm({
  /* Bigin's `formPosition` field — keeps lead-source analytics correct. */
  formPosition,
  /* CTA copy. Default mirrors Phase 1's wording. */
  submitLabel = 'START YOUR DM CAREER',
  /* If true, render a "→" arrow after the submit label (Phase 1 banner #1). */
  withArrow = false,
  /* "light" = white card; "dark" = frosted glass on aurora/cosmic backdrop. */
  theme = 'light',
  /* ARIA label for the form element. */
  ariaLabel,
  /* Stable HTML id for the form — useful for `<a href="#mini-form-2">`. */
  id,
}) {
  const nameId = useId();
  const phoneId = useId();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const onPhoneChange = useCallback((e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digits);
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!name.trim() || !/^\d{10}$/.test(phone)) return;

      setSubmitting(true);
      setStatus(null);
      setErrorMsg('');

      const result = await submitToBigin({
        formType: 'default',
        formPosition,
        name: name.trim(),
        mobile: phone,
      });

      setSubmitting(false);
      if (result.ok) {
        setStatus('success');
        openLeadFunnel({
          leadId: result.id,
          name: name.trim(),
          mobile: phone,
          formPosition,
        });
      } else {
        setStatus('error');
        setErrorMsg(result.message || FALLBACK_ERROR);
      }
    },
    [name, phone, formPosition]
  );

  const onRetry = useCallback(() => {
    setStatus(null);
    setErrorMsg('');
  }, []);

  const formClass = `${styles.form} ${theme === 'dark' ? styles.form_dark : ''}`;
  const locked = submitting || status === 'success';

  return (
    <form
      className={formClass}
      id={id}
      action="/api/bigin"
      method="POST"
      noValidate
      onSubmit={onSubmit}
      onFocus={preloadRecaptcha}
      aria-label={ariaLabel}
    >
      <input type="hidden" name="formType" value="default" />
      <input type="hidden" name="formPosition" value={formPosition} />

      <div className={styles.field}>
        <label className={styles.label} htmlFor={nameId}>
          Name
        </label>
        <input
          className={styles.input}
          type="text"
          id={nameId}
          name="name"
          autoComplete="name"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-required="true"
          required
          disabled={locked}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={phoneId}>
          Phone
        </label>
        <div className={styles.phone_wrap}>
          <span className={styles.phone_prefix} aria-hidden="true">
            +91
          </span>
          <input
            className={styles.phone_input}
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
            disabled={locked}
          />
        </div>
      </div>

      <button
        className={styles.submit}
        type="submit"
        disabled={locked}
        aria-busy={submitting || undefined}
      >
        {submitting ? 'SUBMITTING…' : submitLabel}
        {withArrow && !submitting && (
          <span className={styles.submit_arrow} aria-hidden="true">
            →
          </span>
        )}
      </button>

      {status === 'success' && (
        <p
          className={`${styles.status} ${styles.status_success}`}
          role="status"
        >
          Thanks! Our advisor will call you shortly.
        </p>
      )}
      {status === 'error' && (
        <div
          className={`${styles.status} ${styles.status_error}`}
          role="alert"
        >
          {errorMsg || FALLBACK_ERROR}
          {' '}
          <button
            type="button"
            className={styles.status_retry}
            onClick={onRetry}
          >
            Try again
          </button>
        </div>
      )}
    </form>
  );
}
