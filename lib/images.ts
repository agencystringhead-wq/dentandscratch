// PLACEHOLDER — swap for real photos before go-live.
// All paths below resolve to public/images/.
// Replace the files and remove this comment block when real assets are ready.

export const IMAGES = {
  // PLACEHOLDER — swap for real photo before go-live
  hero: '/images/diarmuid.jpg',

  beforeAfter: {
    // PLACEHOLDER — swap for real before/after pairs before go-live
    pdr:    { before: '/images/ba-pdr-before.jpg',    after: '/images/ba-pdr-after.jpg' },
    bumper: { before: '/images/ba-bumper-before.jpg', after: '/images/ba-bumper-after.jpg' },
    paint:  { before: '/images/ba-paint-before.jpg',  after: '/images/ba-paint-after.jpg' },
    hail:   { before: '/images/ba-hail-before.jpg',   after: '/images/ba-hail-after.jpg' },
  },

  services: {
    // PLACEHOLDER — swap for real service photos before go-live
    pdr:    '/images/svc-pdr.jpg',
    bumper: '/images/svc-bumper.jpg',
    paint:  '/images/svc-paint.jpg',
    hail:   '/images/svc-hail.jpg',
  },
} as const

export type ServiceImageKey = keyof typeof IMAGES.services
