import "./Dashboard.scss";
import React from "react";
import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
import DashboardStatus from "../../components/DashboardStatus/DashboardStatus";

const Dashboard = () => {
  return (
    <div>
      <div>
        {" "}
        <DashboardOverview />
      </div>
      <div>
        {" "}
        <DashboardStatus />
      </div>
    </div>
  );
};
export default Dashboard;
