'use client'

import Link from 'next/link'

import { LanguageToggle } from '@/components/language-toggle'
import { useLocale } from '@/components/locale-provider'
import { cn } from '@/lib/utils'

export default function Header() {
  const { t } = useLocale()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight transition-colors hover:text-primary/90"
        >
          <span className="text-primary">VMN</span>
          <span className="text-foreground ml-2">Digital</span>
        </Link>
        <div className="flex items-center gap-3 md:gap-4">
          <LanguageToggle />
          <Link href="#contact" className={cn('btn-primary text-sm md:text-base shrink-0')}>
            {t.cta.primary}
          </Link>
        </div>
      </div>
    </header>
  )
}
