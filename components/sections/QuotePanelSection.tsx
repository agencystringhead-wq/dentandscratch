import { QuoteForm } from '@/components/ui/QuoteForm'
import { QUOTE_FORM, CTA_SECTION, TRUST_STATS } from '@/lib/content'

export function QuotePanelSection() {
  return (
    <section
      id="quote"
      className="scroll-mt-[72px] bg-neutral-alt border-t border-b border-neutral-border"
      style={{ padding: '80px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="flex flex-wrap gap-12 lg:gap-20 items-start">

          {/* Left — value prop */}
          <div className="flex-[1_1_360px] min-w-[280px]">
            <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted">
              {QUOTE_FORM.sub}
            </span>
            <h2
              className="font-display font-bold text-neutral-ink mt-3"
              style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
            >
              {QUOTE_FORM.title}
            </h2>
            <p className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed mt-4 max-w-[30em]">
              {CTA_SECTION.body}
            </p>

            <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-neutral-border">
              {TRUST_STATS.slice(0, 3).map(({ value, label }) => (
                <div key={value} className="flex items-baseline gap-3">
                  <span
                    className="font-body font-medium text-neutral-ink shrink-0"
                    style={{ fontSize: '22px', lineHeight: '26.4px' }}
                  >
                    {value}
                  </span>
                  <span className="font-body font-medium text-[16px] text-neutral-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="flex-[1_1_420px] min-w-[280px]">
            <QuoteForm />
          </div>

        </div>
      </div>
    </section>
  )
}
