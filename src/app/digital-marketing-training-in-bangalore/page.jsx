/**
 * /digital-marketing-training-in-bangalore
 *
 * Intent-matched landing page for the "Digital Marketing Training / Institute"
 * Google Ads ad group. Top search terms (by volume) targeted here:
 *   [digital marketing training in bangalore]   ← head term (#1)
 *   [digital marketing training]                ← head term (#2)
 *   [digital marketing training centre near me]
 *   [digital marketing training with placement]
 *   [digital marketing training institute near me]
 *   [digital marketing training institute in bangalore]
 * The first two terms carry ~90% of the volume, so the headings lead with them.
 *
 * EXACT REPLICA of the homepage (src/app/page.jsx): same Header / SectionNav /
 * sections / CTA banners / Footer, in the same order, with the same designs and
 * background colours. The ONLY differences are the SEO/GEO/AEO text swaps:
 *   - page <title>, meta description, canonical, OG/Twitter (training META)
 *   - JSON-LD @graph Course node + breadcrumb (training intent)
 *   - the H1 (Hero `eyebrow` prop) and the keyword in the Salary / Tracks /
 *     Modules / Comparison headings (all prop-driven — homepage untouched)
 *   - the FAQ accordion (<FaqsTraining />) and the ~2,000-word guide
 *     (<TrainingGuide />), both exact design clones of <Faqs /> / <SeoGuide />
 *     with training-intent copy.
 * Everything else is the shared homepage component, reused verbatim.
 * All form posts route to /api/bigin via the shared Hero/MiniForm.
 */

import Header from '@/components/2026/Header';
import SectionNav from '@/components/2026/SectionNav';
import Hero from '@/components/2026/Hero';
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
import FaqsTraining from '@/components/2026/training/FaqsTraining';
import MediaAwards from '@/components/2026/MediaAwards';
import TrainingGuide from '@/components/2026/training/TrainingGuide';
import Footer from '@/components/2026/Footer';
import StickyBar from '@/components/2026/StickyBar';
import ScrollTopButton from '@/components/2026/ScrollTopButton';
import AutoScrollLoop from '@/components/2026/AutoScrollLoop';
import { CAMPUS } from '@/data/near-me.config';
import { META } from '@/data/training-bangalore.config';
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
        url: '/img/og-training.png',
        width: 1200,
        height: 630,
        alt: 'BlueTick Academy - Digital Marketing Training in Bangalore with 100% placement record',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: META.title,
    description: META.description,
    images: ['/img/og-training.png'],
  },
};

const SITE = 'https://bluetickacademy.com';

/* Structured data (@graph) for AEO/GEO + rich results — mirrors the homepage /
   online template so the entity graph is consistent sitewide. The org uses the
   GLOBAL `${SITE}/#organization` @id (not a page-scoped node) so Google merges
   this page's signals into the one BlueTick entity rather than fragmenting it.
   The canonical FAQPage entity is emitted separately inside <FaqsTraining />,
   co-located with its copy. The Course carries Onsite + Blended CourseInstances
   to match the classroom + hybrid training format honestly; no empty-price
   Offer (an Offer without a price is invalid structured data). */
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
        "BlueTick Academy is Bangalore's placement-first, AI-powered digital marketing training institute. Practitioner trainers, an AI-native 2026 syllabus, hands-on training on live campaigns, a 100% placement record and 10,000+ alumni across MNCs and startups.",
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
      '@id': `${META.canonical}#course`,
      name: 'Digital Marketing Training in Bangalore',
      description:
        'Hands-on, placement-focused digital marketing training in Bangalore. Live campaigns on real budgets, 60+ tools, an AI-native 2026 syllabus, 3 portfolio projects, 12 certifications and a 100% placement record. Classroom batches at the Indiranagar campus plus weekend and hybrid options.',
      provider: { '@id': `${SITE}/#organization` },
      url: META.canonical,
      inLanguage: 'en-IN',
      educationalLevel: 'Beginner to Advanced',
      educationalCredentialAwarded: 'Professional Certification in Digital Marketing',
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
          name: 'Professional Certification (PCP) — 3-month classroom track',
          courseMode: 'Onsite',
          courseWorkload: 'P3M',
          location: {
            '@type': 'Place',
            name: 'BlueTick Academy — Indiranagar, Bangalore',
          },
        },
        {
          '@type': 'CourseInstance',
          name: 'Post Graduate Program (PGCP) — 5-month classroom + hybrid track',
          courseMode: ['Onsite', 'Blended'],
          courseWorkload: 'P5M',
          location: {
            '@type': 'Place',
            name: 'BlueTick Academy — Indiranagar, Bangalore',
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
          name: 'Digital Marketing Training in Bangalore',
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

export default function TrainingBangalorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Header />
      <SectionNav />
      <main id="main">
        {/* H1 head term swapped for training intent; homepage hero design verbatim. */}
        <Hero eyebrow="#1 Digital Marketing Training in Bangalore — placement-first, ai-native." />
        <TrustStrip />
        {/* Heading keyword → "Digital Marketing Training" (head term #2). */}
        <Salary keyword="Digital Marketing Training" />
        <NamedPlacements merged />

        {/* CTA Banner #1 — "placements" variant: shares NamedPlacements' light
            sky-blue gradient so the two read as one continuous section. */}
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

        {/* Heading keyword → "digital marketing training" (head term #2). */}
        <Tracks keyword="digital marketing training" />
        <MiniFormBand />

        <Recruiters />
        <AiToolStack />
        {/* Curriculum heading keyword → "digital marketing training in Bangalore" (#1). */}
        <Modules headingKeyword="digital marketing training in Bangalore" />

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
        {/* Heading keyword → "digital marketing training institute in Bangalore" (#6),
            the natural fit for an institute-vs-options comparison. */}
        <Comparison keyword="digital marketing training institute in Bangalore" />

        <FaqsTraining />

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

        {/* Long-form SEO/AEO/GEO content (~2,000 words) — training keyword cluster.
            Exact design clone of the homepage <SeoGuide /> accordion. */}
        <TrainingGuide />
      </main>

      <Footer />
      <StickyBar />
      <ScrollTopButton />
      {/* Mobile-only: gently auto-scrolls the alumni & projects carousels. */}
      <AutoScrollLoop />
    </>
  );
}
