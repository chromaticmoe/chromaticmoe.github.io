import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Work from "./components/work/Work"
import Contact from "./components/contact/Contact"
import Testimonials from './components/testimonials/Testimonials.jsx'
import Footer from './components/footer/Footer'
import ParticlesBackground from './components/particles-js/ParticlesBackground'
import { useState, useEffect } from 'react'

const App = () => {
  useEffect (() => {
      Aos.init({duration: 1000, offset: -300, disable: 'mobile'});
  }, [])

  const [navbarActive, setNavbarActive] = useState('')

  return (
    <div>
      <ParticlesBackground />
      <Header 
        whenClick={setNavbarActive}
      />
      <Navbar whenClicked={navbarActive}/>
      <About 
        animation='fade-right'
      />
      <Work 
        animation='fade-left'
      />
      {/* <Testimonials /> */}
      <Contact 
        animation='fade-right'
      />
      <Footer />
    </div>
  )
}

export default App