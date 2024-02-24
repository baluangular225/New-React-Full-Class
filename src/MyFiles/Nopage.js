import {React} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Nopage = ()=>{
    return(
        <div>
            <Header/>
                <div className="container">
                    <h3 className="p-3">404 Not Found</h3>
                    <link to="/"></link>
                </div>
            <Footer/>
        </div>
    )
}

export default Nopage;