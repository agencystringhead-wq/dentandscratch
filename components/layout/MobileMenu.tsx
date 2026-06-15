'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { type NavItem, BUSINESS } from '@/lib/content'

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
      className={`fixed inset-0 z-[100] flex flex-col bg-neutral-page lg:hidden transition-opacity duration-150 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 h-[72px] border-b border-neutral-border shrink-0">
        <span className="font-body font-medium text-[16px] text-neutral-ink">Menu</span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 bg-transparent border-none cursor-pointer text-neutral-ink"
        >
          <X size={24} />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
        {links.map((item) =>
          item.dropdown ? (
            <div key={item.href} className="border-b border-neutral-border">
              <button
                onClick={() => setOpenSection((s) => (s === item.label ? null : item.label))}
                aria-expanded={openSection === item.label}
                className="w-full flex items-center justify-between px-5 py-4 bg-transparent border-none cursor-pointer"
              >
                <span className="font-body font-medium text-[16px] text-neutral-ink">{item.label}</span>
                <ChevronDown
                  size={16}
                  className={`text-neutral-muted transition-transform duration-150 ${openSection === item.label ? 'rotate-180' : ''}`}
                />
              </button>

              {openSection === item.label && (
                <div className="border-t border-neutral-border bg-neutral-alt">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={onClose}
                      className="block px-8 py-3 font-body font-medium text-[15px] text-neutral-link hover:text-neutral-ink hover:bg-neutral-page transition-colors no-underline border-b border-neutral-border last:border-b-0"
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
              onClick={onClose}
              className="flex items-center px-5 py-4 font-body font-medium text-[16px] text-neutral-ink no-underline hover:bg-neutral-alt transition-colors border-b border-neutral-border"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      {/* Footer CTAs */}
      <div className="shrink-0 p-5 border-t border-neutral-border flex flex-col gap-3">
        <Link
          href="/free-quote/"
          onClick={onClose}
          className="block text-center bg-green-primary text-white font-body font-medium text-[16px] py-4 no-underline border-2 border-green-primary hover:bg-green-hover hover:border-green-hover transition-colors"
        >
          Get my free quote
        </Link>
        <a
          href={BUSINESS.phoneHref}
          onClick={onClose}
          className="block text-center bg-transparent text-neutral-ink font-body font-medium text-[16px] py-4 no-underline border-2 border-neutral-ink"
        >
          {BUSINESS.phone}
        </a>
      </div>
    </div>
  )
}
