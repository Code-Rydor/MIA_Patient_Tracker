import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";

const MIAHomePage = () => {

    const [user, token] = useAuth();
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/api/patients/", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            setPatients(response.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchPatients();
      }, [token]);

    return ( 
        <div className="container">
            <h1>Home Page for {user.username}!</h1>
            <Link to="/rescheduleform">Add Appointment</Link>

            {patients &&
        patients.map((patient) => (
          <p key={patient.id}>
            {patient.first_name} {patient.last_name} {patient.phone_number} {patient.email}
          </p>
        ))}
        </div>
     );
}
 
export default MIAHomePage;