/**
 * PlacementTimeline.jsx — BlueTick 2026 Refresh
 *
 * RSC. Five-stage placement system rendered as a vertical timeline on
 * mobile (rail column + card column) and a horizontal timeline on desktop
 * (5 rail columns / 5 card columns). The blue rail line is composed of
 * per-column ::before pseudo-elements that bridge across the grid gaps.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 8655–8716.
 */

import styles from './PlacementTimeline.module.css';

const STAGES = [
  {
    month: 'Month 1',
    title: 'Foundation + Live Tools',
    body: "Hands-on training on every tool in the stack. By Day 30, you've run your first real Google Ads campaign with a real budget.",
    railVariant: 'first', // first → solid rail starts AT this node
  },
  {
    month: 'Month 2-3',
    title: 'Live Industry Projects',
    body: 'You work on 3 real client briefs from partner agencies. Output goes into a portfolio that hiring managers can actually see.',
    railVariant: null,
  },
  {
    month: 'Month 4',
    title: 'Portfolio + Mock Interviews',
    body: '1:1 portfolio review with a working agency professional. Three rounds of mock interviews including a technical round.',
    railVariant: null,
  },
  {
    month: 'Month 5',
    title: 'Recruiter Introductions',
    body: 'Direct introductions to our 500+ hiring partners in Bangalore. Your profile goes on our internal recruiter board.',
    railVariant: 'last-before-final', // solid rail stops here; gap below is dashed-green
  },
  {
    month: null, // final card has no month label
    title: '6-Month Placement Support',
    body: "Continued recruiter intros and interview support until you're placed. No artificial end date.",
    railVariant: 'final', // dashed-green rail from the gap above to this node
    isFinal: true,
  },
];

function railColClass(railVariant) {
  if (railVariant === 'first') return styles.rail_col_first;
  if (railVariant === 'last-before-final') return styles.rail_col_last_before_final;
  if (railVariant === 'final') return styles.rail_col_final;
  return '';
}

export default function PlacementTimeline() {
  return (
    <section
      id="section-10"
      className={styles.section}
      aria-labelledby="placement-timeline-heading"
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>The Placement System</span>
          <h2 id="placement-timeline-heading" className={styles.heading}>
            The 5-month placement system &mdash; exactly how we get you hired
          </h2>
          <p className={styles.sub}>
            Not a promise. A process. Here&rsquo;s the system that placed 100%
            of our last 4 batches.
          </p>
        </header>

        <div className={styles.timeline} role="list">
          {STAGES.map((stage, idx) => {
            const colClass = styles[`col_${idx + 1}`];
            const cardClass = [
              styles.card,
              colClass,
              stage.isFinal ? styles.card_final : '',
            ]
              .filter(Boolean)
              .join(' ');
            return (
              <Stage
                key={stage.title}
                stage={stage}
                cardClass={cardClass}
                railClass={[styles.rail_col, railColClass(stage.railVariant)]
                  .filter(Boolean)
                  .join(' ')}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Each stage renders as TWO elements: the rail column (always before the
   card) and the card. The CSS Grid arranges them: mobile = 2-col grid
   alternating; desktop = 5 rail cols on row 1, 5 cards on row 2. */
function Stage({ stage, cardClass, railClass }) {
  return (
    <>
      <div className={railClass} aria-hidden="true">
        <div
          className={`${styles.node} ${stage.isFinal ? styles.node_final : ''}`}
        />
      </div>
      <article className={cardClass} role="listitem">
        {stage.month && <p className={styles.month}>{stage.month}</p>}
        <h3 className={styles.card_title}>{stage.title}</h3>
        <p className={styles.card_body}>{stage.body}</p>
      </article>
    </>
  );
}
