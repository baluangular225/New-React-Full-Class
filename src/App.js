import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from "./MyFiles/Home";
import About from "./MyFiles/About";
import Contact from "./MyFiles/Contact";
import Nopage from "./MyFiles/Nopage";
import Services from './MyFiles/Services';
import Props1 from './MyFiles/Props/Props1';
import Props2 from './MyFiles/Props/Props2';
import Props3 from './MyFiles/Props/Props3';
import Events1 from './MyFiles/Events/Events1';
import { Imports } from './MyFiles/ImportsandExports/Imports';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/props1" element={<Props1/>}/>
          <Route path="/props2" element={<Props2/>}/>
          <Route path="/props3" element={<Props3/>}/>
          <Route path="/events1" element={<Events1/>}/>
          <Route path="/imports" element={<Imports/>}/>
          <Route path="*" element={<Nopage/>} />
      </Routes>
  </Router>
  );
};

export default App;
