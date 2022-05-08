import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import DisplaySearchedPatients from '../../components/DisplaySearchedPatients/DisplaySearchedPatients';
import SearchForPatient from '../../components/SearchBar/SearchForPatient';
import axios from "axios";

//This page will show the table containing list of patients to be contacted
//! Consider using table from Video Games

const ToBeContactedPage = () => {

    const [user, token] = useAuth();
    const [patients, setPatients] = useState([]);
    const [input, setInput] = useState('');
    const [filteredPatients, setFilteredPatients] = useState([])
    
    useEffect(() => {
        getAllPatients();
    }, [token]);

    const getAllPatients = async () => {
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
    const handleSubmit = (event) => {
      event.preventDefault()
      let filteredResults = patients.filter((patient) => {
        if (patient.first_name.toLowerCase() == input.toLowerCase() ||
          patient.last_name.toLowerCase() == input.toLowerCase() ||
          patient.phone_number.includes(input))
          return true
      })
      setFilteredPatients(filteredResults)
    };
    return ( 
        <div>
            <SearchForPatient handleSubmit={handleSubmit} input={input} setInput={setInput} />
            <DisplaySearchedPatients filteredPatients={filteredPatients} input={input} />
        </div>
     );
}
 
export default ToBeContactedPage;