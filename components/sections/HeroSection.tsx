import Link from 'next/link'
import { Check } from 'lucide-react'
import { HERO, BUSINESS } from '@/lib/content'

export function HeroSection() {
  return (
    <section className="bg-neutral-page" style={{ padding: '80px 0 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="flex flex-wrap items-start gap-10 lg:gap-16">

          {/* Left — headline + checks + CTAs */}
          <div className="flex-[1_1_420px] min-w-[300px] pb-10 lg:pb-20 pt-2">
            <h1
              className="font-display font-bold text-neutral-ink m-0 tracking-tight"
              style={{ fontSize: 'clamp(36px,5vw,60px)', lineHeight: '1.1' }}
            >
              {HERO.heading}
              <br />
              <span className="text-green-primary">{HERO.accentLine}</span>
            </h1>

            <p
              className="font-body font-medium text-neutral-muted leading-relaxed mt-6 max-w-[32em]"
              style={{ fontSize: '16px', lineHeight: '1.6' }}
            >
              {HERO.para}
            </p>

            <div className="flex flex-col gap-3 mt-8">
              {HERO.checks.map((check) => (
                <span key={check} className="flex items-center gap-3 font-body font-medium text-[16px] text-neutral-ink">
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

            <div className="flex flex-wrap gap-3 mt-10">
              <Link
                href="/free-quote/"
                className="inline-block bg-green-primary text-white font-body font-medium text-[16px] px-8 py-4 no-underline border-2 border-green-primary hover:bg-green-hover hover:border-green-hover transition-colors"
              >
                Get my free quote
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-block bg-transparent text-neutral-ink font-body font-medium text-[16px] px-8 py-4 no-underline border-2 border-neutral-ink hover:bg-neutral-alt transition-colors"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Right — image cluster */}
          <div className="flex-[1_1_420px] min-w-[300px] self-end">
            {/* Dominant image */}
            <div className="relative bg-neutral-charcoal border border-neutral-border overflow-hidden" style={{ aspectRatio: '4/3' }}>
              {/* PLACEHOLDER — swap for real hero photo before go-live */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-light">
                  Hero photo — Diarmuid at work
                </span>
              </div>
            </div>

            {/* Two smaller images */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="relative bg-neutral-ink border border-neutral-border overflow-hidden" style={{ aspectRatio: '4/3' }}>
                {/* PLACEHOLDER — swap before go-live */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-body font-medium text-[11px] tracking-eyebrow uppercase text-neutral-light">Before</span>
                </div>
              </div>
              <div className="relative bg-neutral-charcoal border border-neutral-border overflow-hidden" style={{ aspectRatio: '4/3' }}>
                {/* PLACEHOLDER — swap before go-live */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-body font-medium text-[11px] tracking-eyebrow uppercase text-neutral-light">After</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
