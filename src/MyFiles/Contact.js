// Contact.jsx
import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom"

const Contact = () => {
  // let myObj="Hello Pavan 1";

  const mydata=[
    {
      title:"Last Call for Istanbul",
      imgURL:"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXhSEC2-9vbS6dl2OyGvdNEtXvedYsS3vb3IaYkoXz2ht0CM8O_L-yRNKsuKrMUH5KpeDlPTwka2gOqanqhDr1g7beReGzRucnRra_dFWUhSIiLGbKeyKHLNlVQAADKcmSy2a7mJha3xZBC5yomOdUE7FdxGtY9evdJcEW77GYkYWA53iWDU3G81JT0vvXYDi5BCCU8DIPqfkmV7wgEbHg1CTuJ4AHhNrAkKtjbhVE_LkTZTxtKeH8xLEzmRMBFYisw6iUBO-FfMj97QnlvUCY3qJFK2VZd95sRrR4qqksdSUAwAkRbeLTED.jpg?r=107",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      title:"Falling for Christmas",
      imgURL:"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSC3NdkghBW8jP4DpGFI0cVhsKTgG8xwHntfisWxpVPaBE2WJXVFP90EKM1tHI2TQe_nquIqTWnj9UGt5RVMHK2hwABWjY7qU_9bnC89vMgSBdGi0V7QOh0_cmcy-pB5AHbk.jpg?r=1e5",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      title:"Purple Hearts",
      imgURL:"https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSb23idAVxcLh1AfeU6oGFhVZY1bQYp-4_3UmmHgNegXyPmtBW9F5IdmKvgq4yr1vzFO0khKUwrZy6Ee1gZVd73r1XQquqrECYedztnOd8eE7b4Ufxf0dSFRgPwayZqg_wPI.jpg?r=2c8",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
  ]

  return(
    <>
        <Header/>
           
            <div className='container'>
               {/* <Movie myObj={myObj}/> */}
               <div className='row'>
               {mydata.map((eachObj, index)=>{
                 const {title, imgURL, description} = eachObj;
                 return(
                  <div class="col-sm-4 text-center mt-5">
                  <div class="card">
                    <div class="card-body">
                       <Movie key={index} title={title} imgURL={imgURL} description={description} />
                       <Link to="/Props1" className='btn btn-primary'>Props1</Link>
                    </div>
                  </div>
                </div>
                 )
               })}
               </div>
            </div>

        <Footer/>
    </>
  )
};

          const Movie = (props) =>{
            return(
              <div className='main-container'>
                  <h3>{props.title || "Alternate tags"}</h3>
                  <img src={props.imgURL} alt='' />
                  <p>{props.description || "Alternate text"}</p>
                  {/* <h3>this is Movie Component</h3> */}
              </div>
            )
          }

export default Contact;
