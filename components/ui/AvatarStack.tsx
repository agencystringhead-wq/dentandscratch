'use client'
import { useState } from 'react'

// Overlapping circular avatars. Missing files fall back to a neutral grey circle,
// so the layout never breaks before real photos are supplied.
export function AvatarStack({ srcs }: { srcs: readonly string[] }) {
  return (
    <span className="flex items-center" aria-hidden="true">
      {srcs.map((src, i) => (
        <Avatar key={src} src={src} first={i === 0} />
      ))}
    </span>
  )
}

function Avatar({ src, first }: { src: string; first: boolean }) {
  const [ok, setOk] = useState(true)
  return (
    <span
      className="relative w-9 h-9 rounded-full overflow-hidden bg-neutral-light border-2 border-neutral-page shrink-0"
      style={{ marginLeft: first ? 0 : '-10px' }}
    >
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover block"
          onError={() => setOk(false)}
        />
      )}
    </span>
  )
}
