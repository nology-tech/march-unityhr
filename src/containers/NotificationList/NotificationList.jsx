import "./NotificationList.scss";

import Notification from "../../components/Notification/Notification";
import employees from "../../data/employee";
import React from "react";

const NotificationList = () => {
  // list only 15 latest notifications
  // images to be updated

  const notificationJSX = employees.map((employee) => (
    <Notification
      userName={employee.userName}
      ticketTitle={employee.ticketTitle}
      dateTime={employee.dateTime}
      isRead={employee.commentIsRead}
      ticketLink={employee.ticketLink}
      comment={employee.comment}
    />
  ));

  return <div>{notificationJSX}</div>;
};

export default NotificationList;

// --------------------------------------------------------------------

// unread notification toggle with blue dot

// fix the time display

// time display different format in the list view

// --------------------------------------------------------------------

// Clicking anywhere in this area (between the horizontal lines) will toggle the dropdown menu
// x- click to close (toggle)

// show comments , button ....to reply to the comments, text box to add comment + add comment function

// ---------------------------------------------------------------------------------
