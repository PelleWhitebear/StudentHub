import './Header.css';
import NavBarHeader from './NavBarHeader/NavBarHeader';

const Header = () => {
    return (
        <>
        
        <header className='Header'>
        <div className="backgroundColor">
            <div className="topHeader">
                <h2>StudentHub.</h2>
            </div>
        <NavBarHeader />
        </div>
        </header>
        </>
    )
  };
  
  export default Header;