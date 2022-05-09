import axios from 'axios';
import {
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged
} from "firebase/auth";
import { useState, useEffect } from 'react';
import { 
 getFirestore,
 collection, 
 getDocs, 
 addDoc,
 deleteDoc,
 doc } from 'firebase/firestore';

const db = getFirestore();
const studentUrl = 'http://localhost:8080/api/student/changeToken';
const auth = getAuth();
let token = null

  const setToken = newToken => {
    token = newToken;
  }

  const loginHandler = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      let userUid = auth.currentUser.uid 
      localStorage.setItem('uid', userUid);
          
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserToken = async () => {
    let token = "";
    if (auth.currentUser){
    let getToken = await auth.currentUser.getIdToken(true);
    token = getToken;
    }
    return token;
  };

    
  const updateTokenInDatabase = async (id, newObject) => {
    try {
      let object = {
        token: newObject
      }
      return await axios.put(`${studentUrl}/${id}`, object)
    } catch {
      
    }
  };


export function addAppointmentToFirebase (appointmentTitle, date, startTime, endTime, location) {
    document.querySelector('.add');

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


  export const deleteAppointmentFromFirebase = (id) => {
          const appointmentDocRef = doc(db, 'users', auth.currentUser.uid, 'appointments', id.appointmentId);
          deleteDoc(appointmentDocRef);
  };



  
  export { loginHandler, getUserToken, setToken, updateTokenInDatabase };

  

