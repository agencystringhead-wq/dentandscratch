'use client'
import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'
import { NEWSLETTER } from '@/lib/content'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setError(NEWSLETTER.invalid)
      return
    }
    setError('')
    // TODO: connect newsletter endpoint — POST { email } to the mailing-list API.
    setSent(true)
  }

  if (sent) {
    return (
      <p role="status" className="font-body font-medium text-[16px] text-white">
        {NEWSLETTER.success}
      </p>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">
        {/* Inline email field — transparent, thin bottom border */}
        <div className="flex items-center gap-3 flex-1 min-w-0 border-b border-[#3A3A3A] focus-within:border-green-primary transition-colors pb-3">
          <Mail size={20} className="text-[#9A9A9A] shrink-0" aria-hidden="true" />
          <label htmlFor="newsletter-email" className="sr-only">
            {NEWSLETTER.placeholder}
          </label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) setError('')
            }}
            placeholder={NEWSLETTER.placeholder}
            aria-invalid={!!error}
            aria-describedby={error ? 'newsletter-error' : undefined}
            className="w-full bg-transparent border-none outline-none text-white placeholder:text-[#9A9A9A] font-body font-medium text-[16px]"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 shrink-0 bg-green-primary hover:bg-green-hover transition-colors text-white font-body font-bold text-[16px] px-7 py-4 rounded-[10px]"
        >
          <ArrowRight size={18} aria-hidden="true" />
          {NEWSLETTER.button}
        </button>
      </div>

      {error && (
        <p id="newsletter-error" role="alert" className="font-body font-medium text-[14px] text-[#F08A8A] mt-3">
          {error}
        </p>
      )}
    </form>
  )
}
