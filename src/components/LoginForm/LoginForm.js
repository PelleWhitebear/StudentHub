import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import Form from "./Form";
import { setPersistence, browserSessionPersistence } from "firebase/auth";



const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [token, setToken] = useState("");

  

const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  const nav = useNavigate();
  useEffect(()=>{
    localStorage.setItem("token", token);
  }, [token]);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      let userUid = auth.currentUser.uid 
      localStorage.setItem('uid', userUid);

      await getAuth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend via HTTPS
        setToken(JSON.stringify(idToken));
        // ...
      }).catch(function(error) {
        console.log(error)
      });

      let path = "Calendar";
      nav(path);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Form
        firstInputPlaceholder="Student mail"
        firstOnChange={(e) => setLoginEmail(e.target.value)}
        secondInputPlaceholder="Password"
        secondOnChange={(e) => setLoginPassword(e.target.value)}
      />

      <div>
          <button className="LoginButton" onClick={login}>
            Login
          </button>
      </div>
      {/*  <div>
           <p> {user?.email} </p>
            </div> */}
      <div>
        <Link to="/CreateUser">
          <button className="CreateUserButton" >
            Create User
          </button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
