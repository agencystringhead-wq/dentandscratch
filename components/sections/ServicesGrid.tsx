import Link from 'next/link'
import { SERVICES } from '@/lib/content'

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-[84px] bg-neutral-page"
      style={{ padding: 'clamp(48px,7vw,90px) 22px' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-[16px] mb-[30px]">
          <div>
            <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
              What we fix
            </span>
            <h2
              className="font-display font-extrabold tracking-[-0.025em] leading-[1.05] mt-3"
              style={{ fontSize: 'clamp(28px,4vw,46px)' }}
            >
              More than just dents
            </h2>
          </div>
          <Link
            href="/#quote"
            className="no-underline text-green-dark font-semibold text-[15px] inline-flex items-center gap-2 hover:text-green-primary transition-colors"
          >
            Not sure which? Send a photo &#8594;
          </Link>
        </div>

        <div className="grid gap-[18px]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))' }}>
          {SERVICES.map(({ key, title, desc, tag, time }) => (
            <article
              key={key}
              className="bg-white border border-neutral-border rounded-[22px] overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_44px_-22px_rgba(14,18,14,0.28)] hover:border-[#c8ebd2]"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/10] bg-neutral-ink overflow-hidden">
                {/* PLACEHOLDER — swap for real service photo before go-live */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'repeating-linear-gradient(135deg,#15321f,#15321f 14px,#102718 14px,#102718 28px)',
                  }}
                />
                <span className="absolute top-3 left-3 font-label font-bold text-[11px] tracking-[0.12em] uppercase text-green-dark bg-white/[0.92] px-[11px] py-[5px] rounded-chip">
                  {tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-[18px_18px_20px] flex flex-col flex-1">
                <div className="font-display font-bold text-[19px] tracking-tight">{title}</div>
                <div className="text-[13.5px] text-neutral-muted leading-[1.5] mt-[7px] flex-1">{desc}</div>
                <div className="flex items-center gap-2 mt-[14px] pt-[14px] border-t border-green-bg">
                  <span className="font-label font-semibold text-[12px] tracking-[0.08em] uppercase text-green-primary">
                    {time}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
