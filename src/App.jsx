import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GradientBackground from './components/GradientBackground'; 



function App() {
  return (
    <div className='overflow-hidden'>
      <Nav />
      <GradientBackground>
      <Home />
      <About />
      <Details />
      <Projects />
      <Contact />
      <Footer />
    </GradientBackground>
    </div>
  );
}

export default App;
