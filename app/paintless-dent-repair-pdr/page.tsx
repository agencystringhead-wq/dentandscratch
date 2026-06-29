import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'

export const metadata = toMetadata(SERVICE_PAGES.pdr.meta, '/paintless-dent-repair-pdr/')

export default function Page() {
  return <ServicePageTemplate serviceKey="pdr" />
}
