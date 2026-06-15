import type { Metadata } from 'next'
import Link from 'next/link'
import { ABOUT, BUSINESS } from '@/lib/content'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'About Us | Dent & Scratch Direct',
  description: `TODO: meta description — about Diarmuid Murphy, 30 years on the tools, mobile car repair across South East Melbourne.`,
  robots: { index: false, follow: true },
}

export default function AboutUsPage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
        {ABOUT.eyebrow}
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        About Dent &amp; Scratch Direct
      </h1>
      {/* TODO: full about page — Diarmuid photo (real, not placeholder), story, credentials, service approach */}
      {/* TODO: replace placeholder diarmuid.jpg image when real photo available — see lib/images.ts */}
      <div className="mt-8 max-w-[40em] flex flex-col gap-5">
        {ABOUT.paras.map((p, i) => (
          <p key={i} className="text-[17px] text-neutral-muted leading-[1.7]">{p}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-8">
        {ABOUT.stats.map(({ value, label }) => (
          <div key={label}>
            <div className="font-display font-extrabold text-[32px] text-green-primary">{value}</div>
            <div className="text-[14px] text-neutral-muted">{label}</div>
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
