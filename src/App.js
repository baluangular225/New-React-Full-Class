import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
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
// import Usestate8 from './MyFiles/Hooks/Usestate8';
import Usestate88 from './MyFiles/Hooks/Usestate88';
import Usestate99 from './MyFiles/Hooks/Usestate99';
import Usestate10 from './MyFiles/Hooks/Usestate10';
import Usestate11 from './MyFiles/Hooks/Usestate11';
import Usestate12 from './MyFiles/Hooks/Usestate12';
import Usestate13 from './MyFiles/Hooks/Usestate13';
import Usestate14 from './MyFiles/Hooks/Usestate14';
import Usestate15 from './MyFiles/Hooks/Usestate15';
import Useeffect1 from './MyFiles/Hooks/Useeffect/Useeffect1';
import Useeffect2 from './MyFiles/Hooks/Useeffect/Useeffect2';
import Useeffect3 from './MyFiles/Hooks/Useeffect/Useeffect3';
import Useeffect4 from './MyFiles/Hooks/Useeffect/Useeffect4';
import Useeffect5 from './MyFiles/Hooks/Useeffect/Useeffect5';
import Useeffect6 from './MyFiles/Hooks/Useeffect/Useeffect6';
import Useeffect7 from './MyFiles/Hooks/Useeffect/Useeffect7';
import Useeffect8 from './MyFiles/Hooks/Useeffect/Useeffect8';
import Usereducer from './MyFiles/Hooks/Usereducer/Usereducer';
import Usereducer1 from './MyFiles/Hooks/Usereducer/Usereducer1';
import UseContext1 from './MyFiles/Hooks/Usecontext/Usecontext1';
import Usereducer2 from './MyFiles/Hooks/Usereducer/Usereducer2';
import Usereducer3 from './MyFiles/Hooks/Usereducer/Usereducer3';
import Usereducer5 from './MyFiles/Hooks/Usereducer/Usereducer5';
import Usereducer6 from './MyFiles/Hooks/Usereducer/Usereducer6';
import Usereducer7 from './MyFiles/Hooks/Usereducer/Usereducer7';
import Usereducer8 from './MyFiles/Hooks/Usereducer/Usereducer8';
import Usereducer9 from './MyFiles/Hooks/Usereducer/Usereducer9';
import Usereducer10 from './MyFiles/Hooks/Usereducer/Usereducer10';
import Usereducer11 from './MyFiles/Hooks/Usereducer/Usereducer11';
import Usereducer12 from './MyFiles/Hooks/Usereducer/Usereducer12';
import Usereducer13 from './MyFiles/Hooks/Usereducer/Usereducer13';
import Usecustome1 from './MyFiles/CustomeHooks/Usecustome1';
import Useexp1 from './MyFiles/CustomeHooks/Useexp1';
import Finalapi1 from './MyFiles/CustomeHooks/Finalapi1';
import Finalapi2 from './MyFiles/CustomeHooks/Finalapi2';
// import Usereducer4 from './MyFiles/Hooks/Usereducer/Usereducer4';
import Useref1 from './MyFiles/Hooks/Useref/Useref1';
import Useref2 from './MyFiles/Hooks/Useref/Useref2';
import Usesteexp from './MyFiles/Hooks/Usesteexp';
import PageTitleOne from './MyFiles/CustomeHooks/PageTitleOne';
import UsePageTitle from './MyFiles/CustomeHooks/UsePageTitle';
import NavigationOtherPage from './MyFiles/RouterHooks/NavigationOtherPage';
import Nastedexp1 from './MyFiles/RouterHooks/Nastedexp1';
import Nastedexp2 from './MyFiles/RouterHooks/Nastedexp2';
import Users from './MyFiles/DynamicRoutes/Users';
import Userdetails from './MyFiles/DynamicRoutes/UserDetails';
import Users1 from './MyFiles/DynamicRoutes/Users1';
import UserDetails1 from './MyFiles/DynamicRoutes/UserDetails1';
import About1 from './MyFiles/RouterHooks/About1';
import About2 from './MyFiles/RouterHooks/About2';
import Navigation1 from './MyFiles/RouterHooks/Navigation1';
import NewUser from './MyFiles/DynamicRoutes/Newuser';
import Userdata from './MyFiles/DynamicRoutes/Userdata';
import Usestate77 from './MyFiles/Hooks/Usestate77';
import Alldetails from './MyFiles/DynamicRoutes/Alldetails';
import Mydata from './MyFiles/DynamicRoutes/Mydata';
import Usereducer14 from './MyFiles/Hooks/Usereducer/Usereducer14';
import Mydetails from './MyFiles/DynamicRoutes/Mydetails';
import Use11 from './MyFiles/CustomeHooks/Use11';
import Usereducer15 from './MyFiles/Hooks/Usereducer/Usereducer15';
import User15 from './MyFiles/DynamicRoutes/User15';
import Usestate66 from './MyFiles/Hooks/Usestate66';
import Use66 from './MyFiles/DynamicRoutes/Use66';
import Usereducer16 from './MyFiles/Hooks/Usereducer/Usereducer16';
import User16 from './MyFiles/CustomeHooks/User16';
const LazyUsereducer4 = lazy(() => import('./MyFiles/Hooks/Usereducer/Usereducer4'));
const LazyUsestate8 = lazy(() => import('./MyFiles/Hooks/Usestate8'));


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
          <Route path="/usestate8" element={<LazyUsestate8/>}/>
          <Route path="/usestate88" element={<Usestate88/>} />
          <Route path="/usestate99" element={<Usestate99/>} />
          <Route path='/usestate77' element={<Usestate77/>} />
          <Route path='/usestate77/:userId' element={<Alldetails/>} />
          <Route path="/usestate10" element={<Usestate10/>} />
          <Route path="/usestate11" element={<Usestate11/>} />
          <Route path='/usestate11/:userId' element={<Use11/>} />
          <Route path="/usestate12" element={<Usestate12/>} />
          <Route path="/usestate13" element={<Usestate13/>} />
          <Route path="/usestate14" element={<Usestate14/>} />
          <Route path="/usestate15" element={<Usestate15/>} />
          <Route path='/usestate66' element={<Usestate66/>} />
          <Route path='/usestate66/:userId' element={<Use66/>} />
          <Route path="/useeffect1" element={<Useeffect1/>}/>
          <Route path="/useeffect2" element={<Useeffect2/>}/>
          <Route path="/useeffect3" element={<Useeffect3/>}/>
          <Route path="/useeffect4" element={<Useeffect4/>}/>
          <Route path="/useeffect5" element={<Useeffect5/>}/>
          <Route path="/useeffect6" element={<Useeffect6/>}/>
          <Route path='/useeffect7' element={<Useeffect7/>} />
          <Route path='/useeffect8' element={<Useeffect8/>} />
          <Route path="/useContext1" element={<UseContext1/>}/>
          <Route path="/Usereducer" element={<Usereducer/>}/>
          <Route path="/Usereducer1" element={<Usereducer1/>}/>
          <Route path="/Usereducer2" element={<Usereducer2/>}/>
          <Route path="/Usereducer3" element={<Usereducer3/>}/>
          <Route path="/Usereducer5" element={<Usereducer5/>}/>
          <Route path="/Usereducer6" element={<Usereducer6/>}/>
          <Route path="/Usereducer7" element={<Usereducer7/>}/>
          <Route path="/Usereducer8" element={<Usereducer8/>}/>
          <Route path="/Usereducer9" element={<Usereducer9/>}/>
          <Route path="/Usereducer10" element={<Usereducer10/>}/>
          <Route path='/Usereducer10/:userId' element={<Mydata/>} />
          <Route path='/Usereducer11' element={<Usereducer11/>} />
          <Route path='/Usereducer12' element={<Usereducer12/>} />
          <Route path='/Usereducer12/:userId' element={<NewUser />} />
          <Route path='/Usereducer13' element={<Usereducer13/>} />
          <Route path='/Usereducer13/:userId' element={<Userdata/>} />
          <Route path='/Usereducer14' element={<Usereducer14/>} />
          <Route path='/Usereducer14/:userId' element={<Mydetails/>} />
          <Route path='/Usereducer15' element={<Usereducer15/>} />
          <Route path='/Usereducer15/:userId' element={<User15/>} />
          <Route path='/Usereducer16' element={<Usereducer16/>} />
          <Route path='/Usereducer16/:userId' element={<User16/>} />
          <Route path="/Usecustome1" element={<Usecustome1/>}/>
          <Route path="/Useexp1" element={<Useexp1/>}/>
          <Route path="/Finalapi1" element={<Finalapi1/>}/>
          <Route path="/Finalapi2" element={<Finalapi2/>}/>
          <Route path="/Usereducer4" element={<LazyUsereducer4/>}/>
          <Route path="/Useref1" element={<Useref1/>}/>
          <Route path="/Useref2" element={<Useref2/>}/>
          <Route path="/Usesteexp" element={<Usesteexp/>}/>
          <Route path="/PageTitleOne" element={<PageTitleOne/>} />
          <Route path="/UsePageTitle" element={<UsePageTitle/>} />
          <Route path='/Navigation1' element={<Navigation1/>}>
            <Route index element={<About1/>} />
            <Route path='About1' element={<About1/>}/>
            <Route path='About2' element={<About2/>} />
          </Route>
          <Route path='/NavigationOtherPage' element={<NavigationOtherPage/>} >
            <Route index element={<Nastedexp1/>} />
            <Route path='Nastedexp1' element={<Nastedexp1/>} />
            <Route path='Nastedexp2' element={<Nastedexp2/>} />
          </Route>
          <Route path='/Users' element={<Users/>} />
          <Route path='/Users/:userId' element={<Userdetails/>} />
          <Route path='/Users1' element={<Users1/>} />
          <Route path='/Users1/:UserId' element={<UserDetails1/>} />
          <Route path="*" element={<Nopage/>} />
      </Routes>
  </Router>
  );
};

export default App;
