import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
     getAuth, 
     onAuthStateChanged } from "firebase/auth";
import { useState, useEffect} from "react";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    addDoc, 
    setDoc, 
    doc } from 'firebase/firestore';

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

const db = getFirestore();


export function addUserToFirestore(){
    document.querySelector('.add');
    const userDoc = doc(db, 'users', auth.currentUser.uid);
    setDoc(userDoc, {
    })

};


export function addAppointmentToFirebase (appointmentTitle, date, startTime, endTime, location) {
    document.querySelector('.add');
    Count();

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

const Count = () => {
    const [count, setCount] = useState(0);
    setCount(count+1);
    return count;
};


export const GetAppointmentsFromFirebase = () => {
    const [user, setUser] = useState({});
    let [schedulerData, setSchedulerData] = useState([])
  
    useEffect(() => {
      onAuthStateChanged(auth, async (currentUser) => {
        // Check if currentUser is null
        if (currentUser) {
          setUser(currentUser);
  
          // Read user ID directly from user object
          const appointmentColRef = collection(db, 'users', currentUser.uid, 'appointments');
          const snapshot = await getDocs(appointmentColRef)
  
          const data = snapshot.docs.map((d) => ({
            id: d.id,
            ...d.data()
          }))
  
          setSchedulerData(data);
          console.log(data);
        } else {
          console.log("No user logged in")
        }
      });
    }, []);
    return schedulerData;
  };

