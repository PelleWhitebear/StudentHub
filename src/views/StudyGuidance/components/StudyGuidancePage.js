import '../Styles/StudyGuidance.css';
import emailjs from "emailjs-com"
import InputField from '../../../components/Global/InputField';
import Button from '../../../components/Global/Button';


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
           <div className="container">
            <form onSubmit={sendEmail}>
              <div className="inputFieldContainer" >
                <InputField placeholder="Subject" name="Subject"></InputField>
                <InputField type="email" placeholder="Enter your email for reply" name="reply_email"></InputField>
              </div>
              <div className="messageBox">
                <textarea placeholder="Your message" name="message"></textarea>
              </div>
              <div>
               <InputField type="submit" value="Send Message" name="reply_email"></InputField>
               </div>
            </form>
          </div>
        </div>
    )
  }
  ;
  export default StudyGuidance;