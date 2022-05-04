import { useParams } from "react-router-dom";
import { Paper } from "../../index";
import "./Styles/Announcement.css";
import { useEffect, useState } from "react";
import axios from 'axios';

const AnnouncementPage = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    })

    async function getData() {
        try{

        let {data} = await axios.get(`https://www.studenthub.bhsi.xyz/api/announcements/${id}`)
        setData(data)
        setLoading(false)

        }catch (error) { //catch if error in getting data.
            console.log(error);
        }
    }





  return (
    <>

        
        {loading && <p>indlæser announcement..</p>}
        {!loading && <div>
            <Paper>
            <h1>Announcement</h1>
            <div className="borderBox">
                <div className="item">
                    <p className="title">{data.title}</p>
                </div>
                <div className="item">
                    <p className="sender">{data.sender}</p>
                </div>
                <div className="item">
                    <p className="message">{data.message}</p>
                </div>
            </div>
            </Paper>
            </div>}
    </>
  );
};

export default AnnouncementPage;
