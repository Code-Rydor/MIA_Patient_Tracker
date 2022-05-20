import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';





const ToBeContactedPage = () => {

    const handleDateClick = (dateClickInfo) => {
        console.log(dateClickInfo.dateStr);
    }

    const [user, token] = useAuth();
    const [appointments, setAppointments] = useState([])
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()
    
    useEffect(() => {
        getAppointments();
    }, [token]);

    async function getAppointments() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/appointments/", {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            
            })
            console.log("Response: ", response.data)
            let modifiedArray = response.data.map((item) =>
            {
                return { title: item.patient_id.first_name + " " + item.patient_id.last_name + " " + item.appointment_time, date: item.appointment_day_id.date }
            })

            setAppointments(modifiedArray);
            //setAppointments(response.data)

            // console.log("Patient: ", response.data[0].patient_id.first_name)
            // console.log("Date: ", response.data[0].appointment_day_id.date)
            // console.log("Time: ", response.data[0].appointment_time)
        } catch (error) {
            console.log(error.message)
        }
    };
    // function modify() {
    //     let modifiedArray = appointments.map((item) =>
    //     {
    //         return { title: item.patient_id.first_name, date: item.appointment_day_id.date }
    //     })
    //     console.log("Title and Date Array: ", modifiedArray);
    //     setAppointments(modifiedArray);
    // }
    //let modifiedArray = array.map(item => {title: item.patient_id.first_name, date: item.appointment_day_id.date })

    return ( 
        <div>
            {console.log(appointments)}
            <FullCalendar
                events={appointments}
                plugins={[daygridPlugin, interactionPlugin]}
                dateClick={handleDateClick}

                // {...appointments.map((item) => {
                //     return events = { [{ title: item.title, date: item.date }] }
                // })}
            // events={[
            //     { title: 'Event 1', date: '2022-05-01' },
            //     { title: 'event 2', date: '2022-05-02' }
            //   ]}
            />
            {/* <button onClick={modify}>CLICK</button> */}
        </div>
     );
}
 
export default ToBeContactedPage;