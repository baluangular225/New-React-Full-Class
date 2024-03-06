// About.jsx
import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  return(
       <>
        <Header/>
              <div className='container'>
                  <h3 className='p-3'>About Component</h3>
                  <button className='btn btn-primary' onClick={()=> navigate('/Navigation1')}>Navigation1</button>
              </div>
          <Footer/>
       </>
  ) 
};

export default About;
