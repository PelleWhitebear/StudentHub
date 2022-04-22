import './StudyGuidance.css';


//TODO: sæt "send" button ind i textarea, fjern skygger fra knapper, skriv tekst i text area lav baggrundsfarve/billede

const StudyGuidance = () => {
  const openNav = () => {
    document.getElementById("mySidepanel").style.width = "250px";
  } 
  const closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
  } 
  const checker = (e) => {
    if  (window.confirm('Are you sure you wish to send your email?', 'Confirmation')) this.onCancel(e.target.value)
  }
  

    return (
    <>
    <h1 className='Welcome'>Study Guidance</h1>
    <div id="mySidepanel" class="sidepanel">
      <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
      <h7 className='sidepanel_Header'>Book a meeting</h7>
    </div>
    <button class="openbtn" onClick={openNav}>Book a meeting</button>
    <br></br> 
    <h4 className='minor_Tekst'>Number:  +45 45 25 11 99</h4>
    <h6 className='minor_Tekst'>Email:  studvejl@adm.dtu.dk</h6>
    <div class="textarea-container">
      <textarea name="foo">Dear Study Guidance</textarea>
      <button id = "send_btn" onClick={checker} >Send</button>
    </div>
    </>
    )
  }
  ;
  export default StudyGuidance;