import { PageTemplate } from '@/components/templates/PageTemplate'
import { PAGES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'
import { getWebPageSchema } from '@/lib/schema'
import { ContentBlocks } from '@/components/ui/ContentBlocks'
import { HeroQuoteForm } from '@/components/ui/HeroQuoteForm'

const PATH = '/free-quote/'
export const metadata = toMetadata(PAGES.freeQuote.meta, PATH)

export default function Page() {
  return (
    <PageTemplate
      page={PAGES.freeQuote}
      eyebrow="Free quote"
      schema={getWebPageSchema({ type: 'WebPage', name: PAGES.freeQuote.meta.title, description: PAGES.freeQuote.meta.description, path: PATH })}
    >
      {/* The quote form (client-side validation; endpoint still a TODO — see HeroQuoteForm). */}
      <section className="bg-white border-t border-neutral-border" style={{ padding: '64px 0' }}>
        <div className="max-w-[560px] mx-auto px-5 lg:px-10">
          <HeroQuoteForm />
        </div>
      </section>

      <section className="bg-neutral-page border-t border-neutral-border" style={{ padding: '64px 0' }}>
        <div className="max-w-[760px] mx-auto px-5 lg:px-10">
          <ContentBlocks blocks={PAGES.freeQuote.blocks} />
        </div>
      </section>
    </PageTemplate>
  )
}
