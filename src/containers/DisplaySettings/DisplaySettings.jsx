import "./DisplaySettings.scss";

import React from "react";
import Employee from "../../assets/images/profile_picture.png";
import Dark from "../../assets/images/dark-mode.png";
import LightSun from "../../assets/images/light_mode_sun.png";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import ProfileEdit from "../../assets/images/profile_edit.png";

const DisplaySettings = () => {
  return (
    <div className="display-settings">
      <div className="display-settings__details">
        <div>
          <h2 className="display-settings__details--heading">
            Display Settings
          </h2>
        </div>
        <div className="display-settings__info">
          <div className="display-settings__overlay">
            <img
              className="display-settings__image"
              src={Employee}
              alt="Login"
            />
            <img
              className="display-settings__edit"
              src={ProfileEdit}
              alt="Login"
            />
          </div>

          <div className="display-settings__desc">
            {" "}
            <p className="display-settings__desc--name">Name (Database)</p>
            <p className="display-settings__desc--job">JobTitle (Database)</p>
            <p className="display-settings__desc--department">
              Department (Database)
            </p>
          </div>
        </div>
      </div>

      <div className="display-settings__employee">
        <div className="display-settings__employee--theme">
          <p>Theme</p>
          <div className="display-settings__employee--dataP">
            Light/Dark Mode
          </div>
          <div className="display-settings__employee--mode">
            <img
              className="display-settings__employee--mode--light"
              src={LightSun}
              alt="Light"
            />
            <ToggleSwitch />
            <img
              className="display-settings__employee--mode--dark"
              src={Dark}
              alt="Dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySettings;
