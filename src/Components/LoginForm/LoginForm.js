import { Link } from 'react-router-dom';
import './LoginForm.css';
import { useState } from 'react';
import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword, 
    onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../../firebase-config.js';


const LoginForm = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const[registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const[loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({}); 

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
  
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, registerEmail, registerPassword
            );
        } catch (error) {
            console.log(error.message);
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, loginEmail, loginPassword
            );
            console.log(user.email)
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        
        <>
        <form action="#"> 
            <div>
                <span>
                    <input 
                    className='InputBox' 
                    type="text" 
                    placeholder="Student mail" 
                    onChange={(e) => setLoginEmail(e.target.value)}
                    ></input>
                </span>
            </div>
            <div>
                <span>
                    <input 
                    className='InputBox' 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    ></input>
                </span>
            </div>
            <div>
                <Link to="/Calendar">
                    <button 
                    className='LoginButton'
                    onClick={login}
                    >Login</button>
                </Link>
            </div>
        
        </form>
        <div>
            <p> {user?.email} </p>
        </div>
        <form action="#"> 
            <div>
                <span>
                    <input 
                    className='InputBox' 
                    type="text" 
                    placeholder="Student mail" 
                    onChange={(e) => setRegisterEmail(e.target.value)}></input>
                </span>
            </div>
            <div>
                <span>
                    <input 
                    className='InputBox' 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    ></input>
                </span>
            </div>
            <div>
                <Link to="/Calendar">
                    <button 
                    className='CreateUserButton'
                    onClick={register}
                    >Create User</button>
                </Link>
            </div>

 
        
        </form>
        
        </>
        
    )
  };
  
  export default LoginForm;




