import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'Mobile Car Repairs — Outer East Melbourne | Dent & Scratch Direct',
  description: 'TODO: meta description — mobile dent and scratch repair in Ringwood, Croydon, Boronia, Rowville and Outer East Melbourne.',
  robots: { index: false, follow: true },
}

const SUBURBS = [
  'Ringwood', 'Croydon', 'Bayswater', 'Boronia', 'Ferntree Gully',
  'Rowville', 'Wantirna', 'Knoxfield', 'Scoresby', 'Mooroolbark',
  'Kilsyth', 'Heathmont', 'Vermont',
]

export default function OuterEastMelbournePage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <Link href="/service-areas/" className="text-[13px] text-neutral-muted hover:text-green-primary no-underline transition-colors">
        &#8592; All service areas
      </Link>
      <span className="block font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary mt-4">
        Zone 4
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        Outer East Melbourne
      </h1>
      <p className="text-neutral-muted mt-4 max-w-[40em] text-[17px] leading-relaxed">
        {/* TODO: zone intro — real local detail, landmark references, travel note */}
      </p>
      {/* TODO: real job examples from this zone */}
      {/* TODO: Add Service + areaServed JSON-LD schema */}
      <section className="mt-12">
        <h2 className="font-display font-bold text-[22px] text-neutral-ink mb-3">Areas we cover</h2>
        <p className="text-neutral-muted text-[15px] leading-relaxed">{SUBURBS.join(' · ')}</p>
      </section>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/free-quote/" className="no-underline inline-flex items-center gap-2 bg-green-primary text-white font-bold text-[15px] px-[24px] py-[13px] rounded-chip hover:-translate-y-0.5 hover:bg-green-dark transition-all">
          Get a free quote &#8594;
        </Link>
        <a href={BUSINESS.phoneHref} className="no-underline inline-flex items-center gap-2 bg-white border border-neutral-border text-neutral-ink font-semibold text-[15px] px-[20px] py-[13px] rounded-chip hover:border-green-primary hover:text-green-primary transition-all">
          &#9742; {BUSINESS.phone}
        </a>
      </div>
    </main>
  )
}
