/**
 * /digital-marketing-course-near-me
 *
 * Intent-matched landing page for the "digital marketing course near me" Google
 * Ads cluster. Goal: lift Quality Score from 3–5 to 7+ by mapping the page 1:1
 * to near-me search intent (location proof first, batch visibility, trust
 * signals, then conversion).
 *
 * Composition rules (same as src/app/page.jsx and the online / fees / training
 * landing pages): uses the lean root layout (Header/Footer rendered inline here,
 * NOT the (default) route group). The page now carries EVERY homepage content
 * section — reused verbatim, in homepage order — so it has full home parity for
 * depth, internal-section completeness and keyword coverage. Only the hero, the
 * four location/visit sections (CampusTour, LocationProof, BatchSchedule,
 * CampusVisit), the FAQs and the long-form guide are near-me-specific; those
 * location sections sit high on the page because proximity IS the search filter
 * for this intent (see the strategic spine in near-me.config.js).
 *
 * All form posts route to /api/bigin via the shared submitToBigin helper.
 * StickyBar overridden to point at the near-me hero form.
 */

import Header from '@/components/2026/Header';
import SectionNav from '@/components/2026/SectionNav';
import HeroNearMe from '@/components/2026/near-me/HeroNearMe';
import TrustStrip from '@/components/2026/TrustStrip';
import CampusTour from '@/components/2026/near-me/CampusTour';
import LocationProof from '@/components/2026/near-me/LocationProof';
import Salary from '@/components/2026/Salary';
import NamedPlacements from '@/components/2026/NamedPlacements';
import CtaBanner, { CtaButton, ScarcityHl } from '@/components/2026/CtaBanner';
import MiniForm from '@/components/2026/MiniForm';
import BatchSchedule from '@/components/2026/near-me/BatchSchedule';
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
import Testimonials from '@/components/2026/Testimonials';
import CampusVisit from '@/components/2026/near-me/CampusVisit';
import FaqsNearMe from '@/components/2026/near-me/FaqsNearMe';
import MediaAwards from '@/components/2026/MediaAwards';
import SeoGuideNearMe from '@/components/2026/near-me/SeoGuideNearMe';
import Footer from '@/components/2026/Footer';
import StickyBar from '@/components/2026/StickyBar';
import ScrollTopButton from '@/components/2026/ScrollTopButton';
import AutoScrollLoop from '@/components/2026/AutoScrollLoop';
import { CAMPUS, META } from '@/data/near-me.config';
import { SAME_AS } from '@/data/social';

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
    images: [
      {
        url: '/img/og-near-me.png',
        width: 1200,
        height: 630,
        alt: 'BlueTick Academy - in-person Digital Marketing Course near you in Indiranagar, Bangalore, 1 minute from the Metro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: META.title,
    description: META.description,
    images: ['/img/og-near-me.png'],
  },
};

const SITE = 'https://bluetickacademy.com';

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: `${CAMPUS.addressLine1}, ${CAMPUS.addressLine2}`,
  addressLocality: CAMPUS.city,
  addressRegion: CAMPUS.state,
  postalCode: CAMPUS.pincode,
  addressCountry: CAMPUS.country,
};

/* Structured data (@graph) for AEO/GEO + rich results. Unified graph aligned to
   the homepage / online / training pattern: a single global ${SITE}/#organization
   entity (so Google merges this page's strong LOCAL signals — address, geo, map,
   areaServed across east-Bangalore localities — into the one BlueTick entity,
   rather than fragmenting it under a page-scoped @id), plus WebSite, a local
   Course (onsite primary + live-online secondary CourseInstance) and a
   BreadcrumbList. The canonical FAQPage entity is emitted separately inside
   <FaqsNearMe />, co-located with its copy. */
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
      image: `${SITE}/img/near-me/digital-marketing-classroom-indiranagar.webp`,
      description:
        "BlueTick Academy is Bangalore's placement-first, AI-powered digital marketing institute. Its Indiranagar centre runs in-person digital marketing classes a one-minute walk from Indiranagar Metro, with practitioner trainers, an AI-native 2026 curriculum, a 100% placement record and 10,000+ alumni across MNCs and startups.",
      email: CAMPUS.email,
      telephone: CAMPUS.phone,
      priceRange: '₹₹',
      address: ADDRESS,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: CAMPUS.geo.lat,
        longitude: CAMPUS.geo.lng,
      },
      hasMap: CAMPUS.mapsLink,
      areaServed: [
        { '@type': 'Place', name: 'Indiranagar' },
        { '@type': 'Place', name: 'Koramangala' },
        { '@type': 'Place', name: 'HSR Layout' },
        { '@type': 'Place', name: 'Domlur' },
        { '@type': 'Place', name: 'CV Raman Nagar' },
        { '@type': 'Place', name: 'Old Airport Road' },
        { '@type': 'Place', name: 'Whitefield' },
        { '@type': 'City', name: 'Bangalore' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
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
      '@id': `${SITE}/#website`,
      url: `${SITE}/`,
      name: 'BlueTick Academy',
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE}/#organization` },
    },
    {
      '@type': 'Course',
      '@id': `${META.canonical}#course`,
      name: 'Digital Marketing Course Near You in Indiranagar, Bangalore',
      description:
        'A placement-first, in-person digital marketing course at BlueTick Academy, Indiranagar — a one-minute walk from Indiranagar Metro. Covers SEO, Google Ads, social media, performance marketing, analytics and generative-AI tools, with live projects, certifications and dedicated placement support. Live online batches are available for the days you cannot come in.',
      provider: { '@id': `${SITE}/#organization` },
      url: META.canonical,
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
          name: 'In-person classroom — Indiranagar, Bangalore',
          courseMode: 'Onsite',
          location: { '@type': 'Place', name: CAMPUS.name, address: ADDRESS },
          courseSchedule: {
            '@type': 'Schedule',
            repeatFrequency: 'Weekly',
            byDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          },
        },
        {
          '@type': 'CourseInstance',
          name: 'Live online — instructor-led, for the days you cannot come in',
          courseMode: 'Online',
          courseSchedule: {
            '@type': 'Schedule',
            repeatFrequency: 'Weekly',
            byDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${META.canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Digital Marketing Course Near Me',
          item: META.canonical,
        },
      ],
    },
  ],
};

/* Inline SVG icons for the CTA banner eyebrows. Single-use, ~5 lines each.
   Copied verbatim from the homepage so the four CTA banners render identically. */
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

function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function NearMePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Header />
      <SectionNav />
      <main id="main">
        <HeroNearMe />
        <TrustStrip />

        {/* Near-me intent is location-first: prove the place is real before
            anything else. The campus gallery + map/metro proof sit high on the
            page because proximity IS the search filter for this query. */}
        <CampusTour />
        <LocationProof />

        {/* Heading keyword swapped to near-me intent (the homepage renders the
            default "...in Bangalore" - this prop only affects this page). */}
        <Salary keyword="Digital Marketing Course Near You" />
        <NamedPlacements merged />

        {/* CTA Banner #1 — "placements" variant: shares NamedPlacements' light
            sky-blue gradient so the two read as one continuous section.
            Scarcity kept honest (capped classroom, not a fabricated countdown)
            per the near-me strategic spine. */}
        <CtaBanner
          id="cta-banner-1"
          variant="placements"
          title={<>These names could be <em>yours</em> in 5 months.</>}
          sub="These could be your classmates in the next batch near you."
          placed={<>312 placed alumni <span style={{ color: '#0B1422' }}>in last 4 months</span></>}
          meta={<><strong>Capped classroom batches</strong> &middot; No spam &middot; Reply within 15 mins</>}
        >
          <MiniForm id="cta-banner-1-form" formPosition="cta-banner-1" theme="light" withArrow ariaLabel="Apply for the next batch" />
        </CtaBanner>

        {/* Course tracks first, then the timetable that answers "when can I
            attend a class near me" - both before the curriculum deep-dive. */}
        <Tracks keyword="digital marketing courses near you" />

        <BatchSchedule />

        <MiniFormBand />

        <Recruiters />
        <AiToolStack />
        <Modules headingLead="our" headingKeyword="offline digital marketing course in Bangalore" />

        {/* CTA Banner #2 — sunset, embedded mini-form. Mid-curriculum nudge. */}
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

        <Projects />
        <Certifications />
        <Trainers />

        <PlacementTimeline />
        <InterviewReadiness />
        <ResumeTransformation />

        {/* CTA Banner #3 — cosmic, button-only (no form). ~60% scroll.
            Button targets the near-me hero form. */}
        <CtaBanner
          id="cta-banner-3"
          variant="cosmic"
          eyebrow={<><IconStar />Your Day-91 resume</>}
          title={<>In 120 days, your resume looks <em>completely different.</em></>}
          sub="3 live projects. 12 certifications. Recruiter intros. A portfolio that walks into interviews with you."
          meta={<><strong>100% placement record</strong></>}
        >
          <CtaButton href="#near-me-hero-form">START YOUR DM CAREER</CtaButton>
        </CtaBanner>

        <DayInLife />
        <CareerSwitcher />
        <Comparison keyword="digital marketing institute near you" />

        <Testimonials />

        {/* Near-me extra: "what your free campus visit looks like" — the small,
            local first ask (visit/demo, not "enrol now") this intent converts on,
            placed right before the FAQs and the closer. */}
        <CampusVisit />

        <FaqsNearMe />

        {/* CTA Banner #4 — mintelectric, decision-time. Scarcity styling kept,
            copy honest for near-me: a real monthly batch + capped classroom,
            no fabricated "N seats left in 12 days" countdown. */}
        <CtaBanner
          id="cta-banner-4"
          variant="mintelectric"
          eyebrow={<><IconPin />Decision time</>}
          title={<>Seen enough online? <em>Experience offline learning.</em></>}
          subVariant="scarcity"
          sub={<>A <ScarcityHl>new batch begins every month</ScarcityHl> at the Indiranagar centre, and <ScarcityHl>classroom seats are capped</ScarcityHl>.</>}
          meta={<><strong>15-min call</strong> &middot; Zero pressure &middot; Get the full picture</>}
        >
          <MiniForm id="cta-banner-4-form" formPosition="cta-banner-4" theme="dark" withArrow ariaLabel="Apply for the next batch - decision-time form" />
        </CtaBanner>

        <MediaAwards />

        {/* Long-form SEO/AEO/GEO content (~2,000 words) — near-me / classes-near-me
            / institute / training / Indiranagar keyword cluster. */}
        <SeoGuideNearMe />
      </main>
      <Footer />
      <StickyBar targetHref="#near-me-hero-form" />
      <ScrollTopButton />
      {/* Mobile-only: gently auto-scrolls the alumni & projects carousels. */}
      <AutoScrollLoop />
    </>
  );
}
