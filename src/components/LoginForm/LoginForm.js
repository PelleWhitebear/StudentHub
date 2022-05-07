import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useState, useEffect } from "react";
import { addUserToFirestore } from "../../firebase-config.js";
import Form from "./Form";

import {  loginHandler, getUserToken, setToken, updateTokenInDatabase }from '../../services/firebase';

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [jwtToken, setJwtToken] = useState("");

  const nav = useNavigate();
  useEffect(()=>{
    localStorage.setItem("token", jwtToken);
  }, [jwtToken]);

  const login = async () => {
    try {
   localStorage.clear();
      await loginHandler(loginEmail, loginPassword)
      .then(async () => {
        try {
          const token  = await getUserToken();
          console.log(token);
          setJwtToken(token);
          console.log(jwtToken);
          let id = loginEmail.substring(0,7)
          console.log(id)
          await updateTokenInDatabase(id, jwtToken)
        }
        catch (e) {
          console.log(e)
        };
      })
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
          <button 
          className="LoginButton" 
          onClick={
            () => {
              login();}}>
            Login
          </button>
      </div>
      {/*  <div>
           <p> {user?.email} </p>
            </div> */}
      <div>
        <Link to="/CreateUser">
          <button className="CreateUserButton">
            Create User
          </button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
