/**
 * sitemap.js — dynamic sitemap served at /sitemap.xml
 *
 * Replaces the stale hand-generated public/sitemap.xml (which listed only `/`
 * and was dated 2025). Now lists every real route, including the two landing
 * pages, with sensible priorities. `lastModified` is stamped at build time.
 *
 * Build/server-only — no client cost.
 */
const BASE = 'https://bluetickacademy.com';

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: `${BASE}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    {
      url: `${BASE}/best-digital-marketing-institute-bangalore`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/digital-marketing-course-near-me`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    { url: `${BASE}/contact_us`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/privacypolicy`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    {
      url: `${BASE}/termsandcondition`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
