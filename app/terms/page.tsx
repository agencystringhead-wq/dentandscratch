import { PageTemplate } from '@/components/templates/PageTemplate'
import { PAGES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'
import { getWebPageSchema } from '@/lib/schema'

const PATH = '/terms/'
// noindex until the [CONFIRM: …] markers (dates, guarantee exclusions, payment methods) are filled in.
export const metadata = {
  ...toMetadata(PAGES.terms.meta, PATH),
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <PageTemplate
      page={PAGES.terms}
      eyebrow="Legal"
      schema={getWebPageSchema({ type: 'WebPage', name: PAGES.terms.meta.title, description: PAGES.terms.meta.description, path: PATH })}
    />
  )
}
