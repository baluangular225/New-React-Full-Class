import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Loader from "../../images/Loading-img.gif"
import { Link, useNavigate } from "react-router-dom";

const Usestate102 = () =>{

 const [student, setStudent] = useState([]);
 const [loading, setLoading] = useState(false);
 const [isError, setIsError] = useState({status:false, msg:''});
 const [editId, setEditId] = useState(null);
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [website, setWebsite] = useState('');
 const [showError, setShowError] = useState(false);

 const navigate = useNavigate();

 const fetchApi = async (apiUrl) =>{
    setLoading(true);
    setIsError({status:false, msg:''});
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setStudent(data);
        setLoading(false);
        setIsError({status:false, msg:''});
        if(response.status === 404){
            throw new Error('Please check the API 404')
        }
    } catch (error) {
        console.log('Error Message', error);
        setLoading(false);
        setIsError({status:true, msg: error.message || 'something went to wrong'});
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
            throw new Error(data.message || 'Failed Student Delete')
        }
        setStudent(student.filter(eachStudent=> eachStudent.id !== id))
    } catch (error) {
        console.log('Error Message', error);
    }
 }

 const handleEdit = async (id, name, email, website) =>{
        setEditId(id);
        setName(name);
        setEmail(email);
        setWebsite(website);
        setShowError(true);
    
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type' : 'Application/json'
            },
            body: JSON.stringify({id, name, email, website})
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('Failed Student Eidt')
            }
        })
        .catch(error=>{
           console.log('Error Message', error)
        })
    } 

    const updateData = async () =>{
        const allStudent ={
            name:name,
            email:email,
            website:website
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${editId}`,{
            method:'PUT',
            headers:{
                'Content-Type' : 'Application/json'
            },
            body: JSON.stringify(allStudent)
        })
        if(!response.ok){
            const data = await response.json();
            throw new Error(data.message || 'Failed Student Update')
        }
        const newStudent = student.map((eachStudent)=>{
            if(eachStudent.id === editId){
                return{...eachStudent, ...allStudent}
            }else{
                return eachStudent
            }
        })
        setStudent(newStudent);
        setEditId(null);
        setName('');
        setEmail('');
        setWebsite('');
        setShowError(false);
    }
 

 useEffect(()=>{
   fetchApi('https://jsonplaceholder.typicode.com/users')
 },[])

 if(loading){
    return <h3 className="text-center mt-5"><img src={Loader} alt={Loader} /></h3>
 }

 if(isError?.status){
    return <h3 className="text-center mt-5" style={{color:'red'}}>{isError?.msg}</h3>
 }

    return(
        <div>
            <Header/>
                <div className="container">
                     <h3 className="mt-3 mb-3">Usestate102 Component</h3>

                    {showError && (
                     <div className="shadow p-3 mb-3 mt-3">
                        <input type="text" className="form-control mb-2" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
                        <input type="email" className="form-control mb-2" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                        <input type="text" className="form-control mb-2" name="website" value={website} onChange={(e)=> setWebsite(e.target.value)} />
                        <input type="submit" className="btn btn-primary mb-2" onClick={()=> updateData(editId)} />
                     </div>
                     )}

                   <div className="row">
                      {student.map((eachStudent)=>{
                        const {id, name, email, website} = eachStudent;
                        return(
                            <div key={id} className="col-4 col-xs-12">
                                <div className="shadow p-3 mb-2">
                                    <p>{name}</p>
                                    <p>{email}</p>
                                    <p>{website}</p>
                                    <div className="d-grid gap-0 d-md-flex justify-content-md-end">
                                        <button className="btn btn-danger rounded-0" onClick={()=> handleDelete(id)}>Delete</button>
                                        <button className="btn btn-info rounded-0 text-white" onClick={()=> handleEdit(id, name, email, website)}>Edit</button>
                                        <button className="btn btn-success rounded-0" onClick={()=> navigate(`/Usepost102`)}>Add</button>
                                        <Link className="btn btn-primary rounded-0" to={`/Usestate102/${eachStudent.id}`}>Deatils</Link>
                                    </div>
                                </div>
                            </div>
                        )
                      })}
                   </div>

                </div>
            <Footer/>
        </div>
    )
}

export default Usestate102;