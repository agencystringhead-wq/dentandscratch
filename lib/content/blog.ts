import type { BlogPost, PageMeta } from './types'

// Blog landing + 5 full posts from the approved copy doc.
// Slugs are keyword-relevant (signed off). `date` is 'TODO' until the client supplies real
// publish dates — do not fabricate. Posts render in this array order (doc order, 1–5) until then.
export const BLOG: {
  landing: { meta: PageMeta; h1: string; intro: string[]; cta: string }
  posts: BlogPost[]
} = {
  landing: {
    meta: {
      title: 'Car Repair Tips & Advice | Dent & Scratch Direct Blog',
      description: 'Honest advice on dents, scratches, bumpers and hail from a mobile repairer in South East Melbourne. Practical tips to keep your car looking its best.',
    },
    h1: 'Tips and advice from the driveway',
    intro: [
      'Thirty years of fixing cars teaches you a few things. This is where Diarmuid shares the practical stuff. How to tell whether a dent can be fixed without a respray, what to do about a fresh stone chip, how to handle hail season, and how to keep your car looking sharp for resale. No jargon, just straight advice from someone who does this every day across South East Melbourne.',
    ],
    cta: 'Got damage now? Get your free quote.',
  },

  posts: [
    {
      slug: 'paintless-dent-repair-vs-panel-beating',
      meta: {
        title: 'Paintless Dent Repair vs Panel Beating: Which Do You Need?',
        description: "Not sure if your dent needs paintless repair or a panel shop respray? Here's how to tell, from a mobile repairer in South East Melbourne.",
      },
      h1: 'Paintless dent repair vs panel beating: which one does your car actually need?',
      date: 'TODO',
      intro: [
        "Someone dings your door in a Berwick car park and you're left looking at a dent wondering what it's going to cost. Do you need paintless dent repair, or is this a full panel-shop job with filler and a respray? The answer changes the price a lot, so it's worth knowing the difference.",
        "Here's the short version. If the paint isn't broken, paintless dent repair is almost always the better option. If the paint is cracked, gouged or flaking, you're likely into paint work. Let's unpack that.",
      ],
      blocks: [
        { h2: 'What paintless dent repair actually is', body: ["Paintless dent repair, or PDR, fixes a dent by working the metal back into shape from behind the panel. No filler goes on, no paint gets sprayed, and your original factory finish stays exactly as it was. It's quick, it's cheaper, and because nothing is resprayed, it's the kinder option for your car's value.", 'It works best on dents where the paint is still intact, which covers a huge amount of everyday damage. Door dings, car-park dents, minor creases, and hail are all classic PDR jobs.'] },
        { h2: 'When you need paint work instead', body: ["If the paint has cracked, chipped through to the metal, or been gouged out, PDR alone won't bring it back. The surface itself is damaged, so it needs to be repaired, colour-matched and refinished. That's paint work, and it takes a bit more time than a straight dent.", "The good news is you don't always need a panel shop and a week without your car for this. A lot of paint damage can be repaired mobile too, on site, colour-matched and blended into the panel."] },
        { h2: "How to tell which one you've got", body: ["Run your fingernail across the damage. If it's a smooth dent with the paint still shiny and unbroken, that's PDR territory. If you can feel an edge where the paint's cracked or you can see bare metal or primer, it's a paint job. Either way, the easiest thing to do is send a photo. From a clear picture, an experienced repairer can usually tell you straight away which one it is and what it'll cost."] },
        { h2: 'Why it matters for resale', body: ["Original paint is worth more than any respray, full stop. Buyers and dealers can tell when a panel has been redone, and it can knock money off the car. Keeping the factory finish with paintless repair, where the damage allows, protects what your car is worth. That's a big reason PDR has become the first choice for dents in South East Melbourne."] },
        { h2: 'The bottom line', body: ["Paint not broken? Think paintless dent repair. Paint broken? Think paint repair. And if you're not sure, you don't have to guess. Snap a photo, send it through, and get a straight answer."] },
      ],
      cta: 'Send Diarmuid a photo and get your free quote, usually back within the hour. We come to you across South East Melbourne.',
    },

    {
      slug: 'car-park-door-dings',
      meta: {
        title: 'Car-Park Door Dings in Melbourne: Fix or Forget?',
        description: "Door dings from Melbourne car parks are everywhere. Here's why they're worth fixing, what it costs you to ignore them, and the easy mobile fix.",
      },
      h1: 'Car-park door dings: should you bother fixing them?',
      date: 'TODO',
      intro: [
        "If you park anywhere busy around South East Melbourne, a shopping centre, a station car park, a packed street in Frankston, you've probably copped a door ding. Someone swings their door open, taps yours, and leaves a neat little dent without a note. Annoying, but is it worth fixing?",
        'Short answer, usually yes. And it\'s a lot easier than most people think.',
      ],
      blocks: [
        { h2: 'Why door dings are worth sorting', body: ["A door ding is small, but it's right at eye level on the side of the car, so you notice it every single time you walk up. It also tends to catch the light, which makes it stand out more than the size suggests. On a tidy car, one ding can make the whole thing look neglected.", "There's a resale angle too. A few unfixed dings tell a buyer the car wasn't looked after, even if it was. Sorting them keeps the car presenting the way it should."] },
        { h2: 'The good news about the fix', body: ["Most door dings are a textbook paintless dent repair. The paint's usually fine, the dent's shallow, and the metal can be worked back into shape from behind the panel with no filler and no respray. Your factory paint stays put.", "Even better, you don't have to take the car anywhere. A mobile repairer comes to your home or work, sorts the ding in the driveway, and it's done in well under an hour for a single dent."] },
        { h2: 'What it costs you to ignore it', body: ["Leaving a plain dent where the paint is intact won't usually cause more damage, so there's no rush in that sense. But dings have a habit of adding up. One becomes three, then the car starts looking tired and you're paying to fix a handful at once. Knocking them over as they happen keeps the car sharp and the job small.", "The one to not ignore is any ding where the paint has cracked, because that exposes metal and can start to rust. That one's worth getting onto quickly."] },
        { h2: 'How to deal with the next one', body: ["Next time you find a fresh ding, take a clear photo of it and one of the whole door. Send them through and you'll get a price back, usually within the hour. If it suits, the repairer comes to you and it's gone the same day."] },
        { h2: 'The bottom line', body: ["Door dings are the most common damage we see across South East Melbourne, and they're also one of the quickest, cheapest things to fix. No need to live with them, and no need to drive anywhere to sort them."] },
      ],
      cta: 'Got a door ding? Send Diarmuid a photo and get your free quote. We come to you, from Berwick to Frankston.',
    },

    {
      slug: 'hail-damage-after-a-storm',
      meta: {
        title: 'Hail Damage in Melbourne: What To Do After a Storm',
        description: "Melbourne hail can dent a whole panel in minutes. Here's what to do after a storm, why paintless repair suits hail, and whether to claim on insurance.",
      },
      h1: 'Hail damage in Melbourne: what to do after a storm',
      date: 'TODO',
      intro: [
        "Melbourne weather does what it likes, and every storm season a few good hailstorms roll through the south east and leave cars looking like golf balls. If you've come out to a bonnet and roof covered in little dents, here's what to do, and why it's usually less of a drama than it looks.",
      ],
      blocks: [
        { h2: "First, don't panic", body: ["Hail damage looks dramatic because there's a lot of it, but it's usually lots of small, shallow dents rather than one big nasty one. And on most hail-hit cars the paint stays intact, which matters, because that's exactly the kind of damage paintless dent repair is built to fix.", 'So before you start picturing a full respray and weeks without the car, take a breath. There\'s a good chance it\'s more fixable than it looks.'] },
        { h2: 'Why paintless repair suits hail', body: ['With hail, the dents are shallow and the paint is usually unbroken. A paintless dent repairer works each dent out from behind the panel, one at a time, until the surface is flat again. No filler, no paint, no respray. Your factory finish stays exactly as it was.', 'That\'s a big deal for a hail-damaged car, because the alternative, respraying multiple panels, is slow, expensive and takes original paint off the car. Paintless repair keeps the car original and usually comes in well under the cost of panel-and-paint.'] },
        { h2: 'Should you claim on insurance?', body: ['That depends on the damage and your policy. Plenty of hail jobs get done without a claim at all, which keeps your no-claims bonus intact and saves the excess. For lighter hail, paying for a paintless repair directly is often the cheaper path once you factor in the excess and the premium hit.', "If you do claim, paintless repair is well understood by insurers and often the method they prefer, because there's no respray involved. Either way, get an honest quote first so you can compare."] },
        { h2: 'What to do right now', body: ["Get the car undercover if more weather's coming. Then take photos in good light, a few wide shots of each affected panel and a couple of close-ups. Send those through for a quote. From clear photos, a repairer can usually give you a realistic read on how big the job is and what it'll cost."] },
        { h2: 'A quick word on prevention', body: ["You can't control the weather, but covered parking during storm season helps, and so does moving the car under cover when a warning's out. It's not always possible, but when it is, it saves a lot of dents."] },
        { h2: 'The bottom line', body: ['Hail looks worse than it is. Most of it comes out with paintless repair, no respray, with your original paint kept and often no insurance claim needed. Get photos, get a quote, and get a clear picture before you do anything.'] },
      ],
      cta: 'Hail-damaged car? Send Diarmuid some photos and get your free quote. Mobile across South East Melbourne, we come to you.',
    },

    {
      slug: 'fix-stone-chips-before-they-rust',
      meta: {
        title: "That Stone Chip Could Start Rust. Here's Why To Fix It.",
        description: 'A small stone chip can let rust into your panel through a Melbourne winter. Here\'s why fixing chips early saves you money, from a local mobile repairer.',
      },
      h1: 'Why that little stone chip is worth fixing before winter',
      date: 'TODO',
      intro: [
        "You're cruising down the freeway, a stone flicks up off the truck in front, and tink, there's a fresh chip on your bonnet. Tiny thing. Easy to ignore. But that little chip is the most common way rust gets started, and through a wet Melbourne winter it can turn into a much bigger job than it needs to be.",
      ],
      blocks: [
        { h2: 'What actually happens with a chip', body: ['When a stone chips through the paint, it usually goes right down to bare metal. Paint is what keeps moisture off that metal. Once it\'s exposed, every bit of rain, dew and car wash gets to it. Give it time and you get surface rust, which starts as a small brown spot and then creeps outward underneath the surrounding paint.', "That's the catch with rust. It doesn't stay the size it started. It spreads."] },
        { h2: 'Why Melbourne winters make it worse', body: ['Cold, wet months mean more moisture sitting on the car more of the time. Damp mornings, rain, road spray, it all keeps that exposed metal wet. A chip that might sit harmlessly through a dry summer can start rusting through a wet winter. So the timing matters, and the lead-up to winter is the smart time to get chips sorted.'] },
        { h2: 'The fix is small if you catch it early', body: ["A fresh chip with no rust yet is a quick fix. The spot gets cleaned up, colour-matched to your car and blended into the panel, and you're done. Catch it before any rust starts and it's about as simple as repairs get.", "Leave it until rust has taken hold and the job grows. Now the rust has to be treated and removed before anything's refinished, and if it's spread under the paint, more of the panel is involved. Same chip, much bigger bill, just because of timing."] },
        { h2: 'How to handle chips as they happen', body: ["You don't need to chase every microscopic mark, but any chip that's gone through to bare metal is worth getting onto, especially before winter. Take a photo, send it through, and get a price. A mobile repairer can colour-match and sort it at your place, no workshop visit required."] },
        { h2: 'The bottom line', body: ["Stone chips are small and easy to shrug off, but they're how rust gets a foothold. Fixing them early is cheap and quick. Leaving them through a wet Melbourne winter is how a five-minute job becomes a panel repair. If you've got a chip down to the metal, sort it before the rain sets in."] },
      ],
      cta: 'Got a stone chip? Send Diarmuid a photo and get your free quote. We come to you across South East Melbourne.',
    },

    {
      slug: 'fix-dents-and-scratches-before-selling',
      meta: {
        title: 'Selling Your Car? Fix These Dents and Scratches First.',
        description: "Small dents and scratches can knock real money off your car's sale price. Here's what's worth fixing before you sell, from a mobile repairer in Melbourne.",
      },
      h1: 'Selling your car? Sort these dents and scratches first',
      date: 'TODO',
      intro: [
        "When you're selling a car, first impressions do a lot of the work. A buyer walks up, has a look around the panels, and forms an opinion before they've even sat in it. A few small dents and scratches can make a well-kept car look neglected, and that can cost you more at sale time than the repairs would. Here's what's worth fixing before you list it.",
      ],
      blocks: [
        { h2: 'Why small damage costs you more than it should', body: ['Buyers use little flaws as bargaining chips. A door ding here, a scratch there, a scuffed bumper, and suddenly they\'re knocking hundreds off their offer "to cover fixing it." The thing is, that damage usually costs far less to repair than the amount they\'ll try to take off. Fixing it first means you\'re selling a tidy car and holding your price.', 'There\'s a presentation angle too. A clean, ding-free car photographs better, stands out in the listing, and gets more interest. More interest means more leverage on price.'] },
        { h2: 'The damage worth fixing before you sell', list: ['Door dings and car-park dents. Quick paintless repair, big difference to how the car presents.', 'Scuffed bumpers. One of the first things buyers notice, and usually repairable rather than replaceable.', 'Scratches and stone chips. Matched and blended so the panels look clean and cared for.', 'Kerb-rashed alloys. Tidy wheels lift the whole car, scruffy ones drag it down.'],
          outro: ['None of these are big jobs on their own, and most can be done mobile, on site, in a couple of hours.'] },
        { h2: "What's usually not worth chasing", body: ["You don't need a showroom-perfect car to sell well. Tiny marks that are genuinely hard to spot probably aren't worth it. The ones to fix are the things a buyer's eye lands on, the dings at eye level, the scuffed bumper corner, the scratched door. Fix the obvious stuff, leave the invisible stuff."] },
        { h2: 'Time it right', body: ["Get the repairs done before you take your listing photos, not after. The photos are what pull buyers in, so you want the car looking its best in them. A mobile repairer can come to you and knock over a few jobs in one visit, which is handy when you're trying to get the car listed."] },
        { h2: 'The bottom line', body: ['A bit of tidy-up before you sell tends to pay for itself. Small dents, scratches, scuffed bumpers and kerbed alloys are cheap to fix and easy to hold against you at sale time. Sort the obvious ones, photograph a clean car, and protect your asking price.'] },
      ],
      cta: 'Getting a car ready to sell? Send Diarmuid some photos and get your free quote. Mobile across South East Melbourne, we come to you.',
    },
  ],
}
