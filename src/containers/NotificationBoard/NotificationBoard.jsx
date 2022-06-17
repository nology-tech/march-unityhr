import "./NotificationBoard.scss";
import React from "react";
import NotificationList from "../NotificationList/NotificationList";
import employees from "../../data/employee";

const NotificationBoard = () => {
  

  const unreadNotifications = employees.filter(
    (employee) => employee.commentIsRead === "true"
  ).length;
 
  return (
    <div className="notificationBoard">
      <div className="notificationBoard__container">
        <h2 className="notificationBoard__container__heading">
          Recent Notifications ({unreadNotifications})
        </h2>
        <div className="notificationBoard__container__listOfNotifications">
          <NotificationList />
        </div>
      </div>
    </div>
  );
};

export default NotificationBoard;
