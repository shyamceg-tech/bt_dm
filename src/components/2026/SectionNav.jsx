'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SectionNav.module.css';

const TABS = [
  { label: 'Placements', target: '#placements' },
  { label: 'Courses', target: '#section-14' },
  { label: 'Curriculum', target: '#curriculum' },
  { label: 'Projects', target: '#projects' },
  { label: 'Trainers', target: '#trainers' },
  { label: 'FAQs', target: '#section-19' },
];

export default function SectionNav() {
  const [active, setActive] = useState('');
  const navRef = useRef(null);
  const tabRefs = useRef({});

  useEffect(() => {
    const sections = TABS.map((t) =>
      document.querySelector(t.target)
    ).filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const activeTab = tabRefs.current[active];
    if (activeTab && navRef.current) {
      activeTab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [active]);

  const handleClick = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={styles.nav} ref={navRef} aria-label="Section navigation">
      <div className={styles.track}>
        {TABS.map((tab) => (
          <a
            key={tab.target}
            ref={(el) => { tabRefs.current[tab.target] = el; }}
            href={tab.target}
            className={`${styles.tab} ${active === tab.target ? styles.tab_active : ''}`}
            onClick={(e) => handleClick(e, tab.target)}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
