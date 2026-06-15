import { TRUST_STATS } from '@/lib/content'

export function StatsBar() {
  return (
    <section className="bg-neutral-page border-t border-b border-neutral-border" style={{ padding: '40px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {TRUST_STATS.map(({ value, label }) => (
            <div key={value} className="flex flex-col gap-2">
              <span
                className="font-body font-medium text-neutral-ink"
                style={{ fontSize: '44px', lineHeight: '52.8px' }}
              >
                {value}
              </span>
              <span className="font-body font-medium text-[16px] text-neutral-muted leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
