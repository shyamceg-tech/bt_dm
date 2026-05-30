// SEO.js Component
import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Digital Marketing Courses in Bangalore – Enroll at BlueTick Academy!</title>
      <meta
        name="description"
        content="BlueTick Academy offers Career oriented Digital Marketing Course in Bangalore.Enroll in basics to advanced Digital Marketing Training in Bangalore. BlueTick Academy is rated as the Top Digital Marketing Training Institute in Bangalore based on faculty experience and placement record."
      />
      <meta name="keywords" content="Digital Marketing Course, SEO Training, PPC Training, Social Media Marketing, Bangalore Marketing Course" />
      <meta name="author" content="BlueTick Academy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Digital Marketing Courses in Bangalore – Enroll at BlueTick Academy!" />
      <meta property="og:description" content="Join the best digital marketing training in Bangalore at BlueTick Academy. Learn SEO, PPC, Social Media, and more from industry experts." />
      <meta property="og:image" content="/images/digital-marketing-course.jpg" />
      <meta property="og:url" content="https://www.bluetickacademy.com/digital-marketing-course" />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content="Digital Marketing Courses in Bangalore" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Marketing Courses in Bangalore – Enroll at BlueTick Academy!" />
      <meta name="twitter:description" content="Advance your career with the best digital marketing course in Bangalore. Learn from experienced professionals at BlueTick Academy." />
      <meta name="twitter:image" content="/images/digital-marketing-course.jpg" />
      <meta name="twitter:image:alt" content="Digital Marketing Course" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.bluetickacademy.com/digital-marketing-course" />
      <link rel="icon" href="/icon.png" sizes="any" />
      
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Digital Marketing Course in Bangalore",
            "description": "BlueTick Academy offers a career-oriented Digital Marketing Course in Bangalore covering SEO, PPC, social media marketing, and more.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "BlueTick Academy",
              "url": "https://www.bluetickacademy.com",
            },
            "image": [
              {
                "url": "/images/digital-marketing-course.jpg",
                "alt": "Digital Marketing Courses in Bangalore",
              },
              {
                "url": "/images/digital-marketing-training.jpg",
                "alt": "Digital Marketing Training Institute in Bangalore",
              },
            ],
          }),
        }}
      />
    </Head>
  );
}
