import './Styles/LoginPage.css';
import { LoginForm } from "../../index";

const LoginPage = () => {
    return (
      <>    
      <div className="Bg">
        <div className='LoginPageContent'>
          <h1 className='LoginPageH1'>StudentHub.</h1>
          <h2 className='LoginPageH2'>Everything in one place</h2>
          <LoginForm />
        </div>
      </div>
      </>
    )
  };
  
  export default LoginPage;