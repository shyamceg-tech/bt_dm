/**
 * SeoGuideFees.jsx — long-form SEO / AEO / GEO content for the fees page.
 *
 * RSC. Native <details>/<summary> accordion (zero JS, pure-CSS toggle). Reuses
 * SeoGuide.module.css for visual parity with the homepage guide. The full prose
 * ships in the initial HTML whether a panel is open or closed, so it is fully
 * indexable and answer-engine readable.
 *
 * Purpose: own the "digital marketing course fees in Bangalore" topic cluster —
 * how much it costs, what is included, EMI, scholarships, fees-vs-ROI, and how
 * to compare fees — with the actual 2026 numbers woven in. Keyword-led headings;
 * bodies are genuinely useful with a light, honest BlueTick pitch.
 *
 * The FAQPage schema lives in <FaqsFees />; this block is editorial content and
 * intentionally carries no second FAQPage entity.
 */

import styles from '../SeoGuide.module.css';

const ITEMS = [
  {
    q: 'How much does a digital marketing course cost in Bangalore? (2026 fees)',
    body: (
      <>
        <p>
          The honest answer to <strong>how much does a digital marketing course cost</strong>{' '}
          in Bangalore: it depends on depth, duration and what is bundled in. Across
          the city, short certificate courses start around ₹40,000, while
          placement-focused programs with live projects and career support run up to
          ₹1.5&ndash;1.6 lakh.
        </p>
        <p>
          At BlueTick Academy the <strong>digital marketing course fees in Bangalore</strong>{' '}
          are published in full, not gated behind a callback:
        </p>
        <ul>
          <li><strong>PCP (3 months):</strong> ₹50,150 &mdash; ₹42,500 course fee + ₹7,650 GST.</li>
          <li><strong>PGCP (5 months):</strong> ₹89,680 &mdash; ₹76,000 course fee + ₹13,680 GST.</li>
          <li><strong>ELEVATE (7 months):</strong> ₹1,23,900 &mdash; ₹1,05,000 course fee + ₹18,900 GST.</li>
        </ul>
        <p>
          Every figure is inclusive of 18% GST, so the number you read is the number
          you pay. No-cost EMI and a graduate-fresher scholarship bring the effective
          cost down further &mdash; both covered below.
        </p>
        <p>
          Why the range across the city? The fee tracks what is bundled in. A short
          certificate course is cheap because it is mostly recorded theory. A
          placement-first program costs more because it funds live ad budgets,
          practitioner trainers, 12 certifications and months of placement support
          &mdash; the parts that actually move you from learner to hired. So when you
          ask <strong>how much does a digital marketing course cost</strong>, the more
          useful question is what each price band is really paying for.
        </p>
      </>
    ),
  },
  {
    q: 'What is included in the fee — and the hidden costs to watch for',
    body: (
      <>
        <p>
          A fee is only meaningful next to what it covers. The most common reason a
          &ldquo;cheap&rdquo; course turns expensive is the add-ons that appear after
          you enrol: certification charges, paid tool subscriptions, exam fees, and
          GST quietly added at checkout.
        </p>
        <p>
          BlueTick&rsquo;s <strong>digital marketing course fees in Bangalore</strong>{' '}
          are all-inclusive. Your fee already covers:
        </p>
        <ul>
          <li>Industry certifications (7 with PCP, 12 with PGCP and ELEVATE).</li>
          <li>The 20&ndash;60+ AI and marketing tools used in class.</li>
          <li>Real ad budgets for your live campaign projects.</li>
          <li>Six months of placement support after the course.</li>
          <li>18% GST &mdash; already in the displayed price.</li>
        </ul>
        <p>
          Before you compare any two institutes on price alone, ask each one for a
          written, itemised fee that names what is included. A slightly higher
          all-inclusive fee is almost always better value than a low headline number
          that grows once you have paid the deposit.
        </p>
        <p>
          A simple test before you pay anywhere: ask for the fee in writing, itemised,
          with GST shown separately. Where institutes lose students&rsquo; trust is the
          gap between a ₹35,000 &ldquo;course fee&rdquo; and the ₹50,000 they actually
          pay once exam fees, tool licences and tax are added on. An all-inclusive
          number like BlueTick&rsquo;s removes that gap entirely &mdash; what you are
          quoted is what leaves your account, nothing more.
        </p>
      </>
    ),
  },
  {
    q: 'No-cost EMI: how to pay for the course without the full amount upfront',
    body: (
      <>
        <p>
          For most students and job seekers, affordability is the real barrier &mdash;
          not the headline fee. That is why BlueTick offers no-cost EMI on every
          track, so you can start without arranging the full amount upfront and
          without paying interest on top.
        </p>
        <ul>
          <li><strong>PCP:</strong> no-cost EMI from ₹5,000/month.</li>
          <li><strong>PGCP:</strong> no-cost EMI from ₹7,500/month.</li>
          <li><strong>ELEVATE:</strong> no-cost EMI from ₹10,000/month.</li>
        </ul>
        <p>
          &ldquo;No-cost&rdquo; means exactly that &mdash; the EMI total equals the
          course fee, with no financing charge added. It is a practical way to align
          the cost of learning with the income you will earn once you are placed,
          rather than paying a large sum before your new salary starts. Your advisor
          will walk you through eligibility and the exact monthly plan in writing,
          alongside the scholarship, so you see the real effective cost before you
          commit a rupee.
        </p>
        <p>
          It is worth knowing how no-cost EMI differs from a regular education loan. A
          bank loan adds interest, so you repay more than the fee; no-cost EMI is
          structured so the instalments add up to exactly the course fee. For most
          students that makes the in-house plan cheaper and simpler than financing the
          same <strong>digital marketing course fees in Bangalore</strong> through an
          outside lender &mdash; no paperwork marathon, no interest, and a schedule that
          starts small while you are still studying.
        </p>
      </>
    ),
  },
  {
    q: 'Scholarships and ways to reduce your digital marketing course fees',
    body: (
      <>
        <p>
          BlueTick offers a scholarship of up to ₹10,000 for graduate freshers. It is
          applied transparently on your fee sheet &mdash; not dressed up as a fake
          &ldquo;today-only&rdquo; discount that resets tomorrow to pressure you into
          signing.
        </p>
        <p>
          A few honest ways to bring down your effective{' '}
          <strong>digital marketing fees in Bangalore</strong>:
        </p>
        <ul>
          <li>Apply for the graduate-fresher scholarship if you qualify.</li>
          <li>Choose the track that matches your goal rather than over-buying duration.</li>
          <li>Use no-cost EMI to spread the fee instead of taking an interest-bearing loan.</li>
          <li>Enrol early for an upcoming batch while scholarship seats are open.</li>
        </ul>
        <p>
          What we will not do is inflate a price so a &ldquo;discount&rdquo; looks
          dramatic. The fee you are quoted is the fee, minus any scholarship you
          genuinely qualify for &mdash; nothing more, nothing hidden.
        </p>
      </>
    ),
  },
  {
    q: 'Digital marketing course fees vs ROI — is it actually worth it?',
    body: (
      <>
        <p>
          The number that matters more than the fee is the return. The right way to
          read <strong>digital marketing course fees in Bangalore</strong> is as an
          investment with a payback period, not a sunk cost.
        </p>
        <p>
          Across BlueTick&rsquo;s last four batches (312 students placed) the average
          starting package was ₹5.6 LPA, with a floor of ₹3.2 LPA and a ceiling of
          ₹22 LPA at Flipkart. At the average salary:
        </p>
        <ul>
          <li>The PCP fee pays itself back in roughly one month of your first role.</li>
          <li>The PGCP fee pays back in under two months.</li>
          <li>The ELEVATE fee pays back in under three months.</li>
        </ul>
        <p>
          Even on conservative assumptions, a placement-first program returns its fee
          within the first quarter of a new job and keeps compounding through every
          appraisal after that. Weigh the fee against that outcome &mdash; the salary,
          the role and the support &mdash; and the &ldquo;is it worth it&rdquo;
          question usually answers itself.
        </p>
        <p>
          And the payback does not stop at the first salary. Digital marketing is one
          of the few fields where skills compound quickly: a strong portfolio lifts
          your next appraisal, opens freelance income on the side, and shortens the gap
          to a manager-level role. Measured over two to three years rather than a single
          payslip, the difference between a cheap course and a placement-first one is
          usually far larger than the difference in their fees.
        </p>
      </>
    ),
  },
  {
    q: 'Cheap vs premium vs value: how to judge a fee fairly',
    body: (
      <>
        <p>
          Course fees in the city sit in three rough bands, and the cheapest is
          rarely the best value while the most expensive is not automatically the
          best outcome.
        </p>
        <ul>
          <li><strong>Free / under ₹15,000:</strong> recorded videos and a certificate. Good for awareness, weak for getting hired &mdash; no live projects, no mentor, no placement support.</li>
          <li><strong>Placement-first (BlueTick&rsquo;s band):</strong> live projects, real ad budgets, practitioner trainers, certifications and six months of placement support, all in the fee.</li>
          <li><strong>Premium bootcamps (₹2 lakh+):</strong> often strong, but you frequently pay a brand premium and may still face tool or certification add-ons.</li>
        </ul>
        <p>
          The smartest buyers judge <strong>digital marketing courses in Bangalore fees</strong>{' '}
          on cost-per-outcome: what job, what salary, and what support does this fee
          actually buy? Measured that way, the value band &mdash; not the cheapest or
          the priciest &mdash; almost always wins.
        </p>
        <p>
          Put concretely: a ₹12,000 course that does not lead to a job has an effectively
          infinite cost-per-outcome, because the outcome never arrives. A ₹89,680 program
          that places you in a ₹5.6 LPA role costs only a few weeks&rsquo; salary per
          outcome. That is the lens that makes <strong>digital marketing fees in Bangalore</strong>{' '}
          comparable across very different price tags &mdash; not the sticker price alone.
        </p>
      </>
    ),
  },
  {
    q: 'Do free and online courses make paying a fee unnecessary?',
    body: (
      <>
        <p>
          It is the most reasonable objection a fee searcher has: Google, YouTube and
          free certifications already exist, so why pay at all? The honest answer is
          that free resources are excellent for <em>learning concepts</em> and weak at
          <em>getting you hired</em>. They cannot give you a live campaign with a real
          budget, feedback from a working practitioner, a recruiter introduction, or a
          portfolio an employer already trusts.
        </p>
        <p>
          Hiring managers in Bangalore see hundreds of self-taught applicants holding a
          free badge. What separates the candidates who actually get interviews is
          demonstrable, supervised work: shipped projects, measurable results, and
          certifications backed by a program that vouches for them. That is precisely
          what paid <strong>digital marketing course fees in Bangalore</strong> buy
          &mdash; structure, accountability, real budgets and a path to the interview,
          not just information you could have found for free.
        </p>
        <p>
          So the fee is not paying for knowledge that is otherwise free. It is paying for
          the bridge between knowing and being hired &mdash; and for most freshers and
          career switchers, that bridge is the entire point of enrolling.
        </p>
      </>
    ),
  },
  {
    q: 'Fees by track: PCP vs PGCP vs ELEVATE — which should you pick?',
    body: (
      <>
        <p>
          Choosing the right track keeps you from over-paying for time you do not need
          or under-buying the support you do. Here is the quick logic behind the three
          fees:
        </p>
        <ul>
          <li><strong>PCP (₹50,150, 3 months):</strong> best for freshers and students who want a fast, hireable start in core digital marketing roles.</li>
          <li><strong>PGCP (₹89,680, 5 months):</strong> our most-chosen track &mdash; built for career switchers and serious job seekers who want depth, two specialisations and a stronger portfolio.</li>
          <li><strong>ELEVATE (₹1,23,900, 7 months):</strong> for working professionals and future AI-led marketers who want the full curriculum plus 16 AI-for-Business modules.</li>
        </ul>
        <p>
          All three include placement support and no-cost EMI. If you are unsure which
          fee fits your goal, share your background and we will recommend the
          lowest-cost track that still gets you to the role you want &mdash; we would
          rather right-size your fee than upsell you.
        </p>
      </>
    ),
  },
  {
    q: 'Online vs classroom — and finding a course near you with fees upfront',
    body: (
      <>
        <p>
          Searching for a <strong>digital marketing course near me with fees</strong>{' '}
          usually means two things at once: you want a course you can reach, and you
          want the price before you talk to anyone. Both are fair.
        </p>
        <p>
          BlueTick&rsquo;s fees are the same whether you choose classroom or the{' '}
          <a href="/digital-marketing-course-online">online digital marketing course</a>{' '}
          &mdash; format is about how you learn, not a hidden price lever.
          Classroom learning at our Bangalore campus suits those who want in-person
          mentorship and peer projects; the online and hybrid option suits working
          professionals and anyone outside central Bangalore, with recorded sessions
          and makeup classes so you never fall behind.
        </p>
        <p>
          Whichever you pick, the principle holds: a credible institute shows you the
          full <strong>digital marketing course fees in Bangalore</strong> on the page,
          then lets you choose the format. If a provider hides the fee until you book a
          call, treat that as a signal &mdash; not a courtesy.
        </p>
        <p>
          On the &ldquo;near me&rdquo; point specifically: if you are searching for a{' '}
          <a href="/digital-marketing-course-near-me"><strong>digital marketing course near me with fees</strong></a>, our Bangalore
          campus serves students across the city, while the online and hybrid option
          covers anyone outside easy commuting distance &mdash; including learners
          elsewhere in Karnataka and across India. The fee is identical either way, so
          your choice comes down to how you learn best and how far you are willing to
          travel, never to a hidden location-based price difference.
        </p>
      </>
    ),
  },
  {
    q: 'A checklist for comparing digital marketing course fees in Bangalore',
    body: (
      <>
        <p>
          Before you commit, run any institute &mdash; including us &mdash; through
          this short checklist. It cuts through marketing and keeps the comparison
          honest:
        </p>
        <ul>
          <li>Is the full fee shown upfront, including GST, or hidden behind a callback?</li>
          <li>What exactly is included &mdash; certifications, tools, project budgets, placement support?</li>
          <li>Is there genuine no-cost EMI, or interest-bearing financing dressed up as EMI?</li>
          <li>Are scholarships transparent, or fake &ldquo;today-only&rdquo; discounts?</li>
          <li>Can they show named, verifiable <a href="/digital-marketing-course-with-placement-bangalore">placement outcomes</a> and real salaries?</li>
          <li>Is there a written refund window if it is not the right fit?</li>
        </ul>
        <p>
          BlueTick is built to pass all six: published fees, an all-inclusive price, a
          graduate-fresher scholarship, no-cost EMI, a 14-day refund window explained
          in writing, and a 100% placement record across the last four batches. Ask any
          institute for the same proof before you pay &mdash; the answer tells you most
          of what you need to know about the fee.
        </p>
      </>
    ),
  },
];

export default function SeoGuideFees() {
  return (
    <section
      id="fees-guide"
      className={styles.section}
      aria-labelledby="fees-guide-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>Complete Fee Guide</span>
          <h2 id="fees-guide-heading" className={styles.heading}>
            Digital marketing course fees in Bangalore — the complete 2026 guide
          </h2>
          <p className={styles.intro}>
            Everything you need to judge the{' '}
            <strong>digital marketing course fees in Bangalore</strong> &mdash; how
            much a course actually costs in 2026, what is included, no-cost EMI and
            scholarships, the fees-vs-salary ROI, and a checklist to compare any
            institute fairly. Below are the fee questions students ask us most before
            joining one of our digital marketing courses.
          </p>
        </header>

        <div className={styles.list}>
          {ITEMS.map((it, i) => (
            <details key={i} className={styles.item} name="bluetick-fees-guide">
              <summary>
                <h3 className={styles.q}>{it.q}</h3>
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <div className={styles.body}>{it.body}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
