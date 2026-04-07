'use client'

import { useLocale } from '@/components/locale-provider'

/** Placeholder for Phase I — accordion and full copy; `#faq` anchor required for Phase B nav. */
export default function Faq() {
  const { t } = useLocale()

  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          {t.faq.titleBefore}
          <span className="text-primary">{t.faq.titleHighlight}</span>
        </h2>
        <p className="text-center text-foreground/70 mb-8 leading-relaxed">
          {t.faq.intro}
        </p>
        <p className="text-foreground/80 leading-relaxed text-center rounded-xl border border-border/50 bg-card/30 px-6 py-8">
          {t.faq.placeholder}
        </p>
      </div>
    </section>
  )
}
