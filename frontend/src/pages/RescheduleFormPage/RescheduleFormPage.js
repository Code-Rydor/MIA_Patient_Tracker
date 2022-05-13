import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import "bootswatch/dist/cerulean/bootstrap.min.css";
//Once the complete appointment has been made and successfully added to the schedule, give a console.alert popup
//giving "Appointment successfully created" confirmation message

// let initialValues = {
//     first_name: "",
//     last_name: "",
//     phone_number: "",
//     email: "",
// };

    // const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)

    // async function postNewAppointment() {
    //     try {
    //         let response = await axios.get("http://127.0.0.1:8000/api/appointments/", {
    //             headers: {
    //                 Authorization: 'Bearer ' + token
    //             }
    //         })
    //         console.log(response.data)
    //         // navigate('/') add endpoint taking the patient to page for selecting appoint day and time?
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // };

const RescheduleFormPage = () => {

    const [user, token] = useAuth()
    const [dates, setDates] = useState([])
    const [times, setTimes] = useState([])
    
    useEffect(() => {
        
        getAppointmentDates();
        getAppointmentTimes();
    }, [token]);
    
    async function getAppointmentDates() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/appointments/dates/", {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            setDates(response.data)
            console.log("Dates:", response.data)
        } catch (error) {
            console.log(error.message)
        }
    };

    async function getAppointmentTimes() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/appointments/", {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            setTimes(response.data)
            console.log("Times:", response.data)
        } catch (error) {
            console.log(error.message)
        }
    };

{/* <div >
      <label >Example select</label>
      <select ></select> */}

    return (
        <div class="form-group">
            <form aria-label="Default select example">
            <label for="exampleSelect1">Select Appointment Date: </label>
            <select class="form-select" id="exampleSelect1">
                {dates.map((option) => <option value={option.date}>{option.date}</option>)}
            </select>
            <label>Select Appointment Time: </label>
            <select class="form-select" id="exampleSelect1">
                <option>8am</option>
                <option>10am</option>
                <option>12pm</option>
                <option>2pm</option>
                <option>4pm</option>
                <option>6pm</option>
            </select>
            </form>
            <button type="button" class="btn btn-outline-primary">Submit</button>
        </div>
     );
}
 
export default RescheduleFormPage;

