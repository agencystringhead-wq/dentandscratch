'use client'
import { useState, useRef, useCallback } from 'react'
import { BEFORE_AFTER_CATS } from '@/lib/content'

// PLACEHOLDER — swap for real before/after image pairs in lib/images.ts before go-live.
// The CSS damage/scratch overlays below simulate the "before" state for demo purposes.

export function BeforeAfterSlider() {
  const [category, setCategory] = useState('pdr')
  const [reveal,   setReveal]   = useState(52)
  const [dragging, setDragging] = useState(false)
  const viewportRef             = useRef<HTMLDivElement>(null)

  const currentCat = BEFORE_AFTER_CATS.find(c => c.key === category) ?? BEFORE_AFTER_CATS[0]

  const updateReveal = useCallback((clientX: number) => {
    const el = viewportRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    setReveal(Math.max(2, Math.min(98, ((clientX - left) / width) * 100)))
  }, [])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    try { e.currentTarget.setPointerCapture(e.pointerId) } catch { /* ignore */ }
    setDragging(true)
    updateReveal(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragging) updateReveal(e.clientX)
  }
  const onPointerUp = () => setDragging(false)

  const switchCat = (key: string) => { setCategory(key); setReveal(52) }

  const vpWidth = viewportRef.current?.offsetWidth

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-[10px] justify-center mb-6">
        {BEFORE_AFTER_CATS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => switchCat(key)}
            className={`px-[20px] py-[11px] rounded-chip font-semibold text-[14px] border-[1.5px] cursor-pointer transition-all duration-150 ${
              category === key
                ? 'border-green-primary bg-green-primary text-white'
                : 'border-neutral-border bg-white text-neutral-muted hover:shadow-[0_8px_18px_rgba(0,144,40,0.22)] hover:-translate-y-px'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Slider card */}
      <div className="bg-neutral-page border border-neutral-border rounded-card p-[18px] shadow-slider">
        {/* Viewport */}
        <div
          ref={viewportRef}
          className="relative w-full rounded-[18px] overflow-hidden cursor-ew-resize select-none bg-neutral-ink touch-none"
          style={{ aspectRatio: '16 / 10' }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {/* After layer — "clean" panel placeholder */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg,#1a3d21 0%,#2d6b38 60%,#1e5028 100%)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs font-mono tracking-wide">
              After &middot; {currentCat.title}
            </div>
          </div>

          {/* Before layer — "damaged" panel placeholder (clipped) */}
          <div
            className="absolute top-0 bottom-0 left-0 overflow-hidden"
            style={{ width: `${reveal}%` }}
          >
            {/* Dark base — expands to full viewport width so gradient doesn't clip */}
            <div
              className="absolute top-0 bottom-0 left-0"
              style={{
                width: vpWidth ? `${vpWidth}px` : '100vw',
                background: 'linear-gradient(135deg,#0c2110 0%,#1a3d21 60%,#102918 100%)',
                filter: 'saturate(0.5) brightness(0.75) contrast(1.1)',
              }}
            />
            {/* Damage radial shadows */}
            <div
              className="absolute top-0 bottom-0 left-0"
              style={{
                width: vpWidth ? `${vpWidth}px` : '100vw',
                backgroundImage: [
                  'radial-gradient(circle at 32% 38%,rgba(0,0,0,0.4),transparent 16%)',
                  'radial-gradient(circle at 58% 30%,rgba(0,0,0,0.32),transparent 13%)',
                  'radial-gradient(circle at 46% 62%,rgba(0,0,0,0.36),transparent 15%)',
                  'radial-gradient(circle at 70% 64%,rgba(0,0,0,0.28),transparent 12%)',
                  'radial-gradient(circle at 24% 70%,rgba(0,0,0,0.3),transparent 12%)',
                ].join(','),
                mixBlendMode: 'multiply',
              }}
            />
            {/* Scratch highlights */}
            <div
              className="absolute top-0 bottom-0 left-0"
              style={{
                width: vpWidth ? `${vpWidth}px` : '100vw',
                backgroundImage: [
                  'linear-gradient(72deg,transparent 47%,rgba(255,255,255,0.35) 48%,rgba(255,255,255,0.35) 49%,transparent 50%)',
                  'linear-gradient(64deg,transparent 61%,rgba(255,255,255,0.28) 62%,transparent 63%)',
                ].join(','),
              }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center text-white/20 text-xs font-mono tracking-wide"
              style={{ width: vpWidth ? `${vpWidth}px` : '100vw' }}
            >
              Before &middot; {currentCat.title}
            </div>
          </div>

          {/* Before / After labels */}
          <span className="absolute top-3.5 left-3.5 font-label font-bold text-[12px] tracking-[0.14em] uppercase text-white bg-neutral-ink/55 px-3 py-1.5 rounded-chip pointer-events-none">
            Before
          </span>
          <span className="absolute top-3.5 right-3.5 font-label font-bold text-[12px] tracking-[0.14em] uppercase text-green-dark bg-white/90 px-3 py-1.5 rounded-chip pointer-events-none">
            After
          </span>

          {/* Drag handle */}
          <div
            className="absolute top-0 bottom-0 w-0 pointer-events-none"
            style={{ left: `${reveal}%` }}
          >
            <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]" />
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.3)] flex items-center justify-center text-green-primary text-[18px] font-bold">
              &#8596;
            </div>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-2.5 items-center justify-between pt-4 px-2 pb-1">
          <div>
            <div className="font-display font-bold text-[18px] tracking-tight">{currentCat.title}</div>
            <div className="text-[13.5px] text-neutral-muted mt-0.5">{currentCat.blurb}</div>
          </div>
          <span className="font-label font-semibold text-[11.5px] uppercase tracking-[0.1em] text-neutral-subtle">
            Demo &middot; swap for real pairs
          </span>
        </div>
      </div>
    </>
  )
}
