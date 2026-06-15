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

export const NAV_LINKS = [
  { label: 'Services',  href: '/#services' },
  { label: 'PDR',       href: '/#pdr' },
  { label: 'Our Work',  href: '/#work' },
  { label: 'About',     href: '/#owner' },
  { label: 'Reviews',   href: '/#reviews' },
] as const

export const HERO = {
  heading:    'Dents and scratches gone,',
  accentLine: 'right in your driveway.',
  para:       "We're Dent and Scratch Direct. Diarmuid drives to your home or work, sorts most dents, scratches and bumper scuffs in a couple of hours, and charges a fraction of a panel shop. No workshop visit, no fuss.",
  checks:     ['We come to you', 'Same day quotes', 'Fully insured'],
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
