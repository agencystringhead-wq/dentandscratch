import { PageTemplate } from '@/components/templates/PageTemplate'
import { PAGES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'
import { getWebPageSchema } from '@/lib/schema'

const PATH = '/our-work/'
export const metadata = toMetadata(PAGES.ourWork.meta, PATH)

export default function Page() {
  return (
    <PageTemplate
      page={PAGES.ourWork}
      eyebrow="Before & after"
      schema={getWebPageSchema({ type: 'CollectionPage', name: PAGES.ourWork.meta.title, description: PAGES.ourWork.meta.description, path: PATH })}
    />
  )
}
