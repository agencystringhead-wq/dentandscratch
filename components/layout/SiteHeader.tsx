'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/lib/content'

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/[0.88] backdrop-blur-md border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center gap-4">

          {/* Logo */}
          <Link href="/" className="shrink-0 no-underline">
            <Image
              src="/logo/logo.webp"
              width={500}
              height={177}
              className="h-9 w-auto"
              priority
              alt="Dent and Scratch Direct"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-[14px] ml-3" aria-label="Main navigation">
            {NAV_LINKS.map((item) =>
              item.dropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-[5px] text-neutral-muted font-medium text-[13.5px] hover:text-neutral-ink transition-colors no-underline"
                    aria-expanded={openDropdown === item.href}
                  >
                    {item.label}
                    <ChevronDown className={`transition-transform duration-150 ${openDropdown === item.href ? 'rotate-180' : ''}`} />
                  </Link>
                  {openDropdown === item.href && (
                    <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-lg border border-neutral-border py-1.5 z-50">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-[9px] text-[13px] text-neutral-muted hover:text-neutral-ink hover:bg-neutral-page transition-colors no-underline"
                          onClick={() => setOpenDropdown(null)}
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
                  className="text-neutral-muted font-medium text-[13.5px] hover:text-neutral-ink transition-colors no-underline whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            {/* Phone — large desktop only */}
            <a
              href="tel:0447847655"
              className="hidden lg:block text-neutral-ink font-semibold text-[13.5px] hover:text-green-primary transition-colors no-underline whitespace-nowrap"
            >
              &#9742; 0447 847 655
            </a>

            {/* CTA */}
            <Link
              href="/free-quote/"
              className="bg-green-primary text-white font-semibold text-[13.5px] px-4 py-2.5 rounded-chip shadow-nav hover:-translate-y-px hover:bg-green-dark transition-all no-underline whitespace-nowrap"
            >
              Get Free Quote
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-1 text-neutral-ink"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
            >
              <span className="block w-5 h-[1.5px] bg-current mb-[5px]" />
              <span className="block w-5 h-[1.5px] bg-current mb-[5px]" />
              <span className="block w-5 h-[1.5px] bg-current" />
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
