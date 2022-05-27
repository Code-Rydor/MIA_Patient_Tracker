import React from "react";
import image from "../../images/smallclipboard.jpg"
import "bootswatch/dist/morph/bootstrap.min.css";
import "./HomePage.css"



const MIAHomePage = () => {

    return ( 
        <div className="img-container" >
            {/* <img src={image} /> */}
            <h1 className="upper-centered">Welcome To The <br></br>MIA Patient Tracker</h1>
            {/* <h1 className="centered">MIA Patient Tracker</h1> */}
        </div>
     );
}
 
export default MIAHomePage;