'use client'
import { useState } from 'react'
import Image from 'next/image'

// Overlapping ~40px circular avatars with a white ring. Missing files fall back
// to a neutral grey circle, so the layout never breaks before real photos exist.
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
      className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-light border-2 border-white shrink-0"
      style={{ marginLeft: first ? 0 : '-10px' }}
    >
      {ok && (
        <Image
          src={src}
          alt=""
          width={40}
          height={40}
          className="w-full h-full object-cover"
          onError={() => setOk(false)}
        />
      )}
    </span>
  )
}
