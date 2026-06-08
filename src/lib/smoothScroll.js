/**
 * smoothScroll.js — BlueTick 2026 Refresh
 *
 * A self-driven smooth scroll that is immune to interruption.
 *
 * Why this exists: the page sets `scroll-behavior: smooth` globally, and the
 * home page runs several IntersectionObservers (SectionNav, ScrollReveal) that
 * fire as sections cross the viewport. A native `scrollTo({behavior:'smooth'})`
 * or an `href="#…"` hash jump animates over time, and those observers'
 * `scrollIntoView` calls race against it — so a long jump (e.g. from the
 * footer sticky bar up to the hero form, or "back to top") would randomly stall
 * mid-page or not move at all, leaving the target stuck behind the header with
 * an empty gap below.
 *
 * The fix: drive the scroll ourselves with rAF, setting the exact position each
 * frame via `behavior:'instant'`. Because we re-assert the position every frame
 * and force the exact target on the final frame, any competing scroll animation
 * is overridden and we always land precisely on target. Honors
 * prefers-reduced-motion (jumps instantly).
 */

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export function smoothScrollTo(targetY) {
  if (typeof window === 'undefined') return;

  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const target = Math.max(0, Math.min(Math.round(targetY), Math.max(0, maxY)));
  const startY = window.scrollY;
  const dist = target - startY;
  if (dist === 0) return;

  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    window.scrollTo({ top: target, behavior: 'instant' });
    return;
  }

  // Scale duration with distance but clamp so short hops feel snappy and long
  // page-spanning jumps don't crawl.
  const duration = Math.min(700, Math.max(280, Math.abs(dist) * 0.32));
  let startTime = null;

  const step = (ts) => {
    if (startTime === null) startTime = ts;
    const p = Math.min(1, (ts - startTime) / duration);
    const y = Math.round(startY + dist * easeOutCubic(p));
    window.scrollTo({ top: y, behavior: 'instant' });
    if (p < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo({ top: target, behavior: 'instant' });
    }
  };

  window.requestAnimationFrame(step);
}
