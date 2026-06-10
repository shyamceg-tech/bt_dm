/**
 * fees.config.js
 * Single source of edit for the
 *   /digital-marketing-course-fees-bangalore landing page.
 *
 * Targets the "Fees" Google Ads ad group (digital marketing course fees /
 * fees in bangalore / course fees in bangalore / how much does a digital
 * marketing course cost / near me with fees, etc.).
 *
 * Strategic spine (locked — see buyer-intent analysis):
 *   1. Answer the money question on the page — never gate the number.
 *   2. Sell ROI, not price (payback in months, not a discount).
 *   3. Kill the bait fear: "the price you see is the price you pay".
 *   4. Make affordability visible early (no-cost EMI + scholarship).
 *   5. Carry verbatim "digital marketing course fees in Bangalore" for QS,
 *      and ship a Course `offers` price block (the homepage lacks one).
 *
 * Money numbers are the authoritative public figures — edit here only.
 *   Base fees (ex-GST), GST @ 18%, and the GST-inclusive total all live in
 *   FEES so the displayed number and the schema `price` never drift apart.
 *   EMI figures mirror the homepage Tracks section exactly.
 */

const GST_RATE = 0.18;

/* Helper kept inline (not exported) so config stays a plain data module. */
const withGst = (base) => Math.round(base * (1 + GST_RATE));

/* Verified outcome figures — internally consistent set (ceiling = Flipkart). */
export const OUTCOMES = {
  avgPackageLpa: 5.6,
  floorLpa: 3.2,
  ceilingLpa: 22,
  ceilingEmployer: 'Flipkart',
  placedLast4Batches: 312,
};

/* Per-track fees. `total` is GST-inclusive and is what we display + put in
   the Course offers schema. EMI mirrors Tracks.jsx (no-cost EMI). */
export const FEES = [
  {
    key: 'pcp',
    accentVar: '--pcp-color',
    softVar: '--pcp-soft',
    eyebrow: '3-Month Track',
    name: 'Professional Certification Program (PCP)',
    durationMonths: 3,
    baseFee: 42500,
    gst: withGst(42500) - 42500,
    total: withGst(42500),
    emiPerMonth: 5000,
    paybackLabel: 'about 1 month of an average starting salary',
    includes: [
      '15+ live projects · 20+ tools with AI',
      '7 industry certifications included',
      'Classroom + online option',
      '6-month placement support',
    ],
    bestFor: 'Freshers & students wanting a fast, hireable start.',
  },
  {
    key: 'pgcp',
    accentVar: '--pgcp-color',
    softVar: '--pgcp-soft',
    eyebrow: '5-Month Track',
    name: 'Post Graduate Program (PGCP)',
    durationMonths: 5,
    baseFee: 76000,
    gst: withGst(76000) - 76000,
    total: withGst(76000),
    emiPerMonth: 7500,
    paybackLabel: 'under 2 months of an average starting salary',
    includes: [
      '25+ live projects · 60+ tools with AI',
      '12 certifications · 2 specialisations',
      'Weekday & weekend batches',
      '6-month placement support',
    ],
    bestFor: 'Career switchers & job seekers — our most-chosen track.',
    popular: true,
  },
  {
    key: 'elevate',
    accentVar: '--elevate-color',
    softVar: '--elevate-soft',
    eyebrow: '7-Month Track',
    name: 'ELEVATE™ — Digital Marketing + AI',
    durationMonths: 7,
    baseFee: 105000,
    gst: withGst(105000) - 105000,
    total: withGst(105000),
    emiPerMonth: 10000,
    paybackLabel: 'under 3 months of an average starting salary',
    includes: [
      'All PGCP modules + 16 AI-for-Business modules',
      '12 certifications + AI Business specialisation',
      '268 hours · weekday & weekend batches',
      '6-month placement support',
    ],
    bestFor: 'Working professionals & future AI-led marketers.',
  },
];

/* Shown as a strip under the fee cards. Keep honest. */
export const SCHOLARSHIP = {
  amount: 10000,
  eligibility: 'graduate freshers',
  note: 'Applied transparently on your fee sheet — not a fake "today-only" discount.',
};

export const REFUND = {
  windowDays: 14,
  note: 'A 14-day refund window, explained to you in writing before you pay.',
};

/* Fee-vs-value comparison (the second new section). Three columns; the middle
   one is BlueTick and is highlighted. Rows are kept parallel for scanability. */
export const COMPARE = {
  columns: [
    {
      key: 'cheap',
      label: 'Free / cheap online courses',
      priceLine: '₹0 - ₹15,000',
      highlight: false,
    },
    {
      key: 'bluetick',
      label: 'BlueTick Academy',
      priceLine: '₹50,150 - ₹1,23,900 (incl. GST)',
      highlight: true,
    },
    {
      key: 'premium',
      label: 'Premium agency-style bootcamps',
      priceLine: '₹2,00,000 +',
      highlight: false,
    },
  ],
  rows: [
    {
      label: 'What you actually get',
      cheap: 'Recorded videos & a certificate',
      bluetick: 'Live projects, real ad budgets, a portfolio',
      premium: 'Live training, often theory-heavy',
    },
    {
      label: 'Who teaches',
      cheap: 'Pre-recorded, no live mentor',
      bluetick: 'Trainers running live campaigns now',
      premium: 'Mix of practitioners & career trainers',
    },
    {
      label: 'Placement support',
      cheap: 'None',
      bluetick: '6 months, 312 placed in last 4 batches',
      premium: 'Sometimes — rarely published',
    },
    {
      label: 'Hidden costs',
      cheap: 'Upsells, tool & exam add-ons',
      bluetick: 'None — fee is all-inclusive of GST',
      premium: 'Common (tools, certification fees)',
    },
    {
      label: 'Real outcome',
      cheap: 'A badge, rarely a job',
      bluetick: 'A job-ready profile recruiters interview',
      premium: 'Good skills at a heavy price',
    },
  ],
};

/* FAQs tuned to the fee searcher. Order = perceived priority. The first one
   carries the literal head-term answer + the actual numbers (for AEO/GEO). */
export const FAQS = [
  {
    q: 'How much does a digital marketing course cost in Bangalore?',
    a: 'At BlueTick Academy the digital marketing course fees in Bangalore are &#8377;50,150 for the 3-month PCP, &#8377;89,680 for the 5-month PGCP, and &#8377;1,23,900 for the 7-month ELEVATE program &mdash; all figures inclusive of 18% GST. Every fee is shown on this page, not gated behind a callback.',
  },
  {
    q: 'Is there a no-cost EMI option?',
    a: 'Yes. No-cost EMI starts from &#8377;5,000/month for PCP, &#8377;7,500/month for PGCP, and &#8377;10,000/month for ELEVATE. You can start without paying the full fee upfront, and there is no interest added on top.',
  },
  {
    q: 'Are there any hidden costs in the fee?',
    a: 'No. The fee is all-inclusive &mdash; it already covers your certifications, the AI tools used in class, live project budgets, and 6 months of placement support. The 18% GST is included in the number you see, so the price you see is the price you pay.',
  },
  {
    q: 'Do you offer scholarships?',
    a: 'Yes &mdash; up to &#8377;10,000 off for graduate freshers. It is applied transparently on your fee sheet, not dressed up as a fake "today-only" discount that resets tomorrow.',
  },
  {
    q: 'Why pay this when there are ₹10,000 online courses?',
    a: 'Cheap courses teach concepts and hand you a badge. They do not get you hired. BlueTick fees buy live projects with real ad budgets, a recruiter-ready portfolio, 12 certifications, and 6 months of placement support &mdash; the things that actually convert into a job offer. Weigh the fee against the outcome, not against the cheapest option.',
  },
  {
    q: 'Is the fee worth it — what is the ROI?',
    a: 'Across our last 4 batches (312 students) the average starting package was &#8377;5.6 LPA, with a floor of &#8377;3.2 LPA and a ceiling of &#8377;22 LPA at Flipkart. At the average salary, the PGCP fee pays itself back in under two months of your first role.',
  },
  {
    q: 'What if I join and it is not for me?',
    a: 'There is a 14-day refund window, which we explain to you in writing before you pay. We would rather you not join than join and regret it.',
  },
  {
    q: 'Can I see the full fee breakdown without a sales call?',
    a: 'Yes. The full per-track fees, GST, EMI and scholarship are all on this page. If you want an itemised PDF, drop your number and we will WhatsApp it within minutes &mdash; no call required.',
  },
];

export const HERO = {
  // H1 (smaller eyebrow font, like the homepage). Kept as the exact head term.
  h1: 'Know your Digital Marketing Course fees in Bangalore in 2026 – Placement-First',
  // The "Transparent fees" line that now sits below the course title.
  chip: 'Transparent fees · No-cost EMI · GST included',
  // Four short proof chips (homepage chip layout).
  proofs: [
    'All fees on this page, incl. 18% GST',
    'No-cost EMI from ₹5,000/mo',
    'Fee pays back in ~2 months',
    'Up to ₹10,000 scholarship',
  ],
};

export const META = {
  title:
    'Digital Marketing Course Fees in Bangalore 2026 | BlueTick',
  description:
    'Digital marketing course fees in Bangalore, shown upfront: PCP ₹50,150, PGCP ₹89,680, ELEVATE ₹1,23,900 (incl. GST). No-cost EMI from ₹5,000/month, scholarships, and the real salary ROI. No callback needed to see the price.',
  canonical:
    'https://bluetickacademy.com/digital-marketing-course-fees-bangalore/',
};
