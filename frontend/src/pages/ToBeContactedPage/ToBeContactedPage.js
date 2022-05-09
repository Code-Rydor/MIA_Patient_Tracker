import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import DisplaySearchedUsers from '../../components/DisplaySearchedUsers/DisplaySearchedUsers';
import SearchForUser from '../../components/SearchForUser/SearchForUser';
import axios from "axios";

//This page will show the table containing list of patients to be contacted
//! Consider using table from Video Games

const ToBeContactedPage = () => {

    const [user, token] = useAuth();
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([])
    
    useEffect(() => {
        getAllUsers();
    }, [token]);

    const getAllUsers = async () => {
    try {
        let response = await axios.get("http://127.0.0.1:8000/api/auth/users/", {
        headers: {
            Authorization: "Bearer " + token,
        },
        });
        setUsers(response.data);
    } catch (error) {
        console.log(error.message);
    }
    };
    const handleSubmit = (event) => {
      event.preventDefault()
      let filteredResults = users.filter((user) => {
        if (user.first_name.toLowerCase() == input.toLowerCase() ||
        user.last_name.toLowerCase() == input.toLowerCase() ||
        user.phone_number.includes(input))
          return true
      })
      setFilteredUsers(filteredResults)
    };
    return ( 
        <div>
            <SearchForUser handleSubmit={handleSubmit} input={input} setInput={setInput} />
            <DisplaySearchedUsers filteredUsers={filteredUsers} input={input} />
        </div>
     );
}
 
export default ToBeContactedPage;