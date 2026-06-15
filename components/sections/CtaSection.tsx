import Link from 'next/link'
import { CTA_SECTION, BUSINESS } from '@/lib/content'

export function CtaSection() {
  const { heading, body } = CTA_SECTION

  return (
    <section className="bg-green-primary" style={{ padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 text-center">

        <h2
          className="font-display font-bold text-white m-0 mx-auto max-w-[18em]"
          style={{ fontSize: 'clamp(28px,4vw,44px)', lineHeight: '1.2' }}
        >
          {heading}
        </h2>

        <p
          className="font-body font-medium text-[16px] leading-relaxed mt-5 mx-auto max-w-[32em]"
          style={{ color: 'rgba(255,255,255,0.8)' }}
        >
          {body}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link
            href="/free-quote/"
            className="inline-block bg-white text-green-primary font-body font-medium text-[16px] px-8 py-4 no-underline border-2 border-white hover:bg-neutral-page transition-colors"
          >
            Get my free quote
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-block bg-transparent text-white font-body font-medium text-[16px] px-8 py-4 no-underline border-2 hover:bg-white/10 transition-colors"
            style={{ borderColor: 'rgba(255,255,255,0.5)' }}
          >
            {BUSINESS.phone}
          </a>
        </div>

      </div>
    </section>
  )
}
