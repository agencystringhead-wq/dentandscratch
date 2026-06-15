export const BUSINESS = {
  name:         'Dent & Scratch Direct',
  phone:        '0447 847 655',
  phoneHref:    'tel:0447847655',
  email:        'admin@dentandscratch.com.au',
  suburb:       'Berwick',
  state:        'VIC',
  country:      'AU',
  url:          'https://dentandscratchdirect.com.au',
  abn:          '', // TODO: add ABN before go-live
} as const

export const SERVICES_NAV = [
  { label: 'Paintless Dent Repair (PDR)', href: '/paintless-dent-repair-pdr/', icon: 'CircleDot',  desc: 'Dents and dings massaged out, factory paint kept.',          featured: true },
  { label: 'Paint Repairs',               href: '/paint-repairs/',             icon: 'Paintbrush', desc: 'Scratches and chips colour matched and blended in.' },
  { label: 'Bumper Repair',               href: '/bumper-repairs/',            icon: 'Car',        desc: 'Scuffs, scrapes and cracks made good in a couple of hours.' },
  { label: 'Hail Damage Repair',          href: '/hail-damage-repair/',        icon: 'CloudHail',  desc: 'Dozens of little dents lifted with PDR, no respray.' },
  { label: 'Scratch & Chip Repair',       href: '/scratch-and-chip-repair/',   icon: 'Slash',      desc: 'Tidy up the marks that catch your eye every day.' },
  { label: 'Minor Rust Repair',           href: '/minor-rust-repairs/',        icon: 'Droplets',   desc: 'Small rust spots cut out and sealed before they spread.' },
  { label: 'Plastic Repair',              href: '/plastic-repairs/',           icon: 'Layers',     desc: 'Cracked trims, mirrors and bumpers brought back.' },
  { label: 'Alloy Wheel Repair',          href: '/alloy-wheel-repair/',        icon: 'Disc3',      desc: 'Kerbed and scuffed alloys refinished to match.' },
] as const

export const SERVICE_AREAS_NAV = [
  { label: 'Berwick & South-East Corridor',   href: '/service-areas/south-east-melbourne/' },
  { label: 'Greater Dandenong & Monash',       href: '/service-areas/dandenong-monash/' },
  { label: 'Dandenong Ranges',                 href: '/service-areas/dandenong-ranges/' },
  { label: 'Outer East Melbourne',             href: '/service-areas/outer-east-melbourne/' },
  { label: 'Inner East Melbourne',             href: '/service-areas/inner-east-melbourne/' },
  { label: 'Bayside & Inner South-East',       href: '/service-areas/bayside-melbourne/' },
  { label: 'Frankston & Mornington Peninsula', href: '/service-areas/mornington-peninsula/' },
  { label: 'West Gippsland',                   href: '/service-areas/west-gippsland/' },
] as const

export type NavItem = {
  label: string
  href: string
  dropdown?: ReadonlyArray<{ readonly label: string; readonly href: string }>
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Before & After', href: '/our-work/' },
  { label: 'PDR',            href: '/paintless-dent-repair-pdr/' },
  { label: 'Services',       href: '/services/',      dropdown: SERVICES_NAV },
  { label: 'About',          href: '/about-us/' },
  { label: 'Service Areas',  href: '/service-areas/', dropdown: SERVICE_AREAS_NAV },
  { label: 'Reviews',        href: '/reviews/' },
  { label: 'Contact',        href: '/contact/' },
]

// Desktop "Services" mega-menu featured block (mobile uses SERVICES_NAV accordion)
export const SERVICES_MEGA = {
  prompt:       'Not sure which one you need?',
  promptSub:    'Send Diarmuid a photo and get a price back, usually within the hour.',
  viewAllLabel: 'View all services →',
  viewAllHref:  '/services/',
  feature: {
    // PLACEHOLDER — Unsplash stock, swap for a real Diarmuid repair photo before go-live
    image:   'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=900&q=80&auto=format&fit=crop',
    alt:     'Bodywork being finished by hand',
    caption: 'Most repairs done in about 2 hours',
  },
} as const

// Desktop "Service Areas" mega-menu, grouped by council (mobile uses SERVICE_AREAS_NAV accordion)
// NOTE: per-suburb pages don't exist yet, so each suburb links to its zone hub page.
// Confirm council groupings and suburb routing with Diarmuid before go-live.
export const SERVICE_AREAS_MEGA = {
  zones: [
    { zone: 'Casey',             href: '/service-areas/south-east-melbourne/', suburbs: ['Berwick', 'Narre Warren', 'Cranbourne', 'Hampton Park', 'Endeavour Hills'] },
    { zone: 'Cardinia',          href: '/service-areas/south-east-melbourne/', suburbs: ['Pakenham', 'Officer', 'Beaconsfield', 'Clyde', 'Emerald'] },
    { zone: 'Greater Dandenong', href: '/service-areas/dandenong-monash/',     suburbs: ['Dandenong', 'Springvale', 'Keysborough', 'Noble Park'] },
    { zone: 'Frankston',         href: '/service-areas/mornington-peninsula/', suburbs: ['Frankston', 'Carrum Downs', 'Seaford', 'Langwarrin'] },
    { zone: 'Monash & Knox',     href: '/service-areas/dandenong-monash/',     suburbs: ['Glen Waverley', 'Mulgrave', 'Rowville', 'Wantirna'] },
  ],
  viewAllLabel: 'View all service areas →',
  viewAllHref:  '/service-areas/',
  feature: {
    // PLACEHOLDER — Unsplash stock, swap for a real on-location photo before go-live
    image:   'https://images.unsplash.com/photo-1694678505383-676d78ea3b96?w=900&q=80&auto=format&fit=crop',
    alt:     'A car being cleaned up on location',
    eyebrow: 'We come to you',
    lead:    'Based in Berwick, mobile right across the south east.',
    caption: 'No workshop visit, no drop-off',
  },
} as const

export const FOOTER_NAV = {
  pages: [
    { label: 'FAQs', href: '/faqs/' },
    { label: 'Blog', href: '/blog/' },
  ],
  legal: [
    { label: 'Privacy Policy',     href: '/privacy-policy/' },
    { label: 'Terms & Conditions', href: '/terms-conditions/' },
    { label: 'Sitemap',            href: '/site-map/' },
  ],
} as const

export const TOP_BAR = {
  servicing:      'Servicing South East Melbourne for over 30 years',
  servicingShort: 'Servicing South East Melbourne',
  rating: {
    score:     '4.9',
    label:     'Google reviews',
    ariaLabel: '4.9 out of 5 on Google',
    href:      '/reviews/',
  },
} as const

export const HERO = {
  kicker:      'Mobile dent & scratch repair with 30 years of experience',
  heading:     "Melbourne's go-to mobile",
  accentLine:  'dent & scratch repair expert',
  para:        "We're Dent and Scratch Direct. Diarmuid drives to your home or work, sorts most dents, scratches and bumper scuffs in a couple of hours, and charges a fraction of a panel shop. No workshop visit, no fuss.",
  checks:      ['We come to you', 'Same day quotes', 'Fully insured'],
  socialProof: '4.9 · hundreds of happy drivers',
  // Real avatars (optimised WebP). Missing files fall back to grey circles.
  avatars:     ['/images/avatars/avatar-1.webp', '/images/avatars/avatar-2.webp', '/images/avatars/avatar-3.webp', '/images/avatars/avatar-4.webp'],
  bandImage:   '/images/hero-band.webp',
  bandAlt:     "Mobile dent repair at a customer's driveway",
} as const

// Hero quote form (green-gradient panel), 2 steps. Single-sourced copy; AU fields.
export const HERO_FORM = {
  heading: 'Snap it, send it, get a quote',
  sub:     'Fast, on-the-spot dent and scratch repairs at your home or workplace, finished in a couple of hours.',
  step1: [
    { key: 'name',    placeholder: 'Name',                                   type: 'text',  inputMode: 'text'  },
    { key: 'phone',   placeholder: 'Phone',                                  type: 'tel',   inputMode: 'tel'   },
    { key: 'email',   placeholder: 'Email',                                  type: 'email', inputMode: 'email' },
    { key: 'vehicle', placeholder: 'Make & model (e.g. Toyota Corolla 2019)', type: 'text',  inputMode: 'text'  },
  ],
  step2: [
    { key: 'address',  placeholder: 'Suburb / address', type: 'text', inputMode: 'text'    },
    { key: 'postcode', placeholder: 'Postcode',         type: 'text', inputMode: 'numeric' },
  ],
  messagePlaceholder: 'Message (describe the damage, optional)',
  uploadText:         'Drop photos of the damage here, or click to browse',
  uploadNote:         'Send one close-up of the damage and one of the whole panel, for each repair.',
  continueLabel:      'Continue',
  submitLabel:        'YES, SEND MY PRICE',
  replyNote:          'We usually reply within a few hours.',
} as const

// "By the numbers" band shown directly under the hero. Icon names map to lucide-react.
export const AFTER_BANNER = {
  badges: ['Car', 'Wrench', 'Droplet', 'ShieldCheck', 'Hammer', 'MapPin', 'Sun'],
  headline: [
    { type: 'text', value: 'More than a quick fix' },
    { type: 'pill', src: '/images/hero-band.webp',          alt: 'Mobile repair underway' },
    { type: 'text', value: '— proper mobile dent and scratch repair' },
    { type: 'pill', src: '/images/avatars/avatar-2.webp',   alt: 'A happy customer' },
    { type: 'text', value: 'done right where your car is parked.' },
  ],
  stats: [
    { value: 30,   suffix: '+', label: 'Years of Experience' },
    { value: 5600, suffix: '+', label: 'Cars Repaired' },
    { value: 4800, suffix: '+', label: 'Happy Clients' },
    { value: 140,  suffix: '+', label: 'Top Reviews' },
  ],
} as const

export const TRUST_STATS = [
  { value: '30yr', label: 'On the tools, around Melbourne' },
  { value: '~2h',  label: 'Typical repair, at your place' },
  { value: '4.9★', label: 'From hundreds of drivers' },
  { value: '$0',   label: 'Quotes, always free' },
] as const

export const PDR_SECTION = {
  eyebrow: 'Our specialty · high value',
  heading: 'Paintless Dent Repair',
  body:    'The clever one. We massage dents, dings and hail damage out from behind the panel, so your factory paint stays untouched. No filler, no respray, no colour match to worry about. Most jobs done in a couple of hours, right in your driveway.',
  points: [
    { icon: '🎯', text: 'Factory paint kept' },
    { icon: '💰', text: 'Fraction of panel shop' },
    { icon: '🛡️', text: 'Insurance friendly' },
  ],
  steps: [
    { num: '1', title: 'Send a photo',   desc: 'Text the dent, get a price' },
    { num: '2', title: 'We come to you', desc: 'Home or work, you choose' },
    { num: '3', title: 'Done in hours',  desc: 'Drive away like new' },
  ],
  timeStat: {
    value: '~2h',
    label: 'Typical PDR turnaround, done at your place while you carry on with your day.',
  },
} as const

export type ServiceKey = 'pdr' | 'bumper' | 'paint' | 'hail'

export const SERVICES = [
  {
    key:   'pdr'    as ServiceKey,
    title: 'Paintless Dent Repair',
    desc:  'Door dings and dents massaged out from behind the panel. Factory finish kept.',
    tag:   'Our specialty',
    time:  'About 2 hours',
  },
  {
    key:   'bumper' as ServiceKey,
    title: 'Bumper Repair',
    desc:  'Scuffs, scrapes and cracks on plastic bumpers, made good in a couple of hours.',
    tag:   'Most popular',
    time:  'Usually 2 to 3 hours',
  },
  {
    key:   'paint'  as ServiceKey,
    title: 'Paint Repair',
    desc:  'Scratches and chips colour matched to your car and blended so you cannot tell.',
    tag:   'Colour match',
    time:  'Same day',
  },
  {
    key:   'hail'   as ServiceKey,
    title: 'Hail Damage',
    desc:  'Dozens of little dents lifted with PDR. No filler, no respray, insurance friendly.',
    tag:   'Storm season',
    time:  'Half to full day',
  },
] as const

export const BEFORE_AFTER_CATS = [
  { key: 'pdr',    label: 'PDR',    title: 'Paintless Dent Repair', blurb: 'Door ding massaged out, factory paint untouched.' },
  { key: 'bumper', label: 'Bumper', title: 'Bumper Repair',         blurb: 'Scuffed corner reshaped, prepped and refinished.' },
  { key: 'paint',  label: 'Paint',  title: 'Paint Repair',          blurb: 'Deep scratch colour matched and blended.' },
  { key: 'hail',   label: 'Hail',   title: 'Hail Damage',           blurb: 'Dozens of dents lifted across the panel.' },
] as const

export const ABOUT = {
  eyebrow: "Who you'll deal with",
  heading: "G'day, I'm Diarmuid",
  paras: [
    "I started Dent and Scratch to take the hassle out of fixing your car. The big panel shops keep your car for days and charge a fortune. I come to you, sort most jobs in a few hours, and charge a fraction of the price.",
    "No call centres, no runaround. You text me a photo, I text you a price. Simple as that.",
  ],
  stats: [
    { value: '30+',  label: 'years experience' },
    { value: '100%', label: 'mobile service' },
    { value: '1hr',  label: 'typical reply' },
  ],
  signature: 'Diarmuid',
  nameplate: {
    initials: 'DM',
    name:     'Diarmuid Murphy',
    title:    'Owner · 30 years on the tools',
  },
} as const

export const REVIEWS = {
  eyebrow: 'What drivers say',
  heading: '4.9 stars, and it shows',
  items: [
    {
      text:     "Diarmuid came to my work car park and had the dent out of my door in about an hour. You honestly cannot tell it was ever there. Brilliant.",
      name:     'Sarah K.',
      suburb:   'Berwick',
      initials: 'SK',
      gradient: 'linear-gradient(135deg,#1FD75C,#009028)',
    },
    {
      text:     'Scuffed my bumper on a pole. Sent a photo at lunch, had a price back straight away, fixed in my driveway two days later. Top bloke.',
      name:     'Mark T.',
      suburb:   'Narre Warren',
      initials: 'MT',
      gradient: 'linear-gradient(135deg,#0a8f33,#00601B)',
    },
    {
      text:     'After the hail storm I thought my bonnet was done for. Diarmuid sorted the lot for a fraction of what the panel shop quoted. Highly recommend.',
      name:     'Priya N.',
      suburb:   'Cranbourne',
      initials: 'PN',
      gradient: 'linear-gradient(135deg,#15b347,#0a6b22)',
    },
  ],
  badges: [
    { icon: '✨', text: '30 years on the tools' },
    { icon: '🚗', text: 'We come to you' },
    { icon: '🛡️', text: 'Fully insured' },
    { icon: '⭐', text: '4.9 Google rating' },
  ],
} as const

export const SERVICE_AREA = {
  eyebrow: 'Where we go',
  heading: 'Servicing South East Melbourne',
  sub:     "Based in Berwick, covering the south east. Not sure if you're in the zone? Just ask.",
  suburbs: [
    'Berwick', 'Pakenham', 'Officer', 'Narre Warren', 'Cranbourne',
    'Clyde', 'Hampton Park', 'Endeavour Hills', 'Dandenong', 'Keysborough',
    'Frankston', 'Carrum Downs', 'Rowville', 'Mulgrave', 'Glen Waverley', 'Springvale',
  ],
} as const

export const CTA_SECTION = {
  heading: 'Get that dent sorted this week',
  body:    'Send Diarmuid a photo now and have a free quote back within the hour. No obligation.',
} as const

export const QUOTE_FORM = {
  title:        'Get your free quote',
  sub:          'Snap a photo. We reply within the hour.',
  privacy:      'No spam. Diarmuid replies personally, usually within the hour.',
  steps:        ['Details', 'Damage', 'Send'] as const,
  btnLabels:    ['Next, the damage', 'Review', 'Send to Diarmuid'] as const,
  serviceChips: ['PDR', 'Bumper', 'Paint', 'Hail'] as const,
} as const

export const FEATURES = [
  { icon: 'MapPin',        title: 'We come to you',    body: 'Home, work, car park — anywhere in South East Melbourne. No workshop, no drop-off.' },
  { icon: 'Shield',        title: 'Factory paint kept', body: 'PDR works the metal back from behind the panel. No filler, no respray, original finish.' },
  { icon: 'ShieldCheck',   title: 'Fully insured',      body: 'All work is fully insured and backed by Diarmuid personally.' },
  { icon: 'Clock',         title: 'Fast turnaround',    body: 'Most repairs done in a couple of hours. Same day in most cases.' },
] as const

export const WHY_US_POINTS = [
  { icon: 'Wrench',          label: '30 years on the tools' },
  { icon: 'Car',             label: '100% mobile service' },
  { icon: 'Paintbrush',      label: 'Factory paint kept' },
  { icon: 'MessageCircle',   label: 'Free quote, reply in 1 hour' },
  { icon: 'ShieldCheck',     label: 'Fully insured' },
  { icon: 'Star',            label: '4.9 Google rating' },
] as const

export const WHY_SECTION = {
  eyebrow: 'Why drivers choose us',
  heading: 'Factory finish, at your door.',
} as const

export const PROCESS_SECTION = {
  eyebrow: 'How it works',
  heading: 'Three steps, done in a couple of hours.',
} as const

export const GALLERY_SECTION = {
  eyebrow: 'Real repairs',
  heading: 'Before and after',
  sub:     "Every repair done on the customer's driveway.",
} as const

export const PDR_PAGE = {
  title:       'Paintless Dent Repair | Dent & Scratch Direct',
  description: 'Paintless Dent Repair (PDR) in South East Melbourne. No filler, no respray — factory paint kept. Diarmuid comes to you. Free quotes, same day.',
  heading:     'Paintless Dent Repair',
  intro:       'PDR is the gold standard for dents. We work the metal back into shape from behind the panel — no filler, no colour match, factory finish preserved.',
  faqs: [
    {
      q: 'What kinds of dents can PDR fix?',
      a: 'Round dents, dings from car doors, hail damage, and minor panel creases. If the paint is unbroken, PDR is usually the right call.',
    },
    {
      q: 'How long does a PDR job take?',
      a: 'Most door dings take under two hours. Hail damage across a full panel or bonnet can run most of the day.',
    },
    {
      q: 'Do you need the car in a workshop?',
      a: "No. Diarmuid comes to your home or workplace. You don't have to arrange alternative transport or take time off.",
    },
    {
      q: 'Is PDR covered by insurance?',
      a: 'Yes, most insurers accept PDR for eligible dents. Diarmuid can work with your insurer directly.',
    },
  ],
} as const
