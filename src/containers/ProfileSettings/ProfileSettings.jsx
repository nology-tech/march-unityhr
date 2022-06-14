import React from "react";
import { useState } from "react";
import "./ProfileSettings.scss";
import Employee from "../../assets/images/profile_picture.png";
import Edit from "../../assets/images/edit-pencil.png";
import Return from "../../assets/images/return.png";
import ProfileEdit from "../../assets/images/profile_edit.png";
import UploadImage from "../../components/UploadImage/UploadImage";

const ProfileSettings = () => {
  const [disableSection, setDisableSection] = useState(true);
  const [showEdit, setShowEdit] = useState(true);
  const [showReturn, setShowReturn] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const handleImageEdit = () => {
    if (showUpload === true) {
      setShowUpload(showUpload);
    }
    setShowUpload(!showUpload);
  };

  const handleEdit = () => {
    setShowEdit(false);
    setShowReturn(true);
    setDisableSection(!disableSection);
  };

  const handleSubmit = () => {
    setShowReturn(false);
    setShowEdit(true);
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
              onClick={handleImageEdit}
            />
          </div>

          <div className="profile-settings__desc">
            {" "}
            <p className="profile-settings__desc--name">Name (Database)</p>
            <p className="profile-settings__desc--job">JobTitle (Database)</p>
            <p className="profile-settings__desc--department">
              Department (Database)
            </p>
            <div>{showUpload && <UploadImage />}</div>
          </div>
        </div>
      </div>
      <div className="profile-settings__employee">
        <div className="profile-settings__employee--pronoun">
          <p>Pronoun</p>
          <textarea
            rows="2"
            cols="35"
            disabled={disableSection}
            className="profile-settings__employee--dataP"
          ></textarea>
          <div className="profile-settings__employee--set">
            {showEdit && (
              <img
                className="profile-settings__employee--set--edit"
                src={Edit}
                alt="Edit"
                onClick={handleEdit}
              />
            )}
            {showReturn && (
              <img
                className="profile-settings__employee--set--return"
                src={Return}
                alt="Return"
                onClick={handleSubmit}
              />
            )}
          </div>
        </div>
        <div className="profile-settings__employee--firstname">
          <p>First Name</p>
          <textarea
            rows="2"
            cols="35"
            type="text"
            disabled={disableSection}
            className="profile-settings__employee--dataF"
          ></textarea>
          <div className="profile-settings__employee--set">
            {showEdit && (
              <img
                className="profile-settings____employee--set--edit"
                src={Edit}
                alt="Edit"
                onClick={handleEdit}
              />
            )}
            {showReturn && (
              <img
                className="profile-settings__employee--set--return"
                src={Return}
                alt="Return"
                onClick={handleSubmit}
              />
            )}
          </div>
        </div>
        <div className="profile-settings__employee--lastname">
          <p>Last Name</p>
          <textarea
            rows="2"
            cols="35"
            disabled={disableSection}
            className="profile-settings__employee--dataL"
          ></textarea>
          <div className="profile-settings__employee--set">
            {showEdit && (
              <img
                className="profile-settings__employee--set--edit"
                src={Edit}
                alt="Edit"
                onClick={handleEdit}
              />
            )}
            {showReturn && (
              <img
                className="profile-settings__employee--set--return"
                src={Return}
                alt="Return"
                onClick={handleSubmit}
              />
            )}
          </div>
        </div>
        <div className="profile-settings__employee--address">
          <p>Address:</p>
          <textarea
            rows="5"
            cols="35"
            disabled={disableSection}
            className="profile-settings__employee--dataA"
          ></textarea>
          <div className="profile-settings__employee--set">
            {showEdit && (
              <img
                className="profile-settings__employee--set--edit"
                src={Edit}
                alt="Edit"
                onClick={handleEdit}
              />
            )}
            {showReturn && (
              <img
                className="profile-settings__employee--set--return"
                src={Return}
                alt="Return"
                onClick={handleSubmit}
              />
            )}
          </div>
        </div>
        <div className="profile-settings__employee--mobile">
          <p>Mobile Number </p>
          <textarea
            rows="2"
            cols="35"
            disabled={disableSection}
            className="profile-settings__employee--dataM"
          ></textarea>
          <div className="profile-settings__employee--set">
            {showEdit && (
              <img
                className="profile-settings__employee--set-edit"
                src={Edit}
                alt="Edit"
                onClick={handleEdit}
              />
            )}
            {showReturn && (
              <img
                className="profile-settings__employee--set--return"
                src={Return}
                alt="Return"
                onClick={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileSettings;
