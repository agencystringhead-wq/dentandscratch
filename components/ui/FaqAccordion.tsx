'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { FAQ } from '@/lib/content'

// Reusable FAQ accordion for service / inner pages. Keyboard accessible; reduced-motion safe.
export function FaqAccordion({ items }: { items: readonly FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const reduced = useReducedMotion()

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `svc-faq-panel-${i}`
        const btnId = `svc-faq-btn-${i}`
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
  )
}
