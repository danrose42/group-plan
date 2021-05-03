import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default class Calendar extends React.Component {
  render() {
    return (
      <div className='calendar-main'>
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridYear,dayGridMonth,timeGridWeek,timeGridDay'
          }}
          views={{
            dayGridYear: {
              type: 'dayGrid',
              duration: { months: 12 },
              buttonText: 'year'
            }
          }}
          initialView="dayGridMonth"
          selectable={true}
        />
      </div>
    )
  }
}