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
          className="font-display font-bold text-white max-w-[16em]"
          style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
        >
          {WHY_CHOOSE.heading}
        </h2>

        <StaggerIn
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-14"
          staggerDelay={0.07}
        >
          {WHY_CHOOSE.items.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <StaggerItem key={item.title}>
                <div className="flex flex-col">
                  {Icon && <Icon size={28} className="text-green-primary" />}
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

// Cream stepped pixel-notch in the top-right corner (reveals the page colour).
function NotchCorner() {
  return (
    <div className="absolute top-0 right-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 right-0 bg-neutral-page" style={{ width: '76px', height: '48px' }} />
      <div className="absolute bg-neutral-page" style={{ top: '48px', right: '44px', width: '40px', height: '30px' }} />
      <div className="absolute bg-neutral-page" style={{ top: '78px', right: '20px', width: '24px', height: '18px' }} />
    </div>
  )
}
