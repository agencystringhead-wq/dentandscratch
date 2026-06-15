'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { WORK_SECTION, type WorkCard } from '@/lib/content'
import { StaggerIn, StaggerItem } from '@/components/ui/StaggerIn'

export function WorkSection() {
  const { eyebrow, heading, cta, cards } = WORK_SECTION
  return (
    <section className="bg-neutral-page border-t border-neutral-border" style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <div className="lg:max-w-[760px]">
            <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-green-primary">
              {eyebrow}
            </span>
            <h2
              className="font-display font-bold text-neutral-ink mt-3"
              style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
            >
              {heading}
            </h2>
          </div>
          <Link
            href={cta.href}
            className="shrink-0 self-start inline-block bg-green-primary text-white font-body font-medium text-[16px] px-6 py-3.5 no-underline border-2 border-green-primary hover:bg-green-hover hover:border-green-hover transition-colors whitespace-nowrap"
          >
            {cta.label}
          </Link>
        </div>

        {/* Cards — 2 columns desktop, 1 column mobile */}
        <StaggerIn className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerDelay={0.1}>
          {cards.map((card, i) => (
            <StaggerItem key={i}>
              <WorkCardView card={card} />
            </StaggerItem>
          ))}
        </StaggerIn>

      </div>
    </section>
  )
}

function WorkCardView({ card }: { card: WorkCard }) {
  // Images already include the baked-in BEFORE/AFTER labels and divider, so the card
  // is just the clean composite image inside the panel — no overlays.
  return (
    <div className="bg-white border border-neutral-border overflow-hidden">
      {card.kind === 'composite' ? (
        <WorkImage src={card.image} alt={card.alt} />
      ) : (
        <div className="grid grid-cols-2">
          <WorkImage src={card.before} alt={card.alt} />
          <WorkImage src={card.after} alt={card.alt} />
        </div>
      )}
    </div>
  )
}

// Square image with a neutral grey fallback that holds the aspect if the path is wrong.
function WorkImage({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true)
  return (
    <div className="relative bg-neutral-light overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
      {ok && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 580px"
          className="object-cover"
          onError={() => setOk(false)}
        />
      )}
    </div>
  )
}
