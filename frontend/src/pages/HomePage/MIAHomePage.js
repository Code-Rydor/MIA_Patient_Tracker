import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";
import "bootswatch/dist/cerulean/bootstrap.min.css";


const MIAHomePage = () => {

    return ( 
        <div>
        <h1>Welcome to the MIA Patient Tracker</h1>
        <br></br>
        <h3>Click "Make Contact" to get started</h3>

        </div>
     );
}
 
export default MIAHomePage;