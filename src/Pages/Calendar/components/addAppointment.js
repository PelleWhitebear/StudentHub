import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import ChooseDate from './ChooseDate';

const AddAppointmentBtn = styled.button`
    font-size: 15px;
    text-align: center;
    background-color: rgb(153,0,0);
    border-color: rgb(153,0,0);
    color: white;
    float: right;

    &:hover {
        opacity: 85%;
     }
`;


const Input = styled.input`
    border-color: rgb(153,0,0);
    color: rgb(153,0,0);
    border-radius: 0px;
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    border-radius: 1px;
`;





function AddAppointmentOffCanvas () {
    let [show, setShow] = useState(false);
    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);
    let [appointmentTitle, setAppointmentTitle] = useState("");
    let [startDate, setStartDate] = useState("");
    let [endDate, setEndDate] = useState("");
    let [location, setLocation] = useState("");
const addAppointment = () => {
    Axios.post("http://localhost:3000/Calendar/create_event", {
            appointmentTitle: appointmentTitle
    }).then(() => 
    console.log("Frontend post completed"))
};


    return (
     <div>
            <button onClick={handleShow}>
             Create Appointment
            </button>

        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
                <Offcanvas.Title>Create Appointment</Offcanvas.Title>
            </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <AddAppointmentBtn  onClick={addAppointment}>
                             Add Appointment
                        </AddAppointmentBtn>
                    </div>
<br/>
                    <br/>
                     <label>Appointment Title</label>
                     <br/>
                    <Input
                        type="text" 
                        onChange={(event) => {
                            setAppointmentTitle(event.target.value);
                        }}
                    />
                    <br/>
                    <br/>
                     <label>End Date</label>
                     <br/>
                    <Input
                        type="text" 
                        onChange={(event) => {
                            setStartDate(event.target.value);
                        }}
                    />
                    <br/>
                    <br/>
                     <label>End Date</label>
                     <br/>
                    <Input
                        type="text" 
                        onChange={(event) => {
                            setEndDate(event.target.value);
                        }}
                    />
                    <br/>
                    <br/>
                     <label>Location</label>
                     <br/>
                    <Input
                        type="text" 
                        onChange={(event) => {
                            setLocation(event.target.value);
                        }}
                    />


                    <div>
                    <br/>
                    <br/>
                     <label>Repeat</label>
                     <br/>
                    <Input
                        type="text" 
                        onChange={(event) => {
                            setAppointmentTitle(event.target.value);
                        }}
                    />
                    </div>
                </Offcanvas.Body>
        </Offcanvas>
     </div>

    )
};



export default AddAppointmentOffCanvas;