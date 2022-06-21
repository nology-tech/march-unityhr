import "./MyTicketsBoard.scss";
import Ticket from "../../components/Ticket/Ticket";
import DetailedTicket from "../../components/DetailedTicket/DetailedTicket";
import React, { useState } from "react";
import CreateTicket from "../../components/CreateTicket/CreateTicket";


const MyTicketsBoard = () => {
  const [showPopUp, setShowPopUp] = useState(false);
<<<<<<< HEAD
  const [showCreateTicket, setShowCreateTicket] = useState(false);
  const ticketColorBarOrange = "#ff8000";
=======
  const ticketColorBarOrange="#ff8000";
  
>>>>>>> 71770d01be8b9d945b1a6eb97e96fbdffc89d116
  const ids = [1, 2, 3, 4, 5];

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const toggleTicket = () => {
    setShowCreateTicket(!showCreateTicket);
  };

  const ticketsListJSX = ids.map((index) => (
    <div onClick={togglePopUp} key={"ticket" + index}>
      <Ticket category="Sickness/Absence" color={ticketColorBarOrange} />
    </div>
  ));

  return (
    <div className="my-tickets-board">
      <div className="my-tickets-board__modal">
        {showPopUp && <DetailedTicket togglePopUp={togglePopUp} />}
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
        {ticketsListJSX}
      </div>
      <div className="my-tickets-board__add-ticket" onClick={toggleTicket}>
        Add Ticket
      </div>
      <div className="my-tickets-board__add-ticket-create">
        {showCreateTicket && <CreateTicket toggleTicket={toggleTicket} />}
      </div>
    </div>
  );
};

export default MyTicketsBoard;
