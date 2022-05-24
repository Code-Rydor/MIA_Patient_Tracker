import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "bootswatch/dist/cerulean/bootstrap.min.css";


const RescheduleFormPage = () => {

    const [user, token] = useAuth()
    const [dates, setDates] = useState([])
    const [name, setName] = useState('')
    const [appt_Date, setAppt_Date] = useState('')
    const [appt_Time, setAppt_Time] = useState('')

    let newAppt = {
        name: name,
        appt_date: appt_Date,
        appt_time: appt_Time,
    };
    console.log(newAppt)
    
    useEffect(() => {
        getAppointmentDates();
    }, [token]);

    async function createAppt() {
        let response = await axios.post("http://127.0.0.1:8000/api/calendarappts/", newAppt)
            .then((res) => {
                console.log(res)
                toast('Your appointment is confirmed!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }, (err) => {
                console.log(err.text);
            })
    }
    
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

    return (
        <div className="form-group">
            <form aria-label="Default select example">
            <label className="col-form-label" for="inputDefault">Enter patient name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputDefault"
                    value={name}
                    onChange={(event) => setName(event.target.value)}></input>
            <label for="exampleSelect1">Select Appointment Date: </label>
                <select
                    className="form-select"
                    id="exampleSelect1"
                    value={appt_Date}
                    onChange={(event) => setAppt_Date(event.target.value)}>
                {dates.map((option) => <option value={option.date}>{option.date}</option>)}
            </select>
            <label>Select Appointment Time: </label>
                <select
                    className="form-select"
                    id="exampleSelect1"
                    value={appt_Time}
                    onChange={(event) => setAppt_Time(event.target.value)}>
                <option value="8am">8am</option>
                <option value="10am">10am</option>
                <option value="12pm">12pm</option>
                <option value="2pm">2pm</option>
                <option value="4pm">4pm</option>
                <option value="6pm">6pm</option>
            </select>
            </form>
            <button type="submit" className="btn btn-outline-primary" onClick={createAppt}>Submit</button>
            <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            />
        </div>
     );
}
 
export default RescheduleFormPage;

