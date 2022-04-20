import { Link } from "react-router-dom";
import "./LoginForm.css";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config.js";
import Form from "./Form";

const LoginForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user.email);
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
        <Link to="/Calendar">
          <button className="LoginButton" onClick={login}>
            Login
          </button>
        </Link>
      </div>
      {/*  <div>
           <p> {user?.email} </p>
            </div> */}
      <Form
        firstInputPlaceholder="Student mail"
        firstOnChange={(e) => setRegisterEmail(e.target.value)}
        secondInputPlaceholder="Password"
        secondOnChange={(e) => setRegisterPassword(e.target.value)}
      />

      <div>
        <Link to="/Calendar">
          <button className="CreateUserButton" onClick={register}>
            Create User
          </button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
