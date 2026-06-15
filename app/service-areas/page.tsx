import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICE_AREAS_NAV, BUSINESS } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'Service Areas | Dent & Scratch Direct',
  description: 'TODO: meta description — mobile car repair across South East Melbourne. Diarmuid comes to you.',
  robots: { index: false, follow: true },
}

export default function ServiceAreasPage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
        Where we go
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        Service Areas
      </h1>
      <p className="text-neutral-muted mt-4 max-w-[40em] text-[17px] leading-relaxed">
        {/* TODO: hub intro — we come to you across South-East Melbourne, coverage + hours + contact trust strip */}
      </p>
      {/* TODO: zone card grid — each card: zone name, one-line description, suburb list, View zone link */}
      {/* TODO: fallback section — suburb not listed? we travel further for bigger jobs; call + send-a-photo CTAs */}
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_AREAS_NAV.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center justify-between p-5 bg-neutral-page rounded-xl border border-neutral-border hover:border-green-primary transition-colors no-underline group h-full"
            >
              <span className="font-semibold text-neutral-ink group-hover:text-green-primary transition-colors">
                {label}
              </span>
              <span className="text-neutral-muted group-hover:text-green-primary transition-colors shrink-0 ml-2">&#8594;</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-[15px] text-neutral-muted">
        Suburb not listed? Call{' '}
        <a href={BUSINESS.phoneHref} className="text-green-primary font-semibold no-underline hover:text-green-dark">
          {BUSINESS.phone}
        </a>
        {' '}— Diarmuid travels further for bigger jobs.
      </p>
    </main>
  )
}
