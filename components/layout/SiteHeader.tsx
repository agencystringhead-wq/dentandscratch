'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS, BUSINESS } from '@/lib/content'

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
        className={`sticky top-0 z-50 transition-colors duration-150 ${
          scrolled ? 'bg-neutral-page border-b border-neutral-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 h-[72px] flex items-center gap-6">

          {/* Logo */}
          <Link href="/" className="shrink-0 no-underline">
            <Image
              src="/logo/logo.webp"
              width={500}
              height={177}
              className="h-8 w-auto"
              priority
              alt="Dent and Scratch Direct"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1" aria-label="Main navigation">
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
                    className="flex items-center gap-1 font-body font-normal text-[16px] text-neutral-link no-underline hover:text-neutral-ink transition-colors whitespace-nowrap"
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
                  className="font-body font-normal text-[16px] text-neutral-link no-underline hover:text-neutral-ink transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="hidden lg:block font-body font-medium text-[16px] text-neutral-ink no-underline hover:text-neutral-muted transition-colors whitespace-nowrap"
            >
              {BUSINESS.phone}
            </a>

            <Link
              href="/free-quote/"
              className="hidden sm:inline-block bg-green-primary text-white font-body font-medium text-[16px] px-6 py-[10px] no-underline border-2 border-green-primary hover:bg-green-hover hover:border-green-hover transition-colors whitespace-nowrap"
            >
              Get free quote
            </Link>

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
