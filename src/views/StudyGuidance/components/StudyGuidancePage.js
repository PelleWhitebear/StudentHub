import '../Styles/StudyGuidance.css';
import emailjs from "emailjs-com"
import InputField from '../../../components/Global/InputField';
import AddAppointment from '../../../components/Global/addAppointment';

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
    <div>
     <div>
       <form onSubmit={sendEmail}>      
         <div className="containerInputFields">
           <InputField placeholder="Subject" name="Subject"></InputField>
        </div>
        <div className='containerInputFields'>
          <InputField type="email" placeholder="Enter your email for reply" name="reply_email"></InputField>
        </div>
        <div>
          <textarea className="textareaMessage" placeholder="Your message" name="message"></textarea>
        </div>
        <div className="inputButton">
          <InputField type="submit" value="Send Message" name="reply_email"></InputField>
        </div>
      </form>
    </div>
    <div className='bookMettingBtn'>
      <AddAppointment></AddAppointment>
    </div>
    </div>
    )
  }
  ;
  export default StudyGuidance;