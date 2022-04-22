import '../LoginForm/LoginForm.css';

const CreateForm = (props) => (
    <form action={props.action}> 
    <div>
        <span>
            <input 
            className='InputBox' 
            type="text" 
            placeholder= { props.mailInputPlaceholder }
            onChange={ props.mailOnChange }
            ></input>
        </span>
    </div>
    <div>
        <span>
            <input 
            className='InputBox' 
            type="text" 
            placeholder= { props.firstNameInputPlaceholder }
            onChange={ props.firstNameOnChange }
            ></input>
        </span>
    </div>
    <div>
        <span>
            <input 
            className='InputBox' 
            type="text" 
            placeholder= { props.lastNameInputPlaceholder }
            onChange={ props.lastNameOnChange }
            ></input>
        </span>
    </div>
    <div>
        <span>
            <input 
            className='InputBox' 
            type="password" 
            placeholder= { props.passwordInputPlaceholder }
            onChange={ props.passwordOnChange }
            ></input>
        </span>
    </div>
    <div>
        <span>
            <input 
            className='InputBox' 
            type="password" 
            placeholder= { props.repeatPasswordInputPlaceholder }
            onChange={ props.repeatPasswordOnChange }
            ></input>
        </span>
    </div>
</form>);
  export default CreateForm;