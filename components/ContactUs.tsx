'use client'

import * as React from 'react'
import Link from 'next/link'

import { useLocale } from '@/components/locale-provider'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function ContactUs() {
  const { t } = useLocale()
  const [status, setStatus] = React.useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const subject = String(fd.get('subject') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    if (!email || !message) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || undefined,
          email,
          subject: subject || undefined,
          message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const notice =
    status === 'success' ? (
      <p className="text-sm text-primary/90 border border-primary/30 rounded-lg px-3 py-2 bg-primary/5">
        {t.contact.form.successAfterSubmit}
      </p>
    ) : status === 'error' ? (
      <p className="text-sm text-destructive border border-destructive/30 rounded-lg px-3 py-2 bg-destructive/5">
        {t.contact.form.errorAfterSubmit}
      </p>
    ) : null

  return (
    <section
      id="contact"
      className="section-padding section-surface-muted section-chapter-contact section-divider-top relative"
    >
      <div className="max-w-4xl mx-auto relative z-[1]">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 text-center sm:text-left">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              {t.contact.titleBefore}
              <span className="text-primary">{t.contact.titleHighlight}</span>
            </h2>
          </div>
          <Link href="#contact-form" className="btn-primary text-sm md:text-base shrink-0 self-center sm:self-auto">
            {t.cta.primary}
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">{t.contact.heading}</h3>
            <p className="text-foreground/80 leading-relaxed">{t.contact.body}</p>
            <div className="space-y-4">
              <div>
                <p className="text-foreground/60 text-sm mb-2 font-mono uppercase tracking-wide">
                  {t.contact.emailLabel}
                </p>
                <a
                  href="mailto:dzolicdario@vmn-digital.com"
                  className="link-subtle block text-primary font-medium"
                >
                  dzolicdario@vmn-digital.com
                </a>
                <a
                  href="mailto:info@vmn-digital.com"
                  className="link-subtle block text-primary font-medium"
                >
                  info@vmn-digital.com
                </a>
              </div>
            </div>
          </div>

          <div
            id="contact-form"
            className="contact-terminal-panel border p-8 backdrop-blur-md shadow-[0_0_40px_-20px_rgb(102_252_241_/_0.2)] scroll-mt-28"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  {t.contact.form.subject}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder={t.contact.form.subjectPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>
              {notice}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
