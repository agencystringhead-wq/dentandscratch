'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { MEET_OWNER } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function MeetOwnerSection() {
  const o = MEET_OWNER
  return (
    <section
      id="owner"
      className="scroll-mt-[72px] bg-neutral-page border-t border-neutral-border"
      style={{ padding: '80px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Photo */}
          <AnimateIn>
            <OwnerPhoto src={o.image} alt={o.alt} />
          </AnimateIn>

          {/* Text */}
          <AnimateIn delay={0.08}>
            <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-green-primary">
              {o.eyebrow}
            </span>
            <h2
              className="font-display font-bold text-neutral-ink mt-3"
              style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
            >
              {o.heading}
            </h2>

            {o.paras.map((p, i) => (
              <p key={i} className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed mt-4 max-w-[36em]">
                {p}
              </p>
            ))}

            {/* Inline stats */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 pt-8 border-t border-neutral-border">
              {o.stats.map((s) => (
                <span key={s} className="inline-flex items-center gap-2 font-body font-medium text-[15px] text-neutral-ink">
                  <Check size={16} strokeWidth={2.5} className="text-green-primary shrink-0" />
                  {s}
                </span>
              ))}
            </div>

            <p className="font-body font-medium text-[15px] text-neutral-ink mt-8">{o.name}</p>

            <Link
              href={o.cta.href}
              className="cta-fill-invert inline-block mt-5 rounded-[5px] bg-green-primary text-white font-body font-medium text-[16px] px-8 py-3.5 no-underline"
            >
              <span className="relative z-10">{o.cta.label}</span>
            </Link>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}

// Rounded portrait with a neutral grey fallback if the file is missing.
function OwnerPhoto({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true)
  return (
    <div
      className="relative w-full max-w-[440px] mx-auto lg:mx-0 rounded-[10px] overflow-hidden border border-neutral-border bg-neutral-light"
      style={{ aspectRatio: '4 / 5' }}
    >
      {ok && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 90vw, 440px"
          className="object-cover"
          onError={() => setOk(false)}
        />
      )}
    </div>
  )
}
