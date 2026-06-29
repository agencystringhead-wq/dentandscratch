import type { Page } from './types'

// Standalone inner pages, from the approved copy doc.
// NOTE: [CONFIRM: …] markers are verbatim from the doc — client must confirm before go-live.
// NOTE: Reviews quotes are genuine customer reviews; the dollar figures stay verbatim inside the
//       quotes and must never be restated as the business's pricing (no prices stated by the business).
export const PAGES: Record<string, Page> = {
  servicesHub: {
    meta: {
      title: 'Mobile Car Repair Services | South East Melbourne',
      description: 'Paintless dent repair, paint, bumper, hail, scratch, rust and plastic repair across South East Melbourne. Mobile, we come to you. Free photo quote.',
    },
    h1: 'Our mobile car repair services across South East Melbourne',
    intro: [
      "Whatever the dent, scratch or scuff, there's a good chance Diarmuid can fix it where your car's parked, usually in a couple of hours. Here's everything we do. All of it mobile, all of it backed by our lifetime workmanship guarantee.",
    ],
    // Service cards render from SERVICES; these are the hub's approved per-service blurbs.
    blocks: [
      { h2: 'Paintless Dent Repair', body: ['Our specialty. Dents and dings worked out from behind the panel with your factory paint kept. No filler, no respray. The first choice for door dings and hail damage.'] },
      { h2: 'Paint Repairs', body: ['Scratches, chips and scuffs colour-matched to your car and blended in so the repair disappears into the panel.'] },
      { h2: 'Bumper Repair', body: ['Scuffed, cracked and scraped plastic bumpers repaired and refinished instead of replaced, usually in a couple of hours.'] },
      { h2: 'Hail Damage Repair', body: ['Dozens of small dents lifted with paintless repair. No respray, insurance-friendly, and your original paint stays put.'] },
      { h2: 'Scratch & Chip Repair', body: ['Stone chips and scratches sorted on the spot before water gets in and rust starts.'] },
      { h2: 'Minor Rust Repair', body: ['Small surface rust treated and repaired early, before it spreads into the panel.'] },
      { h2: 'Plastic Repair', body: ['Cracked plastic trims, mirrors and panels repaired and refinished rather than swapped for new parts.'] },
      { h2: 'Not sure which one you need?', body: ["That's fine. Send Diarmuid a photo of the damage and he'll tell you what it needs and what it'll cost, usually within the hour. No coming in, no obligation."] },
    ],
    cta: 'Get your free quote.',
    schema: 'AutoRepair business with an ItemList / OfferCatalog of the services, plus links to each Service page.',
  },

  about: {
    meta: {
      title: 'About Dent & Scratch Direct | Diarmuid Murphy, Berwick',
      description: 'Meet Diarmuid Murphy, owner of Dent & Scratch Direct. 30 years on the tools, fully mobile dent and scratch repair across South East Melbourne.',
    },
    h1: 'About Dent & Scratch Direct',
    intro: [
      'Dent & Scratch Direct is a one-man mobile repair service run by Diarmuid Murphy out of Berwick. The idea is simple. Panel shops keep your car for days and charge a fortune. Diarmuid comes to you, fixes most dents, scratches and bumper scuffs in a couple of hours, and charges a fraction of the price. Your car never leaves your driveway.',
    ],
    blocks: [
      { h2: "G'day, I'm Diarmuid", body: [
        'I started Dent & Scratch to take the hassle out of fixing a car. No call centres, no runaround, no dropping the car off and waiting a week. You text me a photo, I send back a price, and I come to your home or work and sort it on the spot.',
        "I've been on the tools for 30 years, trained as both a spray painter and a panel beater in Ireland and Australia. My first years were spent on new cars and restorations, so I learned to do things to a high standard from the start. Every job that comes through is done by me personally. That's how I keep the quality where it should be.",
      ] },
      { h2: 'Why people choose us', list: [
        '30 years of hands-on experience. Not a chain, not a call centre. Just one experienced specialist doing the work himself.',
        "Fully qualified in spray painting and panel beating. So whether it's a dent, a scratch or a bumper, it's done properly.",
        "100% mobile. There's no workshop. We come to you, anywhere across South East Melbourne.",
        'Trusted by dealers and drivers. Dealerships and private customers come back because the work is right the first time.',
        'Lifetime workmanship guarantee. Every repair is backed for as long as you own the car.',
      ] },
      { h2: 'The numbers', list: ['30+ years of experience', '5,600+ cars repaired', '4,800+ happy clients', '140+ five-star reviews', '4.9 rating on Google'] },
      { h2: 'How we work', body: ["It's about as easy as it gets. Send a photo of the damage, get an honest price and timeframe back, pick a time and place that suits, and the repair gets done where your car is parked. Most jobs are finished in a couple of hours, and you don't have to go anywhere or claim on insurance."] },
      { h2: 'Where we work', body: ["Based in Berwick, covering South East Melbourne, from Casey and Cardinia through to Greater Dandenong, Frankston, Monash and Knox. Not sure if you're in the area? Just ask."] },
    ],
    cta: 'Got a dent or a scratch? Send Diarmuid a photo and get your free quote.',
    schema: 'AboutPage plus Person schema for Diarmuid Murphy and Organisation/AutoRepair for the business.',
  },

  serviceAreas: {
    meta: {
      title: 'Service Areas | Mobile Car Repair, South East Melbourne',
      description: 'Mobile dent and scratch repair across South East Melbourne, from Berwick to Frankston. We come to you. Free photo quote, fully insured.',
    },
    h1: 'We come to you, right across South East Melbourne',
    intro: [
      "There's no workshop to drive to. Diarmuid is based in Berwick and covers the whole south east, turning up at your home or work to sort the repair where your car's parked. Here's where we regularly go. Not on the list? Just ask, we travel a bit further for bigger jobs.",
    ],
    blocks: [
      { h2: 'Casey (home base)', body: ["Berwick, Narre Warren, Cranbourne, Clyde, Hampton Park, Endeavour Hills. This is our backyard, so we're across Casey constantly."] },
      { h2: 'Cardinia', body: ['Pakenham, Officer. Regular runs out this way for dents, bumpers and hail.'] },
      { h2: 'Greater Dandenong', body: ['Dandenong, Keysborough, Springvale. Mobile repairs done at home or work right across the area.'] },
      { h2: 'Frankston', body: ['Frankston, Carrum Downs. We come to you down the Frankston way for the full range of repairs.'] },
      { h2: 'Monash & Knox', body: ['Rowville, Mulgrave, Glen Waverley. Covered for dents, scratches and bumpers.'] },
      { h2: 'How the mobile service works', body: ['Wherever you are in the south east, the process is the same. Text Diarmuid a photo, get a price and a time back, and he comes to you with everything needed to do the job on site. Most repairs are done in a couple of hours, and there’s no need to claim on insurance.'] },
      { h2: 'Not sure if we cover you?', body: ["If your suburb isn't listed, it's still worth asking. Diarmuid travels a little further for bigger jobs, and he'll tell you straight whether he can get to you."] },
    ],
    cta: 'Tell us where you are and send a photo. Get your free quote, usually back within the hour.',
    schema: 'AutoRepair business with areaServed listing the suburbs, plus FAQPage if a short FAQ is added.',
  },

  reviews: {
    meta: {
      title: 'Reviews | Dent & Scratch Direct, South East Melbourne',
      description: 'Read real reviews of Dent & Scratch Direct. 4.9 on Google, 140+ five-star reviews for mobile dent and scratch repair across South East Melbourne.',
    },
    h1: 'What South East Melbourne drivers say',
    intro: [
      "We've fixed more than 5,600 cars and picked up 140+ five-star reviews along the way, sitting at 4.9 on Google. Here's what real customers have said about getting their car sorted in the driveway instead of the body shop.",
    ],
    blocks: [
      // Verbatim genuine customer reviews. Dollar figures are part of the quotes — never restate as our pricing.
      { h2: 'Real reviews from real customers', body: [
        '"Lifetime customer here. 3 dents removed today, it\'s legit like magic, I watched it being done and the dents completely disappeared. Diarmuid drove to my home and fixed all of them on site, and he quoted just $350, which is a very fair and honest price. I was first quoted $1400 by my local panel shop before I found Diarmuid. So glad I found this service. I\'ll recommend it to everyone I know."',
        '"What a miracle worker. Everyone doubted my dent could be fixed without panel beating and repainting the whole rear panel for $800, but he managed to get it done. Invisible. And it cost me $385. Lovely, friendly, reliable guy. Thanks so much, I\'ll be recommending him to everybody." — Kerrie Miller',
        '"Super impressed with the professionalism, friendliness and results. Diarmuid arrived on time and set about the dents that had prompted me to get in touch. He really knows his craft and removed all of them with no trace at all. Very happy with the quality and I have no hesitation recommending him to anyone."',
        '"Diarmuid did a great job. Highly satisfied with the finish. He rang to say he was coming early as it was convenient. A really professional job, would use again if needed." — John, Berwick',
        '"Thank you Diarmuid. You can\'t even tell there was ever any damage, the finish is flawless and perfectly blended with the original paint. Professional, efficient, and great attention to detail. My car looks brand new again."',
        '"What a fantastic service, can\'t believe how good his work is. Can\'t even tell I had a dent in my panel. Thank you." — Cranbourne North',
        '"Thank you for the great job on the repairs and for your professionalism, efficiency and great service." — Connie',
        '"First class operator. From the initial phone call he arrived early, was easy to communicate with, and showed outstanding skill removing a paintless dent. Couldn\'t be more satisfied, very good value and an all-round great business."',
        '"Diarmuid removed two dents from my car and I couldn\'t be happier. The service was professional and quick. I\'d highly recommend it."',
      ] },
      { h2: 'Why drivers keep coming back', body: ["The reviews all say the same things. He turns up on time, he does the work in front of you, the finish is clean, and it costs a lot less than a panel shop. That's the whole point of the business."] },
      { h2: 'Add your own', body: ["Had your car fixed by Diarmuid? A quick Google review really helps other local drivers find an honest repairer. And if you've got a new dent or scratch, you know what to do."] },
    ],
    cta: 'Send a photo and get your free quote, usually back within the hour.',
    schema: 'AutoRepair business with aggregateRating and individual Review markup (use only genuine reviews).',
  },

  ourWork: {
    meta: {
      title: 'Before & After | Mobile Dent & Scratch Repair Melbourne',
      description: "See real before and after mobile dent, scratch and bumper repairs across South East Melbourne. Most people can't pick where the damage was. Free quote.",
    },
    h1: 'Real before and after repairs across South East Melbourne',
    intro: [
      "Talk is cheap, so here's the work. These are real cars Diarmuid has fixed in driveways and work car parks across the south east. Dents, scratches, bumpers and hail, all done on site. Have a look and see if you can pick where the damage was.",
    ],
    blocks: [
      { h2: 'Paintless dent repair', body: ["Door dings, car-park dents and creases worked out from behind the panel with the factory paint untouched. Slide between the before and after and the dent's just gone."] },
      { h2: 'Bumper repair', body: ['Scuffed and cracked bumpers repaired and refinished, colour-matched back to the car. No new part, no obvious patch.'] },
      { h2: 'Paint, scratch and chip', body: ['Scratches and stone chips matched and blended into the panel so the repair disappears.'] },
      { h2: 'Hail damage', body: ['Panels covered in small dents brought back flat with paintless repair, no respray.'] },
      { h2: 'Your car could be next', body: ['Every one of these started as a photo sent to Diarmuid. Send yours and you’ll get a price and a timeframe back, usually within the hour.'] },
    ],
    cta: 'Get your free quote.',
    schema: 'ImageObject for each before/after image, plus the AutoRepair business reference. Add descriptive alt text per image.',
  },

  contact: {
    meta: {
      title: 'Contact Dent & Scratch Direct | Call 0447 847 655',
      description: 'Get in touch with Dent & Scratch Direct for mobile dent and scratch repair across South East Melbourne. Call 0447 847 655 or send a photo for a free quote.',
    },
    h1: 'Get in touch',
    intro: [
      "The quickest way to get a price is to send Diarmuid a photo of the damage. You'll get an honest quote and a timeframe back, usually within the hour. No coming in, no obligation.",
    ],
    blocks: [
      { h2: 'Call or text', body: ["0447 847 655. Call or text Diarmuid directly. If he's mid-repair he'll get back to you as soon as he's done."] },
      { h2: 'Email', body: ['admin@dentandscratch.com.au'] },
      { h2: 'Hours', body: ['Monday to Saturday, 7:00am to 6:00pm.'] },
      { h2: 'Where we work', body: ["Based in Berwick, fully mobile across South East Melbourne, including Casey, Cardinia, Greater Dandenong, Frankston, Monash and Knox. We come to your home or work. There's no workshop to visit."] },
      { h2: 'Send a photo for the fastest quote', body: ["For the quickest answer, send a clear photo of the damage plus one of the whole panel. That's usually all Diarmuid needs to give you a price."] },
    ],
    cta: 'Get your free quote.',
    schema: 'ContactPage plus AutoRepair business with telephone, email, openingHours and areaServed.',
  },

  freeQuote: {
    meta: {
      title: 'Free Quote | Mobile Dent & Scratch Repair, Melbourne',
      description: 'Get a free quote for mobile dent, scratch or bumper repair across South East Melbourne. Send a photo, get a price back, usually within the hour.',
    },
    h1: 'Get your free quote',
    intro: [
      "It's as easy as a photo. Send Diarmuid a picture of the dent, scratch or scuff and you'll get a price and an honest timeframe back, usually within the hour. No coming in, no pressure, no obligation.",
    ],
    blocks: [
      { h2: 'How it works', list: ['01 Send a photo. Snap the damage and send it through, along with a shot of the whole panel.', '02 Get your price. Diarmuid sends back a quote and a realistic timeframe, usually within the hour.', '03 We come to you. Pick a time and place, home or work, and the repair gets done on site, usually in a couple of hours.'] },
      { h2: 'What to send for the best quote', list: ['A close-up photo of the damage', 'A second photo of the whole panel or bumper, so Diarmuid can see the surrounding area', 'Your suburb, so we can confirm we cover you', 'A quick note on what happened, if you know'] },
      { h2: 'Why a photo quote works', body: ["Because there's no workshop, you don't need to drive anywhere just to find out what a repair costs. A clear photo tells Diarmuid most of what he needs to know, so you get a real answer fast and only book in once you're happy with the price."] },
      { h2: 'Prefer to talk?', body: ['Call or text Diarmuid on 0447 847 655, Monday to Saturday, 7:00am to 6:00pm.'] },
    ],
    cta: 'Send your photo and get your free quote.',
    schema: 'AutoRepair business plus a quote/contact action. FAQPage if a short FAQ is added.',
  },

  privacy: {
    meta: {
      title: 'Privacy Policy | Dent & Scratch Direct',
      description: 'How Dent & Scratch Direct collects, uses and protects your personal information.',
    },
    h1: 'Privacy Policy',
    intro: [
      'Dent & Scratch Direct ("we", "us", "our") respects your privacy and is committed to protecting your personal information. This policy explains what we collect, why, and how we handle it. It\'s written to align with the Australian Privacy Principles under the Privacy Act 1988 (Cth).',
    ],
    blocks: [
      { h2: 'What we collect', body: ['We only collect what we need to quote and carry out your repair. That typically includes your name, phone number, email address, suburb or location, your vehicle details, and any photos of the damage you send us. If you contact us or fill in a quote form, we collect the information you choose to provide.'] },
      { h2: 'Why we collect it', body: ["We use your information to give you a quote, arrange and carry out your repair, contact you about your job, respond to your enquiries, and keep records of work done. We may also use your contact details to follow up about your repair or, if you've opted in, to send occasional updates."] },
      { h2: 'How we store and protect it', body: ['We take reasonable steps to keep your information secure and to protect it from misuse, loss and unauthorised access. We keep it only as long as we need it for the purposes above or as required by law.'] },
      { h2: 'Sharing your information', body: ["We don't sell your personal information. We only share it where it's needed to deliver our service or where we're required to by law. We don't disclose your details to third parties for their own marketing."] },
      { h2: 'Cookies and website analytics', body: ["Our website may use cookies and standard analytics tools to understand how visitors use the site so we can improve it. You can control cookies through your browser settings. Analytics data is used in aggregate and doesn't identify you personally."] },
      { h2: 'Access and corrections', body: ["You can ask to see the personal information we hold about you and ask us to correct it if it's wrong. Get in touch using the details below and we'll help."] },
      { h2: 'Contact us', body: ['Questions about your privacy or this policy? Contact us at admin@dentandscratch.com.au or call 0447 847 655.', '[CONFIRM: last updated date]'] },
    ],
    cta: 'Get your free quote.',
    schema: 'Standard web page. No special schema required.',
  },

  terms: {
    meta: {
      title: 'Terms & Conditions | Dent & Scratch Direct',
      description: 'The terms and conditions for using the Dent & Scratch Direct website and mobile repair services across South East Melbourne.',
    },
    h1: 'Terms & Conditions',
    intro: [
      'These terms apply to your use of the Dent & Scratch Direct website and to the mobile repair services we provide. By using our site or booking a repair, you agree to these terms.',
    ],
    blocks: [
      { h2: 'Our services', body: ['Dent & Scratch Direct provides mobile dent, scratch, bumper and related cosmetic repair services across South East Melbourne. We come to your home or work to carry out repairs. We do not operate a workshop or accept drop-offs.'] },
      { h2: 'Quotes', body: ["Quotes are provided free of charge and are based on the information and photos you give us. A final price may be confirmed once we see the damage in person, as photos don't always show the full extent of the damage. We'll always talk you through any change before starting work."] },
      { h2: 'Bookings and access', body: ["You're responsible for providing safe, reasonable access to your vehicle at the agreed time and location, and for making sure the vehicle is available for the work to be carried out."] },
      { h2: 'Workmanship guarantee', body: ["Our repairs are backed by a lifetime workmanship guarantee for as long as you own the vehicle. The guarantee covers the workmanship of the repair we carried out. It doesn't cover new or unrelated damage, fair wear and tear, or issues caused by later accidents, neglect or third-party work.", '[CONFIRM: any specific guarantee exclusions you want stated]'] },
      { h2: 'Payment', body: ['Payment is due on completion of the work unless otherwise agreed.', '[CONFIRM: accepted payment methods]'] },
      { h2: 'Liability', body: ['We carry out every repair with reasonable care and skill. To the extent permitted by law, our liability is limited to re-performing the repair or the cost of the repair carried out. Nothing in these terms excludes rights you have under the Australian Consumer Law.'] },
      { h2: 'Website content', body: ["The content on this website is provided for general information. We do our best to keep it accurate and current, but we don't guarantee it's complete or error-free. Photos and examples of past work are shown to illustrate the type of work we do."] },
      { h2: 'Changes to these terms', body: ['We may update these terms from time to time. The current version is the one published on this website.'] },
      { h2: 'Contact us', body: ['Questions about these terms? Contact us at admin@dentandscratch.com.au or call 0447 847 655.', '[CONFIRM: last updated date]'] },
    ],
    cta: 'Get your free quote.',
    schema: 'Standard web page. No special schema required.',
  },
}
