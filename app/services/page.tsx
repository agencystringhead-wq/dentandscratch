import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageTemplate } from '@/components/templates/PageTemplate'
import { PAGES, SERVICES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'
import { getWebPageSchema } from '@/lib/schema'
import { AnimateIn } from '@/components/ui/AnimateIn'

const PATH = '/services/'
export const metadata = toMetadata(PAGES.servicesHub.meta, PATH)

const blurbFor = (title: string) => PAGES.servicesHub.blocks.find((b) => b.h2 === title)?.body?.[0] ?? ''
const notSure = PAGES.servicesHub.blocks.find((b) => b.h2.startsWith('Not sure'))

export default function Page() {
  return (
    <PageTemplate
      page={PAGES.servicesHub}
      eyebrow="Our services"
      schema={getWebPageSchema({ type: 'CollectionPage', name: PAGES.servicesHub.meta.title, description: PAGES.servicesHub.meta.description, path: PATH })}
    >
      <section className="bg-white border-t border-neutral-border" style={{ padding: '72px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <AnimateIn key={s.key}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-neutral-page border border-neutral-border rounded-[5px] p-7 no-underline hover:border-green-primary transition-colors"
                >
                  <h2 className="font-display font-bold text-[20px] text-neutral-ink">{s.title}</h2>
                  <p className="font-body font-medium text-[15px] text-neutral-muted leading-relaxed mt-3 flex-1">{blurbFor(s.title)}</p>
                  <span className="inline-flex items-center gap-2 font-body font-bold text-[14px] text-green-primary mt-5">
                    Learn more
                    <ArrowRight size={16} className="transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>

          {notSure && (
            <AnimateIn>
              <div className="mt-12 bg-neutral-page border border-neutral-border rounded-[5px] p-8 text-center">
                <h2 className="font-display font-bold text-[24px] text-neutral-ink">{notSure.h2}</h2>
                {notSure.body?.map((p, i) => (
                  <p key={i} className="font-body font-medium text-[16px] text-neutral-muted leading-relaxed mt-3 max-w-[44em] mx-auto">{p}</p>
                ))}
              </div>
            </AnimateIn>
          )}
        </div>
      </section>
    </PageTemplate>
  )
}
