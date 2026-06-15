import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paintless Dent Repair | Dent & Scratch Direct',
  description:
    'Paintless Dent Repair (PDR) in South East Melbourne. No filler, no respray — factory paint kept. Diarmuid comes to you. Free quotes, same day.',
}

export default function PdrPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Paintless Dent Repair</h1>
      <p className="mt-4 text-neutral-500">Full page content coming in a later pass.</p>
    </main>
  )
}
