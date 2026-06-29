import type { ReactNode } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import type { Page } from '@/lib/content'
import { BUSINESS } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { ContentBlocks } from '@/components/ui/ContentBlocks'
import { FaqAccordion } from '@/components/ui/FaqAccordion'

// Shared inner-page template. Pass `children` to replace the default content section
// (used by the reviews / contact / free-quote / services-hub variants).
export function PageTemplate({
  page,
  eyebrow,
  schema,
  children,
}: {
  page: Page
  eyebrow: string
  schema?: object
  children?: ReactNode
}) {
  return (
    <main>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}

      {/* Hero */}
      <section className="bg-neutral-page" style={{ padding: '72px 0 56px' }}>
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 font-body font-medium text-[13px] tracking-eyebrow uppercase text-green-primary">
              <span aria-hidden="true" className="w-2.5 h-2.5 bg-green-primary shrink-0" />
              {eyebrow}
            </span>
            <h1
              className="font-display font-extrabold text-neutral-ink leading-[1.08] mt-4 max-w-[16em]"
              style={{ fontSize: 'clamp(32px,4.8vw,52px)' }}
            >
              {page.h1}
            </h1>
            {page.intro.map((p, i) => (
              <p key={i} className="font-body font-medium text-[17px] text-neutral-muted leading-relaxed mt-5 max-w-[44em]">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/free-quote/"
                className="cta-fill inline-block rounded-[5px] bg-neutral-ink text-white font-body font-bold text-[16px] px-8 py-4 no-underline"
              >
                <span className="relative z-10">Get your free quote</span>
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 font-body font-bold text-[16px] text-neutral-ink no-underline hover:text-green-primary transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
                {BUSINESS.phone}
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Content — default ContentBlocks, or a variant's custom children */}
      {children ?? (
        <section className="bg-white border-t border-neutral-border" style={{ padding: '72px 0' }}>
          <div className="max-w-[760px] mx-auto px-5 lg:px-10">
            <ContentBlocks blocks={page.blocks} />
          </div>
        </section>
      )}

      {/* Optional FAQ */}
      {page.faqs && page.faqs.length > 0 && (
        <section className="bg-neutral-page border-t border-neutral-border" style={{ padding: '72px 0' }}>
          <div className="max-w-[820px] mx-auto px-5 lg:px-10">
            <AnimateIn>
              <h2 className="font-display font-bold text-neutral-ink mb-8" style={{ fontSize: 'clamp(26px,3.2vw,38px)' }}>
                Frequently asked questions
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.06}>
              <FaqAccordion items={page.faqs} />
            </AnimateIn>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="bg-green-primary" style={{ padding: '72px 0' }}>
        <div className="max-w-[760px] mx-auto px-5 lg:px-10 text-center">
          <AnimateIn>
            <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(24px,3.2vw,36px)', lineHeight: '1.2' }}>
              {page.cta}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                href="/free-quote/"
                className="inline-block rounded-[5px] bg-white text-neutral-ink font-body font-bold text-[16px] px-8 py-4 no-underline hover:bg-neutral-page transition-colors"
              >
                Get your free quote
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-[5px] border-2 border-white text-white font-body font-bold text-[16px] px-7 py-[14px] no-underline hover:bg-white hover:text-green-primary transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
                {BUSINESS.phone}
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  )
}
