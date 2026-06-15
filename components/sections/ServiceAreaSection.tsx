import { SERVICE_AREA } from '@/lib/content'

export function ServiceAreaSection() {
  const { eyebrow, heading, sub, suburbs } = SERVICE_AREA

  return (
    <section
      className="bg-neutral-page"
      style={{ padding: 'clamp(40px,6vw,72px) 22px' }}
    >
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
          {eyebrow}
        </span>
        <h2
          className="font-display font-extrabold tracking-[-0.02em] leading-[1.1] mt-2.5 mb-1.5"
          style={{ fontSize: 'clamp(24px,3.4vw,38px)' }}
        >
          {heading}
        </h2>
        <p className="text-[15px] text-neutral-muted max-w-[36em] mx-auto mb-6">{sub}</p>

        <div className="flex flex-wrap gap-[9px] justify-center">
          {suburbs.map((suburb) => (
            <span
              key={suburb}
              className="bg-white border border-neutral-border text-[#2c3a2f] font-medium text-[13.5px] px-[15px] py-[9px] rounded-chip transition-all duration-150 hover:border-green-primary hover:text-green-dark hover:bg-green-bg cursor-default"
            >
              {suburb}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
