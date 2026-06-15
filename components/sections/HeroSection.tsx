import Image from 'next/image'
import Link from 'next/link'
import { Check, Star } from 'lucide-react'
import { HERO } from '@/lib/content'
import { HeroQuoteForm } from '@/components/ui/HeroQuoteForm'
import { AvatarStack } from '@/components/ui/AvatarStack'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function HeroSection() {
  return (
    <section className="bg-neutral-page relative">

      {/* Top row — big headline left, quote form right (overlaps the band on desktop) */}
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 relative z-10" style={{ paddingTop: '64px' }}>
        <div className="relative">

          {/* Left — headline + social proof + ticks. lg:pb pushes the band start (and the
              bottom-anchored form) down together, lowering the form without changing its overlap. */}
          <div className="lg:w-[62%] lg:pb-[145px]">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E3F0E6]" style={{ padding: '6px 14px' }}>
                <span className="topbar-dot w-2 h-2 rounded-full bg-green-primary shrink-0" aria-hidden="true" />
                <span className="font-body font-medium text-[13px] text-neutral-ink">
                  {HERO.kicker}
                </span>
              </span>
            </div>
            <h1
              className="font-display font-bold text-neutral-ink m-0 tracking-tight"
              style={{ fontSize: 'clamp(34px,4.4vw,50px)', lineHeight: '1.08' }}
            >
              {HERO.heading}
              <br />
              <span className="text-green-primary underline decoration-green-primary decoration-[4px] underline-offset-[8px]">
                {HERO.accentLine}
              </span>
            </h1>

            <p
              className="font-body font-medium text-neutral-muted leading-relaxed mt-6 max-w-[34em]"
              style={{ fontSize: '16px', lineHeight: '1.6' }}
            >
              {HERO.para}
            </p>

            {/* CTA + social proof */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-5 mt-9">
              <Link
                href="#quote"
                className="cta-fill inline-block rounded-[5px] bg-neutral-ink text-white font-body font-medium text-[16px] px-8 py-4 no-underline"
              >
                <span className="relative z-10">Get free quote</span>
              </Link>

              <div className="flex items-center gap-3">
                <AvatarStack srcs={HERO.avatars} />
                <div className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="#FAB700" stroke="#FAB700" />
                    ))}
                  </span>
                  <span className="font-body font-medium text-[14px] text-neutral-muted">
                    {HERO.socialProof}
                  </span>
                </div>
              </div>
            </div>

            {/* Ticks */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
              {HERO.checks.map((check) => (
                <span key={check} className="flex items-center gap-2.5 font-body font-medium text-[15px] text-neutral-ink">
                  <span
                    className="w-5 h-5 flex items-center justify-center bg-green-primary shrink-0"
                    style={{ borderRadius: '5px' }}
                  >
                    <Check size={11} color="white" strokeWidth={3} />
                  </span>
                  {check}
                </span>
              ))}
            </div>
          </div>

          {/* Right — quote form. Desktop: absolute, bottom dips into the band. Mobile: normal flow. */}
          <div
            id="quote"
            className="mt-10 lg:mt-0 lg:absolute lg:right-0 lg:bottom-[-200px] lg:w-[400px] lg:z-30"
          >
            <AnimateIn delay={0.08}>
              <HeroQuoteForm />
            </AnimateIn>
          </div>

        </div>
      </div>

      {/* Full-width photo band — edge to edge, taller; form overlaps its top on desktop */}
      <AnimateIn>
        <div className="relative z-0 w-full overflow-hidden" style={{ height: 'clamp(360px, 45vw, 640px)' }}>
          <Image
            src={HERO.bandImage}
            alt={HERO.bandAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </AnimateIn>

    </section>
  )
}
