import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'Before & After | Dent & Scratch Direct',
  description: `TODO: meta description — real before-and-after repairs by Diarmuid across South East Melbourne.`,
  robots: { index: false, follow: true },
}

export default function OurWorkPage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
        Real repairs
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        Before &amp; After
      </h1>
      <p className="text-neutral-muted mt-4 max-w-[40em] text-[17px] leading-relaxed">
        {/* TODO: intro copy — real jobs done at customers' homes */}
      </p>
      {/* TODO: full gallery/slider grid — real before-after image pairs per service category */}
      {/* TODO: Add Service JSON-LD schema */}
      <div className="mt-12 p-8 bg-neutral-page rounded-2xl border border-neutral-border text-neutral-muted text-sm">
        Gallery coming soon — {BUSINESS.phone}
      </div>
    </main>
  )
}
