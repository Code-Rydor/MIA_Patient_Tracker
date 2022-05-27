import React from "react";
import image from "../../images/clipboard.jpg"
import "bootswatch/dist/morph/bootstrap.min.css";
import "./HomePage.css"



const MIAHomePage = () => {

    return ( 
        <div className="container" >
            <img src={image} />
            <h1 className="upper-centered">Welcome to the MIA Patient Tracker</h1>
            <br />
            <h3 className="centered">Click "Make Contact" to get started</h3>
        </div>
     );
}
 
export default MIAHomePage;