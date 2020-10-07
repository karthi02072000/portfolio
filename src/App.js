import React from 'react';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
