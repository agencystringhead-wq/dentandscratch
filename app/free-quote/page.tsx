import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'Get a Free Quote | Dent & Scratch Direct',
  description: 'TODO: meta description — send Diarmuid a photo and get a free mobile car repair quote within the hour.',
  robots: { index: false, follow: true },
}

export default function FreeQuotePage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
        No obligation
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        Get a Free Quote
      </h1>
      <p className="text-neutral-muted mt-4 max-w-[38em] text-[17px] leading-relaxed">
        {/* TODO: page intro — snap a photo, send it through, get a price back within the hour */}
      </p>
      {/* TODO: embed the full QuoteForm component from components/ui/QuoteForm.tsx */}
      {/* TODO: wire form endpoint */}
      <div className="mt-10 flex flex-col gap-4 max-w-[420px]">
        <p className="text-[15px] text-neutral-muted">
          Snap a photo of the damage and send it to Diarmuid. You&rsquo;ll have a price back within the hour.
        </p>
        <a
          href={BUSINESS.phoneHref}
          className="self-start bg-green-primary text-white font-bold text-[15px] px-[24px] py-[13px] rounded-chip no-underline hover:-translate-y-0.5 hover:bg-green-dark transition-all"
        >
          &#9742; {BUSINESS.phone}
        </a>
      </div>
    </main>
  )
}
