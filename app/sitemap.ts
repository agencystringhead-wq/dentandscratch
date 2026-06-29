import type { MetadataRoute } from 'next'
import { BUSINESS } from '@/lib/content'

// Required for `output: 'export'` — render this metadata route at build time.
export const dynamic = 'force-static'

// XML sitemap served at /sitemap.xml. Only pages with finished, indexable content are listed.
// (The HTML sitemap for users lives at /site-map/ — different route, no collision.)
export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url // https://www.dentandscratch.com.au

  return [
    { url: `${base}/`,                           changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/paintless-dent-repair-pdr/`, changeFrequency: 'monthly', priority: 0.8 },
  ]

  // TODO: add each page below as its content is finished and its noindex removed.
  // Priority tiers: 0.9 conversion · 0.85 service+zone · 0.8 pillar · 0.7 support
  //   /free-quote/ 0.9 · /our-work/ 0.8 · /reviews/ 0.8 · /about-us/ 0.7 · /faqs/ 0.7
  //   /contact/ 0.7 · /blog/ 0.7 (weekly) · /services/ 0.85
  //   /paint-repairs/ /bumper-repairs/ /hail-damage-repair/ /scratch-and-chip-repair/
  //   /minor-rust-repairs/ /plastic-repairs/ — all 0.85
  //   /service-areas/ + the 8 zone pages (south-east-melbourne, dandenong-monash,
  //   dandenong-ranges, outer-east-melbourne, inner-east-melbourne, bayside-melbourne,
  //   mornington-peninsula, west-gippsland) — all 0.85
}
