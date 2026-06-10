'use client';

/**
 * PlacementPageCta.jsx — bottom CTA for the placement/job intent page.
 * Job-framed copy. Posts to /api/bigin with formPosition="placement-page-cta".
 * Reuses best/BestPageCta.module.css for visual parity.
 */

import { useId, useState } from 'react';
import { submitToBigin } from '@/lib/submitToBigin';
import styles from '../best/BestPageCta.module.css';

const FALLBACK_ERROR = 'Something went wrong. Please try again or call us directly.';

export default function PlacementPageCta() {
  const nameId  = useId();
  const phoneId = useId();
  const goalId  = useId();

  const [name,       setName]       = useState('');
  const [phone,      setPhone]      = useState('');
  const [goal,       setGoal]       = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status,     setStatus]     = useState(null);
  const [errorMsg,   setErrorMsg]   = useState('');

  const onPhoneChange = (e) => {
    setPhone(e.target.value.replace(/\D/g, '').slice(0, 10));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !/^\d{10}$/.test(phone) || !goal) return;

    setSubmitting(true);
    setStatus(null);
    setErrorMsg('');

    const result = await submitToBigin({
      formType:     'default',
      formPosition: 'placement-page-cta',
      name:         name.trim(),
      mobile:       phone,
      role:         goal,
    });

    setSubmitting(false);
    if (result.ok) setStatus('success');
    else {
      setStatus('error');
      setErrorMsg(result.message || FALLBACK_ERROR);
    }
  };

  return (
    <section
      id="placement-page-cta"
      className={styles.section}
      aria-labelledby="placement-cta-heading"
    >
      <div className={styles.container}>
        <p className={styles.eyebrow}>Your offer letter starts here</p>

        <h2 id="placement-cta-heading" className={styles.heading}>
          Stop searching for a course.
          <br /><em>Start planning your placement.</em>
        </h2>

        <p className={styles.subline}>
          15-minute call with a placement counsellor. We share named placed alumni,
          the salary report, and a placement plan mapped to your target role - no
          pressure, no script.
        </p>

        <div className={styles.formCard}>
          <form
            className={styles.form}
            action="/api/bigin"
            method="POST"
            noValidate
            onSubmit={onSubmit}
          >
            <input type="hidden" name="formType"     value="default" />
            <input type="hidden" name="formPosition" value="placement-page-cta" />

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor={nameId}>Your name</label>
                <input
                  className={styles.input}
                  type="text" id={nameId} name="name"
                  autoComplete="name" placeholder="Full name"
                  value={name} onChange={(e) => setName(e.target.value)}
                  required disabled={submitting || status === 'success'}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={phoneId}>Phone number</label>
                <div className={styles.phoneWrap}>
                  <span className={styles.phonePrefix} aria-hidden="true">+91</span>
                  <input
                    className={styles.phoneInput}
                    type="tel" id={phoneId} name="mobile"
                    inputMode="numeric" autoComplete="tel-national"
                    placeholder="10-digit mobile"
                    value={phone} onChange={onPhoneChange}
                    aria-label="Phone number, country code +91"
                    pattern="[0-9]{10}" maxLength={10} required
                    disabled={submitting || status === 'success'}
                  />
                </div>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor={goalId}>What matters most to you?</label>
              <div className={styles.selectWrap}>
                <select
                  className={styles.select}
                  id={goalId} name="role"
                  value={goal} onChange={(e) => setGoal(e.target.value)}
                  required disabled={submitting || status === 'success'}
                >
                  <option value="" disabled>Choose one</option>
                  <option value="how-placement-works">See how our placement works</option>
                  <option value="verified-placements">See verified placed alumni</option>
                  <option value="salary-report">Get the salary report</option>
                  <option value="placement-plan">Get a placement plan for my role</option>
                </select>
              </div>
            </div>

            <button
              className={styles.btn}
              type="submit"
              disabled={submitting || status === 'success'}
              aria-busy={submitting || undefined}
            >
              {submitting ? 'SUBMITTING…' : 'START YOUR DM CAREER'}
            </button>

            <p className={styles.micro}>
              No spam. WhatsApp confirmation within 15 mins.
            </p>

            {status === 'success' && (
              <p className={styles.statusSuccess} role="status">
                You&rsquo;re booked. A placement counsellor will WhatsApp you within 15 mins
                with a call slot and your placement plan.
              </p>
            )}
            {status === 'error' && (
              <div className={styles.statusError} role="alert">
                {errorMsg}{' '}
                <button type="button" className={styles.retryBtn} onClick={() => { setStatus(null); setErrorMsg(''); }}>
                  Try again
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
