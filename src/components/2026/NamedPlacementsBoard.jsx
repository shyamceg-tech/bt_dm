'use client';

/**
 * NamedPlacementsBoard.jsx — BlueTick 2026 Refresh
 *
 * Small client island for the filter-by-batch behavior. Holds the active
 * filter in useState; filters the 9-card list client-side; renders pills +
 * grid + (mobile only) scroll hint.
 *
 * Why this is in its own boundary: the parent NamedPlacements section
 * (heading + subline) stays RSC. Only this 9-card list + 5 filter pills
 * hydrate. Total client cost: 1 useState, no effects, no listeners.
 */

import { useState } from 'react';
import Image from 'next/image';
import styles from './NamedPlacements.module.css';

/* ─── Alumni data (Excel + retained students) ─────────────────────────── */
const ALUMNI = [
  {
    photo: '/img/photo/5.jpg',
    name: 'Bright Prabahar',
    batch: "Mar'26",
    batchKey: 'mar-26',
    role: 'CRO Analyst',
    company: 'Ola',
    pkg: '₹18–19 LPA range',
  },
  {
    photo: '/img/photo/1.jpg',
    name: 'Jeevan',
    batch: "Feb'26",
    batchKey: 'feb-26',
    role: 'Performance Marketing Analyst',
    company: 'Flipkart',
    pkg: '₹7–9 LPA range',
  },
  {
    photo: '/img/photo/2.jpg',
    name: 'Keerthi Vasan',
    batch: "Mar'26",
    batchKey: 'mar-26',
    role: 'Marketing Automation Specialist',
    company: 'Ernst & Young',
    pkg: '₹6–8 LPA range',
  },
  {
    photo: '/img/photo/3.jpg',
    name: 'Harini P',
    batch: "Jan'26",
    batchKey: 'jan-26',
    role: 'Performance Marketing Specialist',
    company: 'Amazon',
    pkg: '₹7–9 LPA range',
  },
  {
    photo: '/img/photo/krishna.webp',
    name: 'Krishna',
    batch: "Feb'26",
    batchKey: 'feb-26',
    role: 'Digital Marketing Executive',
    company: 'The Website Makers',
    pkg: '₹4–5 LPA range',
  },
  {
    photo: '/img/photo/prithvi.webp',
    name: 'Prithvi',
    batch: "Jan'26",
    batchKey: 'jan-26',
    role: 'Performance Marketing Executive',
    company: 'Responsive Media Tech Services',
    pkg: '₹5–6 LPA range',
  },
  {
    photo: '/img/photo/4.jpg',
    name: 'Lekha',
    batch: "Apr'26",
    batchKey: 'apr-26',
    role: 'SEO Strategist',
    company: 'Velvet',
    pkg: '₹6–8 LPA range',
  },
  {
    photo: '/img/photo/karthik.webp',
    name: 'Karthik',
    batch: "Apr'26",
    batchKey: 'apr-26',
    role: 'Growth Marketer',
    company: 'Brandcrest',
    pkg: '₹5–6 LPA range',
  },
  {
    photo: '/img/photo/sanam.webp',
    name: 'Sanam',
    batch: "Feb'26",
    batchKey: 'feb-26',
    role: 'Social Media Marketing Executive',
    company: 'Hashconnect',
    pkg: '₹4–5 LPA range',
  },
  {
    photo: '/img/photo/6.jpg',
    name: 'Priyal Bather',
    batch: "May'26",
    batchKey: 'may-26',
    role: 'Digital Marketing Expert',
    company: 'Decode',
    pkg: '₹7–9 LPA range',
  },
  {
    photo: '/img/photo/8.jpg',
    name: 'Akash',
    batch: "May'26",
    batchKey: 'may-26',
    role: 'Growth Marketer',
    company: 'Adsreverb',
    pkg: '₹9–10 LPA range',
  },
  {
    photo: '/img/photo/7.jpg',
    name: 'Atul',
    batch: "Apr'26",
    batchKey: 'apr-26',
    role: 'Google Ads Specialist',
    company: 'HCG',
    pkg: '₹6–8 LPA range',
  },
  {
    photo: '/img/photo/9.jpg',
    name: 'Girish',
    batch: "Jan'26",
    batchKey: 'jan-26',
    role: 'Email & Lifecycle Marketing Specialist',
    company: 'Edumerge',
    pkg: '₹6–8 LPA range',
  },
  {
    photo: '/img/photo/12.jpg',
    name: 'Edwin',
    batch: "Mar'26",
    batchKey: 'mar-26',
    role: 'Social Media Marketing Specialist',
    company: 'Foxpro',
    pkg: '₹6–8 LPA range',
  },
  {
    photo: '/img/photo/11.jpg',
    name: 'Shyam',
    batch: "Feb'26",
    batchKey: 'feb-26',
    role: 'Digital Marketing Executive',
    company: 'Presidency College',
    pkg: '₹6–8 LPA range',
  },
  {
    photo: '/img/photo/hirok.webp',
    name: 'Hirok',
    batch: "Apr'26",
    batchKey: 'apr-26',
    role: 'Performance Marketing Executive',
    company: 'Responsive Media Tech Services',
    pkg: '₹5–6 LPA range',
  },
  {
    photo: '/img/photo/rakshitha.webp',
    name: 'Rakshitha',
    batch: "Mar'26",
    batchKey: 'mar-26',
    role: 'SEO Executive',
    company: 'Cojective',
    pkg: '₹4–5 LPA range',
  },
  {
    photo: '/img/photo/harshavarthini.webp',
    name: 'Harshavarthini',
    batch: "May'26",
    batchKey: 'may-26',
    role: 'Content Marketing Executive',
    company: 'Ralecon',
    pkg: '₹4–5 LPA range',
  },
  {
    photo: '/img/photo/shambhram.webp',
    name: 'Shambhram',
    batch: "Jan'26",
    batchKey: 'jan-26',
    role: 'Google Ads Specialist',
    company: 'Cojective',
    pkg: '₹4–5 LPA range',
  },
  {
    photo: '/img/photo/sirishs.webp',
    name: 'Sirisha',
    batch: "Mar'26",
    batchKey: 'mar-26',
    role: 'Digital Marketing Coordinator',
    company: 'Ralecon',
    pkg: '₹4–5 LPA range',
  },
  {
    photo: '/img/photo/pankaj.webp',
    name: 'Pankaj',
    batch: "May'26",
    batchKey: 'may-26',
    role: 'Performance Marketer',
    company: 'MindlogicX',
    pkg: '₹4–5 LPA range',
  },
];

/* ─── Filter options (UI label + data key matching alumni.batchKey) ─────── */
const FILTERS = [
  { label: 'All',     key: 'all' },
  { label: "Jan '26", key: 'jan-26' },
  { label: "Feb '26", key: 'feb-26' },
  { label: "Mar '26", key: 'mar-26' },
  { label: "Apr '26", key: 'apr-26' },
  { label: "May '26", key: 'may-26' },
];

export default function NamedPlacementsBoard() {
  const [active, setActive] = useState('all');

  const visible =
    active === 'all'
      ? ALUMNI
      : ALUMNI.filter((a) => a.batchKey === active);

  return (
    <>
      {/* Filter pills (visible ≥768px via CSS) */}
      <div
        className={styles.filters}
        role="group"
        aria-label="Filter by batch"
      >
        {FILTERS.map(({ label, key }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              className={`${styles.filter_pill} ${
                isActive ? styles.filter_pill_active : ''
              }`}
              aria-pressed={isActive}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Alumni grid */}
      <ol className={styles.grid}>
        {visible.map((a) => (
          <li key={a.name} className={styles.card}>
            <div className={styles.photo}>
              <Image
                src={a.photo}
                alt={`${a.name}, BlueTick Academy alumnus`}
                width={144}
                height={144}
                className={styles.photo_img}
              />
            </div>
            <h3 className={styles.name}>{a.name}</h3>
            <p className={styles.batch}>{a.batch}</p>
            <p className={styles.role}>
              {a.role} @{' '}
              <span className={styles.role_company}>{a.company}</span>
            </p>
            <span className={styles.package_pill}>{a.pkg}</span>
          </li>
        ))}

        {/* Closing summary card — total placement proof (no photo) */}
        <li className={`${styles.card} ${styles.card_summary}`}>
          <span className={styles.summary_plus}>+10,000</span>
          <span className={styles.summary_more}>more placed</span>
          <p className={styles.summary_sub}>
            10,000+ students placed over the last 9 years &mdash; and 400+ in
            just the last 3 months.
          </p>
        </li>
      </ol>

      {/* Mobile-only scroll hint */}
      <div className={styles.scroll_hint} aria-hidden="true">
        <span className={styles.scroll_hint_dots}>
          <span /><span /><span /><span />
        </span>
        <span>Swipe for more</span>
        <span className={styles.scroll_hint_arrow}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </>
  );
}
