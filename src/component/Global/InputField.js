
import './Styles/InputField.css'
const InputField = (props) => {
    return (
        <div>
            <label className="alignLeft">{props.inputLabel}</label>
            <input className="inputBox" value={props.value} onChange={props.onChange} type="input" disabled={props.disabled}></input>
        </div>
      
    );
  
  };
export default InputField;