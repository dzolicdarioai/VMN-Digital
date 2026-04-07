'use client'

import { useLocale } from '@/components/locale-provider'

/** Placeholder for Phase G — satisfies Phase B5 `#portfolio` anchor and footer link. */
export default function Portfolio() {
  const { t } = useLocale()

  return (
    <section
      id="portfolio"
      className="section-padding-tight section-surface relative border-t border-border/30"
    >
      <div className="max-w-4xl mx-auto relative z-[1] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          {t.portfolio.titleBefore}
          <span className="text-primary">{t.portfolio.titleHighlight}</span>
        </h2>
        <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
          {t.portfolio.intro}
        </p>
      </div>
    </section>
  )
}
