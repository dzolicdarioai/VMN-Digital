'use client'

import * as React from 'react'
import Link from 'next/link'

import { useLocale } from '@/components/locale-provider'

export default function ContactUs() {
  const { t } = useLocale()
  const [stubNotice, setStubNotice] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStubNotice(true)
  }

  return (
    <section id="contact" className="section-padding section-surface-muted relative">
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
            className="p-8 rounded-xl border border-border/60 bg-background/60 backdrop-blur-md shadow-[0_0_40px_-20px_rgb(102_252_241_/_0.2)] scroll-mt-28"
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
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>
              {stubNotice && (
                <p className="text-sm text-primary/90 border border-primary/30 rounded-lg px-3 py-2 bg-primary/5">
                  {t.contact.form.stubAfterSubmit}
                </p>
              )}
              <button type="submit" className="btn-primary w-full">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
