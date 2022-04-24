import RoundBoxWithTitle from "./components/RoundBox";

const emails = [
  "miadong01@yahoo.com",
"pellehartvigandersen@gmail.com",
"danieldiamant3@gmail.com",
"sebassinding@gmail.com",
"stevengordonpedersen@gmail.com"];

const ContactPage = () => {
    return (
      <>
      <div className="minHeight"> 
      <RoundBoxWithTitle 
      title="Contact"
      subtitle="Contact the Team behind StudentHub"
      secondSubtitle="Contact the Team"
      data={emails}/>
      </div>
      </>
    )
  };
  
  export default ContactPage;