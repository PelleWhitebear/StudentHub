import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config.js";
import Form from "./Form";

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const nav = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
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