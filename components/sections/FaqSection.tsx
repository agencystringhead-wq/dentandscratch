'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus, Camera } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FAQ_SECTION, BUSINESS } from '@/lib/content'
import { getFaqSchema } from '@/lib/schema'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function FaqSection() {
  const { eyebrow, heading, contact, items } = FAQ_SECTION
  const [open, setOpen] = useState<number | null>(0)
  const reduced = useReducedMotion()

  return (
    <section className="bg-neutral-page border-t border-neutral-border" style={{ padding: '80px 0' }}>
      {/* FAQPage structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }}
      />

      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">

          {/* Left — eyebrow, heading, contact card */}
          <AnimateIn>
            <span className="inline-flex items-center gap-2 font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted">
              <span aria-hidden="true" className="w-2.5 h-2.5 bg-green-primary shrink-0" />
              {eyebrow}
            </span>
            <h2
              className="font-display font-bold text-neutral-ink mt-3"
              style={{ fontSize: 'clamp(28px,3.5vw,40px)', lineHeight: '1.2' }}
            >
              {heading}
            </h2>

            {/* Contact prompt card */}
            <div className="relative bg-green-primary p-7 mt-8 overflow-hidden">
              <CardNotch />
              <h3 className="font-body font-bold text-[18px] text-white">{contact.heading}</h3>
              <p className="font-body font-medium text-[15px] text-white/85 leading-relaxed mt-2">
                {contact.line}
              </p>
              <Link
                href={contact.cta.href}
                className="inline-flex items-center gap-2 mt-5 bg-white text-neutral-ink font-body font-bold text-[15px] px-5 py-3 no-underline hover:bg-neutral-page transition-colors"
                style={{ borderRadius: '5px' }}
              >
                <Camera size={18} />
                {contact.cta.label}
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="block font-body font-medium text-[15px] text-white mt-4 no-underline hover:text-white/80 transition-colors"
              >
                or call {BUSINESS.phone}
              </a>
            </div>
          </AnimateIn>

          {/* Right — accordion */}
          <AnimateIn delay={0.08}>
            <div>
              {items.map((item, i) => {
                const isOpen = open === i
                const panelId = `faq-panel-${i}`
                const btnId = `faq-btn-${i}`
                return (
                  <div key={item.q} className="border-b border-neutral-border first:border-t">
                    <h3 className="m-0">
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-4 text-left py-5 bg-transparent border-none cursor-pointer"
                      >
                        <span className="font-body font-bold text-[17px] text-neutral-ink">{item.q}</span>
                        <span className={`shrink-0 ${isOpen ? 'text-green-primary' : 'text-neutral-muted'}`}>
                          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="panel"
                          id={panelId}
                          role="region"
                          aria-labelledby={btnId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={reduced ? { duration: 0 } : { duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed pb-5 max-w-[46em]">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}

// Cream stepped-pixel notch in the card's top-right corner.
function CardNotch() {
  const steps = [
    { size: 24, top: 0,  right: 0 },
    { size: 16, top: 24, right: 24 },
    { size: 10, top: 40, right: 40 },
  ]
  return (
    <div className="absolute top-0 right-0 pointer-events-none" aria-hidden="true">
      {steps.map((s, i) => (
        <div
          key={i}
          className="absolute bg-neutral-page"
          style={{ top: `${s.top}px`, right: `${s.right}px`, width: `${s.size}px`, height: `${s.size}px` }}
        />
      ))}
    </div>
  )
}
