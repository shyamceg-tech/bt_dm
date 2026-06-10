/**
 * sitemap.js — dynamic sitemap served at /sitemap.xml
 *
 * Lists every real, indexable route. The six SEO landing-page URLs are
 * imported from their own config modules (the single source of truth for
 * each page's canonical), so this file can never drift out of sync with the
 * actual routes again — add a page, import its canonical here.
 *
 * NOTE: the noindex Google-Ads landing pages are intentionally excluded.
 *
 * Build/server-only — no client cost.
 */
import { META as BEST } from '@/data/best-course.config';
import { META as FEES } from '@/data/fees.config';
import { META as ONLINE } from '@/data/online.config';
import { META as PLACEMENT } from '@/data/placement-bangalore.config';
import { META as TRAINING } from '@/data/training-bangalore.config';
import { META as NEAR_ME } from '@/data/near-me.config';

const BASE = 'https://bluetickacademy.com';

export default function sitemap() {
  const lastModified = new Date();

  /* The six keyword-intent landing pages — same priority/cadence. */
  const landingPages = [
    BEST.canonical,
    PLACEMENT.canonical,
    FEES.canonical,
    ONLINE.canonical,
    NEAR_ME.canonical,
    TRAINING.canonical,
  ].map((url) => ({
    url,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [
    { url: `${BASE}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    ...landingPages,
    { url: `${BASE}/contact_us/`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/privacypolicy/`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    {
      url: `${BASE}/termsandcondition/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
