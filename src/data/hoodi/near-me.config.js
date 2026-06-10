/**
 * hoodi/near-me.config.js
 * Single source of edit for the HOODI branch NEAR-ME intent landing page
 * (/hoodi/digital-marketing-course-near-me).
 *
 * This is the Hoodi-branch twin of src/data/near-me.config.js. It exists as a
 * SEPARATE module so the Hoodi Google-Ads landing page can carry real Hoodi
 * location data (ITPL Road address, Hoodi Junction hook, Hoodi geo / map /
 * photos) WITHOUT touching the Indiranagar near-me config or page.
 *
 * NOTE: the Hoodi near-me page is noindex (Google-Ads only) — it is never in the
 * sitemap and never linked internally. The copy is still written honestly for
 * the Hoodi (ITPL Road / Mahadevapura / Whitefield-side) catchment.
 *
 * Real data: Hoodi address, Google page, Google Maps link and coordinates were
 * provided by the client for the Hoodi centre. The hook for this branch is
 * "1-minute walk from Hoodi Junction" (Hoodi has no metro station).
 */

export const CAMPUS = {
  name: 'BlueTick Academy – Hoodi',
  /* Verified street address (client-provided, Hoodi centre). */
  addressLine1: '2nd Floor, 104, ITPL Road',
  addressLine2: 'Hoodi, Mahadevapura, Bengaluru, Karnataka 560048',
  city: 'Bangalore',
  state: 'Karnataka',
  pincode: '560048',
  country: 'IN',
  phone: '+91 9606 9955 25',
  whatsapp:
    'https://wa.me/919606995525?text=Hi%20BlueTick%2C%20I%27m%20looking%20for%20the%20offline%20digital%20marketing%20course%20at%20your%20Hoodi%20centre.',
  email: 'academics@bluetickacademy.com',

  /* Walk-in / enquiry hours — front-desk hours for visits (batches run Mon–Fri,
     see SCHEDULE). */
  hours: 'Mon–Sat · 9:30 AM – 7:00 PM',

  /* THE hook for this branch — Hoodi Junction (no metro at Hoodi). */
  junction: 'Hoodi Junction',
  walkFromJunction: '1-minute walk from Hoodi Junction',

  landmarks: [
    '1-minute walk from Hoodi Junction',
    'On ITPL Road, Hoodi — in the heart of Mahadevapura / Whitefield-side Bangalore',
    'Walk in and watch a live class before you decide',
  ],

  /* Map: keyless coordinate embed (renders without an API key); the
     "Get Directions" button uses the exact short link the client provided. */
  mapEmbedUrl:
    'https://www.google.com/maps?q=12.992357641264771,77.71726353514477&z=16&output=embed',
  mapsLink: 'https://maps.app.goo.gl/n9YoAGkg7eaGbr398',
  /* Google Business / Google page (reviews) — client-provided for Hoodi. */
  gbpLink: 'https://share.google/UNhAyPl39n7JKIXqq',

  geo: { lat: 12.992357641264771, lng: 77.71726353514477 },

  /* Areas within easy reach of the Hoodi centre — used by the location section
     + the SEO article so "near me" queries from these localities map here. */
  nearbyAreas: [
    'Whitefield',
    'Mahadevapura',
    'Marathahalli',
    'Brookefield',
    'KR Puram',
    'ITPL / EPIP Zone',
    'Kundalahalli',
    'Varthur',
  ],

  /* Honest scarcity — capped classroom size, no fabricated "seats left". */
  seatCap: 25,
};

/* The REAL recurring timetable (Mon–Fri). Offline is the default / hero option
   for this intent; online is the "can't make it in" fallback. */
export const SCHEDULE = {
  seatCap: CAMPUS.seatCap,
  newBatchNote: 'New batch begins every month — seats fill on a first-come basis.',
  groups: [
    {
      id: 'offline',
      label: 'Offline · Hoodi Classroom',
      tag: 'In-person',
      days: 'Monday – Friday',
      note: 'Live, in the room — a minute from Hoodi Junction on ITPL Road.',
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

/* FAQs tuned for the "digital marketing course near me" buyer in the Hoodi /
   Mahadevapura / Whitefield-side catchment. Question-first for AEO; order =
   perceived priority. HTML entities are fine here (rendered via innerHTML). */
export const FAQS = [
  {
    q: 'Is there a digital marketing course near me in Hoodi, Bangalore?',
    a: 'Yes. BlueTick Academy&rsquo;s Hoodi centre is at 2nd Floor, 104, ITPL Road, Hoodi, Mahadevapura, Bengaluru 560048 &mdash; a <strong>1-minute walk from Hoodi Junction</strong>. You can walk in during front-desk hours and watch a live class before you decide; no appointment needed.',
  },
  {
    q: 'Do you offer in-person classes near me, or only online?',
    a: 'Both &mdash; with in-person classroom as the default. We run offline digital marketing classes Mon&ndash;Fri at 7:30&ndash;9:00 AM, 10:00 AM&ndash;12:00 PM and 12:30&ndash;2:00 PM at our Hoodi centre. Live online classes (7:30&ndash;9:00 AM and 7:30&ndash;9:30 PM) are available for the days you can&rsquo;t come in.',
  },
  {
    q: 'How do I reach your Hoodi centre from Whitefield, Marathahalli or KR Puram?',
    a: 'We&rsquo;re on ITPL Road, right by Hoodi Junction. From Whitefield, Brookefield and the ITPL/EPIP zone it&rsquo;s a short ride down ITPL Road; Marathahalli, Mahadevapura and KR Puram are minutes away. Hoodi is also a stop on the suburban rail line, so many students come in by train and walk a minute.',
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
    a: 'Two options. The <strong>7:30&ndash;9:00 AM in-person batch</strong> lets you attend at the Hoodi centre before work &mdash; ideal if you work in the ITPL / Whitefield tech parks. If the commute doesn&rsquo;t fit some days, the <strong>7:30&ndash;9:30 PM live online batch</strong> covers the same syllabus after hours. Either way you get recordings and trainer office-hours so you never fall behind.',
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

/* Photos for the Hoodi centre. The three real Hoodi photos (Hoodi 01/02/03)
   replace the interior / classroom / reception tiles; the remaining four tiles
   reuse existing BlueTick class photos with location-neutral alt text (we don't
   claim they were shot at Hoodi). Files live in /public/img/near-me/. w/h are
   set on <img> to prevent layout shift (CLS); object-fit:cover handles ratio.
   `tile` drives the mosaic span. */
export const GALLERY = [
  {
    src: '/img/near-me/live-digital-marketing-class-indiranagar-bangalore.webp',
    alt: 'Students in a live offline digital marketing class at BlueTick Academy, Bangalore',
    caption: 'A live batch, mid-session',
    w: 800, h: 606, tile: 'feature',
  },
  {
    src: '/img/near-me/Hoodi%2001.webp',
    alt: 'Inside BlueTick Academy’s Hoodi centre on ITPL Road, a minute from Hoodi Junction',
    caption: 'A minute from Hoodi Junction',
    w: 600, h: 800, tile: 'tall',
  },
  {
    src: '/img/near-me/Hoodi%2002.webp',
    alt: 'The offline digital marketing classroom at BlueTick Academy, Hoodi',
    caption: 'The room you’ll learn in',
    w: 600, h: 450, tile: 'std',
  },
  {
    src: '/img/near-me/Hoodi%2003.webp',
    alt: 'Reception and BlueTick Academy signage at the Hoodi centre, Bangalore',
    caption: 'Yes — a real reception you can walk into',
    w: 600, h: 450, tile: 'std',
  },
  {
    src: '/img/near-me/digital-marketing-hands-on-session-indiranagar.webp',
    alt: 'Students in a hands-on digital marketing session at BlueTick Academy',
    caption: 'Hands-on, not just slides',
    w: 800, h: 361, tile: 'wide',
  },
  {
    src: '/img/near-me/digital-marketing-students-trainer-indiranagar.webp',
    alt: 'Digital marketing students with their trainer at BlueTick Academy',
    caption: 'You and a trainer who knows your name',
    w: 600, h: 386, tile: 'std',
  },
  {
    src: '/img/near-me/digital-marketing-batch-indiranagar-bangalore.webp',
    alt: 'A digital marketing course batch at BlueTick Academy, Bangalore',
    caption: 'Your batchmates and network',
    w: 800, h: 452, tile: 'std',
  },
];

/* "What your free campus visit looks like" — de-risks the local first step. */
export const VISIT = {
  steps: [
    {
      n: 1,
      title: 'Come to ITPL Road',
      body: 'We’re a 1-minute walk from Hoodi Junction. Walk in during the day, or book a 30-minute slot so a counsellor is free just for you.',
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
     then the two strongest local signals (Hoodi + Bangalore). */
  title: 'Digital Marketing Course Near Me in Hoodi, Bangalore',
  /* ~155 chars; head term first, then the near-me differentiators (Hoodi
     Junction, in-person, placement) and the small ask. */
  description:
    'Digital marketing course near you in Hoodi, Bangalore — a minute from Hoodi Junction on ITPL Road. Live in-person classes, placement-first. Walk in or book a free visit.',
  canonical: 'https://bluetickacademy.com/hoodi/digital-marketing-course-near-me/',
};
