'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES, SERVICES_SECTION, type Service } from '@/lib/content'
import { StaggerIn, StaggerItem } from '@/components/ui/StaggerIn'

export function ServicesSection() {
  const { heading, sub, cta } = SERVICES_SECTION
  return (
    <section className="bg-neutral-page border-t border-neutral-border" style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <div className="lg:max-w-[760px]">
            <h2
              className="font-display font-bold text-neutral-ink"
              style={{ fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: '1.2' }}
            >
              {heading}
            </h2>
            <p className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed mt-4">
              {sub}
            </p>
          </div>
          <Link
            href={cta.href}
            className="cta-fill-invert shrink-0 self-start lg:mt-5 inline-block rounded-[5px] bg-green-primary text-white font-body font-medium text-[16px] px-10 py-3.5 no-underline whitespace-nowrap"
          >
            <span className="relative z-10">{cta.label}</span>
          </Link>
        </div>

        {/* Cards — 2 columns desktop, 1 column mobile */}
        <StaggerIn className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerDelay={0.08}>
          {SERVICES.map((s) => (
            <StaggerItem key={s.key}>
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </StaggerIn>

      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col h-full bg-[#ECEAE0] border border-neutral-border rounded-[10px] overflow-hidden p-6 no-underline motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1"
    >
      {/* Tag (green square + label) + image */}
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex items-center gap-2 font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted mt-1">
          <span aria-hidden="true" className="w-2.5 h-2.5 bg-green-primary shrink-0" />
          {service.tag}
        </span>
        <ServiceImage src={service.image} alt={service.alt} />
      </div>

      {/* Title + description */}
      <h3 className="font-body font-bold text-[20px] text-neutral-ink mt-6">{service.title}</h3>
      <p className="font-body font-medium text-[15px] text-neutral-muted leading-relaxed mt-2">
        {service.desc}
      </p>

      {/* Arrow button */}
      <div className="flex justify-end mt-6">
        <span
          aria-hidden="true"
          className="w-11 h-11 rounded-full bg-neutral-ink text-white flex items-center justify-center shrink-0"
        >
          <ArrowRight size={18} className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

// Wide landscape image (~48% of the card) in a fixed rounded frame; the image
// gently zooms within the clipped frame on card hover. Grey fallback if missing.
function ServiceImage({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true)
  return (
    <div
      className="relative w-[48%] shrink-0 rounded-[8px] overflow-hidden bg-neutral-light"
      style={{ aspectRatio: '16 / 9' }}
    >
      {ok && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 50vw, 280px"
          className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.06]"
          onError={() => setOk(false)}
        />
      )}
    </div>
  )
}
