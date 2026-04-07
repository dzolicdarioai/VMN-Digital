import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { LocaleProvider } from '@/components/locale-provider'

import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const defaultSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vmn-digital.com'

export const metadata: Metadata = {
  metadataBase: new URL(defaultSiteUrl),
  title: {
    default:
      'VMN Digital | Web Design & Performance · VMN – Visual Marketing Network',
    template: '%s | VMN Digital',
  },
  description:
    'Premium web design and performance optimization. VMN – Visual Marketing Network helps your business grow online—start with a free analysis.',
  applicationName: 'VMN Digital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['hr_HR'],
    url: '/',
    siteName: 'VMN Digital',
    title: 'VMN Digital | Web Design & Performance',
    description:
      'Premium web design and performance optimization. VMN – Visual Marketing Network.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'VMN Digital — VMN – Visual Marketing Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VMN Digital | Web Design & Performance',
    description:
      'Premium web design and performance optimization. VMN – Visual Marketing Network.',
    images: ['/og.png'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${geist.className} font-sans antialiased`}
      >
        <LocaleProvider>{children}</LocaleProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

