import "./Notification.scss";
import React from "react";

const Notification = () => {
  return (
    <section className="notification">
    <div className="container">
      <div className="container__notification">
        <div>arrow image</div>
        <div className="container__notification-details"> UserImage</div>
        <div className="container__notification-details-users">
          <div className="container__notification-details-username">
            User name
          </div>
          <div className="container__notification-details-comments">
            comments
          </div>
        
        </div>
        <div className="container__time">00:00</div>
      </div>
     
     
    </div>
    <div className="line"> </div>
     </section>

  );
};

export default Notification;
