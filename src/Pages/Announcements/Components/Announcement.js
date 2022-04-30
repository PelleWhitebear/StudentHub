import "../Styles/Announcements.css";

function Announcement (props) {
  //constant for different values of the announcements(props)
  const {title, message, sender, isRead} = props;
  

    return (
      <>
      {isRead && 
      <div onClick={props.onClick} className="BorderRead" >
        <h2 className="Titelt">{title} - {sender}</h2>
        <p>{message}</p>
        </div>
        }
      {!isRead &&
       <div onClick={props.onClick} className="BorderUnRead" > 
        <h2 className="Titelf">{title} - {sender}</h2>
        <p>{message}</p>
        </div>
      }
      </>
    )
  };
  
  export default Announcement