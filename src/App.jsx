import React from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Why from './Components/Why/Why'
import How from './Components/How/How'
import About from './Components/About/About'
import Cta from './Components/Cta/cta'
import Faq from './Components/Faq/Faq'
import Testimonial from './Components/Testimonial/Testimonial'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Why/>
    <How/>
    <About/>
    <Cta/>
    <Testimonial/>
    <Blog/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default App