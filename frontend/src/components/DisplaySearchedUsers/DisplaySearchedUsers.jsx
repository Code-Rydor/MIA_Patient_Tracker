import React from 'react';
import axios from 'axios';
import "bootswatch/dist/morph/bootstrap.min.css";

const DisplaySearchedUsers = ({ users, token }) => {


    const patchToBeContacted = async (pk) => {
        try {
            let response = await axios.patch(`http://127.0.0.1:8000/api/auth/users/patch/${pk}/`, {}, {
                headers: {
                    Authorization: "Bearer " + token,
                },
                });
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    };

    return ( 
        <table className="table table-hover">
            <thead scope="row">
                <tr className="table-light">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users
                    .map((user, index) => {
                        return (
                            <tr className="table-light" key={index}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.phone_number}</td>
                                <td>{user.email}</td>
                                <td><button className="btn btn-outline-secondary" onClick={() => patchToBeContacted(user.id)} type='button'>Add To Contact List</button></td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
     );
}
 
export default DisplaySearchedUsers;