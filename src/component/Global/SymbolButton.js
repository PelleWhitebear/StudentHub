import './Styles/SymbolButton.css'
const SymbolButton = (props) => {
  return (
    <>
      <br />
      <button onClick={props.onClick} className="addButton">{props.symbol}</button>
      <br />
    </>
  );
};

export default SymbolButton;