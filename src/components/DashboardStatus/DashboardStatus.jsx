import "./DashboardStatus.scss";
import Ticket from "../Ticket/Ticket";
import DetailedTicket from "../DetailedTicket/DetailedTicket";
import React, { useState } from "react";
import GridMenu from "../../assets/images/menu-grid.png";
import ListMenu from "../../assets/images/bullet-list.png";
import Filter from "../../assets/images/Filter.png";

const DashboardStatus=()=>{




    
  const [showPopUp, setShowPopUp] = useState(false);

  /* const ticketColor= [
      {color: "#ff8000",
      category:"Sickness / Absence"},
      {color: " #57ffd7",
      category:"Marketing"},
      {color: "#16a6f8",
      category: "Payroll"},
      {color: "#0ab9c5",
      category:"Holiday"},
  ] ;
  */
 const ticketColorBarOrange= "#ff8000";
  
  const ids = [1, 2, 3, 4, 5];

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };
const dashboardStatusJSX =ids.map((index) => (
  <div onClick={togglePopUp} key={"ticket" + index}>
<Ticket category="sickness/absence" color={ticketColorBarOrange} /> 

  {/* /* const workspaceTicketsJSX = ids.map((index) => (
    <div onClick={togglePopUp} key={"ticket" + index}>
       <Ticket category="sickness/absence" color={ticketColorBarOrange} /> */}
     {/*  <Ticket category="sickness/absence" color={ticketColor.color[0]} /> */}
 {/*      <Ticket category="sickness/absence" color={ticketColorBarOrange} /> */}
    
  </div>
  ));
 
  return (
    <div className="my-tickets-board">
      <div className="my-tickets-board__modal">
        {showPopUp && <DetailedTicket togglePopUp={togglePopUp} />}
      </div>
      <div className="my-tickets-board__top">
        <div className="my-tickets-board__top__header">
          <div className="my-tickets-board__top__header-title">Dashboard</div>
          <div className="my-tickets-board__top__header-options" /* onClick={handleClick} */>
            <div  className="my-tickets-board__top__header-options-unselected"> Overview  </div> 
          <div className="my-tickets-board__top__header-options-selected" > / Status </div>
          </div>
         {/*  <div>
          <h6 className="my-tickets-board__top__header-options">Overview  /</h6> 
        <h6>Status</h6>
        </div> */}
        </div>
        <div className="my-tickets-board__top__GridMenu">
          <img src={GridMenu} alt="GridMenu"></img>
        </div>
        <div className="my-tickets-board__top__ListMenu">
          <img src={ListMenu} alt="ListMenu"></img>
        </div>
        <div className="my-tickets-board__top__filters">
          
          <img className="" src={Filter} alt="Filter"></img>
         
          Filters
        </div>
      </div>
      <div className="my-tickets-board__main">
        <p className="my-tickets-board__main-header">Unassigned</p>
        <p className="my-tickets-board__main-header">Pending with HR</p>
        <p className="my-tickets-board__main-header">Pending with employee</p>
        <p className="my-tickets-board__main-header">Resolved</p>
      
        {dashboardStatusJSX}
      </div>
      <div className="my-tickets-board__add-ticket">Add Ticket</div>
    </div>
  );
};
export default DashboardStatus;