import Link from 'next/link'
import { Camera, ArrowRight } from 'lucide-react'

interface Props {
  href?:      string
  className?: string
}

export function QuoteButton({ href = '/free-quote/', className = '' }: Props) {
  return (
    <Link href={href} className={`quote-btn group ${className}`}>

      {/* Camera in solid black circle */}
      <span
        className="shrink-0 flex items-center justify-center"
        style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0E120E' }}
        aria-hidden="true"
      >
        <Camera size={16} color="white" strokeWidth={2} />
      </span>

      {/* Two-line text stack */}
      <span className="flex flex-col items-start gap-[3px]">
        <span
          className="font-body font-semibold uppercase leading-none"
          style={{ fontSize: '10px', letterSpacing: '0.12em' }}
        >
          FREE · NO OBLIGATION
        </span>
        <span className="font-body font-bold leading-none" style={{ fontSize: '17px' }}>
          Get free quote
        </span>
      </span>

      {/* Trailing arrow — nudges right on hover, disabled under reduced-motion */}
      <ArrowRight
        size={18}
        strokeWidth={1.5}
        aria-hidden="true"
        className="shrink-0 transition-transform motion-safe:group-hover:translate-x-1"
      />

    </Link>
  )
}
