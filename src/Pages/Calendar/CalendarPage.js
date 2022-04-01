import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  MonthView,
  WeekView,
  DayView,
  ViewSwitcher,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { createTheme } from '@mui/material';
import './Styles/Calendar.css'
import SideBar from './SideBar';
import appointmentData from './appointmentData';

//const schedulerData = appointmentData.map(appointmentData => appointmentData.title);

const schedulerData = [
  { startDate: '2022-03-14T09:45', endDate: '2022-03-14T11:00', title: "Doctor's appointment" },
  { startDate: '2022-03-14T13:00', endDate: '2022-03-14T17:00', title: 'Front end web development' },
];

const myAppointment = ({
  children, style, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#a02d37',
      borderRadius: '8px',
    }}
  >
    {children}
  </Appointments.Appointment>
);

const CalendarPage = () => {
  
const [currentDate, setCurrentDate] = useState(Date().toLocaleString());

const [currentViewName, setCurrentViewName] = useState('month');

  return (
    <>    
      <Paper >
        <div className='rows'>
        {/*<SideBar />*/}
        <Scheduler 
        data={schedulerData}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={setCurrentDate}
          currentViewName={currentViewName}
          onCurrentViewNameChange={setCurrentViewName}
          />
        <DayView
        name='day'
        displayName="Today"
        startDayHour={6}
        endDayHour={22}
        cellDuration={60}
        onDoubleClick/*={}*/
        />
        <WeekView
        cellDuration={60}
        name='week'
        displayName="Week"
        startDayHour={6}
        endDayHour={20}
        onDoubleClick/*={}*/
        />
        <MonthView
        name='month'
        displayName="Month"
          startDayHour={7}
          endDayHour={18}
          onDoubleClick/*={}*/
        />
        <Appointments
         />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
       
        <Appointments
        appointmentComponent={myAppointment} />
      </Scheduler>

        </div>
    </Paper>
   
    </>
  )
};

export default CalendarPage;