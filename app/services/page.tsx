import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES_NAV } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'Services | Dent & Scratch Direct',
  description: 'TODO: meta description — full services hub for mobile car repair across South East Melbourne.',
  robots: { index: false, follow: true },
}

export default function ServicesPage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
        What we do
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        Services
      </h1>
      <p className="text-neutral-muted mt-4 max-w-[40em] text-[17px] leading-relaxed">
        {/* TODO: hub intro copy — Diarmuid comes to you, covers all of these */}
      </p>
      {/* TODO: service card grid with descriptions, time estimates, and CTAs */}
      {/* TODO: Add Service JSON-LD schema */}
      <ul className="mt-12 flex flex-col gap-3">
        {SERVICES_NAV.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center justify-between p-5 bg-neutral-page rounded-xl border border-neutral-border hover:border-green-primary transition-colors no-underline group"
            >
              <span className="font-semibold text-neutral-ink group-hover:text-green-primary transition-colors">
                {label}
              </span>
              <span className="text-neutral-muted group-hover:text-green-primary transition-colors">&#8594;</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
