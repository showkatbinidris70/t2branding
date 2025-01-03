import React from 'react';

import './App.css'
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
