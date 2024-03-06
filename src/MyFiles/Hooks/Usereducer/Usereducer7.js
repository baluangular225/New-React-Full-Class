import React,{useEffect, useReducer, useState} from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Loader from "../../../images/Loading-img.gif"

const Usereducer7 = () =>{

    const reducer = (state, action) =>{
        if (action.type === "FETCH_API") {
            return {
                ...state,
                userData: action.payLoad,
            };
        }
        if(action.type === "LOADING"){
            return{
                ...state,
                isLoading:action.payLoad
            }
        }
        if(action.type === "DELETE_USER"){
            const userDelete = state.userData.filter((eachData)=>{
                return eachData.id !== action.payLoad
            })
            return{
                ...state,
                userData:userDelete
            }
        }
        if(action.type === "ONCLICK_EDIT"){
            return{
                ...state,
                isEditing:action.payLoad
            }
        }
        if(action.type === "UPDATE_DATA"){
            const dataUpdate = state.userData.map((eachData)=>{
                if(eachData.id === action.payLoad.id){
                    return{
                    id:action.payLoad.id,
                    name:action.payLoad.name,
                    email:action.payLoad.email,
                    website:action.payLoad.website
                    }
                }else{
                    return eachData;
                }
            })
            return{
                ...state,
                userData:dataUpdate
            }

        }

        return state; 
    }

    const initinalstate ={
        userData:[],
        isLoading:false,
        isEditing:{status:false, id:'', name:'', email:'', website:''}
    }

    const apiFetch = async (apiUrl)=>{
           dispatch({type:'LOADING', payLoad:true});
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            dispatch({type:"FETCH_API", payLoad:data});
            dispatch({type:'LOADING', payLoad:false});
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = (id) =>{
        dispatch({type:"DELETE_USER", payLoad:id})
    }

    const updateData = (id, name, email, website) => {
        dispatch({ type: "UPDATE_DATA", payLoad: { id, name, email, website } });
        dispatch({ type: 'ONCLICK_EDIT', payLoad: { status: false, id: '', name: '', email: '', website: '' } });
    }

    useEffect(()=>{
       apiFetch('https://jsonplaceholder.typicode.com/users');
    },[])

    const [state, dispatch] = useReducer(reducer, initinalstate);

    return(
        <div>
            <Header/>
              <div className="container">

                  {
                    state.isEditing?.status && <EditForm
                    id={state.isEditing.id}
                    comingName={state.isEditing.name}
                    comingEmail={state.isEditing.email}
                    comingWebsite={state.isEditing.website}
                    updateData={updateData}
                    onCancel={() => dispatch({ type: 'ONCLICK_EDIT', payLoad: { status: false, id: '', name: '', email: '', website: '' } })}
                />
                  }

                    {state.isLoading && <h3 className="text-center mt-5"><img src={Loader} alt={Loader} /></h3>} 
                  <div className="row">
                     {
                        state.userData.map((eachData)=>{
                            const {id, name, email, website} = eachData;
                            return(
                                <div key={id} className="col-4 col-xs-12">
                                    <div className="shadow p-3 mb-3">
                                        <p>{name}</p>
                                        <p>{email}</p>
                                        <p>{website}</p>
                                        <div className="d-grid gap-0 d-md-flex justify-content-md-end">
                                            <button className="btn btn-danger rounded-0" onClick={()=> handleDelete(id)}>Delete</button>
                                            <button className="btn btn-info rounded-0" onClick={()=> dispatch({type:'ONCLICK_EDIT', payLoad:({status:true, id:id, name, email,website})})}>Edit</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                     }
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

    return(
        <div className="shadow p-3 mb-3 mt-3">
            <form>
                <input type="text" className="form-control mb-2" id="name" value={name} onChange={(e)=> setName(e.target.value)} />
                <input type="email" className="form-control mb-2" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input type="text" className="form-control mb-2" id="website" value={website} onChange={(e)=> setWebsite(e.target.value)} />
                <input type="submit" className="btn btn-primary mb-2" onClick={()=> updateData (id, name, email, website)} />
            </form>
        </div>
    )
}

export default Usereducer7;