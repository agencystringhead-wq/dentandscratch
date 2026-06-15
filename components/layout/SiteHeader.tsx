'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/lib/content'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/[0.88] backdrop-blur-md border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center gap-5">

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
          <nav className="hidden md:flex items-center gap-6 ml-4" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-neutral-muted font-medium text-[14.5px] hover:text-neutral-ink transition-colors no-underline"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            {/* Phone — desktop only */}
            <a
              href="tel:0447847655"
              className="hidden md:block text-neutral-ink font-semibold text-[14.5px] hover:text-green-primary transition-colors no-underline"
            >
              &#9742; 0447 847 655
            </a>

            {/* CTA */}
            <a
              href="/#quote"
              className="bg-green-primary text-white font-semibold text-[14px] px-5 py-2.5 rounded-chip shadow-nav hover:-translate-y-px hover:bg-green-dark transition-all no-underline whitespace-nowrap"
            >
              Free Quote
            </a>

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
