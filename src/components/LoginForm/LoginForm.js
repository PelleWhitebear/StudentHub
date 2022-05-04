import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import { auth } from "../../firebase-config.js";
import Form from "./Form";


const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [token, setToken] = useState("");

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
