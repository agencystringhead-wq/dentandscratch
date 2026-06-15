import Link from 'next/link'
import { ABOUT } from '@/lib/content'

export function AboutSection() {
  const { eyebrow, heading, paras, stats, signature, nameplate } = ABOUT

  return (
    <section
      id="owner"
      className="scroll-mt-[72px] bg-neutral-page border-t border-neutral-border"
      style={{ padding: '80px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="flex flex-wrap items-start gap-10 lg:gap-16">

          {/* Photo */}
          <div
            className="flex-[0_1_400px] min-w-[280px] w-full relative bg-neutral-charcoal border border-neutral-border overflow-hidden"
            style={{ aspectRatio: '4/5' }}
          >
            {/* PLACEHOLDER — swap for real photo before go-live */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-light">
                Photo: Diarmuid on the job
              </span>
            </div>

            {/* Nameplate overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-border p-4 flex items-center gap-3">
              <span
                className="w-10 h-10 flex items-center justify-center bg-green-primary font-body font-medium text-white text-[14px] shrink-0"
                style={{ borderRadius: '5px' }}
              >
                {nameplate.initials}
              </span>
              <div>
                <div className="font-body font-medium text-[15px] text-neutral-ink">{nameplate.name}</div>
                <div className="font-body font-medium text-[13px] text-neutral-muted">{nameplate.title}</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-[1_1_360px] min-w-[280px]">
            <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted">
              {eyebrow}
            </span>
            <h2
              className="font-display font-bold text-neutral-ink mt-3"
              style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
            >
              {heading}
            </h2>

            {paras.map((p, i) => (
              <p
                key={i}
                className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed mt-4"
              >
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-neutral-border">
              {stats.map(({ value, label }) => (
                <div key={value}>
                  <div
                    className="font-body font-medium text-neutral-ink"
                    style={{ fontSize: '30px', lineHeight: '36px' }}
                  >
                    {value}
                  </div>
                  <div className="font-body font-medium text-[16px] text-neutral-muted mt-1">{label}</div>
                </div>
              ))}
            </div>

            <div
              className="font-display font-bold text-neutral-ink mt-6"
              style={{ fontSize: '26px' }}
            >
              {signature}
            </div>

            <Link
              href="/about-us/"
              className="inline-block mt-6 font-body font-medium text-[16px] text-neutral-ink no-underline border-b-2 border-neutral-ink pb-0.5 hover:border-green-primary hover:text-green-primary transition-colors"
            >
              More about Diarmuid →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
