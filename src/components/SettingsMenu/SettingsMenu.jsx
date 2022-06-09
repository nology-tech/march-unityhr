import React from "react";
import { useState } from "react";
import "./SettingsMenu.scss";
import Display from "../../assets/images/display.png";
import User from "../../assets/images/user.png";
import Login from "../../assets/images/login.png";
import Vector from "../../assets/images/Vector.png";
import ProfileSettings from "../../containers/ProfileSettings/ProfileSettings";
import LoginSettings from "../../containers/LoginSettings/LoginSettings";
import DisplaySettings from "../../containers/DisplaySettings/DisplaySettings";

const SettingsMenu = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showDisplay, setShowDisplay] = useState(false);

  const handleProfile = () => {
    if (showLogin === true) {
      setShowLogin(!showLogin);
    }
    if (showDisplay === true) {
      setShowDisplay(!showDisplay);
    }
    setShowProfile(!showProfile);
  };

  const handleLogin = () => {
    if (showProfile === true) {
      setShowProfile(!showProfile);
    }
    if (showDisplay === true) {
      setShowDisplay(!showDisplay);
    }
    setShowLogin(!showLogin);
  };

  const handleDisplay = () => {
    if (showProfile === true) {
      setShowProfile(!showProfile);
    }
    if (showLogin === true) {
      setShowLogin(!showLogin);
    }
    setShowDisplay(!showDisplay);
  };
  return (
    <div className="setting-section">
      <h3 className="setting-section__heading">Settings</h3>
      <div
        className="setting-section__profile setting-section__item--selected"
        onClick={handleProfile}
      >
        <img className="setting-section__image" src={User} alt="User" />
        <p className="setting-section__profile--title">Profile</p>
        <img
          className="setting-section__image--vector"
          src={Vector}
          alt="Vector"
        />
      </div>
      <div className="setting-section__login" onClick={handleLogin}>
        {" "}
        <img className="setting-section__image" src={Login} alt="Login" />
        <p className="setting-section__login--title">Login</p>
        <img
          className="setting-section__image--vector"
          src={Vector}
          alt="Vector"
        />
      </div>
      <div className="setting-section__display" onClick={handleDisplay}>
        {" "}
        <img className="setting-section__image" src={Display} alt="Display" />
        <p className="setting-section__display--title">Display</p>
        <img
          className="setting-section__image--vector"
          src={Vector}
          alt="Vector"
        />
      </div>
      <div>
        {showProfile && <ProfileSettings />}
        {showLogin && <LoginSettings />}
        {showDisplay && <DisplaySettings />}
      </div>
    </div>
  );
};
export default SettingsMenu;
