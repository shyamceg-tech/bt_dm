/**
 * online.config.js
 * Single source of edit for the /digital-marketing-course-online landing page.
 * Meta, the hybrid-format facts, batch info, certificate copy and (Batch 2) the
 * online-tuned FAQs all live here so non-engineers can update without touching
 * component code. Contact details are reused from near-me.config (CAMPUS) to
 * avoid a second source of truth for phone / WhatsApp / email.
 *
 * Format decision (confirmed with the client): HYBRID — live instructor-led
 * online classes WITH every session recorded. All copy below must stay honest
 * to that: "live + recordings", never "self-paced", never "pre-recorded only".
 */

export const META = {
  title:
    'Digital Marketing Course Online | Live Classes + Recordings | BlueTick Academy',
  description:
    'A live, mentor-led online digital marketing course from a real Bangalore academy. Live classes you join from anywhere, every session recorded, a verifiable certificate and 100% placement support. Next online batch starting soon.',
  canonical: 'https://bluetickacademy.com/digital-marketing-course-online/',
};

/* The hybrid-format facts. Re-used by the hero, the Live-vs-Recorded section
   and the SEO article so the format story is told consistently everywhere. */
export const FORMAT = {
  mode: 'Live online + recordings',
  liveLabel: 'Live, instructor-led classes',
  recordingLabel: 'Every session recorded',
  /* The promise that resolves the #1 online objection. */
  oneLiner:
    'Live, mentor-led classes you join from anywhere - and every session is recorded, so a busy week never sets you back.',
  proofs: [
    'Live instructor-led classes - not pre-recorded videos',
    'Every session recorded - revisit anytime, never fall behind',
    'Trainers running live campaigns - not full-time teachers',
    'Verifiable certificate + 100% placement support',
  ],
};

/* Online batch visibility. Dates are absolute strings — update monthly.
   `seatsLeft` is shown as-is; keep it honest (an online cohort still has a
   real capacity cap for live mentoring — do not inflate). */
export const BATCHES = [
  {
    id: 'aug-live-weekday',
    startDate: '12 Aug 2026',
    schedule: 'Mon–Fri · 7:30 PM – 9:00 PM IST',
    mode: 'Live online · recordings included',
    track: 'Professional Certification (PCP)',
    seatsLeft: 8,
    durationWeeks: 20,
  },
  {
    id: 'aug-live-weekend',
    startDate: '17 Aug 2026',
    schedule: 'Sat–Sun · 11:00 AM – 1:30 PM IST',
    mode: 'Live online · recordings included',
    track: 'PG Program (PGCP) — for working professionals',
    seatsLeft: 11,
    durationWeeks: 24,
  },
];

/* The certificate trust object — second-largest sub-intent in the search data
   ("...course online with certificate"). Kept concrete and verifiable. */
export const CERTIFICATE = {
  name: 'BlueTick Academy Professional Certificate in Digital Marketing',
  verifiable: true,
  note:
    'Issued on completion with a unique verification ID an employer can check — plus the 12 industry certifications (Google, Meta, HubSpot and more) you sit for during the program.',
};

/* FAQs tuned to the online buyer. Order = perceived priority, mirroring the
   search-data sub-intents: live-vs-recorded first (the #1 objection), then the
   "can I keep up", certificate, employer-trust, and "vs free/self-paced"
   clusters. Plain literals only — no user input reaches these strings.

   Keyword tiering (top-5 online terms by volume) is woven in with descending
   density — primary "digital marketing course online" ×3 here, the other four
   ×1 each — the heavier share lives in the long-form guide. Phrases are placed
   where they read naturally (mostly in question text), never stuffed. */
export const FAQS = [
  {
    // Tier 1 — "digital marketing course online" (primary)
    q: 'Q1. Is the digital marketing course online live, or just pre-recorded videos?',
    a: 'It&rsquo;s <strong>live, instructor-led classes</strong> - you attend in real time, ask questions, and get feedback from a trainer who is currently running campaigns. Every session is <strong>also recorded</strong>, so the recordings are your backup, not the course itself. That is the opposite of a pre-recorded playlist you watch alone.',
  },
  {
    // Tier 1 — primary (in answer)
    q: 'Q2. What happens if I miss a live class?',
    a: 'Nothing breaks. Every live session is recorded and available to you, and we run makeup sessions for important modules - which is exactly why our digital marketing course online keeps recordings of everything. You catch up on your schedule and rejoin the next live class without falling behind.',
  },
  {
    // Tier 3 — "online digital marketing courses"
    q: 'Q3. Can I actually get my doubts cleared in online digital marketing courses?',
    a: 'Yes. Doubts are cleared live during class, and you also get WhatsApp office hours with trainers between sessions. Online here means remote, not alone - you get the same mentor access a classroom student gets.',
  },
  {
    // Tier 4 — "digital marketing course online with certificate"
    q: 'Q4. Is the digital marketing course online with certificate actually verifiable?',
    a: 'Yes. You receive the BlueTick Academy Professional Certificate with a <strong>unique verification ID an employer can check</strong>. During the program you also sit for up to 12 industry certifications (Google, Meta, HubSpot and more) - the credentials recruiters actually recognise.',
  },
  {
    // Tier 1 — primary
    q: 'Q5. Will employers respect a digital marketing course online as much as a classroom one?',
    a: 'Employers hire on evidence, not on whether you learned online or in a classroom. You finish with 3 shipped live projects, a portfolio, industry certifications and 6 months of placement support - the same job-ready proof our classroom students walk in with.',
  },
  {
    // Tier 2 — "digital marketing online course"
    q: 'Q6. I&rsquo;m a working professional - can I keep up with a live digital marketing online course?',
    a: 'The weekend live batch (PGCP) is built for working professionals: weekend live classes, recordings of everything, WhatsApp office hours on weekdays, and project deadlines that respect your work calendar. Most of our online cohort are working or switching careers.',
  },
  {
    q: 'Q7. How is this different from a Udemy / YouTube / free Google course?',
    a: 'Free and self-paced courses teach concepts - and most people abandon them because no one is waiting on the other side. Our live cohort gives you a fixed schedule, a real trainer, live projects with real budgets, and placement support. You finish because the structure is built to make you finish.',
  },
  {
    q: 'Q8. Do I need to be in Bangalore to join the online course?',
    a: 'No - you can join the live online batches from anywhere in India. The advantage is that a <strong>real, established Bangalore academy</strong> with 10,000+ alumni and a 300+ hiring-partner network is behind the program, not a faceless platform.',
  },
  {
    // Tier 5 — "best digital marketing course online"
    q: 'Q9. How do I choose the best digital marketing course online?',
    a: 'Judge it on outcomes, not on the word &ldquo;online.&rdquo; Five checks cut through the noise: is it live or just pre-recorded; are the trainers practising marketers; do you finish with real projects and a verifiable certificate; is there genuine placement support; and will they show you named, verifiable alumni? A course that answers all five with evidence is the one worth your money.',
  },
  {
    q: 'Q10. What are the fees and is there an EMI option?',
    a: 'Fees vary by track (PCP / PGCP). We share the full fee and EMI options up front on your first call - the same number every student sees, with no inflated price followed by a &ldquo;today-only&rdquo; discount.',
  },
];
