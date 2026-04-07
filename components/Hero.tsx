'use client'

import Link from 'next/link'

import { useLocale } from '@/components/locale-provider'

export default function Hero() {
  const { t } = useLocale()

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="glow-orb -top-24 left-1/2 h-72 w-[min(100%,28rem)] -translate-x-1/2" aria-hidden />
      <div className="max-w-4xl mx-auto text-center relative z-[1]">
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
          {t.hero.titleBefore}
          <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        <Link href="#contact" className="btn-primary text-base md:text-lg inline-flex">
          {t.cta.primary}
        </Link>
      </div>
    </section>
  )
}
