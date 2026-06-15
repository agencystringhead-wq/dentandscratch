'use client'
import { useState, useRef } from 'react'
import { Camera, Check } from 'lucide-react'
import { QUOTE_FORM, BUSINESS } from '@/lib/content'

type Step = 0 | 1 | 2

interface Fields {
  name: string
  phone: string
  suburb: string
  vehicle: string
  service: string
  message: string
}

const INITIAL_FIELDS: Fields = {
  name: '', phone: '', suburb: '', vehicle: '', service: 'PDR', message: '',
}

function validateDetails(fields: Fields): Record<string, string> {
  const errs: Record<string, string> = {}
  if (!fields.name.trim())   errs.name   = 'Please enter your name.'
  if (!fields.phone.trim())  errs.phone  = 'Please enter your mobile.'
  else if (!/^04\d{8}$/.test(fields.phone.replace(/\s/g, '')))
    errs.phone = 'Enter a valid Australian mobile (04XX XXX XXX).'
  if (!fields.suburb.trim()) errs.suburb = 'Please enter your suburb.'
  return errs
}

export function QuoteForm() {
  const [step, setStep]       = useState<Step>(0)
  const [fields, setFields]   = useState<Fields>(INITIAL_FIELDS)
  const [photos, setPhotos]   = useState<File[]>([])
  const [errors, setErrors]   = useState<Record<string, string>>({})
  const [sent, setSent]       = useState(false)
  const [successName, setSuccessName] = useState('')
  const [successMsg, setSuccessMsg]   = useState('')
  const fileRef               = useRef<HTMLInputElement>(null)

  const setField = (key: keyof Fields, val: string) =>
    setFields((f) => ({ ...f, [key]: val }))

  const clearError = (key: string) =>
    setErrors((e) => { const n = { ...e }; delete n[key]; return n })

  const addPhotos = (files: FileList | null) => {
    if (!files) return
    setPhotos((p) => [...p, ...Array.from(files)].slice(0, 6))
  }

  const removePhoto = (i: number) =>
    setPhotos((p) => p.filter((_, idx) => idx !== i))

  const goNext = () => {
    if (step === 0) {
      const errs = validateDetails(fields)
      if (Object.keys(errs).length) { setErrors(errs); return }
      setErrors({})
    }
    if (step < 2) setStep((s) => (s + 1) as Step)
  }

  const goBack = () => {
    if (step > 0) setStep((s) => (s - 1) as Step)
  }

  const submit = () => {
    const errs = validateDetails(fields)
    if (Object.keys(errs).length) { setErrors(errs); setStep(0); return }

    const firstName  = fields.name.trim().split(' ')[0]
    const photoCount = photos.length
    const photoLabel = photoCount > 0
      ? `${photoCount} ${photoCount === 1 ? 'photo' : 'photos'}`
      : 'no photos yet'

    // TODO: wire endpoint — POST form data to contact API
    setSuccessName(`Thanks ${firstName}!`)
    setSuccessMsg(
      `Diarmuid has your details and ${photoLabel}. He'll text you a free quote shortly. For anything urgent give him a bell on ${BUSINESS.phone}.`
    )
    setSent(true)
  }

  const reset = () => {
    setStep(0); setFields(INITIAL_FIELDS); setPhotos([]); setErrors({}); setSent(false)
  }

  const primaryLabel = QUOTE_FORM.btnLabels[step]

  return (
    <div className="bg-white border-2 border-neutral-border overflow-hidden">

      {/* Header */}
      <div className="px-7 pt-6 pb-5 border-b border-neutral-border flex items-center gap-3">
        <span
          className="w-11 h-11 flex items-center justify-center bg-green-primary shrink-0"
          style={{ borderRadius: '5px' }}
        >
          <Camera size={22} color="white" />
        </span>
        <div>
          <div className="font-body font-medium text-[18px] text-neutral-ink">{QUOTE_FORM.title}</div>
          <div className="font-body font-medium text-[14px] text-neutral-muted mt-0.5">{QUOTE_FORM.sub}</div>
        </div>
      </div>

      {/* Success state */}
      {sent && (
        <div className="px-7 py-10 text-center">
          <div className="w-[64px] h-[64px] mx-auto mb-5 flex items-center justify-center bg-green-primary">
            <Check size={32} color="white" strokeWidth={2.5} />
          </div>
          <div className="font-body font-medium text-[22px] text-neutral-ink">{successName}</div>
          <p className="font-body font-medium text-[15px] text-neutral-muted leading-relaxed max-w-[30em] mx-auto mt-3">
            {successMsg}
          </p>
          <button
            onClick={reset}
            className="mt-6 font-body font-medium text-[15px] text-neutral-ink px-6 py-3 border-2 border-neutral-border bg-transparent cursor-pointer hover:border-neutral-ink transition-colors"
          >
            Send another
          </button>
        </div>
      )}

      {/* Form body */}
      {!sent && (
        <div className="px-7 pt-6 pb-7">

          {/* Progress */}
          <div className="flex items-center gap-2 mb-6">
            {QUOTE_FORM.steps.map((label, i) => (
              <div key={label} className="flex-1 flex flex-col gap-[6px]">
                <div
                  className="h-1 transition-colors duration-200"
                  style={{ background: i <= step ? '#009028' : '#E7E5DC' }}
                />
                <span
                  className="font-body font-medium text-[11px] uppercase tracking-eyebrow transition-colors duration-200"
                  style={{ color: i === step ? '#009028' : i < step ? '#646464' : '#AFAFAF' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Step 0 — Details */}
          {step === 0 && (
            <div className="flex flex-col gap-4">
              <Field label="Your name" error={errors.name}>
                <input
                  className={inputClass(!!errors.name)}
                  placeholder="e.g. Sarah"
                  value={fields.name}
                  onChange={(e) => { setField('name', e.target.value); clearError('name') }}
                />
              </Field>
              <div className="flex gap-3 flex-wrap">
                <Field label="Mobile" error={errors.phone} className="flex-[1_1_140px]">
                  <input
                    className={inputClass(!!errors.phone)}
                    placeholder="04XX XXX XXX"
                    inputMode="tel"
                    value={fields.phone}
                    onChange={(e) => { setField('phone', e.target.value); clearError('phone') }}
                  />
                </Field>
                <Field label="Suburb" error={errors.suburb} className="flex-[1_1_140px]">
                  <input
                    className={inputClass(!!errors.suburb)}
                    placeholder="e.g. Berwick"
                    value={fields.suburb}
                    onChange={(e) => { setField('suburb', e.target.value); clearError('suburb') }}
                  />
                </Field>
              </div>
            </div>
          )}

          {/* Step 1 — Damage */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <Field label="What needs fixing?">
                <div className="flex flex-wrap gap-2 mt-1">
                  {QUOTE_FORM.serviceChips.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => setField('service', chip)}
                      className={`px-4 py-2.5 font-body font-medium text-[14px] border-2 cursor-pointer transition-colors ${
                        fields.service === chip
                          ? 'border-green-primary bg-green-bg text-green-dark'
                          : 'border-neutral-border bg-white text-neutral-muted hover:border-neutral-ink'
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Car · make, model, year">
                <input
                  className={inputClass(false)}
                  placeholder="e.g. 2019 Mazda CX-5"
                  value={fields.vehicle}
                  onChange={(e) => setField('vehicle', e.target.value)}
                />
              </Field>

              <Field label="Photos of the damage">
                <label
                  className="flex items-center gap-4 border-2 border-dashed border-neutral-border bg-neutral-alt px-5 py-4 cursor-pointer hover:border-green-primary hover:bg-green-bg transition-colors"
                  onClick={() => fileRef.current?.click()}
                >
                  <span
                    className="w-11 h-11 flex items-center justify-center bg-white shrink-0"
                    style={{ borderRadius: '5px' }}
                  >
                    <Camera size={20} className="text-neutral-muted" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-body font-medium text-[14px] text-neutral-ink">Tap to add photos</span>
                    <span className="font-body font-medium text-[13px] text-neutral-muted">Close-up of the damage and the full panel. JPG or PNG.</span>
                  </span>
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
                  <div className="flex flex-wrap gap-2.5 mt-3">
                    {photos.map((photo, i) => (
                      <PhotoThumb key={i} file={photo} onRemove={() => removePhoto(i)} />
                    ))}
                  </div>
                )}
              </Field>
            </div>
          )}

          {/* Step 2 — Review */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <div className="bg-neutral-alt border border-neutral-border px-5 py-4 flex flex-col gap-3">
                {[
                  ['Name',   fields.name    || '—'],
                  ['Mobile', fields.phone   || '—'],
                  ['Suburb', fields.suburb  || '—'],
                  ['Repair', fields.service],
                  ['Car',    fields.vehicle || 'Not specified'],
                  ['Photos', String(photos.length)],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between gap-3">
                    <span className="font-body font-medium text-[14px] text-neutral-muted">{key}</span>
                    <span className="font-body font-medium text-[14px] text-neutral-ink text-right">{val}</span>
                  </div>
                ))}
              </div>
              <Field label="Anything else? (optional)">
                <textarea
                  className={`${inputClass(false)} resize-y`}
                  rows={2}
                  placeholder="When suits for a visit, gate codes, etc."
                  value={fields.message}
                  onChange={(e) => setField('message', e.target.value)}
                />
              </Field>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2.5 mt-6">
            {step > 0 && (
              <button
                onClick={goBack}
                className="flex-none font-body font-medium text-[15px] text-neutral-muted px-5 py-4 bg-white border-2 border-neutral-border cursor-pointer hover:border-neutral-ink transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={step < 2 ? goNext : submit}
              className="flex-1 flex items-center justify-center gap-2 bg-green-primary text-white font-body font-medium text-[16px] px-6 py-4 border-2 border-green-primary cursor-pointer hover:bg-green-hover hover:border-green-hover transition-colors"
            >
              {primaryLabel} →
            </button>
          </div>

          <p className="font-body font-medium text-[12px] text-neutral-light text-center mt-4">
            {QUOTE_FORM.privacy}
          </p>
        </div>
      )}
    </div>
  )
}

function Field({
  label,
  error,
  children,
  className = '',
}: {
  label: string
  error?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label className="block font-body font-medium text-[13px] text-neutral-muted mb-1.5">{label}</label>
      {children}
      {error && <p className="font-body font-medium text-[12px] text-error mt-1">{error}</p>}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 bg-white font-body font-medium text-[15px] text-neutral-ink border-2 outline-none transition-colors focus:border-green-primary ${
    hasError ? 'border-error' : 'border-neutral-border'
  }`
}

function PhotoThumb({ file, onRemove }: { file: File; onRemove: () => void }) {
  const url = URL.createObjectURL(file)
  return (
    <div className="relative w-[76px] h-[76px] overflow-hidden border border-neutral-border bg-neutral-alt shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="" className="w-full h-full object-cover block" onLoad={() => URL.revokeObjectURL(url)} />
      <button
        onClick={onRemove}
        className="absolute top-1 right-1 w-[22px] h-[22px] bg-neutral-ink/70 text-white text-[12px] flex items-center justify-center border-none p-0 cursor-pointer leading-none"
        aria-label="Remove photo"
      >
        ✕
      </button>
    </div>
  )
}
