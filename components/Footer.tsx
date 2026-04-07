'use client'

import Link from 'next/link'

import { useLocale } from '@/components/locale-provider'

export default function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()
  const copyright = t.footer.copyright.replace('{year}', String(year))

  return (
    <footer className="border-t border-border/60 bg-card/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-primary">VMN</span>
              <span className="text-foreground ml-2">Digital</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.colServices}</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#services" className="link-subtle">
                  {t.footer.linkWebDesign}
                </Link>
              </li>
              <li>
                <Link href="#services" className="link-subtle">
                  {t.footer.linkPerformance}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="link-subtle">
                  {t.footer.linkConsultation}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.colCompany}</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#about" className="link-subtle">
                  {t.footer.linkAbout}
                </Link>
              </li>
              <li>
                <Link href="#process" className="link-subtle">
                  {t.footer.linkProcess}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="link-subtle">
                  {t.footer.linkContact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.colContact}</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="mailto:dzolicdario@vmn-digital.com" className="link-subtle">
                  dzolicdario@vmn-digital.com
                </a>
              </li>
              <li>
                <a href="mailto:info@vmn-digital.com" className="link-subtle">
                  info@vmn-digital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-border/60">
          <p className="text-foreground/60 text-sm text-center md:text-left">{copyright}</p>
          <Link href="#contact" className="btn-primary text-sm">
            {t.cta.primary}
          </Link>
        </div>
      </div>
    </footer>
  )
}
