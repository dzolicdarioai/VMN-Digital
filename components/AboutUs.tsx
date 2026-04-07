'use client'

import { useLocale } from '@/components/locale-provider'

export default function AboutUs() {
  const { t } = useLocale()
  const points = t.about.softPoints

  return (
    <section id="about" className="section-padding-tight section-surface-muted relative">
      <div className="max-w-4xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
          {t.about.titleBefore}
          <span className="text-primary">{t.about.titleHighlight}</span>
        </h2>
        <p className="text-sm md:text-base font-medium text-primary/90 tracking-wide mb-10">
          {t.about.brandLine}
        </p>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

        <ul className="mt-12 space-y-4 border-l-2 border-primary/25 pl-6">
          {points.map((line) => (
            <li
              key={line}
              className="text-foreground/75 text-[15px] leading-relaxed"
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
