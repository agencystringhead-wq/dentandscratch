import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/content'

// TODO: Remove noindex once real legal copy is in place
export const metadata: Metadata = {
  title: 'Terms & Conditions | Dent & Scratch Direct',
  description: 'Terms and conditions for Dent and Scratch Direct.',
  robots: { index: false, follow: true },
}

export default function TermsConditionsPage() {
  return (
    <main className="min-h-[60vh] max-w-[800px] mx-auto px-5 py-24">
      <h1 className="font-display font-extrabold text-[40px] tracking-tight text-neutral-ink">
        Terms &amp; Conditions
      </h1>
      {/* TODO: add real T&C copy — service terms, payment, cancellation, liability */}
      <div className="mt-8">
        <p className="text-neutral-muted text-[15px]">
          Terms and conditions for {BUSINESS.name}. Contact{' '}
          <a href={`mailto:${BUSINESS.email}`} className="text-green-primary no-underline hover:text-green-dark">
            {BUSINESS.email}
          </a>{' '}
          with any queries.
        </p>
      </div>
    </main>
  )
}
