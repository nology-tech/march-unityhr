import "./NotificationList.scss";
import React from "react";
import Notification from "../../components/Notification/Notification";
import employees from "../../data/employee";


const NotificationList = () => {
  // images to be updated
  // list only 15 latest notifications 
  const notificationJSX = employees.map((employee, index) => (
    <Notification
      userName={employee.userName}
      ticketTitle={employee.ticketTitle}
      dateTime={employee.dateTime}
      isRead={employee.commentIsRead}
    />
  ));

  return <div>{notificationJSX}</div>;
};

export default NotificationList;

// --------------------------------------------------------------------



// unread notification toggle with blue dot






// time display different format in the list view
// fix the time display
// --------------------------------------------------------------------

// Clicking anywhere in this area (between the horizontal lines) will toggle the dropdown menu
// x- click to close (toggle)

// show comments , button ....to reply to the comments, text box to add comment + add comment function

// ---------------------------------------------------------------------------------
