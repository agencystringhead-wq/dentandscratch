'use client'
import Link from 'next/link'
import { useEffect } from 'react'

interface NavLink {
  label: string
  href: string
}

interface Props {
  open: boolean
  links: NavLink[]
  onClose: () => void
}

export function MobileMenu({ open, links, onClose }: Props) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-sm flex flex-col pt-20 px-6 md:hidden transition-opacity duration-200 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <nav className="flex flex-col gap-7 mt-4">
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-neutral-ink font-display font-bold text-3xl hover:text-green-primary transition-colors"
            onClick={onClose}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-10 flex flex-col gap-4">
        <a
          href="tel:0447847655"
          className="text-green-primary font-bold text-xl"
          onClick={onClose}
        >
          0447 847 655
        </a>
        <a
          href="#quote"
          className="self-start bg-green-primary text-white font-semibold text-base px-6 py-3 rounded-chip shadow-btn"
          onClick={onClose}
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  )
}
