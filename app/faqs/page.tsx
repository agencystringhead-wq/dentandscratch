import type { Metadata } from 'next'
import Link from 'next/link'
import { PDR_PAGE, BUSINESS } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'FAQs | Dent & Scratch Direct',
  description: 'TODO: meta description — frequently asked questions about mobile car repair in South East Melbourne.',
  robots: { index: false, follow: true },
}

export default function FaqsPage() {
  return (
    <main className="min-h-[60vh] max-w-[860px] mx-auto px-5 py-24">
      <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
        Quick answers
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        Frequently Asked Questions
      </h1>
      {/* TODO: expand to site-wide FAQ — add questions for each service, pricing, booking, insurance, service area */}
      {/* TODO: Add FAQPage JSON-LD schema */}
      <div className="flex flex-col gap-5 mt-12">
        {PDR_PAGE.faqs.map(({ q, a }) => (
          <div key={q} className="border-b border-neutral-border pb-5">
            <h2 className="font-semibold text-[16px] text-neutral-ink mb-2">{q}</h2>
            <p className="text-[15px] text-neutral-muted leading-[1.6]">{a}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-neutral-muted text-[15px]">
        Still have a question? Call Diarmuid on{' '}
        <a href={BUSINESS.phoneHref} className="text-green-primary font-semibold no-underline hover:text-green-dark">
          {BUSINESS.phone}
        </a>{' '}
        or{' '}
        <Link href="/free-quote/" className="text-green-primary font-semibold no-underline hover:text-green-dark">
          send a photo for a free quote
        </Link>.
      </p>
    </main>
  )
}
