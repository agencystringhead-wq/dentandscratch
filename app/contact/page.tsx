import { Phone, Mail, Clock } from 'lucide-react'
import { PageTemplate } from '@/components/templates/PageTemplate'
import { PAGES, BUSINESS } from '@/lib/content'
import { toMetadata } from '@/lib/seo'
import { getWebPageSchema } from '@/lib/schema'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { ContentBlocks } from '@/components/ui/ContentBlocks'

const PATH = '/contact/'
export const metadata = toMetadata(PAGES.contact.meta, PATH)

// blocks[0..2] = Call or text / Email / Hours (rendered as cards); rest = Where we work / Send a photo.
const methodBlocks = PAGES.contact.blocks.slice(0, 3)
const restBlocks = PAGES.contact.blocks.slice(3)
const ICONS = [Phone, Mail, Clock]
const HREFS = [BUSINESS.phoneHref, `mailto:${BUSINESS.email}`, undefined]

export default function Page() {
  return (
    <PageTemplate
      page={PAGES.contact}
      eyebrow="Get in touch"
      schema={getWebPageSchema({ type: 'ContactPage', name: PAGES.contact.meta.title, description: PAGES.contact.meta.description, path: PATH })}
    >
      <section className="bg-white border-t border-neutral-border" style={{ padding: '64px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-3">
            {methodBlocks.map((b, i) => {
              const Icon = ICONS[i]
              const href = HREFS[i]
              const inner = (
                <>
                  <Icon size={22} className="text-green-primary" aria-hidden="true" />
                  <h2 className="font-display font-bold text-[18px] text-neutral-ink mt-4">{b.h2}</h2>
                  {b.body?.map((p, j) => (
                    <p key={j} className="font-body font-medium text-[15px] text-neutral-muted leading-relaxed mt-2">{p}</p>
                  ))}
                </>
              )
              return (
                <AnimateIn key={b.h2}>
                  {href ? (
                    <a href={href} className="block h-full bg-neutral-page border border-neutral-border rounded-[5px] p-7 no-underline hover:border-green-primary transition-colors">
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full bg-neutral-page border border-neutral-border rounded-[5px] p-7">{inner}</div>
                  )}
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-neutral-page border-t border-neutral-border" style={{ padding: '64px 0' }}>
        <div className="max-w-[760px] mx-auto px-5 lg:px-10">
          <ContentBlocks blocks={restBlocks} />
        </div>
      </section>
    </PageTemplate>
  )
}
