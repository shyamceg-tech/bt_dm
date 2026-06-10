'use client';

/**
 * MeetScheduler.jsx — BlueTick 2026 lead funnel (Thank-You sub-component)
 *
 * "Schedule a 15-minute Google Meet call". Collects a date, a time, and the
 * student's Gmail, then POSTs to /api/schedule-meet which creates ONE calendar
 * event (with a Meet link) and invites academics@bluetickacademy.com,
 * shyam.ceg1990@gmail.com and the student — so it lands on everyone's calendar.
 *
 * If the Google integration isn't configured yet, the API replies
 * { configured:false } and we show a graceful "we'll email the invite"
 * confirmation. Either way the requested slot is pushed to Zoho.
 */

import { useId, useMemo, useState } from 'react';
import { submitToBigin } from '@/lib/submitToBigin';
import {
  getDateOptions,
  getTimeOptions,
  toIstIso,
  formatDateLabel,
  formatTimeLabel,
} from '@/lib/scheduleOptions';
import styles from './LeadFunnel.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function MeetScheduler({ lead }) {
  const dateId = useId();
  const timeId = useId();
  const emailId = useId();

  const dateOptions = useMemo(() => getDateOptions(12, true), []);
  const timeOptions = useMemo(() => getTimeOptions(10, 18, 15), []);

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [done, setDone] = useState(null); // {meetLink?, emailed:bool, slotLabel}

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!date || !time || !EMAIL_RE.test(email)) {
      setErrorMsg('Please pick a date, a time, and enter a valid Gmail address.');
      return;
    }
    setSubmitting(true);
    setErrorMsg('');

    const { start, end, timeZone } = toIstIso(date, time, 15);
    const slotLabel = `${formatDateLabel(date)} at ${formatTimeLabel(time)} IST`;

    let res;
    try {
      const r = await fetch('/api/schedule-meet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: lead?.name,
          mobile: lead?.mobile,
          studentEmail: email.trim(),
          start,
          end,
          timeZone,
        }),
      });
      res = await r.json();
    } catch {
      res = { success: false, error: 'network' };
    }

    /* Record the requested Meet slot on the Zoho lead regardless of whether
       the live calendar booking is wired up yet. */
    submitToBigin(
      {
        action: 'update',
        id: lead?.leadId || undefined,
        name: lead?.name,
        mobile: lead?.mobile,
        formPosition: lead?.formPosition,
        /* Carry forward the details from the previous step so this update does
           NOT blank Learning_Mode / Center / Description (the route rewrites
           those fields on every update). */
        learningMode: lead?.learningMode,
        center: lead?.center,
        preferredDate: lead?.preferredDate,
        preferredTime: lead?.preferredTime,
        meetScheduled: true,
        meetDateTime: slotLabel,
        meetLink: res?.meetLink || '',
        studentEmail: email.trim(),
      },
      { recaptchaAction: 'meet_schedule' }
    ).catch(() => {});

    setSubmitting(false);

    if (res?.success) {
      setDone({ meetLink: res.meetLink, emailed: true, slotLabel });
    } else if (res?.configured === false) {
      /* Integration not live yet — confirm graceful fallback. */
      setDone({ meetLink: '', emailed: true, slotLabel });
    } else {
      setErrorMsg(
        "We couldn't book that slot just now. Please WhatsApp us and we'll lock it in."
      );
    }
  };

  if (done) {
    return (
      <div className={styles.meetDone} role="status">
        <span className={styles.meetDoneIcon} aria-hidden="true">📅</span>
        <p className={styles.meetDoneTitle}>You're booked for {done.slotLabel}.</p>
        {done.meetLink ? (
          <p className={styles.meetDoneBody}>
            A Google Meet invite is on its way to your inbox.{' '}
            <a href={done.meetLink} target="_blank" rel="noopener noreferrer" className={styles.meetLink}>
              Open Meet link
            </a>
          </p>
        ) : (
          <p className={styles.meetDoneBody}>
            Our advisor will email you the Google Meet invite shortly. See you then!
          </p>
        )}
      </div>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        className={styles.meetToggle}
        onClick={() => setOpen(true)}
      >
        <span className={styles.meetToggleIcon} aria-hidden="true">🎥</span>
        Schedule a 15-minute Google Meet call
      </button>
    );
  }

  return (
    <form className={styles.meetForm} onSubmit={onSubmit} noValidate>
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor={dateId}>Date</label>
          <div className={styles.selectWrap}>
            <select id={dateId} className={styles.select} value={date} onChange={(e) => setDate(e.target.value)} required>
              <option value="" disabled>Pick a day</option>
              {dateOptions.map((d) => (
                <option key={d.value} value={d.value}>{d.label}{d.isToday ? ' (today)' : ''}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor={timeId}>Time</label>
          <div className={styles.selectWrap}>
            <select id={timeId} className={styles.select} value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="" disabled>Pick a time</option>
              {timeOptions.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.fieldLabel} htmlFor={emailId}>Your Gmail (for the calendar invite)</label>
        <input
          id={emailId}
          type="email"
          className={styles.input}
          placeholder="you@gmail.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button type="submit" className={styles.meetSubmit} disabled={submitting} aria-busy={submitting || undefined}>
        {submitting ? 'Booking…' : 'Book my Google Meet'}
      </button>

      {errorMsg && <p className={styles.softError} role="alert">{errorMsg}</p>}
    </form>
  );
}
