'use client'

import * as React from 'react'
import Image from 'next/image'

import { useLocale } from '@/components/locale-provider'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  ABOUT_PARTNERSHIP_IMAGE,
  aboutPartnershipSizes,
} from '@/lib/site/about-image'

export default function AboutUs() {
  const { t } = useLocale()
  const points = t.about.softPoints
  const [open, setOpen] = React.useState(false)

  return (
    <section id="about" className="section-padding-tight section-surface-muted relative">
      <div className="max-w-6xl mx-auto relative z-[1]">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
          <div
            className="relative mx-auto w-full lg:mx-0"
            style={{ maxWidth: ABOUT_PARTNERSHIP_IMAGE.maxWidthPx }}
          >
            <div
              className="pointer-events-none absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-primary/[0.12] via-primary/[0.04] to-transparent opacity-90 blur-2xl"
              aria-hidden
            />
            <div
              className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card/50 shadow-[0_28px_90px_-36px_rgb(0_0_0_/_0.72)] ring-1 ring-inset ring-white/[0.07]"
            >
              <div
                className="relative w-full"
                style={{
                  aspectRatio: `${ABOUT_PARTNERSHIP_IMAGE.width} / ${ABOUT_PARTNERSHIP_IMAGE.height}`,
                }}
              >
                <Image
                  src={ABOUT_PARTNERSHIP_IMAGE.src}
                  alt={t.about.imageAlt}
                  fill
                  quality={95}
                  sizes={aboutPartnershipSizes()}
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              {t.about.titleBefore}
              <span className="text-primary">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-sm md:text-base font-medium text-primary/90 tracking-wide mb-8">
              {t.about.brandLine}
            </p>

            <p className="text-foreground/85 leading-relaxed mb-4">{t.about.summary}</p>

            <Collapsible open={open} onOpenChange={setOpen}>
              <CollapsibleContent>
                <div className="space-y-5 text-foreground/80 leading-relaxed pt-1 border-t border-border/20 mt-4">
                  <p>{t.about.p1}</p>
                  <p>{t.about.p2}</p>
                  <p>{t.about.p3}</p>
                </div>

                <ul className="mt-8 space-y-3 border-l-2 border-primary/25 pl-5">
                  {points.map((line) => (
                    <li
                      key={line}
                      className="text-foreground/75 text-[15px] leading-relaxed"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>

              <CollapsibleTrigger className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm">
                {open ? t.about.readLess : t.about.readMore}
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  )
}
