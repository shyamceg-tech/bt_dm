/**
 * training-bangalore.config.js
 * Single source of edit for the
 *   /digital-marketing-training-in-bangalore landing page.
 *
 * Targets the "Training / Institute" Google Ads ad group:
 *   [digital marketing training in bangalore]
 *   [digital marketing training institutes in bangalore]
 *   [digital marketing institute in bangalore]
 *   [digital marketing institute bangalore]
 *   [digital marketing classes in bangalore]
 *   [digital marketing institutes in bangalore]
 *
 * All copy lives here so non-engineers can edit without touching component
 * code. Mirrors the architecture of best-bangalore.config.js.
 *
 * Strategic spine (locked, do not soften):
 *   1. Match "training / institute" intent verbatim in H1, title, first para.
 *   2. Audience is 21-28 (students, freshers, switchers) who consciously
 *      search "training/institute" but subconsciously want a JOB OUTCOME.
 *      Lead with hands-on training -> portfolio -> placement.
 *   3. Specifics over adjectives. Every claim has a number or a named proof.
 *   4. Urgency + one concrete CTA (talk to a counsellor / book a demo class).
 */

export const HERO = {
  /* Eyebrow — institute/training intent, with a job-outcome hook. */
  eyebrow: 'BANGALORE&rsquo;S PLACEMENT-FIRST DIGITAL MARKETING INSTITUTE',

  /* H1 MUST contain the verbatim head term once for keyword relevance.
     Keep these strings literally in the DOM — Google Quality Score and
     answer engines read the exact match. */
  headlineLead: 'Digital Marketing Training',
  headlineCity: 'in Bangalore',
  headlineKicker: 'Hands-on training that ends in a job, not just a certificate.',

  subline:
    'Practical, instructor-led <em>digital marketing training in Bangalore</em> built for freshers, students and career switchers. Learn on live campaigns and real budgets, build a portfolio, and walk into interviews job-ready &mdash; backed by a 100% placement record and 10,000+ alumni at MNCs, agencies and funded startups.',

  /* Three proof stats — institute credibility + job outcome. */
  proofs: [
    { num: '100%', label: 'placement record (last 4 batches, verified)' },
    { num: '60+', label: 'tools & live projects, not just theory' },
    { num: '24', label: 'learners per batch &mdash; real mentor attention' },
  ],

  primaryCta: 'Book a Free Demo Class',
  secondaryCta: 'See the training syllabus',

  /* MiniForm copy (rendered via the shared MiniForm component). */
  formHeading: 'Talk to a training counsellor',
  formSubHeading: '15-min call &middot; Syllabus + fees on WhatsApp &middot; Zero pressure',
  formCta: 'GET SYLLABUS & FEES',
  formMicrotrust:
    'No spam calls. We&rsquo;ll WhatsApp the full training syllabus, batch dates and fee plan within 15 minutes.',
};

/* "Why train at BlueTick" — six institute-intent differentiators. Each must
   carry a number or a named proof, not an adjective. */
export const WHY_REASONS = [
  {
    icon: 'hands',
    title: 'Training on live campaigns, not slides',
    body: 'From week one you run real Google &amp; Meta ad campaigns on real budgets. You finish with three shipped projects in your portfolio &mdash; the single thing a Bangalore recruiter actually wants to see.',
    proof: '3 live portfolio projects',
  },
  {
    icon: 'mic',
    title: 'Trainers currently running campaigns',
    body: 'Not full-time career trainers. Our instructors are practitioners with 5&ndash;12 years running brand budgets at agencies, startups and in-house teams &mdash; so what they teach on Monday is what they shipped on Friday.',
    proof: '5&ndash;12 yrs avg industry experience',
  },
  {
    icon: 'cap',
    title: 'Capped batches, real attention',
    body: 'Maximum 24 learners per batch. You get named feedback on every assignment, 1:1 mentor calls and a placement officer who knows you. Big institutes pack 80&ndash;200 per cohort.',
    proof: '24-learner cap, 1:1 mentorship',
  },
  {
    icon: 'spark',
    title: 'AI-native 2026 syllabus',
    body: 'Every module is rebuilt around the AI tools recruiters now expect on day one &mdash; ChatGPT, Gemini, Claude, Midjourney, plus 50+ more. Most institutes still teach a 2023 SEO syllabus.',
    proof: '60+ tools across 25 modules',
  },
  {
    icon: 'medal',
    title: '100% verified placement record',
    body: 'Across our last 4 batches &mdash; 312 learners, all placed. We publish named alumni with their LinkedIn profiles and current employers. Ask any institute claiming the same to show you the list.',
    proof: '312 placed in last 4 batches',
  },
  {
    icon: 'pin',
    title: 'Bangalore campus + flexible batches',
    body: 'Train offline at our Indiranagar campus (1 min from the metro), or join weekday, weekend and hybrid batches built around a full-time job. Free demo class before you enrol.',
    proof: 'Weekday / weekend / hybrid',
  },
];

/* Decision table for the "which institute / is training worth it" searcher.
   Frames BlueTick training against free YouTube/self-learning and a generic
   institute. Keep claims defensible — these get screenshotted. */
export const COMPARISON_ROWS = [
  {
    label: 'Format',
    bluetick: 'Instructor-led, hands-on, live campaigns',
    freelearn: 'Passive videos, no feedback',
    generic: 'Recorded lectures, theory-heavy',
  },
  {
    label: 'Portfolio',
    bluetick: '3 live projects + 12 certifications',
    freelearn: 'Nothing to show a recruiter',
    generic: 'Mostly certificates, few projects',
  },
  {
    label: 'Trainers',
    bluetick: 'Practitioners running live budgets',
    freelearn: 'Anonymous creators',
    generic: 'Full-time career trainers',
  },
  {
    label: 'Batch size',
    bluetick: 'Capped at 24, 1:1 mentorship',
    freelearn: 'You&rsquo;re on your own',
    generic: '80&ndash;200 per cohort',
  },
  {
    label: 'Placement',
    bluetick: '100% verified, named alumni',
    freelearn: 'None',
    generic: 'Vague claims, no public list',
  },
  {
    label: 'Job outcome',
    bluetick: 'Interview-ready in 3&ndash;5 months',
    freelearn: 'Rarely converts to a job',
    generic: 'Depends entirely on you',
  },
];

/* FAQs targeted at the "training / institute in Bangalore" searcher. Each Q is
   something this audience actually asks before enrolling. The FAQPage schema
   is generated from this array in <FaqsTraining /> for AEO / GEO. */
export const FAQS = [
  {
    q: 'Which is the best digital marketing institute in Bangalore for training?',
    a: 'Judge an institute by outcomes, not advertising. BlueTick&rsquo;s digital marketing training in Bangalore is built around three things: hands-on training on live campaigns (you finish with 3 portfolio projects), practitioner trainers who currently run real ad budgets, and a 100% placement record verified across our last 4 batches with named alumni you can check on LinkedIn. Ask any institute you&rsquo;re comparing to publish the same proof before you decide.',
  },
  {
    q: 'What is the duration and fee of the digital marketing training in Bangalore?',
    a: 'We offer three tracks so the training matches your goal: a 3-month PCP for core job-ready skills, our most popular 5-month PGCP (with a weekend option for working professionals), and a 7-month Elevate track for advanced specialisation. Fees for placement-focused training in Bangalore typically run &#8377;40,000 for short certificate courses up to &#8377;1.2&ndash;1.6 lakh for full programs with live projects and placement support. We share the exact fee and EMI plan up front &mdash; no inflated &ldquo;today-only&rdquo; discounts.',
  },
  {
    q: 'Is the digital marketing training suitable for freshers and beginners?',
    a: 'Yes. The training assumes no prior marketing knowledge and no coding. The first modules build the fundamentals before you ever touch a live budget, and the learning is project-led so concepts stick. Our batches deliberately mix freshers, final-year students and career switchers in their late 20s, so you learn alongside people at your stage. What matters is consistency through the projects &mdash; that&rsquo;s what turns a beginner into a candidate Bangalore employers interview.',
  },
  {
    q: 'Do you offer classroom training or online classes in Bangalore?',
    a: 'Both. You can train offline at our Indiranagar campus &mdash; a 1-minute walk from the metro with free parking &mdash; in weekday or weekend batches. If you&rsquo;re working or live further out (Whitefield, Electronic City, HSR, Marathahalli), our hybrid and online classes give you recorded sessions, makeup classes and WhatsApp office hours so you never fall behind. The syllabus, projects and placement support are identical across formats.',
  },
  {
    q: 'Does the digital marketing training in Bangalore include placement?',
    a: 'Yes, and it&rsquo;s a process, not a slogan. Placement support includes a portfolio that interviews for you (3 live projects + 12 certifications), recruiter introductions from our 300+ Bangalore hiring-partner network, mock interviews and profile reviews, and six months of continued support with no artificial 90-day cut-off. Our 100% placement record across the last 4 batches (312 learners) includes people who took 4&ndash;5 months, not only the fastest movers.',
  },
  {
    q: 'What will I actually learn in the training?',
    a: 'The 2026 syllabus spans 25+ modules and 60+ tools, organised around the channels companies hire for: technical &amp; on-page SEO, Google Ads (Search, Display, Performance Max), Meta and YouTube ads, social and content, GA4 analytics and dashboards, and AI workflows (Custom GPTs, Midjourney creative pipelines, AI-assisted reporting). Every module ends in real work &mdash; live campaigns and graded projects, not just notes.',
  },
  {
    q: 'Who are the trainers at the institute?',
    a: 'All trainers have 5&ndash;12 years of current industry experience &mdash; running paid budgets at agencies (WPP, Dentsu, Madison), in-house teams (Swiggy, Razorpay, Cred) or their own consulting practice. They&rsquo;re practitioners, not full-time career trainers, and we share full trainer profiles with LinkedIn links on the counsellor call. No anonymous &ldquo;star faculty.&rdquo;',
  },
  {
    q: 'What salary and jobs can I expect after the training in Bangalore?',
    a: 'Bangalore is one of India&rsquo;s strongest markets for digital marketers. Graduates move into roles like Performance Marketing Executive, SEO Specialist, Social &amp; Paid Ads Manager, Marketing Analyst and Growth Marketer. Entry packages generally start around &#8377;3.5&ndash;5 LPA and rise quickly with proven campaign results; specialists and managers with two to three years often reach &#8377;10&ndash;18 LPA. Demand comes from MNCs, agencies and funded startups &mdash; many in our 300+ hiring-partner network.',
  },
];

export const META = {
  /* ≤60 chars so Google doesn't truncate the SERP title. Exact head term
     front-loaded; brand kept for trust. The "institute / 100% placement"
     value props live in the H1 kicker, meta description and body copy. */
  title: 'Digital Marketing Training in Bangalore | BlueTick Academy',
  description:
    'Hands-on digital marketing training in Bangalore for freshers & career switchers. Live projects, AI-native 2026 syllabus, 100% placement record. Book a free demo class at BlueTick Academy.',
  canonical:
    'https://bluetickacademy.com/digital-marketing-training-in-bangalore/',
};
