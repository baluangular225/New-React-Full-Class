import React,{useState} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Usestate4 = () =>{

   const [firstname,setFirstname] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');

//    const namechange = (e) =>{
//     // console.log(e.target.value)
//     setFirstname(e.target.value);
//    }

//    const changeemail = (e) =>{
//     setEmail(e.target.value);
//    }

//    const changepassword = (e) =>{
//     setPassword(e.target.value);
//    }

// const handleall= (e,  name) =>{
//   if(name === "firstName"){
//     setFirstname(e.target.value);
//   }else if(name === "email"){
//     setEmail(e.target.value);
//   }else if(name === "password"){
//     setPassword(e.target.value)
//   }
// }

   const handleSubmit = (e) =>{
     e.preventDefault();
    const formObj={
        firstname:firstname,
        email:email,
        password:password
    };
    console.log(formObj);
    
   }

    return(
        <>
          <Header/>
           <div className="container">
              <h3 className="mt-5">Form Handling</h3>

              <div className="row forms">
              <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                           <input type="text" className="form-control" id="name" name="name" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            {/* <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e)=>handleall(e, "email")} /> */}
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
              </div>

           </div>
         <Footer/>
        </>
    )
}

export default Usestate4;