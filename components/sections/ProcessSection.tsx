import { PDR_SECTION, PROCESS_SECTION } from '@/lib/content'

export function ProcessSection() {
  return (
    <section className="bg-neutral-alt border-t border-neutral-border" style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="mb-14">
          <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted">
            {PROCESS_SECTION.eyebrow}
          </span>
          <h2
            className="font-display font-bold text-neutral-ink mt-3"
            style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
          >
            {PROCESS_SECTION.heading}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {PDR_SECTION.steps.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className={`p-8 border-neutral-border ${
                i > 0 ? 'border-t md:border-t-0 md:border-l' : ''
              }`}
            >
              {/* Zero-padded step number — decorative */}
              <div
                className="font-body font-medium text-neutral-border select-none"
                style={{ fontSize: '60px', lineHeight: '1' }}
                aria-hidden="true"
              >
                0{num}
              </div>

              <h3
                className="font-body font-medium text-neutral-ink mt-5"
                style={{ fontSize: '22px', lineHeight: '26.4px' }}
              >
                {title}
              </h3>
              <p className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed mt-2">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
