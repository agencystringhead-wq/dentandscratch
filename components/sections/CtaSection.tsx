import { CTA_SECTION, BUSINESS } from '@/lib/content'

export function CtaSection() {
  const { heading, body } = CTA_SECTION

  return (
    <section className="px-[22px] py-[22px]">
      <div
        className="max-w-[1200px] mx-auto relative rounded-[34px] overflow-hidden text-white text-center"
        style={{
          background: 'linear-gradient(135deg,#00601B,#009028 60%,#1FD75C 130%)',
          padding: 'clamp(40px,6vw,80px) clamp(24px,4vw,64px)',
        }}
      >
        {/* Glow orb */}
        <div
          className="absolute -bottom-[120px] -left-[60px] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle,rgba(255,255,255,0.18),transparent 65%)',
            filter: 'blur(10px)',
          }}
          aria-hidden="true"
        />

        <div className="relative">
          <h2
            className="font-display font-extrabold tracking-[-0.025em] leading-[1.05] m-0 mx-auto max-w-[16em]"
            style={{ fontSize: 'clamp(28px,4.6vw,52px)' }}
          >
            {heading}
          </h2>

          <p
            className="text-green-muted leading-[1.55] mt-4 mx-auto max-w-[30em]"
            style={{ fontSize: 'clamp(15.5px,1.5vw,18px)' }}
          >
            {body}
          </p>

          <div className="flex flex-wrap gap-[14px] justify-center mt-[30px]">
            <a
              href="/#quote"
              className="no-underline bg-white text-green-dark font-bold text-[16px] px-[32px] py-[16px] rounded-chip shadow-[0_14px_30px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:shadow-[0_20px_38px_-12px_rgba(0,0,0,0.5)] transition-all"
            >
              Get my free quote
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="no-underline inline-flex items-center gap-[9px] bg-white/[0.14] border-[1.5px] border-white/[0.4] text-white font-semibold text-[16px] px-[30px] py-[16px] rounded-chip hover:bg-white/[0.24] hover:border-white/[0.7] transition-all"
            >
              <span>&#9742;</span> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
