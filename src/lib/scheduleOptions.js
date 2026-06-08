/**
 * scheduleOptions.js — BlueTick 2026 Refresh
 *
 * Pure date/time helpers for the lead pop-up's "Preferred Date & Time" picker
 * and the Google Meet scheduler. No dependencies, runs in the browser.
 *
 * Rules from the brief:
 *   - Date options: upcoming calendar days, EXCLUDING Sundays.
 *   - Time options: 10:00 AM – 6:00 PM, in 15-minute intervals, shown in
 *     12-hour AM/PM format.
 *
 * All times are interpreted in India Standard Time (Asia/Kolkata, +05:30) when
 * composing the ISO datetime for a calendar event, since that's where the
 * campuses and team are.
 */

const IST_OFFSET = '+05:30';
const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const pad2 = (n) => String(n).padStart(2, '0');

/**
 * Upcoming date options, excluding Sundays.
 * @param {number} count  How many valid (non-Sunday) days to return.
 * @param {boolean} includeToday  Start from today (true) or tomorrow (false).
 * @returns {{value:string,label:string,isToday:boolean}[]}
 *          value = 'YYYY-MM-DD', label = 'Mon, 09 Jun'.
 */
export function getDateOptions(count = 12, includeToday = true) {
  const out = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  if (!includeToday) d.setDate(d.getDate() + 1);

  /* Walk forward day by day, skipping Sundays, until we have `count`. */
  let guard = 0;
  while (out.length < count && guard < 60) {
    guard += 1;
    if (d.getDay() !== 0) {
      const value = `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
      const isToday = out.length === 0 && includeToday && guard === 1;
      out.push({
        value,
        label: `${WEEKDAY[d.getDay()]}, ${pad2(d.getDate())} ${MONTH[d.getMonth()]}`,
        isToday,
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}

/**
 * Time slots from 10:00 AM to 6:00 PM inclusive, every 15 minutes.
 * @returns {{value:string,label:string}[]}
 *          value = 'HH:MM' (24h, for ISO compose), label = '10:15 AM'.
 */
export function getTimeOptions(startHour = 10, endHour = 18, stepMin = 15) {
  const out = [];
  for (let mins = startHour * 60; mins <= endHour * 60; mins += stepMin) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    const ampm = h < 12 ? 'AM' : 'PM';
    const h12 = h % 12 === 0 ? 12 : h % 12;
    out.push({
      value: `${pad2(h)}:${pad2(m)}`,
      label: `${pad2(h12)}:${pad2(m)} ${ampm}`,
    });
  }
  return out;
}

/** Human label for a 'YYYY-MM-DD' value (e.g. 'Mon, 09 Jun'). */
export function formatDateLabel(value) {
  if (!value) return '';
  const [y, mo, day] = value.split('-').map(Number);
  const d = new Date(y, mo - 1, day);
  return `${WEEKDAY[d.getDay()]}, ${pad2(day)} ${MONTH[mo - 1]}`;
}

/** Human label for an 'HH:MM' 24h value (e.g. '02:30 PM'). */
export function formatTimeLabel(value) {
  if (!value) return '';
  const [h, m] = value.split(':').map(Number);
  const ampm = h < 12 ? 'AM' : 'PM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${pad2(h12)}:${pad2(m)} ${ampm}`;
}

/**
 * Compose an IST ISO datetime string from a date value + time value.
 * e.g. ('2026-06-09', '14:30') -> '2026-06-09T14:30:00+05:30'
 * Returns the start ISO and an end ISO `durationMin` later.
 */
export function toIstIso(dateValue, timeValue, durationMin = 15) {
  const start = `${dateValue}T${timeValue}:00${IST_OFFSET}`;
  /* Compute end by adding minutes via a Date built from the same wall time.
     We rebuild the offset string manually so DST/local TZ never interferes. */
  const [h, m] = timeValue.split(':').map(Number);
  const endMins = h * 60 + m + durationMin;
  const eh = Math.floor(endMins / 60);
  const em = endMins % 60;
  const end = `${dateValue}T${pad2(eh)}:${pad2(em)}:00${IST_OFFSET}`;
  return { start, end, timeZone: 'Asia/Kolkata' };
}
