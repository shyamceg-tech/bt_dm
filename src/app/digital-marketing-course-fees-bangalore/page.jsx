/**
 * /digital-marketing-course-fees-bangalore
 *
 * Intent-matched landing page for the "Fees" Google Ads ad group (digital
 * marketing course fees / fees in bangalore / how much does a digital
 * marketing course cost / courses in bangalore fees / duration and fees …).
 *
 * Composition (full homepage parity):
 *   - Hero, CTA banners, MiniFormBand, Tracks, TrustStrip, NamedPlacements,
 *     Recruiters, AiToolStack, Modules, Projects, Certifications, Trainers,
 *     PlacementTimeline, InterviewReadiness, ResumeTransformation, DayInLife,
 *     CareerSwitcher, Comparison, MediaAwards — reused from the homepage. The
 *     hero replicates the homepage hero one-to-one (same design + form); the
 *     CTA banners are homepage-verbatim.
 *   - Heading keywords on Salary / Tracks / Modules / Comparison are re-keyed to
 *     the fee intent via each component's built-in keyword prop (no homepage
 *     edit), kept natural to avoid keyword stuffing.
 *   - Fee-specific: HeroFees (copy swap), FeeBreakdown (fee totals + promise +
 *     assurances, merged directly under <Tracks/>), FeeValueCompare, FaqsFees,
 *     SeoGuideFees.
 *
 * Distinct AEO signal: a Course `offers` price block in the JSON-LD
 * (priceCurrency INR + AggregateOffer + per-instance Offer prices), which the
 * homepage and other landing pages do not carry.
 */

import Header from '@/components/2026/Header';
import SectionNav from '@/components/2026/SectionNav';
import HeroFees from '@/components/2026/fees/HeroFees';
import TracksFees from '@/components/2026/fees/TracksFees';
import TrustStrip from '@/components/2026/TrustStrip';
import Salary from '@/components/2026/Salary';
import FeeValueCompare from '@/components/2026/fees/FeeValueCompare';
import NamedPlacements from '@/components/2026/NamedPlacements';
import CtaBanner, { CtaButton, ScarcityHl } from '@/components/2026/CtaBanner';
import MiniForm from '@/components/2026/MiniForm';
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
import FaqsFees from '@/components/2026/fees/FaqsFees';
import MediaAwards from '@/components/2026/MediaAwards';
import SeoGuideFees from '@/components/2026/fees/SeoGuideFees';
import Footer from '@/components/2026/Footer';
import StickyBar from '@/components/2026/StickyBar';
import ScrollTopButton from '@/components/2026/ScrollTopButton';
import AutoScrollLoop from '@/components/2026/AutoScrollLoop';
import { CAMPUS } from '@/data/near-me.config';
import { SAME_AS } from '@/data/social';
import { META, FEES } from '@/data/fees.config';

const OG_IMAGE = {
  url: '/img/og-fees.png', // fee-specific share card (scripts/generate-og-fees.mjs)
  width: 1200,
  height: 630,
  alt: 'BlueTick Academy — Digital Marketing Course Fees in Bangalore: PCP ₹50,150, PGCP ₹89,680, no-cost EMI, 100% placement record',
};

export const metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: META.canonical },
  openGraph: {
    title: META.title,
    description: META.description,
    url: META.canonical,
    siteName: 'BlueTick Academy',
    locale: 'en_IN',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: META.title,
    description: META.description,
    images: ['/img/og-fees.png'],
  },
};

const SITE = 'https://bluetickacademy.com';
const PAGE = META.canonical;

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': `${SITE}/#organization`,
      name: 'BlueTick Academy',
      url: `${SITE}/`,
      logo: { '@type': 'ImageObject', url: `${SITE}/img/logo.svg` },
      telephone: CAMPUS.phone,
      email: CAMPUS.email,
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
      areaServed: { '@type': 'City', name: 'Bangalore' },
      sameAs: SAME_AS,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '344',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Course',
      '@id': `${PAGE}/#course`,
      name: 'Digital Marketing Course in Bangalore',
      description:
        'A placement-first digital marketing course in Bangalore with transparent, all-inclusive fees (GST included), no-cost EMI, live projects, certifications and 6-month placement support.',
      provider: { '@id': `${SITE}/#organization` },
      inLanguage: 'en-IN',
      educationalLevel: 'Beginner to Advanced',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: String(Math.min(...FEES.map((f) => f.total))),
        highPrice: String(Math.max(...FEES.map((f) => f.total))),
        offerCount: String(FEES.length),
        category: 'Tuition fee (incl. 18% GST)',
        priceValidUntil: '2026-12-31',
        url: PAGE,
      },
      hasCourseInstance: FEES.map((f) => ({
        '@type': 'CourseInstance',
        name: `${f.name} — ${f.durationMonths}-month track`,
        courseMode: ['Onsite', 'Blended'],
        courseWorkload: `P${f.durationMonths}M`,
        location: {
          '@type': 'Place',
          name: 'BlueTick Academy - Bangalore',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: String(f.total),
          category: 'Tuition fee (incl. 18% GST)',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
          url: PAGE,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Digital Marketing Course Fees in Bangalore',
          item: PAGE,
        },
      ],
    },
  ],
};

/* Inline SVG icons for the CTA banner eyebrows (identical to homepage). */
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

export default function FeesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Header />
      <SectionNav />
      <main id="main">
        {/* Hero — replicates the homepage hero (design + form), fee copy */}
        <HeroFees />

        {/* Merged: course tracks + their total fees, right below the hero.
            Each card carries its own total fee (no separate strip); the promise
            leads and the assurances close the band. */}
        <TracksFees />

        {/* Reused proof */}
        <TrustStrip />
        <Salary keyword="Digital Marketing Course Fees in Bangalore" />

        {/* Fee-vs-value reframe */}
        <FeeValueCompare />

        <NamedPlacements merged />

        {/* CTA Banner #1 — homepage verbatim (placements variant) */}
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

        <Recruiters />
        <AiToolStack />
        <Modules headingLead="our" headingKeyword="digital marketing course fees in Bangalore" />

        {/* CTA Banner #2 — homepage verbatim (sunset, embedded mini-form) */}
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

        {/* CTA Banner #3 — homepage verbatim (cosmic, button-only) */}
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
        <Comparison keyword="digital marketing course in Bangalore" />

        {/* Swap: fee FAQs (emit FAQPage schema) */}
        <FaqsFees />

        {/* CTA Banner #4 — homepage verbatim (mintelectric, scarcity sub) */}
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

        {/* Swap: ~2,300-word fee-intent article */}
        <SeoGuideFees />
      </main>

      <Footer />
      {/* Sticky CTA text matches the home page (component default
          "Apply for Next Batch"); only the scroll target is page-specific. */}
      <StickyBar targetHref="#hero-form" />
      <ScrollTopButton />
      <AutoScrollLoop />
    </>
  );
}
