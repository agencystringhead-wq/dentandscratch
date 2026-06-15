'use client'
import Link from 'next/link'
import Image from 'next/image'
import {
  CircleDot, Paintbrush, Car, CloudHail, Slash, Droplets, Layers, Disc3,
  type LucideIcon,
} from 'lucide-react'
import { SERVICES_NAV, SERVICES_MEGA, SERVICE_AREAS_MEGA } from '@/lib/content'
import { QuoteButton } from '@/components/ui/QuoteButton'

const SERVICE_ICONS: Record<string, LucideIcon> = {
  CircleDot, Paintbrush, Car, CloudHail, Slash, Droplets, Layers, Disc3,
}

interface PanelProps {
  id:           string
  onItemClick:  () => void
  onMouseEnter: () => void
}

const PANEL_CLASS =
  'mega-panel absolute left-0 right-0 top-full z-50 bg-neutral-page border border-neutral-border'
const PANEL_SHADOW = { boxShadow: '0 14px 30px rgba(31,31,31,0.08)' }

// Nesta-style feature card: image with a caption label overlaid bottom-left
function FeatureImage({
  src, alt, caption, ratio = '4 / 3',
}: { src: string; alt: string; caption: string; ratio?: string }) {
  return (
    <div
      className="relative overflow-hidden border border-neutral-border"
      style={{ aspectRatio: ratio }}
    >
      <Image src={src} alt={alt} fill sizes="320px" className="object-cover" />
      <span className="absolute left-3 bottom-3 right-3 bg-neutral-ink text-white font-body font-medium text-[11px] tracking-eyebrow uppercase px-2 py-1">
        {caption}
      </span>
    </div>
  )
}

export function ServicesMega({ id, onItemClick, onMouseEnter }: PanelProps) {
  return (
    <div
      id={id}
      role="region"
      aria-label="Services menu"
      onMouseEnter={onMouseEnter}
      className={PANEL_CLASS}
      style={PANEL_SHADOW}
    >
      <div className="flex gap-8 px-8 py-8">

        {/* Rich service grid — PDR featured first */}
        <div className="flex-1 grid grid-cols-3 gap-x-6 gap-y-1">
          {SERVICES_NAV.map((s) => {
            const Icon     = SERVICE_ICONS[s.icon]
            const featured = (s as { featured?: boolean }).featured === true
            return (
              <Link
                key={s.href}
                href={s.href}
                onClick={onItemClick}
                className="group flex items-start gap-3 p-3 no-underline hover:bg-green-bg transition-colors"
              >
                <span
                  className={`shrink-0 w-9 h-9 flex items-center justify-center ${
                    featured ? 'bg-green-primary' : 'bg-neutral-alt border border-neutral-border'
                  }`}
                  style={{ borderRadius: '5px' }}
                >
                  {Icon && <Icon size={18} className={featured ? 'text-white' : 'text-neutral-link'} />}
                </span>
                <span className="flex flex-col">
                  <span className="font-body font-bold text-[14px] text-neutral-ink leading-tight">
                    {s.label}
                  </span>
                  <span className="font-body font-normal text-[13px] text-neutral-muted leading-snug mt-1">
                    {s.desc}
                  </span>
                </span>
              </Link>
            )
          })}
        </div>

        {/* Featured block — image + prompt + quote CTA */}
        <aside className="w-[320px] shrink-0 border-l border-neutral-border pl-8 flex flex-col">
          <FeatureImage
            src={SERVICES_MEGA.feature.image}
            alt={SERVICES_MEGA.feature.alt}
            caption={SERVICES_MEGA.feature.caption}
            ratio="16 / 9"
          />
          <p
            className="font-display font-bold text-neutral-ink mt-4"
            style={{ fontSize: '20px', lineHeight: '1.2' }}
          >
            {SERVICES_MEGA.prompt}
          </p>
          <p className="font-body font-normal text-[14px] text-neutral-muted leading-relaxed mt-2">
            {SERVICES_MEGA.promptSub}
          </p>
          <div className="mt-4">
            <QuoteButton />
          </div>
          <Link
            href={SERVICES_MEGA.viewAllHref}
            onClick={onItemClick}
            className="mt-4 font-body font-medium text-[14px] text-green-primary hover:text-green-hover transition-colors no-underline"
          >
            {SERVICES_MEGA.viewAllLabel}
          </Link>
        </aside>

      </div>
    </div>
  )
}

export function ServiceAreasMega({ id, onItemClick, onMouseEnter }: PanelProps) {
  return (
    <div
      id={id}
      role="region"
      aria-label="Service areas menu"
      onMouseEnter={onMouseEnter}
      className={PANEL_CLASS}
      style={PANEL_SHADOW}
    >
      <div className="flex gap-8 px-8 py-8">

        {/* Suburbs grouped by council zone */}
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-x-6 gap-y-6">
            {SERVICE_AREAS_MEGA.zones.map((z) => (
              <div key={z.zone}>
                <Link
                  href={z.href}
                  onClick={onItemClick}
                  className="font-body font-bold text-[14px] text-neutral-ink no-underline hover:text-green-primary transition-colors"
                >
                  {z.zone}
                </Link>
                <ul className="mt-3 flex flex-col gap-2 list-none p-0 m-0">
                  {z.suburbs.map((sub) => (
                    <li key={sub}>
                      <Link
                        href={z.href}
                        onClick={onItemClick}
                        className="font-body font-normal text-[13px] text-neutral-muted no-underline hover:text-neutral-ink transition-colors"
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* View all */}
          <div className="mt-8 pt-6 border-t border-neutral-border">
            <Link
              href={SERVICE_AREAS_MEGA.viewAllHref}
              onClick={onItemClick}
              className="font-body font-medium text-[14px] text-green-primary hover:text-green-hover transition-colors no-underline"
            >
              {SERVICE_AREAS_MEGA.viewAllLabel}
            </Link>
          </div>
        </div>

        {/* Featured block — on-location image */}
        <aside className="w-[300px] shrink-0 border-l border-neutral-border pl-8 flex flex-col">
          <span className="font-body font-medium text-[12px] tracking-eyebrow uppercase text-neutral-muted mb-3">
            {SERVICE_AREAS_MEGA.feature.eyebrow}
          </span>
          <FeatureImage
            src={SERVICE_AREAS_MEGA.feature.image}
            alt={SERVICE_AREAS_MEGA.feature.alt}
            caption={SERVICE_AREAS_MEGA.feature.caption}
          />
          <p className="font-body font-normal text-[14px] text-neutral-muted leading-relaxed mt-4">
            {SERVICE_AREAS_MEGA.feature.lead}
          </p>
        </aside>

      </div>
    </div>
  )
}
