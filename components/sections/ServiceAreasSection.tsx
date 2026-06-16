'use client'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { SERVICE_AREAS_SECTION, SERVICE_AREAS_MEGA } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { StaggerIn, StaggerItem } from '@/components/ui/StaggerIn'

export function ServiceAreasSection() {
  const { eyebrow, heading, sub } = SERVICE_AREAS_SECTION
  const { zones, viewAllLabel, viewAllHref } = SERVICE_AREAS_MEGA

  return (
    <section className="bg-neutral-page border-t border-neutral-border" style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Header */}
        <AnimateIn>
          <span className="inline-flex items-center gap-2 font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted">
            <span aria-hidden="true" className="w-2.5 h-2.5 bg-green-primary shrink-0" />
            {eyebrow}
          </span>
          <h2
            className="font-display font-bold text-neutral-ink mt-3 max-w-[16em]"
            style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
          >
            {heading}
          </h2>
          <p className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed mt-4 max-w-[44em]">
            {sub}
          </p>
        </AnimateIn>

        {/* Zone cards — auto-fit ~3 across, 1 on mobile */}
        <StaggerIn
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-12"
          staggerDelay={0.08}
        >
          {zones.map((z) => {
            const accent = (z as { accent?: boolean }).accent === true
            const count = z.suburbs.length
            const label = accent ? `Home base · ${count} suburbs` : `${count} suburbs`
            return (
              <StaggerItem key={z.zone}>
                <ZoneCard zone={z.zone} label={label} suburbs={z.suburbs} accent={accent} />
              </StaggerItem>
            )
          })}
        </StaggerIn>

        {/* CTA */}
        <AnimateIn delay={0.05}>
          <div className="mt-12">
            <Link
              href={viewAllHref}
              className="cta-fill-invert inline-block rounded-[5px] bg-green-primary text-white font-body font-medium text-[16px] px-8 py-3.5 no-underline"
            >
              <span className="relative z-10">{viewAllLabel}</span>
            </Link>
          </div>
        </AnimateIn>

      </div>
    </section>
  )
}

function ZoneCard({
  zone, label, suburbs, accent,
}: { zone: string; label: string; suburbs: readonly string[]; accent: boolean }) {
  return (
    <div className={`relative h-full p-7 ${accent ? 'bg-green-primary' : 'bg-[#ECEAE0]'}`}>
      <CardNotch />
      <MapPin size={26} className={accent ? 'text-white' : 'text-green-primary'} />
      <span className={`block font-body font-medium text-[12px] tracking-eyebrow uppercase mt-5 ${accent ? 'text-white/80' : 'text-neutral-muted'}`}>
        {label}
      </span>
      <h3 className={`font-body font-bold text-[20px] mt-1 ${accent ? 'text-white' : 'text-neutral-ink'}`}>
        {zone}
      </h3>
      <p className={`font-body font-medium text-[15px] leading-relaxed mt-2 ${accent ? 'text-white/85' : 'text-neutral-muted'}`}>
        {suburbs.join(', ')}
      </p>
    </div>
  )
}

// Cream stepped-pixel notch in the card's top-right corner.
function CardNotch() {
  const steps = [
    { size: 26, top: 0,  right: 0 },
    { size: 17, top: 26, right: 26 },
    { size: 11, top: 43, right: 43 },
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
