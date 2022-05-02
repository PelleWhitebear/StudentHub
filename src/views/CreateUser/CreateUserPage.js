
import '../Login/Styles/LoginPage.css';
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm';
import './Styles/CreateUserPage.css';

const CreateUserPage = () => {
    return (
      <>    
      <div className="Bg">
        <div className='LoginPageContent'>
          <h1 className='LoginPageH1'>StudentHub</h1>
          <h2 className='LoginPageH2'>Create User</h2>
          <div className='border'>
            <CreateUserForm />
          </div>
        </div>
      </div>
      </>
    )
  };
  
  export default CreateUserPage;