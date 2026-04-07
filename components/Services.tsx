'use client'

import { Gauge, LayoutTemplate } from 'lucide-react'

import { useLocale } from '@/components/locale-provider'

const SERVICE_ICONS = [LayoutTemplate, Gauge] as const

export default function Services() {
  const { t } = useLocale()
  const services = t.services.items

  return (
    <section
      id="services"
      className="section-padding section-surface relative"
    >
      <div className="glow-orb top-1/4 right-0 h-64 w-64 opacity-25" aria-hidden />
      <div className="max-w-6xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          {t.services.titleBefore}
          <span className="text-primary">{t.services.titleHighlight}</span>
        </h2>
        <p className="text-center text-foreground/70 mb-14 max-w-2xl mx-auto leading-relaxed">
          {t.services.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = SERVICE_ICONS[index] ?? LayoutTemplate
            return (
              <div key={index} className="group p-8 service-card">
                <div className="flex items-start gap-4 mb-5">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/45 group-hover:bg-primary/15"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-2xl font-bold text-primary pt-1.5">
                    {service.title}
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2.5 text-sm text-foreground/85 leading-relaxed">
                  {service.bullets.map((line, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/80"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
