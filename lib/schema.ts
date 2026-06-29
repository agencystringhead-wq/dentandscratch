// JSON-LD structured data. No review schema while placeholder reviews are in use.
import { BUSINESS, FAQ_SECTION } from './content'
import type { FAQ } from './content'

// FAQPage schema. Defaults to the homepage FAQ block; pass a page's own FAQs to reuse.
export function getFaqSchema(items: readonly FAQ[] = FAQ_SECTION.items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

// Service schema for a single service page, linked to the AutoRepair business.
export function getServiceSchema(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: `${BUSINESS.url}${opts.path}`,
    areaServed: { '@type': 'AdministrativeArea', name: 'South East Melbourne' },
    provider: {
      '@type': ['LocalBusiness', 'AutoRepair'],
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      url: BUSINESS.url,
    },
  }
}

// Light per-page schema (type from the copy doc's recommendation: AboutPage, ContactPage, etc.).
// NOTE: richer markup the doc suggests (Person on About, aggregateRating/Review on Reviews,
// ImageObject on Our Work, OfferCatalog on Services) is deferred to a dedicated schema pass.
export function getWebPageSchema(opts: { type: string; name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type,
    name: opts.name,
    description: opts.description,
    url: `${BUSINESS.url}${opts.path}`,
    isPartOf: { '@type': 'WebSite', name: BUSINESS.name, url: BUSINESS.url },
    publisher: {
      '@type': ['LocalBusiness', 'AutoRepair'],
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.url,
    },
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoRepair'],
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: BUSINESS.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.suburb,
      addressRegion: BUSINESS.state,
      addressCountry: BUSINESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -38.0339,
      longitude: 145.3426,
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Berwick+VIC+Australia',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -38.0339,
        longitude: 145.3426,
      },
      geoRadius: '50000',
    },
    makesOffer: [
      { '@type': 'Offer', name: 'Paintless Dent Repair',  itemOffered: { '@type': 'Service', name: 'Paintless Dent Repair' } },
      { '@type': 'Offer', name: 'Bumper Repair',          itemOffered: { '@type': 'Service', name: 'Bumper Repair' } },
      { '@type': 'Offer', name: 'Paint Repair',           itemOffered: { '@type': 'Service', name: 'Paint Repair' } },
      { '@type': 'Offer', name: 'Hail Damage Repair',     itemOffered: { '@type': 'Service', name: 'Hail Damage Repair' } },
    ],
  }
}
