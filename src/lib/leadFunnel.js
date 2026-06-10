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
 * @param {object} detail
 * @param {string} [detail.leadId]        Zoho Bigin record id from the initial
 *                                        POST (used to UPDATE, not duplicate).
 * @param {string} detail.name
 * @param {string} detail.mobile
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
     and nothing else (franchise/hire/newsletter never call this). */
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'lead_captured',
    form_position: detail?.formPosition || 'website',
  });

  window.dispatchEvent(new CustomEvent(LEAD_FUNNEL_EVENT, { detail }));
}
