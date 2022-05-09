import emailjs from "@emailjs/browser"

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
  
export default { sendEmail }
