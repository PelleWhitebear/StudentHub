import './Header.css';
import NavBarHeader from './NavBarHeader/NavBarHeader';
import DtuLogo from "../../assets/DTU_Logo.png";

const Header = () => {
    return (
        <>
        
        <header className='Header'>
        <div className="backgroundColor">
            <div className="topHeader">
                <div className='dtuLogo'>
                <img src={DtuLogo} style={{height:"80px", width:"60px"} } alt="DTULogo" />
                </div>
                <div className='SHTitle'>
                <h2 style={{fontSize:"100px"}}>StudentHub.</h2>
                </div>
            </div>
        <NavBarHeader />
        </div>
        </header>
        </>
    )
  };
  
  export default Header;