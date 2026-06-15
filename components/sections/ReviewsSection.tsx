import { REVIEWS } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { StaggerIn, StaggerItem } from '@/components/ui/StaggerIn'

export function ReviewsSection() {
  const { eyebrow, heading, items, badges } = REVIEWS

  return (
    <section
      id="reviews"
      className="scroll-mt-[84px] bg-white"
      style={{ padding: 'clamp(48px,7vw,90px) 22px' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <AnimateIn className="text-center mb-[32px]">
          <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
            {eyebrow}
          </span>
          <h2
            className="font-display font-extrabold tracking-[-0.025em] leading-[1.05] mt-3"
            style={{ fontSize: 'clamp(28px,4vw,46px)' }}
          >
            {heading}
          </h2>
          <div className="text-[#F5A524] text-[20px] tracking-[2px] mt-2">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        </AnimateIn>

        {/* Review cards */}
        <StaggerIn
          className="grid gap-[18px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}
          staggerDelay={0.14}
        >
          {items.map(({ text, name, suburb, initials, gradient }) => (
            <StaggerItem key={name}>
            <div
              className="bg-neutral-page border border-neutral-border rounded-[20px] p-[26px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#9ed8af] hover:shadow-[0_18px_36px_-22px_rgba(14,18,14,0.22)] h-full"
            >
              <div className="text-[#F5A524] text-[15px] tracking-[1px]">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="text-[15.5px] leading-[1.6] text-[#2c3a2f] mt-3 mb-[18px]">{text}</p>
              <div className="flex items-center gap-[11px]">
                <div
                  className="w-[38px] h-[38px] rounded-full text-white flex items-center justify-center font-bold text-[14px] shrink-0"
                  style={{ background: gradient }}
                >
                  {initials}
                </div>
                <div>
                  <div className="font-semibold text-[14px]">{name}</div>
                  <div className="text-[12.5px] text-neutral-muted">{suburb}</div>
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerIn>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-[14px] justify-center mt-[34px] items-center">
          {badges.map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-[9px] bg-green-bg border border-[#c8ebd2] px-[18px] py-[11px] rounded-chip"
            >
              <span className="text-[16px]">{icon}</span>
              <span className="font-semibold text-[13.5px] text-green-dark">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
