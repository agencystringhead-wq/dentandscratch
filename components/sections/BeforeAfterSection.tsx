import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'

export function BeforeAfterSection() {
  return (
    <section
      id="work"
      className="scroll-mt-[84px] bg-white border-t border-neutral-border"
      style={{ padding: 'clamp(48px,7vw,90px) 22px' }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Intro */}
        <div className="text-center max-w-[38em] mx-auto mb-[8px]">
          <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
            Real repairs
          </span>
          <h2
            className="font-display font-extrabold tracking-[-0.025em] leading-[1.05] mt-3"
            style={{ fontSize: 'clamp(28px,4vw,46px)' }}
          >
            Drag to see the difference
          </h2>
          <p className="text-[16px] text-neutral-muted leading-[1.55] mt-[14px]">
            Every repair below was done on the customer&apos;s driveway. Pick a service and slide.
          </p>
        </div>

        <div className="mt-[28px]">
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  )
}
