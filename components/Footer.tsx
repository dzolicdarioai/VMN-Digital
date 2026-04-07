'use client'

import Link from 'next/link'

import { useLocale } from '@/components/locale-provider'

export default function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()
  const copyright = t.footer.copyright
    .replace('{year}', String(year))
    .replace('{brandLine}', t.footer.brandLine)

  const navLinks = [
    { href: '#services', label: t.footer.linkServices },
    { href: '#about', label: t.footer.linkAbout },
    { href: '#process', label: t.footer.linkProcess },
    { href: '#testimonials', label: t.footer.linkTestimonials },
    { href: '#portfolio', label: t.footer.linkPortfolio },
    { href: '#faq', label: t.footer.linkFaq },
    { href: '#contact', label: t.footer.linkContact },
  ] as const

  return (
    <footer className="footer-shell backdrop-blur-md">
      <div className="relative z-[1] max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="text-xl font-bold mb-2">
              <span className="text-primary">VMN</span>
              <span className="text-foreground ml-2">Digital</span>
            </div>
            <p className="text-foreground/70 text-sm font-medium mb-3">{t.footer.brandLine}</p>
            <p className="text-foreground/60 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.colNavigate}</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-subtle">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.colLegal}</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/privacy" className="link-subtle">
                  {t.footer.linkPrivacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="link-subtle">
                  {t.footer.linkTerms}
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
