import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'Minor Rust Repair | Dent & Scratch Direct',
  description: 'TODO: meta description — mobile minor rust spot repair across South East Melbourne.',
  robots: { index: false, follow: true },
}

export default function MinorRustRepairsPage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
        Catch it early
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        Minor Rust Repair
      </h1>
      <p className="text-neutral-muted mt-4 max-w-[40em] text-[17px] leading-relaxed">
        {/* TODO: page intro — surface rust bubbles, repair vs replace, what we can and can't treat */}
      </p>
      {/* TODO: how-it-works, before/after examples, limitations FAQ */}
      {/* TODO: Add Service JSON-LD schema */}
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
