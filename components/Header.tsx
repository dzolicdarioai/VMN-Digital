'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

import { LanguageToggle } from '@/components/language-toggle'
import { useLocale } from '@/components/locale-provider'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { NAV_SECTION_IDS, useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

const NAV_IDS = NAV_SECTION_IDS

export default function Header() {
  const { t } = useLocale()
  const activeId = useActiveSection(NAV_IDS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = NAV_IDS.map((id) => ({
    id,
    href: `#${id}`,
    label: t.nav[id as keyof typeof t.nav] as string,
  }))

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-border/70',
        'bg-background/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/45',
        'shadow-[0_1px_0_0_rgb(69_162_158_/_0.12)]',
      )}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tight transition-colors hover:text-primary/90 shrink-0"
        >
          <span className="text-primary">VMN</span>
          <span className="text-foreground ml-2">Digital</span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label={t.navMenu}
        >
          {navItems.map(({ id, href, label }) => (
            <Link
              key={id}
              href={href}
              className={cn(
                'text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200',
                activeId === id
                  ? 'text-primary bg-primary/10 shadow-[0_0_24px_-8px_rgb(102_252_241_/_0.45)]'
                  : 'text-foreground/75 hover:text-foreground hover:bg-foreground/5',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden lg:flex">
            <LanguageToggle />
          </div>
          <Link
            href="#contact"
            className={cn(
              'btn-primary text-sm md:text-base shrink-0 hidden sm:inline-flex',
            )}
          >
            {t.cta.primary}
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="lg:hidden text-foreground hover:bg-foreground/10"
                aria-label={t.navMenu}
              >
                <MenuIcon className="size-6" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] border-border/60 bg-background/95 backdrop-blur-xl p-0 gap-0 flex h-full flex-col"
            >
              <SheetHeader className="border-b border-border/50 px-4 py-4 text-left">
                <SheetTitle className="text-base">{t.navMenu}</SheetTitle>
              </SheetHeader>
              <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto p-4">
                {navItems.map(({ id, href, label }) => (
                  <Link
                    key={id}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'rounded-lg px-3 py-3 text-base font-medium transition-colors',
                      activeId === id
                        ? 'bg-primary/12 text-primary'
                        : 'text-foreground/85 hover:bg-foreground/5',
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto border-t border-border/50 p-4 space-y-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wide text-foreground/50 mb-2">
                    {t.lang.switch}
                  </p>
                  <LanguageToggle className="w-full justify-center" />
                </div>
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full text-center justify-center"
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
