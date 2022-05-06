const Button = (props) => {
    return (
      <>
        <br />
        <br />
        <button onClick={props.onClick} className="button">
          {props.buttonText}
        </button>
        <br />
        <br />
      </>
    );
  };

export default Button;