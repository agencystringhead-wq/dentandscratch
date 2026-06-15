import Link from 'next/link'
import Image from 'next/image'

const SERVICE_LINKS = [
  { label: 'Paintless Dent Repair', href: '/paintless-dent-repair-pdr/' },
  { label: 'Paint Repairs',         href: '/paint-repairs/' },
  { label: 'Bumper Repair',         href: '/bumper-repairs/' },
  { label: 'Hail Damage Repair',    href: '/hail-damage-repair/' },
  { label: 'Scratch & Chip Repair', href: '/scratch-and-chip-repair/' },
]

export function SiteFooter() {
  return (
    <footer className="bg-neutral-ink text-[#c7cdc7] px-5 pt-[clamp(40px,5vw,64px)] pb-8">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between">

        {/* Brand */}
        <div className="flex-1 basis-[280px] max-w-[360px]">
          <div className="flex flex-col gap-3 items-start">
            <Link href="/" className="no-underline">
              <Image
                src="/logo/logo/logo-white.webp"
                width={500}
                height={177}
                className="h-12 w-auto"
                alt="Dent and Scratch Direct"
              />
            </Link>
          </div>
          <p className="text-[14px] leading-relaxed mt-4 text-[#9aa39a]">
            Mobile dent and scratch repair across South East Melbourne. We come to you, factory finish, fraction of the price.
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="font-label font-semibold text-[12px] uppercase tracking-[0.14em] text-[#6f786f]">
            Services
          </p>
          <ul className="flex flex-col gap-2.5 mt-3.5 list-none p-0">
            {SERVICE_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[#c7cdc7] text-[14px] hover:text-white transition-colors no-underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-label font-semibold text-[12px] uppercase tracking-[0.14em] text-[#6f786f]">
            Get in touch
          </p>
          <div className="flex flex-col gap-2.5 mt-3.5">
            <a
              href="tel:0447847655"
              className="text-white font-bold text-[16px] no-underline hover:text-green-light transition-colors"
            >
              0447 847 655
            </a>
            <span className="text-[14px] text-[#9aa39a]">admin@dentandscratch.com.au</span>
            <span className="text-[14px] text-[#9aa39a]">Berwick, VIC &middot; South East Melbourne</span>
            <a
              href="/#quote"
              className="mt-1.5 self-start bg-green-primary text-white font-semibold text-[14px] px-5 py-2.5 rounded-chip no-underline hover:bg-green-dark transition-colors"
            >
              Free Quote
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-5 border-t border-[#1f261f] flex flex-wrap gap-2.5 justify-between text-[12.5px] text-[#6f786f]">
        <span>&copy; 2026 Dent and Scratch Direct. All rights reserved.</span>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/privacy-policy/"  className="hover:text-[#9aa39a] transition-colors no-underline">Privacy Policy</Link>
          <Link href="/terms-conditions/" className="hover:text-[#9aa39a] transition-colors no-underline">Terms &amp; Conditions</Link>
          <Link href="/site-map/"        className="hover:text-[#9aa39a] transition-colors no-underline">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}
