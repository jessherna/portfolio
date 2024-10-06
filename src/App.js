import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Navbar />
      <Element name="projects" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <Projects />
      </Element>
      <Element name="about me" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <About />
      </Element>
      <Element name="contact" style={{ paddingTop: '70px', marginTop: '-70px' }}>
        <Footer />
      </Element>
    </div>
  );
}

export default App;