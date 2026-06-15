import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter, Saira_Condensed } from 'next/font/google'
import '@/styles/globals.css'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider'
import { getLocalBusinessSchema } from '@/lib/schema'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-saira',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#009028',
}

export const metadata: Metadata = {
  title: 'Dent & Scratch Direct | Mobile Car Repairs South East Melbourne',
  description:
    'Mobile dent, scratch and bumper repair across South East Melbourne. We come to you. Same-day quotes, fully insured. Call Diarmuid on 0447 847 655.',
  metadataBase: new URL('https://dentandscratchdirect.com.au'),
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/logo/favicon.ico' },
      { url: '/logo/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/icon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-AU"
      className={`${bricolage.variable} ${inter.variable} ${saira.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
