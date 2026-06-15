import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'Contact | Dent & Scratch Direct',
  description: 'TODO: meta description — contact Diarmuid for a free mobile car repair quote in South East Melbourne.',
  robots: { index: false, follow: true },
}

export default function ContactPage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
        Get in touch
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        Contact Us
      </h1>
      {/* TODO: contact page — phone, email, send-a-photo CTA, response time promise, service area note (we come to you) */}
      <div className="mt-10 flex flex-col gap-5 max-w-[400px]">
        <div>
          <p className="font-label font-semibold text-[12px] uppercase tracking-[0.14em] text-neutral-muted mb-1">Phone</p>
          <a href={BUSINESS.phoneHref} className="text-neutral-ink font-bold text-[20px] no-underline hover:text-green-primary transition-colors">
            {BUSINESS.phone}
          </a>
        </div>
        <div>
          <p className="font-label font-semibold text-[12px] uppercase tracking-[0.14em] text-neutral-muted mb-1">Email</p>
          <a href={`mailto:${BUSINESS.email}`} className="text-neutral-ink text-[16px] no-underline hover:text-green-primary transition-colors">
            {BUSINESS.email}
          </a>
        </div>
        <div>
          <p className="font-label font-semibold text-[12px] uppercase tracking-[0.14em] text-neutral-muted mb-1">Location</p>
          <p className="text-neutral-muted text-[15px]">
            Based in {BUSINESS.suburb}, {BUSINESS.state}. We come to you — no workshop visit needed.
          </p>
        </div>
      </div>
    </main>
  )
}
