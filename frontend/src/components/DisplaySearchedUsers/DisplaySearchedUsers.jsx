import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

const DisplaySearchedUsers = ({ users, token }) => {

 
    
    // function handlePatchSubmit() {
    //     patchToBeContacted(patchedUser);
    // };

    const patchToBeContacted = async (pk) => {
        console.log({
            headers: {
                Authorization: "Bearer " + token,
            }
        }            
        )
        console.log(`http://127.0.0.1:8000/api/auth/users/patch/${pk}/`)
        try {
            let response = await axios.patch(`http://127.0.0.1:8000/api/auth/users/patch/${pk}/`, {}, {
                headers: {
                    Authorization: "Bearer " + token,
                },
                });
            console.log(response.data)
        } catch (error) {
            console.log(error.message);
        }
    };

    return ( 
        <table >
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users
                    .map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.phone_number}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => patchToBeContacted(user.id)} type='button'>Add To Contact List</button></td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
     );
}
 
export default DisplaySearchedUsers;