'use client';

import { useEffect, useRef, useState } from 'react';

export default function TypewriterHeadline({ text, className, delay = 0 }) {
  const spanRef = useRef(null);
  const [progress, setProgress] = useState(1);
  const [showCursor, setShowCursor] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setProgress(1);
      setDone(true);
      return;
    }

    setProgress(0);
    setShowCursor(true);

    const charDuration = 45;
    const totalChars = text.length;
    let startTime = null;
    let rafId;

    const timeout = setTimeout(() => {
      const step = (now) => {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;
        const chars = Math.min(Math.floor(elapsed / charDuration), totalChars);
        setProgress(chars / totalChars);

        if (chars < totalChars) {
          rafId = requestAnimationFrame(step);
        } else {
          setTimeout(() => {
            setShowCursor(false);
            setDone(true);
          }, 800);
        }
      };
      rafId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [text, delay]);

  const clipPercent = done ? 100 : progress * 100;

  return (
    <span className={className} ref={spanRef} style={{ position: 'relative' }}>
      <span
        style={{
          clipPath: `inset(0 ${100 - clipPercent}% 0 0)`,
          display: 'inline-block',
        }}
      >
        {text}
      </span>
      {showCursor && (
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: '3px',
            height: '0.85em',
            background: 'currentColor',
            marginLeft: '2px',
            verticalAlign: 'baseline',
            animation: 'bt-blink 0.7s steps(1) infinite',
          }}
        />
      )}
    </span>
  );
}
