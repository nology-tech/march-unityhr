import React from "react";
import "./SettingsMenu.scss";

import Display from "../../assets/images/display.png";
import Profile from "../../assets/images/users-employees.png";
import Login from "../../assets/images/login.png";
import Arrow from "../../assets/images/arrow.PNG";

const Settings = () => {
  return (
    <div className="setting-section">
      <h3 className="setting-section__heading">Settings</h3>
      <div className="setting-section__item">
        <img className="setting-section__image" src={Profile} alt="Profile" />
        <p className="setting-section__item--title">Profile</p>
        <img
          className="setting-section__image--arrow"
          src={Arrow}
          alt="Arrow"
        />
      </div>

      <div className="setting-section__item">
        {" "}
        <img className="setting-section__image" src={Login} alt="Login" />
        <p className="setting-section__item--title">Login</p>
        <img
          className="setting-section__image--arrow"
          src={Arrow}
          alt="Arrow"
        />
      </div>
      <div className="setting-section__item">
        {" "}
        <img className="setting-section__image" src={Display} alt="Display" />
        <p className="setting-section__item--title">Display</p>
        <img
          className="setting-section__image--arrow"
          src={Arrow}
          alt="Arrow"
        />
      </div>
    </div>
  );
};

export default Settings;
