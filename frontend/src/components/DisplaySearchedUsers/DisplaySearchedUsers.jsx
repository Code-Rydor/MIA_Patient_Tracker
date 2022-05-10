import React, { useState } from 'react';

const DisplaySearchedUsers = ({ patchedUser, patchToBeContacted, token }) => {

    let Token = token
    
    function handlePatchSubmit() {
        patchToBeContacted(patchedUser);
    };

    return ( 
        <table onSubmit={handlePatchSubmit( Token)}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {patchedUser
                    .map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.phone_number}</td>
                                <td>{user.email}</td>
                                <td><button type='submit'>Add To Contact List</button></td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
     );
}
 
export default DisplaySearchedUsers;