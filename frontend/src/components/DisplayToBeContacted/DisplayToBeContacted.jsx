const DisplayToBeContacted = (props) => {
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
                        </tr>
                    );
                })}
        </tbody>
    </table>
     );
}
 
export default DisplayToBeContacted;