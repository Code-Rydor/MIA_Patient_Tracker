import React from 'react';
import './ScheduleCalendar.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { render } from '@testing-library/react';


const ScheduleCalendar = () => {

    render(); {
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
        );
    };
};
export default ScheduleCalendar;


