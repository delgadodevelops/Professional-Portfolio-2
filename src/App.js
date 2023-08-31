import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/preloader';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setLoading(false); // Set loading to false after a certain time
    }, 4000);
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="fade-in-container">
          <Navbar />
          <div className="content">
            <Element name="home">
              <Home />
            </Element>
            <Element name="about">
              <About />
            </Element>
            <Element name="skills">
              <Skills />
            </Element>
            <Element name="projects">
              <Projects />
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
          </div>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
