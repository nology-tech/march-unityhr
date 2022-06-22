import "./Dashboard.scss";
import Ticket from "../../components/Ticket/Ticket";
import DetailedTicket from "../../components/DetailedTicket/DetailedTicket";
import React, { useState } from "react";
import GridMenu from "../../assets/images/menu-grid.png";
import ListMenu from "../../assets/images/bullet-list.png";
import Filter from "../../assets/images/Filter.png";
import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
import DashboardStatus from "../../components/DashboardStatus/DashboardStatus";

const Dashboard=()=>{




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
   
    return (<div>
     <div > <DashboardOverview/></div>
   <div> <DashboardStatus/></div>
  
  
 
     </div>
    );
};
export default Dashboard;