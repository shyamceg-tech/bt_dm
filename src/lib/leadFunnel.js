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
  window.dispatchEvent(new CustomEvent(LEAD_FUNNEL_EVENT, { detail }));
}
