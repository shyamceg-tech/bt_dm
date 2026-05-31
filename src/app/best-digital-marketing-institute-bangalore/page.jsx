/**
 * /best-digital-marketing-institute-bangalore
 *
 * Intent-matched landing page for the "Best / Top digital marketing institute"
 * Google Ads cluster. All content sections are purpose-built for this intent —
 * zero reuse from the main homepage to avoid duplicate content.
 *
 * Shared only: Header, Footer, StickyBar (navigation shells, not content).
 */

import Header from '@/components/2026/Header';
import HeroBest from '@/components/2026/best/HeroBest';
import PlacementNumbers from '@/components/2026/best/PlacementNumbers';
import WhyNo1 from '@/components/2026/best/WhyNo1';
import AlumniProof from '@/components/2026/best/AlumniProof';
import AiEdge from '@/components/2026/best/AiEdge';
import TrainerCredentials from '@/components/2026/best/TrainerCredentials';
import ComparisonBest from '@/components/2026/best/ComparisonBest';
import FaqsBest from '@/components/2026/best/FaqsBest';
import BestPageCta from '@/components/2026/best/BestPageCta';
import Footer from '@/components/2026/Footer';
import StickyBar from '@/components/2026/StickyBar';
import { CAMPUS } from '@/data/near-me.config';
import { META } from '@/data/best-bangalore.config';

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

const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'BlueTick Academy',
  url: META.canonical,
  description: META.description,
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
  areaServed: 'Bangalore',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1280',
    bestRating: '5',
    worstRating: '1',
  },
};

export default function BestBangalorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />
      <Header />
      <main id="main">
        <HeroBest />
        <PlacementNumbers />
        <WhyNo1 />
        <AlumniProof />
        <AiEdge />
        <TrainerCredentials />
        <ComparisonBest />
        <FaqsBest />
        <BestPageCta />
      </main>
      <Footer />
      <StickyBar label="Talk to a counselor" targetHref="#best-hero-form" />
    </>
  );
}
