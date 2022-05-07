import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useState, useEffect } from "react";
import { addUserToFirestore } from "../../firebase-config.js";
import Form from "./Form";
import firebaseService from '../../services/firebase';



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
      await firebaseService.login(loginEmail, loginPassword)
      .then(() => {
        try { 
          setToken(JSON.stringify( firebaseService.getUserToken())) 
          addUserToFirestore()
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
