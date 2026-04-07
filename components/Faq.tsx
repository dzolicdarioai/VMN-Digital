'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLocale } from '@/components/locale-provider'

export default function Faq() {
  const { t } = useLocale()

  return (
    <section id="faq" className="section-padding-alt section-surface relative">
      <div className="max-w-3xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          {t.faq.titleBefore}
          <span className="text-primary">{t.faq.titleHighlight}</span>
        </h2>
        <p className="text-center text-foreground/75 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.faq.intro}
        </p>

        <div className="rounded-xl border border-border/60 bg-background/60 backdrop-blur-md shadow-[0_0_40px_-20px_rgb(102_252_241_/_0.15)] px-4 md:px-8">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-base md:text-[1.05rem] font-semibold text-foreground hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed text-[0.9375rem] md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
