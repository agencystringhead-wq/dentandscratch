import type { Metadata } from 'next'
import Link from 'next/link'
import { NAV_LINKS, SERVICES_NAV, SERVICE_AREAS_NAV } from '@/lib/content'

// HTML sitemap for users — not to be confused with app/sitemap.ts (the XML sitemap at /sitemap.xml)
// Note: /sitemap/ conflicts with Next.js's internal sitemap metadata route, so this lives at /site-map/
// TODO: Remove noindex if you want this indexed (low-value utility page — leaving off is fine)
export const metadata: Metadata = {
  title: 'Sitemap | Dent & Scratch Direct',
  robots: { index: false, follow: true },
}

function SitemapSection({ title, links }: { title: string; links: ReadonlyArray<{ label: string; href: string }> }) {
  return (
    <section className="mb-10">
      <h2 className="font-display font-bold text-[20px] text-neutral-ink mb-4">{title}</h2>
      <ul className="flex flex-col gap-2">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link href={href} className="text-green-primary hover:text-green-dark no-underline text-[15px]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function SitemapPage() {
  return (
    <main className="min-h-[60vh] max-w-3xl mx-auto px-5 py-24">
      <h1 className="font-display font-extrabold text-[40px] tracking-tight text-neutral-ink mb-12">
        Sitemap
      </h1>
      <SitemapSection
        title="Main"
        links={[{ label: 'Home', href: '/' }, ...NAV_LINKS]}
      />
      <SitemapSection title="Services" links={SERVICES_NAV} />
      <SitemapSection title="Service Areas" links={SERVICE_AREAS_NAV} />
      <SitemapSection
        title="Legal"
        links={[
          { label: 'Privacy Policy',     href: '/privacy-policy/' },
          { label: 'Terms & Conditions', href: '/terms-conditions/' },
        ]}
      />
    </main>
  )
}
