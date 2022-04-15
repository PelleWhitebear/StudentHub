import "./Styles/Announcements.css";
import { useEffect, useState } from "react";
import Announcement from "./Components/Announcement";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AnnouncementsPage = () => {
  //varialbe for navigate
  const nav = useNavigate();

  //useState for data of announcements
  const [data, setAnnouncements] = useState([]);
  const [read, setRead] = useState(false);


  useEffect(() => {
    getAnnouncements();
  }, []) 

  async function getAnnouncements() {
    
    try {
      
      // real request (axios)
      let { data } = await axios.get("http://localhost:8080/api/announcement/getAll");
      setAnnouncements(data);

    } catch (error) { //catch if error in getting data.
      console.log(error)
    }
  } 

  //update read
  async function updateRead(id) {
    try{

      let {oneAnnouncement} = await axios.get(`http://localhost:8080/api/announcements/${id}`);
      setRead(true)

      const updateData = {
      isRead: read
      }

      await axios.put(`http://localhost:8080/api/announcements/${oneAnnouncement.id}`, updateData);

    } catch (error) { //catch if error in getting data.
      console.log(error)
    }
  }

  //function for loading of each data element in the list while making it onClick and giving a unique key.
function loadAnnouncements() {
  return data.map(data => <Announcement onClick={() => onAnnouncementClick(data.id)} key={data.id}  {...data} />)
}

//function for on click of announcements.
function onAnnouncementClick(id) {
  //update read in the announcement
  //updateRead(id)

  // Navigate to new page with this id
  let path = "/Announcements/" + id;
  nav(path);
}
  return (
    <div className="content">
      <div>
        <h1>Announcements</h1>
        {loadAnnouncements()}
      </div>
    </div>
  );
};

export default AnnouncementsPage;