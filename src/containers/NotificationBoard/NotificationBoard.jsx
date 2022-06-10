import "./NotificationBoard.scss";
import React from "react";
import Notification from "../../components/Notification/Notification";
import employees from "../../data/employee";
import NotificationList from "../NotificationList/NotificationList";

const NotificationBoard = () => {
  {
    /* // unread notifcation !! */
  }

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
