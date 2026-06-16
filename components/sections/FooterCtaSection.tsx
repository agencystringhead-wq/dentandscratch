'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { FOOTER_CTA } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

// Alternating tilt per photo (fanned strip).
const ANGLES = [-8, 5, -5, 6, -5, 5, -8]

export function FooterCtaSection() {
  const { images, heading, sub, cta } = FOOTER_CTA
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-64px 0px' })
  const reduced = useReducedMotion()

  return (
    <section className="overflow-hidden bg-[#ECEAE0]" style={{ padding: '96px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 text-center">

        {/* Fanned photo strip */}
        <div ref={ref} className="flex justify-center items-center mb-12">
          {images.map((img, i) => (
            <PhotoTile
              key={img.src}
              src={img.src}
              alt={img.alt}
              angle={ANGLES[i % ANGLES.length]}
              index={i}
              inView={inView}
              reduced={!!reduced}
            />
          ))}
        </div>

        {/* Heading + subcopy + single CTA */}
        <AnimateIn delay={0.3}>
          <h2
            className="font-display font-bold text-neutral-ink mx-auto"
            style={{ fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: '1.15' }}
          >
            {heading[0]}{' '}<br className="hidden lg:block" />{heading[1]}
          </h2>
          <p className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed mt-4 mx-auto max-w-[40em]">
            {sub[0]}{' '}<br className="hidden lg:block" />{sub[1]}
          </p>
          <Link
            href={cta.href}
            className="cta-fill inline-block mt-8 rounded-[5px] bg-neutral-ink text-white font-body font-medium text-[16px] px-8 py-4 no-underline"
          >
            <span className="relative z-10">{cta.label}</span>
          </Link>
        </AnimateIn>

      </div>
    </section>
  )
}

function PhotoTile({
  src, alt, angle, index, inView, reduced,
}: {
  src: string; alt: string; angle: number; index: number; inView: boolean; reduced: boolean
}) {
  const [ok, setOk] = useState(true)
  const cls =
    `relative w-[68px] h-[88px] lg:w-[104px] lg:h-[132px] rounded-[6px] overflow-hidden bg-neutral-light border-4 border-white shrink-0 ${
      index ? '-ml-4 lg:-ml-5' : ''
    }`
  const baseStyle = { boxShadow: '0 10px 24px rgba(0,0,0,0.14)', zIndex: index }

  const inner = ok ? (
    <Image src={src} alt={alt} fill sizes="120px" className="object-cover" onError={() => setOk(false)} />
  ) : null

  // Reduced motion: static tilt, no entrance animation.
  if (reduced) {
    return (
      <div className={cls} style={{ ...baseStyle, transform: `rotate(${angle}deg)` }}>
        {inner}
      </div>
    )
  }

  // Settle into the tilt on scroll, staggered.
  return (
    <motion.div
      className={cls}
      style={baseStyle}
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      animate={inView ? { opacity: 1, y: 0, rotate: angle } : { opacity: 0, y: 24, rotate: 0 }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {inner}
    </motion.div>
  )
}
