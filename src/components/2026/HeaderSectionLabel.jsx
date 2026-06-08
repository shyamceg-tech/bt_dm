'use client';

/**
 * HeaderSectionLabel.jsx — mobile-only "current section" label.
 *
 * When the page is scrolled, the header collapses to a single row: the logo is
 * swapped for the name of the section currently in view (Placements, Courses,
 * Curriculum …) and the separate sticky section-nav strip fades away (see
 * SectionNav.module.css). This reclaims the vertical space the two stacked
 * sticky bars used to take on small screens.
 *
 * Desktop is unaffected — the label is `display:none` ≥1024px.
 *
 * Cost: one IntersectionObserver over the six section anchors. No scroll
 * listener, no per-frame work. Mirrors the rootMargin SectionNav already uses
 * so the label and the (top-of-page) strip agree on what is "active". The
 * label only replaces the logo once a section is actually active (the
 * `has_section` class), so the header is never left blank mid-hero.
 */

import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const SECTIONS = [
  { id: 'placements', label: 'Placements' },
  { id: 'section-14', label: 'Courses' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'projects', label: 'Projects' },
  { id: 'trainers', label: 'Trainers' },
  { id: 'section-19', label: 'FAQs' },
];

export default function HeaderSectionLabel() {
  const [label, setLabel] = useState('');

  useEffect(() => {
    const labelFor = new Map();
    const els = [];
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) {
        labelFor.set(el, s.label);
        els.push(el);
      }
    });
    if (!els.length) return;

    const header = document.getElementById('site-header');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const next = labelFor.get(entry.target) || '';
            setLabel(next);
            if (header) header.classList.toggle(styles.has_section, !!next);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <span className={styles.section_label} aria-hidden="true">
      {label}
    </span>
  );
}
