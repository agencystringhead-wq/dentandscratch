import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS, FOOTER_NAV } from '@/lib/content'

const SERVICE_LINKS = [
  { label: 'Paintless Dent Repair', href: '/paintless-dent-repair-pdr/' },
  { label: 'Paint Repairs',         href: '/paint-repairs/' },
  { label: 'Bumper Repair',         href: '/bumper-repairs/' },
  { label: 'Hail Damage Repair',    href: '/hail-damage-repair/' },
  { label: 'Scratch & Chip Repair', href: '/scratch-and-chip-repair/' },
]

export function SiteFooter() {
  return (
    <footer className="bg-neutral-ink" style={{ paddingTop: '60px', paddingBottom: '32px' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        <div className="flex flex-wrap gap-10 justify-between">

          {/* Brand */}
          <div className="flex-1 basis-[280px] max-w-[360px]">
            <Link href="/" className="no-underline inline-block">
              <Image
                src="/logo/logo/logo-white.webp"
                width={500}
                height={177}
                className="h-10 w-auto"
                alt="Dent and Scratch Direct"
              />
            </Link>
            <p className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed mt-5">
              Mobile dent and scratch repair across South East Melbourne. We come to you — factory finish, fraction of the price.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted mb-4">
              Explore
            </p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {FOOTER_NAV.pages.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body font-medium text-[16px] text-neutral-light hover:text-white transition-colors no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body font-medium text-[16px] text-neutral-light hover:text-white transition-colors no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted mb-4">
              Get in touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="font-body font-medium text-[16px] text-white no-underline hover:text-neutral-light transition-colors"
              >
                {BUSINESS.phone}
              </a>
              <span className="font-body font-medium text-[16px] text-neutral-muted">{BUSINESS.email}</span>
              <span className="font-body font-medium text-[16px] text-neutral-muted">
                {BUSINESS.suburb}, {BUSINESS.state} · South East Melbourne
              </span>
              <Link
                href="/free-quote/"
                className="mt-2 self-start font-body font-medium text-[16px] bg-green-primary text-white px-6 py-3 no-underline border-2 border-green-primary hover:bg-green-hover hover:border-green-hover transition-colors"
              >
                Free Quote
              </Link>
            </div>
          </div>

        </div>

        {/* Legal row */}
        <div className="mt-10 pt-6 border-t border-[#333333] flex flex-wrap gap-4 justify-between items-center">
          <span className="font-body font-medium text-[14px] text-neutral-muted">
            &copy; 2026 Dent and Scratch Direct. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-6">
            {FOOTER_NAV.legal.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-body font-medium text-[14px] text-neutral-muted hover:text-neutral-light transition-colors no-underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
