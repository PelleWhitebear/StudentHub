import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useState, useEffect } from "react";
import Form from "./Form";
import tokenService from '../../services/tokenService'
import {  loginHandler, getUserToken, updateTokenInDatabase }from '../../services/firebase';

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [jwtToken, setJwtToken] = useState("");

  const nav = useNavigate();
  useEffect(()=>{
    localStorage.setItem("token", jwtToken);
    tokenService.setToken(jwtToken)
  }, [jwtToken]);

  const login = async () => {
    try {
   localStorage.clear();
      await loginHandler(loginEmail, loginPassword)
      .then(async () => {
        try {
          const token  = await getUserToken();
          setJwtToken(token)
          tokenService.setToken(token);
          let id = loginEmail.substring(0,7)
          await tokenService.updateTokenInDatabase(id, token)
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
