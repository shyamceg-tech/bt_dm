/**
 * /best-digital-marketing-course-in-bangalore
 *
 * Intent-matched landing page for the "Best / Top digital marketing course"
 * Google Ads cluster (head term: "best digital marketing course in bangalore";
 * highest converter: "top 10 ... institutes in bangalore with fees").
 *
 * Architecture (per approved 80/20 plan):
 *   • ~80% sections are the SAME homepage components, reused verbatim.
 *   • ~20–30% are content-swapped VARIANTS that import the SAME CSS module as
 *     their homepage twin, so design tokens (layout, fonts, colors) are
 *     pixel-identical — only the copy changes. Homepage code is never touched.
 *   • 2 NEW sections (BestRanking, BestForYou) carry their own design to
 *     establish page uniqueness for Google Ads landing-page relevance / QS.
 *
 * Section order is reordered vs the homepage to serve SHORTLISTING intent:
 * ranking proof → named placements → the judging scorecard → comparison are
 * front-loaded; the AI wedge sits mid-page; FAQ + the 2000-word article stay
 * pinned to the bottom (locked requirement).
 *
 * BUILD SEQUENCE: this file (item 1) references components delivered in items
 * 2, 3 and 5. It will not compile until those land. Metadata + JSON-LD are
 * intentionally interim here — item 4 (SEO/AEO/GEO) finalizes them last, after
 * the new section headings exist as real H2s to mirror in schema.
 */

import Header from '@/components/2026/Header';
import SectionNav from '@/components/2026/SectionNav';
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
import MediaAwards from '@/components/2026/MediaAwards';
import Footer from '@/components/2026/Footer';
import StickyBar from '@/components/2026/StickyBar';
import ScrollTopButton from '@/components/2026/ScrollTopButton';
import AutoScrollLoop from '@/components/2026/AutoScrollLoop';

/* ─── Content-swapped VARIANTS (item 3 + item 5) — same CSS module, new copy ─ */
import BestHero from '@/components/2026/best-course/BestHero';
import BestRanking from '@/components/2026/best-course/BestRanking';       // NEW section
import BestForYou from '@/components/2026/best-course/BestForYou';         // NEW section (goal-fit helper)
import BestComparison from '@/components/2026/best-course/BestComparison'; // reuses Comparison.module.css
import FaqsBest from '@/components/2026/best-course/FaqsBest';             // reuses Faqs.module.css
import SeoGuideBest from '@/components/2026/best-course/SeoGuideBest';     // reuses SeoGuide.module.css
import { CAMPUS } from '@/data/near-me.config';
import { SAME_AS } from '@/data/social';
import { META } from '@/data/best-course.config';
import pageStyles from './page.module.css';

/* ───────────────────────────────────────────────────────────────────────────
   Route metadata (item 4 — final). Title/description/OG/Twitter come from the
   META block in best-course.config.js so copy stays editable in one place.
   ─────────────────────────────────────────────────────────────────────────── */
const SITE = 'https://bluetickacademy.com';
const PATH = '/best-digital-marketing-course-in-bangalore';

const OG_IMAGE = {
  url: '/img/og-best.png', // best/top-specific share card (scripts/generate-og-best.mjs)
  width: 1200,
  height: 630,
  alt: 'BlueTick Academy — Best Digital Marketing Course in Bangalore with 100% placement record',
};

export const metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: PATH },
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
    images: ['/img/og-best.png'],
  },
};

/* ───────────────────────────────────────────────────────────────────────────
   Structured data (@graph) for AEO/GEO + rich results. Server-rendered, no
   client JS. EducationalOrganization/LocalBusiness reuses the homepage NAP
   (CAMPUS) and social profiles (SAME_AS) so the local entity stays consistent.
   The Course is best/top-framed; the ItemList marks up the on-page "how to
   judge the best institute" rubric — the honest ranking signal for this cluster
   (no fabricated "top 10" list). The FAQPage entity is co-located in <FaqsBest/>.
   ─────────────────────────────────────────────────────────────────────────── */
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': `${SITE}/#organization`,
      name: 'BlueTick Academy',
      alternateName: 'BlueTick Digital Marketing Academy',
      url: `${SITE}${PATH}`,
      logo: { '@type': 'ImageObject', url: `${SITE}/img/logo.svg` },
      image: `${SITE}/img/og-home.png`,
      description:
        "BlueTick Academy is Bangalore's placement-first, AI-powered digital marketing institute — ranked #1 by placement outcome. Practitioner trainers, an AI-native 2026 curriculum, a 100% placement record and 10,000+ alumni across MNCs and startups.",
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
      '@id': `${SITE}${PATH}#course`,
      name: 'Best Digital Marketing Course in Bangalore',
      description: META.description,
      provider: { '@id': `${SITE}/#organization` },
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
          name: 'Professional Certification (PCP) — 3-month track',
          courseMode: 'Onsite',
          courseWorkload: 'P3M',
          location: { '@type': 'Place', name: 'BlueTick Academy — Indiranagar, Bangalore' },
        },
        {
          '@type': 'CourseInstance',
          name: 'Post Graduate Program (PGCP) — 5-month track',
          courseMode: ['Onsite', 'Blended'],
          courseWorkload: 'P5M',
          location: { '@type': 'Place', name: 'BlueTick Academy — Indiranagar, Bangalore' },
        },
        {
          '@type': 'CourseInstance',
          name: 'Elevate — 7-month advanced track',
          courseMode: 'Onsite',
          courseWorkload: 'P7M',
          location: { '@type': 'Place', name: 'BlueTick Academy — Indiranagar, Bangalore' },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}${PATH}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Best Digital Marketing Course in Bangalore',
          item: `${SITE}${PATH}`,
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

export default function BestCoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Header />
      <SectionNav />
      <main id="main" className={pageStyles.tight}>
        {/* ── Front-loaded shortlisting intent ─────────────────────────────── */}
        <BestHero />            {/* swap: H1 carries exact head term once       */}
        <TrustStrip />          {/* reuse: instant proof                         */}
        <BestRanking />         {/* NEW: "why we rank #1" — validates the claim  */}
        <NamedPlacements merged />{/* reuse: named, verifiable proof             */}

        {/* CTA Banner #1 — placements variant: directly follows NamedPlacements
            so the two share one continuous gradient, and "These names could be
            yours" lands right under the named alumni it refers to. */}
        <CtaBanner
          id="cta-banner-1"
          variant="placements"
          title={<>These names could be <em>yours</em> in 5 months.</>}
          sub="Few seats left for the upcoming batch."
          placed={<>312 placed alumni <span style={{ color: '#0B1422' }}>in last 4 months</span></>}
          meta={<><strong>7 seats left</strong> &middot; No spam &middot; Reply within 15 mins</>}
        >
          <MiniForm id="cta-banner-1-form" formPosition="cta-banner-1" theme="light" withArrow ariaLabel="Apply for the next batch" />
        </CtaBanner>

        <Salary keyword="Best Digital Marketing Course in Bangalore" />{/* swap: heading keyword */}

        <BestForYou />          {/* NEW: goal-based "is it right for you?" fit helper */}
        <BestComparison />      {/* swap: reframed vs the typical "Top 10"       */}

        {/* Course tracks pulled ABOVE the recruiters / "why 500+ Bangalore"
            block (per requirement) — they decide on a track before the why-hire
            proof. Heading keyword swapped to this page's intent. */}
        <Tracks keyword="best digital marketing courses in Bangalore" />
        <MiniFormBand />

        {/* ── The wedge: future-proof / AI-native (serves "best for future") ── */}
        <Recruiters />
        <AiToolStack />
        <Modules headingLead="the" headingKeyword="best digital marketing training institute in Bangalore" />

        {/* CTA Banner #2 — sunset: "Curriculum that gets you hired" sits directly
            below the curriculum modules (per requirement). */}
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

        {/* Projects — the "3 live client projects" portfolio: direct, named proof
            that reinforces the best/#1-by-outcome thesis. */}
        <Projects />

        {/* ── Outcome + practitioner proof ─────────────────────────────────── */}
        <Certifications />
        <Trainers />
        <PlacementTimeline />
        <InterviewReadiness />
        <ResumeTransformation />

        {/* CTA Banner #3 — cosmic, button-only */}
        <CtaBanner
          id="cta-banner-3"
          variant="cosmic"
          eyebrow={<><IconStar />Your Day-91 resume</>}
          title={<>In 120 days, your resume looks <em>completely different.</em></>}
          sub="3 live projects. 12 certifications. Recruiter intros. A portfolio that walks into interviews with you."
          meta={<><strong>100% placement record</strong></>}
        >
          <CtaButton href="#hero-form">START YOUR DM CAREER</CtaButton>
        </CtaBanner>

        <DayInLife />
        <CareerSwitcher />
        <MediaAwards />

        {/* CTA Banner #4 — mintelectric, scarcity sub (this title already nods
            to the comparison/shortlisting mindset — kept verbatim). */}
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

        {/* ── Locked to the bottom: FAQ then the 2000-word article ─────────── */}
        <FaqsBest />            {/* swap: best/top objection FAQs + FAQPage (item 4) */}
        <SeoGuideBest />        {/* swap: ~2000-word "how to choose the best" guide  */}
      </main>

      <Footer />
      <StickyBar />
      <ScrollTopButton />
      <AutoScrollLoop />
    </>
  );
}
