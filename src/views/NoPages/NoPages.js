import './Styles/Pages.css'; 
import Background from './Resources/Login_bg.jpg';

const NoPages = () => {
  return (
    <>
    <div className='okok'>
      <img className='filler' src={Background} alt="Background" />
      <div className='center'>
        <h1 className='title404'>404: Page not found</h1>
        <p>Unfortunately, the requested page was not found by the server.</p>
      </div>
    </div>
    </>
  )
};

export default NoPages;