import { useParams } from "react-router-dom";
import "./Styles/Announcement.css";
import { useEffect, useState } from "react";
import axios from 'axios';

const AnnouncementPage = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    },[])

    async function getData() {
        try{

        let {data} = await axios.get(`http://studenthub.bhsi.xyz/api/announcements/${id}`)
        setData(data)
        setLoading(false)

        }catch (error) { //catch if error in getting data.
            console.log(error);
        }

    }
  }

  return (
    <>

        
        {loading && <p>indlæser announcement..</p>}
        {!loading && <div>
            <h1>Announcement</h1>
            <div className="borderBox">
            <h3 className="title">{data.title}</h3>
            <h4 className="sender">{data.sender}</h4>
            <p>{data.message}</p>
            </div>
            </div>}
    </>
  );
};

export default AnnouncementPage;
