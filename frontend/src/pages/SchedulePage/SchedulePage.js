import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import "./SchedulePage.css"


const ToBeContactedPage = () => {

    const handleDateClick = (dateClickInfo) => {
        console.log(dateClickInfo.dateStr);
    }

    const [user, token] = useAuth();
    const [appointments2, setAppointments2] = useState([])
    
    useEffect(() => {
        getAppointments2();
    }, [token]);

    async function getAppointments2() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/calendarappts/");
            let modifiedArray2 = response.data.map((item) =>
            {
                return { title: item.name + " " + item.appt_time, date: item.appt_date }
            })

            setAppointments2(modifiedArray2);
        } catch (error) {
            console.log(error.message)
        }
    };

    return ( 
        <div>
            <FullCalendar
                events={appointments2}
                plugins={[daygridPlugin, interactionPlugin]}
                dateClick={handleDateClick}
                aspectRatio="2.4"
                headerToolbar={{
                    right: 'dayGridMonth,dayGridWeek,dayGridDay,today,prev,next',
                }}
                navLinks={true}
            />
        </div>
     );
}
 
export default ToBeContactedPage;