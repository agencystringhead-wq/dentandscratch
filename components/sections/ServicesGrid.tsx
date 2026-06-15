import Link from 'next/link'
import { SERVICES } from '@/lib/content'

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-[72px] bg-neutral-alt border-t border-neutral-border"
      style={{ padding: '80px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted">
              What we fix
            </span>
            <h2
              className="font-display font-bold text-neutral-ink mt-3"
              style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
            >
              More than just dents
            </h2>
          </div>
          <Link
            href="/services/"
            className="font-body font-medium text-[16px] text-neutral-link no-underline hover:text-neutral-ink transition-colors whitespace-nowrap"
          >
            View all services →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map(({ key, title, desc, tag }) => (
            <article
              key={key}
              className="bg-neutral-page border border-neutral-border flex flex-col"
            >
              {/* Tag */}
              <div className="px-6 pt-6">
                <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted">
                  {tag}
                </span>
              </div>

              {/* Image */}
              <div className="relative mx-6 mt-4 bg-neutral-ink border border-neutral-border overflow-hidden" style={{ aspectRatio: '4/3' }}>
                {/* PLACEHOLDER — swap for real service photo before go-live */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-body font-medium text-[11px] tracking-eyebrow uppercase text-neutral-light">
                    {title}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="font-body font-medium text-neutral-ink"
                  style={{ fontSize: '22px', lineHeight: '26.4px' }}
                >
                  {title}
                </h3>
                <p className="font-body font-medium text-[16px] text-neutral-muted mt-2 leading-relaxed flex-1">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
