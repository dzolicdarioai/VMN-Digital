'use client'

import { useLocale } from '@/components/locale-provider'

export default function Testimonials() {
  const { t } = useLocale()
  const testimonials = t.testimonials.items

  return (
    <section id="testimonials" className="section-padding-tight bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          {t.testimonials.titleBefore}
          <span className="text-primary">{t.testimonials.titleHighlight}</span>
        </h2>
        <p className="text-center text-foreground/70 mb-14 max-w-2xl mx-auto leading-relaxed">
          {t.testimonials.intro}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 card-interactive">
              <div className="flex items-center gap-1 mb-4" aria-hidden>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-foreground/60 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
