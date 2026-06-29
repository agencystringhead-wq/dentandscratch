import { Check } from 'lucide-react'
import type { ContentBlock } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

// Renders a Page/Service ContentBlock[] in the shared prose style (h2 → body → list → outro).
export function ContentBlocks({ blocks }: { blocks: readonly ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <AnimateIn key={block.h2} delay={i === 0 ? 0 : 0.04}>
          <div className={i > 0 ? 'mt-14' : ''}>
            <h2 className="font-display font-bold text-neutral-ink" style={{ fontSize: 'clamp(24px,3vw,34px)', lineHeight: '1.2' }}>
              {block.h2}
            </h2>
            {block.body?.map((p, j) => (
              <p key={j} className="font-body font-medium text-[17px] text-neutral-muted leading-relaxed mt-4">
                {p}
              </p>
            ))}
            {block.list && (
              <ul className="flex flex-col gap-3 mt-5 list-none p-0 m-0">
                {block.list.map((li) => (
                  <li key={li} className="flex items-start gap-3 font-body font-medium text-[17px] text-neutral-ink leading-relaxed">
                    <Check size={20} className="text-green-primary shrink-0 mt-1" aria-hidden="true" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
            {block.outro?.map((p, j) => (
              <p key={j} className="font-body font-medium text-[17px] text-neutral-muted leading-relaxed mt-4">
                {p}
              </p>
            ))}
          </div>
        </AnimateIn>
      ))}
    </>
  )
}
