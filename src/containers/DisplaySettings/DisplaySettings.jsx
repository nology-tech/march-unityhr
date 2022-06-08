import "./DisplaySettings.scss";

import Employee from "../../assets/images/employee.png";
import Dark from "../../assets/images/dark-mode.png";
import Mode from "../../assets/images/mode-change-rectangle.png";
import Light from "../../assets/images/light-mode.png";
import ButtonMode from "../../assets/images/button-change-mode.png";
import Return from "../../assets/images/return.png";

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
          <img className="display-settings__image" src={Employee} alt="Login" />
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
        <div className="display-settings__employee--pronoun">
          <p>Theme</p>
          <div className="display-settings__employee--dataP">
            Light/Dark Mode
          </div>
          <img
            className="display-settings__employee--light"
            src={Light}
            alt="Light"
          />
          {/* <img
            className="display-settings__employee--button"
            src={ButtonMode}
            alt="Mode"
          />
          <img
            className="display-settings__employee--mode"
            src={Mode}
            alt="Mode"
          /> */}

          <div>
            <img
              className="display-settings__employee--mode"
              src={Mode}
              alt=""
            />
            <img
              className="display-settings__employee--button"
              src={Light}
              alt=""
            />
          </div>

          <img
            className="display-settings__employee--dark"
            src={Dark}
            alt="Dark"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplaySettings;
