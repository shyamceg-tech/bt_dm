/**
 * /digital-marketing-course-with-placement-bangalore
 *
 * Intent-matched landing page for the "Job & Placement" Google Ads ad group,
 * covering search terms with "placement", "job", "job guarantee" and
 * "pay after placement" for a digital marketing course in Bangalore.
 *
 * Architecture (parity refresh, 2026-06-09):
 *   • The page now carries EVERY homepage content section, reused verbatim, so
 *     a placement searcher sees the same depth of proof the homepage offers.
 *     Homepage components are imported, never modified.
 *   • The placement-specific VARIANTS are kept as the content swaps:
 *       HeroPlacement, PlacementNumbersPlacement, PlacementProcess,
 *       WhyPlacement, ComparisonPlacement, FaqsPlacement, SeoGuidePlacement,
 *       PlacementPageCta.
 *   • Section ORDER is re-sequenced for job/placement intent: outcome proof
 *     (numbers → named alumni → salary) and the placement process/guarantee are
 *     front-loaded; curriculum + credibility sit mid-page; comparison, FAQ and
 *     the ~2,000-word guide stay pinned to the bottom.
 *
 * SectionNav is intentionally omitted: its tabs are hard-coded to homepage
 * anchors (e.g. #section-19 for the homepage FAQ), which don't exist here.
 *
 * The FAQPage JSON-LD lives co-located in <FaqsPlacement />.
 */

import Header from '@/components/2026/Header';
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
import PlacementTimeline from '@/components/2026/PlacementTimeline';
import Projects from '@/components/2026/Projects';
import Certifications from '@/components/2026/Certifications';
import Trainers from '@/components/2026/Trainers';
import InterviewReadiness from '@/components/2026/InterviewReadiness';
import ResumeTransformation from '@/components/2026/ResumeTransformation';
import DayInLife from '@/components/2026/DayInLife';
import CareerSwitcher from '@/components/2026/CareerSwitcher';
import MediaAwards from '@/components/2026/MediaAwards';
import Footer from '@/components/2026/Footer';
import StickyBar from '@/components/2026/StickyBar';
import ScrollTopButton from '@/components/2026/ScrollTopButton';
import AutoScrollLoop from '@/components/2026/AutoScrollLoop';

/* ─── Placement/job-intent VARIANTS (the ~20–30% content swaps) ───────────── */
import HeroPlacement from '@/components/2026/placement/HeroPlacement';
import PlacementNumbersPlacement from '@/components/2026/placement/PlacementNumbersPlacement';
import ComparisonPlacement from '@/components/2026/placement/ComparisonPlacement';
import FaqsPlacement from '@/components/2026/placement/FaqsPlacement';
import SeoGuidePlacement from '@/components/2026/placement/SeoGuidePlacement';
import PlacementPageCta from '@/components/2026/placement/PlacementPageCta';

import { CAMPUS } from '@/data/near-me.config';
import { SAME_AS } from '@/data/social';
import { META, SITE, CANONICAL } from '@/data/placement-bangalore.config';

/* Interim share card — reuses the home OG until a placement-specific
   og-placement.png is generated (mirror scripts/generate-og-best.mjs). */
const OG_IMAGE = {
  url: '/img/og-home.png',
  width: 1200,
  height: 630,
  alt: 'BlueTick Academy — Digital Marketing Course in Bangalore with Placement & 100% placement support',
};

export const metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: META.canonical },
  openGraph: {
    title: META.ogTitle,
    description: META.ogDescription,
    url: META.canonical,
    siteName: 'BlueTick Academy',
    locale: 'en_IN',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: META.ogTitle,
    description: META.ogDescription,
    images: ['/img/og-home.png'],
  },
};

/* Structured data (@graph) for AEO/GEO + rich results. The organization uses
   the GLOBAL @id (`${SITE}/#organization`) so Google consolidates this page's
   entity with the homepage's rather than minting a duplicate local business.
   The Course carries a placement-framed description and the three instances;
   FAQPage is emitted separately in <FaqsPlacement />. Server-rendered — no
   client JS. */
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': `${SITE}/#organization`,
      name: 'BlueTick Academy',
      alternateName: 'BlueTick Digital Marketing Academy',
      url: `${SITE}/`,
      logo: { '@type': 'ImageObject', url: `${SITE}/img/logo.svg` },
      image: `${SITE}/img/og-home.png`,
      description: META.description,
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
        'Placement Support',
      ],
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
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: `${SITE}/`,
      name: 'BlueTick Academy',
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE}/#organization` },
    },
    {
      '@type': 'Course',
      '@id': `${CANONICAL}#course`,
      name: 'Digital Marketing Course in Bangalore with Placement',
      description:
        'A placement-first digital marketing course in Bangalore with 100% placement support, a 500+ hiring-partner network, live projects and an AI-native 2026 curriculum. Covers SEO, Google Ads, social media, performance marketing, analytics and generative-AI tools, with dedicated placement support until you are hired.',
      provider: { '@id': `${SITE}/#organization` },
      inLanguage: 'en-IN',
      educationalLevel: 'Beginner to Advanced',
      occupationalCredentialAwarded:
        'Digital marketing certifications + placement support',
      about: [
        'Digital Marketing',
        'Search Engine Optimization',
        'Google Ads',
        'Social Media Marketing',
        'Performance Marketing',
        'Generative AI in Marketing',
        'Placement Support',
      ],
      hasCourseInstance: [
        {
          '@type': 'CourseInstance',
          name: 'Professional Certification (PCP) - 3-month track with placement support',
          courseMode: 'Onsite',
          courseWorkload: 'P3M',
          location: {
            '@type': 'Place',
            name: 'BlueTick Academy - Indiranagar, Bangalore',
          },
        },
        {
          '@type': 'CourseInstance',
          name: 'Post Graduate Program (PGCP) - 5-month track with placement support',
          courseMode: ['Onsite', 'Blended'],
          courseWorkload: 'P5M',
          location: {
            '@type': 'Place',
            name: 'BlueTick Academy - Indiranagar, Bangalore',
          },
        },
        {
          '@type': 'CourseInstance',
          name: 'Elevate - 7-month advanced track with placement support',
          courseMode: 'Onsite',
          courseWorkload: 'P7M',
          location: {
            '@type': 'Place',
            name: 'BlueTick Academy - Indiranagar, Bangalore',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Digital Marketing Course in Bangalore with Placement',
          item: CANONICAL,
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

export default function PlacementBangalorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Header />
      <main id="main">
        {/* ── Front-loaded job/placement proof ─────────────────────────────── */}
        <HeroPlacement />               {/* swap: H1 carries the exact head term */}
        <TrustStrip />                  {/* reuse: instant proof                  */}
        <PlacementNumbersPlacement />   {/* swap: the outcome, quantified         */}
        <NamedPlacements merged />      {/* reuse: named, verifiable placements   */}

        {/* CTA Banner #1 — placements variant: directly follows NamedPlacements
            so the two share one continuous gradient, and "These names could be
            yours" lands right under the named alumni it refers to. */}
        <CtaBanner
          id="cta-banner-1"
          variant="placements"
          title={<>These names could be <em>yours</em> in 5 months.</>}
          sub="Few seats left for the upcoming batch."
          placed={<>303 placed alumni <span style={{ color: '#0B1422' }}>across our last 4 batches</span></>}
          meta={<><strong>7 seats left</strong> &middot; No spam &middot; Reply within 15 mins</>}
        >
          <MiniForm id="cta-banner-1-form" formPosition="cta-banner-1" theme="light" withArrow ariaLabel="Apply for the next batch" />
        </CtaBanner>

        <Salary keyword="Digital marketing courses in Bangalore" />{/* heading: "...with 100% placement" */}

        {/* ── The hiring network + curriculum that backs the placement claim.
            Salary / Tracks / Modules take placement-keyword props so their
            headings carry this page's search terms (the homepage renders the
            defaults — those shared components are never edited). ── */}
        <Recruiters />                  {/* reuse: 500+ Bangalore companies       */}
        <MiniFormBand />
        <Tracks keyword="digital marketing courses in Bangalore with placement" />
        <AiToolStack />                 {/* reuse: AI-native (clears the resume filter) */}

        {/* Objection-handling moved up: the honest comparison sits right before
            the curriculum deep-dive. */}
        <ComparisonPlacement />         {/* swap: placement-first vs certificate-only */}

        <Modules headingKeyword="digital marketing course in Bangalore with placement" />
        <PlacementTimeline />           {/* reuse: the 5-month learn→placed journey */}

        {/* CTA Banner #2 — sunset, embedded mini-form */}
        <CtaBanner
          id="cta-banner-2"
          variant="sunset"
          eyebrow={<><IconCheckCircle />Curriculum that gets you hired</>}
          title={<>Built for the way companies actually hire in <em>2026</em>.</>}
          sub="25+ modules. 60+ tools. 3 shipped portfolio projects. One direction: your dream job."
          meta={<><strong>WhatsApp the full syllabus</strong> &middot; No call required</>}
        >
          <MiniForm id="cta-banner-2-form" formPosition="cta-banner-2" theme="dark" withArrow ariaLabel="WhatsApp the full syllabus" />
        </CtaBanner>

        {/* ── Outcome + practitioner proof ─────────────────────────────────── */}
        <Projects />                    {/* reuse: 3 live projects = the portfolio */}
        <Certifications />              {/* reuse: 12 certifications              */}
        <Trainers />                    {/* reuse: practitioners who hire & refer */}
        <InterviewReadiness />          {/* reuse: the interview-prep engine      */}
        <ResumeTransformation />        {/* reuse: the Day-91 resume              */}

        {/* CTA Banner #3 — cosmic, button-only (points at the placement hero form) */}
        <CtaBanner
          id="cta-banner-3"
          variant="cosmic"
          eyebrow={<><IconStar />Your Day-91 resume</>}
          title={<>In 120 days, your resume looks <em>completely different.</em></>}
          sub="3 live projects. 12 certifications. Recruiter intros. A portfolio that walks into interviews with you."
          meta={<><strong>100% placement support</strong></>}
        >
          <CtaButton href="#placement-hero-form">START YOUR DM CAREER</CtaButton>
        </CtaBanner>

        <DayInLife />                   {/* reuse: what the job actually looks like */}
        <CareerSwitcher />              {/* reuse: freshers & switchers get placed  */}

        {/* ── Objection-handling: FAQ (comparison moved up, before curriculum) ─ */}
        <FaqsPlacement />               {/* swap: placement objections + FAQPage schema */}

        {/* CTA Banner #4 — mintelectric, scarcity sub + embedded mini-form */}
        <CtaBanner
          id="cta-banner-4"
          variant="mintelectric"
          eyebrow={<><IconClock />Decision time</>}
          title={<>Compared. Convinced. <em>Now is the move.</em></>}
          subVariant="scarcity"
          sub={<>Bangalore&rsquo;s next batch starts <ScarcityHl>in 12 days</ScarcityHl>. <ScarcityHl>9 seats left</ScarcityHl>.</>}
          meta={<><strong>15-min call</strong> &middot; Zero pressure &middot; Get the full picture</>}
        >
          <MiniForm id="cta-banner-4-form" formPosition="cta-banner-4" theme="dark" withArrow ariaLabel="Apply for the next batch - decision-time form" />
        </CtaBanner>

        <MediaAwards />                 {/* reuse: press + awards (E-E-A-T)       */}

        {/* ── Locked to the bottom: the ~2,000-word guide, then the final CTA ─ */}
        <SeoGuidePlacement />           {/* swap: ~2,000-word placement guide     */}
        <PlacementPageCta />            {/* swap: final job-framed CTA form       */}
      </main>

      <Footer />
      <StickyBar label="Apply for Next Batch" targetHref="#placement-hero-form" />
      <ScrollTopButton />
      <AutoScrollLoop />
    </>
  );
}
