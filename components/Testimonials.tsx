'use client'

import * as React from 'react'
import type { CarouselApi } from '@/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
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

function TestimonialsCarousel({
  items,
  dotsAriaLabel,
}: {
  items: {
    name: string
    role: string
    company: string
    text: string
  }[]
  dotsAriaLabel: string
}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on('select', onSelect)
    api.on('reInit', onSelect)
    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api])

  return (
    <div className="relative px-11">
      <Carousel
        setApi={setApi}
        opts={{ align: 'start', loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {items.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-3 basis-full">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                text={testimonial.text}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-border/80 bg-background/90" />
        <CarouselNext className="right-0 border-border/80 bg-background/90" />
      </Carousel>
      <div
        className="flex justify-center gap-2 mt-8"
        role="tablist"
        aria-label={dotsAriaLabel}
      >
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={current === i}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              current === i
                ? 'w-8 bg-primary'
                : 'w-2 bg-foreground/25 hover:bg-foreground/40',
            )}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLocale()
  const testimonials = t.testimonials.items

  return (
    <section
      id="testimonials"
      className="section-padding-tight bg-background relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-[1]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          {t.testimonials.titleBefore}
          <span className="text-primary">{t.testimonials.titleHighlight}</span>
        </h2>
        <p className="text-center text-foreground/70 mb-14 max-w-2xl mx-auto leading-relaxed">
          {t.testimonials.intro}
        </p>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              text={testimonial.text}
            />
          ))}
        </div>

        <div className="md:hidden">
          <TestimonialsCarousel
            items={[...testimonials]}
            dotsAriaLabel={t.testimonials.carouselDotsLabel}
          />
        </div>
      </div>
    </section>
  )
}
