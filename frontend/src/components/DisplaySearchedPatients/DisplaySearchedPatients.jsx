const DisplaySearchedPatients = ({filteredPatients}) => {
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
                {filteredPatients
                    .map((patient, index) => {
                        return (
                            <tr key={index}>
                                <td>{patient.first_name}</td>
                                <td>{patient.last_name}</td>
                                <td>{patient.phone_number}</td>
                                <td>{patient.email}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
     );
}
 
export default DisplaySearchedPatients;