import React from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


export default () => {
    return (
        <FullCalendar
            plugins={daygridPlugin}
        />
    )
}


