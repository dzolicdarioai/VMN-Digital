'use client'

import { useLocale } from '@/components/locale-provider'

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
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 card-interactive"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
