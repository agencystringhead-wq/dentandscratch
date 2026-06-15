import type { MetadataRoute } from 'next'
import { BUSINESS } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/paintless-dent-repair`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
