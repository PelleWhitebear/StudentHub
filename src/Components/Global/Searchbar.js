import  './Styles/Searchbar.css'


const Searchbar = (props) => {
  return (
    <>
<form action={props.action} > 
    <div className="alignCenter">
            <input 
            className='Searchbar' 
            type="search" 
            placeholder= {props.helperText}
            onChange={ props.onChangeMethod }
            ></input>
    </div>
</form>
    </>
  );
};
export default Searchbar;
