import { Link } from 'react-router-dom';
import { useState } from 'react';
import CreateForm from './CreateForm'
import {
    createUserWithEmailAndPassword,
  } from "firebase/auth";
import { auth } from "../../firebase-config.js";
import '../LoginForm/LoginForm.css';
const CreateUserForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [samePassword, setSamePassword] = useState("");
  const [valid, setValid] = useState(false);

  //regrex
  const validEmail = new RegExp(
    '^[s][0-9]{6}@student.dtu.dk$'
  )

  const validPassword = new RegExp(
    
  )

  //register user
  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  //check if the inputs are valid
  function checkUser(){
        if(registerPassword == samePassword){
            register()
        } else {
            console.log("not the same password")
        }
  }

    return (
        <form action="#"> 
          <CreateForm
        firstInputPlaceholder="Student mail"
        firstOnChange={(e) => setRegisterEmail(e.target.value)}
        secondInputPlaceholder="Password"
        secondOnChange={(e) => setRegisterPassword(e.target.value)}
        thirdInputPlaceholder="Repeat Password"
        secondOnChange={(e) => setSamePassword(e.target.value)}
      />
      
        <div>
        <Link to="/LoginPage">
          <button className="LoginButton" onClick={checkUser()}>Create User</button>
        </Link>
      </div>
            
        </form>
    )
  };
  
  export default CreateUserForm;