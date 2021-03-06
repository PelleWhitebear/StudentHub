import "./Styles/Announcements.css";
import "../../index.css"
import { useEffect, useState } from "react";
import Announcement from "./Components/Announcement";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Paper from '@mui/material/Paper';
import announcementService from '../../services/announcements'
import { Title } from '../../index'

const AnnouncementsPage = () => {
  //varialbe for navigate
  const nav = useNavigate();

  //useState for data of announcements
  const [data, setAnnouncements] = useState([]);
  const [read, setRead] = useState();
  
  
  


  useEffect(() => {
    const fetchData = async () => {
      let { data } = await announcementService
      .getAllByToken();
      setAnnouncements(data);
    };
    fetchData();
  }, []);

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
      <div className="rows alignCenter">
        <div style={{padding: 30}}>
        <Paper >
        <div style={{padding: 10}} className="minHeight">
        <Title title="Announcements" />
        {loadAnnouncements()}
        </div>
        </Paper>
        </div>
        <Paper>
        <div style={{padding: 10}} className="minHeight">
        <Title title="News" />
      <img src={imgs[0]} alt="new"/>
      </div>      
          </Paper>
      </div>
    
  </>
  );
};

export default AnnouncementsPage;