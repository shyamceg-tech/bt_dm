/**
 * CtaBanner.jsx — BlueTick 2026 Refresh
 *
 * RSC. Generic mid-page CTA banner for all four variants in the design:
 *   #1 aurora       (Batch 2E)
 *   #2 sunset       (Batch 2I)
 *   #3 cosmic       (Batch 2I — button-only via <CtaButton>)
 *   #4 mintelectric (Batch 2I — scarcity sub via <ScarcityHl>)
 *
 * The component itself is pure server markup. Variant-specific styling
 * (background gradient, italic `<em>` color) comes from the variant class
 * on the section. Form / button content is slotted via children.
 *
 * Exports three named helpers in addition to the default:
 *   - <CtaButton href>      ← anchor styled like the orange pulse-ring CTA
 *                              used by banner #3 (button-only banner).
 *   - <ScarcityHl>          ← inline amber-on-dark scarcity chip used in
 *                              banner #4's sub line.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 7395–7420 (#1),
 * 8318–8346 (#2), 8920–8934 (#3), 9176–9204 (#4).
 */

import styles from './CtaBanner.module.css';

const VARIANT_CLASS = {
  aurora:       'variant_aurora',
  sunset:       'variant_sunset',
  cosmic:       'variant_cosmic',
  mintelectric: 'variant_mintelectric',
  placements:   'variant_placements',
};

export default function CtaBanner({
  variant = 'aurora',
  id,
  eyebrow,
  title,
  sub,
  subVariant,
  placed,
  meta,
  children,
}) {
  const variantClass = styles[VARIANT_CLASS[variant] ?? VARIANT_CLASS.aurora];
  const subClass = [
    styles.sub,
    subVariant === 'scarcity' ? styles.sub_scarcity : '',
  ].filter(Boolean).join(' ');

  return (
    <aside
      className={`${styles.banner} ${variantClass}`}
      aria-labelledby={id ? `${id}-h` : undefined}
    >
      <div className={styles.inner}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}

        <h2 id={id ? `${id}-h` : undefined} className={styles.title}>
          {title}
        </h2>

        {sub && <p className={subClass}>{sub}</p>}
        {placed && <p className={styles.placed}>{placed}</p>}

        {children}

        {meta && <p className={styles.meta}>{meta}</p>}
      </div>
    </aside>
  );
}

/* ─── <CtaButton href="...">START…</CtaButton> ─────────────────────────────
   Used in CTA Banner #3 (cosmic) which has no form, just a button. The
   orange pulse-ring + shimmer animations live in CtaBanner.module.css. */
export function CtaButton({ href, children, ariaLabel }) {
  return (
    <a className={styles.cta_btn} href={href} aria-label={ariaLabel}>
      {children}
      <span className={styles.cta_btn_arrow} aria-hidden="true">→</span>
    </a>
  );
}

/* ─── <ScarcityHl>9 seats left</ScarcityHl> ───────────────────────────────
   Inline amber-on-dark pill used in CTA Banner #4's sub line. */
export function ScarcityHl({ children }) {
  return <span className={styles.scarcity_hl}>{children}</span>;
}
