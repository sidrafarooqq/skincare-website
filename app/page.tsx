import React from 'react'
import Home from './components/home'
import Features from './components/features'
import PremiumProducts from './components/product'
import About from './components/about'
import Footer from './components/footer'

function page() {
  return (
    <div>
      <Home/>
      <Features/>
      <PremiumProducts/>
      <About/>
      <Footer/>
    </div>
  )
}

export default page