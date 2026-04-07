'use client'

import { useLocale } from '@/components/locale-provider'

export default function ContactUs() {
  const { t } = useLocale()

  return (
    <section id="contact" className="section-padding section-surface-muted relative">
      <div className="max-w-4xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          {t.contact.titleBefore}
          <span className="text-primary">{t.contact.titleHighlight}</span>
        </h2>

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
                  className="link-subtle block text-primary"
                >
                  dzolicdario@vmn-digital.com
                </a>
                <a
                  href="mailto:info@vmn-digital.com"
                  className="link-subtle block text-primary"
                >
                  info@vmn-digital.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl border border-border/60 bg-background/60 backdrop-blur-md shadow-[0_0_40px_-20px_rgb(102_252_241_/_0.2)]">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  type="text"
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
                  type="email"
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>
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
