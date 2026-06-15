'use client'
// TODO: full multi-step implementation in commit 6
import { QUOTE_FORM } from '@/lib/content'

export function QuoteForm() {
  return (
    <div className="bg-white border border-neutral-border rounded-card shadow-card overflow-hidden">
      <div className="px-7 py-5 border-b border-green-bg flex items-center gap-3">
        <span className="w-11 h-11 rounded-badge bg-green-bg flex items-center justify-center text-[22px] shrink-0">
          📷
        </span>
        <div>
          <div className="font-display font-bold text-[19px] tracking-tight">{QUOTE_FORM.title}</div>
          <div className="text-[13px] text-neutral-muted mt-0.5">{QUOTE_FORM.sub}</div>
        </div>
      </div>
      <div className="px-7 py-8 text-center text-neutral-subtle text-sm">
        Form loading&hellip;
      </div>
    </div>
  )
}
