import Link from 'next/link'
import Image from 'next/image'
import { Phone, Check } from 'lucide-react'
import { SERVICE_PAGES, SERVICES, BUSINESS } from '@/lib/content'
import { getServiceSchema, getFaqSchema } from '@/lib/schema'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { FaqAccordion } from '@/components/ui/FaqAccordion'

// One template renders all 7 service detail pages from SERVICE_PAGES[serviceKey].
export function ServicePageTemplate({ serviceKey }: { serviceKey: string }) {
  const page = SERVICE_PAGES[serviceKey]
  const service = SERVICES.find((s) => s.key === serviceKey)
  if (!page || !service) return null

  const serviceSchema = getServiceSchema({
    name: service.title,
    description: page.meta.description,
    path: service.href,
  })
  const faqSchema = getFaqSchema(page.faqs)

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-neutral-page" style={{ padding: '72px 0 64px' }}>
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <AnimateIn>
              <Link href="/services/" className="inline-flex items-center gap-2 font-body font-medium text-[13px] tracking-eyebrow uppercase text-green-primary no-underline">
                <span aria-hidden="true" className="w-2.5 h-2.5 bg-green-primary shrink-0" />
                {service.tag}
              </Link>
              <h1
                className="font-display font-extrabold text-neutral-ink leading-[1.08] mt-4"
                style={{ fontSize: 'clamp(32px,4.8vw,52px)' }}
              >
                {page.h1}
              </h1>
              {page.intro.map((p, i) => (
                <p key={i} className="font-body font-medium text-[17px] text-neutral-muted leading-relaxed mt-5 max-w-[40em]">
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

            <AnimateIn delay={0.08}>
              <div className="relative w-full aspect-[4/3] rounded-[5px] overflow-hidden bg-neutral-alt border border-neutral-border">
                <Image src={service.image} alt={service.alt} fill sizes="(min-width:1024px) 460px, 100vw" className="object-cover" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Content blocks */}
      <section className="bg-white border-t border-neutral-border" style={{ padding: '72px 0' }}>
        <div className="max-w-[760px] mx-auto px-5 lg:px-10">
          {page.blocks.map((block, i) => (
            <AnimateIn key={block.h2} delay={i === 0 ? 0 : 0.04}>
              <div className={i > 0 ? 'mt-14' : ''}>
                <h2 className="font-display font-bold text-neutral-ink" style={{ fontSize: 'clamp(24px,3vw,34px)', lineHeight: '1.2' }}>
                  {block.h2}
                </h2>
                {block.body?.map((p, j) => (
                  <p key={j} className="font-body font-medium text-[17px] text-neutral-muted leading-relaxed mt-4">
                    {p}
                  </p>
                ))}
                {block.list && (
                  <ul className="flex flex-col gap-3 mt-5 list-none p-0 m-0">
                    {block.list.map((li) => (
                      <li key={li} className="flex items-start gap-3 font-body font-medium text-[17px] text-neutral-ink leading-relaxed">
                        <Check size={20} className="text-green-primary shrink-0 mt-1" aria-hidden="true" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {block.outro?.map((p, j) => (
                  <p key={j} className="font-body font-medium text-[17px] text-neutral-muted leading-relaxed mt-4">
                    {p}
                  </p>
                ))}
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-neutral-page border-t border-neutral-border" style={{ padding: '72px 0' }}>
        <div className="max-w-[820px] mx-auto px-5 lg:px-10">
          <AnimateIn>
            <h2 className="font-display font-bold text-neutral-ink mb-8" style={{ fontSize: 'clamp(26px,3.2vw,38px)' }}>
              {service.title} FAQs
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.06}>
            <FaqAccordion items={page.faqs} />
          </AnimateIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-green-primary" style={{ padding: '72px 0' }}>
        <div className="max-w-[760px] mx-auto px-5 lg:px-10 text-center">
          <AnimateIn>
            <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(24px,3.2vw,38px)', lineHeight: '1.2' }}>
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
