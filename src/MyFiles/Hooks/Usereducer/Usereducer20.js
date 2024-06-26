import React, { useEffect, useReducer, useState } from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Loader from "../../../images/Loading-img.gif"

const Usereducer20 = () =>{

 const reducer = (state, action) =>{

    if(action.type === "FETCH-API"){
        return{
            ...state,
            myAdmin:action.payLoad
        }
    }

    if(action.type === "LOADING"){
        return{
            ...state,
            isLoading:action.payLoad
        }
    }

    if(action.type === "ONCLICK_EDIT"){
        return{
            ...state,
            isEditing:action.payLoad
        }
    }

    if(action.type === "DELETE"){
        const newDelete = state.myAdmin.filter((eachAdmin)=>{
           return eachAdmin.id !== action.payLoad
        })
        return{
            ...state,
            myAdmin:newDelete
        }
    }

    if(action.type === "UPDATE_DATA"){
        const newAdmin = state.myAdmin.map((eachAdmin)=>{
           if(eachAdmin.id === action.payLoad.id){
            return{
                id:action.payLoad.id,
                name:action.payLoad.name,
                email:action.payLoad.email,
                website:action.payLoad.website
            }
           }else{
             return eachAdmin;
           }
        })
        return{
            ...state,
            myAdmin:newAdmin
        }
    }


   return state;
 }

 const initinalState = {
    myAdmin:[],
    isLoading:false,
    isError:({status:false, msg:''}),
    isEditing:{status:false, id:'', name:'', email:'', website:''}
 }

 const fetchApi = async (apiUrl) =>{
    dispatch({type:'LOADING', payLoad:true});
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        dispatch({type:'FETCH-API', payLoad:data});
        dispatch({type:'LOADING', payLoad:false});
    } catch (error) {
        console.log('Error Message', error);
        dispatch({type:'LOADING', payLoad:false});
    }
 }

 const handleDelete = async (id) =>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type' : 'Application/json'
            },
        });
        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message || 'Failed Admin Delete')
        }
        dispatch({type:'DELETE', payLoad:id});
    } catch (error) {
        console.log('Error Message', error)
    }
 }

 const [state, dispatch] = useReducer(reducer, initinalState);

 const updateData = async (id, name, email, website) =>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type' : 'Application/json'
            },
            body: JSON.stringify({id, name, email, website})
        })
        if(!response.ok){
            throw new Error('Failed Update Admin')
        }

    } catch (error) {
        console.log('Error Failed Update', error)
    }
    dispatch({type:'UPDATE_DATA', payLoad:{id:id, name:name, email:email, website:website}});
    dispatch({type:'ONCLICK_EDIT', payLoad:({status:false, id:'', name:'', email:'', website:''})})
 }

 useEffect(()=>{
   fetchApi('https://jsonplaceholder.typicode.com/users')
 },[])

    return(
        <div className="">
            <Header/>
               <div className="container">
                  <h4 className="mt-4 mb-3">Usereducer20 Component</h4>

                {state.isEditing.status && <EditForm id={state.isEditing.id} comingName={state.isEditing.name} comingEmail={state.isEditing.email} comingWebsite={state.isEditing.website} updateData={updateData} />}

                 {state.isLoading && <h3 className="text-center mt-5"><img src={Loader} alt={Loader} /></h3>}

                 <div className="row">
                    {state.myAdmin.map((eachAdmin) => {
                        const { id, name, email, website } = eachAdmin;
                        return (
                        <div key={id} className="col-4 col-xs-12">
                            <div className="shadow p-3 mb-2">
                                <p>{name}</p>
                                <p>{email}</p>
                                <p>{website}</p>
                                <div className="d-grid gap-0 d-md-flex justify-content-md-end">
                                    <button className="btn btn-danger rounded-0" onClick={()=> handleDelete(id)}>Delete</button>
                                    <button className="btn btn-info rounded-0" onClick={()=> dispatch({type:'ONCLICK_EDIT', payLoad:({status:true, id:id, name, email, website})})}>Edit</button>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                    </div>

               </div>
            <Footer/>
        </div>
    )
}

const EditForm = ({id, comingName, comingEmail, comingWebsite, updateData}) =>{

 const [name, setName] = useState(comingName || '');
 const [email, setEmail] = useState(comingEmail || '');
 const [website, setWebsite] = useState(comingWebsite || '');
 const [error, setError] = useState("");

 const handleUpdate = () => {
   if (!name || !email || !website) {
     setError("All fields are required");
     return;
   }
   updateData(id, name, email, website);
 };



    return(
        <div>
            <div className="shadow p-3 mt-4 mb-4">
                <input type="text" className="form-control mb-2" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
                <input type="email" className="form-control mb-2" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input type="text" className="form-control mb-2" name="website" value={website} onChange={(e)=> setWebsite(e.target.value)} />
                {error && <p className="text-danger">{error}</p>}
                <input type="submit" className="btn btn-primary mb-2" onClick={handleUpdate}/>
            </div>
        </div>
    )
}

export default Usereducer20;