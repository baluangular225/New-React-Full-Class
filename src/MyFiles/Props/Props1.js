import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Props2 from "./Props2";
import data from "../../data"


const Props1 = () =>{
    return(
        <>
        <Header />
        <section className="container">
            <div className="row">
            {
                data.map((eachObj)=>{
                    const {id, title, url, thumbnailUrl,} = eachObj;
                    return(
                        <div className="col-sm-4 text-center">
                            <Props2 key={id} title={title} url={url} thumbnailUrl={thumbnailUrl} id={id} />
                        </div>
                    );
                })
            }
            </div>
           
        </section>
        <Footer />
        </>
    )
}

export default Props1;