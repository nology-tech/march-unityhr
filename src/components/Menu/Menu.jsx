import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import Ticket from "../../assets/images/ticket.png";
import Bell from "../../assets/images/bell.png";
import Employees from "../../assets/images/users-employees.png";
import Setting from "../../assets/images/setting.png";
import SettingsMenu from "../../components/SettingsMenu/SettingsMenu";

import Dashboard from "../../assets/images/dashboard.png";
import Workspace from "../../assets/images/request-workspace.png";

const Menu = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  let activeStyle = {
    backgroundColor: "#f0f1f1",
    color: "black",
  };

  //changes
  return (
    <div className="menu-section">
      <NavLink
        className="menu-section__item menu-section__item__link"
        to="/dashboard/tickets"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <img src={Ticket} alt="Ticket" />
        My Tickets
      </NavLink>
      <NavLink
        className="menu-section__item menu-section__item__link"
        to="/dashboard/notifications"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <img src={Bell} alt="Bell" />
        Notifications
      </NavLink>
      <NavLink
        className="menu-section__item menu-section__item__link"
        to="/dashboard/employees"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <img src={Employees} alt="Employees" />
        Employees
      </NavLink>

      <NavLink
        className="menu-section__item menu-section__item__link"
        to="/dashboard/settings"
        onClick={handleSettings}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <img src={Setting} alt="Settings" />
        Settings
      </NavLink>
      {showSettings && <SettingsMenu />}
    </div>
  );
};

export default Menu;
