import React from 'react';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Competencies from './components/Competencies/Competencies'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div id ="app">
      <Home />
      <About />
      <Competencies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
