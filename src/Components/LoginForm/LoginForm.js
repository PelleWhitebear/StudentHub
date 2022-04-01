import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <form action="#"> 
            <div>
                <span>
                    <input className='InputBox' type="text" placeholder="Student-ID"></input>
                </span>
            </div>
            <div>
                <span>
                    <input className='InputBox' type="password" placeholder="Password"></input>
                </span>
            </div>
            <div>
                <Link to="/Calendar">
                    <button className='LoginButton'>Login</button>
                </Link>
            </div>
        </form>
    )
  };
  
  export default LoginForm;




