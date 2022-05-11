import React from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


export default () => {
    const handleDateClick = (dateClickInfo) => {
        console.log(dateClickInfo.dateStr);
    }
    return (
        <FullCalendar
            plugins={[daygridPlugin, interactionPlugin]}
            dateClick={handleDateClick}
        />
    )
}
