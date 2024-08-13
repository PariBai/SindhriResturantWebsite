import { useState } from 'react'
import Navbar from './componnets/Navbar'
import Home from './componnets/Home'
import About from './componnets/About.jsx'
import Contact from './componnets/Contact.jsx'
import Team from './componnets/Team.jsx'
import Footer from './componnets/Footer.jsx'
import Reviews from './componnets/Reviews.jsx'
import Reservation from './componnets/Reservation.jsx'
import Menu from  './componnets/Menu.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />

       
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
