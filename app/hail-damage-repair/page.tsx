import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/content'
import { toMetadata } from '@/lib/seo'

export const metadata = toMetadata(SERVICE_PAGES.hail.meta, '/hail-damage-repair/')

export default function Page() {
  return <ServicePageTemplate serviceKey="hail" />
}
