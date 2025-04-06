import React from 'react'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
    <Header />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default App