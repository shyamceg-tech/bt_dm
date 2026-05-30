/**
 * AiToolStack.jsx — BlueTick 2026 Refresh
 *
 * RSC. The "50+ AI Tool Stack you'll master" section.
 * Displays a logo-only grid of tool icons (no text labels).
 */

import Image from 'next/image';
import styles from './AiToolStack.module.css';

const LOGOS = [
  { name: 'Google Ads',        logo: 'img-7179.jpg' },
  { name: 'Meta Ads Manager',  logo: 'img-7177.jpg' },
  { name: 'HubSpot',           logo: 'img-7178.png' },
  { name: 'Zapier',            logo: 'img-7175.png' },
  { name: 'n8n',               logo: 'n8n.webp' },
  { name: 'Claude',            logo: 'claude.webp' },
  { name: 'ChatGPT',           logo: 'img-7181.png' },
  { name: 'Jasper',            logo: 'img-7180.jpg' },
  { name: 'Notion AI',         logo: 'img-7156.png' },
  { name: 'Surfer SEO',        logo: 'img-7176.png' },
  { name: 'ActiveCampaign',    logo: 'img-7170.png' },
  { name: 'Klaviyo',           logo: 'img-7168.jpg' },
  { name: 'ManyChat',          logo: 'img-7165.png' },
  { name: 'Brevo',             logo: 'img-7163.jpg' },
  { name: 'Lovable',           logo: 'img-7159.png' },
  { name: 'Julius AI',         logo: 'img-7160.jpg' },
  { name: 'VWO',               logo: 'img-7162.jpg' },
  { name: 'Marketo',           logo: 'img-7171.png' },
  { name: 'Ubersuggest',       logo: 'img-7157.png' },
  { name: 'Tidio',             logo: 'img-7166.png' },
  { name: 'Mutiny',            logo: 'img-7172.jpg' },
  { name: 'Phrasee',           logo: 'img-7174.jpg' },
];

export default function AiToolStack() {
  return (
    <section className={styles.section} aria-labelledby="ai-toolstack-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>The Stack</p>
        <h2 className={styles.heading} id="ai-toolstack-heading">
          The <span className={styles.count}>50+</span> AI Tool Stack you&rsquo;ll master
        </h2>
        <p className={styles.subline}>
          Hands-on practice on the exact tools agencies are hiring for this
          quarter &mdash; not the ones your college taught two years ago.
          Curriculum refreshes every quarter.
        </p>

        <div
          className={styles.logo_grid}
          role="list"
          aria-label="50+ AI and marketing tools covered in the curriculum"
        >
          {LOGOS.map((t) => (
            <div key={t.name} className={styles.logo_item} role="listitem">
              <Image
                src={`/img/ai-tools/${t.logo}`}
                alt={t.name}
                width={80}
                height={80}
                className={styles.logo_img}
              />
            </div>
          ))}
          <div className={styles.more_item}>
            <span className={styles.more_text}>+ 30 more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
