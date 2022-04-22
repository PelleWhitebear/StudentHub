import  '../Global/Styles/Searchbar.css'


const Searchbar = (props) => {
  return (
    <>
<form action={props.action} > 
    <div className="alignCenter">
            <input 
            className='Searchbar' 
            type="input" 
            placeholder= { props.secondInputPlaceholder }
            onChange={ props.secondOnChange }
            ></input>
    </div>
</form>
    </>
  );
};
export default Searchbar;
