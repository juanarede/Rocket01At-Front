import AboutUs from '@/components/about-us/AboutUs'
import Faq from '@/components/faq/faq'
import Feature from '@/components/feature/Feature'
import Header from '@/components/header/Header'
import HowItWorks from '@/components/how-it-works/HowItWorks'
import Pricing from '@/components/pricing/Pricing'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <HowItWorks/>
      <Feature/>
      <Pricing/>
      <AboutUs/>
      <Faq/>
    </div>
  )
}
