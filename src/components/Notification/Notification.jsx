import "./Notification.scss";
import React from "react";

const Notification = () => {
  return (
    <div className="container">
      <div className="container__notification">
        <div>arrow image</div>
        <div className="container__notification-details">
          UserImage
          <div className="container__notification-details-users">
            <div>User name</div>
            <div>comments</div>
          </div>
        </div>
        <div>time</div>
      </div>
      <div className="line"> </div>
    </div>
  );
};

export default Notification;
