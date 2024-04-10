import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import {useParams,useNavigate} from "react-router-dom"
import Horizontalbar from "../Hooks/Chats/Horizontalbar";

const Use104 = () =>{

 const {userId} = useParams();
 const [myList, setMyList] = useState([]);

 const navigate = useNavigate();

 const fetchApiData = async (id) =>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setMyList(data);
    } catch (error) {
        console.log('Error Message', error);
    }
 }

 useEffect(()=>{
   fetchApiData(userId);
 },[userId])

    return(
        <div>
            <Header/>
               <div className="container">

                   <div className="row shadow p-3 mb-4 mt-4">
                    <div className="col-6 col-xs-12">
                    <h3 className="mt-3 mb-3">Use104 Component</h3><hr/>
                      {myList ? (
                        <div className="col-12 col-xs-12">
                            <div>
                                <p><b>Name: </b>{myList.name}</p>
                                <p><b>Email: </b>{myList.email}</p>
                                <p><b>Website: </b>{myList.website}</p>
                                <p><b>Phone: </b>{myList.phone}</p>
                                <p><b>City: </b>{myList?.address?.city}</p>
                                <button className="btn btn-primary rounded-0" onClick={()=> navigate(`/Usestate104`)}>Go Back</button>
                            </div>
                        </div>
                      ):(
                        <p>Use104 ALL Details Loading...</p>
                      )}
                      </div>
                      <div className="col-6 col-xs-12">
                        <Horizontalbar/>
                      </div>
                   </div>

               </div>
            <Footer/>
        </div>
    )
}

export default Use104;