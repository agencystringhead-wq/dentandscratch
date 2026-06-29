// Shared content types for the data-driven page layer.
// Pages are stored as data here and rendered by template components (built later).

export type PageMeta = { title: string; description: string }

export type FAQ = { q: string; a: string }

// A generic content section: an H2, leading paragraphs, an optional bullet list,
// and optional trailing paragraphs (the doc uses lead-para → list → outro-para in places).
export type ContentBlock = { h2: string; body?: string[]; list?: string[]; outro?: string[] }

export type CTA = { label: string; href: string }

// A service detail page (the 7 services share this shape → one template renders all).
export type ServicePage = {
  key:    string
  meta:   PageMeta
  h1:     string
  intro:  string[]
  blocks: ContentBlock[]
  faqs:   FAQ[]
  cta:    string          // closing CTA line
  schema: string          // schema recommendation from the copy doc
}

// A standalone inner page (about, service-areas, reviews, our-work, contact, etc.).
export type Page = {
  meta:    PageMeta
  h1:      string
  intro:   string[]
  blocks:  ContentBlock[]
  faqs?:   FAQ[]
  cta:     string
  schema:  string
}

// A blog post. `date` is intentionally 'TODO' until the client supplies real publish dates;
// posts render in array order (doc order, post 1–5) until then.
export type BlogPost = {
  slug:   string
  meta:   PageMeta
  h1:     string
  date:   string          // TODO: real publish date from client — do not fabricate
  intro:  string[]        // lead paragraphs before the first H2
  blocks: ContentBlock[]
  cta:    string
}
