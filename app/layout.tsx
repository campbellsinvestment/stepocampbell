import './globals.css'

export const metadata = {
  title: 'Stephen Campbell - AI-Powered Full Stack Developer',
  description: 'AI-powered full-stack developer specializing in prompt engineering, modern web technologies, and intelligent automation solutions.',
  keywords: 'developer, full stack, AI, prompt engineering, web development, react, next.js, typescript, automation, artificial intelligence',
  authors: [{ name: 'Stephen Campbell' }],
  creator: 'Stephen Campbell',
  openGraph: {
    title: 'Stephen Campbell - AI-Powered Full Stack Developer',
    description: 'AI-powered full-stack developer specializing in prompt engineering, modern web technologies, and intelligent automation solutions.',
    url: 'https://stepocampbell.com',
    siteName: 'Stephen Campbell Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephen Campbell - AI-Powered Full Stack Developer',
    description: 'AI-powered full-stack developer specializing in prompt engineering, modern web technologies, and intelligent automation solutions.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
