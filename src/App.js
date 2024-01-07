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
import Usestate6 from './MyFiles/Hooks/Usestate6';
import Usestate7 from './MyFiles/Hooks/Usestate7';
import Useeffect1 from './MyFiles/Hooks/Useeffect/Useeffect1';
import Useeffect2 from './MyFiles/Hooks/Useeffect/Useeffect2';
import Useeffect3 from './MyFiles/Hooks/Useeffect/Useeffect3';
import Useeffect4 from './MyFiles/Hooks/Useeffect/Useeffect4';
import Useeffect5 from './MyFiles/Hooks/Useeffect/Useeffect5';
import Usereducer from './MyFiles/Hooks/Usereducer/Usereducer';
import Usereducer1 from './MyFiles/Hooks/Usereducer/Usereducer1';
import UseContext1 from './MyFiles/Hooks/Usecontext/Usecontext1';
import Usereducer2 from './MyFiles/Hooks/Usereducer/Usereducer2';
import Usereducer3 from './MyFiles/Hooks/Usereducer/Usereducer3';
import Usesteexp from './MyFiles/Hooks/Usesteexp';

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
          <Route path="/usestate7" element={<Usestate7/>}/>
          <Route path="/useeffect1" element={<Useeffect1/>}/>
          <Route path="/useeffect2" element={<Useeffect2/>}/>
          <Route path="/useeffect3" element={<Useeffect3/>}/>
          <Route path="/useeffect4" element={<Useeffect4/>}/>
          <Route path="/useeffect5" element={<Useeffect5/>}/>
          <Route path="/useContext1" element={<UseContext1/>}/>
          <Route path="/Usereducer" element={<Usereducer/>}/>
          <Route path="/Usereducer1" element={<Usereducer1/>}/>
          <Route path="/Usereducer2" element={<Usereducer2/>}/>
          <Route path="/Usereducer3" element={<Usereducer3/>}/>
          <Route path="/Usesteexp" element={<Usesteexp/>}/>
          <Route path="*" element={<Nopage/>} />
      </Routes>
  </Router>
  );
};

export default App;
