'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS, REVIEWS } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function TestimonialsSection() {
  const items = REVIEWS.items
  const [i, setI] = useState(0)
  const item = items[i]
  const prev = () => setI((n) => (n - 1 + items.length) % items.length)
  const next = () => setI((n) => (n + 1) % items.length)

  return (
    <section className="relative overflow-hidden bg-neutral-ink" style={{ padding: '80px 0' }}>
      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — eyebrow, quote, name, carousel arrows */}
          <AnimateIn>
            <span className="inline-flex items-center gap-2 font-body font-medium text-[12px] tracking-eyebrow uppercase text-white">
              <span aria-hidden="true" className="w-2.5 h-2.5 bg-green-primary shrink-0" />
              {TESTIMONIALS.eyebrow}
            </span>

            <blockquote
              className="font-display font-normal text-white mt-8"
              style={{ fontSize: 'clamp(22px,2.6vw,32px)', lineHeight: '1.4' }}
            >
              &ldquo;{item.text}&rdquo;
            </blockquote>

            <p className="font-body font-medium italic text-[16px] text-neutral-light mt-6">
              — {item.name}, {item.suburb}
            </p>

            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full bg-green-primary text-white flex items-center justify-center hover:bg-green-hover transition-colors border-none cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-green-primary text-white flex items-center justify-center hover:bg-green-hover transition-colors border-none cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </AnimateIn>

          {/* Right — image with a pixel-notch corner */}
          <AnimateIn delay={0.08}>
            <div className="relative w-full max-w-[520px] mx-auto lg:ml-auto">
              <div className="relative overflow-hidden bg-neutral-charcoal" style={{ aspectRatio: '4 / 3' }}>
                {/* Per-review car image (changes with the carousel) */}
                <Image
                  key={item.image}
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />
              </div>
              <ImageNotch />
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}

// Cream stepped-pixel notch in the image's bottom-right corner.
function ImageNotch() {
  const steps = [
    { size: 36, bottom: 0,  right: 0 },
    { size: 24, bottom: 36, right: 36 },
    { size: 14, bottom: 60, right: 60 },
  ]
  return (
    <div className="absolute bottom-0 right-0 pointer-events-none" aria-hidden="true">
      {steps.map((s, i) => (
        <div
          key={i}
          className="absolute bg-neutral-page"
          style={{ bottom: `${s.bottom}px`, right: `${s.right}px`, width: `${s.size}px`, height: `${s.size}px` }}
        />
      ))}
    </div>
  )
}
