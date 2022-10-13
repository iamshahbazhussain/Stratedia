import React from 'react'
import Analyze from './Components/Analyze/Analyze'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Plan from './Components/Plan/Plan'
import Use from './Components/Use/Use'
import Where from './Components/Where/Where'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Where/>
    <Analyze/>
    <Plan/>
    <Use/>
      <Carousel/>
        
      <Footer/>
    </div>
  )
}

export default Home
