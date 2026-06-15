'use client'
import {
  MapPin, Clock, ShieldCheck, BadgeCheck, FileX, PiggyBank, ReceiptText, Wrench,
  type LucideIcon,
} from 'lucide-react'
import { WHY_CHOOSE } from '@/lib/content'
import { StaggerIn, StaggerItem } from '@/components/ui/StaggerIn'

const ICONS: Record<string, LucideIcon> = {
  MapPin, Clock, ShieldCheck, BadgeCheck, FileX, PiggyBank, ReceiptText, Wrench,
}

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-ink" style={{ padding: '80px 0' }}>
      <NotchCorner />

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
        <h2
          className="font-display font-normal text-white max-w-[11em]"
          style={{ fontSize: 'clamp(32px,4.4vw,52px)', lineHeight: '1.3' }}
        >
          {WHY_CHOOSE.heading}
        </h2>
        <p className="font-body font-medium text-[17px] text-neutral-light leading-relaxed mt-5 max-w-[40em]">
          {WHY_CHOOSE.sub}
        </p>

        <StaggerIn
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-20"
          staggerDelay={0.07}
        >
          {WHY_CHOOSE.items.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <StaggerItem key={item.title}>
                <div className="flex flex-col">
                  {Icon && <Icon size={40} className="text-green-primary" />}
                  <h3 className="font-body font-bold text-[17px] text-white mt-5">{item.title}</h3>
                  <p className="font-body font-medium text-[15px] text-neutral-light leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerIn>
      </div>
    </section>
  )
}

// Cream stepped-pixel staircase descending from the top-right corner.
function NotchCorner() {
  // Each square steps down by its own height and left by its own width.
  const steps = [
    { size: 48, top: 0,  right: 0 },
    { size: 32, top: 48, right: 48 },
    { size: 20, top: 80, right: 80 },
  ]
  return (
    <div className="absolute top-0 right-0 pointer-events-none" aria-hidden="true">
      {steps.map((s, i) => (
        <div
          key={i}
          className="absolute bg-neutral-page"
          style={{ top: `${s.top}px`, right: `${s.right}px`, width: `${s.size}px`, height: `${s.size}px` }}
        />
      ))}
    </div>
  )
}
