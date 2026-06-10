/**
 * Modules.jsx — BlueTick 2026 Refresh
 *
 * RSC. Section shell + 3 reusable rails (PCP / PGCP / Elevate). Each rail
 * is a horizontal scroll-snap carousel. Pure CSS scroller, zero JS.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 7711–8311.
 *
 * Batch 2F-2 populated all 36 modules (PCP=11, PGCP=9, Elevate=16). Module
 * data lives in the three arrays at top; copy edits land in one place per
 * module. Placeholder cards from 2F-1 are gone — totals match array lengths
 * so the rail no longer needs to compute "remaining".
 */

import styles from './Modules.module.css';
import ModulesAutoplay from './ModulesAutoplay';

/* ─── Subtopic learning-type tag ─────────────────────────────────────────────
   Each subtopic is auto-tagged Theory / Practical / Hands-on Project so the
   curriculum shows the mix at a glance. Keyword lists are tuned so Theory stays
   the minority (~27%) and Practical + Hands-on make up the ~70% balance — edit a
   keyword list if a specific bullet should read differently. Pure string work,
   computed at render with zero runtime cost. */
const TAG_LABELS = {
  theory: 'Theory',
  practical: 'Practical',
  project: 'Hands-on Project',
};

function classifyTopic(text) {
  const s = text.toLowerCase();

  const PROJECT = [
    'capstone', 'sprint', 'you manage', 'manages a live', 'live ₹', '₹5,000 campaign',
    'portfolio', 'simulation', 'present to an agency', 'client presentation',
    'presentation prep', 'team presentation', 'deploy', 'working ui', 'published',
    'real brief', 'roadmap with milestones', '12-month ai roadmap', 'team of',
    'final client', 'case study', 'audit lab',
  ];
  if (PROJECT.some((k) => s.includes(k))) return 'project';

  const THEORY = [
    'introduction', 'principles', 'fundamentals', 'overview', 'evolution',
    'business thinking', 'design thinking', 'why ', 'types of', 'understanding',
    'ethics', 'responsible ai', 'maturity', 'archetypes', 'spectrum', 'literacy',
    'governance', 'economics', 'science', 'anatomy', 'explained', 'best practices',
    'what ', 'patterns', 'metrics', 'framework', 'lifecycle', 'assessment',
    'model', 'mapping', 'how to choose', 'planning', 'thinking', 'vs ',
  ];
  if (THEORY.some((k) => s.includes(k))) return 'theory';

  return 'practical';
}

/* ─── PCP modules — 11 total ────────────────────────────────────────────── */
const PCP_MODULES = [
  {
    code: 'M1', num: '1 / 11',
    title: 'Digital Marketing Foundation & Business Thinking',
    hours: '2 Sessions · 4 Hours',
    bullets: [
      'Introduction to marketing, DM evolution, and the digital marketing ecosystem',
      'Principles of marketing, ATL/BTL/TTL funnels, and integrated strategy',
      'Market research and competitor analysis frameworks',
      'Customer persona building and buyer journey mapping',
      'AI model framework - how to choose between ChatGPT, Claude, and Gemini',
      'Branding fundamentals, colour theory, and brand visual identity',
      'North Star Metric, A3R3 funnel, and measuring what actually matters',
      'Social media account creation and platform orientation',
    ],
  },
  {
    code: 'M2', num: '2 / 11',
    title: 'Website Design & Development with AI - WordPress',
    hours: '2 Sessions · 4 Hours',
    bullets: [
      'WordPress website setup - domain, hosting, and site structure',
      'Elementor page builder - designing professional pages without code',
      '10Web AI builder - generating websites from a text prompt',
      'SEO-optimized website structure from the ground up',
      'Designing high-converting landing pages',
      'Website speed optimization and Core Web Vitals',
      'Introduction to CRO principles - why your website design affects revenue',
    ],
  },
  {
    code: 'M3', num: '3 / 11',
    title: 'SEO with AI - Classic + Next-Gen Search',
    hours: '12 Sessions · 24 Hours',
    bullets: [
      'Keyword research and strategic topic planning',
      'On-page SEO - content, headings, image optimization, anchor tags',
      'Technical SEO - sitemap, robots.txt, schema markup, error codes',
      'Google Search Console (GSC) setup and mastery',
      'GBP local SEO - NAP, attributes, hyperlocal ranking',
      'AI-powered SEO tools - Surfer SEO, SEM Rush',
      'Next-generation SEO - GEO (Generative Engine Optimization for ChatGPT/Gemini)',
      'AEO (Answer Engine Optimization), AIO (Google AI Overviews), SXO',
      'Off-page SEO - backlink creation, contextual links, internal linking',
      'SEO content writing using AI - hybrid human + AI workflow',
      'Algorithm updates tracker - how to respond when Google changes the rules',
    ],
  },
  {
    code: 'M4', num: '4 / 11',
    title: 'Social Media Marketing & Brand Intelligence',
    hours: '11 Sessions · 22 Hours',
    bullets: [
      'Instagram - Business profile, UPABC optimization, Reels strategy, hashtag research',
      'Facebook - Business page, Meta Ads Manager, audience targeting, ad objectives',
      'LinkedIn - Profile optimization, business page, B2B lead generation',
      'YouTube - Channel creation, SEO, Studio analytics, Shorts strategy',
      'X (Twitter) - Account growth, intent-based targeting, Grok AI',
      'Short-form video science - the Hook/Retain/Reward loop that drives virality',
      'Influencer marketing - types, outreach, agreements, and ROI measurement',
      'Social listening and sentiment analysis - Brand24, Google Alerts',
      'AI video tools - HeyGen avatars, Veo 3 overview',
      'ManyChat - comment-to-DM funnels and WhatsApp automation basics',
      'WhatsApp Business marketing and broadcast lists',
    ],
  },
  {
    code: 'M5', num: '5 / 11',
    title: 'Google Ads, Bing Ads & Search Engine Marketing',
    hours: '9 Sessions · 18 Hours',
    bullets: [
      'Google Ads account setup - expert-level structure and campaign types',
      'Keyword research, match types, and negative keyword strategy',
      'Search ads - ad copy, extensions, and Quality Score optimization',
      'Display Network (GDN) and Responsive Display Ads',
      'Video ads and YouTube ad campaigns',
      'Shopping Ads and Google Merchant Center',
      'Performance Max - asset groups, audience signals, and AI optimization',
      'Smart bidding strategies and advanced targeting',
      'Bing Ads - campaign setup, UET, UTM parameters, conversion tracking',
      'Attribution models - from first-click to data-driven',
      'Google Ads optimization, metrics, and reporting',
    ],
  },
  {
    code: 'M6', num: '6 / 11',
    title: 'Analytics, Tracking & Data Storytelling',
    hours: '5 Sessions · 10 Hours',
    bullets: [
      'Google Analytics 4 (GA4) - setup, interface, key reports, and exploration',
      'Event tracking and custom conversion setup',
      'Google Tag Manager (GTM) - container setup, triggers, variables, preview mode',
      'Looker Studio - connecting GA4, Ads, and GSC into one live dashboard',
      'Microsoft Clarity - heatmaps, scroll maps, and session recordings',
      'UTM governance and tracking taxonomy',
      'Data storytelling - turning numbers into board-ready narratives',
      'Attribution and multi-touch traffic analysis',
    ],
  },
  {
    code: 'M7', num: '7 / 11',
    title: 'Content Marketing Strategy & AI-Powered Production',
    hours: '4 Sessions · 8 Hours',
    bullets: [
      'Content funnel strategy - TOFU, MOFU, BOFU content types and purpose',
      'Keyword-led content planning and topic clustering',
      'Long-form blog writing - structure, SEO hooks, and reader engagement',
      'AI-assisted content production workflows - ChatGPT + Claude + human editing',
      'Ad copy writing frameworks - hooks, angles, proof, CTA',
      'Content repurposing - Blog → Reels → Email → LinkedIn in one workflow',
      'Editorial calendar building and scheduling with Buffer',
    ],
  },
  {
    code: 'M8', num: '8 / 11',
    title: 'Conversion Rate Optimisation (CRO) Lab',
    hours: '3 Sessions · 6 Hours',
    bullets: [
      'Funnel analysis - identifying leaks in the customer journey',
      'Landing page anatomy - what high-converting pages have in common',
      'A/B testing framework - hypothesis, setup, and reading statistical significance',
      'Heatmaps and session recordings with Microsoft Clarity',
      'Page speed as a conversion factor - measuring and fixing',
      'Form optimization and lead capture best practices',
      'CRO reporting - presenting findings to a client',
    ],
  },
  {
    code: 'M9', num: '9 / 11',
    title: 'Marketing Automation & CRM - Essentials',
    hours: '3 Sessions · 6 Hours',
    bullets: [
      'HubSpot CRM - setup, contacts, pipelines, and deal management',
      'HubSpot email sequences and lead nurturing basics',
      'Zapier - building end-to-end automation workflows without code',
      'Automated lead scoring and qualification',
      'Scheduling and automating social media posts',
      'AI-powered email sequences - from welcome to re-engagement',
    ],
  },
  {
    code: 'M10', num: '10 / 11',
    title: 'Email Marketing & Automation Deep-Dive',
    hours: '3 Sessions · 6 Hours',
    bullets: [
      'Business email setup and list building strategies',
      'Email campaign design - copy, layout, and calls to action',
      'Bulk email campaigns and deliverability best practices',
      'DKIM, SPF, DMARC - email authentication explained simply',
      'A/B testing subject lines and email content',
      'Segmentation, personalization, and drip campaign logic',
      'Email analytics - open rate, CTR, bounce, and conversion metrics',
    ],
  },
  {
    code: 'M11', num: '11 / 11',
    title: 'Industry Domain Deep Dives',
    hours: '2 Sessions · 4 Hours',
    bullets: [
      'Vertical-specific playbooks - D2C, SaaS, EdTech, real estate, healthcare',
      'How agencies pitch and price retainers in each vertical',
      'Capstone presentation prep + portfolio finalisation',
    ],
  },
];

/* ─── PGCP modules — 9 total ────────────────────────────────────────────── */
const PGCP_MODULES = [
  {
    code: 'Note', num: '1 / 9',
    title: 'Modules 1–10 - Same as Course 1, But Deeper',
    hours: 'Expanded content, more live projects',
    bullets: [
      'Module 3 SEO: + programmatic SEO, parasite SEO, international SEO, and App Store SEO (ASO)',
      'Module 4 Social Media: + HeyGen AI video, Veo 3, and advanced influencer agreement frameworks',
      'Module 7 Content: + UGC scripts, content audit frameworks, and landing page copy optimization',
      'Module 9 Automation: Expanded to full scope - WhatsApp bots and Vibe coding',
    ],
  },
  {
    code: 'M11', num: '2 / 9',
    title: 'Performance Marketing & E-Commerce Growth',
    hours: '9 Sessions · 18 Hours',
    bullets: [
      'Performance marketing strategy - audience targeting, segmentation, and persona building with AI',
      'D2C vs Marketplace strategy - trade-offs in data ownership, margins, and brand control',
      'Amazon Advertising - Sponsored Products, Sponsored Brands, Sponsored Display',
      'Flipkart Advertising and marketplace ad ecosystems',
      'Shopify - store setup, product listing, categories, coupons, analytics, and Shopify Payments',
      'Dynamic remarketing - product catalog ads and cross-sell automation',
      'E-Commerce SEO - product pages, collections, and site structure',
      'Retail media networks - Blinkit, Swiggy Instamart, quick commerce ads',
      'Advanced reporting - ROAS, CAC, LTV, and budget planning',
      'Customer retention strategies and LTV maximization',
    ],
  },
  {
    code: 'M12', num: '3 / 9',
    title: 'Online Reputation Management & Brand Protection',
    hours: '3 Sessions · 6 Hours',
    bullets: [
      'ORM fundamentals - why your online reputation is your most valuable marketing asset',
      'Social listening with AI - Brand24, Mention, Google Alerts',
      'Monitoring brand mentions across platforms in real time',
      'Managing negative reviews - the exact response framework that converts critics to customers',
      'Crisis management - response templates and escalation protocols',
      'Building a proactive review generation system',
    ],
  },
  {
    code: 'M13', num: '4 / 9',
    title: 'Freelancing, Agency Operations & Business of Marketing',
    hours: '4 Sessions · 8 Hours',
    bullets: [
      'Agency structure - how client servicing, strategy, creative, and media teams work together',
      'Client lifecycle - pitching, onboarding, first 30 days, monthly reporting, renewal, upsell',
      'How to write a media plan and present it to a client - the exact document used in agencies',
      'Agency pricing models - retainer vs project vs performance vs hybrid',
      'Fiverr and Upwork profile setup and optimization - Freelance Sprint',
      'How to handle a client escalation when results are bad',
      'CAC, LTV, ROAS - understanding the business metrics of marketing',
      'Service packaging and pricing your services as a freelancer',
    ],
  },
  {
    code: 'S1', num: '5 / 9',
    title: 'Specialisation 1 - SEO & AI Search Specialist',
    hours: '6 Sessions · 12 Hours',
    bullets: [
      'Technical SEO deep-dive and crawl budget management',
      'Advanced backlinking - digital PR and link acquisition at scale',
      'AEO, GEO, AIO, SXO - the complete AI search stack for 2026',
      'Competitor backlink analysis and gap strategy',
      'SEO audit lab - full site teardown and roadmap building',
      'SEO ROI calculation and client reporting',
    ],
  },
  {
    code: 'S2', num: '6 / 9',
    title: 'Specialisation 2 - Performance Marketing & AI Ad Copywriting',
    hours: '6 Sessions · 12 Hours',
    bullets: [
      'Advanced Google Ads optimization techniques beyond the basics',
      'Meta Advantage+ and Performance Max deep-dive',
      'UGC script writing and creator brief templates',
      'Live ₹5,000 campaign sprint - you manage a real budget',
      'Types of attribution models - practical application in campaigns',
      'Advanced Looker Studio reporting for clients',
    ],
  },
  {
    code: 'S3', num: '7 / 9',
    title: 'Specialisation 3 - AI-Powered E-Commerce & Data-Driven Sales',
    hours: '6 Sessions · 12 Hours',
    bullets: [
      'Shopify advanced - beyond basics to analytics, automation, and scaling',
      'Amazon PPC - Sponsored Products campaign architecture',
      'D2C strategy - when to go direct vs when to go marketplace',
      'Cart abandonment recovery - ads + email + WhatsApp sequence',
      'Customer retention strategies and LTV maximization',
      'E-Commerce P&L basics - CAC, AOV, LTV, and contribution margin',
    ],
  },
  {
    code: 'DD', num: '8 / 9',
    title: '5 Industry Domain Deep Dives',
    hours: 'Industry-specific playbooks',
    bullets: [
      "E-Commerce & D2C - Mamaearth's journey to ₹1,500 Cr: unit economics, festive campaigns, D2C vs marketplace, quick commerce",
      "HealthTech & EdTech - PhysicsWallah's scale using YouTube and community: CPL optimization, lead funnels, EdTech webinar marketing",
      'SaaS & Tech - Zoho vs Salesforce: B2B SaaS marketing, PLG, Account-Based Marketing, inbound marketing at scale',
      "Retail, FMCG & Consumer Brands - Amul's social media playbook: omni-channel, influencer at scale, festive/IPL campaigns",
      'Digital Marketing Agencies - Live simulation: receive a real brief, build a full media plan, present to an agency founder',
    ],
  },
  {
    code: 'CAP', num: '9 / 9',
    title: 'PGCP Capstone - Real-Budget Agency Sprint',
    hours: 'Month 5 · 4 Weeks',
    bullets: [
      'Your team of 3–4 manages a live ₹5,000 ad campaign for a real local business or BlueTick partner brand',
      'Across Meta Ads and Google Ads',
      'Full campaign strategy, weekly reports, and final client presentation',
      'Published portfolio case study with actual spend and results',
    ],
  },
];

/* ─── Elevate modules — 16 total (hours omitted in Phase 1 source) ──────── */
const ELEVATE_MODULES = [
  {
    code: '★', num: 'Included',
    cardVariant: 'pgcp',
    title: 'Everything in PGCP - fully included',
    hours: 'All 5 months of PGCP, then 2 more',
    bullets: [
      'All 13 PGCP modules + 3 specialisations (SEO & AI Search, Performance Marketing, AI E-Commerce)',
      '5 industry domain deep dives + the real-budget agency capstone',
      '220 hours · 25+ live projects · 60+ AI tools · 12 industry certifications',
      'Then Months 6–7 layer on the 16 AI-for-Business modules below',
    ],
  },
  {
    code: 'B1', num: '1 / 16',
    title: 'AI Business Strategy Overview & Maturity Model',
    bullets: [
      'AI transformation lifecycle',
      'Top 20 AI business patterns',
      'AI maturity assessment',
    ],
  },
  {
    code: 'B2', num: '2 / 16',
    title: 'AI-Native Analytics & Business Insight Generation',
    bullets: [
      'Conversational analytics',
      'Text-to-SQL',
      'Multi-source synthesis',
      'Julius AI, Power BI Copilot',
    ],
  },
  {
    code: 'B3', num: '3 / 16',
    title: 'AI Evaluation & Metrics for AI Products',
    bullets: [
      'Model performance metrics',
      'Business metrics',
      'Trust metrics',
      'User correction feedback loops',
    ],
  },
  {
    code: 'B4', num: '4 / 16',
    title: 'AI-Powered Project & Operations Management',
    bullets: [
      'Meeting intelligence',
      'AI project planning',
      'Risk mapping',
      'SOP writing',
      'Claude Cowork',
    ],
  },
  {
    code: 'B5', num: '5 / 16',
    title: 'UI Mockup & Rapid Prototyping with AI',
    bullets: [
      'No-code builders (Lovable, v0.dev)',
      'Describe a tool → get a working UI → deploy live',
    ],
  },
  {
    code: 'B6', num: '6 / 16',
    title: 'Design Thinking for AI Products',
    bullets: [
      'Designing for ambiguity',
      'Explainability and responsible AI',
      'Bias and privacy',
      'Annotated wireframes',
    ],
  },
  {
    code: 'B7', num: '7 / 16',
    title: 'Identifying High-Impact AI Use Cases',
    bullets: [
      'AI use case archetypes',
      'Value quantification formula',
      'Data readiness assessment',
      'ROI model',
    ],
  },
  {
    code: 'B8', num: '8 / 16',
    title: 'AI for Finance',
    bullets: [
      'Expense auditing',
      'Invoice extraction',
      'Forecast narrative generation',
      'Finance AI privacy rules',
    ],
  },
  {
    code: 'B9', num: '9 / 16',
    title: 'AI for Human Resources',
    bullets: [
      'JD writer',
      'AI resume screener',
      'Interview question generation',
      'Policy Q&A',
      'HR data privacy',
    ],
  },
  {
    code: 'B10', num: '10 / 16',
    title: 'AI for Operations & Supply Chain',
    bullets: [
      'Demand planning',
      'Supplier email automation',
      'SOP drafting',
      'Ops AI playbook',
    ],
  },
  {
    code: 'B11', num: '11 / 16',
    title: 'Enterprise AI Adoption & Change Management',
    bullets: [
      'Automation spectrum',
      'Automation bias',
      'Vendor risk',
      'Managing AI-resistant teams',
    ],
  },
  {
    code: 'B12', num: '12 / 16',
    title: 'AI Strategy & Governance',
    bullets: [
      'Build vs Buy vs Partner',
      'AI economics',
      'AI org design',
      'Risk communication',
    ],
  },
  {
    code: 'B13', num: '13 / 16',
    title: 'AI Ethics, Responsible AI & Regulatory Landscape',
    bullets: [
      'Bias in decisions',
      'DPDP Act, GDPR',
      'AI auditability',
      'Responsible AI principles',
    ],
  },
  {
    code: 'B14', num: '14 / 16',
    title: 'AI Literacy & Team Enablement',
    bullets: [
      'Developing AI confidence across teams',
      'AI champions programme',
      'Avoiding deskilling',
    ],
  },
  {
    code: 'B15', num: '15 / 16',
    title: 'AI Readiness & 12-Month Roadmap',
    bullets: [
      'Org readiness assessment',
      '12-month AI roadmap with milestones and governance gates',
    ],
  },
  {
    code: 'B16', num: '16 / 16',
    title: 'Capstone - Business-Ready AI Integration Proposal',
    bullets: [
      'Team presentation: business problem → AI-augmented workflow → tools → ROI → governance plan',
    ],
  },
];

/* ─── Single module card ────────────────────────────────────────────────── */
function ModuleCard({ variant, cardVariant, code, num, title, hours, bullets }) {
  /* `cardVariant` lets a single card adopt another track's colour code (e.g. the
     first Elevate card, which is "Everything in PGCP", uses the PGCP palette). */
  const colorVariant = cardVariant || variant;
  return (
    <article
      className={`${styles.card} ${styles[`card_${colorVariant}`]}`}
      aria-label={`Module ${num}: ${title}`}
    >
      <div className={styles.card_head}>
        <span className={styles.card_code}>{code}</span>
        <span className={styles.card_num}>{num}</span>
      </div>
      <h4 className={styles.card_title}>{title}</h4>
      {/* `hours` is optional — Elevate modules in the Phase 1 source omit it. */}
      {hours && <p className={styles.card_hours}>{hours}</p>}
      <ul className={styles.card_bullets}>
        {bullets.map((b) => {
          const tag = classifyTopic(b);
          return (
            <li key={b}>
              <span className={styles.bullet_text}>{b}</span>
              <span className={`${styles.tag} ${styles[`tag_${tag}`]}`}>
                {TAG_LABELS[tag]}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

/* ─── A single rail (course block) ──────────────────────────────────────── */
function ModuleRail({
  variant,
  chipLabel,
  title,
  meta,
  modules,
  totalModules,
  ariaLabel,
  revealDelay,
}) {
  return (
    <div className={`${styles.rail_wrap} ${styles[`rail_wrap_${variant}`]}`} data-reveal data-reveal-delay={revealDelay}>
      <div className={styles.rail_head}>
        <div className={styles.rail_head_text}>
          <span className={styles.rail_head_chip}>
            <span className={styles.rail_head_chip_dot} aria-hidden="true" />
            {chipLabel}
          </span>
          <h3 className={styles.rail_head_title}>{title}</h3>
          <p className={styles.rail_head_meta}>{meta}</p>
        </div>
        <p className={styles.rail_head_hint} aria-hidden="true">
          <span className={styles.rail_head_count}>{totalModules} modules</span>
          <span className={styles.rail_head_swipe}>
            swipe <span className={styles.swipe_arrow}>→</span>
          </span>
        </p>
      </div>

      <div
        className={styles.rail}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        data-autoplay-rail
      >
        {modules.map((m) => (
          <ModuleCard key={m.code} variant={variant} {...m} />
        ))}
      </div>
    </div>
  );
}

/* ─── Modules section ───────────────────────────────────────────────────── */
/* `headingLead` + `headingKeyword` let a landing page swap the curriculum
   heading keyword without touching the homepage (which renders the defaults). */
export default function Modules({
  headingLead = 'our',
  headingKeyword = 'digital marketing training in Bangalore',
}) {
  return (
    <section
      className={styles.section}
      id="curriculum"
      aria-labelledby="modules-heading"
    >
      <div className={styles.container}>
        <header className={styles.head} data-reveal>
          <span className={styles.eyebrow}>Curriculum</span>
          <h2 id="modules-heading" className={styles.heading}>
            What {headingLead} <span className={styles.kw}>{headingKeyword}</span> covers - every module, every topic
          </h2>
          <p className={styles.lede}>
            3 courses. One direction: your dream job. Every hour in Course 1
            counts toward Course 2. Every hour in Course 2 counts toward
            Course 3. Nothing is repeated. Everything builds.
          </p>
        </header>

        <div className={styles.legend} data-reveal data-reveal-delay="1" role="note" aria-label="Course color legend">
          <span className={`${styles.legend_pill} ${styles.legend_pill_pcp}`}>
            <span className={styles.legend_dot} />
            Course 1 - PCP (3 months)
          </span>
          <span className={`${styles.legend_pill} ${styles.legend_pill_pgcp}`}>
            <span className={styles.legend_dot} />
            Course 2 - PGCP (5 months)
          </span>
          <span className={`${styles.legend_pill} ${styles.legend_pill_elevate}`}>
            <span className={styles.legend_dot} />
            Course 3 - ELEVATE™ (7 months)
          </span>
        </div>

        <ModuleRail
          variant="pcp"
          revealDelay="0"
          chipLabel="Course 1 - PCP"
          title="Professional Certification in Digital Marketing with AI"
          meta="3 Months · 132 Hours · Mon–Fri Weekdays"
          modules={PCP_MODULES}
          totalModules={11}
          ariaLabel="Course 1 - PCP module cards"
        />

        <ModuleRail
          variant="pgcp"
          revealDelay="1"
          chipLabel="Course 2 - PGCP"
          title="Post Graduate Certification in AI-Driven Digital Marketing"
          meta="5 Months · 220 Hours · All 13 Modules + 3 Specialisations + 5 Industry Deep Dives"
          modules={PGCP_MODULES}
          totalModules={9}
          ariaLabel="Course 2 - PGCP module cards"
        />

        <ModuleRail
          variant="elevate"
          revealDelay="2"
          chipLabel="Course 3 - ELEVATE™"
          title="Digital Marketing + AI for Business Teams"
          meta="7 Months · 268 Hours · Months 1–5 same as PGCP; Months 6–7 add the AI for Business Teams track"
          modules={ELEVATE_MODULES}
          totalModules={16}
          ariaLabel="Course 3 - ELEVATE module cards"
        />
      </div>

      {/* Gently auto-advances each rail until the user scrolls (client island). */}
      <ModulesAutoplay />
    </section>
  );
}
