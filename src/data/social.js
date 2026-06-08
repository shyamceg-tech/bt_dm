/**
 * social.js — external profile links (single source of truth).
 *
 * Used by:
 *   1. The Organization `sameAs` array in the home-page JSON-LD (entity
 *      disambiguation for search / answer engines — not visible to users).
 *   2. A small, low-emphasis icon row in the footer.
 *
 * These profiles are intentionally kept low-prominence on the site.
 */
export const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://www.instagram.com/bluetick.academy/', label: 'BlueTick Academy on Instagram' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/bluetick-academy/', label: 'BlueTick Academy on LinkedIn' },
  { name: 'YouTube', href: 'https://www.youtube.com/@BluetickAcademy', label: 'BlueTick Academy on YouTube' },
  { name: 'Google', href: 'https://share.google/rScPDIlJo7PXJMZI9', label: 'BlueTick Academy on Google' },
];

/** URL-only list for schema.org `sameAs`. */
export const SAME_AS = SOCIAL_LINKS.map((s) => s.href);
