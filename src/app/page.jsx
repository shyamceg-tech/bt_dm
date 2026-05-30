/**
 * Home page — BlueTick 2026 Refresh
 *
 * RSC. Wrapped only by the lean root layout. Section components are server
 * components except where genuine interactivity is needed (forms, drawer,
 * filter — all client islands).
 *
 * Section roadmap (master prompt §4.2):
 *   [2B]   <Header />                            ✓ live
 *   [2C]   <Hero />                              ✓ live
 *   [2D]   <TrustStrip />                        ✓ live
 *   [2D]   <Salary />                            ✓ live
 *   [2D]   <NamedPlacements />                   ✓ live
 *   [2E]   <CtaBanner #1 aurora />               ✓ live
 *   [2E]   <Tracks />                            ✓ live
 *   [2E]   <MiniFormBand />                      ✓ live
 *   [2F-1] <Recruiters />                        ✓ live
 *   [2F-1] <AiToolStack />                       ✓ live
 *   [2F-2] <Modules />                           ✓ live
 *   [2I]   <CtaBanner #2 sunset />               ✓ live (this batch)
 *   [2G]   <Projects />                          ✓ live
 *   [2G]   <Certifications />                    ✓ live
 *   [2G]   <Trainers />                          ✓ live
 *   [2H]   <PlacementTimeline />                 ✓ live
 *   [2H]   <InterviewReadiness />                ✓ live
 *   [2H]   <ResumeTransformation />              ✓ live
 *   [2I]   <CtaBanner #3 cosmic />               ✓ live (this batch)
 *   [2I]   <DayInLife />                         ✓ live (this batch)
 *   [2I]   <CareerSwitcher />                    ✓ live (this batch)
 *   [2I]   <Comparison />                        ✓ live (this batch)
 *   [2I]   <CtaBanner #4 mintelectric />         ✓ live (this batch)
 *   [2J]   <Testimonials />, <Faqs />, <Media />, <FinalCta />, <Footer />
 *
 * Target: TBT ≈ 0ms.
 */

import Header from '@/components/2026/Header';
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
import Faqs from '@/components/2026/Faqs';
import MediaAwards from '@/components/2026/MediaAwards';
import FinalCta from '@/components/2026/FinalCta';
import Footer from '@/components/2026/Footer';
import StickyBar from '@/components/2026/StickyBar';

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

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Salary />
        <NamedPlacements />

        {/* CTA Banner #1 — aurora, embedded mini-form (frosted glass) */}
        <CtaBanner
          id="cta-banner-1"
          variant="aurora"
          title={
            <>
              These names could be <em>yours</em> in 5 months.
            </>
          }
          sub="1 next batch. Limited seats."
          placed="312 placed alumni in last 4 months"
          meta={
            <>
              <strong>7 seats left</strong> &middot; No spam &middot; Reply within 12 mins
            </>
          }
        >
          <MiniForm
            id="cta-banner-1-form"
            formPosition="cta-banner-1"
            theme="dark"
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
            ariaLabel="Apply for the next batch — decision-time form"
          />
        </CtaBanner>

        <MediaAwards />
        <FinalCta />
      </main>

      <Footer />
      <StickyBar />
    </>
  );
}
