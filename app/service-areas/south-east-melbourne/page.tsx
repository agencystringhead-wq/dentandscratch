import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'Mobile Car Repairs — Berwick & South-East Corridor | Dent & Scratch Direct',
  description: 'TODO: meta description — mobile dent, scratch and bumper repair in Berwick, Narre Warren, Pakenham and surrounds.',
  robots: { index: false, follow: true },
}

const SUBURBS = [
  'Berwick', 'Narre Warren', 'Narre Warren East', 'Officer', 'Pakenham',
  'Beaconsfield', 'Endeavour Hills', 'Hallam', 'Hampton Park', 'Doveton',
  'Clyde North', 'Botanic Ridge', 'Blind Bight',
]

export default function SouthEastMelbournePage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <Link href="/service-areas/" className="text-[13px] text-neutral-muted hover:text-green-primary no-underline transition-colors">
        &#8592; All service areas
      </Link>
      <span className="block font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary mt-4">
        Zone 1
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        Berwick &amp; South-East Corridor
      </h1>
      <p className="text-neutral-muted mt-4 max-w-[40em] text-[17px] leading-relaxed">
        {/* TODO: zone intro — real local detail, landmark references, travel note from Berwick base */}
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
