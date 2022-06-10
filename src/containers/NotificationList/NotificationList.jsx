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
// unread notification toggle with blue dot
// number of unread notifications listed in heading

// images to be updated

// list only 15 latest notifications

// time display different format in the list view

// --------------------------------------------------------------------

// Clicking anywhere in this area (between the horizontal lines) will toggle the dropdown menu
// x- click to close (toggle)

// show comments , button ....to reply to the comments, text box to add comment + add comment function

// ---------------------------------------------------------------------------------
