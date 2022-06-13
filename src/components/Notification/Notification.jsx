import "./Notification.scss";

import downArrowHead from "../../assets/images/down-arrowHead.png";
import userImage from "../../assets/images/user-image-GregSauer.png";
import blueCircle from "../../assets/images/blue-circle.png";
import React, {useEffect } from "react";

const Notification = ({ userName, ticketTitle, dateTime, isRead }) => {
  
 /*  const [showAsUnread, setShowAsUnread]=useState(false); */
 
  console.log(userName);
  console.log(ticketTitle);
  console.log(dateTime);
   // read the record for the comment 
   /* const toggleNotification =()=>{
    if (isRead="true") {
    setShowAsUnread(showAsUnread)
    }
  } */
  return (
    <section className="notification-section">
      <div className="container">
        <div className="container__notification">
          <div className="container__notification-arrow">
            <img src={downArrowHead} alt="down-arrow-head" />
          </div>
          <div className="container__notification-images">
            {" "}
            <img
              className="container__notification-unread"
              src={blueCircle}
              alt="unread notification"
            />{" "}
            <img
              className="container__notification-userPic"
              src={userImage}
              alt="userPic"
            />
          </div>
          <div className="container__notification-details">
            <div className="container__notification-details-username">
              {userName}
            </div>
            <div className="container__notification-details-comments">
              <p>
                Commented on your request '
                <a
                  className="container__notification-details-ticketLink"
                  href="https://github.com/nology-tech/march-unityhr"
                >
                  {ticketTitle}
                </a>{" "}
                '{" "}
              </p>
            </div>
          </div>
          <div className="container__time">{dateTime}</div>
        </div>
      </div>
      <div className="line"> </div>
    </section>
  );
};

export default Notification;
