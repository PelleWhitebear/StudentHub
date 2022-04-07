import React, { useState } from "react";
import "../Styles/Announcements.css";

function Announcement (props) {
  //constant for different values of the announcements(props)
  const {id, read,} = props;
  const [boolean, setBoolean] =  useState(false)
  setBoolean(read)

    return (
       <div onClick={props.onClick} className="Border" > 
         <p>{id}</p>
            {/*<section className="Time">
            <p>{time}</p>
            </section>
            <br/>
            <section className="Titel">
            <h2>{title}</h2>
            </section>
            <br/>
    <p>{text}</p>*/}
      </div> 
    )
  };
  
  export default Announcement