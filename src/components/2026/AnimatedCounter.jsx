'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1200,
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setValue(target);
      setStarted(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setStarted(true);

        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(eased * target);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  const display = started
    ? decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value)
    : decimals > 0
      ? (0).toFixed(decimals)
      : 0;

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
