import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Properties from './components/Properties'
import OurTeam from './components/OurTeam'
import FeaturedSection from './components/FeaturedSection'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Contact from './components/Contact'
import ScrollToTop from 'react-scroll-to-top'
import Reviews from './components/Reviews'
import TopGallery from './components/TopGallery'
import 'react-multi-carousel/lib/styles.css';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <Properties />
      <TopGallery />
      <OurTeam />
      <FeaturedSection />
      <Reviews />
      <CTA />
      <Faq />
      <Contact />
      <Footer />
      <ScrollToTop smooth className='transition-all flex justify-center items-center' />
    </div>
  )
}
