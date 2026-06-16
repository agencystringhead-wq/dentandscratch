'use client'
import { useState } from 'react'
import Image from 'next/image'
import {
  Camera, MessageCircle, MapPin, Car, Wrench, Clock, ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { HOW_IT_WORKS } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { StaggerIn, StaggerItem } from '@/components/ui/StaggerIn'

const ICONS: Record<string, LucideIcon> = {
  Camera, MessageCircle, MapPin, Car, Wrench, Clock, ShieldCheck,
}

export function HowItWorksSection() {
  const { badges, headline, steps } = HOW_IT_WORKS
  return (
    // relative z-20 so the offset card 02 floats above the dark Testimonials section below
    <section className="relative z-20 bg-neutral-page border-t border-neutral-border" style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Icon badges */}
        <StaggerIn className="flex flex-wrap justify-center gap-1.5" staggerDelay={0.07}>
          {badges.map((name, i) => {
            const Icon = ICONS[name]
            return (
              <StaggerItem key={name}>
                <span
                  className="w-9 h-9 flex items-center justify-center bg-green-primary"
                  style={{
                    borderRadius: '5px',
                    transform: `rotate(${i % 2 ? 6 : -6}deg)`,
                    boxShadow: '0 6px 14px rgba(0,0,0,0.12)',
                  }}
                >
                  {Icon && <Icon size={16} color="white" />}
                </span>
              </StaggerItem>
            )
          })}
        </StaggerIn>

        {/* Headline with inline image pill */}
        <AnimateIn>
          <h2
            className="font-display font-bold text-neutral-ink text-center mx-auto mt-10 max-w-[18em]"
            style={{ fontSize: 'clamp(26px,3.4vw,42px)', lineHeight: '1.3' }}
          >
            {headline.map((node, i) =>
              node.type === 'pill'
                ? <Pill key={i} src={node.src} alt={node.alt} />
                : <span key={i}>{node.value} </span>
            )}
          </h2>
        </AnimateIn>

        {/* Step cards — zigzag on desktop (card 02 offset down to straddle the next
            section), stacked normally on mobile. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 items-start">
          {steps.map((s, i) => {
            const accent = (s as { accent?: boolean }).accent === true
            // card 02 sits lower and floats above the dark section seam on desktop
            const offset = i === 1 ? 'lg:relative lg:z-30 lg:translate-y-[210px]' : ''
            return (
              <div key={s.num} className={offset}>
                <AnimateIn delay={i * 0.08}>
                  <StepCard num={s.num} title={s.title} desc={s.desc} accent={accent} />
                </AnimateIn>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

function StepCard({ num, title, desc, accent }: { num: string; title: string; desc: string; accent: boolean }) {
  return (
    <div className={`relative p-8 ${accent ? 'bg-green-primary' : 'bg-[#ECEAE0]'}`}>
      <CardNotch />
      <div
        className={`font-display font-bold leading-none ${accent ? 'text-white' : 'text-neutral-ink'}`}
        style={{ fontSize: 'clamp(44px,5vw,60px)' }}
      >
        {num}
      </div>
      <h3 className={`font-body font-bold text-[20px] mt-6 ${accent ? 'text-white' : 'text-neutral-ink'}`}>
        {title}
      </h3>
      <p className={`font-body font-medium text-[15px] leading-relaxed mt-3 ${accent ? 'text-white/85' : 'text-neutral-muted'}`}>
        {desc}
      </p>
    </div>
  )
}

// Small cream stepped-pixel notch in the card's top-right corner.
function CardNotch() {
  const steps = [
    { size: 28, top: 0,  right: 0 },
    { size: 18, top: 28, right: 28 },
    { size: 12, top: 46, right: 46 },
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

// Inline rounded image pill in the headline. Renders nothing if the image is missing.
function Pill({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true)
  if (!ok) return null
  return (
    <span
      className="inline-block align-middle mx-2 rounded-full overflow-hidden border border-neutral-border"
      style={{ width: '64px', height: '40px', verticalAlign: 'middle' }}
    >
      <Image src={src} alt={alt} width={64} height={40} className="w-full h-full object-cover" onError={() => setOk(false)} />
    </span>
  )
}
