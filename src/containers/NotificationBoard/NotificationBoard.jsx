import "./NotificationBoard.scss";
import React from "react";
import Notification from "../../components/Notification/Notification";
import employees from "../../data/employee";
import NotificationList from "../NotificationList/NotificationList";

const NotificationBoard = () => {
  {
    /* // unread notication !! */
  }

  return (
    <div className="notifications-container">
      <h2 className="notifications-container__heading">
        Recent Notifications (2)
      </h2>
      <NotificationList />
    </div>
  );
};

export default NotificationBoard;
