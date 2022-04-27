
import './Styles/InputField.css'
const InputField = (props) => {
    return (
        <div>
            <label className="alignLeft">{props.inputLabel}</label>
            <input className="inputBox" onChange={props.onChange} type="input"></input>
        </div>
      
    );
  
  };
export default InputField;