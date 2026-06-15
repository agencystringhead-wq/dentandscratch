'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useInView, useReducedMotion } from 'framer-motion'
import {
  Car, CarFront, Disc, SprayCan, Droplet, ShieldCheck, MapPin,
  type LucideIcon,
} from 'lucide-react'
import { AFTER_BANNER } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { StaggerIn, StaggerItem } from '@/components/ui/StaggerIn'

const BADGE_ICONS: Record<string, LucideIcon> = {
  Car, CarFront, Disc, SprayCan, Droplet, ShieldCheck, MapPin,
}

export function AfterBannerSection() {
  return (
    <section className="bg-neutral-page" style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 text-center">

        {/* Icon badges */}
        <StaggerIn className="flex flex-wrap justify-center gap-1.5" staggerDelay={0.08}>
          {AFTER_BANNER.badges.map((name, i) => {
            const Icon = BADGE_ICONS[name]
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

        {/* Headline with inline image pills */}
        <AnimateIn>
          <h2
            className="font-display font-bold text-neutral-ink mt-10 mx-auto max-w-[20em]"
            style={{ fontSize: 'clamp(26px,3.4vw,42px)', lineHeight: '1.3' }}
          >
            {AFTER_BANNER.headline.map((node, i) =>
              node.type === 'pill'
                ? <Pill key={i} src={node.src} alt={node.alt} />
                : <span key={i}>{node.value} </span>
            )}
          </h2>
        </AnimateIn>

        {/* Stat row */}
        <AnimateIn delay={0.05}>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mt-16 lg:flex-nowrap lg:justify-between lg:gap-0">
            {AFTER_BANNER.stats.map((s, i) => {
              const last = i === AFTER_BANNER.stats.length - 1
              // Content-width blocks: the divider sits right after each stat, with even
              // spacing distributed between the four (no equal-grid dead space).
              return (
              <div
                key={s.label}
                className={`flex flex-col items-start text-left ${!last ? 'lg:pr-6 lg:border-r lg:border-neutral-border' : ''}`}
              >
                <span
                  className="font-body font-extrabold text-neutral-ink leading-none"
                  style={{ fontSize: 'clamp(44px,6vw,72px)', letterSpacing: '-0.02em' }}
                >
                  <CountUp to={s.value} />
                  <sup className="text-[0.5em] font-extrabold align-super ml-0.5 text-green-primary">{s.suffix}</sup>
                </span>
                <span className="font-body font-medium text-[15px] text-neutral-muted mt-3">
                  {s.label}
                </span>
              </div>
              )
            })}
          </div>
        </AnimateIn>

      </div>
    </section>
  )
}

// Small rounded image pill embedded mid-headline. Renders nothing if the image is missing.
function Pill({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true)
  if (!ok) return null
  return (
    <span
      className="inline-block align-middle mx-2 rounded-full overflow-hidden border border-neutral-border"
      style={{ width: '72px', height: '44px', verticalAlign: 'middle' }}
    >
      <Image
        src={src}
        alt={alt}
        width={72}
        height={44}
        className="w-full h-full object-cover"
        onError={() => setOk(false)}
      />
    </span>
  )
}

// Count-up that fires once in view. Instant final value under reduced motion.
function CountUp({ to, duration = 1.4 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-64px 0px' })
  const reduced = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduced) { setN(to); return }
    let raf = 0
    let startTs = 0
    const tick = (ts: number) => {
      if (!startTs) startTs = ts
      const p = Math.min((ts - startTs) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setN(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduced, to, duration])

  return <span ref={ref}>{n}</span>
}
