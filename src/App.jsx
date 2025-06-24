import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/navbar'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='w-full h-screen '>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App