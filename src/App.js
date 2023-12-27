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
import Usestate1 from './MyFiles/Hooks/Usestate1';
import Usestate2 from './MyFiles/Hooks/Usestate2';
import Usestatetwo from "./MyFiles/Hooks/Usestatetwo2";
import Usestate3 from './MyFiles/Hooks/Usestate3';
import Usestate4 from './MyFiles/Hooks/Usestate4';
import Usestate5 from './MyFiles/Hooks/Usestate5';
import Usestate6 from './MyFiles/Hooks/Usestate6'

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
          <Route path="/usestate1" element={<Usestate1/>}/>
          <Route path="/usestate2" element={<Usestate2/>}/>
          <Route path="/Usestatetwo" element={<Usestatetwo/>}/>
          <Route path="/usestate3" element={<Usestate3/>}/>
          <Route path="/usestate4" element={<Usestate4/>}/>
          <Route path="/usestate5" element={<Usestate5/>}/>
          <Route path="/usestate6" element={<Usestate6/>}/>
          <Route path="*" element={<Nopage/>} />
      </Routes>
  </Router>
  );
};

export default App;
