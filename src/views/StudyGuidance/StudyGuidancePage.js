import './Styles/StudyGuidance.css';
import emailjs from '@emailjs/browser';
import InputField from '../../components/Global/InputField';
import AddAppointment from '../../components/Global/addAppointment'
import { Container } from '@mui/material';
import { Button, Title } from '../../index'

const StudyGuidance = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'study_guidance', e.target, 'rdIjZOLKAKD5GZlb8')
     .then((result) => {
          console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
     e.target.reset()
}

    return (
      <div className='containerpage'>
        <form onSubmit={sendEmail}>
          <Title title="StudyGuidance" />  
          <div className='containerBookMeetingBtn'>
            <AddAppointment addAppointmentText='Book Meeting' buttonText='Book Meeting'/>
          </div>
          <div className="containerInputFields">
            <InputField placeholder="Subject" name="Subject"></InputField>
          </div>
          <div className='containerInputFields'>
            <InputField type="email" placeholder="Enter your email for reply" name="reply_email"></InputField>
          </div>
          <div className='containerTextarea'>
            <textarea className="textareaMessage" placeholder="Your message" name="message"></textarea>
          </div>
          <div className="containerInputButton">
            <Button buttonText="Send mail">
              <InputField className='InputButton' type="submit" value="Send Message" name="reply_email"></InputField>
            </Button>
          </div>
        </form>
      </div>
    )
  }
  ;
  export default StudyGuidance;
