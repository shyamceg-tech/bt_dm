/**
 * near-me.config.js
 * Single source of edit for the /digital-marketing-course-near-me landing page.
 * Address, hours, batches, FAQ copy, and meta — all here so non-engineers
 * can update without touching component code.
 */

export const CAMPUS = {
  name: 'BlueTick Academy — Indiranagar Campus',
  addressLine1: '12th Main Road, HAL 2nd Stage',
  addressLine2: 'Indiranagar, Bangalore 560 008',
  city: 'Bangalore',
  state: 'Karnataka',
  pincode: '560008',
  country: 'IN',
  phone: '+91-90000-00000',
  whatsapp: 'https://wa.me/919000000000',
  email: 'admissions@bluetickacademy.com',
  hours: 'Mon–Sat · 10:00 AM – 7:00 PM',
  landmarks: [
    '10-min walk from Indiranagar Metro (Purple Line)',
    'Opposite 100 Feet Road Food Street',
    'Free 2-wheeler parking on campus',
  ],
  /* Google Maps embed URL — replace with verified Place ID embed if needed.
     This default uses a plain query embed so the page renders even without
     a maps API key. */
  mapEmbedUrl:
    'https://www.google.com/maps?q=Indiranagar+Bangalore&output=embed',
  mapsLink: 'https://maps.google.com/?q=BlueTick+Academy+Indiranagar+Bangalore',
  geo: { lat: 12.9719, lng: 77.6412 },
};

/* Upcoming batches. Dates are absolute strings — update monthly.
   `seatsLeft` is shown as-is; keep it honest. */
export const BATCHES = [
  {
    id: 'aug-weekday',
    startDate: '12 Aug 2026',
    schedule: 'Mon–Fri · 10:00 AM – 1:00 PM',
    mode: 'Offline · Indiranagar campus',
    track: 'Professional Certification (PCP)',
    seatsLeft: 6,
    durationWeeks: 20,
  },
  {
    id: 'aug-weekend',
    startDate: '17 Aug 2026',
    schedule: 'Sat–Sun · 10:00 AM – 2:00 PM',
    mode: 'Offline · Indiranagar campus',
    track: 'PG Program (PGCP) — for working professionals',
    seatsLeft: 9,
    durationWeeks: 24,
  },
  {
    id: 'sep-weekday',
    startDate: '09 Sep 2026',
    schedule: 'Mon–Fri · 2:00 PM – 5:00 PM',
    mode: 'Offline · Indiranagar campus',
    track: 'Elevate (advanced specialisation)',
    seatsLeft: 12,
    durationWeeks: 16,
  },
];

/* FAQs tuned for the near-me buyer. Order = perceived priority. */
export const FAQS = [
  {
    q: 'Where exactly is your Indiranagar campus?',
    a: '12th Main Road, HAL 2nd Stage, Indiranagar — a 10-minute walk from Indiranagar Metro station. Free parking on campus. You can walk in Mon–Sat between 10 AM and 7 PM; no appointment needed.',
  },
  {
    q: 'Can I visit before paying?',
    a: 'Yes — and we recommend it. Book a campus visit and we&rsquo;ll show you a live class, introduce you to current students, and walk you through the curriculum. Zero sales pressure.',
  },
  {
    q: 'Is this classroom-only or can I attend online too?',
    a: 'Offline classroom is the default, because placement-readiness needs in-person practice, peer projects, and trainer feedback. Hybrid attendance is allowed if you miss a session — recordings + makeup classes are free.',
  },
  {
    q: 'What are the fees and is there an EMI?',
    a: 'Fees vary by track (PCP / PGCP / Elevate). Full fee + EMI options are shared on the campus visit so you see the same number our students see — no inflated price followed by &ldquo;today only&rdquo; discounts.',
  },
  {
    q: 'How real is the 100% placement record?',
    a: 'Verified across our last 4 batches (312 students). We publish named alumni with their LinkedIn profiles and current employers. Ask on your campus visit and we&rsquo;ll show you the full list.',
  },
  {
    q: 'I&rsquo;m a working professional — will I be able to keep up?',
    a: 'The weekend PGCP batch is built for working professionals. Sat–Sun classes, recorded sessions, weekday office-hours with trainers over WhatsApp, and project deadlines that respect your work calendar.',
  },
  {
    q: 'What if I join and it&rsquo;s not for me?',
    a: 'We have a refund policy for the first 14 days that we&rsquo;ll explain in writing on your campus visit. We&rsquo;d rather you not join than join and regret it.',
  },
  {
    q: 'How is BlueTick different from other Bangalore institutes?',
    a: 'Three things: (1) Our trainers are currently running live ad campaigns, not full-time career trainers. (2) We publish named alumni outcomes — most don&rsquo;t. (3) We&rsquo;re Bangalore-rooted with a 300+ local hiring partner network.',
  },
];

export const META = {
  title:
    'Digital Marketing Course Near Me — Indiranagar, Bangalore | BlueTick Academy',
  description:
    'Looking for a digital marketing course near you in Bangalore? BlueTick Academy&rsquo;s Indiranagar campus runs placement-first, AI-powered batches. Walk in Mon–Sat or book a campus visit.',
  canonical:
    'https://bluetickacademy.com/digital-marketing-course-near-me',
};
