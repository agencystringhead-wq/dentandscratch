import Link from 'next/link'
import { Phone } from 'lucide-react'
import { BUSINESS, TOP_BAR } from '@/lib/content'

export function TopBar() {
  return (
    <div className="bg-neutral-ink w-full">
      <div
        className="max-w-[1200px] mx-auto px-5 lg:px-10 flex items-center justify-between"
        style={{ height: '38px' }}
      >

        {/* Left — pulsing dot + servicing line */}
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="topbar-dot w-2 h-2 rounded-full bg-green-primary shrink-0"
            aria-hidden="true"
          />
          <span
            className="font-body font-medium text-neutral-light whitespace-nowrap"
            style={{ fontSize: '13px' }}
          >
            <span className="hidden sm:inline">{TOP_BAR.servicing}</span>
            <span className="sm:hidden">{TOP_BAR.servicingShort}</span>
          </span>
        </div>

        {/* Right — stars (hidden on mobile) + phone */}
        <div className="flex items-center gap-5 shrink-0">
          <Link
            href={TOP_BAR.rating.href}
            aria-label={TOP_BAR.rating.ariaLabel}
            className="hidden sm:flex items-center gap-2 no-underline"
          >
            <span aria-hidden="true" style={{ color: '#FAB700', fontSize: '11px', letterSpacing: '2px' }}>
              ★★★★★
            </span>
            <span className="font-body font-medium text-neutral-light" style={{ fontSize: '13px' }}>
              {TOP_BAR.rating.score} · {TOP_BAR.rating.label}
            </span>
          </Link>

          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-1.5 font-body font-medium text-white hover:text-green-primary transition-colors no-underline"
            style={{ fontSize: '15px' }}
          >
            <Phone size={14} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>

      </div>
    </div>
  )
}
