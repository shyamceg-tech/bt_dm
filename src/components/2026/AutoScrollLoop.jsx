'use client';

/**
 * AutoScrollLoop.jsx — BlueTick 2026 Refresh
 *
 * Gently auto-scrolls the carousels tagged `[data-autoscroll-loop]` (the alumni
 * board and the projects row) back and forth in a continuous loop on MOBILE —
 * the same "it moves on its own" feel as the Media & Awards strip — while still
 * letting the user swipe manually (auto-scroll pauses on touch, then resumes).
 *
 * Scope / guardrails (all cheap, no layout duplication, no card-size changes):
 *   - Mobile only (<768px). On desktop these are static grids — untouched.
 *   - Runs only while the carousel is actually on-screen (IntersectionObserver).
 *   - Pauses for a couple of seconds whenever the user interacts, so a manual
 *     swipe always wins.
 *
 * Driven by a data attribute so the sections themselves stay as they are; only
 * this tiny client island hydrates.
 */

import { useEffect } from 'react';

export default function AutoScrollLoop() {
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const SPEED = 0.45;     // px per frame ≈ 27px/s — slow and gentle
    const RESUME_MS = 2500; // how long to wait after a manual interaction

    let raf = 0;
    let entries = [];

    // Only drive a carousel while it's actually on screen (cheap rect check for
    // a couple of elements — avoids the timing quirks of IntersectionObserver).
    const onScreen = (el) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.bottom > 0 && r.top < vh;
    };

    const tick = () => {
      const now = performance.now();
      for (const e of entries) {
        // While paused (user swiping) or off-screen, keep our float position in
        // sync with the real scroll so we resume from wherever they left it.
        if (now < e.pausedUntil || !onScreen(e.el)) { e.pos = e.el.scrollLeft; continue; }
        const max = e.el.scrollWidth - e.el.clientWidth;
        if (max <= 1) continue;
        // Accumulate in a float — `scrollLeft` rounds to an integer on read, so
        // a sub-pixel increment added to it would be lost every frame.
        e.pos += SPEED * e.dir;
        if (e.pos >= max) { e.pos = max; e.dir = -1; }    // right edge → reverse
        else if (e.pos <= 0) { e.pos = 0; e.dir = 1; }    // left edge → reverse
        e.el.scrollLeft = e.pos;
      }
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      entries.forEach((e) => {
        ['pointerdown', 'touchstart', 'wheel'].forEach((ev) =>
          e.el.removeEventListener(ev, e.onInteract)
        );
        // Restore the element's own CSS (e.g. when resizing up to desktop).
        e.el.style.scrollBehavior = '';
        e.el.style.scrollSnapType = '';
      });
      entries = [];
    };

    const start = () => {
      stop();
      if (!mq.matches) return; // desktop: leave the grids alone
      const els = Array.from(document.querySelectorAll('[data-autoscroll-loop]'));
      if (!els.length) return;

      entries = els.map((el) => {
        // Auto-scroll needs instant, snap-free scrolling to stay smooth.
        el.style.scrollBehavior = 'auto';
        el.style.scrollSnapType = 'none';
        const e = { el, dir: 1, pos: el.scrollLeft, pausedUntil: 0, onInteract: null };
        e.onInteract = () => { e.pausedUntil = performance.now() + RESUME_MS; };
        ['pointerdown', 'touchstart', 'wheel'].forEach((ev) =>
          el.addEventListener(ev, e.onInteract, { passive: true })
        );
        return e;
      });

      raf = requestAnimationFrame(tick);
    };

    start();
    mq.addEventListener('change', start);
    return () => { mq.removeEventListener('change', start); stop(); };
  }, []);

  return null;
}
