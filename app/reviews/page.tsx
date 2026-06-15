import type { Metadata } from 'next'
import Link from 'next/link'
import { REVIEWS, BUSINESS } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'Reviews | Dent & Scratch Direct',
  description: 'TODO: meta description — customer reviews for mobile dent and scratch repair in South East Melbourne.',
  robots: { index: false, follow: true },
}

export default function ReviewsPage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
        {REVIEWS.eyebrow}
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        {REVIEWS.heading}
      </h1>
      {/* TODO: full reviews page — embed Google reviews widget or pull live reviews, AggregateRating header */}
      {/* TODO: Add Review + AggregateRating JSON-LD schema */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.items.map(({ name, suburb, text, initials, gradient }) => (
          <div key={name} className="bg-white border border-neutral-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] shrink-0"
                style={{ background: gradient }}
              >
                {initials}
              </div>
              <div>
                <div className="font-semibold text-[14px] text-neutral-ink">{name}</div>
                <div className="text-[12px] text-neutral-muted">{suburb}</div>
              </div>
            </div>
            <p className="text-[14px] text-neutral-muted leading-[1.6]">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/free-quote/" className="no-underline inline-flex items-center gap-2 bg-green-primary text-white font-bold text-[15px] px-[24px] py-[13px] rounded-chip hover:-translate-y-0.5 hover:bg-green-dark transition-all">
          Get a free quote &#8594;
        </Link>
      </div>
    </main>
  )
}
