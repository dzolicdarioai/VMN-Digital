'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useLocale } from '@/components/locale-provider'
import { cn } from '@/lib/utils'

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function TestimonialCard({
  name,
  role,
  company,
  text,
  className,
}: {
  name: string
  role: string
  company: string
  text: string
  className?: string
}) {
  return (
    <div className={cn('p-8 card-interactive h-full flex flex-col', className)}>
      <div className="flex items-start gap-4 mb-5">
        <Avatar className="size-12 border border-primary/25 bg-primary/10 text-primary">
          <AvatarFallback className="bg-primary/15 text-primary font-semibold text-sm">
            {initialsFromName(name)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 pt-0.5">
          <p className="font-semibold text-primary leading-tight">{name}</p>
          <p className="text-foreground/60 text-sm mt-1">
            {role}
            <span className="text-foreground/40"> · </span>
            {company}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-4" aria-hidden>
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-primary text-lg leading-none">
            ★
          </span>
        ))}
      </div>

      <p className="text-foreground/80 leading-relaxed italic grow">
        &quot;{text}&quot;
      </p>
    </div>
  )
}

const CARD_WIDTH_CLASS = 'w-[min(22rem,calc(100vw-2.5rem))] shrink-0'

export default function Testimonials() {
  const { t } = useLocale()
  const testimonials = t.testimonials.items

  return (
    <section
      id="testimonials"
      className="section-padding-tight section-chapter-testimonials section-divider-top relative overflow-hidden bg-background"
    >
      <div
        className="pointer-events-none absolute left-[max(0px,calc(50%-28rem))] top-[18%] z-0 h-[min(22rem,60vw)] w-[min(22rem,50vw)] rounded-full bg-[radial-gradient(circle_at_40%_45%,rgb(102_252_241_/_0.07),transparent_68%)] blur-3xl opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[max(0px,calc(50%-26rem))] bottom-[12%] z-0 h-[min(20rem,55vw)] w-[min(20rem,48vw)] rounded-full bg-[radial-gradient(circle_at_60%_55%,rgb(155_139_196_/_0.06),transparent_65%)] blur-3xl opacity-85"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          {t.testimonials.titleBefore}
          <span className="text-primary">{t.testimonials.titleHighlight}</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 md:mb-14 max-w-2xl mx-auto leading-relaxed">
          {t.testimonials.intro}
        </p>
      </div>

      <div
        className="relative z-[1] w-full [--testimonials-duration:72s] [--testimonials-gap:2rem] md:[--testimonials-gap:2.25rem]"
        role="region"
        aria-label={t.testimonials.marqueeAriaLabel}
        aria-roledescription="carousel"
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-10 bg-gradient-to-r from-background to-transparent md:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-10 bg-gradient-to-l from-background to-transparent md:w-16"
          aria-hidden
        />

        <div className="testimonials-marquee-outer py-1">
          <div className="testimonials-marquee-track">
            {testimonials.map((item, index) => (
              <div key={`a-${index}`} className={CARD_WIDTH_CLASS}>
                <TestimonialCard
                  name={item.name}
                  role={item.role}
                  company={item.company}
                  text={item.text}
                />
              </div>
            ))}
            {testimonials.map((item, index) => (
              <div key={`b-${index}`} className={CARD_WIDTH_CLASS} aria-hidden>
                <TestimonialCard
                  name={item.name}
                  role={item.role}
                  company={item.company}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
