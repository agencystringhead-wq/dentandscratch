'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/lib/content'
import { QuoteButton } from '@/components/ui/QuoteButton'

export function SiteHeader() {
  const [menuOpen, setMenuOpen]         = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-150 pt-5 ${
          scrolled ? 'bg-neutral-page border-b border-neutral-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 h-[72px] flex items-center">

          {/* Zone 1 — logo, left-aligned */}
          <div className="flex-none min-w-0 flex items-center justify-start">
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
            {NAV_LINKS.map((item) =>
              item.dropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 font-body font-normal text-[14px] text-neutral-link no-underline hover:text-neutral-ink transition-colors whitespace-nowrap"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`shrink-0 transition-transform duration-150 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </Link>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-0 bg-neutral-alt border border-neutral-border min-w-[240px] z-50">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-3 font-body font-medium text-[15px] text-neutral-link hover:text-neutral-ink hover:bg-neutral-page transition-colors no-underline border-b border-neutral-border last:border-b-0"
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
                  className="font-body font-normal text-[14px] text-neutral-link no-underline hover:text-neutral-ink transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Zone 3 — CTA + hamburger, right-aligned */}
          <div className="flex-none ml-auto lg:ml-0 min-w-0 flex items-center justify-end gap-4">
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
