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

/* ─── Inline icon components (defined once, used in both mobile + desktop) ── */

function WhatsAppIcon({ className }) {
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
        d="M6.55762 21.5067L7.60528 17.682C6.95895 16.5627 6.61906 15.2926 6.61945 13.9918C6.62139 9.92208 9.93317 6.61108 14.0033 6.61108C15.9785 6.61185 17.8319 7.38069 19.2261 8.77563C20.6198 10.171 21.3875 12.0252 21.3867 13.9976C21.3852 18.0674 18.0726 21.3787 14.0033 21.3787H14.0002C12.7647 21.3784 11.5502 21.0684 10.4718 20.48L6.55762 21.5067Z"
        fill="white"
      />
      <path
        d="M6.55658 21.7011C6.50525 21.7011 6.45547 21.6809 6.41852 21.6436C6.36991 21.5942 6.35086 21.5223 6.36913 21.4558L7.39541 17.7084C6.75919 16.5783 6.42358 15.295 6.42436 13.9922C6.42591 9.81475 9.82519 6.41663 14.0022 6.41663C16.0284 6.41741 17.932 7.20647 19.3627 8.63836C20.7934 10.0706 21.5809 11.9739 21.5801 13.9976C21.5786 18.1747 18.1789 21.5732 14.0022 21.5732C12.7621 21.5728 11.5351 21.2668 10.4462 20.6877L6.60597 21.6945C6.58963 21.6992 6.5733 21.7011 6.55658 21.7011Z"
        fill="white"
      />
      <path
        d="M14.0027 6.61108C15.9779 6.61186 17.8313 7.38069 19.2255 8.77564C20.6192 10.171 21.3869 12.0252 21.3861 13.9976C21.3846 18.0674 18.072 21.3788 14.0027 21.3788H13.9996C12.7641 21.3784 11.5496 21.0684 10.4712 20.48L6.55702 21.5067L7.60468 17.682C6.95835 16.5627 6.61846 15.2926 6.61885 13.9918C6.6208 9.92208 9.93258 6.61108 14.0027 6.61108ZM14.0027 6.22219C9.71869 6.22219 6.23191 9.70741 6.22996 13.9918C6.22957 15.3012 6.56013 16.5915 7.18702 17.7337L6.18174 21.4044C6.14518 21.5386 6.18252 21.6817 6.28052 21.7805C6.35441 21.8551 6.45435 21.896 6.55702 21.896C6.59007 21.896 6.62313 21.8917 6.6558 21.8831L10.423 20.8954C11.5227 21.4663 12.7555 21.7676 13.9996 21.768C18.2867 21.768 21.7735 18.2824 21.7754 13.998C21.7762 11.9217 20.9685 9.96953 19.5012 8.50108C18.0331 7.03225 16.0805 6.22297 14.0027 6.22219Z"
        fill="#CFD8DC"
      />
      <path
        d="M18.3435 9.65686C17.1846 8.49719 15.6442 7.85825 14.0046 7.85786C10.6197 7.85786 7.86679 10.6096 7.86523 13.9922C7.86485 15.1515 8.18918 16.28 8.80362 17.2573L8.94985 17.4895L8.32957 19.7532L10.6524 19.1442L10.8768 19.2772C11.8187 19.8364 12.899 20.132 14.0003 20.1324H14.0027C17.3852 20.1324 20.1382 17.3802 20.1393 13.9972C20.1397 12.3581 19.5023 10.8165 18.3435 9.65686Z"
        fill="#40C351"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1567 10.9064C12.0187 10.5991 11.8732 10.5929 11.7414 10.5875C11.6337 10.5828 11.5108 10.5832 11.3879 10.5832C11.265 10.5832 11.0651 10.6295 10.8959 10.8142C10.7268 10.9989 10.25 11.445 10.25 12.3526C10.25 13.2603 10.9111 14.1376 11.0033 14.2605C11.0954 14.3834 12.2796 16.3057 14.1548 17.0454C15.7131 17.6598 16.0304 17.5377 16.3688 17.507C16.7071 17.4762 17.4604 17.0609 17.614 16.63C17.7676 16.1991 17.7676 15.8301 17.7217 15.7531C17.6754 15.6761 17.5526 15.6302 17.3682 15.5376C17.1839 15.4451 16.2766 14.999 16.1074 14.9376C15.9383 14.8761 15.8154 14.8454 15.6921 15.0301C15.5692 15.2145 15.2157 15.6302 15.108 15.7531C15.0003 15.8764 14.8926 15.8919 14.7082 15.7994C14.5239 15.7068 13.9297 15.5124 13.2246 14.8839C12.6763 14.3951 12.3061 13.7911 12.1983 13.6064C12.0906 13.4221 12.1867 13.3221 12.2792 13.23C12.3621 13.1471 12.4636 13.0145 12.5561 12.9068C12.6483 12.7991 12.679 12.7221 12.7404 12.5992C12.8019 12.4759 12.7712 12.3682 12.7249 12.276C12.6794 12.1835 12.3208 11.2711 12.1567 10.9064Z"
        fill="white"
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
          aria-label="BlueTick Academy — home"
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
