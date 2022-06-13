import "./NotificationBoard.scss";
import React from "react";
import NotificationList from "../NotificationList/NotificationList";

const NotificationBoard = () => {
  return (
    <div className="notificationBoard">
      <div className="notificationBoard__container">
        <h2 className="notificationBoard__container__heading">
          Recent Notifications (2)
        </h2>
        <div className="notificationBoard__container__listOfNotifications">
          <NotificationList />
        </div>
      </div>
    </div>
  );
};

export default NotificationBoard;
