'use client';

/**
 * FranchiseeForm.jsx — BlueTick 2026 Refresh
 *
 * In-modal lead form for the "Franchisee Enquiry" flow. Sends
 * formType='franchisee' to /api/bigin (the locked route already routes
 * that into the Zoho Bigin "Franchisee Enquiry" lead source bucket).
 *
 * Fields: name, email, mobile (+91), location.
 *
 * Same UX pattern as HireForm — success replaces form with confirmation
 * card; modal stays open until user dismisses.
 */

import { useId, useState } from 'react';
import { submitToBigin } from '@/lib/submitToBigin';
import { preloadRecaptcha } from '@/lib/recaptcha';
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

export default function FranchiseeForm({ onClose }) {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const locationId = useId();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
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
      !location.trim()
    )
      return;

    setSubmitting(true);
    setStatus(null);
    setErrorMsg('');

    const result = await submitToBigin({
      formType: 'franchisee',
      formPosition: 'header-modal',
      name: name.trim(),
      email: email.trim(),
      mobile: phone,
      location: location.trim(),
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

  if (status === 'success') {
    return (
      <div className={styles.success_card}>
        <span className={styles.success_icon} aria-hidden="true">
          <CheckCircle />
        </span>
        <h3 className={styles.success_heading}>Thanks for your interest.</h3>
        <p className={styles.success_body}>
          Our franchise team will reach out within two business days with the
          partnership deck and next steps.
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
      onFocus={preloadRecaptcha}
    >
      <input type="hidden" name="formType" value="franchisee" />
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
        <label className={styles.label} htmlFor={emailId}>Email</label>
        <input
          className={styles.input}
          type="email"
          id={emailId}
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
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
        <label className={styles.label} htmlFor={locationId}>Preferred Location</label>
        <input
          className={styles.input}
          type="text"
          id={locationId}
          name="location"
          autoComplete="address-level2"
          placeholder="City or area you'd like to operate in"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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
        {submitting ? 'SUBMITTING…' : 'REQUEST PARTNERSHIP DECK'}
      </button>

      <p className={styles.micro}>
        We&rsquo;ll share the partnership deck and next steps within two business days.
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
