'use client'
// TODO: full draggable pointer-event implementation in commit 7

interface Props {
  category: string
}

export function BeforeAfterSlider({ category }: Props) {
  return (
    <div className="bg-neutral-page border border-neutral-border rounded-card p-[18px] shadow-slider">
      <div className="aspect-[16/10] rounded-[18px] bg-neutral-ink flex items-center justify-center text-neutral-subtle/50 text-sm">
        Before / after — {category}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-4 px-2 pb-1">
        <div>
          <div className="font-display font-bold text-[18px] tracking-tight">Paintless Dent Repair</div>
          <div className="text-[13.5px] text-neutral-muted mt-0.5">Door ding massaged out, factory paint untouched.</div>
        </div>
        <span className="font-label font-semibold text-[11.5px] uppercase tracking-[0.1em] text-neutral-subtle">
          Demo · swap for real pairs
        </span>
      </div>
    </div>
  )
}
