// https://github.com/jquense/react-big-calendar
// const calendarId = '9j38d8vgar6mq65l7l26r0bdco@group.calendar.google.com';
// https://www.googleapis.com/calendar/v3/calendars/9j38d8vgar6mq65l7l26r0bdco@group.calendar.google.com/events
// https://www.googleapis.com/calendar/v3/calendars/calendarId/events
// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import * as React from 'react';
import moment from 'moment';

const localizer = momentLocalizer(moment);

export class AslCalendar extends React.Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, 'days').toDate(),
        title: 'First Event',
      },
    ],
  };

  render() {
    return (
      <div>
        <h3 className="text-3xl font-bold mb-2">Texas ASL Calendar</h3>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: '80vh' }}
        />
      </div>
    );
  }
}
