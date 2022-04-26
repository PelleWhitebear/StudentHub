import Paper from "@mui/material/Paper";
import './Styles/UserSettings.css'
import '../../Components/Global/Styles/ImageBox.css';
import ImageBox from '../../Components/Global/ImageBox';
import Title from '../../Components/Global/Title';
import InputField from '../../Components/Global/InputField';
import {React, useState} from 'react';

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

  const [firstName, setFirstName] = useState('Mia');
  const [lastName, setLastName] = useState('Dong');
  const [studentId, setStudentId] = useState('s205353');
  const [study, setStudy] = useState('BEng IT and Economics');


  return (
    
    <>
    <div className="rows">
    <div className="minHeight box"> 
    <Title title="My Settings" />
    <div className='alignCenter'>
      <ImageBox imageSrc='https://firebasestorage.googleapis.com/v0/b/dtustudenthub.appspot.com/o/miadong.jpg?alt=media&token=b8a1d722-999a-47ce-894e-ce12fc12594a'/>
      </div>
    <Paper > 
      <br />
      <div className="centerItems" > 
      <h2> {firstName} {lastName} </h2>
      <h3> {study} </h3>
      <h3>{studentId}</h3>
      <InputField
      onChange={(e) => setFirstName(e.target.value)}
      inputLabel="First Name" />
      <InputField
      onChange={(e) => setLastName(e.target.value)}
      inputLabel="Last Name" />
      <InputField
      onChange={(e) => setStudentId(e.target.value)}
      inputLabel="Student ID" />
      <InputField
      onChange={(e) => setStudy(e.target.value)}
      inputLabel="Study Field" />
      <Button
      buttonText="Save changes" />
      <br/>
      </div>
    </Paper>
    </div>
    <img className="imageSize" src="https://firebasestorage.googleapis.com/v0/b/dtustudenthub.appspot.com/o/dtu.jpg?alt=media&token=21b1f706-623a-4ef2-911c-2f82a34a168b" alt="" />
    </div>
  
    </>
  )
};

export default UserSettingsPage;