    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import appintmentData from './addAppointment';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJtckBTE3-ub4JP6NcEJX_PKao7r0YJRw",
  authDomain: "dtustudenthub.firebaseapp.com",
  projectId: "dtustudenthub",
  storageBucket: "dtustudenthub.appspot.com",
  messagingSenderId: "400034264848",
  appId: "1:400034264848:web:f065a4bb76463063dd5795",
  measurementId: "G-M5K2EJKLEL"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'appointments');


export function addAppointmentToFirebase(appointmentTitle, startDate, startTime, endTime, location) {
    document.querySelector('.add')
    const formattedStartDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(startDate);
    const formattedEndTime = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(endTime);
    const formattedStartTime = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(startTime); 
    
        addDoc(colRef, {
            appointmentTitle: appointmentTitle,
            Date: formattedStartDate,
            startTime: formattedStartTime,
            endTime: formattedEndTime,
            location: location
        })
        .then(( ) => {
    
        })
};

    


