import { Link } from 'react-router-dom';
import './LoginForm.css';

const Form = (props) => (
    <form action={props.action}> 
    <div>
        <span>
            <input 
            className='InputBox' 
            type="text" 
            placeholder= { props.firstInputPlaceholder }
            onChange={ props.firstOnChange }
            ></input>
        </span>
    </div>
    <div>
        <span>
            <input 
            className='InputBox' 
            type="password" 
            placeholder= { props.secondInputPlaceholder }
            onChange={ props.secondOnChange }
            ></input>
        </span>
    </div>
</form>);
  export default Form;