// Barrel — keeps the '@/lib/content' import path stable after the split into modules.
// Nothing downstream changes its imports.
//
// core.ts        — existing shared content: BUSINESS, STATS, SERVICES, homepage sections,
//                  nav, mega-menus, footer, forms. Also holds the FOLDED legacy exports that
//                  are still live or feed routes awaiting rebuild:
//                    • REVIEWS     → homepage TestimonialsSection (live) + /reviews stub
//                    • QUOTE_FORM  → /free-quote QuoteForm (live)
//                    • PDR_PAGE / PDR_SECTION / ABOUT → feed /paintless-dent-repair-pdr,
//                      /paintless-dent-repair, /faqs, /about-us — retire when rebuilt from the doc.
// types.ts       — shared content types for the data-driven page layer.
// services-pages — SERVICE_PAGES: the 7 service detail pages (from the copy doc).
// pages.ts       — PAGES: the 9 standalone inner pages (from the copy doc).
// blog.ts        — BLOG: landing + 5 posts (from the copy doc).
export * from './core'
export * from './types'
export * from './services-pages'
export * from './pages'
export * from './blog'
