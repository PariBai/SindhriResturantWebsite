import { useState } from 'react'
import Navbar from './componnets/Navbar'
import Home from './componnets/Home'
import About from './componnets/About.jsx'
import Contact from './componnets/Contact.jsx'
import Team from './componnets/Team.jsx'
import Footer from './componnets/Footer.jsx'
import Reviews from './componnets/Reviews.jsx'

function App() {
  

  return (
    <>
     <Navbar/>
    
     <Home/>
     <About/>
     <Reviews/>
     <Contact/>
     

     <Team/>
     
     <Footer/>
    </>
  )
}

export default App
