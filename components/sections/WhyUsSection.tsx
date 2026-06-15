import Link from 'next/link'
import {
  Wrench, Car, Paintbrush, MessageCircle, ShieldCheck, Star,
  type LucideIcon,
} from 'lucide-react'
import { WHY_US_POINTS, WHY_SECTION, HERO, ABOUT } from '@/lib/content'

const ICON_MAP: Record<string, LucideIcon> = {
  Wrench, Car, Paintbrush, MessageCircle, ShieldCheck, Star,
}

export function WhyUsSection() {
  const { nameplate } = ABOUT

  return (
    <section className="bg-green-primary" style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="flex flex-wrap gap-12 lg:gap-16 items-center">

          {/* Left — copy + icon grid + CTA */}
          <div className="flex-[1_1_420px] min-w-[300px]">
            <span
              className="font-body font-medium text-[12px] tracking-eyebrow uppercase"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              {WHY_SECTION.eyebrow}
            </span>
            <h2
              className="font-display font-bold text-white mt-3"
              style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
            >
              {WHY_SECTION.heading}
            </h2>
            <p
              className="font-body font-medium text-[16px] leading-relaxed mt-4 max-w-[34em]"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {HERO.para}
            </p>

            {/* 6 icon points — 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {WHY_US_POINTS.map(({ icon, label }) => {
                const Icon = ICON_MAP[icon]
                return (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className="w-9 h-9 flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '5px' }}
                    >
                      {Icon && <Icon size={18} color="white" />}
                    </span>
                    <span className="font-body font-medium text-[15px] text-white">{label}</span>
                  </div>
                )
              })}
            </div>

            <Link
              href="/about-us/"
              className="inline-block mt-8 font-body font-medium text-[16px] text-white px-6 py-4 no-underline border-2 border-white hover:bg-white/10 transition-colors"
            >
              About Diarmuid →
            </Link>
          </div>

          {/* Right — photo with nameplate */}
          <div
            className="flex-[0_1_380px] min-w-[280px] relative bg-neutral-charcoal border border-neutral-border overflow-hidden"
            style={{ aspectRatio: '4/5' }}
          >
            {/* PLACEHOLDER — swap for real photo before go-live */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-light">
                Photo: Diarmuid on the job
              </span>
            </div>

            {/* Nameplate overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-border p-4 flex items-center gap-3">
              <span
                className="w-10 h-10 flex items-center justify-center bg-green-primary font-body font-medium text-white text-[14px] shrink-0"
                style={{ borderRadius: '5px' }}
              >
                {nameplate.initials}
              </span>
              <div>
                <div className="font-body font-medium text-[15px] text-neutral-ink">{nameplate.name}</div>
                <div className="font-body font-medium text-[13px] text-neutral-muted">{nameplate.title}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
