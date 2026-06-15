import { TRUST_STATS } from '@/lib/content'
import { StaggerIn, StaggerItem } from '@/components/ui/StaggerIn'

export function StatsBar() {
  return (
    <section className="bg-white border-t border-b border-neutral-border">
      <div className="max-w-[1200px] mx-auto px-[22px] py-[26px]">
        <StaggerIn
          className="flex flex-wrap items-center justify-between"
          staggerDelay={0.12}
        >
          {TRUST_STATS.map(({ value, label }) => (
            <StaggerItem key={value} className="flex items-center gap-3 flex-[1_1_200px] py-1">
              <span className="font-display font-extrabold text-[34px] text-green-primary tracking-[-0.03em]">
                {value}
              </span>
              <span className="text-[13.5px] text-neutral-muted leading-[1.3]">{label}</span>
            </StaggerItem>
          ))}
        </StaggerIn>
      </div>
    </section>
  )
}
