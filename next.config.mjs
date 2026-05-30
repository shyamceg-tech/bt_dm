/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Deploy target: Vercel (full Next.js runtime).
     `output: 'export'` removed in Batch 2B so:
       - /api/bigin/route.js can execute as a serverless function
       - next/image's AVIF/WebP optimizer can run at request time
     RSC pages still ship as pre-rendered HTML at build — no perf regression vs. export. */
  images: {
    /* Modern formats first; next/image picks per Accept header. */
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
};

export default nextConfig;
