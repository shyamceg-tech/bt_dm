/**
 * /digital-marketing-course-near-me
 *
 * Intent-matched landing page for "digital marketing course near me" Google
 * Ads cluster. Goal: lift Quality Score from 3–5 to 7+ by mapping the page
 * 1:1 to near-me search intent (location proof first, batch visibility,
 * trust signals, then conversion).
 *
 * Composition rules (master spec):
 *   - Uses the lean root layout (Header/Footer rendered inline here, like
 *     src/app/page.jsx). NOT in (default) route group — that uses the old
 *     pre-2026 Header/Footer.
 *   - All form posts route to /api/bigin via the shared submitToBigin helper.
 *   - StickyBar overridden to point at the near-me hero form.
 */

import Header from '@/components/2026/Header';
import HeroNearMe from '@/components/2026/near-me/HeroNearMe';
import TrustStrip from '@/components/2026/TrustStrip';
import LocationProof from '@/components/2026/near-me/LocationProof';
import NamedPlacements from '@/components/2026/NamedPlacements';
import Recruiters from '@/components/2026/Recruiters';
import BatchSchedule from '@/components/2026/near-me/BatchSchedule';
import AiToolStack from '@/components/2026/AiToolStack';
import Trainers from '@/components/2026/Trainers';
import Modules from '@/components/2026/Modules';
import Tracks from '@/components/2026/Tracks';
import Certifications from '@/components/2026/Certifications';
import Testimonials from '@/components/2026/Testimonials';
import FaqsNearMe from '@/components/2026/near-me/FaqsNearMe';
import FinalCta from '@/components/2026/FinalCta';
import Footer from '@/components/2026/Footer';
import StickyBar from '@/components/2026/StickyBar';
import { CAMPUS, META } from '@/data/near-me.config';

export const metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: META.canonical },
  openGraph: {
    title: META.title,
    description: META.description,
    url: META.canonical,
    type: 'website',
  },
};

const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: CAMPUS.name,
  url: META.canonical,
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
  openingHours: 'Mo-Sa 10:00-19:00',
  areaServed: 'Bangalore',
};

export default function NearMePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
      />
      <Header />
      <main id="main">
        <HeroNearMe />
        <TrustStrip />
        <LocationProof />
        <NamedPlacements />
        <Recruiters />
        <BatchSchedule />
        <AiToolStack />
        <Trainers />
        <Modules />
        <Tracks />
        <Certifications />
        <Testimonials />
        <FaqsNearMe />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar label="Book a campus visit" targetHref="#near-me-hero-form" />
    </>
  );
}
