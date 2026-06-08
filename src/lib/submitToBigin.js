/**
 * submitToBigin.js — BlueTick 2026 Refresh
 *
 * Shared submission helper used by all 6 form stubs on the home page.
 * Wraps `fetch('/api/bigin', POST)` with:
 *   - A 15-second AbortController timeout
 *   - Error classification (`timeout` / `offline` / `network` / `server` / `request`)
 *   - User-facing message per error type
 *   - JSON parse safety (server could return non-JSON on edge errors)
 *
 * The API route at src/app/(default)/api/bigin/route.js is LOCKED per the
 * master prompt §7.1. This helper only reads its existing response shape:
 *   - Success:  HTTP 200 + { success: true,  message: "..." }
 *   - 4xx:      HTTP 400 + { success: false, error: ... }
 *   - 5xx:      HTTP 500 + { success: false, error: "..." }
 *
 * Callers receive a structured result so they can render appropriate UI:
 *   { ok: true }
 *   { ok: false, kind, message }
 *
 * Where `kind` is one of:
 *   'timeout'   - Request took longer than `timeoutMs`
 *   'offline'   - navigator.onLine === false at submit time
 *   'network'   - Fetch threw (DNS, CORS, abort other than timeout)
 *   'server'    - HTTP 5xx response
 *   'request'   - HTTP 4xx response (validation / business logic)
 *
 * The locked API doesn't return per-field validation errors, so 'request'
 * lumps every 4xx into a single generic message. If the API later evolves
 * to return field-level errors, callers can read `result.fieldErrors` —
 * left intentionally undefined here for forward compat.
 */

import { getRecaptchaToken } from './recaptcha';

const ENDPOINT = '/api/bigin';
const DEFAULT_TIMEOUT_MS = 15000;

/**
 * @param {object} payload  Body JSON sent to /api/bigin. Required keys
 *                          depend on formType; at minimum: { name, mobile,
 *                          formType, formPosition }.
 * @param {object} [opts]
 * @param {number} [opts.timeoutMs=15000] - Abort after this many ms.
 * @param {AbortSignal} [opts.signal]     - Optional external abort signal,
 *                                          merged with the internal timeout
 *                                          via AbortController.
 * @param {string} [opts.recaptchaAction='lead_submit'] - Action label for the
 *                                          reCAPTCHA v3 token minted before the
 *                                          POST. All forms route through here,
 *                                          so captcha protection is automatic.
 * @returns {Promise<{ok: true, id?: string} | {ok: false, kind: string, message: string}>}
 *          On success, `id` is the Zoho Bigin record id (when the server
 *          returns one) so callers can later UPDATE the same record.
 */
export async function submitToBigin(payload, opts = {}) {
  const {
    timeoutMs = DEFAULT_TIMEOUT_MS,
    signal: externalSignal,
    recaptchaAction = 'lead_submit',
  } = opts;

  /* Mint a reCAPTCHA v3 token (invisible, no user friction). Resolves to null
     when captcha isn't configured — the server then treats it as "not
     verified, allow", so forms keep working without keys. */
  const recaptchaToken = await getRecaptchaToken(recaptchaAction);
  if (recaptchaToken) {
    payload = { ...payload, recaptchaToken, recaptchaAction };
  }

  /* Pre-flight: if the browser already knows it's offline, fail fast — no
     point starting a fetch that will throw. */
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return {
      ok: false,
      kind: 'offline',
      message: "You're offline. Please check your connection and try again.",
    };
  }

  /* Compose a single AbortController that aborts on either the internal
     timeout OR an externally-passed signal. */
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort('timeout'), timeoutMs);

  let removeExternalListener = null;
  if (externalSignal) {
    if (externalSignal.aborted) {
      clearTimeout(timeoutId);
      controller.abort(externalSignal.reason);
    } else {
      const onAbort = () => controller.abort(externalSignal.reason);
      externalSignal.addEventListener('abort', onAbort, { once: true });
      removeExternalListener = () =>
        externalSignal.removeEventListener('abort', onAbort);
    }
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    /* Try to read JSON regardless of HTTP status — the locked API always
       returns JSON, but a CDN or proxy could intervene. Failing to parse
       isn't fatal; we have the status code as a fallback. */
    let data = null;
    try {
      data = await res.json();
    } catch {
      data = null;
    }

    if (res.ok && data && data.success === true) {
      return { ok: true, id: data.id || null };
    }

    if (res.status >= 500) {
      return {
        ok: false,
        kind: 'server',
        message:
          "Our server hit a snag. Please try again in a moment, or WhatsApp us.",
      };
    }

    return {
      ok: false,
      kind: 'request',
      message:
        "We couldn't submit that. Please check your details and try again.",
    };
  } catch (err) {
    /* Distinguish timeout from other aborts. AbortController.abort(reason)
       sets controller.signal.reason — but for cross-browser safety we
       check the well-known 'AbortError' name too. */
    const aborted = err && (err.name === 'AbortError' || err === 'timeout');
    if (aborted && controller.signal.reason === 'timeout') {
      return {
        ok: false,
        kind: 'timeout',
        message:
          'The request took too long. Please check your connection and try again.',
      };
    }
    if (aborted) {
      /* External cancellation — caller asked us to stop. Surface a neutral
         message; caller likely doesn't render this. */
      return { ok: false, kind: 'aborted', message: 'Submission cancelled.' };
    }

    return {
      ok: false,
      kind: 'network',
      message:
        "We couldn't reach our server. Please check your connection and try again.",
    };
  } finally {
    clearTimeout(timeoutId);
    if (removeExternalListener) removeExternalListener();
  }
}
