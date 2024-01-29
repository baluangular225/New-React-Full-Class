import React,{useEffect, useState} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Usesatet88 = () =>{

const URL="https://jsonplaceholder.typicode.com/photos";

const [list, setList] = useState([]);
const [editid, setEditId] = useState(null);
const [title,setTitle] = useState();
const [url,setUrl] = useState();
const [thumbnailUrl,setthumbnailUrl] = useState();

const fetchApi = async (apiurl)=>{
    try {
        const responsive = await fetch(apiurl);
        const data = await responsive.json();
        setList(data)
    } catch (error) {
        console.log(error);
    }
}


useEffect(()=>{
    fetchApi(URL)
 },[])

 const handleDelete = (id) =>{
    // console.log(id);
    const deleteData = list.filter((eachData)=>{
        return eachData.id !== id
    })
    // console.log(deleteData);
    setList(deleteData);
 }

 const handleEdit = (id,title,url, thumbnailUrl) =>{
    setEditId(id);
     setTitle(title);
     setUrl(url);
     setthumbnailUrl(thumbnailUrl)
 }

 const handleUpdate = (id) => {
    const updatedData = list.map((eachData) => {
      if (eachData.id === id) {
        return { ...eachData, title: title , url:url, thumbnailUrl:thumbnailUrl};
      }
      return eachData;
    });
    setList(updatedData)

    // Optionally, clear the form fields after submission
    setEditId(null);
    setTitle('');
    setUrl('');
    setthumbnailUrl('');
  };
 

    return(
        <div>
            <Header/>
              <div className="container mt-4">
                 <h3>useState88 Component</h3>

                <div className="form_data shadow p-3">
                    <input type="text" className="form-control mt-2" id="title" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
                    <input type="text" className="form-control mt-2" id="url" name="url" value={url} onChange={(e)=> setUrl(e.target.value)} />
                    <input type="text" className="form-control mt-2" id="thumbnailUrl" name="thumbnailUrl" value={thumbnailUrl} onChange={(e)=> setthumbnailUrl(e.target.value)} />
                    <input type="submit" className="btn btn-info mt-2" onClick={()=> handleUpdate(editid)} />
                 </div>

                   <div className="row">
                        {
                            list.map((eachData)=>{
                                const {id, title, url, thumbnailUrl} = eachData;
                                return(
                                    <div key={id} className="col-4 mt-3 mb-3">
                                        <div className="shadow p-3 text-center">
                                            <p>{title}</p>
                                            <p>{url}</p>
                                            <p><img src={thumbnailUrl} alt={thumbnailUrl} /></p>
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button className="btn btn-danger" onClick={()=> handleDelete(id)}>Delete</button>
                                            <button className="btn btn-info" onClick={()=> handleEdit(id, title, url, thumbnailUrl)}>Edit</button>
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

export default Usesatet88;