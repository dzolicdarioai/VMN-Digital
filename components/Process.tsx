'use client'

import { useLocale } from '@/components/locale-provider'

export default function Process() {
  const { t } = useLocale()
  const steps = t.process.steps

  return (
    <section id="process" className="section-padding section-surface relative">
      <div className="glow-orb bottom-0 left-0 h-56 w-56 opacity-20" aria-hidden />
      <div className="max-w-6xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          {t.process.titleBefore}
          <span className="text-primary">{t.process.titleHighlight}</span>
        </h2>
        <p className="text-center text-foreground/70 mb-14 max-w-2xl mx-auto leading-relaxed">
          {t.process.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-8 card-interactive">
              <div className="text-5xl font-bold text-primary/30 mb-4 font-mono tabular-nums">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
