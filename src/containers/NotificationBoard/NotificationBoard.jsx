import "./NotificationBoard.scss";
import React from "react";
import Notification from "../../components/Notification/Notification";

const NotificationBoard = () => {
  // unread notifications #
  console.log("Hello");
  return (
    <div className="notifications-container">
      <h2 className="notifications-container__heading">
        Recent Notifications (2)
      </h2>
      <Notification />
    </div>
  );
};

export default NotificationBoard;
