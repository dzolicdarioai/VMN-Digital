'use client'

import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import { Reveal } from '@/components/reveal'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

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
        <Testimonials />
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
