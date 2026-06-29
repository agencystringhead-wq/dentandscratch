import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'

export const metadata = toMetadata(SERVICE_PAGES.paint.meta, '/paint-repairs/')

export default function Page() {
  return <ServicePageTemplate serviceKey="paint" />
}
