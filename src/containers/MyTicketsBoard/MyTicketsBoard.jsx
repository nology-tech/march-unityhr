import "./MyTicketsBoard.scss";
import Ticket from "../../components/Ticket/Ticket";
import DetailedTicket from "../../components/DetailedTicket/DetailedTicket";
import React, { useState } from "react";




const MyTicketsBoard = () => {

const [showPopUp, setShowPopUp] = useState(false);

const handleClick = () => {
  console.log("Here");
  setShowPopUp(!showPopUp);
}

  return (
    <div className="my-tickets-board">
      <div className="my-tickets-board__modal">
        {showPopUp && <DetailedTicket />}
      </div>
      <div className="my-tickets-board__top">
        <div className="my-tickets-board__top__header">
          <h3>My Tickets</h3>
        </div>
        <div className="my-tickets-board__top__schemas">Schemas</div>
        <div className="my-tickets-board__top__filters">Filters</div>
      </div>
      <div className="my-tickets-board__main">
        <p className="my-tickets-board__main-header">Unassigned</p>
        <p className="my-tickets-board__main-header">Pending with HR</p>
        <p className="my-tickets-board__main-header">Pending with Employee</p>
        <p className="my-tickets-board__main-header">Resolved</p>
        <div onClick={handleClick} >
        <Ticket id="id1" />
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <div className="my-tickets-board__add-ticket">Add Ticket</div>
    </div>
  );
};

export default MyTicketsBoard;
