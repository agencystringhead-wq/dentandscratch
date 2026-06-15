import { HERO } from '@/lib/content'
import { QuoteForm } from '@/components/ui/QuoteForm'

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Watercolour gradient background */}
      <div
        className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
        style={{ height: 'clamp(440px,50vw,640px)' }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg,#e8f5ea 0%,#d4edda 30%,#f0f7f0 60%,#fff 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.05) 32%,rgba(255,255,255,0.7) 78%,#ffffff 100%)' }}
        />
      </div>

      {/* Hero top content */}
      <div
        className="relative z-[2] max-w-[1180px] mx-auto px-[26px]"
        style={{ paddingTop: 'clamp(48px,6.5vw,88px)' }}
      >
        <div
          className="flex flex-wrap items-start"
          style={{ gap: 'clamp(32px,5vw,88px)' }}
        >
          {/* Left — headline + checks */}
          <div className="flex-[1_1_480px] min-w-[300px]">
            <h1
              className="font-display font-extrabold tracking-[-0.03em] leading-[1.02] m-0 text-neutral-ink"
              style={{ fontSize: 'clamp(40px,5.6vw,74px)' }}
            >
              {HERO.heading}
              <br />
              <span className="text-green-primary underline decoration-[6px] underline-offset-[8px]">
                {HERO.accentLine}
              </span>
            </h1>

            <div
              className="flex flex-wrap"
              style={{ gap: '16px 40px', marginTop: 'clamp(32px,4vw,52px)' }}
            >
              {HERO.checks.map((check) => (
                <span
                  key={check}
                  className="inline-flex items-center gap-[11px] text-[16px] font-semibold text-neutral-ink whitespace-nowrap"
                >
                  <span className="w-6 h-6 rounded-full bg-green-bg text-green-primary inline-flex items-center justify-center text-[13px] shrink-0">
                    ✓
                  </span>
                  {check}
                </span>
              ))}
            </div>
          </div>

          {/* Right — para + quote form */}
          <div
            className="flex-[0_1_540px] min-w-[320px] ml-auto flex flex-col"
            style={{ gap: 'clamp(26px,3vw,38px)' }}
          >
            <p
              className="m-0 text-[#4a524a] leading-[1.65] max-w-[32em]"
              style={{
                fontSize: 'clamp(15px,1.3vw,17px)',
                marginTop: 'clamp(8px,1.2vw,14px)',
              }}
            >
              {HERO.para}
            </p>

            {/* Form floats over the banner below via negative margin */}
            <div
              id="quote"
              className="relative z-[5]"
              style={{ marginBottom: 'clamp(-360px,-26vw,-240px)' }}
            >
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>

      {/* Hero banner — placeholder until real photo supplied */}
      <div
        className="relative z-[1] w-full overflow-hidden"
        style={{
          height: 'clamp(440px,46vw,620px)',
          background: 'linear-gradient(135deg,#1a3d21 0%,#2d6b38 40%,#1e5028 100%)',
        }}
      >
        {/* PLACEHOLDER — swap for real photo before go-live */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white/40 text-[13px] tracking-[0.1em] text-center"
          aria-hidden="true"
        >
          <span className="text-[48px]">🚐</span>
          <div>Diarmuid &amp; his mobile repair van</div>
        </div>

        {/* Overlay fades */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(270deg,rgba(244,246,244,0.85) 0%,rgba(244,246,244,0.4) 28%,rgba(244,246,244,0) 52%)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[110px]"
          style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0))' }}
        />
      </div>
    </section>
  )
}
