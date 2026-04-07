'use client'

import { useEffect, useState } from 'react'

/** Document order for scroll-spy; includes #portfolio between testimonials and faq. */
const SCROLL_SECTIONS = [
  'services',
  'about',
  'process',
  'testimonials',
  'portfolio',
  'faq',
  'contact',
] as const

const NAV_SECTIONS = new Set([
  'services',
  'about',
  'process',
  'testimonials',
  'faq',
  'contact',
])

export type NavSectionId = (typeof SCROLL_SECTIONS)[number]

/**
 * Returns the active in-page nav id for header highlighting, or null when
 * no nav item applies (hero, portfolio band, or above first section).
 */
export function useActiveNavSection(headerOffsetPx = 96): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    function update() {
      const scrollY = window.scrollY
      const y = scrollY + headerOffsetPx

      const first = document.getElementById(SCROLL_SECTIONS[0])
      if (first && y < first.offsetTop) {
        setActive(null)
        return
      }

      let current: (typeof SCROLL_SECTIONS)[number] | null = null
      for (const id of SCROLL_SECTIONS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (y >= el.offsetTop - 1) current = id
      }

      if (!current) {
        setActive(null)
        return
      }
      if (current === 'portfolio') {
        setActive(null)
        return
      }
      setActive(NAV_SECTIONS.has(current) ? current : null)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [headerOffsetPx])

  return active
}
