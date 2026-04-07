'use client'

import { useLocale } from '@/components/locale-provider'

export default function AboutUs() {
  const { t } = useLocale()
  const stats = [
    { value: t.about.statValues[0], label: t.about.stat1 },
    { value: t.about.statValues[1], label: t.about.stat2 },
    { value: t.about.statValues[2], label: t.about.stat3 },
  ]

  return (
    <section id="about" className="section-padding-tight section-surface-muted relative">
      <div className="max-w-4xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-balance">
          {t.about.titleBefore}
          <span className="text-primary">{t.about.titleHighlight}</span>
        </h2>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-lg border border-border/50 bg-card/50 text-center card-interactive"
            >
              <div className="text-3xl font-bold text-primary mb-2 font-mono tabular-nums">
                {stat.value}
              </div>
              <p className="text-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
