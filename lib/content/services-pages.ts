import type { ServicePage } from './types'

// The 7 service detail pages, from the approved copy doc. One ServicePageTemplate
// (built later) renders all of them from this data. Keyed by the SERVICES `key`.
export const SERVICE_PAGES: Record<string, ServicePage> = {
  pdr: {
    key: 'pdr',
    meta: {
      title: 'Paintless Dent Repair (PDR) | Mobile, South East Melbourne',
      description: 'Mobile paintless dent repair across South East Melbourne. Dents and dings worked out from behind the panel, factory paint kept. Free photo quote, we come to you.',
    },
    h1: 'Paintless dent repair, done at your place across South East Melbourne',
    intro: [
      "Paintless dent repair, or PDR, is the best way to fix a dent without touching your paint. Diarmuid works the dent out from behind the panel using specialised tools, and your factory finish stays exactly as it left the showroom. No filler. No respray. No colour match to worry about. And because we're fully mobile, the whole thing happens in your driveway or work car park, usually in a couple of hours.",
      "It's our specialty, and it's the repair we're known for across the south east.",
    ],
    blocks: [
      { h2: 'What is paintless dent repair?', body: ["When a panel gets dented but the paint isn't broken, the metal can usually be massaged back to its original shape from the inside. Diarmuid reaches behind the panel and slowly works the dent out, reading the light off the surface as he goes, until it sits flat again. The paint never gets disturbed, so there's nothing to blend and nothing to dry. That's why PDR is faster, cheaper and kinder to your car's value than old-school panel beating and respraying."] },
      { h2: 'When PDR is the right fix', body: ["PDR works on a lot more than people expect. It's the go-to for:"],
        list: ['Door dings from the car park next to you', 'Small to medium dents where the paint is still intact', 'Hail damage, where there can be dozens of little dents across a panel', 'Creases along a door or guard, depending on how sharp they are', 'Dents on bonnets, boots, roofs and quarter panels'],
        outro: ["If the paint is cracked or flaking, PDR on its own won't do it, but Diarmuid will tell you that honestly when he sees the photo and sort out the right approach."] },
      { h2: 'Why drivers choose paintless dent repair', body: ['Your factory paint stays put. Original paint is worth more than any respray, especially at resale.', "It's quick. Most PDR jobs are done in a couple of hours, not days.", 'It costs less. No paint, no booth time, no filler, so the price comes in well under a panel shop.', 'No insurance claim needed. Keep your no-claims bonus and just get it fixed.', "It's better for the car. Less work, less product, nothing baked over the original finish."] },
      { h2: 'Mobile PDR, done where you are', body: ["There's no workshop to drive to. You send a photo, Diarmuid sends back a price and a time, and he turns up at your home or work with everything he needs. Most South East Melbourne suburbs are covered, from Berwick and Pakenham through to Frankston, Dandenong and Glen Waverley. By the time your coffee's cold, the dent's usually gone."] },
      { h2: 'Backed for as long as you own the car', body: ["Every paintless dent repair Diarmuid does is covered by our lifetime workmanship guarantee. He's been doing this for 30 years and he does each job himself, so it's right the first time."] },
    ],
    faqs: [
      { q: 'Does paintless dent repair damage the paint?', a: "No. That's the whole point of it. The dent is worked out from behind the panel, so your original paint is never touched, sanded or sprayed." },
      { q: 'Will I be able to see where the dent was?', a: 'On most jobs, no. Done properly, PDR brings the panel back to its original shape and the repair is very hard to spot. Diarmuid will give you an honest read on your specific dent before he starts.' },
      { q: 'How long does PDR take?', a: 'Most jobs are done in a couple of hours, right where your car is parked. Hail damage with lots of dents can take a bit longer.' },
      { q: 'Can you fix hail damage with PDR?', a: 'Yes. Hail is one of the most common jobs we do with paintless repair. Dozens of small dents can be lifted without any respray. See our hail damage page for more.' },
      { q: 'Do you come to me?', a: "Always. We're 100% mobile across South East Melbourne. Send a photo to get started." },
    ],
    cta: 'Send Diarmuid a photo and get your free quote, usually back within the hour.',
    schema: 'Service schema (paintless dent repair) linked to the AutoRepair business, plus FAQPage.',
  },

  paint: {
    key: 'paint',
    meta: {
      title: 'Mobile Car Paint Repairs | South East Melbourne',
      description: "Mobile paint repairs across South East Melbourne. Scratches, chips and scuffs colour-matched and blended so you can't tell. Free photo quote, we come to you.",
    },
    h1: 'Mobile car paint repairs across South East Melbourne',
    intro: [
      'Scratches, chips and scuffs are the kind of thing you notice every single time you walk up to the car. Diarmuid fixes them properly, colour-matched to your exact paint and blended in so the repair disappears into the rest of the panel. And he does it at your place, not in a shop, usually in a couple of hours.',
    ],
    blocks: [
      { h2: 'Paint damage we sort', list: ['Scratches that have gone through the clear coat or into the colour', 'Stone chips on the bonnet, bumper or guards', 'Scuffs and transfer marks from another car or a wall', 'Key marks and trolley scrapes', 'Faded or damaged spots that need blending back in'],
        outro: ["If you're not sure how deep it is, send a photo. Diarmuid can usually tell from the picture whether it's a quick touch-in or a proper blend."] },
      { h2: 'Why colour matching matters', body: ["Car paint isn't one flat colour. Metallics and pearls shift in the light, and two cars off the same line can sit slightly differently after years in the Melbourne sun. Diarmuid matches to your car, not just the paint code, then blends the repair into the surrounding panel so there's no hard edge and no obvious patch. That's the difference between a repair you can see and one you can't."] },
      { h2: 'Trained to do it right', body: ["Diarmuid is a fully qualified spray painter as well as a panel beater, with 30 years behind him. He's spent years on new cars and restorations, so paint is second nature. Every job is done by him personally, backed by our lifetime workmanship guarantee."] },
      { h2: 'Done at your home or work', body: ["No workshop, no drop-off. Diarmuid comes to you anywhere across South East Melbourne, sets up where your car's parked, and gets the paint sorted on the spot. Most jobs are finished in a couple of hours."] },
    ],
    faqs: [
      { q: 'Can you match my exact colour?', a: "Yes. Diarmuid matches to your car, including metallics and pearls, then blends the repair into the panel so it's not a visible patch." },
      { q: 'Is a paint repair cheaper than a full respray?', a: "In most cases, yes, because only the damaged area is treated rather than the whole panel. You'll get a free quote before anything starts." },
      { q: 'How long does it take?', a: 'Most paint repairs are done in a couple of hours at your place. Deeper or larger areas may take a little longer.' },
      { q: 'Do you come to me?', a: "Yes, we're fully mobile across South East Melbourne. Send a photo to get a quote." },
    ],
    cta: 'Snap a photo of the damage and get your free quote, usually back within the hour.',
    schema: 'Service schema (paint repair) plus FAQPage.',
  },

  bumper: {
    key: 'bumper',
    meta: {
      title: 'Mobile Bumper Repair | South East Melbourne',
      description: 'Scuffed, cracked or scraped bumpers repaired at your home or work across South East Melbourne. Usually done in a couple of hours. Free photo quote.',
    },
    h1: 'Mobile bumper repair across South East Melbourne',
    intro: [
      'Bumpers cop it. Car parks, driveways, low walls, the bloke who reverses by feel. The good news is most scuffed, cracked or scraped plastic bumpers can be repaired rather than replaced, and Diarmuid does it right where your car is parked, usually in a couple of hours.',
    ],
    blocks: [
      { h2: 'The bumper damage we fix', list: ['Scuffs and scrapes from walls, posts and other cars', 'Cracks and splits in the plastic', 'Scraped corners and edges', 'Paint scrapes and transfer marks', 'Parking knocks that have marked or gouged the bumper'],
        outro: ['Because bumpers are plastic, they can usually be repaired and refinished instead of swapped out, which saves you a lot.'] },
      { h2: 'Repair beats replace, most of the time', body: ["A new bumper means the part, the paint and the labour to fit and colour-match it. For most everyday damage that's overkill. Diarmuid repairs the plastic, fills and reshapes where needed, then colour-matches and blends the paint so it looks factory again. Same finish, far less cost, and your car stays with you the whole time."] },
      { h2: 'Done at your place, not a workshop', body: ["There's no shop to bring the car to. Diarmuid comes to your home or work across South East Melbourne, from Berwick to Frankston, and handles the whole repair on site. Most bumpers are sorted in a couple of hours."] },
      { h2: 'Backed for life', body: ['Every bumper repair is covered by our lifetime workmanship guarantee, for as long as you own the car. 30 years on the tools, every job done personally.'] },
    ],
    faqs: [
      { q: 'Can a cracked bumper be repaired?', a: 'In most cases, yes. Plastic bumpers can be repaired, reshaped and refinished rather than replaced. Send a photo and Diarmuid will tell you straight.' },
      { q: 'Will the colour match the rest of the car?', a: "Yes. The repaired area is colour-matched to your car and blended into the surrounding bumper so you can't pick the repair." },
      { q: 'How long does a bumper repair take?', a: 'Most jobs are done in a couple of hours at your place. Bigger cracks or heavier damage can take a little longer.' },
      { q: 'Do I need to claim on insurance?', a: 'Usually not. Most bumper repairs are done without a claim, which protects your no-claims bonus.' },
    ],
    cta: 'Send a photo of the bumper and get your free quote, usually back within the hour.',
    schema: 'Service schema (bumper repair) plus FAQPage.',
  },

  hail: {
    key: 'hail',
    meta: {
      title: 'Mobile Hail Damage Repair | South East Melbourne',
      description: 'Hail damage lifted with paintless dent repair across South East Melbourne. No respray, insurance-friendly, we come to you. Free photo quote.',
    },
    h1: 'Mobile hail damage repair across South East Melbourne',
    intro: [
      'A decent Melbourne hailstorm can leave a panel covered in small dents in a matter of minutes. The good news is most of it can be fixed with paintless dent repair, which lifts each dent without any respray and keeps your factory paint. Diarmuid comes to you and works through it on site.',
    ],
    blocks: [
      { h2: 'Why paintless repair suits hail', body: ["Hail damage is usually lots of small, shallow dents rather than one big one, and the paint is normally still intact. That's exactly what PDR is built for. Each dent gets worked out from behind the panel, one at a time, until the surface is flat again. No filler, no paint, no drying time, and the original finish stays put. For hail, it's almost always the right call."] },
      { h2: 'What we handle', list: ['Dents across bonnets, roofs and boots', 'Multiple dents along doors, guards and quarter panels', "Light to moderate hail damage where the paint isn't broken", "Cars you'd rather not put through a long panel-shop claim"],
        outro: ['If any spots have cracked paint, Diarmuid will flag it and sort the right fix for those areas.'] },
      { h2: 'Insurance-friendly, but no claim needed', body: ["Plenty of hail jobs are done without an insurance claim at all, which keeps your no-claims bonus intact. If you are claiming, paintless repair is well understood by insurers and often the preferred method because there's no respray involved. Either way, Diarmuid will give you an honest, upfront free quote first."] },
      { h2: "Done where your car's parked", body: ["No workshop, no drop-off, no car gone for a week. Diarmuid comes to your home or work across South East Melbourne and works through the dents on site. Larger hail jobs can take longer than a single dent, and he'll give you a realistic timeframe when he quotes."] },
    ],
    faqs: [
      { q: 'Can all hail damage be fixed without a respray?', a: "Most of it, yes, as long as the paint isn't cracked. Paintless dent repair lifts the dents and keeps your original paint. Cracked spots are handled separately." },
      { q: 'Do you do this on site?', a: 'Yes. Diarmuid comes to you across South East Melbourne and works through the dents right where the car is parked.' },
      { q: "Will it affect my car's value?", a: 'Keeping the factory paint is the best thing for resale value, which is exactly what paintless repair does.' },
      { q: 'Do I have to claim on insurance?', a: 'No. Many hail jobs are done without a claim. If you do claim, paintless repair is insurer-friendly.' },
    ],
    cta: 'Send a photo of the hail damage and get your free quote.',
    schema: 'Service schema (hail damage repair) plus FAQPage.',
  },

  scratch: {
    key: 'scratch',
    meta: {
      title: 'Car Scratch & Chip Repair | Mobile, South East Melbourne',
      description: 'Mobile scratch and stone chip repair across South East Melbourne. Sorted on the spot before they spread or rust. Free photo quote, we come to you.',
    },
    h1: 'Mobile scratch and chip repair across South East Melbourne',
    intro: [
      "Stone chips and scratches look minor, but left alone they let water in and that's where rust starts. Diarmuid sorts them on the spot, colour-matched and blended, before a small mark turns into a bigger problem. Done at your place, usually the same day.",
    ],
    blocks: [
      { h2: 'Catch it early, save the panel', body: ["A chip or a scratch that's gone through the paint exposes the metal underneath. Give it a few wet Melbourne weeks and you can get surface rust creeping out from the edges. Fixing it early is quick and cheap. Leaving it can mean a much bigger repair down the track. So if you've got a fresh chip or scratch, it's worth getting onto."] },
      { h2: 'What we fix', list: ['Stone chips on the bonnet, bumper and guards', 'Scratches through the clear coat or into the colour', 'Trolley and car-park scrapes', 'Key marks', 'Small scuffs that catch the eye every time you walk up'] },
      { h2: 'Matched and blended, not just touched in', body: ['A dab of touch-up paint from a bottle almost always shows. Diarmuid colour-matches to your actual car and blends the repair into the panel, so it sits flat and disappears instead of leaving a visible blob. That’s the difference proper gear and 30 years of practice make.'] },
      { h2: 'Mobile, on your schedule', body: ['No shop, no drop-off. Diarmuid comes to your home or work across South East Melbourne and gets it sorted while you get on with your day. Most chip and scratch jobs are done in a couple of hours.'] },
    ],
    faqs: [
      { q: 'Are small chips really worth fixing?', a: 'Yes. A chip that’s reached the metal can start to rust, especially through a Melbourne winter. Fixing it early is far cheaper than dealing with rust later.' },
      { q: 'Will the repair be noticeable?', a: 'Done properly, no. The colour is matched to your car and blended into the panel so the repair isn’t a visible patch.' },
      { q: 'Can you fix a deep scratch?', a: "Often, yes. It depends how deep it's gone. Send a photo and Diarmuid will tell you exactly what it needs." },
      { q: 'Do you come to me?', a: "Yes, we're fully mobile across South East Melbourne." },
    ],
    cta: 'Send a photo of the chip or scratch and get your free quote.',
    schema: 'Service schema (scratch and chip repair) plus FAQPage.',
  },

  rust: {
    key: 'rust',
    meta: {
      title: 'Minor Rust Repair | Mobile, South East Melbourne',
      description: 'Small surface rust treated and repaired early across South East Melbourne, before it spreads into the panel. Mobile service, free photo quote.',
    },
    h1: 'Minor rust repair across South East Melbourne',
    intro: [
      'Surface rust starts small and spreads fast. Caught early, a little patch of rust is a straightforward fix. Left alone, it eats into the panel and turns into a much bigger, more expensive job. Diarmuid treats and repairs minor surface rust at your place, before it gets away on you.',
    ],
    blocks: [
      { h2: 'Why early matters with rust', body: ["Rust doesn't sit still. Once moisture gets to bare metal through a chip or a scratch, it keeps working outward and underneath the paint. The earlier it's treated, the less metal is affected and the simpler the repair. That's why we always say get onto small rust spots quickly rather than waiting and hoping."] },
      { h2: 'What we handle', list: ['Surface rust around stone chips and scratches', 'Small rust spots on panels, edges and seams', 'Early bubbling under the paint', 'Minor rust before it becomes structural'],
        outro: ["This is for minor and surface rust. If Diarmuid sees something more serious in your photo, he'll be straight with you about what it really needs."] },
      { h2: 'Treated, repaired and refinished', body: ["Diarmuid removes the affected area, treats the metal so the rust is stopped, then repairs and refinishes the spot and colour-matches it back to your car. Done early, the result is clean and the rust doesn't come straight back."] },
      { h2: 'Mobile across the south east', body: ["No workshop visit. Diarmuid comes to your home or work anywhere across South East Melbourne and handles it on site. Timeframes depend on how far the rust has spread, and you'll get an honest read when he quotes."] },
    ],
    faqs: [
      { q: 'Can you fix rust without replacing the panel?', a: "For minor and surface rust, usually yes. The area is treated, repaired and refinished. Heavier structural rust is a different job, and Diarmuid will tell you if that's what he sees." },
      { q: 'How do I know if it’s minor or serious?', a: 'Send a photo. Diarmuid can usually give you a good read from the picture and an honest answer either way.' },
      { q: 'Will the repair match my paint?', a: 'Yes, the refinished area is colour-matched to your car and blended in.' },
      { q: 'Why not just leave a small rust spot?', a: 'Because it spreads. Treating it early keeps the repair small and the cost down.' },
    ],
    cta: 'Send a photo of the rust spot and get your free quote.',
    schema: 'Service schema (rust repair) plus FAQPage.',
  },

  plastic: {
    key: 'plastic',
    meta: {
      title: 'Plastic Trim & Panel Repair | Mobile, South East Melbourne',
      description: 'Cracked plastic trims, mirrors and panels repaired instead of replaced across South East Melbourne. Mobile service, free photo quote, we come to you.',
    },
    h1: 'Plastic trim and panel repair across South East Melbourne',
    intro: [
      'Cracked a mirror housing, a trim piece or a plastic panel? In a lot of cases it can be repaired rather than replaced, which saves you the cost of a brand new part. Diarmuid repairs cracked and broken plastic on site, then refinishes it to match.',
    ],
    blocks: [
      { h2: 'What we repair', list: ['Cracked and split plastic bumpers', 'Broken mirror housings and caps', 'Damaged trims and mouldings', 'Cracked plastic panels and tabs', 'Scraped and gouged plastic that needs reshaping and refinishing'] },
      { h2: 'Repair instead of replace', body: ['New plastic parts add up fast once you count the part, the paint and the fitting. For a lot of everyday cracks and breaks, repairing the existing plastic is the smarter move. Diarmuid bonds and reshapes the damage, then colour-matches and blends the finish so it looks right again. Less cost, less waste, and your car stays with you.'] },
      { h2: 'Properly finished, not just patched', body: ['Plastic repair is only as good as the finish on top of it. Because Diarmuid is a qualified spray painter as well, the repaired area gets colour-matched and blended into the surrounding plastic, not left as an obvious patch.'] },
      { h2: 'Mobile service across South East Melbourne', body: ["No shop, no drop-off. Diarmuid comes to your home or work and does the repair where your car's parked, from Berwick and Pakenham to Dandenong and Frankston. Most jobs are sorted in a couple of hours."] },
    ],
    faqs: [
      { q: 'Can cracked plastic really be repaired?', a: 'In many cases, yes. Plastic can be bonded, reshaped and refinished rather than replaced. Send a photo and Diarmuid will let you know.' },
      { q: 'Will the repair be visible?', a: 'Done properly and refinished, no. The area is colour-matched and blended to match the surrounding plastic.' },
      { q: 'Is it cheaper than a new part?', a: "Usually, because you're not paying for a new part plus paint plus fitting. You'll get a free quote first." },
      { q: 'Do you come to me?', a: 'Yes, fully mobile across South East Melbourne.' },
    ],
    cta: 'Send a photo of the damaged plastic and get your free quote.',
    schema: 'Service schema (plastic repair) plus FAQPage.',
  },
}
