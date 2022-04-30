import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateForm from './CreateForm'
import {
    createUserWithEmailAndPassword,
  } from "firebase/auth";
import { auth } from "../../firebase-config.js";
import '../LoginForm/LoginForm.css';
import axios from 'axios';
const CreateUserForm = () => {
  const [emailValite, setEmailValite] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerFirstName, setRegisterFirstName] =  useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [samePassword, setSamePassword] = useState("");
  

  const nav = useNavigate();

  //regex for validating mail and password
  const validEmail = new RegExp(
    '^[s][0-9]{6}@student.dtu.dk$'
  )

  const validPassword = new RegExp(
  )
  useEffect(() =>{
    eventHandler()
  }, [emailValite])

  
  const validate = () =>{
    
    if(!validEmail.test(registerEmail)){
      return setEmailValite(false);
    }else if(validEmail.test(registerEmail)){
      return setEmailValite(true);
    }
    

  }

  const eventHandler = () =>{
    validate();
    
    if(emailValite && registerPassword === samePassword){
      return registerStudent();
    }
    if(!emailValite){
      console.log("email not valid")
    } 

    if(registerPassword !== samePassword){
      console.log("be sure to write the same password")
    }
  }
  
  //register user
  const registerStudent = async () => {
    const data = {
      id: registerEmail.substring(0,7),
      firstName: registerFirstName,
      lastName: registerLastName,
      mail: registerEmail,
      studyclassId: ""
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );


      await axios.post("http://localhost:8080/api/student/createStudent", data)
      .then((result) => {
        console.log(result.data)
      }).catch((error) =>{
        if(error.response){
          console.log(error.response)
        }else if(error.message){
          console.log(error.message)
        }else if(error.request){
          console.log(error.request)
        }
      })
      let path = "/loginPage"
      nav(path);
    } catch (error) {
      console.log(error.message);
    }
  };


    return (
        <div action="#"> 
          <CreateForm
        mailInputPlaceholder="Student mail"
        mailOnChange={(e) => setRegisterEmail(e.target.value)}
        firstNameInputPlaceholder="First Name"
        firstNameOnChange={(e) => setRegisterFirstName(e.target.value)}
        lastNameInputPlaceholder="Last Name"
        lastNameOnChange={(e) => setRegisterLastName(e.target.value)}
        passwordInputPlaceholder="Password"
        passwordOnChange={(e) => setRegisterPassword(e.target.value)}
        repeatPasswordInputPlaceholder="Repeat Password"
        repeatPasswordOnChange={(e) => setSamePassword(e.target.value)}
      />
      
        <div>
          <button className="LoginButton" onClick={eventHandler}>Create User</button>
        </div>
            
        </div>
    )
  };
  
  export default CreateUserForm;