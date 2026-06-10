/**
 * /digital-marketing-course-online
 *
 * Intent-matched landing page for the "digital marketing course online" Google
 * Ads cluster. Goal: lift Quality Score by mapping the page 1:1 to online /
 * live-class search intent (resolve the format constraint first, then drive the
 * job outcome), so the ad keyword, the H1 and the URL slug all align on
 * "...online".
 *
 * Composition rules (same as src/app/page.jsx and the near-me / best landing
 * pages): uses the lean root layout (Header/Footer rendered inline here, NOT
 * the (default) route group). ~80% of the page reuses the existing homepage
 * section components unchanged; only the hero, one new section
 * (LiveNotRecorded), the FAQs and the long-form guide are online-specific.
 * All form posts route to /api/bigin via the shared submitToBigin helper.
 */

import Header from '@/components/2026/Header';
import SectionNav from '@/components/2026/SectionNav';
import HeroOnline from '@/components/2026/online/HeroOnline';
import TrustStrip from '@/components/2026/TrustStrip';
import Salary from '@/components/2026/Salary';
import NamedPlacements from '@/components/2026/NamedPlacements';
import CtaBanner, { CtaButton, ScarcityHl } from '@/components/2026/CtaBanner';
import MiniForm from '@/components/2026/MiniForm';
import LiveNotRecorded from '@/components/2026/online/LiveNotRecorded';
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
import FaqsOnline from '@/components/2026/online/FaqsOnline';
import MediaAwards from '@/components/2026/MediaAwards';
import SeoGuideOnline from '@/components/2026/hoodi/online/SeoGuideOnline';
import Footer from '@/components/2026/Footer';
import StickyBar from '@/components/2026/StickyBar';
import ScrollTopButton from '@/components/2026/ScrollTopButton';
import AutoScrollLoop from '@/components/2026/AutoScrollLoop';
import { CAMPUS } from '@/data/hoodi/near-me.config';
import { META } from '@/data/online.config';
import { SAME_AS } from '@/data/social';

export const metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
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
        url: '/img/og-online.png',
        width: 1200,
        height: 630,
        alt: 'BlueTick Academy - live online Digital Marketing Course with recordings and 100% placement support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: META.title,
    description: META.description,
    images: ['/img/og-online.png'],
  },
};

const SITE = 'https://bluetickacademy.com';

/* Structured data (@graph) for AEO/GEO + rich results. The canonical FAQPage
   entity is emitted separately inside <FaqsOnline />, co-located with its copy.
   The Course here carries Online + Blended CourseInstances to match the hybrid
   (live online + recordings) format honestly. */
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
      description:
        "BlueTick Academy is a placement-first, AI-powered digital marketing institute offering a live online digital marketing course with recordings, practitioner trainers, a 100% placement record and 10,000+ alumni across MNCs and startups.",
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
      areaServed: { '@type': 'Country', name: 'India' },
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
      '@id': `${META.canonical}#course`,
      name: 'Digital Marketing Course Online',
      description:
        'A live, instructor-led online digital marketing course with every session recorded. Covers SEO, Google Ads, social media, performance marketing, analytics and generative-AI tools, with live projects, a verifiable certificate and dedicated placement support. Join the live online batches from anywhere in India.',
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
          name: 'Professional Certification (PCP) — live online track',
          courseMode: 'Online',
          courseWorkload: 'P5M',
        },
        {
          '@type': 'CourseInstance',
          name: 'PG Program (PGCP) — live online + recordings, for working professionals',
          courseMode: ['Online', 'Blended'],
          courseWorkload: 'P6M',
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
          name: 'Digital Marketing Course Online',
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

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function OnlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Header />
      <SectionNav />
      <main id="main">
        <HeroOnline />
        <TrustStrip />
        <Salary keyword="Digital Marketing Course Online" />
        <NamedPlacements merged />

        {/* CTA Banner #1 — "placements" variant: shares NamedPlacements' light
            sky-blue gradient so the two read as one continuous section. */}
        <CtaBanner
          id="cta-banner-1"
          variant="placements"
          title={<>These names could be <em>yours</em> in 5 months.</>}
          sub="Few seats left for the upcoming online batch."
          placed={<>312 placed alumni <span style={{ color: '#0B1422' }}>in last 4 months</span></>}
          meta={<><strong>8 seats left</strong> &middot; No spam &middot; Reply within 15 mins</>}
        >
          <MiniForm id="cta-banner-1-form" formPosition="cta-banner-1" theme="light" withArrow ariaLabel="Apply for the next online batch" />
        </CtaBanner>

        {/* Course tracks first (per request), then the online objection-handler. */}
        <Tracks keyword="digital marketing courses online" />

        {/* The one online-specific new section: kills the "online = recorded
            videos I'll quit" objection, then the recordings safety-net strip. */}
        <LiveNotRecorded />

        <MiniFormBand />

        <Recruiters scope="online" />
        <AiToolStack />
        <Modules headingKeyword="digital marketing online course" />

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

        {/* CTA Banner #3 — cosmic, button-only (no form). ~60% scroll. */}
        <CtaBanner
          id="cta-banner-3"
          variant="cosmic"
          eyebrow={<><IconStar />Your Day-91 resume</>}
          title={<>In 120 days, your resume looks <em>completely different.</em></>}
          sub="3 live projects. 12 certifications. Recruiter intros. A portfolio that walks into interviews with you."
          meta={<><strong>100% placement record</strong></>}
        >
          <CtaButton href="#online-hero-form">START YOUR DM CAREER</CtaButton>
        </CtaBanner>

        <DayInLife />
        <CareerSwitcher />
        <Comparison keyword="online digital marketing course" />

        <FaqsOnline />

        {/* CTA Banner #4 — mintelectric, scarcity sub + embedded mini-form */}
        <CtaBanner
          id="cta-banner-4"
          variant="mintelectric"
          eyebrow={<><IconClock />Decision time</>}
          title={<>Compared. Convinced. <em>Now is the move.</em></>}
          subVariant="scarcity"
          sub={<>The next live online batch starts <ScarcityHl>in 12 days</ScarcityHl>. <ScarcityHl>8 seats left</ScarcityHl>.</>}
          meta={<><strong>15-min call</strong> &middot; Zero pressure &middot; Get the full picture</>}
        >
          <MiniForm id="cta-banner-4-form" formPosition="cta-banner-4" theme="dark" withArrow ariaLabel="Apply for the next batch - decision-time form" />
        </CtaBanner>

        <MediaAwards />

        {/* Long-form SEO/AEO/GEO content (~2,000 words) — online keyword cluster. */}
        <SeoGuideOnline />
      </main>
      <Footer />
      {/* Sticky CTA text matches the home page (component default
          "Apply for Next Batch"); only the scroll target is page-specific. */}
      <StickyBar targetHref="#online-hero-form" />
      <ScrollTopButton />
      {/* Mobile-only: gently auto-scrolls the alumni & projects carousels. */}
      <AutoScrollLoop />
    </>
  );
}
