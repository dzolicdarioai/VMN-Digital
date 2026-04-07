'use client'

import { useEffect, useState } from 'react'

/** In-page sections linked from the main nav (order matches scroll order on the home page). */
export const NAV_SECTION_IDS = [
  'services',
  'about',
  'process',
  'testimonials',
  'faq',
  'contact',
] as const

export type NavSectionId = (typeof NAV_SECTION_IDS)[number]

export function useActiveSection(
  sectionIds: readonly string[] = NAV_SECTION_IDS,
) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const headerOffset = 80

    const update = () => {
      const scrollY = window.scrollY
      let current: string | null = null
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + scrollY
        if (scrollY + headerOffset >= top - 32) {
          current = id
        }
      }
      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionIds])

  return activeId
}
