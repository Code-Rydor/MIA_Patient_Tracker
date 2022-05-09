const DisplaySearchedUsers = ({ filteredUsers }) => {
    
    // const handleOnClick = (event) => {
    //     event.preventDefault()

    let userToContact = {
        first_name: filteredUsers.first_name,
        last_name: filteredUsers.last_name,
        phone_number: filteredUsers.phone_number,
        email: filteredUsers.email
    }
    
    return ( 
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
                {filteredUsers
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