import { PageTemplate } from '@/components/templates/PageTemplate'
import { PAGES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'
import { getWebPageSchema } from '@/lib/schema'

const PATH = '/service-areas/'
export const metadata = toMetadata(PAGES.serviceAreas.meta, PATH)

export default function Page() {
  return (
    <PageTemplate
      page={PAGES.serviceAreas}
      eyebrow="Where we go"
      schema={getWebPageSchema({ type: 'CollectionPage', name: PAGES.serviceAreas.meta.title, description: PAGES.serviceAreas.meta.description, path: PATH })}
    />
  )
}
