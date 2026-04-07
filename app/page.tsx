'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AboutUs from '@/components/AboutUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={scrollToContact} />
      <Hero onCTAClick={scrollToContact} />
      <Services />
      <AboutUs />
      <Process />
      <Testimonials />
      <ContactUs />
      <Footer onCTAClick={scrollToContact} />
    </main>
  )
}
