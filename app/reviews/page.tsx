import { PageTemplate } from '@/components/templates/PageTemplate'
import { PAGES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'
import { getWebPageSchema } from '@/lib/schema'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { ContentBlocks } from '@/components/ui/ContentBlocks'

const PATH = '/reviews/'
export const metadata = toMetadata(PAGES.reviews.meta, PATH)

// blocks[0] = the verbatim customer quotes; the rest are narrative sections.
const [quotesBlock, ...restBlocks] = PAGES.reviews.blocks

export default function Page() {
  return (
    <PageTemplate
      page={PAGES.reviews}
      eyebrow="Reviews"
      schema={getWebPageSchema({ type: 'CollectionPage', name: PAGES.reviews.meta.title, description: PAGES.reviews.meta.description, path: PATH })}
    >
      {/* Genuine customer reviews, verbatim. Dollar figures stay inside the quotes — never restated as our pricing. */}
      <section className="bg-white border-t border-neutral-border" style={{ padding: '72px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <AnimateIn>
            <h2 className="font-display font-bold text-neutral-ink mb-8" style={{ fontSize: 'clamp(24px,3vw,34px)' }}>
              {quotesBlock.h2}
            </h2>
          </AnimateIn>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {quotesBlock.body?.map((q, i) => (
              <AnimateIn key={i}>
                <blockquote className="break-inside-avoid mb-5 bg-neutral-page border border-neutral-border rounded-[5px] p-6">
                  <span aria-hidden="true" className="text-[#FAB700] text-[13px] tracking-[2px]">★★★★★</span>
                  <p className="font-body font-medium text-[15px] text-neutral-ink leading-relaxed mt-3">{q}</p>
                </blockquote>
              </AnimateIn>
            ))}
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
