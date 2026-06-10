/**
 * best-course.config.js
 * Single source of edit for the
 *   /best-digital-marketing-course-in-bangalore landing page.
 *
 * Targets the "Best / Top digital marketing course" Google Ads cluster.
 * Head term ......... best digital marketing course in bangalore
 * Top converter ..... top 10 digital marketing institutes in bangalore with fees
 * Sub-intents ....... which course is best · with placement · top 10 · near me
 *
 * Non-engineers edit COPY here without touching component code.
 *
 * STRATEGIC SPINE (locked — do not soften):
 *   1. Redefine "best" = placement outcome, not reputation. The searcher is
 *      shortlisting 5–7 tabs; win the comparison, don't introduce the brand.
 *   2. Proof over adjectives — every superlative is backed by a number, a name,
 *      or a verifiable link, or it reads as noise like every other tab.
 *   3. Scorecard + comparison framing serves "top 10 / which is best / fees".
 *   4. De-risk the decision — floor salary published, support window stated,
 *      talk-to-an-alumnus offered, no-pressure call.
 *
 * Numbers are mirrored from the live homepage to avoid contradiction:
 *   312 placed (last 4 batches) · ₹3.2–22 LPA · 4.9/344 · 60+ tools · 25+ modules
 *   · 6-month placement support · 41% career switchers · 10,000+ alumni.
 *
 * NOTE: SEO_GUIDE (the ~2000-word article) is appended to this file in item 3.
 *       META below is consumed by the item-4 SEO/AEO/GEO pass.
 */

const SITE = 'https://bluetickacademy.com';
const PATH = '/best-digital-marketing-course-in-bangalore';

/* ── META — consumed by item 4 (do not wire into page metadata until then) ── */
export const META = {
  canonical: `${SITE}${PATH}/`,
  // H1 keyword appears verbatim once in HERO.headlineLead + headlineCity.
  // Title kept ≤60 chars so Google doesn't truncate it; head term front-loaded.
  title: 'Best Digital Marketing Course in Bangalore | 100% Placement',
  // Description kept ≤160 chars so it shows in full; keyword + #1-by-placement
  // proof front-loaded for the snippet.
  description:
    'Looking for the best digital marketing course in Bangalore? BlueTick ranks #1 by placement - 312 named alumni placed, AI-native 2026 curriculum, EMI options.',
  ogTitle:
    'Best Digital Marketing Course in Bangalore | Ranked #1 by Placement | BlueTick',
  ogDescription:
    'Compare BlueTick against any Top-10 list in Bangalore: 312 named placements, 60+ AI tools, practitioner trainers, 6-month placement support. Judge us on the scorecard.',
};

/* ── HERO (swap of <Hero/>) — reuses Hero.module.css + the shared <HeroForm/> ─
   BlueTick's Hero renders the eyebrow line as the actual <h1>; the big
   MASTER / DIGITAL MARKETING / WITH AI block is decorative and the lead form
   is the shared <HeroForm/>. So the only intent-critical change is the H1 — it
   must contain the verbatim head term exactly once for Google Ads relevance.
   Everything else stays identical to the homepage hero for design parity. */
export const HERO = {
  // H1 - rendered into styles.eyebrow (id="hero-heading"). Exact head term once.
  h1: 'Best Digital Marketing Course in Bangalore - placement-first, AI-native.',
  // Decorative display headline - unchanged from the homepage (design parity).
  headline: { master: 'MASTER', dm: 'DIGITAL MARKETING', ai: 'WITH AI' },
  // Four highlight chips - proof-led, same chip design as the homepage.
  chips: [
    '100% Placement Record',
    'AI-native 2026 curriculum',
    'Trainers with 5-10 yrs exp',
    'Indiranagar, next to metro station',
  ],
};

/* ── BestRanking (NEW section) — "Why we rank #1, by placement" ──────────────
   Each reason MUST carry a number or a named proof, never an adjective alone.
   This sits right after TrustStrip to validate the "#1 / best" claim instantly. */
export const RANKING = {
  eyebrow: 'WHY WE RANK #1',
  heading: 'Why students rate us the best digital marketing course in Bangalore',
  intro:
    'Not because we say so. Here are five things you can check for yourself before you trust the word &ldquo;best&rdquo;.',
  reasons: [
    {
      icon: 'trophy',
      title: '100% placement, 10,000+ alumni',
      body: '312 students placed in our last 4 batches, and 10,000+ alumni now working across MNCs and startups. We publish their names and LinkedIn profiles, so you can verify every one.',
      proof: '312 placed &middot; 10,000+ alumni',
    },
    {
      icon: 'spark',
      title: 'AI-native 2026 curriculum',
      body: 'Every module is rebuilt around the AI tools recruiters expect on day one. Most &ldquo;top 10&rdquo; syllabi still run a 2023 playbook.',
      proof: '60+ tools &middot; 25+ modules',
    },
    {
      icon: 'mic',
      title: 'Trainers who run live campaigns',
      body: 'Your trainers manage real ad budgets at agencies and startups right now. Monday&rsquo;s lesson was Friday&rsquo;s client call.',
      proof: '5-12 yrs in the field',
    },
    {
      icon: 'briefcase',
      title: '3 live client projects in 90 days',
      body: 'Real briefs, real budgets, real results. You leave with a portfolio that does the talking in interviews, not just a certificate.',
      proof: '3 shipped projects',
    },
    {
      icon: 'shield',
      title: '6-month placement support',
      body: 'No 90-day cut-off. We keep sending recruiter intros and circulating your profile until you&rsquo;re placed.',
      proof: '6 months, until you&rsquo;re placed',
    },
  ],
};

/* ── FORYOU (NEW section, replaces the old "score every institute" scorecard) ─
   A warm, goal-based fit helper instead of a combative rubric. It helps the
   visitor self-select the right track by where they are starting from, then
   offers a no-pressure call. Serves "which course is best for me" intent and
   carries the top keyword once. Styles: BestForYou.module.css */
export const FORYOU = {
  eyebrow: 'IS IT RIGHT FOR YOU?',
  heading: 'Which is the best digital marketing course in Bangalore for you?',
  intro:
    'There is no single &ldquo;best&rdquo; course - only the one that fits where you&rsquo;re starting from. Find yourself below and we&rsquo;ll point you to the right track.',
  cards: [
    {
      accent: 'aurora',
      persona: 'Career switchers',
      who: 'Coming from sales, ops, support or another non-marketing role and you want a clean, structured switch.',
      track: 'Best fit: ELEVATE, 7-month track',
      outcome: 'You&rsquo;re in good company - 41% of our students switch from non-marketing jobs.',
    },
    {
      accent: 'electric',
      persona: 'Freshers &amp; students',
      who: 'In your final year or recently graduated, looking for a skill-based, hire-ready start.',
      track: 'Best fit: PGCP / ELEVATE track',
      outcome: 'You finish with 3 live projects and a portfolio that earns the first interview.',
    },
    {
      accent: 'mint',
      persona: 'Founders &amp; freelancers',
      who: 'Running your own business or freelance practice and you want campaigns that actually perform.',
      track: 'Best fit: PCP, 3-month track',
      outcome: 'Weekend batches are available, so you learn without pausing your work or business.',
    },
  ],
  cta: 'Talk to a course advisor',
};

/* ── BestComparison (swap of <Comparison/>) — reuses Comparison.module.css ────
   Reframed: the rival columns become the alternatives a "best/top" searcher is
   weighing — a generic Top-10 institute, an online platform, and self-learning. */
export const COMPARISON = {
  eyebrow: 'STRAIGHT COMPARISON',
  heading: 'BlueTick vs the typical &ldquo;Top 10&rdquo; pick',
  intro:
    'Same six criteria recruiters care about, measured honestly against the alternatives in your tabs.',
  columns: {
    bluetick: 'BlueTick',
    others: 'Generic &ldquo;Top 10&rdquo; institute',
    online: 'Online platform',
    self: 'Self-learning',
  },
  /* mark: 'yes' (green ✓) | 'na' (gray —) | 'no' (red ✗) */
  rows: [
    {
      criterion: 'Named, verifiable placements',
      bluetick: { mark: 'yes', text: '312 alumni, LinkedIn linked' },
      others:   { mark: 'na',  text: '&ldquo;100%&rdquo; claim, no names' },
      online:   { mark: 'no',  text: 'Portal listings only' },
      self:     { mark: 'no',  text: 'None' },
    },
    {
      criterion: 'Trainers',
      bluetick: { mark: 'yes', text: 'Working agency practitioners' },
      others:   { mark: 'na',  text: 'Career trainers, varies' },
      online:   { mark: 'na',  text: 'Pre-recorded, rarely practitioners' },
      self:     { mark: 'no',  text: 'None' },
    },
    {
      criterion: 'AI-native 2026 curriculum',
      bluetick: { mark: 'yes', text: '60+ tools, quarterly updates' },
      others:   { mark: 'na',  text: 'Often a 2023 syllabus' },
      online:   { mark: 'na',  text: 'Slow to update' },
      self:     { mark: 'na',  text: 'Self-curated' },
    },
    {
      criterion: 'Live agency projects',
      bluetick: { mark: 'yes', text: '3 in 90 days, real briefs' },
      others:   { mark: 'na',  text: 'Sometimes, no commitment' },
      online:   { mark: 'no',  text: 'Simulated only' },
      self:     { mark: 'no',  text: 'None' },
    },
    {
      criterion: 'Placement support',
      bluetick: { mark: 'yes', text: '6 months, named evidence' },
      others:   { mark: 'na',  text: 'Variable, no fixed window' },
      online:   { mark: 'na',  text: 'Generic webinars + portal' },
      self:     { mark: 'no',  text: 'None' },
    },
    {
      criterion: 'Fee + EMI shown upfront',
      bluetick: { mark: 'yes', text: 'Published, EMI available' },
      others:   { mark: 'no',  text: 'Hidden until you call' },
      online:   { mark: 'yes', text: 'Usually shown' },
      self:     { mark: 'yes', text: 'Free / low cost' },
    },
  ],
  cta: 'Talk to a placement counsellor',
};

/* ── FAQS (swap of <Faqs/>) — reuses Faqs.module.css; FAQPage schema in item 4
   Mapped 1:1 to the cluster sub-intents: is-it-really-best · top-10 · 100%
   placement · fees · which-course-is-best · what-#1-means · trainers · alumni. */
export const FAQS = [
  {
    q: 'Q1. Is BlueTick really the best digital marketing course in Bangalore?',
    a: 'We won&rsquo;t ask you to take the word &ldquo;best&rdquo; on faith &mdash; no institute should. We rank #1 on the one metric that decides your outcome: placement. 312 named alumni placed across our last 4 batches, profiles linked. Score us on the 7-point rubric above against anyone else on your list.',
  },
  {
    q: 'Q2. How do you compare to the &ldquo;top 10 digital marketing institutes in Bangalore with fees&rdquo; lists?',
    a: 'Most &ldquo;top 10 digital marketing institutes in Bangalore with fees&rdquo; lists are paid directories, not audits &mdash; placement is ranked on adjectives, not evidence, and the fee column is often a guess. Run our comparison table instead: named placements, practitioner trainers, an AI-native 2026 syllabus, 3 live projects, 6-month support and published fees with EMI. Then ask the others the same questions.',
  },
  {
    q: 'Q3. Is the 100% placement claim real?',
    a: 'Yes &mdash; verified across our last 4 batches (312 students). We publish names and we publish the floor salary (₹3.2 LPA), not just the ₹22 LPA ceiling at Flipkart. It&rsquo;s the single biggest reason students rate us the best digital marketing institute in Bangalore. Ask us for the full report before you join.',
  },
  {
    q: 'Q4. What is the fee, and is there an EMI option?',
    a: 'Fees for all three tracks (PCP 3-month, PGCP 5-month, ELEVATE&trade; 7-month) are shown in the course-tracks section above, with no-cost EMI options. No &ldquo;reveal the price only on a call&rdquo; games.',
  },
  {
    q: 'Q5. Which course is best for digital marketing &mdash; and is yours right for me?',
    a: 'The best course is the one that matches your goal and gets you hired &mdash; that&rsquo;s the lens we&rsquo;d use on any of the best digital marketing courses in Bangalore, ours included. 41% of our students are career switchers from non-marketing backgrounds; batches mix freshers, working professionals and switchers in their 20s. On a 15-min call we&rsquo;ll tell you honestly which track fits &mdash; even if that&rsquo;s a shorter one.',
  },
  {
    q: 'Q6. Best for placement or best for reputation &mdash; what does &ldquo;#1&rdquo; mean here?',
    a: 'Best for placement. We deliberately rank ourselves on whether you get a job, not on how old or how advertised we are. Reputation that doesn&rsquo;t convert into an offer doesn&rsquo;t pay your rent.',
  },
  {
    q: 'Q7. Are your trainers actually working practitioners?',
    a: 'Yes. Every trainer is currently running ad campaigns or building marketing for a real brand &mdash; not a full-time career trainer. That practitioner faculty is what makes us, in our students&rsquo; words, the best digital marketing training institute in Bangalore. Their LinkedIn profiles are linked on this page; verify before you join.',
  },
  {
    q: 'Q8. Can I talk to a current BlueTick alumnus before I decide?',
    a: 'Yes. Fill the form and we&rsquo;ll connect you with 2 recent alumni in your stream of interest. Ask them anything &mdash; including the hard questions.',
  },
];
