/**
 * SeoGuide.jsx — long-form SEO / AEO / GEO content block (above the footer).
 *
 * RSC. Native <details>/<summary> accordion (zero JS, pure-CSS toggle, same
 * pattern as <Faqs />). The full prose ships in the initial HTML whether a
 * panel is open or closed, so it is fully indexable by search crawlers and
 * readable by answer/generative engines.
 *
 * Purpose: build topical depth and the local "digital marketing course in
 * Bangalore" entity association that the conversion-focused sections above
 * don't provide, while weaving in the secondary keyword variants
 * (institute / training / courses in Bangalore). Titles are keyword-led; the
 * bodies are genuinely useful answers with a light BlueTick pitch.
 *
 * Note: the canonical FAQPage schema lives in <Faqs />. This block is editorial
 * content (statement/keyword headings, not a Q&A list), so it intentionally
 * carries no second FAQPage entity — its value is the indexable visible text.
 */

import styles from './SeoGuide.module.css';

const ITEMS = [
  {
    q: 'What you learn in a digital marketing course in Bangalore (2026 syllabus)',
    body: (
      <>
        <p>
          A modern <strong>digital marketing course in Bangalore</strong> should
          go well beyond theory. At BlueTick Academy the 2026 syllabus spans
          25+ modules and 60+ tools, organised around the channels companies
          actually hire for:
        </p>
        <ul>
          <li><strong>Search</strong> - technical SEO, on-page and off-page, programmatic SEO, and Google Search Console.</li>
          <li><strong>Paid media</strong> - Google Ads (Search, Display, Performance Max), Meta Ads, and YouTube.</li>
          <li><strong>Social &amp; content</strong> - organic strategy, short-form video, copywriting and content calendars.</li>
          <li><strong>Analytics</strong> - GA4, attribution modelling, dashboards and performance reporting.</li>
          <li><strong>AI workflows</strong> - Custom GPTs, Midjourney creative pipelines, AI-assisted attribution and prompt engineering.</li>
        </ul>
        <p>
          What separates a results-driven program from a generic one is the
          shift from &ldquo;watch and note&rdquo; to &ldquo;build and ship.&rdquo;
          Every module ends in real work - live campaigns, real budgets and three
          portfolio projects you can show a recruiter.
        </p>
      </>
    ),
  },
  {
    q: 'How to choose the best digital marketing institute in Bangalore',
    body: (
      <>
        <p>
          Bangalore has dozens of options, so judge a{' '}
          <strong>digital marketing institute in Bangalore</strong> on outcomes,
          not advertising. Five questions cut through the noise:
        </p>
        <ul>
          <li><strong>Placement, proven:</strong> do they publish named alumni, employers and LinkedIn profiles you can verify - or just a percentage?</li>
          <li><strong>Who teaches:</strong> are trainers currently running live campaigns, or full-time career trainers teaching from slides?</li>
          <li><strong>Real projects:</strong> will you leave with shipped work and a portfolio, or only certificates?</li>
          <li><strong>Curriculum freshness:</strong> does it include 2026 AI workflows, or last decade&rsquo;s playbook?</li>
          <li><strong>Local hiring network:</strong> do they have active Bangalore hiring partners who interview their students?</li>
        </ul>
        <p>
          BlueTick was built to answer all five with evidence: a 100% placement
          record across the last four batches, practitioner trainers, three live
          projects, an AI-native curriculum, and a 300+ Bangalore hiring-partner
          network. Ask any institute for the same proof before you enrol.
        </p>
      </>
    ),
  },
  {
    q: 'Digital marketing course fees in Bangalore - and the real ROI',
    body: (
      <>
        <p>
          Fees for a <strong>digital marketing course in Bangalore</strong>
          typically range from around ₹40,000 for short certificate programs to
          ₹1.2–1.6 lakh for placement-focused programs with live projects and
          dedicated career support. EMI options make the higher tier accessible.
        </p>
        <p>
          The number that matters more than the fee is the return. Across our
          last four batches (312 students) the average package was{' '}
          <strong>₹5.6 LPA</strong>, with a floor of ₹3.6 LPA and a ceiling of
          ₹18.5 LPA at Razorpay. For most learners the program pays for itself
          within the first few months of their new role.
        </p>
        <p>
          A practical tip: weigh fees against what&rsquo;s included. A slightly
          higher fee that bundles live ad budgets, 12 certifications, portfolio
          projects and six months of placement support is usually far better
          value than a cheap course that stops at theory. We share our full fee
          and EMI plan up front - no inflated &ldquo;today-only&rdquo; discounts.
        </p>
      </>
    ),
  },
  {
    q: 'Online vs classroom digital marketing training in Bangalore',
    body: (
      <>
        <p>
          Both formats work - the right one depends on how you learn and your
          schedule. Classroom <strong>digital marketing training in Bangalore</strong>{' '}
          suits learners who want in-person mentorship, peer projects and the
          accountability of a fixed batch. Our offline batches run at the
          Indiranagar campus, a short walk from the metro.
        </p>
        <p>
          Online and hybrid training suits working professionals and anyone
          outside central Bangalore. Recorded sessions, makeup classes and
          WhatsApp office hours mean you never fall behind. Our weekend PGCP
          batch is designed specifically for people balancing a full-time job.
        </p>
        <p>
          Whichever you choose, insist on the same essentials: live campaigns,
          real feedback on your work, and graded projects. Passive video alone
          rarely produces job-ready skills - practice and review do.
        </p>
      </>
    ),
  },
  {
    q: 'Who should enrol in digital marketing courses in Bangalore?',
    body: (
      <>
        <p>
          The best <strong>digital marketing courses in Bangalore</strong> serve
          a wider audience than most people assume:
        </p>
        <ul>
          <li><strong>Freshers and final-year students</strong> who want a skill-based, hire-ready start instead of a generic degree alone.</li>
          <li><strong>Career switchers</strong> from non-marketing backgrounds - 41% of our students switch into marketing, often in their late 20s.</li>
          <li><strong>Working professionals</strong> upgrading from traditional to digital roles, or moving from execution to strategy.</li>
          <li><strong>Founders and business owners</strong> who want to run their own performance marketing and stop overpaying agencies.</li>
          <li><strong>Freelancers and consultants</strong> building a credible, portfolio-backed practice.</li>
        </ul>
        <p>
          No coding or prior marketing experience is required. What matters is
          consistency through the projects - that&rsquo;s what turns a beginner
          into someone a Bangalore employer is ready to hire.
        </p>
      </>
    ),
  },
  {
    q: 'Jobs and salaries after a digital marketing course in Bangalore',
    body: (
      <>
        <p>
          As India&rsquo;s startup capital, Bangalore is one of the strongest job
          markets in the country for digital marketers. Graduates of a strong{' '}
          <strong>digital marketing course in Bangalore</strong> commonly move
          into roles such as:
        </p>
        <ul>
          <li>Performance Marketing Executive / Manager</li>
          <li>SEO Specialist and Content Marketer</li>
          <li>Social Media &amp; Paid Ads Manager</li>
          <li>Marketing Analyst</li>
          <li>Growth Marketer at funded startups</li>
        </ul>
        <p>
          Entry packages generally start around ₹3.5–5 LPA and rise quickly with
          proven campaign results; specialists and managers with two to three
          years of measurable performance often reach ₹10–18 LPA. Demand is
          driven by MNCs, agencies and a deep bench of funded startups - many of
          which sit in our 300+ hiring-partner network.
        </p>
      </>
    ),
  },
  {
    q: 'How long does a digital marketing course in Bangalore take?',
    body: (
      <>
        <p>
          Duration depends on depth. A focused{' '}
          <strong>digital marketing course in Bangalore</strong> can run from a
          few weeks to several months. At BlueTick we offer three tracks so the
          program matches your goal:
        </p>
        <ul>
          <li><strong>PCP - 3-month track:</strong> a fast, intensive route to core job-ready skills.</li>
          <li><strong>PGCP - 5-month track:</strong> our most popular program, with deeper specialisation and a weekend option for working professionals.</li>
          <li><strong>Elevate - 7-month track:</strong> advanced specialisation for those targeting senior or niche roles.</li>
        </ul>
        <p>
          Longer isn&rsquo;t automatically better - what counts is hands-on hours
          on live campaigns and the number of real projects you ship. Each track
          is built around projects first, so you finish with a portfolio, not
          just attendance.
        </p>
      </>
    ),
  },
  {
    q: 'Digital marketing course in Bangalore with 100% placement - how it works',
    body: (
      <>
        <p>
          &ldquo;Placement&rdquo; should mean a process, not a slogan. Our{' '}
          <strong>digital marketing course in Bangalore with placement</strong>{' '}
          support is structured around four things that actually move outcomes:
        </p>
        <ul>
          <li><strong>A portfolio that interviews for you</strong> - three live projects and 12 certifications by the time you graduate.</li>
          <li><strong>Recruiter introductions</strong> from a 300+ Bangalore hiring-partner network.</li>
          <li><strong>Interview preparation</strong> - mock interviews, profile reviews and role-specific prep.</li>
          <li><strong>Six months of continued support</strong> - no artificial 90-day cut-off; we keep circulating your profile until you&rsquo;re placed.</li>
        </ul>
        <p>
          Our 100% placement record is verified across the last four batches
          (312 students), and it includes people who took four to five months,
          not only the fastest movers. We publish named alumni with their
          employers so you can verify the claim yourself.
        </p>
      </>
    ),
  },
  {
    q: 'Is the digital marketing course in Bangalore suitable for beginners?',
    body: (
      <>
        <p>
          Yes. A well-designed{' '}
          <strong>digital marketing course in Bangalore</strong> assumes no prior
          marketing knowledge and no coding. The first modules build the
          fundamentals, covering how channels fit together, how audiences are targeted,
          and how performance is measured, before you ever touch a live budget.
        </p>
        <p>
          Beginners succeed here for three reasons. First, the learning is
          project-led, so concepts stick because you apply them immediately.
          Second, batches deliberately mix freshers, career switchers and
          working professionals, so you learn alongside people at different
          stages. Third, trainers are practitioners who explain not just the
          &ldquo;what&rdquo; but the &ldquo;why&rdquo; behind real campaign
          decisions.
        </p>
        <p>
          If you&rsquo;re starting from zero, the honest requirement isn&rsquo;t
          talent - it&rsquo;s consistency. Show up for the projects, take the
          feedback, and ship your work. That&rsquo;s what turns a complete
          beginner into a candidate Bangalore employers want to interview.
        </p>
      </>
    ),
  },
  {
    q: 'Tools and certifications you master in our digital marketing training in Bangalore',
    body: (
      <>
        <p>
          Good <strong>digital marketing training in Bangalore</strong> is
          measured partly by the toolkit you walk away with. Across the program
          you&rsquo;ll work hands-on with 60+ industry tools, including:
        </p>
        <ul>
          <li><strong>SEO &amp; content:</strong> Google Search Console, Ahrefs/SEMrush-style workflows, and AI content pipelines.</li>
          <li><strong>Paid media:</strong> Google Ads, Meta Ads Manager and Performance Max.</li>
          <li><strong>Analytics:</strong> GA4, Looker Studio dashboards and Tag Manager.</li>
          <li><strong>AI:</strong> Custom GPTs, Midjourney and prompt-engineering for reporting and creative.</li>
        </ul>
        <p>
          You also finish with up to 12 industry certifications, the kind
          recruiters recognise, alongside three live portfolio projects. The
          combination matters: certifications prove you know the platforms, and
          the projects prove you can actually deliver results with them. That
          pairing is what makes a fresh graduate credible in a Bangalore
          interview.
        </p>
      </>
    ),
  },
  {
    q: 'Areas in Bangalore we serve - from Indiranagar to Whitefield',
    body: (
      <>
        <p>
          Our campus for{' '}
          <strong>digital marketing courses in Bangalore</strong> is in
          Indiranagar at 545, 2nd Floor, CMH Road, a 1-minute walk from
          Indiranagar Metro on the Purple Line, with free parking on site. It is
          easy to reach from across the city.
        </p>
        <p>
          Students travel to our classroom batches from Koramangala, HSR Layout,
          BTM Layout, Marathahalli, Whitefield, Electronic City, Hebbal and
          Jayanagar, while learners further out join the hybrid and weekend
          batches. Wherever you are in Bangalore, the format flexes to fit your
          commute and schedule.
        </p>
        <p>
          Being Bangalore-rooted isn&rsquo;t only about location - it&rsquo;s
          about the network. Our 300+ local hiring partners are the same MNCs,
          agencies and funded startups our students interview with, which keeps
          the curriculum and placement support tied to what the city is actually
          hiring for right now.
        </p>
      </>
    ),
  },
  {
    q: 'Why choose BlueTick Academy for digital marketing in Bangalore',
    body: (
      <>
        <p>
          BlueTick Academy is a Bangalore-rooted, placement-first{' '}
          <strong>digital marketing institute in Bangalore</strong> built for the
          way companies hire in 2026. Three things set the experience apart:
        </p>
        <ul>
          <li><strong>Practitioner trainers</strong> with 5–10 years of experience who are currently running live campaigns - you learn the current playbook, not last decade&rsquo;s.</li>
          <li><strong>AI-native curriculum</strong> - generative-AI workflows are built into every module, not bolted on as an afterthought.</li>
          <li><strong>Verifiable outcomes</strong> - a 100% placement record, 10,000+ alumni across MNCs and startups, and named results you can check on LinkedIn.</li>
        </ul>
        <p>
          The campus is in Indiranagar, a 1-minute walk from the metro, and you
          can visit a live class before you enrol. If you want a{' '}
          <strong>digital marketing course in Bangalore</strong> that is judged on
          where its students end up, you&rsquo;re in the right place - book a free
          demo or talk to a recent alumnus before deciding.
        </p>
      </>
    ),
  },
];

export default function SeoGuide() {
  return (
    <section
      id="guide"
      className={styles.section}
      aria-labelledby="seo-guide-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>Complete Guide</span>
          <h2 id="seo-guide-heading" className={styles.heading}>
            Digital Marketing Course in Bangalore - the complete 2026 guide
          </h2>
          <p className={styles.intro}>
            Everything you need to choose the right{' '}
            <strong>digital marketing course in Bangalore</strong> - what a 2026
            syllabus covers, how to pick the best{' '}
            <strong>digital marketing institute in Bangalore</strong>, realistic
            fees and salaries, online vs classroom{' '}
            <strong>digital marketing training in Bangalore</strong>, and how
            placement actually works. Below we answer the questions students ask
            us most before joining one of our{' '}
            <strong>digital marketing courses in Bangalore</strong>.
          </p>
        </header>

        <div className={styles.list}>
          {ITEMS.map((it, i) => (
            <details key={i} className={styles.item} name="bluetick-guide">
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
