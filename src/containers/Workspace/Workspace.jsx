import "./Workspace.scss";
import Ticket from "../../components/Ticket/Ticket";
import DetailedTicket from "../../components/DetailedTicket/DetailedTicket";
import React, { useState } from "react";
import GridMenu from "../../assets/images/menu-grid.png";
import ListMenu from "../../assets/images/bullet-list.png";
import Filter from "../../assets/images/Filter.png";

const Workspace = (props) => {
  const { color, category } = props;

  const [showPopUp, setShowPopUp] = useState(false);

  const ticketColorBarBlue = "#16a6f8";
  const ids = [1, 2, 3, 4, 5];

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const workspaceTicketsJSX = ids.map((index) => (
    <div onClick={togglePopUp} key={"ticket" + index}>
      <Ticket category="Payroll" color={ticketColorBarBlue} />
    </div>
  ));

  return (
    <div className="my-tickets-board">
      <div className="my-tickets-board__modal">
        {showPopUp && <DetailedTicket togglePopUp={togglePopUp} />}
      </div>
      <div className="my-tickets-board__top">
        <div className="my-tickets-board__top__header">
          <h3>Workspace</h3>
        </div>
        <div className="my-tickets-board__top__GridMenu">
          <img src={GridMenu} alt="GridMenu"></img>
        </div>
        <div className="my-tickets-board__top__ListMenu">
          <img src={ListMenu} alt="ListMenu"></img>
        </div>
        <div className="my-tickets-board__top__filters">
          {/* <button className="my-tickets-board__top__filters-button"> */}
          <img className="" src={Filter} alt="Filter"></img>
          {/* </button> */}
          Filters
        </div>
      </div>
      <div className="my-tickets-board__main">
        <div className="my-tickets-board__main-titles">
          <p className="my-tickets-board__main-header">Backlog</p>
          <p className="my-tickets-board__main-header">Unresolved</p>
          <p className="my-tickets-board__main-header">In Review</p>
          <p className="my-tickets-board__main-header">Resolved</p>
          <p className="my-tickets-board__main-header">Archive</p>
        </div>
        <div className="my-tickets-board__main-tickets">
          {" "}
          {workspaceTicketsJSX}
        </div>
      </div>
      <div className="my-tickets-board__add-ticket">Add Ticket</div>
    </div>
  );
};
export default Workspace;
