import { PageTemplate } from '@/components/templates/PageTemplate'
import { PAGES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'
import { getWebPageSchema } from '@/lib/schema'

const PATH = '/about-us/'
export const metadata = toMetadata(PAGES.about.meta, PATH)

export default function Page() {
  return (
    <PageTemplate
      page={PAGES.about}
      eyebrow="About us"
      schema={getWebPageSchema({ type: 'AboutPage', name: PAGES.about.meta.title, description: PAGES.about.meta.description, path: PATH })}
    />
  )
}
