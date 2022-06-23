import "./NotificationList.scss";

import Notification from "../../components/Notification/Notification";
import employees from "../../data/employee";
import React from "react";

const NotificationList = () => {
  // list only 15 latest notifications  - Later after API
  // images to be updated  - Later after API

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

// fix the time display

// time display different format in the list view - Later after API

// --------------------------------------------------------------------

// show comments , button ....to reply to the comments, text box to add comment + add comment function

// ---------------------------------------------------------------------------------
