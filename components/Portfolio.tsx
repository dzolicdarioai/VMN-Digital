'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { useLocale } from '@/components/locale-provider'

export default function Portfolio() {
  const { t } = useLocale()
  const projects = t.portfolio.items

  return (
    <section id="portfolio" className="section-padding section-surface-muted relative">
      <div className="glow-orb bottom-0 left-1/4 h-72 w-72 opacity-20" aria-hidden />
      <div className="max-w-6xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          {t.portfolio.titleBefore}
          <span className="text-primary">{t.portfolio.titleHighlight}</span>
        </h2>
        <p className="text-center text-foreground/70 mb-14 max-w-2xl mx-auto leading-relaxed">
          {t.portfolio.intro}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group flex flex-col p-8 rounded-xl border border-border/80 bg-background/75 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_48px_-24px_rgb(102_252_241_/_0.28)]"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-primary/90 mb-2">
                {project.category}
              </p>
              <h3 className="text-xl font-bold text-primary mb-5">{project.title}</h3>

              <dl className="space-y-3 text-sm text-foreground/85 mb-6 grow">
                <div>
                  <dt className="text-foreground/50 text-xs uppercase tracking-wide mb-1">
                    {t.portfolio.problemLabel}
                  </dt>
                  <dd className="leading-relaxed">{project.problem}</dd>
                </div>
                <div>
                  <dt className="text-foreground/50 text-xs uppercase tracking-wide mb-1">
                    {t.portfolio.solutionLabel}
                  </dt>
                  <dd className="leading-relaxed">{project.solution}</dd>
                </div>
              </dl>

              <ul className="space-y-2 mb-8 text-sm text-foreground/80">
                {project.metrics.map((line, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/80"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/90 transition-colors group/link"
              >
                {t.portfolio.caseStudyCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
