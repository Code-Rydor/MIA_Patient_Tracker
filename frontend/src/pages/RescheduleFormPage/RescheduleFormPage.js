// import React, { useState, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import useAuth from '../../hooks/useAuth';
// import useCustomForm from '../../hooks/useCustomForm';

// //Once the complete appointment has been made and successfully added to the schedule, give a console.alert popup
// //giving "Appointment successfully created" confirmation message

// // let initialValues = {
// //     first_name: "",
// //     last_name: "",
// //     phone_number: "",
// //     email: "",
// // };

//     // const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)

//     // async function postNewAppointment() {
//     //     try {
//     //         let response = await axios.get("http://127.0.0.1:8000/api/appointments/", {
//     //             headers: {
//     //                 Authorization: 'Bearer ' + token
//     //             }
//     //         })
//     //         console.log(response.data)
//     //         // navigate('/') add endpoint taking the patient to page for selecting appoint day and time?
//     //     } catch (error) {
//     //         console.log(error.message)
//     //     }
//     // };

// const RescheduleFormPage = () => {

//     const [user, token] = useAuth()
//     const [dates, setDates] = useState([])
//     const [currentDate, setCurrentDate] = useState({})
    
//     useEffect(() => {
        
//         getAppointmentDates();
//     }, [token]);
    
//     async function getAppointmentDates() {
//         try {
//             let response = await axios.get("http://127.0.0.1:8000/api/appointments/dates/", {
//                 headers: {
//                     Authorization: 'Bearer ' + token
//                 }
//             })
//             setDates(response.data)
//             setCurrentDate(response.data[0])
//             console.log(response.data)
//         } catch (error) {
//             console.log(error.message)
//         }
//     };


//     return (
//         <form>
//             <label>Select Appointment Date: </label>
//             <select>
//                 {dates.map(date => (
//                     <option key={date} value={date}>
//                         {date}
//                     </option>
//                 ))}
//             </select>
//         </form>
//      );
// }
 
// export default RescheduleFormPage;


// <option value="6/1/22">6/1/22</option>
// <option value="6/2/22">6/2/22</option>