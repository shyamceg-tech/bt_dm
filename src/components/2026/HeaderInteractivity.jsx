'use client';

/**
 * HeaderInteractivity.jsx — BlueTick 2026 Refresh
 *
 * The ONE client-side concern of the header. Kept deliberately small to
 * preserve the TBT ≈ 0 target. Contains:
 *
 *   1. IntersectionObserver against a sentinel at y=80px to toggle the
 *      `is_scrolled` class on the header. NO scroll listener — IO fires
 *      only when crossing the boundary (~twice per scroll session), so
 *      per-frame TBT cost is zero.
 *
 *   2. A single useState for the mobile drawer (open / closed).
 *
 *   3. Body scroll-lock while the drawer is open.
 *
 *   4. Escape key closes the drawer.
 *
 *   5. Renders the hamburger button + drawer backdrop + drawer panel.
 *
 * Rendered inside <Header /> (server component). The hamburger lives here
 * (not in the server markup) so click handlers + aria-expanded co-locate
 * with the state.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

export default function HeaderInteractivity({
  phoneHref,
  whatsappHref,
  phoneDisplay,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeBtnRef = useRef(null);

  /* ─── Sticky scroll state via IntersectionObserver ─────────────────────── */
  useEffect(() => {
    const sentinel = document.querySelector(`.${styles.scroll_sentinel}`);
    const header = document.getElementById('site-header');
    if (!sentinel || !header) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // Sentinel is at y=80px. When it leaves the viewport (scrolled past),
        // the header becomes "scrolled". When it re-enters, header becomes
        // transparent again.
        if (entry.isIntersecting) {
          header.classList.remove(styles.is_scrolled);
        } else {
          header.classList.add(styles.is_scrolled);
        }
      },
      { threshold: 0 }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  /* ─── Body scroll-lock while drawer is open ────────────────────────────── */
  useEffect(() => {
    if (!drawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [drawerOpen]);

  /* ─── Escape key closes drawer; focus the close button on open ─────────── */
  useEffect(() => {
    if (!drawerOpen) return;

    closeBtnRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <button
        type="button"
        className={styles.hamburger}
        aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={drawerOpen}
        aria-controls="primary-drawer"
        onClick={() => setDrawerOpen((v) => !v)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Backdrop — always in DOM, animated via data-open attribute */}
      <div
        className={styles.drawer_backdrop}
        data-open={drawerOpen}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer panel — always in DOM (no remount cost) */}
      <aside
        id="primary-drawer"
        className={styles.drawer}
        data-open={drawerOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        aria-hidden={!drawerOpen}
        // React 19 supports `inert` as a real boolean prop — when true, the
        // browser removes the subtree from tab order + accessibility tree.
        inert={!drawerOpen}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className={styles.drawer_close}
          aria-label="Close menu"
          onClick={closeDrawer}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <ul className={styles.drawer_links}>
          <li>
            <a href="#placements" onClick={closeDrawer}>Placements</a>
          </li>
          <li>
            <a href="#section-14" onClick={closeDrawer}>Courses</a>
          </li>
          <li>
            <a href="#curriculum" onClick={closeDrawer}>Curriculum</a>
          </li>
          <li>
            <a href="#projects" onClick={closeDrawer}>Projects</a>
          </li>
          <li>
            <a href="#trainers" onClick={closeDrawer}>Trainers</a>
          </li>
          <li>
            <a href="#section-19" onClick={closeDrawer}>FAQs</a>
          </li>
          <li>
            <button
              type="button"
              data-modal-open="hire"
              onClick={closeDrawer}
            >
              Hire from us
            </button>
          </li>
          <li>
            <button
              type="button"
              data-modal-open="franchisee"
              onClick={closeDrawer}
            >
              Franchisee Enquiry
            </button>
          </li>
          <li>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp {phoneDisplay}
            </a>
          </li>
          <li>
            <a href={phoneHref}>Call {phoneDisplay}</a>
          </li>
        </ul>
      </aside>
    </>
  );
}
