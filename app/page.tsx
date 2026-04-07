'use client'

import dynamic from 'next/dynamic'

import AboutUs from '@/components/AboutUs'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Reveal } from '@/components/reveal'
import Services from '@/components/Services'
import Process from '@/components/Process'
import { SectionSkeleton } from '@/components/section-loading'

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <SectionSkeleton />,
})
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <SectionSkeleton />,
})
const Faq = dynamic(() => import('@/components/Faq'), {
  loading: () => <SectionSkeleton />,
})
const ContactUs = dynamic(() => import('@/components/ContactUs'), {
  loading: () => <SectionSkeleton />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <SectionSkeleton />,
})

export default function Home() {
  return (
    <main className="page-shell min-h-screen bg-background">
      <Header />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <AboutUs />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <Portfolio />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <ContactUs />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  )
}
