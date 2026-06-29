import { PageTemplate } from '@/components/templates/PageTemplate'
import { PAGES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'
import { getWebPageSchema } from '@/lib/schema'

const PATH = '/privacy/'
// noindex until the [CONFIRM: …] markers (last-updated date) are filled in.
export const metadata = {
  ...toMetadata(PAGES.privacy.meta, PATH),
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <PageTemplate
      page={PAGES.privacy}
      eyebrow="Legal"
      schema={getWebPageSchema({ type: 'WebPage', name: PAGES.privacy.meta.title, description: PAGES.privacy.meta.description, path: PATH })}
    />
  )
}
