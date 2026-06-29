import type { Metadata } from 'next'
import type { PageMeta } from '@/lib/content'

// Maps a content PageMeta + route path to Next Metadata, with a per-page canonical.
// metadataBase (set in app/layout.tsx) resolves `canonical` to the www domain.
export function toMetadata(meta: PageMeta, path: string): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path },
  }
}
