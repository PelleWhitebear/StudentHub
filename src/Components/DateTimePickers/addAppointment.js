import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import ChooseDate from './ChooseDate';
import ChooseTime from './ChooseTime';
import { Stack } from '@mui/material';
import { addAppointmentToFirebase } from '../../../src/firebase-config';
import { Button } from "../../index";
import {getEmail} from '../LoginForm/LoginForm';


const AddAppointmentBtn = styled.button`
    font-size: 15px;
    text-align: center;
    background-color: var(--primaryColor);
    border-color: var(--primaryColor);
    color: white;
    float: right;
    border-radius: 4px;
    padding: 8px;

    &:hover {
        opacity: 80%;
     }
`;

const Input = styled.input`
    border-color: var(--primaryColor);
    color: var(--primaryColor);
    box-sizing: border-box;
    height: 51px;
    width: 100%;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid;
`;




function AddAppointmentOffCanvas () {
    let [show, setShow] = useState(false);
    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);

    let [appointmentTitle, setAppointmentTitle] = useState("");
    let [date, setDate] = useState("");
    let [startTime, setStartTime] = useState("");
    let [endTime, setEndTime] = useState("");
    let [location, setLocation] = useState("");
    

    /*const addAppointment = () => {
        Axios.post("http://localhost:8080/api/appointment/createAppointment", {
        studentId: "s205353",
        appointmentTitle: appointmentTitle
        }).then(() => 
        console.log("Frontend post completed"))
        
    };*/


    return (
        <>
        <Button 
        onClick = {handleShow}
        buttonText="Create Appointment" />
         {/*<AddAppointmentBtn onClick = {handleShow}> Create Appointment </AddAppointmentBtn>*/}
     <div>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
                <Offcanvas.Title>Create Appointment</Offcanvas.Title>
            </Offcanvas.Header>
                <Offcanvas.Body>
             
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
                    <ChooseDate onChangeMethod={setDate}/>
                    <br/>
                    
                
                    <Stack direction="row" spacing={2}>
                        <Stack direction='column'>
                            <div>Start Time</div>
                            <ChooseTime onChangeMethod={setStartTime}/>
                        </Stack>

                        <Stack direction='column'>
                            <div>End Time</div>
                            <ChooseTime onChangeMethod={setEndTime}/>
                        </Stack>
                    </Stack>
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

                    <br></br>
                    <div>
                        <AddAppointmentBtn  onClick=
                            { ()=> {addAppointmentToFirebase(
                                appointmentTitle, 
                                date, 
                                startTime, 
                                endTime, 
                                location
                            );
                            handleClose();}}
                            >
                                Add Appointment
                        </AddAppointmentBtn>
                    </div>
                    
                </Offcanvas.Body>
        </Offcanvas>
     </div>
     </>
    )
};



export default AddAppointmentOffCanvas;