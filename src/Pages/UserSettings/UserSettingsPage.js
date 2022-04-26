import Paper from "@mui/material/Paper";
import './Styles/UserSettings.css'
import '../../Components/Global/Styles/ImageBox.css';
import ImageBox from '../../Components/Global/ImageBox';
import Title from '../../Components/Global/Title';
import InputField from '../../Components/Global/InputField';

const Button = (props) => {
  return(
    <>
    <br />
    <button className="button">{props.buttonText}</button>
    <br />
    </>
  )
}
const UserSettingsPage = () => {
  return (
    <>
    <div className="minHeight"> 
    <Title title="My Settings" />
    <div className='alignCenter'>
      <ImageBox imageSrc='https://firebasestorage.googleapis.com/v0/b/dtustudenthub.appspot.com/o/miadong.jpg?alt=media&token=b8a1d722-999a-47ce-894e-ce12fc12594a'/>
      </div>
      <h2 align="center"> Mia Dong </h2>
      <h3 align="center"> D. IT og Økonomi </h3>
    <Paper> 
      <br />
      <div className="centerItems" > 
      <InputField
      inputLabel="First Name" />
      <InputField
      inputLabel="Last Name" />
      <InputField
      inputLabel="Student ID" />
      <Button
      buttonText="Save changes" />
      <br/>
      </div>
    </Paper>
    </div>
    </>
  )
};

export default UserSettingsPage;