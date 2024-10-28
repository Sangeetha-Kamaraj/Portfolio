import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Contact from '../Pages/Contact';

function MainRoutes() {
  return (
    <Router>
      {/* Header is always displayed on every page */}
      <Header />
      
      {/* Define the routes for the application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* Footer is always displayed on every page */}
      <Footer />
    </Router>
  );
}

export default MainRoutes;
