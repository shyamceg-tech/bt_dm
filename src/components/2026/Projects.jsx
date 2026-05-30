/**
 * Projects.jsx — BlueTick 2026 Refresh
 *
 * RSC. Ten project cards from data array — horizontally scrolling on mobile,
 * 2-col grid at 768px, 3-col grid at 1024px. Each card has a "Live Client
 * Project" pill, title, attribution, tool chips, and bottom result line.
 *
 * Phase 1 source: bluetick-2026-refresh-v3.html lines 8353–8485.
 *
 * The result `<strong>` markup is rendered via `dangerouslySetInnerHTML`
 * because the result strings contain inline emphasis from the original copy
 * (the `<strong>` is decorative, not a security risk). Each string is a
 * static literal from this file — no user input ever reaches this prop.
 */

import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: 'AI-Powered Content Summarizer',
    author: 'Priya R.',
    client: '[Client]',
    tools: ['GPT-4', 'Custom GPT', 'Notion AI'],
    result: 'Custom GPT trained on brand voice. Now generating <strong>40+ marketing assets</strong> per week internally.',
  },
  {
    title: 'n8n Workflow Automation',
    author: 'Arjun M.',
    client: 'BookMyScans',
    tools: ['n8n', 'WhatsApp Business API', 'Google Sheets'],
    result: 'Automated lead-to-WhatsApp pipeline. Cut response time from <strong>4 hours to 90 seconds</strong>.',
  },
  {
    title: 'Performance Marketing Campaign',
    author: 'Sneha K.',
    client: 'Decfort',
    tools: ['Meta Ads', 'GA4', 'Looker Studio'],
    result: 'Meta Advantage+ campaign at ₹2L monthly spend. Generated <strong>312 qualified leads at ₹640 CPL</strong>.',
  },
  {
    title: 'SEO Ranking Project',
    author: 'Rahul V.',
    client: '[Client]',
    tools: ['Ahrefs', 'GSC', 'AI-assisted content briefs'],
    result: 'Moved <strong>8 commercial keywords</strong> from page 3 to page 1 in 11 weeks.',
  },
  {
    title: 'Landing Page Creation & Deployment',
    author: 'Anjali D.',
    client: '[Client]',
    tools: ['Webflow', 'GA4', 'Hotjar'],
    result: 'Built and shipped 4 conversion-optimized pages with A/B tests. Conversion rate improved <strong>from 1.8% to 4.2%</strong>.',
  },
  {
    title: 'AI Chatbot for Customer Support',
    author: 'Karthik P.',
    client: '[Client]',
    tools: ['Claude API', 'Make.com', 'Intercom'],
    result: 'Claude-powered chatbot handling <strong>60% of Tier 1</strong> customer queries.',
  },
  {
    title: 'Google Ads Search Campaign',
    author: 'Divya S.',
    client: '[Client]',
    tools: ['Google Ads', 'GA4', 'Looker Studio'],
    result: 'Reduced cost-per-acquisition from <strong>₹1,200 to ₹380</strong> over 6 weeks.',
  },
  {
    title: 'Programmatic SEO Build',
    author: 'Vivek R.',
    client: '[Client]',
    tools: ['Webflow CMS', 'GPT-4', 'Ahrefs'],
    result: 'Launched <strong>400+ AI-assisted</strong> location pages. <strong>18,000 organic visitors</strong> in month 2.',
  },
  {
    title: 'Email Marketing Automation',
    author: 'Pooja G.',
    client: '[Client]',
    tools: ['Klaviyo', 'Custom GPT for copy'],
    result: 'Lifecycle email flow driving <strong>22% of monthly revenue</strong> for a D2C brand.',
  },
  {
    title: 'Brand Voice Custom GPT',
    author: 'Aditya B.',
    client: 'Decfort',
    tools: ['ChatGPT', 'Custom GPT', 'Brand archives'],
    result: 'Trained on <strong>200+ brand assets</strong>. Now used by their internal marketing team weekly.',
  },
];

export default function Projects() {
  return (
    <section className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <h2 className={styles.heading} id="projects-heading">
          Real work our students built &mdash; for real companies
        </h2>
        <p className={styles.subline}>
          Every project below was deployed, used, and measured by Companies.
          Not just a simulation. Your project list will look like this in 90 days.
        </p>

        <ol className={styles.grid}>
          {PROJECTS.map((p) => (
            <li key={p.title} className={styles.card}>
              <span className={styles.tag}>
                <span className={styles.tag_dot} />
                Live Client Project
              </span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.attribution}>
                Built by <strong>{p.author}</strong> for <strong>{p.client}</strong>
              </p>
              <div className={styles.tools}>
                {p.tools.map((t) => (
                  <span key={t} className={styles.tool}>{t}</span>
                ))}
              </div>
              <p
                className={styles.result}
                dangerouslySetInnerHTML={{ __html: p.result }}
              />
            </li>
          ))}
        </ol>

        <div className={styles.scroll_hint} aria-hidden="true">
          <span className={styles.scroll_hint_dots}>
            <span /><span /><span /><span />
          </span>
          <span>Swipe for more</span>
          <span className={styles.scroll_hint_arrow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
