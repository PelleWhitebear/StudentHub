import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
     getAuth, 
    setPersistence,
    browserSessionPersistence } from "firebase/auth";
import { useState, useEffect} from "react";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    addDoc, 
    setDoc, 
    doc, 
    where,
    query } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJtckBTE3-ub4JP6NcEJX_PKao7r0YJRw",
    authDomain: "dtustudenthub.firebaseapp.com",
    projectId: "dtustudenthub",
    storageBucket: "dtustudenthub.appspot.com",
    messagingSenderId: "400034264848",
    appId: "1:400034264848:web:f065a4bb76463063dd5795",
    measurementId: "G-M5K2EJKLEL"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return auth.currentUser.uid;
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

const db = getFirestore();

export function AddUserToFirestore(){
    document.querySelector('.add');
    const userDoc = doc(db, 'users', auth.currentUser.uid);

    useEffect(() => {

    setDoc(userDoc, {
    })

}, []); 

};


export function addAppointmentToFirebase (appointmentTitle, date, startTime, endTime, location) {
    document.querySelector('.add')
    const appointmentColRef = collection(db, 'users', auth.currentUser.uid, 'appointments');

    let formattedDate = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(date);
    let formattedEndTime = new Intl.DateTimeFormat('en-GB', {hour: '2-digit', minute: '2-digit'}).format(endTime);
    let formattedStartTime = new Intl.DateTimeFormat('en-GB', {hour: '2-digit', minute: '2-digit'}).format(startTime); 

    //to timestamp
    var startDate = formattedDate.split("/");
    startDate = startDate[2] + "-" + startDate[1] + "-" + startDate[0];
    startDate = startDate + "T" + formattedStartTime;
    console.log(startDate);

    //to timestamp
    var endDate = formattedDate.split("/");
    endDate = endDate[2] + "-" + endDate[1] + "-" + endDate[0];
    endDate = endDate + "T" + formattedEndTime;
    console.log(endDate);
    
        addDoc(appointmentColRef, {
            title: appointmentTitle,
            startDate: startDate,
            endDate: endDate,
            location: location
        })
        .then(( ) => {
    
        })
};

export const GetAppointmentsFromFirebase = () => {
    const appointmentColRef = collection(db, 'users', auth.currentUser.uid, 'appointments');
    const q = query(collection(db, 'users', 'userId', 'appointments'), where("userId", "==", auth.currentUser.uid));
    let [schedulerData, setSchedulerData] = useState([])
    useEffect(() => {
    getDocs(appointmentColRef)
        .then((snapshot) => {
            let appointmentData = []
            snapshot.docs.forEach((doc) => {
                appointmentData.push({ ...doc.data() })
                })
            setSchedulerData(appointmentData);
            console.log(appointmentData)
            })
            .catch(err => {
                console.log(err.message)
            })
        }, []); 
    return schedulerData;
};

