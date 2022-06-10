import "./NotificationList.scss";
import React from "react";
import Notification from "../../components/Notification/Notification";
import employees from "../../data/employee";

const NotificationList = () => {
  const notificationJSX = employees.map((employee, index) => (
    <Notification
      userName={employee.userName}
      ticketTitle={employee.ticketTitle}
      dateTime={employee.dateTime}
    />
  ));

  return <div>{notificationJSX}</div>;
};

export default NotificationList;

// --------------------------------------------------------------------

// 1.	User Image :
// 2.	User name :
// 3.	Ticket title
// 4.	date & time

// images to be updated
// unread with blue dot / number of unread notifications listed in heading
// time display in the list view

// --------------------------------------------------------------------

// Clicking anywhere in this area (between the horizontal lines) will toggle the dropdown menu
// also button ....to reply to the comments

// -> 	comment

// ---------------------------------------------------------------------------------
