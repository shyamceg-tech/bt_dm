'use client';

/**
 * LeadDetailsForm.jsx — BlueTick 2026 lead funnel (step 1: pop-up details)
 *
 * Shown right after a visitor submits name + phone on any enrollment form.
 * Their name + phone are ALREADY saved to Zoho by that point (brief §3), so
 * this pop-up only *enriches* the existing record via an UPDATE — it never
 * creates a duplicate, and abandoning it loses nothing.
 *
 * Three fields, per the brief:
 *   a) Online or Offline
 *   b) If Offline → "Select Center" (Indiranagar / Hoodi / Bannerghatta Road)
 *   c) Preferred Date & Time for a call (dates exclude Sundays; times 10 AM–6 PM
 *      in 15-min steps, AM/PM)
 */

import { useId, useMemo, useState } from 'react';
import { submitToBigin } from '@/lib/submitToBigin';
import { CENTERS } from '@/data/centers';
import {
  getDateOptions,
  getTimeOptions,
  formatDateLabel,
  formatTimeLabel,
} from '@/lib/scheduleOptions';
import styles from './LeadFunnel.module.css';

export default function LeadDetailsForm({ lead, onComplete }) {
  const modeOnlineId = useId();
  const modeOfflineId = useId();
  const centerId = useId();
  const dateId = useId();
  const timeId = useId();

  const dateOptions = useMemo(() => getDateOptions(12, true), []);
  const timeOptions = useMemo(() => getTimeOptions(10, 18, 15), []);

  const [mode, setMode] = useState('');        // 'online' | 'offline'
  const [center, setCenter] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!mode) return;
    if (mode === 'offline' && !center) return;

    setSubmitting(true);
    setErrorMsg('');

    const centerLabel =
      mode === 'offline'
        ? CENTERS.find((c) => c.value === center)?.label || center
        : '';
    const dateLabel = date ? formatDateLabel(date) : '';
    const timeLabel = time ? formatTimeLabel(time) : '';

    const details = {
      learningMode: mode === 'online' ? 'Online' : 'Offline',
      center: centerLabel,
      preferredDate: dateLabel,
      preferredTime: timeLabel,
    };

    const result = await submitToBigin(
      {
        action: 'update',
        id: lead?.leadId || undefined,
        name: lead?.name,
        mobile: lead?.mobile,
        formPosition: lead?.formPosition,
        ...details,
      },
      { recaptchaAction: 'lead_details' }
    );

    setSubmitting(false);

    /* The record was already created at name+phone; success here just means
       the enrichment stuck. Either way we advance to the Thank-You screen so
       the GA4 conversion fires — but surface a soft note if the update failed
       so the user (and us via logs) knows. */
    if (result.ok) {
      onComplete(details);
    } else {
      setErrorMsg(
        result.message ||
          "We saved your number but couldn't attach these details. You can still continue."
      );
    }
  };

  /* If the update errored, let them push through to confirmation (lead is
     safe) rather than trapping them in the pop-up. */
  const onContinueAnyway = () => {
    onComplete({
      learningMode: mode === 'online' ? 'Online' : 'Offline',
      center,
    });
  };

  return (
    <form className={styles.detailsForm} onSubmit={onSubmit} noValidate>
      <p className={styles.detailsLead}>
        Hi{lead?.name ? ` ${lead.name.split(' ')[0]}` : ''}! Two quick things so
        our advisor can prep for your call.
      </p>

      {/* a) Online / Offline ------------------------------------------------ */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          How would you like to learn?
        </legend>
        <div className={styles.segmented} role="radiogroup" aria-label="Learning mode">
          <input
            type="radio"
            id={modeOnlineId}
            name="mode"
            className={styles.segInput}
            checked={mode === 'online'}
            onChange={() => setMode('online')}
          />
          <label htmlFor={modeOnlineId} className={styles.segLabel}>
            <span className={styles.segEmoji} aria-hidden="true">💻</span>
            Online
          </label>

          <input
            type="radio"
            id={modeOfflineId}
            name="mode"
            className={styles.segInput}
            checked={mode === 'offline'}
            onChange={() => setMode('offline')}
          />
          <label htmlFor={modeOfflineId} className={styles.segLabel}>
            <span className={styles.segEmoji} aria-hidden="true">🏫</span>
            Offline
          </label>
        </div>
      </fieldset>

      {/* b) Center (offline only) ------------------------------------------ */}
      {mode === 'offline' && (
        <div className={`${styles.field} ${styles.reveal}`}>
          <label className={styles.fieldLabel} htmlFor={centerId}>
            Select Center
          </label>
          <div className={styles.selectWrap}>
            <select
              id={centerId}
              className={styles.select}
              value={center}
              onChange={(e) => setCenter(e.target.value)}
              required
            >
              <option value="" disabled>
                Choose your nearest centre
              </option>
              {CENTERS.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* c) Preferred date & time ------------------------------------------ */}
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor={dateId}>
            Preferred date for a call
          </label>
          <div className={styles.selectWrap}>
            <select
              id={dateId}
              className={styles.select}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              <option value="">Any day</option>
              {dateOptions.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                  {d.isToday ? ' (today)' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor={timeId}>
            Preferred time
          </label>
          <div className={styles.selectWrap}>
            <select
              id={timeId}
              className={styles.select}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Any time</option>
              {timeOptions.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className={styles.primaryBtn}
        disabled={submitting || !mode || (mode === 'offline' && !center)}
        aria-busy={submitting || undefined}
      >
        {submitting ? 'Saving…' : 'Confirm & continue'}
      </button>

      {errorMsg && (
        <div className={styles.softError} role="alert">
          {errorMsg}{' '}
          <button type="button" className={styles.linkBtn} onClick={onContinueAnyway}>
            Continue
          </button>
        </div>
      )}
    </form>
  );
}
