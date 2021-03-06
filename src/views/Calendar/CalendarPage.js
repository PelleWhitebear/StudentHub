import { useState } from "react";
import Paper from "../../components/Global/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
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
import './Styles/Calendar.css'
import SideBar from '../../components/Global/SideBar';
import '../../components/Global/Styles/SideBar.css';
import { GetAppointmentsFromFirebase} from '../../services/firebase';
import SimpleDialogDemo from "../../components/Global/Dialog";
//const schedulerData = appointmentData.map(appointmentData => appointmentData.title);


/*[
  { startDate: '2022-03-14T09:45', endDate: '2022-03-14T11:00', title: "Doctor's appointment" },
  { startDate: '2022-03-14T13:00', endDate: '2022-03-14T17:00', title: 'Front end web development' },
];*/


const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(Date().toLocaleString());
  const [currentViewName, setCurrentViewName] = useState("week");
  const [newCourse, setNewCourse] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [appointmentId, setAppointmentId] = useState();

  const [sideBarData, setSideBarData] = useState([
    "Course1",
    "Course2",
    "Backend development ",
    "Frontend development",
  ]);

  const addCourseToSideBar = () => {
    setSideBarData([...sideBarData, newCourse]);
    setNewCourse("");
  };

  const data = () => {
    let d = GetAppointmentsFromFirebase();
    return d;
  }

  const MyAppointment = ({ children, style, ...restProps }) => {
     
     const appointMentClickHandler = () => {
      if (showDialog){
        setShowDialog(false);
        }
      else {
           setAppointmentId(restProps.data.id)
           setShowDialog(true);  
      }
     }
  
    return (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: "#a02d37",
        borderRadius: "8px",
      }} 
      onClick={()=> {
        appointMentClickHandler(); }}     
    >

      {children}
      <div className="appointmentContent">
        Location: {restProps.data.location}
      </div>
      
     {showDialog && (<SimpleDialogDemo appointmentId={appointmentId}/>)}
    </Appointments.Appointment>
    );
    }


  return (
    <>
      <div className="minHeight">
        <div className="rows">
          <div>
            <SideBar
              symbol="+"
              inputLabel="Enter course title"
              onChange={(e) => setNewCourse(e.target.value)}
              onClick={() => addCourseToSideBar()}
              data={sideBarData}
            />
          </div>
          <div className="calendarWidth">
          <Paper>
            <Scheduler 
            data={data()}>

              <ViewState
                currentDate={currentDate}
                onCurrentDateChange={setCurrentDate}
                currentViewName={currentViewName}
                onCurrentViewNameChange={setCurrentViewName}
              />
              <DayView
                name="day"
                displayName="Today"
                startDayHour={6}
                endDayHour={22}
                cellDuration={60}
                onDoubleClick /*={}*/
              />
              <WeekView
                cellDuration={60}
                name="week"
                displayName="Week"
                startDayHour={6}
                endDayHour={20}
                onDoubleClick /*={}*/
              />
              <MonthView
                name="month"
                displayName="Month"
                startDayHour={7}
                endDayHour={18}
                onDoubleClick /*={}*/
              />
              <Appointments/>
              <Toolbar />

              <ViewSwitcher />
              <DateNavigator />
              <Appointments appointmentComponent={MyAppointment} />
            </Scheduler>
          </Paper>
          </div>
        </div>
        </div>
    </>
  );
};

export default CalendarPage;
