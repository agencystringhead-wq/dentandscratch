import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/content'

// TODO: Remove noindex once real legal copy is in place
export const metadata: Metadata = {
  title: 'Privacy Policy | Dent & Scratch Direct',
  description: 'Privacy policy for Dent & Scratch Direct.',
  robots: { index: false, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-[60vh] max-w-[800px] mx-auto px-5 py-24">
      <h1 className="font-display font-extrabold text-[40px] tracking-tight text-neutral-ink">
        Privacy Policy
      </h1>
      {/* TODO: add real privacy policy copy — collection, use, storage, cookies, contact details */}
      <div className="mt-8 prose prose-neutral max-w-none">
        <p className="text-neutral-muted text-[15px]">
          Privacy policy for {BUSINESS.name}. Contact{' '}
          <a href={`mailto:${BUSINESS.email}`} className="text-green-primary no-underline hover:text-green-dark">
            {BUSINESS.email}
          </a>{' '}
          with any privacy enquiries.
        </p>
      </div>
    </main>
  )
}
