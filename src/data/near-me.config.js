/**
 * near-me.config.js
 * Single source of edit for the NEAR-ME intent landing page
 * (/digital-marketing-course-near-me).
 *
 * Targets the "digital marketing course near me" Google Ads ad group. Dominant
 * volume (~80%) sits on the first two terms:
 *   [digital marketing course near me] · [digital marketing classes near me]
 * Strong supporting terms:
 *   [digital marketing institute near me] · [digital marketing training near me]
 *   [digital marketing course in Indiranagar (Bangalore)] · [offline … in Bangalore]
 *
 * NOTE: CAMPUS is ALSO consumed by the home page + best-page JSON-LD (address /
 * geo / email / phone) — keep those fields correct and consistent.
 *
 * Strategic spine for this intent (do not soften):
 *   1. Confirm the search in 3 seconds: "near you" + Indiranagar + 1-min-from-Metro.
 *   2. Sell location like a feature — proximity is the search filter.
 *   3. Prove the place is real (address, map, photos, walk-in).
 *   4. First ask is small + local: visit / demo, not "enrol now".
 *
 * Real data sourced from the client's contact page + the Maps/GBP links they
 * provided. Items marked [CONFIRM] are sensible defaults to verify.
 */

export const CAMPUS = {
  name: 'BlueTick Academy – Indiranagar',
  /* Verified street address (from the live contact page). */
  addressLine1: '2nd Floor, 545, Chinmaya Mission Hospital Road (CMH Road)',
  addressLine2: 'Indiranagar, Bangalore, Karnataka 560038',
  city: 'Bangalore',
  state: 'Karnataka',
  pincode: '560038',
  country: 'IN',
  phone: '+91 9606 9955 25',
  whatsapp:
    'https://wa.me/919606995525?text=Hi%20BlueTick%2C%20I%27m%20looking%20for%20the%20offline%20digital%20marketing%20course%20at%20your%20Indiranagar%20centre.',
  email: 'academics@bluetickacademy.com',

  /* [CONFIRM] Walk-in / enquiry hours. Batches run Mon–Fri (see SCHEDULE);
     these are front-desk hours for visits. Adjust if Saturday is closed. */
  hours: 'Mon–Sat · 9:30 AM – 7:00 PM',

  /* THE hook for this intent — the client's stated USP. */
  metroLine: 'Indiranagar Metro · Purple Line',
  walkFromMetro: '1-minute walk from Indiranagar Metro Station',

  landmarks: [
    '1-minute walk from Indiranagar Metro Station (Purple Line)',
    'On CMH Road, Indiranagar — the heart of east Bangalore',
    'Walk in and watch a live class before you decide',
  ],

  /* Map: iframe uses the verified place embed from the contact page (renders
     without an API key); the "Get Directions" button uses the exact short
     link the client provided. */
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.4849772733655!2d77.64194487358917!3d12.978360814733026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16afaed3e29b%3A0x1cebb35d47157387!2s545%2C%20Chinmaya%20Mission%20Hospital%20Rd%2C%20Indira%20Nagar%201st%20Stage%2C%20Hoysala%20Nagar%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e1!3m2!1sen!2sin!4v1742717548956!5m2!1sen!2sin',
  mapsLink: 'https://maps.app.goo.gl/vxYSfD1yDfREL98f7',
  /* Google Business Profile (reviews) — client-provided. */
  gbpLink: 'https://share.google/IJ8c1RQwPHy381ue4',

  geo: { lat: 12.9781879, lng: 77.6377295 },

  /* Areas within easy reach — used by the location section + the SEO article
     so "near me" queries from these localities map to this page. */
  nearbyAreas: [
    'Koramangala',
    'HSR Layout',
    'Domlur',
    'CV Raman Nagar',
    'Jeevan Bhima Nagar',
    'Old Airport Road',
    'Marathahalli',
    'Whitefield (direct on the Purple Line)',
  ],

  /* Honest scarcity — capped classroom size, no fabricated "seats left". */
  seatCap: 25, // [CONFIRM] classroom cap per offline batch
};

/* The REAL recurring timetable the client provided (Mon–Fri).
   Replaces the previous fabricated dated-cohort list. Offline is the default /
   hero option for this intent; online is the "can't make it in" fallback. */
export const SCHEDULE = {
  seatCap: CAMPUS.seatCap,
  newBatchNote: 'New batch begins every month — seats fill on a first-come basis.',
  groups: [
    {
      id: 'offline',
      label: 'Offline · Indiranagar Classroom',
      tag: 'In-person',
      days: 'Monday – Friday',
      note: 'Live, in the room — 1 minute from Indiranagar Metro.',
      featured: true,
      slots: [
        { time: '7:30 – 9:00 AM', best: 'Before work — popular with professionals' },
        { time: '10:00 AM – 12:00 PM', best: 'Mid-morning — freshers & full-timers' },
        { time: '12:30 – 2:00 PM', best: 'Early afternoon batch' },
      ],
    },
    {
      id: 'online',
      label: 'Online · Live (instructor-led)',
      tag: 'Live online',
      days: 'Monday – Friday',
      note: 'For the days you can’t come in — live, not recorded playback.',
      featured: false,
      slots: [
        { time: '7:30 – 9:00 AM', best: 'Early morning, before the day starts' },
        { time: '7:30 – 9:30 PM', best: 'Evening — after work or college' },
      ],
    },
  ],
};

/* FAQs tuned for the "digital marketing course near me" buyer. Question-first
   for AEO; order = perceived priority. The near-me / classes-near-me / institute
   phrasings carry the cluster; offline is answered factually, not re-argued.
   HTML entities are fine here (rendered via innerHTML). */
export const FAQS = [
  {
    q: 'Is there a digital marketing course near me in Indiranagar, Bangalore?',
    a: 'Yes. BlueTick Academy&rsquo;s centre is at 2nd Floor, 545, CMH Road, Indiranagar, Bangalore 560038 &mdash; a <strong>1-minute walk from Indiranagar Metro Station</strong> on the Purple Line. You can walk in during front-desk hours and watch a live class before you decide; no appointment needed.',
  },
  {
    q: 'Do you offer in-person classes near me, or only online?',
    a: 'Both &mdash; with in-person classroom as the default. We run offline digital marketing classes Mon&ndash;Fri at 7:30&ndash;9:00 AM, 10:00 AM&ndash;12:00 PM and 12:30&ndash;2:00 PM at our Indiranagar centre. Live online classes (7:30&ndash;9:00 AM and 7:30&ndash;9:30 PM) are available for the days you can&rsquo;t come in.',
  },
  {
    q: 'How do I reach your centre from Whitefield, Koramangala or HSR?',
    a: 'We&rsquo;re on CMH Road, right by Indiranagar Metro. From Whitefield, Baiyappanahalli or anywhere on the Purple Line you can come straight by metro and walk a minute. Koramangala, HSR, Domlur and Old Airport Road are a short cab/auto away. Students travel in daily from across east and south-east Bangalore.',
  },
  {
    q: 'Can I visit the centre before paying anything?',
    a: 'Yes &mdash; and we recommend it. Book a free visit and we&rsquo;ll show you a live class, introduce you to current students, and walk you through the curriculum and fees. Zero sales pressure.',
  },
  {
    q: 'Are these digital marketing classes good for freshers and beginners?',
    a: 'Yes. No coding and no prior marketing experience is needed. Most learners are freshers, final-year students, job seekers and working professionals switching careers &mdash; the classroom format, with a trainer who knows your name, is built exactly for people starting out.',
  },
  {
    q: 'I&rsquo;m working &mdash; is there a class near me that fits around a job?',
    a: 'Two options. The <strong>7:30&ndash;9:00 AM in-person batch</strong> lets you attend at the Indiranagar centre before work. If the commute doesn&rsquo;t fit some days, the <strong>7:30&ndash;9:30 PM live online batch</strong> covers the same syllabus after hours. Either way you get recordings and trainer office-hours so you never fall behind.',
  },
  {
    q: 'How real is the placement record?',
    a: 'Verified across our last 4 batches. We publish named alumni with their LinkedIn profiles and current employers &mdash; ask on your visit and we&rsquo;ll show you the full list and the offer letters. If a number isn&rsquo;t verifiable, it shouldn&rsquo;t earn your trust.',
  },
  {
    q: 'What are the fees, and is there an EMI option?',
    a: 'Fees vary by track. The full fee and EMI plan are shared up front on your visit &mdash; the same number every student sees, with no inflated price followed by a &ldquo;today-only&rdquo; discount.',
  },
  {
    q: 'How big are the batches?',
    a: 'Classroom batches are capped so trainers can give every learner named feedback and 1:1 attention &mdash; not a hall of 80+. You get mentorship, not a lecture you could have watched on YouTube.',
  },
];

/* Real photos of the Indiranagar centre (the #1 trust lever for near-me
   intent). Files live in /public/img/near-me/ with keyword-rich names for
   image SEO. w/h are intrinsic dimensions — set on <img> to prevent layout
   shift (CLS) and protect page-speed. `tile` drives the mosaic span. */
export const GALLERY = [
  {
    src: '/img/near-me/live-digital-marketing-class-indiranagar-bangalore.webp',
    alt: 'Students in a live offline digital marketing class at BlueTick Academy, Indiranagar, Bangalore',
    caption: 'A live batch, mid-session',
    w: 800, h: 606, tile: 'feature',
  },
  {
    src: '/img/near-me/bluetick-academy-indiranagar-interior.webp',
    alt: 'Inside BlueTick Academy’s Indiranagar centre, a minute from the metro',
    caption: '1 minute from the metro',
    w: 600, h: 800, tile: 'tall',
  },
  {
    src: '/img/near-me/digital-marketing-classroom-indiranagar.webp',
    alt: 'The offline digital marketing classroom at BlueTick Academy, Indiranagar',
    caption: 'The room you’ll learn in',
    w: 600, h: 450, tile: 'std',
  },
  {
    src: '/img/near-me/bluetick-academy-indiranagar-reception.webp',
    alt: 'Reception and BlueTick Academy signage at the Indiranagar centre, Bangalore',
    caption: 'Yes — a real reception you can walk into',
    w: 600, h: 450, tile: 'std',
  },
  {
    src: '/img/near-me/digital-marketing-hands-on-session-indiranagar.webp',
    alt: 'Students in a hands-on digital marketing session at the Indiranagar classroom',
    caption: 'Hands-on, not just slides',
    w: 800, h: 361, tile: 'wide',
  },
  {
    src: '/img/near-me/digital-marketing-students-trainer-indiranagar.webp',
    alt: 'Digital marketing students with their trainer at BlueTick Academy, Indiranagar',
    caption: 'You and a trainer who knows your name',
    w: 600, h: 386, tile: 'std',
  },
  {
    src: '/img/near-me/digital-marketing-batch-indiranagar-bangalore.webp',
    alt: 'A digital marketing course batch at BlueTick Academy’s Indiranagar centre, Bangalore',
    caption: 'Your batchmates and network',
    w: 800, h: 452, tile: 'std',
  },
];

/* "What your free campus visit looks like" — de-risks the local first step.
   Designed for the buyer who has already decided on offline and just wants to
   come see the place. */
export const VISIT = {
  steps: [
    {
      n: 1,
      title: 'Come to CMH Road',
      body: 'We’re a 1-minute walk from Indiranagar Metro. Walk in during the day, or book a 30-minute slot so a counsellor is free just for you.',
    },
    {
      n: 2,
      title: 'Sit inside a live class',
      body: 'Watch a real batch in session - the trainer, the live projects, the room. Not a slideshow, not a sales pitch.',
    },
    {
      n: 3,
      title: 'Get the real numbers',
      body: 'Full fee, EMI options and the next batch timings - in writing. The same number every student sees, no “today-only” discount.',
    },
    {
      n: 4,
      title: 'Decide with zero pressure',
      body: 'Join the batch that fits, or take your time. No deposit on the day, no hard sell. We’d rather you be sure.',
    },
  ],
};

export const META = {
  /* ≤60 chars so Google shows the full title — leads with the exact head term,
     then the two strongest local signals (Indiranagar + Bangalore). */
  title: 'Digital Marketing Course Near Me in Indiranagar, Bangalore',
  /* ~155 chars so it isn't truncated in the SERP; head term first, then the
     near-me differentiators (metro, in-person, placement) and the small ask. */
  description:
    'Digital marketing course near you in Indiranagar, Bangalore — 1 min from the Metro. Live in-person classes, placement-first. Walk in or book a free visit.',
  canonical: 'https://bluetickacademy.com/digital-marketing-course-near-me/',
};
