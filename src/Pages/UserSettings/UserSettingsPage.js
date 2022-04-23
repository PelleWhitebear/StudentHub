import Paper from "@mui/material/Paper";
import './Styles/UserSettings.css'
import '../../Components/Global/Styles/ImageBox.css'
import ImageBox from '../../Components/Global/ImageBox'

import CreateForm from '../../Components/CreateUserForm/CreateForm'

const UserSettingsPage = () => {
  return (
    <>
    <h1> My settings </h1>
    <div className='alignCenter'>
      <ImageBox imageSrc='https://firebasestorage.googleapis.com/v0/b/dtustudenthub.appspot.com/o/miadong.jpg?alt=media&token=b8a1d722-999a-47ce-894e-ce12fc12594a'/>
      </div>
      <h2 align="center"> Mia Dong </h2>
      <h3 align="center"> D. IT og Økonomi </h3>
    <Paper> 
      <div className="centerItems" > 
      <CreateForm />
      <br/>
      </div>
    </Paper>
    </>
  )
};

export default UserSettingsPage;