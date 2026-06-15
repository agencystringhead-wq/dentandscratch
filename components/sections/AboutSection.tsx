import { ABOUT } from '@/lib/content'

export function AboutSection() {
  const { eyebrow, heading, paras, stats, signature, nameplate } = ABOUT

  return (
    <section
      id="owner"
      className="scroll-mt-[84px] bg-green-bg"
      style={{ padding: 'clamp(48px,7vw,96px) 22px' }}
    >
      <div
        className="max-w-[1100px] mx-auto flex flex-wrap items-center"
        style={{ gap: 'clamp(28px,4vw,56px)' }}
      >
        {/* Photo */}
        <div
          className="flex-[0_1_400px] min-w-[280px] w-full relative rounded-[26px] overflow-hidden bg-neutral-ink"
          style={{
            aspectRatio: '4 / 5',
            boxShadow: '0 30px 60px -30px rgba(0,96,27,0.55)',
          }}
        >
          {/* PLACEHOLDER — swap for real photo before go-live */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 text-white/55 font-mono text-[12px] tracking-[0.08em] text-center p-5"
            style={{
              background: 'repeating-linear-gradient(135deg,#0e3b1e,#0e3b1e 16px,#0d3319 16px,#0d3319 32px)',
            }}
          >
            <span className="text-[30px]">📷</span>
            <div>photo: Diarmuid on the job</div>
          </div>

          {/* Nameplate overlay */}
          <div className="absolute left-4 bottom-4 right-4 bg-white/[0.95] backdrop-blur-[6px] rounded-[16px] p-[14px_16px] flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-[12px] flex items-center justify-center font-display font-extrabold text-[18px] text-white shrink-0"
              style={{ background: 'linear-gradient(150deg,#1FD75C,#009028)' }}
            >
              {nameplate.initials}
            </div>
            <div>
              <div className="font-bold text-[15px]">{nameplate.name}</div>
              <div className="text-[12.5px] text-neutral-muted">{nameplate.title}</div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex-[1_1_380px] min-w-[300px]">
          <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
            {eyebrow}
          </span>

          <h2
            className="font-display font-extrabold tracking-[-0.025em] leading-[1.06] mt-3"
            style={{ fontSize: 'clamp(28px,4vw,46px)' }}
          >
            {heading}
          </h2>

          {paras.map((p, i) => (
            <p
              key={i}
              className="leading-[1.65] text-[#2c3a2f] mt-[18px]"
              style={{ fontSize: 'clamp(15.5px,1.4vw,17.5px)' }}
            >
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-[22px] mt-[24px]">
            {stats.map(({ value, label }) => (
              <div key={value}>
                <div className="font-display font-extrabold text-[32px] text-green-primary">{value}</div>
                <div className="text-[13px] text-neutral-muted">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-[26px] font-display text-[26px] text-green-dark italic font-semibold">
            {signature}
          </div>
        </div>
      </div>
    </section>
  )
}
