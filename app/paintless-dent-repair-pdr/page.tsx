import type { Metadata } from 'next'
import Link from 'next/link'
import { PDR_PAGE, PDR_SECTION, BUSINESS } from '@/lib/content'

export const metadata: Metadata = {
  title: PDR_PAGE.title,
  description: PDR_PAGE.description,
}

export default function PdrPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative bg-white"
        style={{ padding: 'clamp(48px,7vw,80px) 22px clamp(40px,5vw,60px)' }}
      >
        <div className="max-w-[860px] mx-auto">
          <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
            {PDR_SECTION.eyebrow}
          </span>
          <h1
            className="font-display font-extrabold tracking-[-0.025em] leading-[1.04] mt-4 mb-6 text-neutral-ink"
            style={{ fontSize: 'clamp(32px,5vw,60px)' }}
          >
            {PDR_PAGE.heading}
          </h1>
          <p
            className="text-[#2c3a2f] leading-[1.65] mb-8 max-w-[38em]"
            style={{ fontSize: 'clamp(16px,1.4vw,18px)' }}
          >
            {PDR_PAGE.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/free-quote/"
              className="no-underline inline-flex items-center gap-2 bg-green-primary text-white font-bold text-[15px] px-[26px] py-[14px] rounded-chip shadow-btn hover:-translate-y-0.5 hover:bg-green-dark transition-all"
            >
              Get a free quote &#8594;
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="no-underline inline-flex items-center gap-2 bg-white border border-neutral-border text-neutral-ink font-semibold text-[15px] px-[22px] py-[14px] rounded-chip hover:border-green-primary hover:text-green-primary transition-all"
            >
              &#9742; {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="bg-neutral-page border-t border-neutral-border"
        style={{ padding: 'clamp(40px,6vw,64px) 22px' }}
      >
        <div className="max-w-[860px] mx-auto">
          <h2 className="font-display font-extrabold text-[28px] tracking-tight mb-8">
            How PDR works
          </h2>
          <div className="grid grid-cols-3 gap-4 max-w-[600px]">
            {PDR_SECTION.steps.map(({ num, title, desc }) => (
              <div
                key={num}
                className="bg-white border border-neutral-border rounded-[18px] p-5 text-center"
              >
                <div className="font-display font-extrabold text-[28px] text-green-primary">{num}</div>
                <div className="font-bold text-[14px] mt-1.5">{title}</div>
                <div className="text-[12px] text-neutral-muted mt-1 leading-[1.4]">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {/* TODO: Add FAQPage JSON-LD schema */}
      <section style={{ padding: 'clamp(40px,6vw,64px) 22px' }}>
        <div className="max-w-[860px] mx-auto">
          <h2 className="font-display font-extrabold text-[28px] tracking-tight mb-8">
            Common questions
          </h2>
          <div className="flex flex-col gap-5">
            {PDR_PAGE.faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-neutral-border pb-5">
                <h3 className="font-semibold text-[16px] text-neutral-ink mb-2">{q}</h3>
                <p className="text-[15px] text-neutral-muted leading-[1.6]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
