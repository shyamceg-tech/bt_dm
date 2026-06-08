/**
 * best-bangalore.config.js
 * Single source of edit for the
 *   /best-digital-marketing-institute-bangalore landing page.
 *
 * Targets the "Best / Top digital marketing institute" Google Ads ad group.
 * Copy lives here so non-engineers can edit without touching component code.
 *
 * Strategic spine (locked, do not soften):
 *   1. Lead with rank validation, not aspiration.
 *   2. AI-native curriculum is the wedge.
 *   3. Comparison vs generic Top-10 is mandatory.
 *   4. Defensible specifics over adjectives.
 *   5. Urgency + concrete CTA.
 */

export const HERO = {
  eyebrow: 'RANKED #1 IN BANGALORE - BY PLACEMENT, NOT POPULARITY',
  /* H1 must contain the verbatim head term once for keyword relevance.
     Keep this string literally in DOM — Google QS reads exact match. */
  headlineLead: 'The Best Digital Marketing Institute',
  headlineCity: 'in Bangalore',
  headlineKicker: 'Where placement comes first. AI comes standard.',
  subline:
    'Nine years. <em>10,000+ alumni placed</em> at MAANG, funded startups, and top agencies. We&rsquo;re ranked #1 by the only metric that matters - whether you actually get hired.',
  proofs: [
    { num: '97%', label: 'placement record (last 4 batches verified)' },
    { num: '10,000+', label: 'alumni at MAANG, startups & agencies' },
    { num: '#1', label: 'AI-native curriculum in Bangalore' },
  ],
  primaryCta: 'Talk to a Placement Counselor',
  secondaryCta: 'See how we rank #1',
  formHeading: 'Compare us before you decide.',
  formSubHeading: '15-min call &middot; Zero pressure &middot; Honest answers',
  formCta: 'GET MY RANKING REPORT',
  formMicrotrust: 'No spam calls. We&rsquo;ll WhatsApp the comparison sheet within 15 mins.',
};

/* "Why we&rsquo;re ranked #1" — six defensible reasons. Each must have a
   number or named proof, not an adjective. */
export const WHY_REASONS = [
  {
    icon: 'trophy',
    title: '97% verified placement',
    body: 'Across our last 4 batches - 312 students, 303 placed. We publish named alumni with their LinkedIn profiles and current employers. Most &ldquo;Top 10&rdquo; institutes don&rsquo;t.',
    proof: '312 placed in last 4 batches',
  },
  {
    icon: 'spark',
    title: 'AI-native 2026 curriculum',
    body: 'Every module is rebuilt around the AI tools recruiters now expect on day one - ChatGPT, Gemini, Claude, Perplexity, Jasper, Copy.ai, Midjourney, plus 50+ more. Other &ldquo;Top 10&rdquo; institutes still teach a 2023 SEO syllabus.',
    proof: '50+ AI tools across 25 modules',
  },
  {
    icon: 'mic',
    title: 'Trainers running live campaigns',
    body: 'Not full-time career trainers. Our trainers are currently running brand budgets at agencies, startups and in-house teams - so the case study you study on Monday was their client meeting on Friday.',
    proof: '5&ndash;12 yrs avg industry experience',
  },
  {
    icon: 'cap',
    title: 'Capped batch size, real attention',
    body: 'Maximum 24 learners per batch. You get named feedback on every assignment, 1:1 mentor calls, and a placement officer who knows your name. Big-brand institutes pack 80&ndash;200 per cohort.',
    proof: '24-learner cap, 1:1 mentorship',
  },
  {
    icon: 'network',
    title: '300+ Bangalore hiring partners',
    body: 'Nine years of relationships in the Bangalore agency, startup and MAANG ecosystem. The same recruiters keep coming back for our alumni - that&rsquo;s how the 97% number stays honest.',
    proof: '300+ active hiring partners',
  },
  {
    icon: 'medal',
    title: 'Lifetime placement support',
    body: 'Most institutes drop you after the first job. We re-match alumni for promotions, agency-to-in-house switches and salary jumps for as long as you&rsquo;re in your career. No re-payment.',
    proof: 'Lifetime, no re-fee',
  },
];

/* BlueTick vs. an unnamed "Generic Top-10 Institute" comparison.
   Keep claims defensible — these will be the most-screenshotted rows. */
export const COMPARISON_ROWS = [
  {
    label: 'Placement record',
    bluetick: '97% verified, named alumni published',
    competitor: 'Vague claims, no public alumni list',
  },
  {
    label: 'Curriculum vintage',
    bluetick: 'AI-native, rebuilt for 2026 hiring',
    competitor: 'Mostly 2023 SEO/SEM syllabus',
  },
  {
    label: 'Trainer profile',
    bluetick: 'Practitioners running live campaigns',
    competitor: 'Full-time career trainers',
  },
  {
    label: 'Batch size',
    bluetick: 'Capped at 24',
    competitor: '80&ndash;200 per cohort',
  },
  {
    label: 'AI tool exposure',
    bluetick: '50+ AI tools across modules',
    competitor: '2&ndash;5 tools, often optional',
  },
  {
    label: 'Hiring network',
    bluetick: '300+ Bangalore-rooted partners',
    competitor: 'Generic job-board listings',
  },
  {
    label: 'Fee transparency',
    bluetick: 'One number, EMI shared upfront',
    competitor: 'Inflated MRP + &ldquo;today only&rdquo; discount',
  },
  {
    label: 'Post-placement support',
    bluetick: 'Lifetime re-matching, no re-fee',
    competitor: 'Ends with first job (or sooner)',
  },
];

/* FAQs targeted at the "best/top" buyer. Each Q is something they actually
   ask in counselor calls — not generic course Q&A. */
export const FAQS = [
  {
    q: 'What makes BlueTick the best digital marketing institute in Bangalore?',
    a: 'Three things, in order: (1) a 97% placement record verified across our last 4 batches with named alumni, (2) an AI-native curriculum rebuilt for how companies actually hire in 2026 - not a 2023 SEO syllabus, and (3) trainers who are currently running live ad budgets, not full-time career trainers. Everything else, like awards, media and alumni at MAANG, is downstream of those three.',
  },
  {
    q: 'How is the &ldquo;#1&rdquo; ranking actually measured?',
    a: 'By placement outcome, not by Google reviews or paid SEO listings. Across the last 4 batches in Bangalore, our verified placement rate is 97% with a published alumni list and median package band of &#8377;5&ndash;8 LPA. Ask any institute claiming #1 to publish the same and compare.',
  },
  {
    q: 'Are &ldquo;Top 10 digital marketing institutes in Bangalore&rdquo; lists trustworthy?',
    a: 'Mostly no. Most &ldquo;Top 10&rdquo; lists are paid SEO placements where institutes pay a fee or content commission to be listed. Don&rsquo;t pick by ranking article - pick by published placement data, named alumni, and a counselor call where you ask hard questions. We welcome the comparison.',
  },
  {
    q: 'How does BlueTick compare to IIDE, Simplilearn or other big-brand institutes?',
    a: 'Big-brand institutes optimise for marketing reach - we optimise for hiring outcome. Their batches run 80&ndash;200 students with full-time trainers; ours cap at 24 with practitioner trainers. Their curriculum is centralised and slow to update; ours is rebuilt every cohort around what Bangalore recruiters are actually asking for. Both models work for someone - ours works if your priority is placement.',
  },
  {
    q: 'Is the placement record actually verifiable?',
    a: 'Yes. We publish named alumni with their LinkedIn profiles, batch month, and current employer on this site and our brochure. On a counselor call we&rsquo;ll share the full list of 312 placements from the last 4 batches. If a number isn&rsquo;t verifiable, it shouldn&rsquo;t earn your trust.',
  },
  {
    q: 'Why is an AI-native curriculum a real differentiator and not just marketing?',
    a: 'Because the role itself has changed. A 2026 digital marketer is expected to ship campaigns 3&ndash;5x faster using AI tools - ChatGPT for copy, Gemini for research, Midjourney for creatives, Jasper/Copy.ai for variants, AI ad platforms like Meta Advantage+. Recruiters now filter resumes by AI fluency. An institute teaching a 2023 syllabus is sending you into a 2026 interview unprepared.',
  },
  {
    q: 'Who are the trainers and what&rsquo;s their pedigree?',
    a: 'All trainers have 5&ndash;12 years of current industry experience - running paid budgets at agencies (WPP, Dentsu, Madison), in-house teams (Swiggy, Razorpay, Cred) or their own consulting practice. We share full trainer profiles with LinkedIn links on the counselor call. No anonymous &ldquo;star faculty.&rdquo;',
  },
  {
    q: 'What if I don&rsquo;t get placed?',
    a: 'You stay in the placement pool until you do. We re-match you across batches, run additional mock interviews, sharpen your portfolio, and introduce you to recruiters from our 300+ partner network - for as long as it takes, at no additional fee. The 97% number isn&rsquo;t an end-of-course statistic; it&rsquo;s where we don&rsquo;t stop.',
  },
];

export const META = {
  title:
    'Best Digital Marketing Institute in Bangalore | #1 by Placement Record | BlueTick Academy',
  description:
    'Ranked Bangalore&rsquo;s #1 digital marketing institute by placement, not popularity. 97% placement, 10,000+ alumni at MAANG, funded startups & top agencies. AI-native 2026 curriculum.',
  canonical:
    'https://bluetickacademy.com/best-digital-marketing-institute-bangalore',
};
