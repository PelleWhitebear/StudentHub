import './Header.css';
import NavBarHeader from './NavBarHeader/NavBarHeader';
import DtuLogo from "../../assets/DTU_Logo.png";

const Header = () => {
    return (
        <>
        
        <header className='Header'>
        <div className="redBackground">
        <div className="backgroundColor">
            <div className="topHeader">
                <div className='dtuLogo'>
                <img src={DtuLogo} style={{height:"80px", width:"60px"} } alt="DTULogo" />
                </div>
                <div className='SHTitle'>
                <h2 style={{fontSize:"7vw"}}>StudentHub.</h2>
                </div>
            </div>
        <NavBarHeader />
        </div>
        </div>
        </header>
        </>
    )
  };
  
  export default Header;