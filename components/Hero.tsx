'use client'

import Link from 'next/link'

import { useLocale } from '@/components/locale-provider'

function HeroMockup() {
  return (
    <div className="relative w-full max-w-xl lg:max-w-none mx-auto lg:mx-0">
      {/* Glow behind mockup — tied to column */}
      <div
        className="pointer-events-none absolute -right-8 top-1/2 h-[min(100%,22rem)] w-[min(100%,22rem)] -translate-y-1/2 rounded-full bg-primary/15 blur-[64px]"
        aria-hidden
      />
      <div
        className="relative overflow-hidden rounded-xl border border-primary/25 bg-card/35 shadow-[0_0_0_1px_rgb(102_252_241_/_0.06),0_28px_90px_-28px_rgb(0_0_0_/_0.75),0_0_80px_-20px_rgb(102_252_241_/_0.12)] backdrop-blur-md"
      >
        {/* Browser chrome */}
        <div className="flex h-10 items-center gap-2 border-b border-border/50 bg-[rgb(15_18_24)]/95 px-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90" />
          </div>
          <div className="flex min-h-7 flex-1 items-center rounded-md border border-border/30 bg-background/55 px-2.5 py-1 font-mono text-[10px] text-foreground/40 md:text-[11px]">
            app.vmn-digital.com
          </div>
        </div>
        {/* Abstract UI */}
        <div className="flex h-[200px] gap-2.5 p-3 sm:h-[240px] md:h-[260px] md:gap-3 md:p-4">
          <div
            className="flex w-12 shrink-0 flex-col gap-2 rounded-lg border border-border/35 bg-background/45 p-2 md:w-14"
            aria-hidden
          >
            <div className="h-2 w-7 rounded bg-primary/45" />
            <div className="h-2 w-9 rounded bg-foreground/12" />
            <div className="h-2 w-6 rounded bg-foreground/8" />
            <div className="mt-auto h-8 w-full rounded-md bg-primary/12 ring-1 ring-primary/25" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-2.5">
            <div className="h-9 rounded-lg bg-gradient-to-r from-primary/25 via-primary/10 to-transparent ring-1 ring-primary/15" />
            <div className="grid flex-1 grid-cols-3 gap-2">
              <div className="flex flex-col rounded-md border border-border/25 bg-background/40 p-2">
                <div className="mb-2 h-2 w-1/2 rounded bg-primary/35" />
                <div className="space-y-1.5">
                  <div className="h-1 rounded bg-foreground/12" />
                  <div className="h-1 w-4/5 rounded bg-foreground/8" />
                  <div className="h-1 w-3/5 rounded bg-foreground/8" />
                </div>
              </div>
              <div className="flex flex-col rounded-md border border-border/25 bg-background/40 p-2">
                <div className="mb-3 flex items-end gap-0.5">
                  <span className="h-8 w-1.5 rounded-sm bg-primary/50" />
                  <span className="h-12 w-1.5 rounded-sm bg-primary/35" />
                  <span className="h-5 w-1.5 rounded-sm bg-secondary/40" />
                </div>
                <div className="mt-auto h-1 w-full rounded bg-foreground/10" />
              </div>
              <div className="flex flex-col rounded-md border border-border/25 bg-background/40 p-2">
                <div className="mb-2 h-2 w-2/3 rounded bg-foreground/12" />
                <div className="flex flex-1 flex-col justify-center gap-1.5">
                  <div className="h-1.5 rounded-full bg-primary/20 ring-1 ring-primary/20" />
                  <div className="h-1.5 w-4/5 rounded-full bg-foreground/8" />
                  <div className="h-1.5 w-3/5 rounded-full bg-foreground/8" />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-7 flex-1 rounded-md border border-border/30 bg-foreground/5" />
              <div className="h-7 w-16 shrink-0 rounded-md bg-primary/25 ring-1 ring-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLocale()

  return (
    <section className="section-hero relative min-h-[72vh] overflow-hidden bg-background">
      {/* Layered background: mesh + blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-15%,rgb(102_252_241_/_0.14),transparent_55%),radial-gradient(ellipse_55%_45%_at_100%_30%,rgb(69_162_158_/_0.12),transparent_50%),radial-gradient(ellipse_50%_40%_at_0%_75%,rgb(102_252_241_/_0.08),transparent_48%)]"
        />
        <div className="glow-orb -left-32 top-1/4 h-80 w-80 max-w-[50vw] opacity-24 md:left-0" />
        <div className="glow-orb -right-24 bottom-0 h-72 w-[min(100%,24rem)] opacity-20" />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              'linear-gradient(rgb(102 252 241 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(102 252 241 / 0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'radial-gradient(ellipse 75% 65% at 50% 45%, black 15%, transparent 72%)',
          }}
        />
      </div>

      {/* Headline column spotlight — draws the eye before the mockup */}
      <div
        className="pointer-events-none absolute left-[max(0px,calc(50%-22rem))] top-[22%] z-0 h-[min(28rem,78vw)] w-[min(100%,24rem)] rounded-full bg-[radial-gradient(ellipse_75%_70%_at_45%_45%,rgb(102_252_241_/_0.14),transparent_68%)] blur-[44px] opacity-95 md:left-[12%] md:top-[24%] lg:left-[max(0px,calc(50%-36rem))]"
        aria-hidden
      />

      {/* Layout-tied glow accents (headline column + mockup column) */}
      <div
        className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-[min(100%,20rem)] -translate-x-1/2 rounded-full bg-primary/12 blur-[80px] md:left-[20%] lg:left-[22%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[12%] right-[10%] h-64 w-[min(100%,18rem)] translate-x-[18%] rounded-full bg-secondary/15 blur-[72px] lg:right-[8%]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 xl:max-w-7xl">
        <div className="hero-copy-panel text-center lg:text-left">
          <h1 className="hero-text-shadow mb-6 text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {t.hero.titleBefore}
            <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mb-4 max-w-xl text-lg leading-relaxed text-foreground/88 lg:mx-0 md:text-xl">
            {t.hero.subtitle}
          </p>
          <p className="mx-auto mb-10 max-w-xl border-l-2 border-primary/50 pl-4 text-left text-sm leading-relaxed text-foreground/82 md:text-base lg:mx-0">
            {t.hero.analysisLine}
          </p>
          <Link href="#contact" className="btn-primary text-base md:text-lg inline-flex">
            {t.cta.primary}
          </Link>
        </div>
        <HeroMockup />
      </div>
    </section>
  )
}
