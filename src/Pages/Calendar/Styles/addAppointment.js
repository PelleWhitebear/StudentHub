import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';


function AddAppointmentOffCanvas () {
    let [show, setShow] = useState(false);
    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);

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
                     <label>Appointment Title:</label>
                    <input
                        type="text"
                    />
                    <button>
                          Add Appointment
                    </button>
                </Offcanvas.Body>
        </Offcanvas>
     </div>
        
    )
};

export default AddAppointmentOffCanvas;
  
