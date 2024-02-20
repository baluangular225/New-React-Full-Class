import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loader from '../../images/Loading-img.gif'

const Usestate15 = () =>{

const [mydata, setMyData] = useState([]);
const [editid, setEditId] = useState(false);
const [name, setName] = useState();
const [email, setEmail] = useState();
const [website, setWebsite] = useState();
const [showform, setShowForm] = useState(false);
const [loading, setLoading] = useState(false)

const apiFetch = async (URL)=>{
    setLoading(true);
    try {
        const responsive = await fetch(URL);
        const data = await responsive.json();
        console.log(data);
        setMyData(data);
        setLoading(false);
    } catch (error) {
        console.log(error);
    }
}

const handleDelete = (id) =>{
    const deleteData = mydata.filter((eachData)=>{
        return eachData.id !== id;
    })
    setMyData(deleteData)
}

const handleEdit = (id, name, email, website) =>{
    setEditId(id);
    setName(name);
    setEmail(email);
    setWebsite(website);
    setShowForm(true)
}

const handleUpdate = () =>{
    const Todos = mydata.map((eachData)=>{
        if(eachData.id === editid){
            return{...eachData, name, email, website}
        }else{
            return eachData;
        }
    })
    setMyData(Todos);
    setEditId('');
    setName('');
    setEmail('');
    setWebsite('');
    setShowForm(false)
}

useEffect(()=>{
   apiFetch('https://jsonplaceholder.typicode.com/users');
},[])

if(loading){
    return <h3 className='text-center mt-5'><img src={Loader} alt={Loader} /></h3>
}

    return(
        <div>
            <Header/>
                 <div className='container'>
                  
                  {showform && (
                  <div className='p-3 shadow mt-4 mb-4'>
                     <h3 className='mb-2 mt-2'>User Updating</h3>
                     <input type='text' className='form-control mb-2' id='name' value={name} onChange={(e)=> setName(e.target.value)} />
                     <input type='email' className='form-control mb-2' id='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                     <input type='text' className='form-control mb-2' id='website' value={website} onChange={(e)=> setWebsite(e.target.value)} />
                     <input type='submit' className='btn btn-primary mb-2' onClick={()=> handleUpdate(editid)} />
                  </div>
                  )}

                  {!loading &&
                  <div className='row mt-4 mb-4'>
                    {
                        mydata.map((eachData)=>{
                            const {id, name, email, website} = eachData;
                            return(
                                <div key={id} className='col-4 col-xs-12'>
                                    <div className='shadow p-3 mb-3'>
                                        <p>{name}</p>
                                        <p>{email}</p>
                                        <p>{website}</p>
                                        <div className='d-grid gap-0 d-md-flex justify-content-md-end'>
                                            <button className='btn btn-danger rounded-0' onClick={()=> handleDelete(id)}>Delete</button>
                                            <button className='btn btn-info rounded-0' onClick={()=> handleEdit(id, name, email, website)}>Edit</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                  </div>
                  }

                 </div>
            <Footer/>
        </div>
    )
}

export default Usestate15;