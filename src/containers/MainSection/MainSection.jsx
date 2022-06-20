import "./MainSection.scss";
import Menu from "../../components/Menu/Menu";
import MyTicketsBoard from "../MyTicketsBoard/MyTicketsBoard";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import NotificationBoard from "../NotificationBoard/NotificationBoard";
// import EmployeeList from "../../components/EmployeeList/EmployeeList"
// import SettingsMenu from "../../components/SettingsMenu/SettingsMenu";

const MainSection = () => {
  return (
    <div className="main-section">
        <Menu className="main-section__menu" />
        <Outlet />
    </div>
  );
};

export default MainSection;
