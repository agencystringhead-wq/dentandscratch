// JSON-LD structured data. No review schema while placeholder reviews are in use.
import { BUSINESS } from './content'

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
