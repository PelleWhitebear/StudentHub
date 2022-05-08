import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
     getAuth, } from "firebase/auth";

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



