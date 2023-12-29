import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Usestate5 = () =>{
    // const newArray=[
    //     {
    //         text:"Hello",
    //         id:"dcjd bcjdsbj"
    //     },
    //     {
    //         text:"Hello World",
    //         id:"cnsdjcnsdjncj"
    //     }
    // ]
    const [list,setList]= useState([]);
    const [message,setMessage] = useState({
        text:"",
        id:""
    });

    const [edit, setedits] = useState({
        id:'',
        isEdit:false
    })

    const handleMessage = (e) =>{
        setMessage({
            ...message,
            text:e.target.value
        })
    }

    const handleDelete = (id) =>{
       const listfilter = list.filter((eachItem)=>{
          return eachItem.id !== id
       })
    //    console.log(listfilter);
          setList(listfilter)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newObj={
            text:message.text,
            id:new Date().getTime().toString(),
        }
        console.log(newObj);
        setList([...list, newObj]);
        setMessage({
            ...message,
            text:'',
            id:''
        })
    }

    const handleEdit = (id) =>{
        setedits({
            ...edit,
            id:id,
            isEdit:true
        });
        const editvalue = list.find((eachItem)=> eachItem.id === id)
        console.log(editvalue);
        setMessage({
            ...message,
            text:editvalue.text,
            id:editvalue.id
        })
    }

    const handleEditing = (e) =>{
        e.preventDefault();
        const Todos = list.map((eachItem)=>{
            if(eachItem.id === edit.id){
                 return{
                    text:message.text,
                    id:edit.id
                 }
            }else{
                return eachItem;
            }
        });
        console.log(Todos);
        setList(Todos);
        setMessage({
            text:'',
            id:''
        })
        setedits({
            id:'',
            isEdit:false
        })
    }


    return(
        <>      
         <Header/>
         <div className="container">
            <h3 className="mt-5">useState 5 </h3>
            
            <div className="">
               <form>
                  <input type="text" className="form-control" id="message" name="message" value={message.text} onChange={handleMessage} />
                  {
                    edit.isEdit ? (<button className="btn btn-primary" onClick={handleEditing}>Edit</button>) :
                     (<button className="btn btn-info" onClick={handleSubmit}>Add</button>)
                  }
                  
               </form>
               <hr/>
               {
                list.length === 0 && <h4>there is no data in the list</h4>
               }
               <div className="row">
                  {
                    list.map((eachItem)=>{
                        const {text, id} = eachItem;
                        return(
                            <div key={id} className="">
                                <p>{text}</p>
                                <button className="btn btn-info" onClick={()=>handleEdit(id)}>Edit</button>
                                <button className="btn btn-danger" onClick={()=>handleDelete(id)}>Danger</button>
                            </div>
                        )
                    })
                  }
               </div>
            </div>

        </div>
        <Footer/>
        </>

    )
}

export default Usestate5;