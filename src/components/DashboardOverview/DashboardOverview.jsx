import "./DashboardOverview.scss";
import Ticket from "../Ticket/Ticket";
import DetailedTicket from "../DetailedTicket/DetailedTicket";
import React, { useState } from "react";
import GridMenu from "../../assets/images/menu-grid.png";
import ListMenu from "../../assets/images/bullet-list.png";
import Filter from "../../assets/images/Filter.png";

const DashboardOverview=()=>{




    const [showPopUp, setShowPopUp] = useState(false);

    
   const ticketColorBarOrange= "#ff8000";
    
    const ids = [1, 2, 3, 4, 5];
  
    const togglePopUp = () => {
      setShowPopUp(!showPopUp);
    };
  const dashboardOverviewJSX =ids.map((index) => (
    <div onClick={togglePopUp} key={"ticket" + index}>
 <Ticket category="sickness/absence" color={ticketColorBarOrange} /> 

  
    </div>
    ));
   
    return (
      <div className="my-tickets-board">
        <div className="my-tickets-board__modal">
          {showPopUp && <DetailedTicket togglePopUp={togglePopUp} />}
        </div>
        <div className="my-tickets-board__top">
          <div className="my-tickets-board__top__header">
            <div className="my-tickets-board__top__header-title">Dashboard </div>
            <div className="my-tickets-board__top__header-options" /* onClick={handleClick} */>
            <div  className="my-tickets-board__top__header-options-selected"> Overview  </div> 
          <div className="my-tickets-board__top__header-options-unselected" > / Status </div>
          </div>
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
          <p className="my-tickets-board__main-header">Marketing</p>
          {dashboardOverviewJSX}
          <p className="my-tickets-board__main-header">Holiday</p>
          {dashboardOverviewJSX}
          <p className="my-tickets-board__main-header">Sickness/Absence</p>
          {dashboardOverviewJSX}
          <p className="my-tickets-board__main-header">Payroll</p>
          {dashboardOverviewJSX}
        
        
        </div>
        <div className="my-tickets-board__add-ticket">Add Ticket</div>
      </div>
    );
};
export default DashboardOverview;