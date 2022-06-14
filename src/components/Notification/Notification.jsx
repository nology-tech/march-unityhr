import "./Notification.scss";

import downArrowHead from "../../assets/images/down-arrowHead.png";
import userImage from "../../assets/images/user-image-GregSauer.png";
import blueCircle from "../../assets/images/blue-circle.png";
import React, { useState } from "react";

const Notification = ({
  userName,
  ticketTitle,
  dateTime,
  isRead,
  ticketLink,
  comment,
}) => {
  const [showComments, setShowComments] = useState(false);
  const handleClick = () => {
    console.log("HELLO IT WORKS !");
    setShowComments(!showComments);
    // if (showComments === false) {
    //   setShowComments(showComments);
    // } else {
    //   setShowComments(!showComments);
    // }
  };
  console.log(showComments);

  let isReadNotificationJSX = "";

  if (isRead === "true") {
    isReadNotificationJSX = (
      <div>
        <img
          className="container__notification-unread"
          src={blueCircle}
          alt="unread notification"
        />
      </div>
    );
  } else {
    isReadNotificationJSX = "";
  }

  return (
    <section className="notification-section">
      <div onclick={handleClick}>
        <div className="container">
          <div className="container__notification">
            <div className="container__notification-arrow">
              <img src={downArrowHead} alt="down-arrow-head" />
            </div>
            <div className="container__notification-images">
              {" "}
              {isReadNotificationJSX}
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
                    href={ticketLink}
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
        {/* {showComments && <div onclick={handleClick}> {comment}</div>} */}
        {/* <div onclick={handleClick}>{showComments && { comment }}</div> */}
        {showComments && { comment }}
        <div className="line"> </div>
      </div>
    </section>
  );
};

export default Notification;
