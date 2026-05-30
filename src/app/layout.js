import './globals.css';
import { Plus_Jakarta_Sans, Inter, Instrument_Serif } from 'next/font/google';
import Script from 'next/script';
import MetaPixelTracker from '@/components/MetaPixelTracker';
import ModalRoot from '@/components/2026/ModalRoot';

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
        {/* GTM — afterInteractive: queued for after hydration, zero TBT impact */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P2CQPT98');
          `}
        </Script>

        {/* Meta Pixel — afterInteractive */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1197413055574069');
            fbq('track', 'PageView');
          `}
        </Script>

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

        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BlueTick Academy',
              url: 'https://bluetickacademy.com/',
            }),
          }}
        />
      </head>

      <body className="antialiased">
        {/* Skip-to-content link — visually hidden until keyboard-focused,
            then animates in from above. First focusable element on the page. */}
        <a href="#main" className="skip-link">Skip to main content</a>

        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2CQPT98"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Meta Pixel click tracking — small client component */}
        <MetaPixelTracker />

        {children}

        {/* Global modal coordinator — listens for [data-modal-open] clicks
            anywhere in the doc, renders the right modal. Mounted here so
            it's available on every page, not just the home route. */}
        <ModalRoot />
      </body>
    </html>
  );
}
