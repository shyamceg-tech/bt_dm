/**
 * /hoodi/digital-marketing-course-in-bangalore  (Hoodi BRANCH — Google Ads only)
 *
 * Exact replica of the homepage (src/app/page.jsx), with every Indiranagar
 * reference swapped to Hoodi information: the Hoodi Hero (location chip), the
 * Hoodi long-form guide, the Hoodi NAP/geo (from the Hoodi near-me config) and a
 * Hoodi-scoped JSON-LD @graph. All other sections are the shared homepage
 * components, reused verbatim.
 *
 * NOINDEX / NOFOLLOW (Google-Ads landing page only). Excluded from the sitemap;
 * not linked from anywhere on the site. The real homepage is untouched.
 */

import Header from '@/components/2026/Header';
import Hero from '@/components/2026/hoodi/Hero';
import TrustStrip from '@/components/2026/TrustStrip';
import Salary from '@/components/2026/Salary';
import NamedPlacements from '@/components/2026/NamedPlacements';
import CtaBanner, { CtaButton, ScarcityHl } from '@/components/2026/CtaBanner';
import MiniForm from '@/components/2026/MiniForm';
import Tracks from '@/components/2026/Tracks';
import MiniFormBand from '@/components/2026/MiniFormBand';
import Recruiters from '@/components/2026/Recruiters';
import AiToolStack from '@/components/2026/AiToolStack';
import Modules from '@/components/2026/Modules';
import Projects from '@/components/2026/Projects';
import Certifications from '@/components/2026/Certifications';
import Trainers from '@/components/2026/Trainers';
import PlacementTimeline from '@/components/2026/PlacementTimeline';
import InterviewReadiness from '@/components/2026/InterviewReadiness';
import ResumeTransformation from '@/components/2026/ResumeTransformation';
import DayInLife from '@/components/2026/DayInLife';
import CareerSwitcher from '@/components/2026/CareerSwitcher';
import Comparison from '@/components/2026/Comparison';
import Faqs from '@/components/2026/Faqs';
import MediaAwards from '@/components/2026/MediaAwards';
import SeoGuide from '@/components/2026/hoodi/SeoGuide';
import Footer from '@/components/2026/Footer';
import StickyBar from '@/components/2026/StickyBar';
import ScrollTopButton from '@/components/2026/ScrollTopButton';
import SectionNav from '@/components/2026/SectionNav';
import AutoScrollLoop from '@/components/2026/AutoScrollLoop';
import { CAMPUS } from '@/data/hoodi/near-me.config';
import { SAME_AS } from '@/data/social';

const OG_IMAGE = {
  url: '/img/og-home.png',
  width: 1200,
  height: 630,
  alt: 'BlueTick Academy - Digital Marketing Course in Bangalore (Hoodi) with 100% placement record',
};

const SITE = 'https://bluetickacademy.com';
const CANON = `${SITE}/hoodi/digital-marketing-course-in-bangalore/`;

export const metadata = {
  alternates: { canonical: '/hoodi/digital-marketing-course-in-bangalore/' },
  /* NOINDEX — Google-Ads landing page only. Must never be indexed. */
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title:
      'Digital Marketing Course in Bangalore | 100% Placement Record | BlueTick Academy',
    description:
      "Bangalore's placement-first AI-powered Digital Marketing course at our Hoodi centre. 100% placement. AI-native 2026 curriculum. 10,000+ alumni network in MNCs & Startups.",
    url: CANON,
    siteName: 'BlueTick Academy',
    locale: 'en_IN',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Digital Marketing Course in Bangalore | 100% Placement | BlueTick Academy',
    description:
      "Bangalore's placement-first, AI-powered digital marketing course at our Hoodi centre. 100% placement record, AI-native 2026 curriculum, 10,000+ alumni.",
    images: ['/img/og-home.png'],
  },
};

/* Structured data (@graph). Hoodi-scoped @id (this noindex branch page describes
   the Hoodi centre, so it does not reuse the global ${SITE}/#organization entity).
   Address / geo / NAP come from the Hoodi campus config. */
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': CANON,
      name: 'BlueTick Academy Hoodi',
      alternateName: 'BlueTick Digital Marketing Academy – Hoodi',
      url: CANON,
      logo: { '@type': 'ImageObject', url: `${SITE}/img/logo.svg` },
      image: `${SITE}/img/og-home.png`,
      description:
        "BlueTick Academy's Hoodi centre is Bangalore's placement-first, AI-powered digital marketing institute. Practitioner trainers, an AI-native 2026 curriculum, a 100% placement record and 10,000+ alumni across MNCs and startups.",
      email: CAMPUS.email,
      telephone: CAMPUS.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${CAMPUS.addressLine1}, ${CAMPUS.addressLine2}`,
        addressLocality: CAMPUS.city,
        addressRegion: CAMPUS.state,
        postalCode: CAMPUS.pincode,
        addressCountry: CAMPUS.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: CAMPUS.geo.lat,
        longitude: CAMPUS.geo.lng,
      },
      hasMap: CAMPUS.mapsLink,
      areaServed: { '@type': 'City', name: 'Bangalore' },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '19:00',
        },
      ],
      knowsAbout: [
        'Digital Marketing',
        'Search Engine Optimization',
        'Google Ads',
        'Social Media Marketing',
        'Performance Marketing',
        'Content Marketing',
        'Marketing Analytics',
        'Generative AI in Marketing',
      ],
      sameAs: [...SAME_AS, CAMPUS.gbpLink],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '344',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${CANON}#website`,
      url: CANON,
      name: 'BlueTick Academy',
      inLanguage: 'en-IN',
      publisher: { '@id': CANON },
    },
    {
      '@type': 'Course',
      '@id': `${CANON}#course`,
      name: 'Digital Marketing Course in Bangalore',
      description:
        'A placement-first digital marketing course in Bangalore at the Hoodi centre, covering SEO, Google Ads, social media, performance marketing, analytics and generative-AI tools, with live projects, certifications and dedicated placement support.',
      provider: { '@id': CANON },
      inLanguage: 'en-IN',
      educationalLevel: 'Beginner to Advanced',
      about: [
        'Digital Marketing',
        'Search Engine Optimization',
        'Google Ads',
        'Social Media Marketing',
        'Generative AI in Marketing',
      ],
      hasCourseInstance: [
        {
          '@type': 'CourseInstance',
          name: 'Professional Certification (PCP) - 3-month track',
          courseMode: 'Onsite',
          courseWorkload: 'P3M',
          location: {
            '@type': 'Place',
            name: 'BlueTick Academy - Hoodi, Bangalore',
          },
        },
        {
          '@type': 'CourseInstance',
          name: 'Post Graduate Program (PGCP) - 5-month track',
          courseMode: ['Onsite', 'Blended'],
          courseWorkload: 'P5M',
          location: {
            '@type': 'Place',
            name: 'BlueTick Academy - Hoodi, Bangalore',
          },
        },
        {
          '@type': 'CourseInstance',
          name: 'Elevate - 7-month advanced track',
          courseMode: 'Onsite',
          courseWorkload: 'P7M',
          location: {
            '@type': 'Place',
            name: 'BlueTick Academy - Hoodi, Bangalore',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANON}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      ],
    },
  ],
};

/* Inline SVG icons for the CTA banner eyebrows. Single-use, ~5 lines each. */
function IconCheckCircle() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function HoodiHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Header />
      <SectionNav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Salary />
        <NamedPlacements merged />

        {/* CTA Banner #1 — "placements" variant. */}
        <CtaBanner
          id="cta-banner-1"
          variant="placements"
          title={
            <>
              These names could be <em>yours</em> in 5 months.
            </>
          }
          sub="Few seats left for the upcoming batch."
          placed={
            <>
              312 placed alumni{' '}
              <span style={{ color: '#0B1422' }}>in last 4 months</span>
            </>
          }
          meta={
            <>
              <strong>7 seats left</strong> &middot; No spam &middot; Reply within 15 mins
            </>
          }
        >
          <MiniForm
            id="cta-banner-1-form"
            formPosition="cta-banner-1"
            theme="light"
            withArrow
            ariaLabel="Apply for the next batch"
          />
        </CtaBanner>

        <Tracks />
        <MiniFormBand />

        <Recruiters />
        <AiToolStack />
        <Modules />

        {/* CTA Banner #2 — sunset, embedded mini-form. Mid-curriculum nudge. */}
        <CtaBanner
          id="cta-banner-2"
          variant="sunset"
          eyebrow={<><IconCheckCircle />Curriculum that gets you hired</>}
          title={
            <>
              Built for the way companies actually hire in <em>2026</em>.
            </>
          }
          sub="25+ modules. 60+ tools. 3 shipped portfolio projects. One direction: your dream job."
          meta={
            <>
              <strong>WhatsApp the full syllabus</strong> &middot; No call required
            </>
          }
        >
          <MiniForm
            id="cta-banner-2-form"
            formPosition="cta-banner-2"
            theme="dark"
            withArrow
            ariaLabel="WhatsApp the full syllabus"
          />
        </CtaBanner>

        <Projects />
        <Certifications />
        <Trainers />

        <PlacementTimeline />
        <InterviewReadiness />
        <ResumeTransformation />

        {/* CTA Banner #3 — cosmic, button-only (no form). ~60% scroll. */}
        <CtaBanner
          id="cta-banner-3"
          variant="cosmic"
          eyebrow={<><IconStar />Your Day-91 resume</>}
          title={
            <>
              In 120 days, your resume looks <em>completely different.</em>
            </>
          }
          sub="3 live projects. 12 certifications. Recruiter intros. A portfolio that walks into interviews with you."
          meta={<><strong>100% placement record</strong></>}
        >
          <CtaButton href="#hero-form">START YOUR DM CAREER</CtaButton>
        </CtaBanner>

        <DayInLife />
        <CareerSwitcher />
        <Comparison />

        <Faqs />

        {/* CTA Banner #4 — mintelectric, scarcity sub + embedded mini-form */}
        <CtaBanner
          id="cta-banner-4"
          variant="mintelectric"
          eyebrow={<><IconClock />Decision time</>}
          title={
            <>
              Compared. Convinced. <em>Now is the move.</em>
            </>
          }
          subVariant="scarcity"
          sub={
            <>
              Bangalore&rsquo;s next batch starts <ScarcityHl>in 12 days</ScarcityHl>.{' '}
              <ScarcityHl>9 seats left</ScarcityHl>.
            </>
          }
          meta={
            <>
              <strong>15-min call</strong> &middot; Zero pressure &middot; Get the full picture
            </>
          }
        >
          <MiniForm
            id="cta-banner-4-form"
            formPosition="cta-banner-4"
            theme="dark"
            withArrow
            ariaLabel="Apply for the next batch - decision-time form"
          />
        </CtaBanner>

        <MediaAwards />

        {/* Long-form SEO/AEO/GEO content — Hoodi variant of the homepage guide. */}
        <SeoGuide />
      </main>

      <Footer />
      <StickyBar />
      <ScrollTopButton />
      {/* Mobile-only: gently auto-scrolls the alumni & projects carousels. */}
      <AutoScrollLoop />
    </>
  );
}
