'use client'

import { cn } from '@/lib/utils'

import type { Locale } from '@/lib/i18n/dictionaries'
import { useLocale } from '@/components/locale-provider'

const locales: Locale[] = ['en', 'hr']

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-lg border border-border/80 bg-card/40 p-0.5 backdrop-blur-sm',
        className,
      )}
      role="group"
      aria-label={t.lang.switch}
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            'font-mono text-xs font-medium uppercase tracking-wide px-2.5 py-1.5 rounded-md transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            locale === code
              ? 'bg-primary/15 text-primary shadow-[0_0_20px_-4px_var(--color-primary)]'
              : 'text-foreground/55 hover:text-foreground hover:bg-background/50',
          )}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
