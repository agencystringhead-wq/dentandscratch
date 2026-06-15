'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { ServicesMega, ServiceAreasMega } from './MegaMenu'
import { NAV_LINKS } from '@/lib/content'
import { QuoteButton } from '@/components/ui/QuoteButton'

const PANEL_IDS: Record<string, string> = {
  'Services':      'services-mega-panel',
  'Service Areas': 'service-areas-mega-panel',
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRefs  = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the open panel and returns focus to its trigger
  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const current = active
        setActive(null)
        triggerRefs.current[current]?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active])

  // Close when keyboard focus leaves the header entirely
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(e.relatedTarget as Node)) setActive(null)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-150 pt-5 ${
          scrolled ? 'bg-neutral-page border-b border-neutral-border' : 'bg-transparent'
        }`}
      >
        <div
          ref={containerRef}
          onMouseLeave={() => setActive(null)}
          onBlur={handleBlur}
          className="relative max-w-[1200px] mx-auto px-5 lg:px-10 h-[72px] flex items-center"
        >

          {/* Zone 1 — logo, left-aligned */}
          <div
            onMouseEnter={() => setActive(null)}
            className="flex-none min-w-0 flex items-center justify-start"
          >
            <Link href="/" className="no-underline">
              <Image
                src="/logo/logo.webp"
                width={500}
                height={177}
                className="h-14 w-auto"
                priority
                alt="Dent and Scratch Direct"
              />
            </Link>
          </div>

          {/* Zone 2 — nav links, true centre */}
          <nav className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((item) => {
              if (!item.dropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setActive(null)}
                    className="font-body font-normal text-[14px] text-neutral-link no-underline hover:text-neutral-ink transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )
              }

              const isOpen  = active === item.label
              const panelId = PANEL_IDS[item.label]
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => { triggerRefs.current[item.label] = el }}
                  onMouseEnter={() => setActive(item.label)}
                  onFocus={() => setActive(item.label)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex items-center gap-1 font-body font-normal text-[14px] text-neutral-link no-underline hover:text-neutral-ink transition-colors whitespace-nowrap"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`shrink-0 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Zone 3 — CTA + hamburger, right-aligned */}
          <div
            onMouseEnter={() => setActive(null)}
            className="flex-none ml-auto lg:ml-0 min-w-0 flex items-center justify-end gap-4"
          >
            <QuoteButton className="hidden sm:inline-flex" />

            {/* Hamburger */}
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex flex-col justify-center gap-[5px] p-2 bg-transparent border-none cursor-pointer"
            >
              <span className="block w-6 h-[2px] bg-neutral-ink" />
              <span className="block w-6 h-[2px] bg-neutral-ink" />
              <span className="block w-6 h-[2px] bg-neutral-ink" />
            </button>
          </div>

          {/* Mega-menu panels — desktop only, aligned to the content container */}
          {active === 'Services' && (
            <div className="hidden lg:block">
              <ServicesMega
                id={PANEL_IDS['Services']}
                onItemClick={() => setActive(null)}
                onMouseEnter={() => setActive('Services')}
              />
            </div>
          )}
          {active === 'Service Areas' && (
            <div className="hidden lg:block">
              <ServiceAreasMega
                id={PANEL_IDS['Service Areas']}
                onItemClick={() => setActive(null)}
                onMouseEnter={() => setActive('Service Areas')}
              />
            </div>
          )}
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        links={NAV_LINKS}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}
