'use client'

import Link from 'next/link'

import Header from '@/components/Header'
import { useLocale } from '@/components/locale-provider'

type LegalKind = 'privacy' | 'terms'

export function LegalDocument({ kind }: { kind: LegalKind }) {
  const { t } = useLocale()
  const page = kind === 'privacy' ? t.legal.privacy : t.legal.terms

  return (
    <main className="page-shell min-h-screen bg-background">
      <Header />
      <article className="max-w-3xl mx-auto section-padding">
        <Link href="/" className="link-subtle text-sm mb-10 inline-block">
          {t.legal.backToSite}
        </Link>
        <p className="text-xs font-mono uppercase tracking-wide text-primary/85 mb-3">{page.badge}</p>
        <h1 className="text-4xl font-bold mb-5 text-balance">{page.title}</h1>
        <p className="text-foreground/80 leading-relaxed mb-12">{page.intro}</p>
        <div className="space-y-10">
          {page.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold text-foreground mb-3">{section.heading}</h2>
              <p className="text-foreground/75 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
