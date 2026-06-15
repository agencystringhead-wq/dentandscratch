import Link from 'next/link'
import { PDR_SECTION } from '@/lib/content'

export function PdrSection() {
  const { eyebrow, heading, body, points, steps, timeStat } = PDR_SECTION

  return (
    <section
      id="pdr"
      className="scroll-mt-[84px] px-[22px]"
      style={{ padding: 'clamp(48px,7vw,96px) 22px' }}
    >
      <div
        className="relative rounded-[34px] overflow-hidden max-w-[1200px] mx-auto text-white"
        style={{
          background: 'linear-gradient(150deg,#00601B 0%,#009028 52%,#047d24 100%)',
          padding: 'clamp(34px,5vw,64px)',
        }}
      >
        {/* Glow orb */}
        <div
          className="absolute -top-[90px] -right-[60px] w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle,rgba(31,215,92,0.55),transparent 65%)',
            filter: 'blur(10px)',
          }}
          aria-hidden="true"
        />

        <div
          className="relative flex flex-wrap items-center"
          style={{ gap: 'clamp(28px,4vw,56px)' }}
        >
          {/* Left */}
          <div className="flex-[1_1_420px] min-w-[300px]">
            <span className="inline-flex items-center font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-pale bg-white/[0.12] px-[14px] py-[7px] rounded-chip">
              {eyebrow}
            </span>

            <h2
              className="font-display font-extrabold text-white tracking-[-0.025em] leading-[1.04] mt-[18px]"
              style={{ fontSize: 'clamp(30px,4.4vw,52px)' }}
            >
              {heading}
            </h2>

            <p
              className="text-green-muted leading-[1.6] mt-[16px] max-w-[34em]"
              style={{ fontSize: 'clamp(15.5px,1.4vw,18px)' }}
            >
              {body}
            </p>

            <div className="flex flex-wrap gap-[14px] mt-[28px]">
              {points.map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-[10px] bg-white/[0.1] border border-white/[0.18] px-[16px] py-[11px] rounded-[14px]"
                >
                  <span className="text-[18px]">{icon}</span>
                  <span className="font-semibold text-[14px]">{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/#quote"
              className="inline-flex items-center gap-[9px] mt-[30px] bg-white text-green-dark font-bold text-[15.5px] px-[26px] py-[15px] rounded-chip no-underline shadow-[0_14px_30px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:shadow-[0_20px_38px_-12px_rgba(0,0,0,0.5)] transition-all"
            >
              Get a PDR quote <span>&#8594;</span>
            </Link>
          </div>

          {/* Right */}
          <div className="flex-[0_1_380px] min-w-[280px] w-full">
            <div className="grid grid-cols-3 gap-[14px]">
              {steps.map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="bg-white/[0.96] text-neutral-ink rounded-[18px] p-[18px_14px] text-center"
                >
                  <div className="font-display font-extrabold text-[26px] text-green-primary">{num}</div>
                  <div className="font-bold text-[14px] mt-1.5">{title}</div>
                  <div className="text-[12px] text-neutral-muted mt-1 leading-[1.4]">{desc}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-[14px] mt-[14px] bg-white/[0.1] border border-white/[0.18] rounded-[18px] p-[16px_18px]">
              <span className="font-display font-extrabold text-[34px] text-white whitespace-nowrap">
                {timeStat.value}
              </span>
              <span className="text-[13.5px] text-green-muted leading-[1.4]">{timeStat.label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
