import React, { Component } from 'react';

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';


import './App.css';

import NavBar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing/Landing';
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingPage />
        <Work />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

