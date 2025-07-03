import './globals.css'

export const metadata = {
  title: 'Stephen Campbell - Full Stack Developer',
  description: 'Stephen Campbell is a full-stack developer and computer programmer. Chemical engineer turned programmer solving complex problems through intelligent automation and ai-powered solutions.',
  keywords: [
    'Stephen Campbell',
    'Stephen Campbell developer',
    'Stephen Campbell programmer',
    'Stephen Campbell Canada',
    'full stack developer',
    'computer programmer',
    'web development',
    'React',
    'Next.js',
    'TypeScript',
    'automation',
    'ai-powered solutions',
    'McMaster University',
    'Little Exits',
    'chemical engineer',
    'Canadian developer',
    'Ontario developer'
  ].join(', '),
  authors: [{ name: 'Stephen Campbell', url: 'https://stepocampbell.com' }],
  creator: 'Stephen Campbell',
  publisher: 'Stephen Campbell',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Stephen Campbell - Full Stack Developer',
    description: 'Stephen Campbell is a full-stack developer and computer programmer. Chemical engineer turned programmer solving complex problems through intelligent automation and ai-powered solutions.',
    url: 'https://stepocampbell.com',
    siteName: 'Stephen Campbell - Portfolio',
    images: [
      {
        url: 'https://stepocampbell.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stephen Campbell - Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_CA',
    type: 'profile',
    profile: {
      firstName: 'Stephen',
      lastName: 'Campbell',
      username: 'stepocampbell',
      gender: 'male',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephen Campbell - Full Stack Developer',
    description: 'Canadian full-stack developer and computer programmer solving complex problems through intelligent automation and ai-powered solutions.',
    images: ['https://stepocampbell.com/og-image.png'],
    creator: '@stepocampbell',
  },
  alternates: {
    canonical: 'https://stepocampbell.com',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Stephen Campbell",
    "jobTitle": "Full Stack Developer",
    "description": "Chemical engineer turned programmer solving complex problems through intelligent automation and ai-powered solutions",
    "url": "https://stepocampbell.com",
    "image": "https://stepocampbell.com/og-image.png",
    "sameAs": [
      "https://github.com/campbellsinvestment",
      "https://linkedin.com/in/stepocampbell"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "HTML/CSS",
      "JavaScript",
      "PHP",
      "Bootstrap",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Supabase",
      "API Development",
      "Cloud Deployment",
      "WordPress",
      "TypeScript",
      "Chemical Engineering"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA",
      "addressRegion": "Ontario"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "McMaster University"
    },
    "worksFor": [
      {
        "@type": "Organization",
        "name": "McMaster University",
        "jobTitle": "WordPress Developer"
      },
      {
        "@type": "Organization",
        "name": "Little Exits",
        "jobTitle": "Full Stack Developer, Founder"
      }
    ]
  }

  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://stepocampbell.com" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Ontario, Canada" />
        <meta name="geo.position" content="43.2557;-79.8711" />
        <meta name="ICBM" content="43.2557, -79.8711" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
