import type { Metadata } from 'next'

// TODO: Remove noindex once page has real content
export const metadata: Metadata = {
  title: 'Blog | Dent & Scratch Direct',
  description: 'TODO: meta description — car care tips and repair guides from Dent & Scratch Direct.',
  robots: { index: false, follow: true },
}

export default function BlogPage() {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto px-5 py-24">
      <span className="font-label font-semibold text-[13px] tracking-[0.2em] uppercase text-green-primary">
        Tips &amp; guides
      </span>
      <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] tracking-tight text-neutral-ink mt-3">
        Blog
      </h1>
      {/* TODO: blog post listing — cards with title, date, excerpt, cover image */}
      {/* TODO: decide CMS approach (MDX files, headless CMS, or static posts in content.ts) */}
      <p className="text-neutral-muted mt-6 text-[17px]">Posts coming soon.</p>
    </main>
  )
}
