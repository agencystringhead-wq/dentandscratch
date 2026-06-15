'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { type NavItem } from '@/lib/content'

interface Props {
  open: boolean
  links: NavItem[]
  onClose: () => void
}

export function MobileMenu({ open, links, onClose }: Props) {
  const [openSection, setOpenSection] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) setOpenSection(null)
  }, [open])

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-sm flex flex-col pt-20 px-6 md:hidden transition-opacity duration-200 overflow-y-auto ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="flex flex-col mt-4" aria-label="Mobile navigation">
        {links.map((item) =>
          item.dropdown ? (
            <div key={item.href}>
              <div className="flex items-center justify-between border-b border-neutral-border">
                <Link
                  href={item.href}
                  className="text-neutral-ink font-display font-bold text-2xl hover:text-green-primary transition-colors no-underline py-3"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
                <button
                  className="p-3 text-neutral-muted"
                  aria-label={`${openSection === item.href ? 'Collapse' : 'Expand'} ${item.label}`}
                  onClick={() => setOpenSection(s => s === item.href ? null : item.href)}
                >
                  <svg
                    width="14" height="8" viewBox="0 0 14 8" fill="none"
                    className={`transition-transform duration-150 ${openSection === item.href ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {openSection === item.href && (
                <div className="pl-4 py-2 flex flex-col gap-0.5 border-l-2 border-green-primary/30 ml-2 mb-2">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="text-neutral-muted font-medium text-[15px] hover:text-green-primary transition-colors no-underline py-1.5"
                      onClick={onClose}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-ink font-display font-bold text-2xl hover:text-green-primary transition-colors no-underline py-3 border-b border-neutral-border"
              onClick={onClose}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      <div className="mt-8 pb-10 flex flex-col gap-4">
        <a
          href="tel:0447847655"
          className="text-green-primary font-bold text-xl"
          onClick={onClose}
        >
          0447 847 655
        </a>
        <Link
          href="/free-quote/"
          className="self-start bg-green-primary text-white font-semibold text-base px-6 py-3 rounded-chip shadow-btn no-underline"
          onClick={onClose}
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  )
}
