'use client'

import {
  type LucideIcon,
  Code2,
  Palette,
  Rocket,
  Search,
} from 'lucide-react'
import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

import { useLocale } from '@/components/locale-provider'
import { cn } from '@/lib/utils'

const STEP_ICONS: LucideIcon[] = [Search, Palette, Code2, Rocket]

function ProcessStepReveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-[520ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default function Process() {
  const { t } = useLocale()
  const steps = t.process.steps

  return (
    <section
      id="process"
      className="section-padding-alt section-surface section-chapter-process section-divider-top relative"
    >
      <div className="glow-orb bottom-0 left-0 h-56 w-56 opacity-20" aria-hidden />
      <div className="max-w-3xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          {t.process.titleBefore}
          <span className="text-primary">{t.process.titleHighlight}</span>
        </h2>
        <p className="text-center text-foreground/70 mb-14 max-w-2xl mx-auto leading-relaxed">
          {t.process.intro}
        </p>

        <div className="relative pl-1 md:pl-2">
          {/* Vertical thread through step nodes (centered on 44px / w-11 icon column) */}
          <div
            className="absolute left-[calc(0.25rem+1.375rem)] md:left-[calc(0.5rem+1.375rem)] top-9 bottom-9 w-px bg-gradient-to-b from-primary/45 via-primary/20 to-border/70"
            aria-hidden
          />

          <ol className="relative m-0 list-none space-y-0 p-0">
            {steps.map((step, index) => {
              const Icon = STEP_ICONS[index] ?? Search
              const isLast = index === steps.length - 1

              return (
                <li key={step.number} className="relative">
                  <ProcessStepReveal className={cn(!isLast && 'pb-12 md:pb-14')}>
                    <div className="flex gap-5 md:gap-8">
                      <div className="relative z-[1] flex w-11 shrink-0 justify-center md:w-12">
                        <div
                          className={cn(
                            'flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary/70 bg-background/95',
                            'shadow-[0_0_24px_-8px_rgb(102_252_241_/_0.45)]',
                            'transition-transform duration-[280ms] hover:scale-[1.03]',
                          )}
                        >
                          <Icon className="h-5 w-5 text-primary" aria-hidden />
                          <span className="sr-only">
                            {step.number} {step.title}
                          </span>
                        </div>
                      </div>

                      <div className="min-w-0 flex-1 pb-0.5">
                        <div className="font-mono text-sm tabular-nums text-primary/60 mb-1">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3 text-balance">
                          {step.title}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ProcessStepReveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
