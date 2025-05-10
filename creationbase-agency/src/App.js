import React from 'react';
import './App.css';
import './index.css';
import './HeroSection.css';

import HeroSection from './HeroSection';
import Header from './Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';    
import Contact from './Contact';
import Design from './Design';
import Development from './Development';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Newsletter from './Newsletter';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <About />
                <Development />
                <Design />
                <Testimonials />
                <Newsletter />
              </>
            } />
           
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
    
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
