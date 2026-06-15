import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Dent & Scratch Direct | Mobile Car Repairs South East Melbourne',
  description:
    'Mobile dent, scratch and bumper repair across South East Melbourne. We come to you. Same-day quotes, fully insured. Call Diarmuid on 0447 847 655.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
