import React from "react";
import { useState } from "react";
import "./ProfileSettings.scss";
import Employee from "../../assets/images/profile_picture.png";
import Edit from "../../assets/images/edit-pencil.png";
import Return from "../../assets/images/return.png";
import ProfileEdit from "../../assets/images/profile_edit.png";

const ProfileSettings = () => {
  const [disableSection, setDisableSection] = useState(true);

  const handleDisableSection = () => {
    setDisableSection(!disableSection);
  };
  return (
    <div className="profile-settings">
      <div className="profile-settings__details">
        <div>
          <h2 className="profile-settings__details--heading">
            Profile Details
          </h2>
        </div>
        <div className="profile-settings__info">
          <div className="profile-settings__overlay">
            <img
              className="profile-settings__image"
              src={Employee}
              alt="Login"
            />
            <img
              className="profile-settings__edit"
              src={ProfileEdit}
              alt="Login"
            />
          </div>

          <div className="profile-settings__desc">
            {" "}
            <p className="profile-settings__desc--name">Name (Database)</p>
            <p className="profile-settings__desc--job">JobTitle (Database)</p>
            <p className="profile-settings__desc--department">
              Department (Database)
            </p>
          </div>
        </div>
      </div>
      <div className="profile-settings__employee">
        <div className="profile-settings__employee--pronoun">
          <p>Pronoun</p>
          <textarea
            disabled={disableSection}
            className="profile-settings__employee--dataP"
          ></textarea>
          <img
            className="profile-settings__employee-edit"
            src={Edit}
            alt="Edit"
            onClick={handleDisableSection}
          />
          <img
            className="profile-settings__employee-return"
            src={Return}
            alt="Return"
          />
        </div>
        <div className="profile-settings__employee--firstname">
          <p>First Name</p>
          <textarea
            type="text"
            disabled={disableSection}
            className="profile-settings__employee--dataF"
          ></textarea>
          <img
            className="profile-settings____employee-edit"
            src={Edit}
            alt="Edit"
            onClick={handleDisableSection}
          />
          <img
            className="profile-settings__employee-return"
            src={Return}
            alt="Return"
          />
        </div>
        <div className="profile-settings__employee--lastname">
          <p>Last Name</p>
          <textarea
            disabled={disableSection}
            className="profile-settings__employee--dataL"
          ></textarea>
          <img
            className="profile-settings__employee-edit"
            src={Edit}
            alt="Edit"
            onClick={handleDisableSection}
          />
          <img
            className="profile-settings__employee-return"
            src={Return}
            alt="Return"
          />
        </div>
        <div className="profile-settings__employee--address">
          <p>Address:</p>
          <textarea
            rows="4"
            cols="30"
            disabled={disableSection}
            className="profile-settings__employee--dataA"
          ></textarea>
          <img
            className="profile-settings__employee-edit"
            src={Edit}
            alt="Edit"
            onClick={handleDisableSection}
          />
          <img
            className="profile-settings__employee-return"
            src={Return}
            alt="Return"
          />
        </div>
        <div className="profile-settings__employee--mobile">
          <p>Mobile Number </p>
          <textarea
            disabled={disableSection}
            className="profile-settings__employee--dataM"
          ></textarea>
          <img
            className="profile-settings__employee-edit"
            src={Edit}
            alt="Edit"
            onClick={handleDisableSection}
          />
          <img
            className="profile-settings__employee-return"
            src={Return}
            alt="Return"
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileSettings;
