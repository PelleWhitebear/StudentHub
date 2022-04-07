import { useParams } from "react-router-dom";
import "./Styles/Announcement.css";
import { useEffect, useState } from "react";
import axios from ('axios')

const AnnouncementPage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    },[])

    async function getData() {
        try{

        let {data} = await axios.get(`http://localhost:8080/api/announcements/${id}`)
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
            <h1>{data.id}</h1>
            <section className="borderBox">
            <p>{data.time}</p>
            <h3 className="title">{data.title}</h3>
            <p>{data.text}</p>
            </section>
            </div>}
    </>
);
  };

export default AnnouncementPage;