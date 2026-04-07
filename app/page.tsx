'use client'

import dynamic from 'next/dynamic'

import AboutUs from '@/components/AboutUs'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Reveal } from '@/components/reveal'
import Services from '@/components/Services'
import Process from '@/components/Process'

const Portfolio = dynamic(() => import('@/components/Portfolio'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const Faq = dynamic(() => import('@/components/Faq'))
const ContactUs = dynamic(() => import('@/components/ContactUs'))
const Footer = dynamic(() => import('@/components/Footer'))

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
