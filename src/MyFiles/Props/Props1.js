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
                    return(
                        <div className="col-sm-4 text-center">
                            <Props2 key={eachObj.id} title={eachObj.title} url={eachObj.url} thumbnailUrl={eachObj.thumbnailUrl} id={eachObj.id} />
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