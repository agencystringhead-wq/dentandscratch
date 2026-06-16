'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS, REVIEWS } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

// Bottom-right corner removed in a 3-step descending pixel staircase (22px steps).
const STEP_CLIP =
  'polygon(0 0, 100% 0, 100% calc(100% - 66px), calc(100% - 22px) calc(100% - 66px), calc(100% - 22px) calc(100% - 44px), calc(100% - 44px) calc(100% - 44px), calc(100% - 44px) calc(100% - 22px), calc(100% - 66px) calc(100% - 22px), calc(100% - 66px) 100%, 0 100%)'

export function TestimonialsSection() {
  const items = REVIEWS.items
  const [i, setI] = useState(0)
  const item = items[i]
  const prev = () => setI((n) => (n - 1 + items.length) % items.length)
  const next = () => setI((n) => (n + 1) % items.length)

  return (
    <section className="relative z-10 overflow-hidden bg-neutral-ink pt-24 pb-20 lg:pt-[160px]">
      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — eyebrow, quote, name, carousel arrows */}
          <AnimateIn>
            <span className="inline-flex items-center gap-2 font-body font-medium text-[12px] tracking-eyebrow uppercase text-white">
              <span aria-hidden="true" className="w-2.5 h-2.5 bg-green-primary shrink-0" />
              {TESTIMONIALS.eyebrow}
            </span>

            <blockquote
              className="font-body font-medium text-white mt-8"
              style={{ fontSize: 'clamp(24px,2.4vw,30px)', lineHeight: '1.55' }}
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

          {/* Right — car image with a stepped corner CUT OUT of the bottom-right
              (clip-path reveals the dark section behind); other 3 corners rounded 5px. */}
          <AnimateIn delay={0.08}>
            <div className="relative w-full max-w-[460px] mx-auto lg:max-w-none rounded-[5px] overflow-hidden">
              <div
                className="relative bg-neutral-charcoal"
                style={{ aspectRatio: '4 / 5', clipPath: STEP_CLIP }}
              >
                {/* Per-review car image (changes with the carousel) */}
                <Image
                  key={item.image}
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-cover"
                />
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}

