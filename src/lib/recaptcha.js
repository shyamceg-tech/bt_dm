/**
 * recaptcha.js — BlueTick 2026 Refresh
 *
 * Client-side Google reCAPTCHA v3 helper. v3 is invisible (score-based, no
 * checkbox / image challenge), so it protects every form on the site without
 * adding any user friction — which keeps it aligned with the page's strict
 * performance + UX budget.
 *
 * Performance: the ~funnels reCAPTCHA script (~100 KB) is NOT loaded on page
 * load. It is injected lazily the first time a form is focused
 * (`preloadRecaptcha`) or, at the latest, when a form is submitted
 * (`getRecaptchaToken`). This mirrors the existing DeferredScripts pattern so
 * the critical load path stays clean.
 *
 * Graceful degradation: if NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set (e.g. in
 * local dev before the user provisions keys), every function here no-ops and
 * `getRecaptchaToken` resolves to `null`. The server treats a missing token as
 * "captcha not configured" and lets the submission through, so forms keep
 * working end-to-end without keys. Once the key + secret are added, protection
 * turns on automatically — no code change.
 *
 * To swap providers later (e.g. Cloudflare Turnstile), only this file + the
 * server verifier in /api/bigin need to change; forms call getRecaptchaToken()
 * and never touch the provider directly.
 */

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
const SCRIPT_ID = 'bt-recaptcha-v3';

let loadPromise = null;

/** True only in the browser with a configured site key. */
export function recaptchaEnabled() {
  return typeof window !== 'undefined' && !!SITE_KEY;
}

/**
 * Inject the reCAPTCHA v3 script exactly once and resolve when `grecaptcha`
 * is ready. Safe to call repeatedly — subsequent calls return the same promise.
 * Resolves to `false` (rather than rejecting) if disabled or on load error, so
 * callers never have to wrap this in try/catch.
 */
export function preloadRecaptcha() {
  if (!recaptchaEnabled()) return Promise.resolve(false);
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve) => {
    /* If another island already injected it, just wait for readiness. */
    const onReady = () => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => resolve(true));
      } else {
        resolve(false);
      }
    };

    if (document.getElementById(SCRIPT_ID)) {
      onReady();
      return;
    }

    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(SITE_KEY)}`;
    s.async = true;
    s.defer = true;
    s.onload = onReady;
    s.onerror = () => resolve(false); // network/adblock — fail open, server decides
    document.head.appendChild(s);
  });

  return loadPromise;
}

/**
 * Produce a fresh reCAPTCHA v3 token for the given action.
 * @param {string} action  Coarse action label (e.g. 'lead_submit'). reCAPTCHA
 *                         uses it for analytics + risk scoring.
 * @returns {Promise<string|null>}  Token, or null when captcha is disabled /
 *                                  failed to load (server treats null as
 *                                  "not verified, allow").
 */
export async function getRecaptchaToken(action = 'submit') {
  if (!recaptchaEnabled()) return null;
  const ok = await preloadRecaptcha();
  if (!ok || !window.grecaptcha) return null;
  try {
    return await window.grecaptcha.execute(SITE_KEY, { action });
  } catch {
    return null;
  }
}
