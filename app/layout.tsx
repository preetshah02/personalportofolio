import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './providers/theme-provider'
import { CursorGlow } from './components/ui/cursor-glow'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Preet Shah - Full Stack Developer',
  description: 'Full Stack Developer with expertise in React, Node.js, and modern web technologies. View my portfolio and get in touch.',
  keywords: ['developer', 'react', 'nextjs', 'typescript', 'portfolio', 'full stack'],
  authors: [{ name: 'Preet Shah' }],
  creator: 'Preet Shah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://preetshah.dev',
    title: 'Preet Shah - Full Stack Developer',
    description: 'Full Stack Developer with expertise in React, Node.js, and modern web technologies.',
    siteName: 'Preet Shah Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Preet Shah - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preet Shah - Full Stack Developer',
    description: 'Full Stack Developer with expertise in React, Node.js, and modern web technologies.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 