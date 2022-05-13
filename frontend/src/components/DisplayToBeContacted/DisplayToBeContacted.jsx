import { useNavigate } from "react-router-dom";

//! I want this table to re render when a new name gets added

const DisplayToBeContacted = ({ users }) => {
    
    const navigate = useNavigate();

    let selectedUser = users.filter((user) => {
        if (user.is_tobecontacted == true)
            return true
    })
    
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedUser
                        .map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.phone_number}</td>
                                    <td>{user.email}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <button class="btn btn-outline-primary" onClick={() => navigate("/email")}>Email</button>
        </div>
     );
}
 
export default DisplayToBeContacted;