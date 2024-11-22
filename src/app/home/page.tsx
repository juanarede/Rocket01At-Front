import AboutUs from '@/components/about-us/AboutUs'
import Feature from '@/components/feature/Feature'
import Header from '@/components/header/Header'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <Feature/>
      <AboutUs/>
    </div>
  )
}
