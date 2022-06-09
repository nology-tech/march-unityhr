import React from "react";
import { useState } from "react";
import "./Menu.scss";
import Ticket from "../../assets/images/ticket.png";
import Bell from "../../assets/images/bell.png";
import Employees from "../../assets/images/users-employees.png";
import Setting from "../../assets/images/setting.png";

const Menu = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="menu-section">
      <div className="menu-section__item menu-section__item--selected">
        <img src={Ticket} alt="Ticket" />
        <p>My Tickets</p>
      </div>
      <div className="menu-section__item">
        <img src={Bell} alt="Bell" />
        <p>Notifications</p>
      </div>
      <div className="menu-section__item">
        <img src={Employees} alt="Employees" />
        <p>Employees</p>
      </div>
      <div className="menu-section__item">
        <img src={Setting} alt="Settings" onClick={handleSettings} />
        <p>Settings</p>
      </div>
      <div>{showSettings}</div>
    </div>
  );
};

export default Menu;
