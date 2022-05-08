import './Styles/InputField.css'
const InputField = (props) => {
    return (
        <div>
            <label className="alignLeft">{props.inputLabel}</label>
            <input className="inputBox" value={props.value} onChange={props.onChange} type={props.type} 
                    placeholder={props.placeholder} disabled={props.disabled} name={props.name}></input>
        </div>
      
    );
  
  };
export default InputField;
