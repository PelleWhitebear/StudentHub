import "./Styles/Announcements.css";
import "../../index.css"
import { useEffect, useState } from "react";
import Announcement from "./Components/Announcement";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Paper from '@mui/material/Paper';


const AnnouncementsPage = () => {
  //varialbe for navigate
  const nav = useNavigate();

  //useState for data of announcements
  const [data, setAnnouncements] = useState([]);
  const [read, setRead] = useState();
  
  


  useEffect(() => {
    getAnnouncements();
  }, []) 

  async function getAnnouncements() {
    
    try {
      const getToken = localStorage.getItem("token")
      console.log(JSON.parse(getToken));
      
      // real request (axios) 
      let { data } = await axios.get("https://www.studenthub.bhsi.xyz/api/announcements/getAll");

      setAnnouncements(data);

    } catch (error) { //catch if error in getting data.
      if(error.response){
        console.log(error.response)
      }else if(error.message){
        console.log(error.message)
      }else if(error.request){
        console.log(error.request)
      }
    }
  } 

  //update read
  async function updateRead(id) {
    try{
      setRead(true)

      const updateData = {
      isRead: read
      }

      await axios.put(`https://www.studenthub.bhsi.xyz/api/announcements/update/${id}`, updateData);

    } catch (error) { //catch if error in getting data.
      console.log(error)
    }
  }

  //function for loading of each data element in the list while making it onClick and giving a unique key.
function loadAnnouncements() {
  return data.map(data => <Announcement onClick={() => onAnnouncementClick(data.id, data.isRead)} key={data.id}  {...data} />)
}

//function for on click of announcements.
function onAnnouncementClick(id , isRead) {
  //update read in the announcement
  if(!isRead){
  updateRead(id)
  }

  
  // Navigate to new page with this id
  let path = "/Announcements/" + id;
  nav(path);
}

let imgs = [
  'https://www.inside.dtu.dk/gimage.ashx?i=VHJ1ZV9ffHxfX2h0dHBzOi8vd3d3Lmluc2lkZS5kdHUuZGsvLy0vbWVkaWEvRFRVLUluc2lkZS9VbmRlcnZpc25pbmcvRm9yc2lkZS1iYW5uZXJlL0Jhbm5lcl80NjB4MjMwX0t1cnN1c19FdmFsdWVyaW5nLmFzaHhfX3x8X180NjBfX3x8X18yMzBfX3x8X19UcnVlX198fF9fRmFsc2VfX3x8X19GYWxzZV9ffHxfXzBfX3x8X19fX3x8X18w',
  
]

  return (
   <>
    <div className="minHeight">
    <Paper>
    
    <div className="split left">
      <div >

        <h1>Announcements</h1>
        {loadAnnouncements()}
      </div>
    </div>

    <div className="split right">
      <div >
      <h1>News</h1>
      <img src={imgs[0]} alt="new"/>
      </div>
   </div>
   
  </Paper>
  </div>
  </>
  );
};

export default AnnouncementsPage;