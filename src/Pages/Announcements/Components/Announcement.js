import React, { useState } from "react";
import "../Styles/Announcements.css";

function Announcement (props) {
  //constant for different values of the announcements(props)
  const {id} = props;
  const [boolean, setBoolean] =  useState(false);
  //setBoolean(isRead)

    return (
      <>
      {boolean && 
      <div onClick={props.onClick} className="BorderRead" >
        <p>{id}</p>
        </div>}
      {!boolean &&
       <div onclick={props.onClick} className="BorderUnRead" > 
         <p>{id}</p>
      </div> }
      </>
    )
  };
  
  export default Announcement