import Image from 'next/image'
import { Check, Star } from 'lucide-react'
import { HERO } from '@/lib/content'
import { QuoteButton } from '@/components/ui/QuoteButton'
import { HeroQuoteForm } from '@/components/ui/HeroQuoteForm'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function HeroSection() {
  return (
    <section className="bg-neutral-page">

      {/* Top row — text left, quote form right */}
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10" style={{ paddingTop: '64px', paddingBottom: '56px' }}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — headline + social proof + ticks */}
          <div className="pt-2">
            <h1
              className="font-display font-bold text-neutral-ink m-0 tracking-tight"
              style={{ fontSize: 'clamp(36px,5vw,60px)', lineHeight: '1.1' }}
            >
              {HERO.heading}
              <br />
              <span className="text-green-primary underline decoration-green-primary decoration-[3px] underline-offset-[6px]">
                {HERO.accentLine}
              </span>
            </h1>

            <p
              className="font-body font-medium text-neutral-muted leading-relaxed mt-6 max-w-[32em]"
              style={{ fontSize: '16px', lineHeight: '1.6' }}
            >
              {HERO.para}
            </p>

            {/* CTA + social proof */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-9">
              <QuoteButton />
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="#FAB700" stroke="#FAB700" />
                  ))}
                </span>
                <span className="font-body font-medium text-[14px] text-neutral-muted">
                  {HERO.socialProof}
                </span>
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

          {/* Right — quote form */}
          <AnimateIn delay={0.08}>
            <HeroQuoteForm />
          </AnimateIn>

        </div>
      </div>

      {/* Full-width photo band — edge to edge, not container-constrained */}
      <AnimateIn>
        <div className="relative w-full overflow-hidden" style={{ height: 'clamp(220px, 32vw, 460px)' }}>
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
