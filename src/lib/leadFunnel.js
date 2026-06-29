/**
 * leadFunnel.js — BlueTick 2026 Refresh
 *
 * Tiny custom-event bus that connects the many lead forms scattered across the
 * site to the single global <LeadFunnel> island (mounted once in layout.js).
 *
 * Why an event bus instead of context/props:
 *   - The forms live in different client islands (Hero, MiniForm ×N, landing
 *     hero forms). Threading a shared opener through all of them — and through
 *     the RSC boundaries between them — would force more components client-side
 *     and bloat the bundle.
 *   - This mirrors the existing ModalRoot delegation pattern already used on
 *     the site, so it's idiomatic here.
 *
 * Flow:
 *   1. A form captures name + phone and POSTs to Zoho immediately (so the lead
 *      is saved even if the pop-up is abandoned — brief §3).
 *   2. On success it calls `openLeadFunnel({ leadId, name, mobile, ... })`.
 *   3. <LeadFunnel> hears the event, opens the details pop-up, and on
 *      completion shows the Thank-You screen.
 */

export const LEAD_FUNNEL_EVENT = 'bluetick:lead-captured';

/**
 * Build the Enhanced-Conversions `user_data` object for Google Ads, in the
 * canonical shape Google's User-Provided Data accepts (phone in E.164, name
 * split into first/last, optional email). Returns `undefined` if there's
 * nothing matchable, and omits any field we don't have — Google prefers a
 * missing key over an empty string. GTM hashes (SHA-256) client-side before
 * anything leaves the browser, so we push the plain values here.
 *
 * @param {object} detail
 * @returns {object|undefined}
 */
function buildUserData(detail) {
  const userData = {};

  /* Indian numbers are stored as bare 10 digits across every form; Google
     needs full E.164 (+91…) to match. Guard on exactly 10 digits so a
     malformed value never produces a bad +91 prefix. */
  const digits = String(detail?.mobile || '').replace(/\D/g, '');
  if (digits.length === 10) userData.phone_number = `+91${digits}`;

  const email = String(detail?.email || '').trim();
  if (email) userData.email = email;

  /* "First Last" → {first_name, last_name}. Single-word names just set
     first_name. Both fields improve the Enhanced-Conversions match rate. */
  const nameParts = String(detail?.name || '').trim().split(/\s+/).filter(Boolean);
  if (nameParts.length) {
    userData.address = { first_name: nameParts[0] };
    if (nameParts.length > 1) {
      userData.address.last_name = nameParts.slice(1).join(' ');
    }
  }

  return Object.keys(userData).length ? userData : undefined;
}

/**
 * @param {object} detail
 * @param {string} [detail.leadId]        Zoho Bigin record id from the initial
 *                                        POST (used to UPDATE, not duplicate).
 * @param {string} detail.name
 * @param {string} detail.mobile
 * @param {string} [detail.email]         Optional; carried into `user_data`
 *                                        when a form collects it (future-proof).
 * @param {string} [detail.formPosition]  Funnel source label.
 */
export function openLeadFunnel(detail) {
  if (typeof window === 'undefined') return;

  /* Announce the lead to GTM at the SAME funnel moment the old "Register"
     click conversion fired: the instant name + phone are saved to Zoho. GTM
     fires the Google Ads conversion (AW-16978463601 / b123CO-9hbkaEPGW-58_)
     and GA4 `generate_lead` off this `lead_captured` event — robust to the
     deferred GTM load (the push queues and replays once GTM boots) and
     immune to button-copy changes. Fired here, in the shared opener, so it
     covers every enrollment form (home Hero/Mini + all 6 landing heroes)
     and nothing else (franchise/hire/newsletter never call this).

     `user_data` rides on the SAME push so GTM's User-Provided Data variable
     can read it for Enhanced Conversions for Leads — sent via the data layer
     (Google's recommended method) rather than scraped from the DOM, so it's
     immune to the dynamic useId() field IDs and works even after the form
     unmounts behind the details pop-up. */
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'lead_captured',
    form_position: detail?.formPosition || 'website',
    user_data: buildUserData(detail),
  });

  window.dispatchEvent(new CustomEvent(LEAD_FUNNEL_EVENT, { detail }));
}
