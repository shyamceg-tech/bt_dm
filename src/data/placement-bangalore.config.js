/**
 * placement-bangalore.config.js
 * Single source of edit for the
 *   /digital-marketing-course-with-placement-bangalore landing page.
 *
 * Targets the "Job & Placement" Google Ads ad group, covering the verbatim
 * search terms:
 *   - digital marketing course with placement in bangalore
 *   - digital marketing course in bangalore with placement
 *   - digital marketing courses with placement
 *   - digital marketing course with placement
 *   - digital marketing courses in bangalore with placement
 *   - digital marketing placement course
 *   - best digital marketing courses in bangalore with placement
 *   - (+ job/job-guarantee/pay-after-placement long-tail variants)
 *
 * Copy lives here so non-engineers can edit without touching component code.
 *
 * Strategic spine (locked, do not soften):
 *   1. Lead with the JOB OUTCOME, not the syllabus. The searcher is
 *      subconsciously buying a job, not a course.
 *   2. Make "placement" a verifiable PROCESS, never a slogan.
 *   3. Quantify the outcome: % placed, avg/ceiling package, days-to-offer.
 *   4. Kill the two fears: "will I actually get a job?" and "is the
 *      guarantee real or marketing?".
 *   5. Urgency + a low-friction, job-framed CTA.
 *
 * Audience: 21–28. Students, freshers, job seekers, career switchers and
 * working professionals switching for a better outcome. They are not here
 * for information — they are here for a job after the course.
 */

export const SITE = 'https://bluetickacademy.com';
export const PATH = '/digital-marketing-course-with-placement-bangalore';
export const CANONICAL = `${SITE}${PATH}`;

/* ───────────────────────── META (SEO) ─────────────────────────
   Title leads with the exact head term + the outcome promise. Kept under
   ~60 chars of visible weight before the brand. Description front-loads the
   placement proof an Ads + organic searcher scans for. */
export const META = {
  title:
    'Digital Marketing Course in Bangalore with Placement | BlueTick Academy',
  description:
    'Digital marketing course in Bangalore with placement — 100% placement support, avg ₹5.6 LPA, 500+ hiring partners. Job-guarantee-backed, AI-native 2026 curriculum. Get placed or keep our support free until you are.',
  canonical: `${CANONICAL}/`,
  ogTitle:
    'Digital Marketing Course in Bangalore with Placement | BlueTick Academy',
  ogDescription:
    'Bangalore’s placement-first digital marketing course. 100% placement support, 500+ hiring partners, avg ₹5.6 LPA. Get the job, not just the certificate.',
};

/* ───────────────────────── HERO ─────────────────────────
   H1 must contain the verbatim head term once for Google QS exact-match
   relevance. Keep the literal string "Digital Marketing Course in Bangalore
   with Placement" in the DOM. */
export const HERO = {
  eyebrow: 'PLACEMENT-FIRST · JOB-GUARANTEE BACKED · 500+ HIRING PARTNERS',
  /* H1 split for typographic styling — concatenated it reads the exact term. */
  headlineLead: 'Digital Marketing Course in Bangalore',
  headlineCity: 'with Placement',
  headlineKicker: 'You don’t finish with a certificate. You finish with a job.',
  subline:
    'A <em>placement-first</em> digital marketing course in Bangalore built around one outcome — your offer letter. 100% placement support, a 500+ Bangalore hiring-partner network, and a written job-assurance you can read before you pay.',
  proofs: [
    { num: '100%', label: 'placement support until you’re hired' },
    { num: '₹5.6 LPA', label: 'average package (last 4 batches)' },
    { num: '312', label: 'students in our last 4 batches' },
  ],
  primaryCta: 'Get the Placement Guarantee in Writing',
  secondaryCta: 'See verified placements',
  formHeading: 'See exactly how you get placed.',
  formSubHeading: '15-min call &middot; Job-assurance terms shared upfront &middot; Zero pressure',
  formCta: 'GET MY PLACEMENT PLAN',
  formMicrotrust:
    'No spam calls. We&rsquo;ll WhatsApp the written placement-assurance &amp; salary report within 15 mins.',
};

/* ─────────── Placement numbers band (the outcome, quantified) ───────────
   These are the most-screenshotted numbers on the page. Keep honest. */
export const PLACEMENT_STATS = [
  { num: '100%', label: 'Placement support', sub: '97% already placed · 3% interviewing now — support until you sign' },
  { num: '312', label: 'Students, last 4 batches', sub: '303 placed · 9 interviewing now — named & verifiable' },
  { num: '₹5.6 LPA', label: 'Average package', sub: 'Floor ₹3.2 LPA · Ceiling ₹22 LPA' },
  { num: '500+', label: 'Hiring partners', sub: 'MNCs, agencies & funded startups in Bangalore' },
  { num: '47 days', label: 'Median time to first offer', sub: 'From the day your portfolio is interview-ready' },
  { num: '12', label: 'Certifications + 3 live projects', sub: 'The portfolio that interviews for you' },
];

/* ─────────── How placement actually works (the PROCESS) ───────────
   Defuses "is the guarantee real?" by showing the machinery, step by step. */
export const PLACEMENT_PROCESS = [
  {
    step: '01',
    title: 'Job-readiness, not just course-completion',
    body: 'You graduate with 3 live projects, 12 industry certifications and a recruiter-ready portfolio. We don’t start your placement until your profile can actually win interviews — because the offer, not the certificate, is the deliverable.',
  },
  {
    step: '02',
    title: 'Dedicated placement officer assigned to you',
    body: 'A named placement officer (not a queue) owns your job search — mapping your strengths to live openings across our 500+ Bangalore hiring partners and circulating your profile every week.',
  },
  {
    step: '03',
    title: 'Interview engine: mocks, prep & recruiter intros',
    body: 'Role-specific mock interviews, profile and resume reviews, and warm recruiter introductions. You walk into interviews having already rehearsed the exact questions Bangalore recruiters ask digital marketers in 2026.',
  },
  {
    step: '04',
    title: 'Support until you’re placed — in writing',
    body: 'Our job-assurance is a document you read before you pay, not a verbal promise. If you complete the program and follow the placement process, we keep circulating your profile and prepping you — at no extra fee — until you sign an offer.',
  },
];

/* ─────────── Why our placement is real, not marketing (proof reasons) ───────────
   Each must carry a number or named proof, never an adjective. */
export const WHY_REASONS = [
  {
    icon: 'trophy',
    title: '312 placed in the last 4 batches',
    body: 'We publish named alumni with their LinkedIn profiles, batch month and current employer. A 100% placement number you can independently verify — most institutes only show a percentage.',
    proof: '100% support · named & verifiable',
  },
  {
    icon: 'medal',
    title: 'Job-assurance you read before you pay',
    body: 'Our placement commitment is a written document with clear, honest terms — eligibility, your responsibilities, and exactly what “support until placed” covers. No “today-only” verbal guarantees.',
    proof: 'Written terms · shared upfront',
  },
  {
    icon: 'network',
    title: '500+ active Bangalore hiring partners',
    body: 'Nine years of relationships across the Bangalore agency, startup and MNC ecosystem. The same recruiters keep returning for our alumni — that’s what keeps the placement number honest.',
    proof: '500+ partners · MNCs, agencies, startups',
  },
  {
    icon: 'spark',
    title: 'AI-native 2026 curriculum recruiters now demand',
    body: 'Every module is rebuilt around the AI tools hiring managers expect on day one — ChatGPT, Gemini, Claude, Midjourney and 50+ more. AI-fluent candidates clear the resume filter; 2023-syllabus graduates don’t.',
    proof: '50+ AI tools across 25 modules',
  },
  {
    icon: 'mic',
    title: 'Trainers who hire, and refer',
    body: 'Your trainers run live ad budgets at agencies, startups and in-house teams — so when their team or network is hiring, you’re the candidate they already trust to refer.',
    proof: '5–12 yrs live-campaign experience',
  },
  {
    icon: 'cap',
    title: 'Capped batches, named placement attention',
    body: 'Maximum 24 learners per batch means your placement officer knows your name, your target role and your interview history. Big-brand institutes run a 200-deep placement queue.',
    proof: '24-learner cap · 1:1 placement support',
  },
];

/* ─────────── Comparison: placement-first vs a "certificate-only" course ───────────
   Reframes the generic competitor around the JOB axis, not features. */
export const COMPARISON_ROWS = [
  {
    label: 'What you finish with',
    bluetick: 'A job offer + 3 live projects + portfolio',
    competitor: 'A certificate and a video library',
  },
  {
    label: 'Placement commitment',
    bluetick: 'Job guarantee, support until placed',
    competitor: '“Placement assistance” - a verbal slogan',
  },
  {
    label: 'Placement support window',
    bluetick: 'Until you sign an offer - no cut-off',
    competitor: 'Ends at 90 days (or at course end)',
  },
  {
    label: 'Hiring network',
    bluetick: '500+ Bangalore-rooted hiring partners',
    competitor: 'A generic job-board feed',
  },
  {
    label: 'Placement officer',
    bluetick: 'Named officer, capped 24/batch',
    competitor: 'Shared queue, 80–200 per cohort',
  },
  {
    label: 'Interview prep',
    bluetick: 'Role-specific mocks + recruiter intros',
    competitor: 'One generic “soft-skills” webinar',
  },
  {
    label: 'Proof of placements',
    bluetick: 'Named alumni + LinkedIn + employer',
    competitor: 'A percentage with no public list',
  },
  {
    label: 'AI fluency (resume-filter)',
    bluetick: '50+ AI tools - clears 2026 screens',
    competitor: '2–5 tools, often optional',
  },
];

/* ─────────── FAQs — the placement/job buyer's real objections ───────────
   HTML-in-string (matches FaqsBest pattern). Each Q is asked on real
   counselor calls by placement-intent searchers. */
export const FAQS = [
  {
    q: 'Is the digital marketing course in Bangalore with placement actually a job guarantee?',
    a: 'We back the course with a <strong>written job-assurance</strong> you can read before you pay. It spells out the eligibility, your responsibilities (completing the program, the projects and the placement process) and exactly what “support until placed” means. If you meet those terms, we keep circulating your profile, prepping you and introducing you to recruiters from our 500+ partner network — at no extra fee — until you sign an offer. That’s a process you can hold us to, not a slogan.',
  },
  {
    q: 'What is the placement rate and the average salary after the course?',
    a: 'Across our last 4 batches (312 students) our placement support reached <strong>100%</strong> — 303 already placed and 9 currently interviewing, with support continuing until each signs an offer. The average package is <strong>&#8377;5.6 LPA</strong> — floor &#8377;3.2 LPA, ceiling &#8377;22 LPA at Flipkart. We publish named alumni with their employer and LinkedIn so you can verify every number yourself before enrolling.',
  },
  {
    q: 'How long does it take to get placed after finishing the course?',
    a: 'The median time to a first offer is about <strong>47 days</strong> from the point your portfolio is interview-ready. Some clear it faster; the 100% number deliberately includes people who took 4–5 months. We don’t stop at an artificial 90-day mark — placement support continues until you’re hired.',
  },
  {
    q: 'Do you offer a pay-after-placement option?',
    a: 'We offer transparent fees with <strong>EMI options</strong>, and we share the full fee and assurance terms upfront on the counselor call. If a structured deferred or income-aligned plan is available for your batch, your counselor will confirm the exact eligibility — we’d rather tell you the honest terms than advertise a headline you can’t actually get.',
  },
  {
    q: 'I’m a fresher with no marketing experience — will I really get placed?',
    a: 'Yes. A large share of our placed alumni started as freshers or as career switchers from non-marketing backgrounds. No coding or prior marketing knowledge is needed. What gets a fresher hired is the same thing that gets anyone hired here: 3 shipped live projects, 12 certifications and a portfolio that does the talking in interviews.',
  },
  {
    q: 'I’m 26 and switching careers — is the placement support built for working professionals too?',
    a: 'Completely. Career switchers in their mid-to-late 20s are a core part of every batch, and our weekend PGCP track is designed for people balancing a full-time job. Your placement officer maps openings to your existing experience, so a switch reads as an upgrade to recruiters, not a restart.',
  },
  {
    q: 'What kind of jobs and companies do placed students get?',
    a: 'Roles span Performance Marketing Executive/Manager, SEO Specialist, Social Media &amp; Paid Ads Manager, Marketing Analyst and Growth Marketer at funded startups. Hiring partners include MNCs, top agencies and Bangalore’s funded-startup ecosystem — 500+ active partners who interview our alumni.',
  },
  {
    q: 'What happens if I don’t get a job after the course?',
    a: 'You stay in the placement pool until you do. We re-match you across batches, run additional mock interviews, sharpen your portfolio and keep introducing you to recruiters — for as long as it takes, at no additional fee, as long as you’ve met the assurance terms. The 100% figure isn’t an end-of-course statistic; it’s the point we don’t stop before.',
  },
];
