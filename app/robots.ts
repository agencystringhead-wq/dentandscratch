import type { MetadataRoute } from 'next'
import { BUSINESS } from '@/lib/content'

// Required for `output: 'export'` — render this metadata route at build time.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BUSINESS.url}/sitemap.xml`,
  }
}
