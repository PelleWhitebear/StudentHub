import "./Styles/SymbolButton.css";
const SymbolButton = (props) => {
  return (
    <>
      <br />
      <button className="addButton">{props.symbol}</button>
      <br />
    </>
  );
};
export default SymbolButton;
