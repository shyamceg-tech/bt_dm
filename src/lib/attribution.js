/**
 * attribution.js — BlueTick 2026
 *
 * Captures *where a lead came from* so it lands in Zoho Bigin with:
 *   - Page Source   — which page the visitor was on (Near Me, Online, …)
 *   - Lead Source   — "Google Ads" when the visit is a paid-search click
 *   - Campaign / Ad group / Keyword — pulled from the Google Ads URL params
 *   - GCLID         — the click id (handy for offline-conversion imports)
 *
 * How the data arrives in the URL
 * --------------------------------
 * Google Ads is configured (see the README steps the user was given) with a
 * Final-URL-suffix / tracking template that appends ValueTrack + UTM params:
 *
 *   ?utm_source=google&utm_medium=cpc
 *   &utm_campaign={_campaign}&utm_content={_adgroup}&utm_term={keyword}
 *   &matchtype={matchtype}&device={device}&gclid={gclid}
 *
 * (campaign/ad-group *names* come from manual custom-parameter values set per
 *  campaign/ad group, since ValueTrack only exposes their numeric ids.)
 *
 * Performance
 * -----------
 * Pure synchronous work: read `location`, parse the query string, touch
 * `sessionStorage`. No network, no render cost, no added critical JS. Runs once
 * per page view from a `null`-rendering client component, so it never blocks
 * paint or LCP.
 *
 * First-touch wins
 * ----------------
 * The paid-click params only exist on the *landing* URL. If the visitor then
 * navigates to another page (where the params are gone) and submits there, we
 * must not lose the original attribution — so the first paid click captured in
 * a session is kept for the rest of that session.
 */

const STORAGE_KEY = 'bt_attr';

/* Friendly, human-readable names for the known ad landing pages. Anything not
   listed falls back to a title-cased version of the URL slug. */
const PAGE_SOURCE_MAP = {
  '/': 'Home',
  '/digital-marketing-course-near-me': 'Near Me',
  '/digital-marketing-course-online': 'Online',
  '/digital-marketing-course-with-placement-bangalore': 'Placement Bangalore',
  '/best-digital-marketing-course-in-bangalore': 'Best Course',
  '/digital-marketing-training-in-bangalore': 'Training Bangalore',
  '/digital-marketing-course-fees-bangalore': 'Fees Bangalore',
};

function friendlyPage(pathname) {
  if (!pathname) return 'Home';
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (PAGE_SOURCE_MAP[clean]) return PAGE_SOURCE_MAP[clean];
  const slug = clean.split('/').filter(Boolean).pop();
  if (!slug) return 'Home';
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Read the current URL's marketing params and persist them (first-touch) for
 * the session. Safe to call on every page view — it self-guards.
 */
export function captureAttribution() {
  if (typeof window === 'undefined') return;
  try {
    const p = new URLSearchParams(window.location.search);

    /* gclid (standard), plus gbraid/wbraid for iOS app/web conversions. */
    const gclid =
      p.get('gclid') || p.get('gbraid') || p.get('wbraid') || '';
    const utmSource = (p.get('utm_source') || '').toLowerCase();
    const utmMedium = (p.get('utm_medium') || '').toLowerCase();

    const isGoogleAds =
      !!gclid ||
      utmSource === 'google' ||
      /cpc|ppc|paidsearch|paid/.test(utmMedium);

    const record = {
      pageSource: friendlyPage(window.location.pathname),
      isGoogleAds,
      gAdsCampaign: p.get('utm_campaign') || '',
      gAdsAdGroup: p.get('utm_content') || p.get('utm_adgroup') || '',
      gAdsKeyword: p.get('utm_term') || p.get('keyword') || '',
      matchType: p.get('matchtype') || '',
      device: p.get('device') || '',
      gclid,
    };

    const prevRaw = sessionStorage.getItem(STORAGE_KEY);
    const prev = prevRaw ? JSON.parse(prevRaw) : null;

    /* First-touch wins: if we already captured a paid click this session and
       this page view is NOT itself a fresh paid click, keep the original. */
    if (prev && prev.isGoogleAds && !isGoogleAds) return;

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* sessionStorage can throw in private mode / blocked storage — never let
       attribution break a page or a form submit. */
  }
}

/**
 * Return the stored, payload-ready attribution object to merge into a Bigin
 * submission. Falls back to the current page name when nothing was captured.
 * @returns {object}
 */
export function getAttribution() {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return { pageSource: friendlyPage(window.location?.pathname) };
}
