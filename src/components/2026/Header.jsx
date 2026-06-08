/**
 * Header.jsx — BlueTick 2026 Refresh
 *
 * SERVER COMPONENT. Static markup ships pre-rendered with zero hydration cost.
 * The only client JS for this header is `<HeaderInteractivity />` — a tiny
 * island that runs an IntersectionObserver for the sticky scroll state and
 * holds a single useState for the mobile drawer.
 *
 * Phase 1 sources:
 *   - Markup:   bluetick-2026-refresh-v3.html  lines 6688–6785
 *   - Styles:   lines 282–386 (mobile), 1917–1928 (desktop), 6627–6635 (scrolled)
 *
 * Logo: served from /public/img/logo.svg via next/image (not inlined — per
 * master prompt §4.2 Batch 2B).
 * WA / Call / Hamburger icons: inline <svg> (per master prompt §4.2 — "tiny
 * and one-time").
 *
 * Phone number is hardcoded in two places (mobile + desktop) — DRY would
 * complicate the markup for two strings; keeping it inline.
 */

import Image from 'next/image';
import styles from './Header.module.css';
import HeaderInteractivity from './HeaderInteractivity';
import HeaderSectionLabel from './HeaderSectionLabel';

/* ─── Inline icon components (defined once, used in both mobile + desktop) ── */

function WhatsAppIcon({ className }) {
  // Green disc with the full WhatsApp glyph (speech bubble + handset) in white,
  // sized to fill the round button. Using the complete bubble — not just the
  // handset — so it reads unmistakably as WhatsApp rather than a phone/call icon.
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="14" fill="#25D366" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5.5c-4.7 0-8.5 3.8-8.5 8.5 0 1.5.4 2.95 1.15 4.24L5.5 22.5l4.39-1.14A8.46 8.46 0 0 0 14 22.5c4.7 0 8.5-3.8 8.5-8.5S18.7 5.5 14 5.5Zm0 15.3a7 7 0 0 1-3.57-.98l-.26-.15-2.6.68.69-2.54-.17-.27A6.97 6.97 0 0 1 7.03 14 6.97 6.97 0 1 1 14 20.8Zm3.84-5.21c-.21-.1-1.24-.61-1.44-.68-.19-.07-.33-.11-.47.1-.14.21-.54.68-.66.82-.12.14-.24.16-.45.05a5.76 5.76 0 0 1-1.69-1.04 6.34 6.34 0 0 1-1.17-1.46c-.12-.21-.01-.32.09-.43.1-.1.21-.24.31-.37.1-.13.14-.22.21-.36.07-.14.03-.26-.02-.37-.05-.1-.47-1.13-.64-1.55-.17-.4-.34-.35-.47-.35l-.4-.01c-.14 0-.36.05-.55.26-.19.21-.72.7-.72 1.71 0 1.01.74 1.99.84 2.13.1.14 1.45 2.21 3.52 3.1.49.21.88.34 1.18.44.49.15.94.13 1.3.08.4-.06 1.24-.51 1.41-1 .17-.49.17-.9.12-.99-.05-.09-.19-.14-.4-.24Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="13.5" fill="#F6F6F6" stroke="#DCDCDC" />
      <path
        d="M12.0039 18.6096C12.0039 18.6096 14.2211 20.5366 16.7109 20.9001C16.7109 20.9001 18.4375 21.282 19.6374 19.882C19.6374 19.882 20.4553 19.282 19.7098 18.3371L17.8376 16.5011C17.8376 16.5011 17.3833 15.992 16.6563 16.4286L15.9839 17.101C15.7298 17.3551 15.3116 17.4098 15.0028 17.2103C14.1487 16.6835 12.513 15.4837 11.5495 13.7571C11.3678 13.4482 11.4224 13.0485 11.6766 12.8121L12.131 12.3577C12.131 12.3577 12.9851 11.6123 12.1494 10.7582L10.2958 8.92214C10.2958 8.92214 9.64117 8.4493 8.96884 9.03147C8.96884 9.03147 7.3693 10.3761 7.87834 12.6479C7.87834 12.6479 7.91455 15.0468 12.0224 18.6271L12.0039 18.6096Z"
        fill="#282E38"
      />
      <path
        d="M14.6581 10.6126C15.3851 10.6311 16.0574 10.9399 16.548 11.4667C17.0385 11.9935 17.3112 12.6843 17.275 13.4113C17.275 13.6115 17.4205 13.7748 17.62 13.7932C17.8202 13.7932 17.9835 13.6299 17.9835 13.4482C18.0197 12.521 17.6747 11.6492 17.0563 10.976C16.4201 10.3037 15.5661 9.92174 14.6574 9.88553C14.4571 9.88553 14.2939 10.0311 14.2754 10.2306C14.2754 10.4308 14.4209 10.5941 14.6204 10.6125L14.6581 10.6126Z"
        fill="#282E38"
      />
      <path
        d="M14.8036 8.48635C16.0944 8.52256 17.312 9.0678 18.2022 10.0128C19.0925 10.9577 19.5653 12.1938 19.5106 13.5022C19.5106 13.7024 19.6562 13.8657 19.8557 13.8841C20.0559 13.8841 20.2192 13.7208 20.2192 13.5391C20.2738 12.0489 19.7286 10.6311 18.7105 9.54061C17.6924 8.45011 16.3116 7.83245 14.8214 7.77778C14.6212 7.77778 14.4579 7.92332 14.4395 8.12281C14.4395 8.32303 14.585 8.48631 14.7845 8.50478L14.8036 8.48635Z"
        fill="#282E38"
      />
    </svg>
  );
}

/* ─── Shared constants ─────────────────────────────────────────────────────── */
const PHONE_HREF = 'tel:+919606995525';
const WHATSAPP_HREF = 'https://wa.me/919606995525';
const PHONE_DISPLAY = '+91-9606 9955 25';

/* ─── Header (server component) ────────────────────────────────────────────── */
export default function Header() {
  return (
    <>
      {/* Sentinel — 1px element at y=80px so the IntersectionObserver below
          (in HeaderInteractivity) can toggle `.is_scrolled` without ever
          attaching a scroll listener. Lives outside the header element. */}
      <div className={styles.scroll_sentinel} aria-hidden="true" />

      <header
        className={styles.site_header}
        id="site-header"
        role="banner"
      >
        {/* Brand */}
        <a
          href="/"
          className={styles.brand}
          aria-label="BlueTick Academy - home"
        >
          <Image
            src="/img/logo.svg"
            alt="BlueTick Academy"
            width={134}
            height={48}
            className={styles.brand_logo}
            priority
          />
        </a>

        {/* Mobile-only: live "current section" label that replaces the logo on
            scroll (paired with the section-nav strip collapsing). Hidden ≥1024px. */}
        <HeaderSectionLabel />

        {/* Desktop nav (≥1024px) */}
        <nav className={styles.nav_desktop} aria-label="Primary">
          <ul className={styles.nav_list}>
            <li><a href="#placements">Placements</a></li>
            <li><a href="#section-14">Courses</a></li>
            <li><a href="#curriculum">Curriculum</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#section-19">FAQs</a></li>
          </ul>

          <div className={styles.nav_actions}>
            <button
              type="button"
              className={styles.pill}
              data-modal-open="hire"
              aria-haspopup="dialog"
            >
              Hire from us
            </button>
            <a
              className={`${styles.pill} js-wa-cta`}
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp BlueTick Academy at ${PHONE_DISPLAY}`}
            >
              <WhatsAppIcon className={styles.icon} />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              className={`${styles.pill} js-call-cta`}
              href={PHONE_HREF}
              aria-label={`Call BlueTick Academy at ${PHONE_DISPLAY}`}
            >
              <PhoneIcon className={`${styles.icon} ${styles.icon_call_inline}`} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </nav>

        {/* Mobile right-side action group (<1024px) */}
        <div className={styles.mobile_actions}>
          <a
            className={`${styles.icon_btn} ${styles.icon_btn_wa} js-wa-cta`}
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp BlueTick Academy"
          >
            <WhatsAppIcon className={styles.icon} />
          </a>
          <a
            className={`${styles.icon_btn} ${styles.icon_btn_call} js-call-cta`}
            href={PHONE_HREF}
            aria-label="Call BlueTick Academy"
          >
            <PhoneIcon className={styles.icon} />
          </a>

          {/* The hamburger button is rendered by HeaderInteractivity (client)
              so onClick + aria-expanded state are managed in one place. */}
          <HeaderInteractivity
            phoneHref={PHONE_HREF}
            whatsappHref={WHATSAPP_HREF}
            phoneDisplay={PHONE_DISPLAY}
          />
        </div>
      </header>
    </>
  );
}
