'use client';

/**
 * ModulesAutoplay.jsx — BlueTick 2026 Refresh
 *
 * Tiny client island that gently auto-advances each curriculum rail one card at
 * a time (~every 2s) so users notice there's more to the right. It is NOT a
 * continuous marquee scroll — it slides to the next card, rests, then slides to
 * the next, looping back to the start at the end.
 *
 * Behaviour / guardrails (all cheap, no layout thrash, no load-speed impact):
 *   - Only runs while a rail is actually in the viewport (IntersectionObserver).
 *   - Stops *permanently* for a rail the moment the user interacts with it
 *     (pointer / touch / wheel / keyboard) — their manual scroll wins.
 *   - Skipped entirely under prefers-reduced-motion.
 *
 * Driven by `[data-autoplay-rail]` on each rail in Modules.jsx, so the section
 * itself stays a server component; only this ~1KB island hydrates.
 */

import { useEffect } from 'react';

const STEP_MS = 2000;

export default function ModulesAutoplay() {
  useEffect(() => {
    // This auto-advance is an explicitly-requested affordance, so it runs even
    // under reduce-motion. It still stops permanently the instant the user
    // interacts with a rail, so manual control is never taken away.
    const rails = Array.from(document.querySelectorAll('[data-autoplay-rail]'));
    if (!rails.length) return;

    const state = new Map(); // rail -> { interrupted, timer }

    const step = (rail) => {
      const s = state.get(rail);
      if (!s || s.interrupted) return;
      const cards = rail.children;
      if (cards.length < 2) return;
      const cardStep = cards[1].offsetLeft - cards[0].offsetLeft;
      const max = rail.scrollWidth - rail.clientWidth;
      if (cardStep <= 0 || max <= 4) return; // nothing to scroll
      let next = rail.scrollLeft + cardStep;
      if (next > max - 4) next = 0; // reached the end → loop to start
      rail.scrollTo({ left: next, behavior: 'smooth' });
    };

    const start = (rail) => {
      const s = state.get(rail);
      if (!s || s.interrupted || s.timer) return;
      s.timer = window.setInterval(() => step(rail), STEP_MS);
    };
    const pause = (rail) => {
      const s = state.get(rail);
      if (s && s.timer) { clearInterval(s.timer); s.timer = null; }
    };
    const interrupt = (rail) => {
      const s = state.get(rail);
      if (!s) return;
      s.interrupted = true;
      pause(rail);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) start(e.target);
          else pause(e.target);
        });
      },
      { threshold: 0.4 }
    );

    const USER_EVENTS = ['pointerdown', 'touchstart', 'wheel', 'keydown'];
    const teardown = [];

    rails.forEach((rail) => {
      state.set(rail, { interrupted: false, timer: null });
      const onInteract = () => interrupt(rail);
      USER_EVENTS.forEach((ev) =>
        rail.addEventListener(ev, onInteract, { passive: true })
      );
      io.observe(rail);
      teardown.push(() =>
        USER_EVENTS.forEach((ev) => rail.removeEventListener(ev, onInteract))
      );
    });

    return () => {
      io.disconnect();
      state.forEach((s) => s.timer && clearInterval(s.timer));
      teardown.forEach((fn) => fn());
    };
  }, []);

  return null;
}
