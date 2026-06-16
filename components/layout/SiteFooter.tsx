import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock } from 'lucide-react'
import { BUSINESS, SERVICES, FOOTER, FOOTER_COMPANY, SOCIAL_LINKS, FOOTER_LEGAL, NEWSLETTER } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { NewsletterForm } from '@/components/ui/NewsletterForm'

// Static export: evaluated at build time, refreshed on each deploy.
const YEAR = new Date().getFullYear()

// lucide v1 ships no brand glyphs — inline 24px brand paths (fill: currentColor).
const SOCIAL_ICONS: Record<string, ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.015 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  ),
}

const LINK_CLASS =
  'font-body font-medium text-[16px] text-[#9A9A9A] hover:text-white transition-colors no-underline'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#1A1A1A]">

      {/* Newsletter row */}
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 pt-[100px] lg:pt-[120px]">
        <AnimateIn>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <h2
              className="font-display font-extrabold text-white leading-[1.05]"
              style={{ fontSize: 'clamp(34px,4.6vw,54px)' }}
            >
              {NEWSLETTER.headingLines[0]}
              <br />
              {NEWSLETTER.headingLines[1]}
            </h2>
            <NewsletterForm />
          </div>
        </AnimateIn>
      </div>

      {/* Main row */}
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 pt-[72px] lg:pt-[110px] pb-[56px]">
        <AnimateIn delay={0.05}>
          <div className="grid gap-x-10 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">

            {/* Column 1 — brand */}
            <div>
              <Link href="/" className="inline-block no-underline">
                <Image
                  src="/logo/logo/logo-white.webp"
                  width={500}
                  height={177}
                  className="h-10 w-auto"
                  alt="Dent & Scratch Direct"
                />
              </Link>
              <p className="font-body font-medium text-[16px] text-[#9A9A9A] leading-relaxed mt-6 max-w-[42ch]">
                {FOOTER.blurb}
              </p>
              <ul className="flex flex-wrap gap-3 mt-8 list-none p-0 m-0">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex items-center justify-center w-11 h-11 rounded-[12px] bg-[#262626] text-white hover:bg-green-primary transition-colors"
                    >
                      {SOCIAL_ICONS[s.key]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 — Company */}
            <nav aria-label="Company">
              <h2 className="sr-only">Company</h2>
              <ul className="flex flex-col gap-[18px] list-none p-0 m-0">
                {FOOTER_COMPANY.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className={LINK_CLASS}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 3 — Services (from canonical SERVICES) */}
            <nav aria-label="Services">
              <h2 className="sr-only">Services</h2>
              <ul className="flex flex-col gap-[18px] list-none p-0 m-0">
                {SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className={LINK_CLASS}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 4 — contact */}
            <div>
              <h2 className="font-body font-bold text-[16px] text-white mb-6">Have a question?</h2>
              <ul className="flex flex-col gap-5 list-none p-0 m-0">
                <li>
                  <a href={BUSINESS.phoneHref} className={`flex items-center gap-3 ${LINK_CLASS}`}>
                    <Phone size={18} className="text-green-primary shrink-0" aria-hidden="true" />
                    {BUSINESS.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BUSINESS.email}`} className={`flex items-center gap-3 ${LINK_CLASS}`}>
                    <Mail size={18} className="text-green-primary shrink-0" aria-hidden="true" />
                    {BUSINESS.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 font-body font-medium text-[16px] text-[#9A9A9A]">
                  <Clock size={18} className="text-green-primary shrink-0" aria-hidden="true" />
                  {BUSINESS.hours}
                </li>
              </ul>
            </div>

          </div>
        </AnimateIn>
      </div>

      {/* Divider + centred copyright with a small legal line beside it */}
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <div className="border-t border-[#333333] pt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
          <p className="font-body font-medium text-[14px] text-[#9A9A9A]">
            &copy; {YEAR} Dent &amp; Scratch Direct. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {FOOTER_LEGAL.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-body font-medium text-[14px] text-[#9A9A9A] hover:text-white transition-colors no-underline"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Giant wordmark — bleeds off the bottom (clipped by the footer's overflow-hidden) */}
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 mt-10 lg:mt-12">
        <span
          aria-hidden="true"
          className="block font-display font-extrabold text-white leading-[0.8] whitespace-nowrap select-none"
          style={{ fontSize: 'clamp(48px,13.5vw,156px)', marginBottom: 'clamp(-28px,-2.2vw,-9px)' }}
        >
          Dent &amp; Scratch
        </span>
      </div>

    </footer>
  )
}
