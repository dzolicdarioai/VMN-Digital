'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { LanguageToggle } from '@/components/language-toggle'
import { useLocale } from '@/components/locale-provider'
import { useActiveNavSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const NAV_IDS = [
  'services',
  'about',
  'process',
  'testimonials',
  'faq',
  'contact',
] as const

export default function Header() {
  const { t } = useLocale()
  const activeId = useActiveNavSection(96)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const navItems = NAV_IDS.map((id) => ({
    id,
    href: `#${id}`,
    label: t.header.nav[id],
  }))

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight transition-colors hover:text-primary/90 shrink-0"
        >
          <span className="text-primary">VMN</span>
          <span className="text-foreground ml-2">Digital</span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label={t.header.brand}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                'px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors',
                activeId === item.id
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/70 hover:text-foreground hover:bg-background/50',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
          <LanguageToggle />
          <Link href="#contact" className={cn('btn-primary text-sm md:text-base shrink-0')}>
            {t.cta.primary}
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2 shrink-0">
          <LanguageToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-card/40 text-foreground hover:bg-background/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                aria-expanded={mobileOpen}
                aria-label={t.header.openMenu}
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 w-[min(100%,20rem)]">
              <SheetTitle className="sr-only">{t.header.brand}</SheetTitle>
              <nav className="flex flex-col gap-1 pt-8" aria-label={t.header.brand}>
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'px-3 py-3 rounded-lg text-base font-medium transition-colors',
                      activeId === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/85 hover:bg-background/60',
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-border/50 pt-6 mt-auto">
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className={cn('btn-primary text-center w-full')}
                >
                  {t.cta.primary}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
