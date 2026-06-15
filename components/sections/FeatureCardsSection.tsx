import { MapPin, Shield, ShieldCheck, Clock, type LucideIcon } from 'lucide-react'
import { FEATURES } from '@/lib/content'

const ICON_MAP: Record<string, LucideIcon> = { MapPin, Shield, ShieldCheck, Clock }

export function FeatureCardsSection() {
  return (
    <section className="bg-neutral-page border-t border-neutral-border" style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map(({ icon, title, body }) => {
            const Icon = ICON_MAP[icon]
            return (
              <div
                key={title}
                className="bg-neutral-alt border border-neutral-border p-8 flex flex-col gap-5"
              >
                {/* Icon badge */}
                <span
                  className="w-[60px] h-[60px] flex items-center justify-center bg-green-primary shrink-0"
                  style={{ borderRadius: '5px' }}
                >
                  {Icon && <Icon size={32} color="white" />}
                </span>

                <div>
                  <h3
                    className="font-body font-medium text-neutral-ink"
                    style={{ fontSize: '22px', lineHeight: '26.4px' }}
                  >
                    {title}
                  </h3>
                  <p className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed mt-2">
                    {body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
