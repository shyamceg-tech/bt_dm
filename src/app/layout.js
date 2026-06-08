import './globals.css';
import { Plus_Jakarta_Sans, Inter, Instrument_Serif } from 'next/font/google';
import MetaPixelTracker from '@/components/MetaPixelTracker';
import DeferredScripts from '@/components/DeferredScripts';
import ModalRoot from '@/components/2026/ModalRoot';
import LeadFunnel from '@/components/2026/lead/LeadFunnel';
import ScrollReveal from '@/components/2026/ScrollReveal';
import ScrollProgressBar from '@/components/2026/ScrollProgressBar';

/* ===========================================================================
   Typography — self-hosted via next/font (no Google Fonts CDN, no FOUT).
   Weight inventory matches the Phase 1 design source of truth:
     Plus Jakarta Sans : 500, 600, 700, 800     (display / headings)
     Inter             : 400, 500, 600, 700, 800 (body / UI)
     Instrument Serif  : 400 roman + 400 italic  (editorial accent — sparse)
   display: 'swap' so text never blocks LCP.
   =========================================================================== */
const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-accent',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  // Absolute base for all canonical / OG / Twitter / opengraph-image URLs.
  // Non-www is the canonical host (matches the sitemap + landing-page configs).
  metadataBase: new URL('https://bluetickacademy.com'),
  title: 'Digital Marketing Course in Bangalore | 100% Placement Record | BlueTick Academy',
  description:
    "Bangalore's placement-first AI-powered Digital Marketing course. 100% placement. AI-native 2026 curriculum. 10,000+ alumni network in MNCs & Startups.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${plusJakarta.variable} ${inter.variable} ${instrumentSerif.variable}`}
    >
      <head>
        {/* GTM + Meta Pixel are loaded lazily (on first interaction / idle) by
            <DeferredScripts /> in the body — see that component for the why.
            This keeps ~570 KB of third-party JS off the critical load path so
            it no longer inflates TBT / LCP. The <noscript> fallbacks below
            still fire a PageView for no-JS clients. */}

        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1197413055574069&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Structured data is defined per-route: the home page emits a full
            EducationalOrganization + Course + FAQPage + BreadcrumbList graph
            (see src/app/page.jsx); the landing pages emit their own. */}
      </head>

      <body className="antialiased">
        {/* Skip-to-content link — visually hidden until keyboard-focused,
            then animates in from above. First focusable element on the page. */}
        <a href="#main" className="skip-link">Skip to main content</a>
        <ScrollProgressBar />

        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2CQPT98"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Lazy third-party loader — boots GTM + Meta Pixel on first
            interaction or after an idle fallback, off the critical path. */}
        <DeferredScripts />

        {/* Meta Pixel click tracking — small client component */}
        <MetaPixelTracker />

        {children}

        {/* Global modal coordinator — listens for [data-modal-open] clicks
            anywhere in the doc, renders the right modal. Mounted here so
            it's available on every page, not just the home route. */}
        <ModalRoot />

        {/* Post-submit lead funnel — opens the Online/Offline + preferred-time
            pop-up after any enrollment form captures name + phone, then the
            Thank-You screen (exact GA4 message + Call/WhatsApp + Google Meet). */}
        <LeadFunnel />
        <ScrollReveal />
      </body>
    </html>
  );
}
