
import '../Login/Styles/LoginPage.css';
import CreateUserForm from '../../Components/CreateUserForm/CreateUserForm';

const CreateUserPage = () => {
    return (
      <>    
      <div className="Bg">
        <div className='LoginPageContent'>
          <h1 className='LoginPageH1'>StudentHub</h1>
          <h2 className='LoginPageH2'>Create User</h2>
          <CreateUserForm />
        </div>
      </div>
      </>
    )
  };
  
  export default CreateUserPage;