import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Usestate5 = () =>{
    // const newarray =[
    //     {
    //         text:"Hello",
    //         id:"fvdfrbdbfgbf"
    //    },
    //    {
    //         text:"Hello world",
    //         id:"bfgfdbfgx"
    //    }
    // ]
    const [list,setList] = useState([]);
    const [message, setMessage] = useState({
         text:"",
         id:""
    });

    const changemessage = (e) =>{
        setMessage({
            ...message,
            text:e.target.value,
        })
    }

    const handledelete = (id) =>{
        // console.log(id);
        const listfilter = list.filter((eachitem)=>{
            return eachitem.id !== id;
        })
        // console.log(listfilter);
        setList(listfilter);
    }

    const handlesubmit = (e) =>{
       e.preventDefault();
       let newTodo= {
        text:message.text,
        id:new Date().getTime().toString(),
       }
    //    console.log(newTodo);
     setList([...list, newTodo]);
     setMessage({
        text:"",
        id:""
    })
    }

    return(
        <>      
         <Header/>
         <div className="container">
            <h3>useState 5 </h3>
            {/* <p>https://www.youtube.com/watch?v=PdX9SA7id7M</p> */}

            <div className="">
                <form>
                    <input type="text" className="" name="message" id="message" value={message.text} onChange={changemessage}/>
                    <button onClick={handlesubmit} type="submit">Add</button>
                    <hr/>
                    {list.length === 0 && <h4>There is no Data</h4>}
                    {
                        list.map((eachitem)=>{
                            const {text, id} =eachitem;
                           return(
                            <div key={id} className="items">
                                <h4>{text}</h4>
                                <button onClick={()=>handledelete(id)}>Delete</button>
                                <button>Edit</button>
                            </div>
                           )
                        })
                    }
                </form>
            </div>
        </div>
        <Footer/>
        </>

    )
}

export default Usestate5;