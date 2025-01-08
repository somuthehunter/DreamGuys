import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Workflow from './components/Workflow';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import Developers from './components/Developers';
import Contact from './components/Contact';
const App = () => {
  return (
      <>
      <Navbar />
      <div className="max-w7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Developers/>
        <Workflow />
        <Price />
        <Testimonials/>
        <Contact/>
      </div>
     
      </>
  
  )
}

export default App
