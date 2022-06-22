import "./Dashboard.scss";
import React, { useState } from "react";
import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
import DashboardStatus from "../../components/DashboardStatus/DashboardStatus";

const Dashboard=()=>{




    const [showPopUp, setShowPopUp] = useState(false);


    const togglePopUp = () => {
      setShowPopUp(!showPopUp);
    };
  
    

    return (<div>
     <div > <DashboardOverview/></div>
   <div> <DashboardStatus/></div>
  
  
 
     </div>
    );
};
export default Dashboard;