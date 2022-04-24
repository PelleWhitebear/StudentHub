import { useParams } from "react-router-dom";
import "./Styles/Announcement.css";
import { useEffect, useState } from "react";

const AnnouncementPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setTimeout(() => {
        let data = {
          id: id,
          title: "Class meeting",
          time: 12 + ":" + 30,
          type: "meeting",
          text: "Hello we have a meeting today",
        };
        setData(data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      //catch if error in getting data.
      console.log(error);
    }
  }

  return (
    <>
      <div className="minHeight">
        {loading && <p>indlæser announcement..</p>}
        {!loading && (
          <div>
            <h1>{data.id}</h1>
            <section className="borderBox">
              <p>{data.time}</p>
              <h3 className="title">{data.title}</h3>
              <p>{data.text}</p>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default AnnouncementPage;
