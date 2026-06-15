import { BEFORE_AFTER_CATS, GALLERY_SECTION } from '@/lib/content'

export function GallerySection() {
  return (
    <section
      id="work"
      className="scroll-mt-[72px] bg-neutral-page border-t border-neutral-border"
      style={{ padding: '80px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="mb-10">
          <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted">
            {GALLERY_SECTION.eyebrow}
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-3">
            <h2
              className="font-display font-bold text-neutral-ink"
              style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
            >
              {GALLERY_SECTION.heading}
            </h2>
            <span className="font-body font-medium text-[16px] text-neutral-muted">
              {GALLERY_SECTION.sub}
            </span>
          </div>
        </div>

        {/* Image strip — 2 columns per category (before + after) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
          {BEFORE_AFTER_CATS.map(({ key, label, title, blurb }) => (
            <div key={key} className="flex flex-col gap-2">
              {/* Category label */}
              <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted">
                {label}
              </span>

              {/* Before image */}
              <div
                className="relative bg-neutral-ink border border-neutral-border overflow-hidden"
                style={{ aspectRatio: '4/3' }}
              >
                {/* PLACEHOLDER — swap for real before photo before go-live */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-2 text-center">
                  <span className="font-body font-medium text-[10px] tracking-eyebrow uppercase text-neutral-light">
                    Before
                  </span>
                  <span className="font-body font-medium text-[10px] text-neutral-light">{title}</span>
                </div>
              </div>

              {/* After image */}
              <div
                className="relative bg-neutral-charcoal border border-neutral-border overflow-hidden"
                style={{ aspectRatio: '4/3' }}
              >
                {/* PLACEHOLDER — swap for real after photo before go-live */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-2 text-center">
                  <span className="font-body font-medium text-[10px] tracking-eyebrow uppercase text-neutral-light">
                    After
                  </span>
                  <span className="font-body font-medium text-[10px] text-neutral-light leading-snug">{blurb}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
