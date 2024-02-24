// Home.jsx
import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {useNavigate} from 'react-router-dom'

const Home = () => {

const navigate = useNavigate();

  return(
      <>
        <Header/>
           <div className='container'>
             <h3 className='p-3'>Home Component</h3>
             <button className="btn btn-info" onClick={()=> navigate('/NavigationOtherPage')}>Back to Navigation Page</button>
           </div>
        <Footer/>
      </>
   )
};

export default Home;
