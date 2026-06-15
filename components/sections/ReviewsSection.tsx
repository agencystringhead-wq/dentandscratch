import { REVIEWS } from '@/lib/content'
import { StaggerIn, StaggerItem } from '@/components/ui/StaggerIn'

export function ReviewsSection() {
  const { eyebrow, heading, items } = REVIEWS

  return (
    <section
      id="reviews"
      className="scroll-mt-[72px] bg-neutral-page border-t border-neutral-border"
      style={{ padding: '80px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="mb-12">
          <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted">
            {eyebrow}
          </span>
          <h2
            className="font-display font-bold text-neutral-ink mt-3"
            style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
          >
            {heading}
          </h2>
        </div>

        {/* Review cards */}
        <StaggerIn
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          staggerDelay={0.1}
        >
          {items.map(({ text, name, suburb, initials, gradient }) => (
            <StaggerItem key={name}>
              <article className="bg-white border border-neutral-border p-8 flex flex-col h-full">
                {/* Opening quote mark */}
                <span
                  className="font-body select-none text-neutral-border"
                  style={{ fontSize: '80px', lineHeight: '1', display: 'block', marginTop: '-16px', marginBottom: '-8px' }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <p className="font-body font-medium text-[16px] text-neutral-ink leading-relaxed flex-1">
                  {text}
                </p>

                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-neutral-border">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-body font-medium text-white text-[14px] shrink-0"
                    style={{ background: gradient }}
                  >
                    {initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-body font-medium text-[15px] text-neutral-ink">{name}</div>
                    <div className="font-body font-medium text-[14px] text-neutral-muted">{suburb}</div>
                  </div>
                  <div className="text-amber-400 text-[14px] shrink-0">★★★★★</div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerIn>

      </div>
    </section>
  )
}
