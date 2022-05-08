const Button = (props) => {
    return (
      <>
        <br />
        <br />
        <a style={{fontWeight: "normal"}} href={props.url} 
       target="_blank"
       rel="noopener noreferrer"> <button onClick={props.onClick} className="button">
        {props.buttonText}
        </button>
        </a> 
        <br />
        <br />
      </>
    );
  };

export default Button;