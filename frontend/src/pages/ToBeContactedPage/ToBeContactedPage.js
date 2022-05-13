import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import DisplaySearchedUsers from '../../components/DisplaySearchedUsers/DisplaySearchedUsers';
import SearchForUser from '../../components/SearchForUser/SearchForUser';
import DisplayToBeContacted from '../../components/DisplayToBeContacted/DisplayToBeContacted';
import axios from "axios";
import "bootswatch/dist/cerulean/bootstrap.min.css";


const ToBeContactedPage = () => {

    const [user, token] = useAuth();
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState('');
    const [searchedUser, setSearchedUser] = useState([])
    
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
      console.log(filteredResults)
      setSearchedUser(filteredResults)
    };

    return ( 
        <div>
            <SearchForUser handleSubmit={handleSubmit} input={input} setInput={setInput} />
            <DisplaySearchedUsers users={searchedUser} input={input}
                token={token} />
            <br></br>
            <h3>To Be Contacted List</h3>
            <DisplayToBeContacted users={users} />
        </div>
     );
}
 
export default ToBeContactedPage;