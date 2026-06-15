'use client'
import { useState, useRef, useCallback } from 'react'
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
    setFields(f => ({ ...f, [key]: val }))

  const clearError = (key: string) =>
    setErrors(e => { const n = { ...e }; delete n[key]; return n })

  const addPhotos = (files: FileList | null) => {
    if (!files) return
    setPhotos(p => [...p, ...Array.from(files)].slice(0, 6))
  }

  const removePhoto = (i: number) =>
    setPhotos(p => p.filter((_, idx) => idx !== i))

  const goNext = () => {
    if (step === 0) {
      const errs = validateDetails(fields)
      if (Object.keys(errs).length) { setErrors(errs); return }
      setErrors({})
    }
    if (step < 2) setStep(s => (s + 1) as Step)
  }

  const goBack = () => {
    if (step > 0) setStep(s => (s - 1) as Step)
  }

  const submit = () => {
    const errs = validateDetails(fields)
    if (Object.keys(errs).length) { setErrors(errs); setStep(0); return }

    const firstName = fields.name.trim().split(' ')[0]
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
    <div className="bg-white border border-neutral-border rounded-card shadow-card overflow-hidden">
      {/* Header */}
      <div className="px-7 pt-6 pb-5 border-b border-green-bg flex items-center gap-3">
        <span className="w-11 h-11 rounded-badge bg-green-bg flex items-center justify-center text-[22px] shrink-0">
          📷
        </span>
        <div>
          <div className="font-display font-bold text-[19px] tracking-tight">{QUOTE_FORM.title}</div>
          <div className="text-[13px] text-neutral-muted mt-0.5">{QUOTE_FORM.sub}</div>
        </div>
      </div>

      {/* Success state */}
      {sent && (
        <div className="px-7 py-10 text-center">
          <div
            className="w-[74px] h-[74px] rounded-full mx-auto mb-[18px] flex items-center justify-center shadow-btn"
            style={{ background: 'linear-gradient(150deg,#1FD75C,#009028)' }}
          >
            <span className="text-white text-[36px] leading-none">✓</span>
          </div>
          <div className="font-display font-bold text-[23px] tracking-tight">{successName}</div>
          <p className="text-[15px] text-neutral-muted leading-[1.55] max-w-[30em] mx-auto mt-3">{successMsg}</p>
          <button
            onClick={reset}
            className="mt-[22px] bg-green-bg text-green-dark border-none font-semibold text-[14.5px] px-[22px] py-[12px] rounded-chip cursor-pointer"
          >
            Send another
          </button>
        </div>
      )}

      {/* Form body */}
      {!sent && (
        <div className="px-7 pt-6 pb-7">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-5">
            {QUOTE_FORM.steps.map((label, i) => (
              <div key={label} className="flex-1 flex flex-col gap-[7px]">
                <div
                  className="h-[5px] rounded-chip transition-colors duration-300"
                  style={{ background: i <= step ? '#009028' : '#DCE2DC' }}
                />
                <span
                  className="font-label text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300"
                  style={{ color: i === step ? '#00601B' : i < step ? '#009028' : '#9A9797' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Step 0 — Details */}
          {step === 0 && (
            <div className="flex flex-col gap-[14px]">
              <Field label="Your name" error={errors.name}>
                <input
                  className={inputClass(!!errors.name)}
                  id="fieldName"
                  placeholder="e.g. Sarah"
                  value={fields.name}
                  onChange={e => { setField('name', e.target.value); clearError('name') }}
                />
              </Field>
              <div className="flex gap-3 flex-wrap">
                <Field label="Mobile" error={errors.phone} className="flex-[1_1_140px]">
                  <input
                    className={inputClass(!!errors.phone)}
                    placeholder="04XX XXX XXX"
                    inputMode="tel"
                    value={fields.phone}
                    onChange={e => { setField('phone', e.target.value); clearError('phone') }}
                  />
                </Field>
                <Field label="Suburb" error={errors.suburb} className="flex-[1_1_140px]">
                  <input
                    className={inputClass(!!errors.suburb)}
                    placeholder="e.g. Berwick"
                    value={fields.suburb}
                    onChange={e => { setField('suburb', e.target.value); clearError('suburb') }}
                  />
                </Field>
              </div>
            </div>
          )}

          {/* Step 1 — Damage */}
          {step === 1 && (
            <div className="flex flex-col gap-[14px]">
              <Field label="What needs fixing?">
                <div className="flex flex-wrap gap-2 mt-1">
                  {QUOTE_FORM.serviceChips.map(chip => (
                    <button
                      key={chip}
                      onClick={() => setField('service', chip)}
                      className={`px-[15px] py-[9px] rounded-chip font-semibold text-[13px] border-[1.5px] cursor-pointer transition-all duration-150 ${
                        fields.service === chip
                          ? 'border-green-primary bg-green-bg text-green-dark'
                          : 'border-neutral-border bg-white text-neutral-muted hover:shadow-[0_6px_14px_rgba(0,144,40,0.18)]'
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
                  onChange={e => setField('vehicle', e.target.value)}
                />
              </Field>

              <Field label="Photos of the damage">
                <label
                  className="flex items-center gap-[14px] border-[1.5px] border-dashed border-green-light bg-green-bg rounded-[16px] px-[18px] py-[16px] cursor-pointer transition-all hover:bg-[#ddf3e4] hover:border-green-primary"
                  onClick={() => fileRef.current?.click()}
                >
                  <span className="w-[46px] h-[46px] rounded-[12px] bg-white flex items-center justify-center text-[22px] shrink-0">
                    📎
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-semibold text-[14px] text-green-dark">Tap to add photos</span>
                    <span className="text-[12px] text-neutral-muted">A close-up of the damage and the full panel. JPG or PNG.</span>
                  </span>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={e => addPhotos(e.target.files)}
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
            <div className="flex flex-col gap-[14px]">
              <div className="bg-neutral-page rounded-[14px] px-[18px] py-[16px] flex flex-col gap-[9px]">
                {[
                  ['Name',   fields.name    || '—'],
                  ['Mobile', fields.phone   || '—'],
                  ['Suburb', fields.suburb  || '—'],
                  ['Repair', fields.service],
                  ['Car',    fields.vehicle || 'Not specified'],
                  ['Photos', String(photos.length)],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between gap-3">
                    <span className="text-neutral-muted text-[13.5px]">{key}</span>
                    <span className="font-semibold text-[13.5px] text-right">{val}</span>
                  </div>
                ))}
              </div>
              <Field label="Anything else? (optional)">
                <textarea
                  className={`${inputClass(false)} resize-y`}
                  rows={2}
                  placeholder="When suits for a visit, gate codes, etc."
                  value={fields.message}
                  onChange={e => setField('message', e.target.value)}
                />
              </Field>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2.5 mt-5">
            {step > 0 && (
              <button
                onClick={goBack}
                className="flex-none bg-white border-[1.5px] border-neutral-border text-neutral-muted font-semibold text-[15px] px-5 py-[14px] rounded-chip cursor-pointer hover:border-neutral-ink transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={step < 2 ? goNext : submit}
              className="flex-1 flex items-center justify-center gap-2 border-none text-white font-bold text-[15.5px] px-[22px] py-[15px] rounded-chip cursor-pointer shadow-[0_12px_26px_-10px_rgba(0,144,40,0.6)] hover:-translate-y-px hover:brightness-[1.06] hover:shadow-[0_16px_32px_-10px_rgba(0,144,40,0.7)] transition-all"
              style={{ background: 'linear-gradient(135deg,#1FD75C,#009028 70%)' }}
            >
              {primaryLabel} <span>&#8594;</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-[7px] mt-[14px] text-neutral-subtle text-[12px]">
            <span>&#128274;</span> {QUOTE_FORM.privacy}
          </div>
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
      <label className="block text-[12.5px] font-semibold text-neutral-muted mb-1.5">{label}</label>
      {children}
      {error && <p className="text-error text-[12px] mt-1">{error}</p>}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return `w-full px-[16px] py-[13px] rounded-input bg-white text-[15px] text-neutral-ink border-[1.5px] outline-none transition-all duration-150 focus:border-green-primary focus:shadow-[0_0_0_4px_rgba(0,144,40,0.10)] ${
    hasError ? 'border-error' : 'border-neutral-border'
  }`
}

function PhotoThumb({ file, onRemove }: { file: File; onRemove: () => void }) {
  const url = URL.createObjectURL(file)
  return (
    <div className="relative w-[76px] h-[76px] rounded-[12px] overflow-hidden border border-neutral-border bg-neutral-page shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="" className="w-full h-full object-cover block" onLoad={() => URL.revokeObjectURL(url)} />
      <button
        onClick={onRemove}
        className="absolute top-1 right-1 w-[22px] h-[22px] rounded-full border-none bg-neutral-ink/70 text-white text-[13px] flex items-center justify-center p-0 cursor-pointer leading-none"
        aria-label="Remove photo"
      >
        ✕
      </button>
    </div>
  )
}
