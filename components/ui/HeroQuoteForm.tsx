'use client'
import { useState, useRef } from 'react'
import { Camera, Check } from 'lucide-react'
import { HERO_FORM, BUSINESS } from '@/lib/content'

const GRADIENT = 'linear-gradient(135deg, #00A82E 0%, #009028 50%, #007A22 100%)'

type FieldKey = (typeof HERO_FORM.fields)[number]['key'] | 'message'
type Values = Record<FieldKey, string>

const INITIAL: Values = {
  name: '', phone: '', email: '', vehicle: '', address: '', postcode: '', message: '',
}

function validate(v: Values): Partial<Record<FieldKey, boolean>> {
  const errs: Partial<Record<FieldKey, boolean>> = {}
  if (!v.name.trim())  errs.name  = true
  if (!/^04\d{8}$/.test(v.phone.replace(/\s/g, ''))) errs.phone = true
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email.trim())) errs.email = true
  if (!/^\d{4}$/.test(v.postcode.trim())) errs.postcode = true
  return errs
}

export function HeroQuoteForm() {
  const [values, setValues] = useState<Values>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<FieldKey, boolean>>>({})
  const [photos, setPhotos] = useState<File[]>([])
  const [dragging, setDragging] = useState(false)
  const [sent, setSent] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const setField = (key: FieldKey, val: string) => {
    setValues((v) => ({ ...v, [key]: val }))
    setErrors((e) => (e[key] ? { ...e, [key]: false } : e))
  }

  const addPhotos = (files: FileList | null) => {
    if (!files) return
    setPhotos((p) => [...p, ...Array.from(files)].slice(0, 6))
  }
  const removePhoto = (i: number) => setPhotos((p) => p.filter((_, idx) => idx !== i))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(values)
    if (Object.values(errs).some(Boolean)) { setErrors(errs); return }
    // TODO: wire endpoint — POST field values + photos to the quote API.
    // Photos are held in state only; nothing is uploaded yet.
    setSent(true)
  }

  if (sent) {
    const firstName = values.name.trim().split(' ')[0] || 'there'
    return (
      <div className="relative overflow-hidden p-8 lg:p-10 text-white" style={{ background: GRADIENT }}>
        <NotchCorner />
        <div className="flex flex-col items-center text-center py-8">
          <span className="w-16 h-16 flex items-center justify-center bg-white/15 mb-5" style={{ borderRadius: '6px' }}>
            <Check size={32} strokeWidth={2.5} />
          </span>
          <p className="font-display font-bold text-[26px] leading-tight">Thanks {firstName}!</p>
          <p className="font-body font-normal text-[15px] text-white/85 leading-relaxed max-w-[28em] mt-3">
            Diarmuid has your details{photos.length ? ` and ${photos.length} ${photos.length === 1 ? 'photo' : 'photos'}` : ''}. He&apos;ll text you a free quote shortly. Anything urgent, give him a bell on {BUSINESS.phone}.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="relative overflow-hidden p-7 lg:p-9 text-white"
      style={{ background: GRADIENT }}
    >
      <NotchCorner />

      <h2 className="font-display font-bold leading-[1.1]" style={{ fontSize: 'clamp(30px,3.4vw,40px)' }}>
        {HERO_FORM.heading}
      </h2>
      <p className="font-body font-normal text-[15px] text-white/85 leading-relaxed mt-3 max-w-[34em]">
        {HERO_FORM.sub}
      </p>

      <div className="flex flex-col gap-3 mt-7">
        {HERO_FORM.fields.map((f) => (
          <input
            key={f.key}
            type={f.type}
            inputMode={f.inputMode as React.HTMLAttributes<HTMLInputElement>['inputMode']}
            aria-label={f.placeholder}
            aria-invalid={errors[f.key as FieldKey] ? true : undefined}
            placeholder={f.required ? `${f.placeholder}*` : f.placeholder}
            value={values[f.key as FieldKey]}
            onChange={(e) => setField(f.key as FieldKey, e.target.value)}
            className={inputClass(!!errors[f.key as FieldKey])}
            style={{ borderRadius: '6px' }}
          />
        ))}

        <textarea
          rows={2}
          aria-label={HERO_FORM.messagePlaceholder}
          placeholder={HERO_FORM.messagePlaceholder}
          value={values.message}
          onChange={(e) => setField('message', e.target.value)}
          className={`${inputClass(false)} resize-y`}
          style={{ borderRadius: '6px' }}
        />

        {/* Drag-and-drop photo zone — state only, no upload yet */}
        <label
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); addPhotos(e.dataTransfer.files) }}
          onClick={() => fileRef.current?.click()}
          className={`flex flex-col items-center justify-center text-center gap-2 px-5 py-7 cursor-pointer border-2 border-dashed transition-colors ${
            dragging ? 'border-white bg-white/15' : 'border-white/35 bg-white/5 hover:bg-white/10'
          }`}
          style={{ borderRadius: '6px' }}
        >
          <Camera size={26} className="text-white/80" />
          <span className="font-body font-medium text-[14px] text-white">{HERO_FORM.uploadText}</span>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => addPhotos(e.target.files)}
          />
        </label>

        {photos.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {photos.map((photo, i) => (
              <PhotoThumb key={i} file={photo} onRemove={() => removePhoto(i)} />
            ))}
          </div>
        )}

        <p className="font-body font-normal text-[13px] text-white/75 leading-relaxed">
          {HERO_FORM.uploadNote}
        </p>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-white text-neutral-ink font-body font-bold text-[16px] tracking-wide underline underline-offset-4 py-4 px-6 cursor-pointer hover:bg-neutral-page transition-colors"
        style={{ borderRadius: '6px' }}
      >
        {HERO_FORM.submitLabel}
      </button>

      <p className="font-body font-normal text-[13px] text-white/80 text-right mt-3">
        {HERO_FORM.replyNote}
      </p>
    </form>
  )
}

// White stepped/notched pixel accent in the top-right corner
function NotchCorner() {
  return (
    <div className="absolute top-0 right-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 right-0 w-7 h-7 bg-white" />
      <div className="absolute top-7 right-7 w-5 h-5 bg-white" />
      <div className="absolute top-[48px] right-[48px] w-3.5 h-3.5 bg-white" />
    </div>
  )
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3.5 bg-white/10 font-body font-medium text-[15px] text-white placeholder:text-white/65 border-2 outline-none transition-colors focus:bg-white/15 focus:border-white/80 ${
    hasError ? 'border-error' : 'border-white/25'
  }`
}

function PhotoThumb({ file, onRemove }: { file: File; onRemove: () => void }) {
  const url = URL.createObjectURL(file)
  return (
    <div className="relative w-[64px] h-[64px] overflow-hidden border border-white/30 shrink-0" style={{ borderRadius: '6px' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="" className="w-full h-full object-cover block" onLoad={() => URL.revokeObjectURL(url)} />
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onRemove() }}
        className="absolute top-1 right-1 w-[20px] h-[20px] bg-neutral-ink/70 text-white text-[11px] flex items-center justify-center border-none p-0 cursor-pointer leading-none"
        aria-label="Remove photo"
      >
        ✕
      </button>
    </div>
  )
}
