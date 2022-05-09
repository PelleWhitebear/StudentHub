import './Styles/StudyGuidance.css';
import InputField from '../../components/Global/InputField';
import AddAppointment from '../../components/Global/addAppointment'
import { Button, Title } from '../../index'
import StudyGuidanceService from '../../services/studyGuidance'

const StudyGuidance = () => {

    return (
      <div className='containerpage'>
        <form onSubmit={ (e) => StudyGuidanceService.sendEmail(e) }>
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
