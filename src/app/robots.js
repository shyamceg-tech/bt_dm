/**
 * robots.js — served at /robots.txt
 *
 * Allows all crawlers, declares the canonical host, and points to the dynamic
 * sitemap. Build/server-only — no client cost.
 */
const BASE = 'https://bluetickacademy.com';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
