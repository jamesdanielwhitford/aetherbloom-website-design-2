// File: pages/index.js

import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import WhyAetherbloom from '../components/WhyAetherbloom/WhyAetherbloom'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import PricingCalculator from '../components/PricingCalculator/PricingCalculator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aetherbloom - UK Business Outsourcing Solutions</title>
        <meta name="description" content="Bridge UK excellence with South Africa's top talent. Cut costs by 40%+ while scaling customer service, tech support, and back-office teams." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <Hero />
      <WhyAetherbloom />
      <Services />
      <PricingCalculator />
      <Testimonials />
    </>
  )
}