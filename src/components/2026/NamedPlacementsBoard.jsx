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

/* ─── Alumni data (Phase 1 lines 7313–7375) ─────────────────────────────── */
const ALUMNI = [
  {
    photo: '/img/photo/1.jpg',
    name: 'Jeevan',
    batch: 'May 2025 batch',
    batchKey: 'may-25',
    role: 'Performance Marketing Analyst',
    company: 'Flipkart',
    pkg: '₹7–9 LPA range',
  },
  {
    photo: '/img/photo/2.jpg',
    name: 'Keerthi Vasan',
    batch: 'Aug 2025 batch',
    batchKey: 'aug-25',
    role: 'Marketing Automation Engineer',
    company: 'EY',
    pkg: '₹6–8 LPA range',
  },
  {
    photo: '/img/photo/3.jpg',
    name: 'Harini Pandiaraj',
    batch: 'May 2025 batch',
    batchKey: 'may-25',
    role: 'Performance Marketing Specialist',
    company: 'Amazon',
    pkg: '₹7–9 LPA range',
  },
  {
    photo: '/img/photo/4.jpg',
    name: 'Lekha',
    batch: 'Nov 2025 batch',
    batchKey: 'nov-25',
    role: 'SEO Strategist',
    company: 'E-Commerce',
    pkg: '₹6–8 LPA range',
  },
  {
    photo: '/img/photo/5.jpg',
    name: 'Bright Prabahar',
    batch: 'Aug 2025 batch',
    batchKey: 'aug-25',
    role: 'CRO Analyst',
    company: 'Ola',
    pkg: '₹8–10 LPA range',
  },
  {
    photo: '/img/photo/6.jpg',
    name: 'Priyal Bather',
    batch: 'Feb 2026 batch',
    batchKey: 'feb-26',
    role: 'Customer Experience & Lifecycle',
    company: 'Decode',
    pkg: '₹7–9 LPA range',
  },
  {
    photo: '/img/photo/7.jpg',
    name: 'Atul',
    batch: 'Nov 2025 batch',
    batchKey: 'nov-25',
    role: 'Google Ads Specialist',
    company: 'HCG Care',
    pkg: '₹6–8 LPA range',
  },
  {
    photo: '/img/photo/8.jpg',
    name: 'Akash',
    batch: 'Feb 2026 batch',
    batchKey: 'feb-26',
    role: 'Growth Marketer',
    company: 'Adsreverb',
    pkg: '₹9–12 LPA range',
  },
  {
    photo: '/img/photo/9.jpg',
    name: 'Girish',
    batch: 'May 2025 batch',
    batchKey: 'may-25',
    role: 'Email & Lifecycle Marketing',
    company: 'Edumerge',
    pkg: '₹6–8 LPA range',
  },
];

/* ─── Filter options (UI label + data key matching alumni.batchKey) ─────── */
const FILTERS = [
  { label: 'All',     key: 'all' },
  { label: 'May 25',  key: 'may-25' },
  { label: 'Aug 25',  key: 'aug-25' },
  { label: 'Nov 25',  key: 'nov-25' },
  { label: 'Feb 26',  key: 'feb-26' },
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
