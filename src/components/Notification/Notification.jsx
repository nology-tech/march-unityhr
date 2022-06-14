import "./Notification.scss";
import arrowReplyButton from "../../assets/images/arrow-replyButton.png";
import downArrowHead from "../../assets/images/down-arrowHead.png";
import upArrowHead from "../../assets/images/up-arrowHead.png";
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
    setShowComments(!showComments);
  };
  console.log(showComments);

  let isReadNotificationJSX = "";

  if (isRead === "false") {
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
      <div onClick={handleClick}>
        <div className="container">
          <div className="container__notification">
            <div className="container__notification-arrow">
              {!showComments && (
                <img src={downArrowHead} alt="down-arrow-head" />
              )}
              {showComments && <img src={upArrowHead} alt="up-arrow-head" />}
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
        <div className="comments">
         <div className="comments__text"> {showComments && comment} </div>
          <div className="comments__button">{showComments && <button ><img src={arrowReplyButton}></img> Reply</button> }</div>
          <div className="comments__time">{showComments && <p>00/06/22 at {dateTime}</p>}</div>
          </div>
        <div className="line"> </div>
      </div>in 
    </section>
  );
};

export default Notification;
