'use client';

/**
 * HireForm.jsx — BlueTick 2026 Refresh
 *
 * In-modal lead form for the "Hire from us" flow. Sends formType='hire'
 * to /api/bigin (the locked route already routes that into the Zoho
 * Bigin "Hire From Us" lead source bucket).
 *
 * Fields: name, email, mobile (+91), company.
 *
 * On success the form is replaced with a confirmation card inside the
 * modal — user clicks "Close" to dismiss. This is more reassuring than
 * auto-closing the modal on success (industry convention: Stripe, GitHub).
 */

import { useId, useState } from 'react';
import { submitToBigin } from '@/lib/submitToBigin';
import styles from './ModalForm.module.css';

const PHONE_PATTERN = '[0-9]{10}';
const FALLBACK_ERROR = 'Something went wrong. Please try again.';

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function HireForm({ onClose }) {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const companyId = useId();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const onPhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digits);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.includes('@') ||
      !/^\d{10}$/.test(phone) ||
      !company.trim()
    )
      return;

    setSubmitting(true);
    setStatus(null);
    setErrorMsg('');

    const result = await submitToBigin({
      formType: 'hire',
      formPosition: 'header-modal',
      name: name.trim(),
      email: email.trim(),
      mobile: phone,
      company: company.trim(),
    });

    setSubmitting(false);
    if (result.ok) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMsg(result.message || FALLBACK_ERROR);
    }
  };

  const onRetry = () => {
    setStatus(null);
    setErrorMsg('');
  };

  /* On success → replace the form with a confirmation card. The user
     dismisses via the explicit Close button (or the dialog's built-in
     close mechanisms: ESC, backdrop click, X button). */
  if (status === 'success') {
    return (
      <div className={styles.success_card}>
        <span className={styles.success_icon} aria-hidden="true">
          <CheckCircle />
        </span>
        <h3 className={styles.success_heading}>Got it &mdash; we&rsquo;ll be in touch.</h3>
        <p className={styles.success_body}>
          Our placements team will reach out within one business day with a
          shortlist of recent alumni who match your role.
        </p>
        <button
          type="button"
          className={styles.success_close}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    );
  }

  const locked = submitting;

  return (
    <form
      className={styles.form}
      action="/api/bigin"
      method="POST"
      noValidate
      onSubmit={onSubmit}
    >
      <input type="hidden" name="formType" value="hire" />
      <input type="hidden" name="formPosition" value="header-modal" />

      <div className={styles.field}>
        <label className={styles.label} htmlFor={nameId}>Your Name</label>
        <input
          className={styles.input}
          type="text"
          id={nameId}
          name="name"
          autoComplete="name"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-required="true"
          required
          disabled={locked}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={emailId}>Work Email</label>
        <input
          className={styles.input}
          type="email"
          id={emailId}
          name="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-required="true"
          required
          disabled={locked}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={phoneId}>Phone</label>
        <div className={styles.phone_wrap}>
          <span className={styles.phone_prefix} aria-hidden="true">+91</span>
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

      <div className={styles.field}>
        <label className={styles.label} htmlFor={companyId}>Company</label>
        <input
          className={styles.input}
          type="text"
          id={companyId}
          name="company"
          autoComplete="organization"
          placeholder="Company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          aria-required="true"
          required
          disabled={locked}
        />
      </div>

      <button
        type="submit"
        className={styles.submit}
        disabled={locked}
        aria-busy={submitting || undefined}
      >
        {submitting ? 'SUBMITTING…' : 'REQUEST CANDIDATES'}
      </button>

      <p className={styles.micro}>
        We&rsquo;ll share a shortlist within one business day. No spam.
      </p>

      {status === 'error' && (
        <div className={`${styles.status} ${styles.status_error}`} role="alert">
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
