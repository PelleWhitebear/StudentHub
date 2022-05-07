import axios from 'axios';
import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import { useState } from 'react';

const studentUrl = 'http://localhost:8080/api/student/changeToken';
const auth = getAuth();
let token = null

  const setToken = newToken => {
    token = `bearer ${newToken}`
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
    console.log(getToken);
    token = getToken;
    }
    return token;
  };

    
  const updateTokenInDatabase = async (id, newObject) => {
    try {
      console.log(newObject);
      let object = {
        token: newObject
      }
      return await axios.put(`${studentUrl}/${id}`, object)
    } catch {
      
    }
   

  };
  
  export { loginHandler, getUserToken, setToken, updateTokenInDatabase };

  

