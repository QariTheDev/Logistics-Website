import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Tracking from './pages/Tracking'
import Navbar from './components/Navbar/MainNavbar/MainNavbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;