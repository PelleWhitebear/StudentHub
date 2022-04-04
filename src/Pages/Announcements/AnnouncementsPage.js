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

  useEffect(() => {
    getAnnouncements();
  }, []) 

  async function getAnnouncements() {
    
    try {
      
      // real request (axios)
      let { data } = await axios.get("http://localhost:8080/api/announcements");
      setAnnouncements(data);
    
      // Fake request
      /*setTimeout(() => {
        //list of announcements
        let data = [
          {
              id: 1,
              title: "Class meeting",
              time: 12 + ":" + 30,
              type: "meeting",
              text: "Hello we have a meeting today"
          },
          {
              id: 2,
              title: "Parent meeting",
              time: 11 + ":" + 30,
              type: "meeting",
              text: "Hello we have a meeting tomorrow"
          },
          {
              id: 3,
              title: "Fun meeting",
              time: 10 + ":" + 30,
              type: "meeting",
              text: "Hello we have a meeting tomorrow, remember to bring you glasses and have some fun in the sea and you should also give me money"
          }
        ]
        //sets data in a useState
        setAnnouncements(data);

      }, 20) //load time*/

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