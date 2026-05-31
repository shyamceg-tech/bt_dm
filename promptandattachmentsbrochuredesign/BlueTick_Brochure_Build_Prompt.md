# PROMPT — Build the BlueTick Academy 2026 Brochure (PDF)

> **How to use this:** Open a new chat, attach the three image files
> (`Pg_1.png`, `Page_4.png`, `Pg_3_map.png`), then paste everything below the line.
> All copy is already included here verbatim, so re-uploading the Word doc is optional.

---

# TASK: Build the BlueTick Academy 2026 brochure as a PDF

Build a polished, multi-page **PDF brochure** for BlueTick Academy from the LOCKED content below.
The content is final — reproduce it **verbatim**. Do not rewrite, summarise, paraphrase, shorten,
or invent any copy. You may only decide layout, page breaks, and visual styling.

## STEP 0 — Read skills first (mandatory)
Before writing any code, `view` these (they live in your own build environment — no user action needed):
- `/mnt/skills/public/pdf/SKILL.md`
- `/mnt/skills/public/frontend-design/SKILL.md`
Recommended build path: design each page as clean A4 HTML/CSS, then render to a single PDF
(e.g. Playwright/Chromium `print-to-pdf` at A4, or an HTML→PDF approach the pdf skill endorses).
Final file → `/mnt/user-data/outputs/BlueTick_Brochure_2026.pdf`, then call `present_files`.

## IMAGES (attached by the user; expect them at /mnt/user-data/uploads/)
- `Pg_1.png`  → COVER. Blue-duotone woman holding a tablet. Use full-bleed on the right portion of the cover, same split-duotone treatment as the reference cover.
- `Pg_3_map.png` → world map with flag pins. Use on the "Global Presence — Learners from 30+ Countries" page.
- `Page_4.png` → man in a dark blazer (professional portrait). Use as a clean side portrait on the "Your Degree Got You Here" hook page.
(Both Page_4.png and Pg_3_map.png MUST appear before page 6.)

## DESIGN SYSTEM (match the existing brochure — colorful, clean, lots of clarity & white space)
- Page: **A4 portrait**, consistent 40–48px outer margins, generous white space, never clumsy.
- Palette:
  - Royal Blue `#1E45D6`, Deep Blue `#1736B8` (cover + section bands)
  - Coral→Orange gradient `#F7882F → #F0532F` (icons, accents, the "Our Alumni Work In" style highlights)
  - Emphasis Red `#ED1C24` (for hero numbers like "30+", "90 days")
  - Near-black `#15171C` (dark sections with white text)
  - Light BG `#F4F6F9`, Slate text `#33414F`, Muted `#6B7785`, White `#FFFFFF`
- Type: headings in **Poppins** (Bold/ExtraBold), body in **Inter** (Regular/Medium). Big slate headlines with one key word/number in coral or red, exactly like the reference.
- Logo: the "BlueTick Academy" wordmark with the blue+coral double-chevron checkmark.
- **Header motif on interior pages:** small progress-dash top-left, the BlueTick chevron icon top-right.
- **Footer on EVERY page:** `info@bluetickacademy.com   +91-9606 9955 25   www.bluetickacademy.com` (small icons, on a light or dark bar to match the page).
- Keep it colorful but uncluttered. Use cards, soft shadows, rounded corners (~12–16px), thin dashed dividers where the reference uses them.

## CRITICAL — MODULE / CURRICULUM SECTION (the one section to upgrade)
The original brochure's module pages were flat checklists. The new curriculum section must be **more
detailed and visually richer, but neat and high-clarity — not clumsy**:
- Each **module = a card** with a colored header strip, the module code (M1, M2…), module title, and its
  "X Sessions | Y Hours" badge.
- Inside each card, show **topics grouped into sub-topic clusters** (the bullet lists below), using a clear
  visual hierarchy: group label → sub-topics as compact chips or two-column bullet lists.
- **Color-code by module family** so the eye can navigate: e.g. Foundation/Website = blue family,
  SEO = teal/green, Social = coral/orange, Ads = purple, Analytics = indigo, Content = amber,
  CRO = pink, Automation/Email = cyan, Performance/E-com = deep orange, ORM = red, Agency = slate,
  Specializations = gradient, ELEVATE AI-for-Business = royal blue. Keep colors muted/professional, not loud.
- Use consistent iconography per family. Plenty of padding. Aim for clarity over density — break across
  more pages if a page starts to feel crowded (you have permission to extend page count).

## PAGE PLAN (you may add pages where a page would otherwise feel crowded)

### PAGE 1 — COVER (image: Pg_1.png)
- BlueTick Academy logo (top-left).
- Headline: **MASTER DIGITAL MARKETING WITH AI**
- Tagline: **The #1 AI-Powered Digital Marketing Career Programme in India — Just a Clear Path to Your First — or Next — AI powered Job.**
- Stat strip (4 items): **10,000+ Students Placed · 97% Placement Rate · 500+ Hiring Partners · 9+ Yrs Training Excellence**
- Badge row: **No Experience Needed   ·   No Coding Involved   ·   *100% Job-Assured Programmes**
- "Our Alumni Work In" logo strip: Google, TATA, Amazon, Salesforce (reuse reference style).
- Footer.

### PAGE 2 — THE HOOK (image: Page_4.png as side portrait)
- H1: **Your Degree Got You Here. Our Programme Gets You Hired.**
- Body: *Every company in India — from a neighbourhood brand to Amazon — is urgently hiring people who can run AI-powered marketing. That's exactly who you will be, 5 to 7 months from now. Guaranteed.*
- Small footnote (fine-print line): *100% Job Assurance is based on eligibility criteria. Check eligibility with the academic advisor before admission.*

### PAGE 3 — GLOBAL PRESENCE (image: Pg_3_map.png)
- Eyebrow: **GLOBAL PRESENCE**
- Big headline: **Learners From 30+ Countries** (with "30+" in red, exactly like reference).
- World map (Pg_3_map.png) with country labels.
- Footer.

### PAGE 4 — WHOEVER YOU ARE (audience cards)
- H2: **Whoever You Are — There Is a Clear Path Here for You.**
- Cards (icon + title + body), verbatim:
  - **Graduate Fresher** — *You will get your first job. Guaranteed. BBA, B.Com, BA, B.Sc, B.E, B.Tech, MBA — any degree. In 5–7 months, you will have real campaigns in your portfolio, global certifications on your resume, and job offers in your hand.*
  - **Career Switcher** — *Done with your current job? AI-powered Digital Marketing is one of the fastest ways to restart with better pay — with our 100% placement and your resume with AI skillsets, you are more secure than ever.*
  - **Entrepreneurs & Consultants** — *With AI driven customer acquisition and workflow automation, You will be able to hit your revenue targets with 1/10th cost and 10x speed.*
  - **Women Returning to Work** — *Your break does not define your comeback — your skills do. Whether you've been away 2 years or 10, we will help you rebuild with the most in-demand skills in the job market today. Hundreds of women have restarted through BlueTick — confidently and successfully.*
  - **Applies for All** — *While you learn, you earn. Become a freelancer and build a client base, launch your agency, or earn from anywhere — this programme gives you the complete toolkit to make it happen. Learn to price your services and run campaigns that deliver results. Our ELEVATE™ track even covers AI business strategy for those who want to think bigger.*
- Highlighted box: **ONE THING WE LOOK FOR IN EVERY STUDENT:** *The drive to show up and focus on learning. That's it. What you need is not prior tech knowledge or experience. Just ambition — and we'll handle the rest.*

### PAGE 5 — THREE COURSES, ONE DIRECTION (3-course comparison)
- Section line: **Three Courses : One Direction: Your Dream Job.**
- Note: *Every hour you spend in Course 1 counts toward Course 2. Every hour in Course 2 counts toward Course 3. Nothing is repeated. Everything builds.*
- Three course cards (verbatim):
  - **1 · Professional Certification in Digital Marketing with AI** — 3 Months | 132 Hours | Indicative Fresher Salary After Completion: ₹3 – 4 LPA. *For: For those who want to upskill in digital marketing quickly, with a strong foundation in all core skills and a job-ready portfolio. You will graduate as: A certified Digital Marketing Professional — ready to apply for executive and analyst roles immediately.*
  - **2 · Post Graduate Certification in AI-Driven Digital Marketing** — 5 Months | 220 Hours | Indicative Fresher Salary After Completion: ₹4 – 7 LPA. *For: Students who want the complete, deepest AI powered digital marketing skillset — all 13 modules, 3 specializations, industry domain deep dives, and a live ₹5,000 ad budget campaign sprint. You will graduate as: An experienced–level digital marketing specialist with hands-on proof of running real campaigns with real money.*
  - **3 · ELEVATE™ — Digital Marketing + AI for Business** — 7 Months | 268 Hours | Indicative Salary After Completion: ₹5 – 10 LPA*. *For: Ambitious professionals, fresher graduates, and business owners who want to lead digital transformation — not just execute it. You will graduate as: A strategic marketing and AI expert — able to build, run, and scale businesses using the most advanced tools available today.*
- Fine print: *Indicative salary ranges. Actual compensation depends on individual skill, portfolio, and the hiring organisation.*

### PAGE 6 — WHAT YOU WILL BECOME (job roles by course)
- H1: **What You Will Become After This Programme**
- Intro: *The question in your mind is: 'Will I definitely get a job?' The answer is yes — if you show up, focus on learning and complete the projects. Here's what that job looks like, by course:*
- Three columns:
  - **After Course 1 – PCP (3 Months):** SEO Executive / SEO Analyst · Social Media Executive · Google Ads / PPC Executive · Content Marketing Executive · Email Marketing Executive · Digital Marketing Coordinator
  - **After Course 2 – PGCP (5 Months):** Performance Marketer · Digital Marketing Executive · Performance Marketing Executive · GEO/AEO Specialist · Social Media Marketing Executive · Content Strategist · CRM & Marketing AI Automation Specialist · Growth Marketer · Performance Marketing Expert
  - **After Course 3 — ELEVATE™ (7 Months):** AI Operations Executive · AI & Marketing Strategist · Business Growth Executive · MarTech Executive · Growth & Revenue Specialist · AI Business Transformation Consultant · AI Agency Founder
- Footer line (verbatim): *Companies where our alumni work: Accenture, Flipkart, Amazon, Google, EY, Infosys, ITC, Swiggy, Zomato, Oracle, Yahoo, SAP, Bosch, Philips, Lakme, MakeMyTrip, UpGrad, Adobe, Reddit, and 480+ more.*

### PAGE 7 — 100% PLACEMENT ARCHITECTURE
- H1: **100% Placement — How We Actually Do It**
- Intro: *Most institutes call it placement support. We have built an 8-step placement architecture that starts from Day 1 of the course — not after you graduate.*
- 8 numbered steps (verbatim title + body):
  1. **Portfolio Building from Week 1** — *Your portfolio starts on Day 1 — not after graduation. Every project = a portfolio piece.*
  2. **Resume Workshop (Month 3 & Month 5)** — *Every resume bullet is rewritten with real numbers from your actual projects. Results that recruiters can't ignore.*
  3. **LinkedIn Optimization Sprint** — *Your LinkedIn becomes a recruiter magnet — with a headline, About, and live case study that gets you noticed before you even apply.*
  4. **Mock Interviews — 1-on-1 with Industry Mentors** — *1-on-1 with a real industry mentor. Recorded. Reviewed. Repeated — until you walk into every interview with full confidence.*
  5. **The Interview Playbook** — *30 top interview questions with model answers, STAR frameworks, and a salary negotiation script you can use from Day 1.*
  6. **30-60-90 Day New Joiner Blueprint** — *A full 90-day plan for your first job — so you don't just get hired, you thrive from Week 1.*
  7. **Referrals to Our 500+ Hiring Partner Network** — *Your profile is personally shared with 500+ verified hiring partners — agencies, brands, SaaS companies, and e-commerce teams actively looking to hire.*
  8. **Continued Support Until Placed** — *We don't close your file when the course ends. We stay with you — reviewing, referring, and supporting — until you are placed.*
- Highlight banner: **97% of our students are placed within 30-45 days of completing the programme.**

### PAGE 8 — YOUR PLACEMENT JOURNEY IN DETAIL
- H1: **What Your Placement Journey Looks Like — In Detail**
- **Your Portfolio — Built While You Study:** *By the time you graduate, you will have 4–6 documented case studies — real projects with real numbers, published on your own website or Notion page. These are not assignments. They are proof that you can do the job.* List:
  - Website you built on WordPress — live on the internet, with your name on it
  - SEO campaign — showing keyword rankings you improved, with screenshots
  - Social media campaign — actual content you created and posted for a real business
  - Google or Meta Ads — if you're on the 5 or 7-month track, a live campaign you ran with real money
  - Email marketing campaign — with open rate and click-through data
  - Content marketing — a published blog post ranking on Google
- **Resume Workshop — Your Results in Their Language:** *Recruiters spend 7 seconds on a resume. Our workshop teaches you to write results that stop the scroll. Every bullet becomes a number. Every project becomes a proof point.*
- **Before/After Resume** (two-column comparison, verbatim):
  - *Before BlueTick Resume:* Managed social media pages / Worked on SEO projects / Assisted in Google Ads campaigns
  - *After BlueTick Resume:* Grew Instagram following from 800 to 3,200 in 8 weeks using Reels strategy / Improved page 1 keyword rankings from 3 to 11 in 10 weeks (Semrush data attached) / Ran Google Ads campaign with ₹4,800 spend, generating 62 leads at ₹77 CPL
- **Mock Interviews — Until You're Confident:** *Every student gets at least one full 1-on-1 mock interview before placement begins. Recorded. Reviewed together. You practice salary negotiation, tough questions, and portfolio presentation — until you're genuinely confident.*
- **Our Hiring Partner Network — 500+ Verified Companies:** *500+ verified companies actively hire our graduates — digital agencies, e-commerce brands, SaaS, FMCG, and startups across India. When you complete the programme, our placement team personally reaches out to the right contacts for your profile.*

### PAGES 9+ — COURSE CURRICULUM DEEP DIVE  ← apply the upgraded module design
Section opener:
- Title: **COURSE CURRICULUM — DEEP DIVE**
- Intro: *Everything you need to upskill yourself in digital marketing — SEO, social media, Google Ads, analytics, content marketing, email automation, and more. Built with AI tools woven into every module.*

**COURSE 1 — Professional Certification in Digital Marketing with AI · 3 Months | 132 Hours | Mon–Fri Weekdays**
Render each module as a color-coded card (code · title · sessions/hours badge) with grouped sub-topics:
- **M1 · Digital Marketing Foundation & Business Thinking** (2 Sessions | 4 Hours): Introduction to marketing, DM evolution, and the digital marketing ecosystem · Principles of marketing, ATL/BTL/TTL funnels, and integrated strategy · Market research and competitor analysis frameworks · Customer persona building and buyer journey mapping · AI model framework — how to choose between ChatGPT, Claude, and Gemini · Branding fundamentals, colour theory, and brand visual identity · North Star Metric, A3R3 funnel, and measuring what actually matters · Social media account creation and platform orientation
- **M2 · Website Design & Development with AI — WordPress** (2 Sessions | 4 Hours): WordPress website setup — domain, hosting, and site structure · Elementor page builder — designing professional pages without code · 10Web AI builder — generating websites from a text prompt · SEO-optimized website structure from the ground up · Designing high-converting landing pages · Website speed optimization and Core Web Vitals · Introduction to CRO principles — why your website design affects revenue
- **M3 · SEO with AI — Classic + Next-Gen Search** (12 Sessions | 24 Hours): Keyword research and strategic topic planning · On-page SEO — content, headings, image optimization, anchor tags · Technical SEO — sitemap, robots.txt, schema markup, error codes · Google Search Console (GSC) setup and mastery · GBP local SEO — NAP, attributes, hyperlocal ranking · AI-powered SEO tools — Surfer SEO, SEM Rush · Next-generation SEO — GEO (Generative Engine Optimization for ChatGPT/Gemini) · AEO (Answer Engine Optimization), AIO (Google AI Overviews), SXO · Off-page SEO — backlink creation, contextual links, internal linking · SEO content writing using AI — hybrid human + AI workflow · Algorithm updates tracker — how to respond when Google changes the rules
- **M4 · Social Media Marketing & Brand Intelligence** (11 Sessions | 22 Hours): Instagram — Business profile, UPABC optimization, Reels strategy, hashtag research · Facebook — Business page, Meta Ads Manager, audience targeting, ad objectives · LinkedIn — Profile optimization, business page, B2B lead generation · YouTube — Channel creation, SEO, Studio analytics, Shorts strategy · X (Twitter) — Account growth, intent-based targeting, Grok AI · Short-form video science — the Hook/Retain/Reward loop that drives virality · Influencer marketing — types, outreach, agreements, and ROI measurement · Social listening and sentiment analysis — Brand24, Google Alerts · AI video tools — HeyGen avatars, Veo 3 overview · ManyChat — comment-to-DM funnels and WhatsApp automation basics · WhatsApp Business marketing and broadcast lists
- **M5 · Google Ads, Bing Ads & Search Engine Marketing** (9 Sessions | 18 Hours): Google Ads account setup — expert-level structure and campaign types · Keyword research, match types, and negative keyword strategy · Search ads — ad copy, extensions, and Quality Score optimization · Display Network (GDN) and Responsive Display Ads · Video ads and YouTube ad campaigns · Shopping Ads and Google Merchant Center · Performance Max — asset groups, audience signals, and AI optimization · Smart bidding strategies and advanced targeting · Bing Ads — campaign setup, UET, UTM parameters, conversion tracking · Attribution models — from first-click to data-driven · Google Ads optimization, metrics, and reporting
- **M6 · Analytics, Tracking & Data Storytelling** (5 Sessions | 10 Hours): Google Analytics 4 (GA4) — setup, interface, key reports, and exploration · Event tracking and custom conversion setup · Google Tag Manager (GTM) — container setup, triggers, variables, preview mode · Looker Studio — connecting GA4, Ads, and GSC into one live dashboard · Microsoft Clarity — heatmaps, scroll maps, and session recordings · UTM governance and tracking taxonomy · Data storytelling — turning numbers into board-ready narratives · Attribution and multi-touch traffic analysis
- **M7 · Content Marketing Strategy & AI-Powered Production** (4 Sessions | 8 Hours): Content funnel strategy — TOFU, MOFU, BOFU content types and purpose · Keyword-led content planning and topic clustering · Long-form blog writing — structure, SEO hooks, and reader engagement · AI-assisted content production workflows — ChatGPT + Claude + human editing · Ad copy writing frameworks — hooks, angles, proof, CTA · Content repurposing — Blog → Reels → Email → LinkedIn in one workflow · Editorial calendar building and scheduling with Buffer
- **M8 · Conversion Rate Optimisation (CRO) Lab** (3 Sessions | 6 Hours): Funnel analysis — identifying leaks in the customer journey · Landing page anatomy — what high-converting pages have in common · A/B testing framework — hypothesis, setup, and reading statistical significance · Heatmaps and session recordings with Microsoft Clarity · Page speed as a conversion factor — measuring and fixing · Form optimization and lead capture best practices · CRO reporting — presenting findings to a client
- **M9 · Marketing Automation & CRM — Essentials** (3 Sessions | 6 Hours): HubSpot CRM — setup, contacts, pipelines, and deal management · HubSpot email sequences and lead nurturing basics · Zapier — building end-to-end automation workflows without code · Automated lead scoring and qualification · Scheduling and automating social media posts · AI-powered email sequences — from welcome to re-engagement
- **M10 · Email Marketing & Automation Deep-Dive** (3 Sessions | 6 Hours): Business email setup and list building strategies · Email campaign design — copy, layout, and calls to action · Bulk email campaigns and deliverability best practices · DKIM, SPF, DMARC — email authentication explained simply · A/B testing subject lines and email content · Segmentation, personalization, and drip campaign logic · Email analytics — open rate, CTR, bounce, and conversion metrics
- **D1–D2 · Industry Domain Deep Dives** (2 Sessions | 6 Hours): E-Commerce & D2C: How an E-commerce company grew to ₹1,500 Cr Revenue using Instagram and Meta Ads — unit economics, D2C vs marketplace, festive campaigns, quick commerce · Digital Marketing Agencies: How agencies thrives in — client servicing, media planning, multi-account management. Live media plan simulation.

**COURSE 2 — Post Graduate Certification in AI-Driven Digital Marketing · 5 Months | 220 Hours | All 13 Modules + All 3 Specialisations + 5 Industry Deep Dives**
- Lead-in (verbatim): *The complete, deepest digital marketing education. Course 2 includes every module from Course 1 — expanded and deeper — plus additional advanced modules, 3 specializations, 5 industry deep dives, and a real marketing spend on a live local business. Your resume will speak a different language when you complete this programme.*
- **Modules 1–10: Same as Course 1, But Deeper** — *All 10 core modules are included in Course 2 with expanded content, more live projects, and greater depth in each topic. Key additions vs Course 1:*
  - Module 3 SEO: + covering programmatic SEO, parasite SEO, international SEO, and App Store SEO (ASO)
  - Module 4 Social Media: + adding HeyGen AI video, Veo 3, and advanced influencer agreement frameworks
  - Module 7 Content: + covering UGC scripts, content audit frameworks, and landing page copy optimization
  - Module 9 Automation: Expanded to full scope — WhatsApp bots and Vibe coding
- **M11 · Performance Marketing & E-Commerce Growth** (9 Sessions | 18 Hours): Performance marketing strategy — audience targeting, segmentation, and persona building with AI · D2C vs Marketplace strategy — trade-offs in data ownership, margins, and brand control · Amazon Advertising — Sponsored Products, Sponsored Brands, Sponsored Display · Flipkart Advertising and marketplace ad ecosystems · Shopify — store setup, product listing, categories, coupons, analytics, and Shopify Payments · Dynamic remarketing — product catalog ads and cross-sell automation · E-Commerce SEO — product pages, collections, and site structure · Retail media networks — Blinkit, Swiggy Instamart, quick commerce ads · Advanced reporting — ROAS, CAC, LTV, and budget planning · Customer retention strategies and LTV maximization
- **M12 · Online Reputation Management & Brand Protection** (3 Sessions | 6 Hours): ORM fundamentals — why your online reputation is your most valuable marketing asset · Social listening with AI — Brand24, Mention, Google Alerts · Monitoring brand mentions across platforms in real time · Managing negative reviews — the exact response framework that converts critics to customers · Crisis management — response templates and escalation protocols · Building a proactive review generation system
- **M13 · Freelancing, Agency Operations & Business of Marketing** (4 Sessions | 8 Hours): Agency structure — how client servicing, strategy, creative, and media teams work together · Client lifecycle — pitching, onboarding, first 30 days, monthly reporting, renewal, upsell · How to write a media plan and present it to a client — the exact document used in agencies · Agency pricing models — retainer vs project vs performance vs hybrid · Fiverr and Upwork profile setup and optimization — Freelance Sprint · How to handle a client escalation when results are bad · CAC, LTV, ROAS — understanding the business metrics of marketing · Service packaging and pricing your services as a freelancer
- **3 Specializations – AI Driven Modules & Beyond:**
  - **S1 · SEO & AI Search Specialist** (6 Sessions | 12 Hours): Technical SEO deep-dive and crawl budget management · Advanced backlinking — digital PR and link acquisition at scale · AEO, GEO, AIO, SXO — the complete AI search stack for 2026 · Competitor backlink analysis and gap strategy · SEO audit lab — full site teardown and roadmap building · SEO ROI calculation and client reporting
  - **S2 · Performance Marketing & AI Ad Copywriting** (6 Sessions | 12 Hours): Advanced Google Ads optimization techniques beyond the basics · Meta Advantage+ and Performance Max deep-dive · UGC script writing and creator brief templates · Live ₹5,000 campaign sprint — you manage a real budget · Types of attribution models — practical application in campaigns · Advanced Looker Studio reporting for clients
  - **S3 · AI-Powered E-Commerce & Data-Driven Sales** (6 Sessions | 12 Hours): Shopify advanced — beyond basics to analytics, automation, and scaling · Amazon PPC — Sponsored Products campaign architecture · D2C strategy — when to go direct vs when to go marketplace · Cart abandonment recovery — ads + email + WhatsApp sequence · Customer retention strategies and LTV maximization · E-Commerce P&L basics — CAC, AOV, LTV, and contribution margin
- **5 Industry Domain Deep Dives** — intro (verbatim): *Visualize this – You walk into an interview and you speak the language of the recruiting company. You tell them the metrics that they have been thinking of improvise in their marketing campaigns. You suggest them the AI workflow automations they can implement in their teams – Now you can see them becoming serious in listening to you – For all this, you need domain knowledge. We build that in you!*
  - E-Commerce & D2C — Mamaearth's journey to ₹1,500 Cr: unit economics, festive campaigns, D2C vs marketplace, quick commerce
  - HealthTech & EdTech — PhysicsWallah's scale using YouTube and community: CPL optimization, lead funnels, EdTech webinar marketing
  - SaaS & Tech — Zoho vs Salesforce: B2B SaaS marketing, PLG, Account-Based Marketing, inbound marketing at scale
  - Retail, FMCG & Consumer Brands — Amul's social media playbook: omni-channel, influencer at scale, festive/IPL campaigns
  - Digital Marketing Agencies — Live simulation: receive a real brief, build a full media plan, present to an agency founder
- **PGCP Course — Capstone Project:** *Real-Budget Agency Sprint (Month 5, 4 weeks): Your team of 3–4 manages a live ₹5,000 ad campaign for a real local business or BlueTick partner brand — across Meta Ads and Google Ads. Deliverables: full campaign strategy, weekly reports, a final client presentation, and a published portfolio case study with actual spend and results.*

**COURSE 3 — ELEVATE™ · Digital Marketing + AI for Business · 7 Months | 268 Hours | The Most Advanced Marketing + AI Programme in India**
- Lead-in (verbatim): *ELEVATE™ is not just a digital marketing with AI programme. It is a strategic qualification for people who want to drive decisions — not just execute campaigns. Months 1–5 are identical to PGCP Course. Months 6 and 7 add a dedicated AI for Business Teams track: covering AI automations, AI native Analytics, Application creating with AI non-coding tools with an enterprise-ready AI integration capstone.*
- **Who is ELEVATE™ for?**
  - Graduates who want to combine AI digital skills with business thinking
  - Working professionals and managers who want to lead AI transformation in their organisation
  - Business owners who want to use AI to automate workflows along with marketing
  - Ambitious freshers who want to fast-track to a senior or leadership role
  - Founders and Consultants who want to offer AI strategy as a premium service
- **Months 6–7: The AI for Business Programme — What's Covered** — intro (verbatim): *These sessions cover content that genuinely goes beyond any other programme in the country — to create professionals that organizations will hunt. Truly for the highly motivated!* Render B1–B16 as color-coded cards (code · title · description):
  - B1 · AI Business Strategy Overview & Maturity Model — AI transformation lifecycle, top 20 AI business patterns, AI maturity assessment
  - B2 · AI-Native Analytics & Business Insight Generation — Conversational analytics, Text-to-SQL, multi-source synthesis, Julius AI, Power BI Copilot
  - B3 · AI Evaluation & Metrics for AI Products — Model performance metrics, business metrics, trust metrics, user correction feedback loops
  - B4 · AI-Powered Project & Operations Management — Meeting intelligence, AI project planning, risk mapping, SOP writing, Claude Cowork
  - B5 · UI Mockup & Rapid Prototyping with AI — No-code builders (Lovable, v0.dev), describe a tool → get a working UI → deploy live
  - B6 · Design Thinking for AI Products — Designing for ambiguity, explainability, responsible AI, bias & privacy, annotated wireframes
  - B7 · Identifying High-Impact AI Use Cases — AI use case archetypes, value quantification formula, data readiness assessment, ROI model
  - B8 · AI for Finance — Expense auditing, invoice extraction, forecast narrative generation, Finance AI privacy rules
  - B9 · AI for Human Resources — JD writer, AI resume screener, interview question generation, policy Q&A, HR data privacy
  - B10 · AI for Operations & Supply Chain — Demand planning, supplier email automation, SOP drafting, ops AI playbook
  - B11 · Enterprise AI Adoption & Change Management — Automation spectrum, automation bias, vendor risk, managing AI-resistant teams
  - B12 · AI Strategy & Governance — Build vs Buy vs Partner, AI economics, AI org design, risk communication
  - B13 · AI Ethics, Responsible AI & Regulatory Landscape — Bias in decisions, DPDP Act, GDPR, AI auditability, responsible AI principles
  - B14 · AI Literacy & Team Enablement — Developing AI confidence across teams, AI champions programme, avoiding deskilling
  - B15 · AI Readiness & 12-Month Roadmap — Org readiness assessment, 12-month AI roadmap with milestones and governance gates
  - B16 · Capstone: Business-Ready AI Integration Proposal — Team presentation: business problem → AI-augmented workflow → tools → ROI → governance plan
- Banner: **ELEVATE™ Graduates earn the AI for Business Certificate from BlueTick Academy — a standalone qualification.**

### 50+ CASE STUDIES
- H1: **50+ Case Studies** · Eyebrow: **Sneak Peek Into Successful Businesses**
- Intro: *You don't just learn digital marketing. You study how the world's most successful brands actually use it.*
- 12 case-study cards (brand + verbatim description):
  - **Amazon** — How Amazon uses hyper-personalisation, sponsored product ads, and Prime loyalty marketing to convert 300M+ customers — and what every marketer can steal from their playbook.
  - **Myntra** — Fashion retail at scale: how Myntra uses influencer content, live shopping, and search intent ads to own every step of the fashion discovery journey.
  - **Netflix India** — Content marketing as a growth engine: how Netflix India uses social media, meme marketing, and release campaigns to drive subscriptions without discounting.
  - **Zomato** — How Zomato turned email, push notifications, and Twitter/X into their most powerful retention tools — and why their social media team is feared by every brand manager.
  - **Lenskart** — D2C disruption: how Lenskart used Google Ads, virtual try-on technology, and a tight remarketing funnel to beat traditional optical chains at their own game.
  - **PhysicsWallah** — India's most cost-effective education brand: how PW scaled to ₹1,500 Cr valuation using YouTube, Telegram, and community-first marketing — with almost no paid ads.
  - **boAt** — How a ₹700 Cr electronics brand was built on Instagram, influencer seeding, and a community strategy that made customers feel like founders.
  - **Mamaearth** — Clean beauty at scale: how Mamaearth used D2C Facebook Ads, influencer marketing, and Amazon marketplace together to build a ₹1,000+ Cr brand from scratch.
  - **Swiggy** — Hyper-local performance marketing: how Swiggy uses AI-powered push notifications, geo-targeted ads, and loyalty loops to drive repeat orders every 3.2 days per user.
  - **Nykaa** — How Nykaa owns the beauty category through SEO-first content, a video-led influencer strategy, and a loyalty programme that turns customers into brand ambassadors.
  - **Zepto** — Quick commerce marketing in the age of 10-minute delivery: how Zepto uses urgency-driven ad creatives and impulse-buy psychology to win the quick commerce wars.
  - **CRED** — A masterclass in brand-first marketing: how CRED built aspiration, exclusivity, and cult-like loyalty without a single hard-sell — and what that means for your marketing strategy.
- Footer line (verbatim): *+ 38 more case studies including Airbnb, Dunzo, OYO, Byju's, Meesho, Cult.fit, Sugar Cosmetics, Flipkart, Tata Neu, Rapido, and more.*

### HANDS-ON LEARNING
- H1: **This Is What Learning at BlueTick Really Feels Like.**
- H2: **What 'Hands-On Learning' Actually Means Here**
- List (verbatim):
  - You build a real website in Module 2 — it goes live on the internet with your name
  - You do keyword research on real brands and compare your work to live rankings
  - You create social media content for real pages
  - You set up a real Google Analytics account and connect it to a real website
  - You run a real Google Ads or Meta Ads campaign — with real money
  - Every project ends with a portfolio case study — numbers, screenshots, and published results – each elevating the value of your resume.
- (Optional: a tasteful "Life @ BlueTick" framed callout in the reference style. Do NOT fabricate photos — use a clean graphic block if no photos are supplied.)

### TOP COMPANIES — ALUMNI
- H1: **Top Companies Our Alumni Work With**
- Intro: *10,000+ graduates. 500+ hiring partners. These are some of the companies where our alumni work:*
- Grouped lists (verbatim):
  - **Global Tech & Consulting:** Accenture · Google · Oracle · AT&T · SAP · Adobe · EY · Infosys · Yahoo
  - **E-Commerce & Retail:** Amazon · Flipkart · Myntra · Nykaa · Lenskart · Lakme
  - **Food & Delivery:** Swiggy · Zomato · MakeMyTrip · Zoomcar
  - **EdTech & FinTech:** Unacademy · UpGrad · simplilearn · ICICI Bank
  - **Industrial & Consumer:** TATA · Bosch · Philips · KTM · ITC Limited
  - **Startups & Digital Agencies:** Reddit · uplers · socialpanga · SellerCircle · OneWrk · Moshi Moshi · eka · Langoor · TOYAMA
- Strip: **97% Placement Rate · 500+ Hiring Partners · 10,000+ Careers Built**

### CERTIFICATIONS
- H1: **Certifications**
- Intro: *Our curriculum is specifically structured so that every certification prep is embedded in the learning — you're exam-ready by the time each module ends.*
- **Certifications You Will Earn** — grouped by issuer (verbatim), and note PCP vs PGCP split:
  - **PCP COURSE:** Google Ads Search, Display, Video & Performance AI Certification · Google Analytics (GA4) Certification · Digital Marketing Fundamentals by Google · HubSpot — Inbound Marketing, Email Marketing, Content Marketing, Social Media, Digital Advertising · Bing Ads Search Advertising Certification · BlueTick Academy Course Completion Certificate
  - **PGCP Course — Additional Certifications (beyond PCP):** Meta Blueprint — Digital Marketing Associate · Google Tag Manager Fundamentals · LinkedIn Marketing Labs Certifications · HubSpot CRM Certification
  - Issuer groupings for layout:
    - **Google** — Google Ads Search · Google Ads Display · Google Ads Video · AI-Powered Performance Ads · Google Analytics (GA4) · Digital Marketing Fundamentals · Google Tag Manager Fundamentals
    - **HubSpot Academy** — Inbound Marketing · Email Marketing · Content Marketing · Social Media Marketing · Digital Advertising · HubSpot CRM
    - **Microsoft / Bing Ads** — Bing Ads Search Advertising Certification
    - **Meta Blueprint** — Digital Marketing Associate Certification
    - **LinkedIn Marketing Labs** — LinkedIn Marketing Fundamentals · Content Marketing Certification
    - **BlueTick Academy** — BlueTick Course Completion Certificate (all 3 courses) · AI for Business Certificate (Course 3 — ELEVATE™ only)

### 50+ TOOLS & TECHNOLOGIES
- H2: **50+ Tools & Technologies — You Use All of Them**
- List (verbatim — render as a clean logo grid or styled chip grid in the reference style):
  10Web · Elementor · WordPress · Semrush · Ahrefs · Screaming Frog · SEOptimer · Google Search Console · Bing Webmaster Tools · Google Ads · Meta Ads Manager · Microsoft Ads · LinkedIn Campaign Manager · Google Analytics 4 · Google Tag Manager · Looker Studio · Microsoft Clarity · Hotjar · HubSpot CRM · Zapier · n8n · Make (Integromat) · ManyChat · Gupshup · Canva · Adobe Firefly · VEED · HeyGen · Looka · Buffer · YouTube Studio · Mailchimp · Brevo · ChatGPT · Claude · Gemini · Grok · AIPRM · Perplexity · Julius AI · Lovable · v0.dev · Notion AI · Miro · Google Sheets · Shopify · Ninja Forms · Merchant Center · Dux-Soup · GT Metrix · SimilarWeb · Meta Ad Library + more
- Footer line: *BlueTick Academy, Bengaluru | Classrooms available · Online batches available · Learners from 30+ countries*

### FINAL CTA PAGE
- Heading: **Your Career Starts**
- Sub: **One Move. One Decision. A Completely Different Career.**
- Body (verbatim): *You've been thinking about this for a while. You've wondered if now is the right time. It is. Every month you wait is a salary you didn't earn, a promotion someone else got, a future that's sitting there — waiting for you to reach for it. BlueTick has placed 10,000+ students. 97% of them were hired within 30-45 days of finishing. A year from now, you will either wish you had started — or be glad you did. Call us today.*
- 3-course mini comparison strip (verbatim):
  - Course 1 · Professional Certification in Digital Marketing with AI · 3 Months · ₹3–5 LPA
  - Course 2 · Post Graduate Certification in AI-Driven Digital Marketing · 5 Months · ₹4–7 LPA
  - Course 3 · ELEVATE™ · Digital Marketing + AI for Business · 7 Months · ₹5–10 LPA*
- Contact block (large): **Call Us Now +91 9606 9955 25 · Email Us info@bluetickacademy.com · Visit Us Online www.bluetickacademy.com**
- Fine print: *Salary ranges are indicative. Actual compensation depends on individual skill, portfolio, and the hiring organization.*

## OUTPUT REQUIREMENTS
- One cohesive **PDF**, A4 portrait, every page on-brand with footer.
- Reproduce all copy above **verbatim** (the content is locked).
- Save to `/mnt/user-data/outputs/BlueTick_Brochure_2026.pdf` and present it.
- Prioritise clarity and a colorful-yet-clean look throughout; the curriculum/module section in particular
  must look detailed, color-coded, and neatly organised — never cramped.
