import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";

const MIAHomePage = () => {

    return ( 
        <div>
            {/* <h1>Welcome {user.username}!</h1>
            <Link to="/rescheduleform">Add Appointment</Link>

            {patients &&
        patients.map((patient) => (
          <p key={patient.id}>
            {patient.first_name} {patient.last_name} {patient.phone_number} {patient.email}
          </p>
        ))} */}
        </div>
     );
}
 
export default MIAHomePage;